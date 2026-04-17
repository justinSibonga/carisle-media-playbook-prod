import { StepProcess } from "@/components/ui/step-process";

export function Phase1Content() {
  const steps = [
    {
      title: "Discovery Call",
      badges: [
        { text: "15-30 min", variant: "secondary" as const },
        { text: "Operations Coordinator", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Qualify lead and understand needs</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Discovery notes, qualification status</span>
          </div>
        </div>
      )
    },
    {
      title: "Strategy Call",
      badges: [
        { text: "30-45 min", variant: "secondary" as const },
        { text: "Founder", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Deep dive, present solution, establish trust</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Strategy notes, solution scope, go/no-go</span>
          </div>
        </div>
      )
    },
    {
      title: "Proposal",
      badges: [
        { text: "24-48 hours", variant: "secondary" as const },
        { text: "Founder", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Send comprehensive proposal</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Solution, deliverables, timeline, investment</span>
          </div>
        </div>
      )
    },
    {
      title: "Close",
      badges: [
        { text: "Same day", variant: "secondary" as const },
        { text: "Operations Coordinator", variant: "outline" as const }
      ],
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Purpose:</span>
            <span className="text-foreground/80">Contract, payment, onboarding setup</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2">
            <span className="font-bold text-foreground">Output:</span>
            <span className="text-foreground/80">Signed contract, deposit, kick-off scheduled</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Lead Sources</h3>
        <ul className="space-y-2">
          {["Paid advertising (Facebook, Google)", "Website inquiries", "Referrals"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-6 pb-2 border-b border-border/60">Sales Process</h3>
        <StepProcess steps={steps} />
      </div>
    </div>
  );
}
