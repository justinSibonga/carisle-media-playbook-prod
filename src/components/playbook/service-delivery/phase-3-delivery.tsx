import { StepProcess } from "@/components/ui/step-process";

export function Phase3Content() {
  const weeks = [
    {
      title: "Foundation & Strategy",
      week: "Week 1",
      delivers: ["GHL account setup and configuration", "Pipeline structure and stages", "Funnel strategy map", "Custom fields and tags structure"],
      clientProvides: ["All brand assets", "Business information", "Offer details and pricing", "Target audience profile"],
      milestone: "Client approves funnel strategy before Week 2"
    },
    {
      title: "Landing Pages & Funnels",
      week: "Week 2",
      delivers: ["Landing pages built in GHL", "Thank you / confirmation pages", "Opt-in forms with field mapping", "Mobile-responsive design"],
      clientProvides: ["Testimonials and social proof", "Product/service images", "Approved copy or inputs", "Team photos (if applicable)"],
      milestone: "Client approves design and copy before Week 3"
    },
    {
      title: "Email & SMS Automation",
      week: "Week 3",
      delivers: ["Lead nurture sequence (5-7 emails)", "Appointment reminder sequence", "No-show follow-up sequences", "Email and SMS templates"],
      clientProvides: ["FAQs for email content", "Case studies / success stories", "Sequence review and approval"],
      milestone: "Client approves all sequences before Week 4"
    },
    {
      title: "Workflows & Integrations",
      week: "Week 4",
      delivers: ["Calendar/booking setup", "Workflow automations", "Pipeline automation rules", "Third-party integrations"],
      clientProvides: ["Workflow logic review and approval"],
      milestone: "Client approves workflow logic before Week 5"
    },
    {
      title: "Testing & Launch",
      week: "Week 5",
      delivers: ["End-to-end system testing", "Bug fixes and refinements", "Training call (recorded)", "Documentation and user guide"],
      clientProvides: ["Training call attendance", "Final sign-off and approval", "Go-live confirmation"],
      milestone: "Final sign-off = Project Complete"
    }
  ];

  const steps = weeks.map(week => ({
    title: week.title,
    badges: [{ text: week.week, variant: "accent" as const }],
    content: (
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">We Deliver</p>
            <ul className="space-y-2">
              {week.delivers.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Client Provides</p>
            <ul className="space-y-2">
              {week.clientProvides.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 mt-4 pt-4 border-t border-dashed border-border">
            <div className="flex items-center gap-2 text-sm">
                <span className="uppercase text-xs font-bold text-accent tracking-wider">Milestone Gate:</span>
                <span className="font-medium">{week.milestone}</span>
            </div>
          </div>
        </div>
    )
  }));

  return (
    <div className="space-y-6">
        <h3 className="font-semibold text-foreground mb-6 pb-2 border-b border-border/60">5-Week Build Method</h3>
        <StepProcess steps={steps} />
    </div>
  );
}
