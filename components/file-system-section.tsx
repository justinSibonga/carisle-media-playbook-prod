import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, FolderOpenIcon, Cancel01Icon, CheckmarkCircle01Icon, Alert01Icon } from "@hugeicons/core-free-icons";

export function FileSystemSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Where Things Live
        </h1>
        <p className="text-muted-foreground">
          Google Drive File System &amp; Naming Conventions
        </p>
      </div>

      {/* Section 1: Folder Structure */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          <span className="hidden">. </span>
          Folder Structure
        </h2>

        {/* Folder Tree Diagram */}
        <div className="bg-card border border-border rounded-lg p-5 font-mono text-sm mb-6">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4 text-accent" />
            <span>CM Clients</span>
          </div>
          <div className="ml-6 mt-2 border-l-2 border-border pl-4 space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4 text-accent" />
              <span>2026</span>
            </div>
            <div className="ml-6 border-l-2 border-border pl-4 space-y-2">
              <div className="flex items-center gap-2 text-primary font-medium">
                <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4 text-accent" />
                <span>[Client Name]</span>
              </div>
              <div className="ml-6 border-l-2 border-border pl-4 space-y-1.5 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>1-Assets</span>
                  <span className="text-xs opacity-60">(logo, brand, images)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>2-Strategy</span>
                  <span className="text-xs opacity-60">(proposals, plans)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>3-Deliverables</span>
                  <span className="text-xs opacity-60">(pages, emails, workflows)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>4-Client Inputs</span>
                  <span className="text-xs opacity-60">(from client)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>5-Training &amp; Docs</span>
                  <span className="text-xs opacity-60">(guides, recordings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={FolderOpenIcon} className="w-4 h-4" />
                  <span>6-Admin</span>
                  <span className="text-xs opacity-60">(contract, invoices)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Goes Where Table */}
        <h3>What Goes Where</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="w-36">Folder</th>
                <th>Contents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">1-Assets</td>
                <td>Logo files, brand colors, fonts, photos, headshots</td>
              </tr>
              <tr>
                <td className="font-medium">2-Strategy</td>
                <td>Proposal, strategy doc, funnel map, project scope</td>
              </tr>
              <tr>
                <td className="font-medium">3-Deliverables</td>
                <td>Landing page designs, email copy, workflow screenshots</td>
              </tr>
              <tr>
                <td className="font-medium">4-Client Inputs</td>
                <td>Onboarding form, testimonials, content from client</td>
              </tr>
              <tr>
                <td className="font-medium">5-Training &amp; Docs</td>
                <td>User guides, training recordings, handoff documentation</td>
              </tr>
              <tr>
                <td className="font-medium">6-Admin</td>
                <td>Contract, invoices, payment receipts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: File Naming Convention */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          <span className="hidden">. </span>
          File Naming Convention
        </h2>

        <div className="bg-muted/50 p-4 rounded-lg mb-6">
          <p className="text-sm my-0!">
            <strong className="text-primary">Format:</strong>{" "}
            <code className="bg-background px-2 py-1 rounded text-accent font-mono">
              YYYY-MM-DD_ClientAbbrev_Description_v#
            </code>
          </p>
        </div>

        {/* Examples Table */}
        {/* Good vs Bad Examples Comparison - Standardized Pattern */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Good Examples Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-accent text-accent-foreground px-4 py-3 font-medium flex items-center gap-2">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4" />
              Good Examples
            </div>
            <div className="bg-card p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-xs sm:text-sm">2026-01-15_XB_Homepage_v1.pdf</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-xs sm:text-sm">2026-01-20_XB_EmailSequence_v2.docx</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-xs sm:text-sm">2026-02-01_ABC_Proposal_v1.pdf</span>
              </div>
            </div>
          </div>

          {/* Bad Examples Card */}
          <div className="rounded-lg border border-border overflow-hidden">
             <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium flex items-center gap-2">
              <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4" />
              Bad Examples
            </div>
            <div className="bg-card p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4 text-destructive shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-muted-foreground">homepage final.pdf</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4 text-destructive shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-muted-foreground">email seq FINAL FINAL.docx</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4 text-destructive shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-muted-foreground">ABC coaching proposal.pdf</span>
              </div>
            </div>
          </div>
        </div>

        {/* Version Control Rules */}
        <h3>Version Control Rules</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span><strong>v1, v2, v3</strong> — Use version numbers, increment for each revision</span>
          </li>
          <li className="flex items-start gap-2">
            <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <span><strong>Never use:</strong> <span className="text-destructive">&quot;FINAL&quot;</span>, <span className="text-destructive">&quot;NEW&quot;</span>, <span className="text-destructive">&quot;Updated&quot;</span>, <span className="text-destructive">&quot;Copy of&quot;</span></span>
          </li>
          <li className="flex items-start gap-2">
            <HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <span><strong>Keep old versions</strong> — Don&apos;t delete; latest version is highest number</span>
          </li>
        </ul>
      </section>

      {/* Section 3: Access & Sharing Rules */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          <span className="hidden">. </span>
          Access &amp; Sharing Rules
        </h2>

        <div className="overflow-x-auto mb-6">
          <table>
            <thead>
              <tr>
                <th className="w-36">Folder</th>
                <th>Team Access</th>
                <th>Client Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">1-Assets</td>
                <td>Ops, Marketing, Web Dev</td>
                <td>View only</td>
              </tr>
              <tr>
                <td className="font-medium">2-Strategy</td>
                <td>Ops, Founder</td>
                <td>View only (approved docs)</td>
              </tr>
              <tr>
                <td className="font-medium">3-Deliverables</td>
                <td>Ops, Marketing, Web Dev</td>
                <td>Comment (for feedback)</td>
              </tr>
              <tr>
                <td className="font-medium">4-Client Inputs</td>
                <td>Ops</td>
                <td>Edit (upload access)</td>
              </tr>
              <tr>
                <td className="font-medium">5-Training &amp; Docs</td>
                <td>Ops, Web Dev</td>
                <td>View only</td>
              </tr>
              <tr>
                <td className="font-medium">6-Admin</td>
                <td>Founder, Finance only</td>
                <td className="text-destructive">No access</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New Client Folder Setup Checklist */}
        <h3>New Client Folder Setup Checklist</h3>
        <div className="grid gap-3 my-6">
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
              <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
            </div>
            <p className="text-sm my-0!">Create folder: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">CM Clients &gt; 2026 &gt; [Client Name]</code></p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
              <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
            </div>
            <p className="text-sm my-0!">Create all 6 subfolders (copy template structure)</p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
              <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
            </div>
            <p className="text-sm my-0!">Set sharing permissions per matrix above</p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
            <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
              <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
            </div>
            <p className="text-sm my-0!">Share 4-Client Inputs folder link with client</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Owner: Operations Coordinator
        </p>
      </div>
    </div>
  );
}
