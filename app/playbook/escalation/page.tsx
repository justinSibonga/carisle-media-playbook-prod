"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { StepProcess } from "@/components/ui/step-process";
import { CopyableTemplate } from "@/components/ui/copyable-template";

export function EscalationSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Escalation SOP
        </h1>
        <p className="text-muted-foreground">
          When and how to escalate issues to ensure timely resolution
        </p>
      </div>

      {/* Content */}
      <div className="prose-handbook">

      <h2 id="purpose">Purpose</h2>
      <p>
        This document defines when and how to escalate issues to ensure timely resolution 
        without bottlenecking the Founder.
      </p>

      <h3 id="guiding-principles">Guiding Principles</h3>
      <ul>
        <li>Most issues should be resolved at the team level</li>
        <li>Escalate early for true blockers - don&apos;t wait until crisis</li>
        <li>Always escalate with context AND a recommendation</li>
        <li>Founder escalation is a last resort, not a first response</li>
      </ul>

      <h3 id="who-can-resolve-what">Who Can Resolve What</h3>
      <ul>
        <li><strong>Team Member</strong> → Day-to-day operational issues within their scope</li>
        <li><strong>Operations Coordinator</strong> → Client issues, timeline adjustments, process problems</li>
        <li><strong>Founder</strong> → Strategic decisions, major client issues, financial/contractual matters</li>
      </ul>

      <h2 id="severity-levels">Severity Levels</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Description</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 border border-red-500 dark:bg-red-900/30 dark:text-red-400">P1</span></td>
            <td className="font-medium text-red-600 dark:text-red-400">Critical</td>
            <td>System down, client cannot operate, major revenue impact</td>
            <td className="font-medium">Within 1 hour</td>
          </tr>
          <tr>
            <td><span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-500 dark:bg-orange-900/30 dark:text-orange-400">P2</span></td>
            <td className="font-medium text-orange-600 dark:text-orange-400">High</td>
            <td>Major functionality broken, significant client impact</td>
            <td className="font-medium">Within 4 hours</td>
          </tr>
          <tr>
            <td><span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400">P3</span></td>
            <td className="font-medium text-yellow-600 dark:text-yellow-400">Medium</td>
            <td>Feature not working as expected, workaround available</td>
            <td className="font-medium">Within 24 hours</td>
          </tr>
          <tr>
            <td><span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-500 dark:bg-green-900/30 dark:text-green-400">P4</span></td>
            <td className="font-medium text-green-600 dark:text-green-400">Low</td>
            <td>Minor issue, cosmetic, enhancement request</td>
            <td className="font-medium">Within 48 hours</td>
          </tr>
        </tbody>
      </table>

      <h2 id="escalation-matrix">Escalation Matrix</h2>
      <p className="text-sm text-muted-foreground mb-4">Who handles what and when to escalate</p>

      <h3 id="client-issues">Client Issues</h3>
      <table>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Examples</th>
            <th>Level 1: Team</th>
            <th>Level 2: Ops Coord</th>
            <th>Level 3: Founder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client question</td>
            <td>General how-to, status update</td>
            <td className="text-status-success font-medium">Handle</td>
            <td>If complex</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Client complaint</td>
            <td>Unhappy with deliverable</td>
            <td>Document</td>
            <td className="text-status-success font-medium">Handle + resolve</td>
            <td>If unresolved</td>
          </tr>
          <tr>
            <td>Client not responding</td>
            <td>No feedback for 48+ hours</td>
            <td>Follow up</td>
            <td className="text-status-success font-medium">Handle + escalate</td>
            <td>If &gt;5 days</td>
          </tr>
          <tr>
            <td>Client wants scope change</td>
            <td>Requesting additions</td>
            <td>Document request</td>
            <td className="text-status-success font-medium">Assess + quote</td>
            <td>If &gt;2 hours work</td>
          </tr>
          <tr>
            <td>Client threatening to leave</td>
            <td>Major dissatisfaction</td>
            <td>Inform immediately</td>
            <td>Inform immediately</td>
            <td className="text-status-success font-medium">Handle</td>
          </tr>
        </tbody>
      </table>

      <h3 id="technical-issues">Technical Issues</h3>
      <table>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Examples</th>
            <th>Level 1: Team</th>
            <th>Level 2: Ops Coord</th>
            <th>Level 3: Founder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bug - Minor</td>
            <td>Cosmetic, non-blocking</td>
            <td className="text-status-success font-medium">Fix</td>
            <td>If &gt;2 hours</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Bug - Major</td>
            <td>Feature broken</td>
            <td>Attempt fix</td>
            <td className="text-status-success font-medium">Prioritize fix</td>
            <td>If client-facing P1</td>
          </tr>
          <tr>
            <td>System down</td>
            <td>GHL/integration outage</td>
            <td>Document + notify</td>
            <td className="text-status-success font-medium">Handle + communicate</td>
            <td>If prolonged &gt;4 hrs</td>
          </tr>
          <tr>
            <td>Integration failure</td>
            <td>Zapier, API broken</td>
            <td>Investigate</td>
            <td className="text-status-success font-medium">Handle</td>
            <td>If business-critical</td>
          </tr>
          <tr>
            <td>Data issue</td>
            <td>Lost contacts, wrong data</td>
            <td>Investigate scope</td>
            <td className="text-status-success font-medium">Handle + resolve</td>
            <td>If major data loss</td>
          </tr>
        </tbody>
      </table>

      <h3 id="delivery-issues">Delivery Issues</h3>
      <table>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Examples</th>
            <th>Level 1: Team</th>
            <th>Level 2: Ops Coord</th>
            <th>Level 3: Founder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Behind schedule</td>
            <td>&lt;1 day delay</td>
            <td className="text-status-success font-medium">Catch up</td>
            <td>If &gt;1 day</td>
            <td>If &gt;3 days</td>
          </tr>
          <tr>
            <td>Missing client inputs</td>
            <td>Assets, approvals pending</td>
            <td>Follow up</td>
            <td className="text-status-success font-medium">Handle + push timeline</td>
            <td>If blocking &gt;3 days</td>
          </tr>
          <tr>
            <td>Quality issue</td>
            <td>Deliverable below standard</td>
            <td className="text-status-success font-medium">Rework</td>
            <td>Review before client</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Scope creep</td>
            <td>Work expanding beyond contract</td>
            <td>Document</td>
            <td className="text-status-success font-medium">Assess + propose CR</td>
            <td>Approve CR</td>
          </tr>
          <tr>
            <td>Resource conflict</td>
            <td>Team overloaded</td>
            <td>Flag early</td>
            <td className="text-status-success font-medium">Re-prioritize</td>
            <td>If cannot resolve</td>
          </tr>
        </tbody>
      </table>

      <h3 id="financial-contract">Financial / Contract</h3>
      <table>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Examples</th>
            <th>Level 1: Team</th>
            <th>Level 2: Ops Coord</th>
            <th>Level 3: Founder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Payment overdue</td>
            <td>&lt;7 days late</td>
            <td>Remind</td>
            <td className="text-status-success font-medium">Follow up formally</td>
            <td>If &gt;14 days</td>
          </tr>
          <tr>
            <td>Refund request</td>
            <td>Client wants money back</td>
            <td>Document reason</td>
            <td>Assess validity</td>
            <td className="text-status-success font-medium">Decide</td>
          </tr>
          <tr>
            <td>Discount request</td>
            <td>Client asking for discount</td>
            <td>—</td>
            <td>If ≤10%</td>
            <td className="text-status-success font-medium">If &gt;10%</td>
          </tr>
          <tr>
            <td>Contract dispute</td>
            <td>Terms disagreement</td>
            <td>Document</td>
            <td>Gather facts</td>
            <td className="text-status-success font-medium">Handle</td>
          </tr>
          <tr>
            <td>New contract</td>
            <td>Pricing, terms</td>
            <td>—</td>
            <td>Draft + recommend</td>
            <td className="text-status-success font-medium">Approve</td>
          </tr>
        </tbody>
      </table>

      <h2 id="how-to-escalate">How to Escalate</h2>
      
      <StepProcess 
        steps={[
          {
            title: "Assess the Situation",
            description: "Before escalating, ask yourself:",
            content: (
              <ul className="list-disc ml-4 space-y-1 text-sm text-foreground/80">
                <li>Can I resolve this myself? Have I tried?</li>
                <li>What&apos;s the impact if this isn&apos;t resolved quickly?</li>
                <li>What severity level is this? (P1/P2/P3/P4)</li>
                <li>Who is the right person to escalate to?</li>
              </ul>
            )
          },
          {
            title: "Gather Information",
            description: "Before escalating, document:",
            content: (
              <ul className="list-disc ml-4 space-y-1 text-sm text-foreground/80">
                <li>What is the issue? (Be specific)</li>
                <li>When did it start? What triggered it?</li>
                <li>Who is affected? (Client name, project)</li>
                <li>What have you already tried?</li>
                <li>What is the impact if not resolved?</li>
                <li>What do you recommend?</li>
              </ul>
            )
          },
          {
            title: "Escalate with Context",
            description: "Use this template:",
            content: (
              <CopyableTemplate
                template={`ESCALATION REQUEST

Severity: [P1/P2/P3/P4]
Issue: [One-line summary]
Client/Project: [Name]

Details:
[Describe the situation in 2-3 sentences]

Impact:
[What happens if not resolved? Timeline impact?]

What I've Tried:
[List actions already taken]

My Recommendation:
[What I think we should do]

Decision Needed By: [Date/Time]`}
              >
                <div className="bg-muted/40 border border-border p-3 rounded font-mono text-xs leading-relaxed pr-12">
                  <p className="font-bold mb-2">ESCALATION REQUEST</p>
                  <p><strong>Severity:</strong> [P1/P2/P3/P4]</p>
                  <p><strong>Issue:</strong> [One-line summary]</p>
                  <p><strong>Client/Project:</strong> [Name]</p>
                  <div className="my-2" />
                  <p><strong>Details:</strong></p>
                  <p>[Describe the situation in 2-3 sentences]</p>
                  <div className="my-2" />
                  <p><strong>Impact:</strong></p>
                  <p>[What happens if not resolved? Timeline impact?]</p>
                  <div className="my-2" />
                  <p><strong>What I&apos;ve Tried:</strong></p>
                  <p>[List actions already taken]</p>
                  <div className="my-2" />
                  <p><strong>My Recommendation:</strong></p>
                  <p>[What I think we should do]</p>
                  <div className="my-2" />
                  <p><strong>Decision Needed By:</strong> [Date/Time]</p>
                </div>
              </CopyableTemplate>
            )
          },
          {
            title: "Follow Up",
            description: "After escalating:",
            content: (
              <ul className="list-disc ml-4 space-y-1 text-sm text-foreground/80">
                <li>Acknowledge receipt was confirmed</li>
                <li>Track the resolution</li>
                <li>Update relevant stakeholders</li>
                <li>Document the outcome for future reference</li>
                <li>Close the loop with client (if applicable)</li>
              </ul>
            )
          }
        ]} 
      />

      <h2 id="quick-reference">Quick Reference</h2>
      
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="bg-card border border-border p-4 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Response Times</h4>
          <ul className="space-y-1 text-sm">
            <li><span className="text-destructive font-medium">P1 - Critical:</span> Within 1 hour</li>
            <li><span className="text-accent font-medium">P2 - High:</span> Within 4 hours</li>
            <li><span className="font-medium" style={{ color: 'hsl(45, 90%, 45%)' }}>P3 - Medium:</span> Within 24 hours</li>
            <li><span className="text-status-success font-medium">P4 - Low:</span> Within 48 hours</li>
          </ul>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Always Escalate To Founder</h4>
          <ul className="space-y-1 text-sm">
            <li>Client threatening to leave</li>
            <li>Refund requests</li>
            <li>Contract/pricing changes</li>
            <li>Major scope changes (&gt;2 hrs)</li>
            <li>Legal/security concerns</li>
          </ul>
        </div>
      </div>

      <div className="bg-accent/10 border-l-4 border-accent p-4">
        <p className="text-sm font-medium text-primary">
          <strong>Legend:</strong> Handle = Primary owner at this level | 
          If [condition] = Escalate only if condition met | 
          — = Not involved at this level
        </p>
      </div>
      </div>
    </div>
  );
}

export default function EscalationPage() {
  return (
    <PlaybookPageLayout>
      <EscalationSection />
    </PlaybookPageLayout>
  );
}
