"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { StepProcess } from "@/components/ui/step-process";
import { CopyableTemplate } from "@/components/ui/copyable-template";

const GUIDING_PRINCIPLES = [
  "Most issues should be resolved at the team level",
  "Escalate early for true blockers - don't wait until crisis",
  "Always escalate with context AND a recommendation",
  "Founder escalation is a last resort, not a first response",
];

const RESOLUTION_OWNERS = [
  ["Team Member", "Day-to-day operational issues within their scope"],
  ["Operations Coordinator", "Client issues, timeline adjustments, process problems"],
  ["Founder", "Strategic decisions, major client issues, financial/contractual matters"],
] as const;

const SEVERITY_LEVELS = [
  ["P1", "Critical", "System down, client cannot operate, major revenue impact", "Within 1 hour", "bg-red-100 text-red-700 border-red-500 dark:bg-red-900/30 dark:text-red-400"],
  ["P2", "High", "Major functionality broken, significant client impact", "Within 4 hours", "bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-900/30 dark:text-orange-400"],
  ["P3", "Medium", "Feature not working as expected, workaround available", "Within 24 hours", "bg-yellow-100 text-yellow-700 border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400"],
  ["P4", "Low", "Minor issue, cosmetic, enhancement request", "Within 48 hours", "bg-green-100 text-green-700 border-green-500 dark:bg-green-900/30 dark:text-green-400"],
] as const;

const ESCALATION_MATRICES = [
  {
    title: "Client Issues",
    id: "client-issues",
    rows: [
      ["Client question", "General how-to, status update", "Handle", "If complex", "-"],
      ["Client complaint", "Unhappy with deliverable", "Document", "Handle + resolve", "If unresolved"],
      ["Client not responding", "No feedback for 48+ hours", "Follow up", "Handle + escalate", "If >5 days"],
      ["Client wants scope change", "Requesting additions", "Document request", "Assess + quote", "If >2 hours work"],
      ["Client threatening to leave", "Major dissatisfaction", "Inform immediately", "Inform immediately", "Handle"],
    ],
  },
  {
    title: "Technical Issues",
    id: "technical-issues",
    rows: [
      ["Bug - Minor", "Cosmetic, non-blocking", "Fix", "If >2 hours", "-"],
      ["Bug - Major", "Feature broken", "Attempt fix", "Prioritize fix", "If client-facing P1"],
      ["System down", "GHL/integration outage", "Document + notify", "Handle + communicate", "If prolonged >4 hrs"],
      ["Integration failure", "Zapier, API broken", "Investigate", "Handle", "If business-critical"],
      ["Data issue", "Lost contacts, wrong data", "Investigate scope", "Handle + resolve", "If major data loss"],
    ],
  },
  {
    title: "Delivery Issues",
    id: "delivery-issues",
    rows: [
      ["Behind schedule", "<1 day delay", "Catch up", "If >1 day", "If >3 days"],
      ["Missing client inputs", "Assets, approvals pending", "Follow up", "Handle + push timeline", "If blocking >3 days"],
      ["Quality issue", "Deliverable below standard", "Rework", "Review before client", "-"],
      ["Scope creep", "Work expanding beyond contract", "Document", "Assess + propose CR", "Approve CR"],
      ["Resource conflict", "Team overloaded", "Flag early", "Re-prioritize", "If cannot resolve"],
    ],
  },
  {
    title: "Financial / Contract",
    id: "financial-contract",
    rows: [
      ["Payment overdue", "<7 days late", "Remind", "Follow up formally", "If >14 days"],
      ["Refund request", "Client wants money back", "Document reason", "Assess validity", "Decide"],
      ["Discount request", "Client asking for discount", "-", "If <=10%", "If >10%"],
      ["Contract dispute", "Terms disagreement", "Document", "Gather facts", "Handle"],
      ["New contract", "Pricing, terms", "-", "Draft + recommend", "Approve"],
    ],
  },
] as const;

const ASSESS_ITEMS = [
  "Can I resolve this myself? Have I tried?",
  "What's the impact if this isn't resolved quickly?",
  "What severity level is this? (P1/P2/P3/P4)",
  "Who is the right person to escalate to?",
];

const GATHER_ITEMS = [
  "What is the issue? (Be specific)",
  "When did it start? What triggered it?",
  "Who is affected? (Client name, project)",
  "What have you already tried?",
  "What is the impact if not resolved?",
  "What do you recommend?",
];

const FOLLOW_UP_ITEMS = [
  "Acknowledge receipt was confirmed",
  "Track the resolution",
  "Update relevant stakeholders",
  "Document the outcome for future reference",
  "Close the loop with client (if applicable)",
];

const ALWAYS_ESCALATE_ITEMS = [
  "Client threatening to leave",
  "Refund requests",
  "Contract/pricing changes",
  "Major scope changes (>2 hrs)",
  "Legal/security concerns",
];

const ESCALATION_TEMPLATE = `ESCALATION REQUEST

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

Decision Needed By: [Date/Time]`;

function EscalationHeader() {
  return (
    <div className="mb-8">
      <p className="text-accent! mb-2 text-sm font-medium uppercase tracking-widest">
        Operations Playbook
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary lg:text-4xl">
        Escalation SOP
      </h1>
      <p className="text-muted-foreground">
        When and how to escalate issues to ensure timely resolution
      </p>
    </div>
  );
}

function SeverityBadge({
  level,
  colorClassName,
}: {
  level: string;
  colorClassName: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-1 text-xs font-semibold ${colorClassName}`}
    >
      {level}
    </span>
  );
}

function PurposeSection() {
  return (
    <section>
      <h2 id="purpose">Purpose</h2>
      <p>
        This document defines when and how to escalate issues to ensure timely resolution without
        bottlenecking the Founder.
      </p>

      <h3 id="guiding-principles">Guiding Principles</h3>
      <ul>
        {GUIDING_PRINCIPLES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 id="who-can-resolve-what">Who Can Resolve What</h3>
      <ul>
        {RESOLUTION_OWNERS.map(([title, description]) => (
          <li key={title}>
            <strong>{title}</strong> - {description}
          </li>
        ))}
      </ul>
    </section>
  );
}

function SeverityLevelsSection() {
  return (
    <section>
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
          {SEVERITY_LEVELS.map(([level, name, description, responseTime, colorClassName]) => (
            <tr key={level}>
              <td>
                <SeverityBadge level={level} colorClassName={colorClassName} />
              </td>
              <td className={`font-medium ${level === "P1" ? "text-red-600 dark:text-red-400" : level === "P2" ? "text-orange-600 dark:text-orange-400" : level === "P3" ? "text-yellow-600 dark:text-yellow-400" : "text-green-600 dark:text-green-400"}`}>
                {name}
              </td>
              <td>{description}</td>
              <td className="font-medium">{responseTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function EscalationMatrixTable({
  title,
  id,
  rows,
}: {
  title: string;
  id: string;
  rows: readonly (readonly [string, string, string, string, string])[];
}) {
  return (
    <>
      <h3 id={id}>{title}</h3>
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
          {rows.map(([issueType, examples, level1, level2, level3]) => (
            <tr key={`${title}-${issueType}`}>
              <td>{issueType}</td>
              <td>{examples}</td>
              <td className={level1 === "Handle" || level1 === "Fix" || level1 === "Rework" ? "font-medium text-status-success" : undefined}>
                {level1}
              </td>
              <td className={
                level2.includes("Handle") || level2.includes("Prioritize") || level2.includes("Assess + quote") || level2.includes("Follow up formally") || level2.includes("Re-prioritize")
                  ? "font-medium text-status-success"
                  : undefined
              }>
                {level2}
              </td>
              <td className={level3 === "Handle" || level3 === "Decide" || level3 === "Approve" ? "font-medium text-status-success" : undefined}>
                {level3}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function EscalationMatrixSection() {
  return (
    <section>
      <h2 id="escalation-matrix">Escalation Matrix</h2>
      <p className="mb-4 text-sm text-muted-foreground">Who handles what and when to escalate</p>
      {ESCALATION_MATRICES.map((matrix) => (
        <EscalationMatrixTable key={matrix.title} title={matrix.title} id={matrix.id} rows={matrix.rows} />
      ))}
    </section>
  );
}

function TextList({ items }: { items: readonly string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-sm text-foreground/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function EscalationTemplatePreview() {
  return (
    <div className="rounded border border-border bg-muted/40 p-3 pr-12 font-mono text-xs leading-relaxed">
      <p className="mb-2 font-bold">ESCALATION REQUEST</p>
      <p>
        <strong>Severity:</strong> [P1/P2/P3/P4]
      </p>
      <p>
        <strong>Issue:</strong> [One-line summary]
      </p>
      <p>
        <strong>Client/Project:</strong> [Name]
      </p>
      <div className="my-2" />
      <p>
        <strong>Details:</strong>
      </p>
      <p>[Describe the situation in 2-3 sentences]</p>
      <div className="my-2" />
      <p>
        <strong>Impact:</strong>
      </p>
      <p>[What happens if not resolved? Timeline impact?]</p>
      <div className="my-2" />
      <p>
        <strong>What I&apos;ve Tried:</strong>
      </p>
      <p>[List actions already taken]</p>
      <div className="my-2" />
      <p>
        <strong>My Recommendation:</strong>
      </p>
      <p>[What I think we should do]</p>
      <div className="my-2" />
      <p>
        <strong>Decision Needed By:</strong> [Date/Time]
      </p>
    </div>
  );
}

function HowToEscalateSection() {
  return (
    <section>
      <h2 id="how-to-escalate">How to Escalate</h2>

      <StepProcess
        steps={[
          {
            title: "Assess the Situation",
            description: "Before escalating, ask yourself:",
            content: <TextList items={ASSESS_ITEMS} />,
          },
          {
            title: "Gather Information",
            description: "Before escalating, document:",
            content: <TextList items={GATHER_ITEMS} />,
          },
          {
            title: "Escalate with Context",
            description: "Use this template:",
            content: (
              <CopyableTemplate template={ESCALATION_TEMPLATE}>
                <EscalationTemplatePreview />
              </CopyableTemplate>
            ),
          },
          {
            title: "Follow Up",
            description: "After escalating:",
            content: <TextList items={FOLLOW_UP_ITEMS} />,
          },
        ]}
      />
    </section>
  );
}

function QuickReferenceSection() {
  return (
    <section>
      <h2 id="quick-reference">Quick Reference</h2>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="mb-2 font-semibold text-primary">Response Times</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="font-medium text-destructive">P1 - Critical:</span> Within 1 hour
            </li>
            <li>
              <span className="font-medium text-accent">P2 - High:</span> Within 4 hours
            </li>
            <li>
              <span className="font-medium" style={{ color: "hsl(45, 90%, 45%)" }}>
                P3 - Medium:
              </span>{" "}
              Within 24 hours
            </li>
            <li>
              <span className="font-medium text-status-success">P4 - Low:</span> Within 48 hours
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <h4 className="mb-2 font-semibold text-primary">Always Escalate To Founder</h4>
          <ul className="space-y-1 text-sm">
            {ALWAYS_ESCALATE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-l-4 border-accent bg-accent/10 p-4">
        <p className="text-sm font-medium text-primary">
          <strong>Legend:</strong> Handle = Primary owner at this level | If [condition] =
          Escalate only if condition met | - = Not involved at this level
        </p>
      </div>
    </section>
  );
}

export function EscalationSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <EscalationHeader />
      <div className="prose-handbook">
        <PurposeSection />
        <SeverityLevelsSection />
        <EscalationMatrixSection />
        <HowToEscalateSection />
        <QuickReferenceSection />
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
