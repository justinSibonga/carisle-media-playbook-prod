const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const APP_DIR = path.join(SRC_DIR, 'app');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const OUTPUT_FILE = path.join(SRC_DIR, 'lib', 'search-index.ts');
const NAVIGATION_FILE = path.join(SRC_DIR, 'lib', 'navigation.ts');

// Helper to recursively find files
function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = path.resolve(dir, subdir);
    return fs.statSync(res).isDirectory() ? getFiles(res) : res;
  });
  return files.reduce((a, f) => a.concat(f), []);
}

// Helper to strip HTML/JSX tags and clean text
function cleanText(text) {
  return text
    // Remove import statements
    .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
    // Remove export statements
    .replace(/export\s+.*?\{.*?\};?/g, '')
    .replace(/export\s+function\s+\w+\(\)\s+\{/g, '')
    .replace(/export\s+default\s+function\s+\w+\(\)\s+\{/g, '')
    // Remove simple JSX tags but keep content
    .replace(/<[^>]+>/g, ' ')
    // Remove braces and common code symbols
    .replace(/[{}]/g, ' ')
    .replace(/className="[^"]*"/g, '')
    .replace(/const\s+\w+\s+=/g, '')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper to resolve component imports. Handles nested paths like
// "@/components/playbook/raci-chart/raci-chart-section" and files that live
// at <path>.tsx or <path>/index.tsx.
function resolveComponentContent(fileContent) {
  let content = fileContent;
  const importRegex = /import\s+.*?from\s+["']@\/components\/(.*?)["']/g;
  const seen = new Set();
  let match;

  while ((match = importRegex.exec(fileContent)) !== null) {
    const rel = match[1];
    if (seen.has(rel)) continue;
    seen.add(rel);

    const candidates = [
      path.join(COMPONENTS_DIR, `${rel}.tsx`),
      path.join(COMPONENTS_DIR, `${rel}.ts`),
      path.join(COMPONENTS_DIR, rel, 'index.tsx'),
      path.join(COMPONENTS_DIR, rel, 'index.ts'),
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        content += '\n' + fs.readFileSync(candidate, 'utf-8');
        break;
      }
    }
  }
  return content;
}

// Parse navigation.ts for metadata
function parseNavigation() {
  const navContent = fs.readFileSync(NAVIGATION_FILE, 'utf-8');
  const metadata = {};
  
  // Regex to match items: { name: "...", href: "...", keywords: [...] }
  // This is a simplified parser and assumes consistent formatting
  const itemRegex = /{\s*name:\s*"([^"]+)",\s*href:\s*"([^"]+)"(?:,\s*keywords:\s*\[(.*?)\])?/g;
  
  let match;
  while ((match = itemRegex.exec(navContent)) !== null) {
    const name = match[1];
    const href = match[2];
    const keywordsRaw = match[3] || '';
    const keywords = keywordsRaw
      .replace(/"/g, '')
      .split(',')
      .map(k => k.trim())
      .filter(k => k);

    let category = "General";
    if (href.startsWith("/playbook")) category = "Operational Playbook";
    if (href.startsWith("/scorecard")) category = "Role Score Card";

    metadata[href] = { name, category, keywords };
  }
  return metadata;
}

function generateIndex() {
  console.log('Generating search index...');
  const metadataMap = parseNavigation();
  const pages = getFiles(APP_DIR).filter(f => f.endsWith('page.tsx'));
  const searchIndex = [];

  for (const pagePath of pages) {
    // Determine href from path
    let relPath = path.relative(APP_DIR, pagePath).replace(/\\/g, '/');
    let href = '/' + relPath.replace('/page.tsx', '');
    if (href === '/page.tsx') href = '/'; // Root page

    // Read and process content
    const originalContent = fs.readFileSync(pagePath, 'utf-8');
    const fullContent = resolveComponentContent(originalContent);
    const cleanedContent = cleanText(fullContent);

    // Get metadata
    const meta = metadataMap[href] || { 
      name: href === '/' ? 'Home' : href.split('/').pop().replace(/-/g, ' '), 
      category: 'General', 
      keywords: [] 
    };

    // Combine content
    const finalContent = `${cleanedContent} ${meta.keywords.join(' ')}`;

    searchIndex.push({
      name: meta.name,
      href: href,
      category: meta.category,
      content: finalContent
    });
  }

  // Generate output file content
  const fileContent = `// Auto-generated search index
// Do not edit directly. Run 'npm run build-index' to update.

export interface SearchEntry {
  name: string;
  href: string;
  category: string;
  content: string;
}

export const SEARCH_INDEX: SearchEntry[] = ${JSON.stringify(searchIndex, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log(`Search index generated with ${searchIndex.length} pages.`);
}

generateIndex();
