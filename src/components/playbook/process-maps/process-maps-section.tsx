import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, CheckmarkCircle01Icon, Alert01Icon } from "@hugeicons/core-free-icons";

import { FlowArrow } from "@/components/ui/flow-arrow";

import {
  JOURNEY_PHASES,
  DELIVERY_TIMELINE_ROWS,
  SWIM_LANE_ROWS,
  OPS_COORDINATOR_HANDLES,
  FOUNDER_REQUIRED,
  RESPONSE_TIME_ROWS,
} from "@/data/process-maps";

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
