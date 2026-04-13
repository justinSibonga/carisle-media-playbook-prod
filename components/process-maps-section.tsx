import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, CheckmarkCircle01Icon, Alert01Icon } from "@hugeicons/core-free-icons";

import { FlowArrow } from "@/components/ui/flow-arrow";

const JOURNEY_PHASES = [
  {
    title: "Phase 1: Sales",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    items: [
      ["Lead Capture", "Ads/Website"],
      ["Discovery Call", "15-30 min"],
      ["Strategy Call", "30-45 min"],
      ["Proposal", "24-48 hrs"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
        <span className="flex items-center gap-1 font-medium text-accent">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-4 w-4" /> Close
        </span>
        <span className="text-xs text-muted-foreground">1-2 weeks</span>
      </div>
    ),
  },
  {
    title: "Phase 2: Onboard",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    items: [
      ["Kick-off Call", "Week 0"],
      ["Asset Collection", "Client inputs"],
      ["Project Setup", "GHL Account"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
        <span className="text-xs text-muted-foreground">1 week</span>
      </div>
    ),
  },
  {
    title: "Phase 3: Delivery",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    customBody: (
      <div className="p-4 text-sm">
        <div className="mb-3 grid grid-cols-5 gap-1 text-center">
          {["W1", "W2", "W3", "W4", "W5"].map((item) => (
            <div key={item} className="rounded bg-muted px-1 py-1 text-xs font-medium">
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 text-center text-[10px] text-muted-foreground">
          {["Foundation", "Pages", "Emails", "Workflows", "Launch"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">Weekly sign-offs required</p>
        <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
          <span className="text-xs text-muted-foreground">5 weeks</span>
        </div>
      </div>
    ),
  },
  {
    title: "Handoff",
    headerClassName: "bg-accent text-accent-foreground",
    items: [
      ["Training Call"],
      ["Documentation"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
        <span className="flex items-center gap-1 font-medium text-accent">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-4 w-4" /> Go-Live
        </span>
        <span className="text-xs text-muted-foreground">1 week</span>
      </div>
    ),
  },
  {
    title: "Retainer",
    headerClassName: "bg-muted text-muted-foreground",
    items: [
      ["Ads Management"],
      ["Lead Generation"],
      ["Ongoing Support"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
        <span className="text-xs text-muted-foreground">Ongoing</span>
      </div>
    ),
  },
] as const;

const DELIVERY_TIMELINE_ROWS = [
  {
    week: "Week 1",
    delivers: ["GHL setup", "Pipeline structure", "Funnel strategy", "Brand upload"],
    clientProvides: ["Brand assets", "Business info", "Offer details", "Target audience", "Access credentials"],
    gate: "Strategy Sign-off",
  },
  {
    week: "Week 2",
    delivers: ["Landing pages", "Thank you pages", "Opt-in forms", "Mobile design", "Funnel flow"],
    clientProvides: ["Testimonials", "Product images", "Copy inputs", "Headshots"],
    gate: "Design Approval",
  },
  {
    week: "Week 3",
    delivers: ["Nurture sequence", "Reminders", "Follow-ups", "Email templates", "SMS templates"],
    clientProvides: ["FAQs", "Case studies", "Sequence review & approval"],
    gate: "Sequence Approval",
  },
  {
    week: "Week 4",
    delivers: ["Calendar/booking", "Automations", "Pipeline rules", "Tag logic", "Integrations"],
    clientProvides: ["Availability", "Integration credentials", "Workflow review"],
    gate: "Workflow Approval",
  },
  {
    week: "Week 5",
    delivers: ["End-to-end testing", "Bug fixes", "Training call", "Documentation", "Go-live"],
    clientProvides: ["Attend training", "Final sign-off", "Go-live confirmation"],
    gate: "GO-LIVE!",
  },
] as const;

const SWIM_LANE_ROWS = [
  {
    phase: "Week 0",
    delivers: ["Kick-off call", "Send onboarding form", "Project setup"],
    clientProvides: ["Complete onboarding form", "Provide all brand assets", "Grant access credentials"],
    gate: "Form Complete",
  },
  {
    phase: "Week 1",
    delivers: ["GHL account setup", "Pipeline structure", "Funnel strategy map"],
    clientProvides: ["Review strategy", "Provide any missing info", "Approve within 48 hrs"],
    gate: "Strategy Approved",
  },
  {
    phase: "Week 2",
    delivers: ["Landing page build", "Thank you pages", "Forms & funnel flow"],
    clientProvides: ["Provide testimonials", "Provide images", "Approve design/copy"],
    gate: "Design Approved",
  },
  {
    phase: "Week 3",
    delivers: ["Nurture sequence", "Reminder emails", "SMS templates"],
    clientProvides: ["Provide FAQs", "Provide case studies", "Approve sequences"],
    gate: "Sequences Approved",
  },
  {
    phase: "Week 4",
    delivers: ["Calendar/booking", "Automations", "Integrations"],
    clientProvides: ["Confirm availability", "Provide integrations", "Approve workflow logic"],
    gate: "Workflows Approved",
  },
  {
    phase: "Week 5",
    delivers: ["End-to-end testing", "Training call", "Documentation"],
    clientProvides: ["Attend training", "Final sign-off", "Confirm go-live"],
    gate: "GO-LIVE",
  },
] as const;

const OPS_COORDINATOR_HANDLES = [
  "Client questions & complaints",
  "Schedule changes <= 48 hrs",
  "Discounts <= 10%",
  "Minor scope additions <= 2 hrs",
  "Bug fixes & technical issues",
  "Process & task prioritization",
];

const FOUNDER_REQUIRED = [
  "Client threatening to leave",
  "Refunds > PHP 5,000",
  "Contract/pricing changes",
  "Major scope changes > 2 hrs",
  "Termination decisions",
  "Legal/security concerns",
];

const RESPONSE_TIME_ROWS = [
  ["P1 - Critical", "Within 1 hour", "bg-red-100 text-red-700 border-red-500 dark:bg-red-900/30 dark:text-red-400"],
  ["P2 - High", "Within 4 hours", "bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-900/30 dark:text-orange-400"],
  ["P3 - Medium", "Within 24 hours", "bg-yellow-100 text-yellow-700 border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400"],
  ["P4 - Low", "Within 48 hours", "bg-green-100 text-green-700 border-green-500 dark:bg-green-900/30 dark:text-green-400"],
] as const;

function ProcessMapsHeader() {
  return (
    <div className="mb-8">
      <p className="text-accent! mb-2 text-sm font-medium uppercase tracking-widest">
        Operations Playbook
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary lg:text-4xl">
        Process Maps & Flowcharts
      </h1>
      <p className="text-muted-foreground">
        Visual guides for GHL / Automation Workflow Setup and End-to-End Service Delivery
      </p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-border pb-2 text-2xl font-bold tracking-tight text-primary">
      {children}
    </h2>
  );
}

function ProcessPhaseCard({
  title,
  headerClassName,
  items,
  footer,
  customBody,
}: {
  title: string;
  headerClassName: string;
  items?: readonly (readonly string[])[];
  footer?: React.ReactNode;
  customBody?: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className={`px-4 py-2 text-sm font-medium ${headerClassName}`}>{title}</div>
      {customBody ?? (
        <div className="space-y-2 p-4 text-sm">
          {items?.map(([label, meta]) => (
            <div key={`${title}-${label}`} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{label}</span>
              {meta ? <span className="ml-auto text-xs text-muted-foreground">{meta}</span> : null}
            </div>
          ))}
          {footer}
        </div>
      )}
    </div>
  );
}

function BulletCell({ items, muted = false }: { items: readonly string[]; muted?: boolean }) {
  return (
    <td className={muted ? "text-muted-foreground" : undefined}>
      {items.map((item) => (
        <div key={item}>• {item}</div>
      ))}
    </td>
  );
}

function EndToEndJourneySection() {
  return (
    <section>
      <SectionHeading>End-to-End Journey Overview</SectionHeading>
      <p className="mb-6 flex flex-wrap items-center gap-1 text-muted-foreground">
        <span>Lead</span> <FlowArrow /> <span>Close</span> <FlowArrow /> <span>Delivery</span>{" "}
        <FlowArrow /> <span>Retainer</span>
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOURNEY_PHASES.map((phase) => (
          <ProcessPhaseCard key={phase.title} {...phase} />
        ))}
      </div>
    </section>
  );
}

function DeliveryTimelineSection() {
  return (
    <section>
      <SectionHeading>5-Week Delivery Timeline</SectionHeading>
      <p className="mb-6 text-muted-foreground">Phase 3: Done-For-You Build</p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Carisle Delivers</th>
              <th>Client Provides</th>
              <th>Gate</th>
            </tr>
          </thead>
          <tbody>
            {DELIVERY_TIMELINE_ROWS.map((row) => (
              <tr key={row.week}>
                <td className="font-medium">{row.week}</td>
                <BulletCell items={row.delivers} />
                <BulletCell items={row.clientProvides} muted />
                <td className="font-medium text-accent">
                  <HugeiconsIcon icon={Tick01Icon} className="mr-1 inline h-4 w-4" />
                  {row.gate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm italic text-muted-foreground">
        Each milestone requires client sign-off before proceeding. Client delays push timeline
        accordingly.
      </p>
    </section>
  );
}

function ResponsibilitySwimLaneSection() {
  return (
    <section>
      <SectionHeading>Responsibility Swim Lane</SectionHeading>
      <p className="mb-6 text-muted-foreground">Who Does What During Delivery</p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Carisle Media (Delivers)</th>
              <th>Client (Provides)</th>
              <th>Gate</th>
            </tr>
          </thead>
          <tbody>
            {SWIM_LANE_ROWS.map((row) => (
              <tr key={row.phase}>
                <td className="font-medium">{row.phase}</td>
                <BulletCell items={row.delivers} />
                <BulletCell items={row.clientProvides} muted />
                <td className={row.gate === "GO-LIVE" ? "font-bold text-accent" : "font-medium"}>
                  {row.gate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-r-md border-l-4 border-accent bg-accent/10 p-4">
        <p className="text-sm font-medium text-primary">
          Client 48-hour SLA on all approvals. Delays push timeline accordingly.
        </p>
      </div>
    </section>
  );
}

function EscalationCard({
  title,
  icon,
  iconClassName,
  headerClassName,
  items,
}: {
  title: string;
  icon: typeof CheckmarkCircle01Icon;
  iconClassName: string;
  headerClassName: string;
  items: readonly string[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={`px-4 py-3 font-medium ${headerClassName}`}>{title}</div>
      <div className="space-y-3 bg-card p-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm">
            <HugeiconsIcon icon={icon} className={`h-4 w-4 shrink-0 ${iconClassName}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EscalationQuickReferenceSection() {
  return (
    <section>
      <SectionHeading>Escalation Quick Reference</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        <EscalationCard
          title="Operations Coordinator Handles"
          icon={CheckmarkCircle01Icon}
          iconClassName="text-accent"
          headerClassName="bg-accent text-accent-foreground"
          items={OPS_COORDINATOR_HANDLES}
        />
        <EscalationCard
          title="Founder Required"
          icon={Alert01Icon}
          iconClassName="text-amber-500"
          headerClassName="bg-destructive text-destructive-foreground"
          items={FOUNDER_REQUIRED}
        />
      </div>

      <h3 className="mb-4 mt-8">Response Times by Severity</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Response Time</th>
            </tr>
          </thead>
          <tbody>
            {RESPONSE_TIME_ROWS.map(([level, responseTime, colorClassName]) => (
              <tr key={level}>
                <td>
                  <span
                    className={`inline-flex items-center rounded border px-2 py-1 text-xs font-semibold ${colorClassName}`}
                  >
                    {level}
                  </span>
                </td>
                <td>{responseTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-r-md border-l-4 border-accent bg-accent/10 p-4">
        <p className="text-sm font-medium text-primary">
          Always escalate with context + recommendation. Never escalate without trying to solve
          first.
        </p>
      </div>
    </section>
  );
}

export function ProcessMapsSection() {
  return (
    <div className="animate-fade-in prose-handbook space-y-12">
      <ProcessMapsHeader />
      <EndToEndJourneySection />
      <DeliveryTimelineSection />
      <ResponsibilitySwimLaneSection />
      <EscalationQuickReferenceSection />
    </div>
  );
}
