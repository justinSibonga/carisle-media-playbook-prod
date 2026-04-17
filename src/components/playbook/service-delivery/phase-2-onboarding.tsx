import { cn } from "@/lib/utils";

export function Phase2Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Kick-off Call</h3>
        <div className="text-base text-foreground/80 space-y-2 mb-4">
          <p><span className="font-medium text-foreground">Duration:</span> 45-60 minutes</p>
          <p><span className="font-medium text-foreground">Attendees:</span> Operations Coordinator, Web Developer, Client</p>
        </div>
        
        <p className="text-base font-medium text-foreground mb-2">Agenda:</p>
        <ul className="space-y-2">
          {[
            "Introductions and roles",
            "Review project scope and deliverables",
            "Walk through 5-week timeline",
            "Explain client responsibilities and deadlines",
            "Review onboarding form requirements",
            "Set communication expectations",
            "Schedule weekly check-in calls"
          ].map((item, stepNumber) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-foreground flex items-center justify-center text-sm font-medium shrink-0">
                {stepNumber + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Onboarding Form</h3>
        <p className="text-base text-foreground/80 mb-3">
          <span className="font-medium text-foreground">Deadline:</span> Within 3 business days of kick-off call
        </p>
        <div className="bg-destructive/10 border-l-4 border-destructive px-4 py-3 rounded-r">
          <p className="text-base font-medium text-destructive">
            ⚠️ Project timeline does not start until onboarding form is complete.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Required Client Inputs</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Item</th>
              <th className="px-4 py-3 text-left font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Brand Assets", details: "Logo (PNG/SVG), brand colors (hex), fonts" },
              { item: "Business Info", details: "Company name, tagline, contact details" },
              { item: "Offer Details", details: "Services, pricing, packages, lead magnet" },
              { item: "Target Audience", details: "Ideal client profile, demographics, pain points" },
              { item: "Access Credentials", details: "Domain registrar, hosting, existing tools" }
            ].map((row, i) => (
              <tr key={row.item} className={cn("border-b border-border last:border-0", i % 2 === 1 && "bg-muted/30")}>
                <td className="px-4 py-3 font-medium">{row.item}</td>
                <td className="px-4 py-3 text-foreground/80">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

