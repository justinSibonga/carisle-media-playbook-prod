import { cn } from "@/lib/utils";

export function OverviewContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">What We Deliver</h3>
        <p className="text-base text-foreground/80 leading-relaxed">
          Carisle Media specializes in complete GHL (GoHighLevel) automation workflow setups. 
          We build done-for-you systems that handle lead capture, nurturing, appointment booking, 
          and follow-up automation.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Core Deliverables</h3>
        <ul className="space-y-2">
          {[
            "Landing pages and funnels optimized for conversion",
            "Email and SMS automation sequences",
            "Workflow automations and triggers",
            "Calendar and booking integrations",
            "Pipeline and CRM setup",
            "Client training and documentation"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Service Phases</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Phase</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { phase: "Phase 1: Sales", desc: "Lead → Discovery → Strategy → Proposal → Close" },
              { phase: "Phase 2: Onboarding", desc: "Kick-off call, asset collection, project setup" },
              { phase: "Phase 3: Delivery", desc: "5-week build cycle with weekly milestones" },
              { phase: "Phase 4: Handoff", desc: "Training, documentation, go-live" },
              { phase: "Phase 5: Retainer", desc: "Monthly optimization and support" }
            ].map((row, i) => (
              <tr key={row.phase} className={cn("border-b border-border last:border-0", i % 2 === 1 && "bg-muted/30")}>
                <td className="px-4 py-3 font-medium">{row.phase}</td>
                <td className="px-4 py-3 text-foreground/80">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
