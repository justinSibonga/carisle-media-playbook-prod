---
description: How to contribute code to the project
---

# Contributing Guidelines

## Before You Start

1. Read the `.cursorrules` file to understand project conventions
2. Ensure you have the correct Node.js version installed
3. Run `npm install` to install dependencies

## Development Workflow

### Starting Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Creating a New Component

1. Create component file in appropriate directory:

   - UI primitives → `/src/components/ui/`
   - Feature components → `/src/components/[feature]/`

2. Follow the component template:

```tsx
import { cn } from "@/lib/utils";

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return <div className={cn("base-classes", className)}>{children}</div>;
}
```

3. Export from index file if applicable

### Creating a New Page

1. Create folder in `/src/app/` matching the desired URL path
2. Add `page.tsx` with the page component
3. Optionally add `layout.tsx`, `loading.tsx`, `error.tsx`

```tsx
// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}
```

## Code Quality Checks

// turbo-all
Run these before committing:

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build (ensures no build errors)
npm run build
```

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following project conventions
3. Run all quality checks
4. Commit with conventional commit messages
5. Push and create a pull request
6. Address any review feedback
