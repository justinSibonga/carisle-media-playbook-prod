import { cn } from "@/lib/utils";

export function Phase5Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Retainer Services</h3>
        <p className="text-base text-foreground/80 mb-4">
          Optional ongoing support and optimization services available after project completion.
        </p>
        
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Service</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: "Ad Management", desc: "Facebook/Google ad campaign management" },
              { service: "Lead Generation", desc: "Ongoing lead gen and funnel optimization" },
              { service: "System Updates", desc: "Workflow tweaks, new sequences, page updates" },
              { service: "Priority Support", desc: "Fast response times and troubleshooting" }
            ].map((row, i) => (
              <tr key={row.service} className={cn("border-b border-border last:border-0", i % 2 === 1 && "bg-muted/30")}>
                <td className="px-4 py-3 font-medium">{row.service}</td>
                <td className="px-4 py-3 text-foreground/80">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Communication SLAs</h3>
        <table className="w-full text-base">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Type</th>
              <th className="px-4 py-3 text-left font-semibold">Response Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: "Client messages", time: "Same business day" },
              { type: "Urgent issues", time: "Within 4 hours", urgent: true },
              { type: "Review feedback", time: "48 hours maximum" },
              { type: "Weekly status update", time: "Every Friday by 5 PM" }
            ].map((row, i) => (
              <tr key={row.type} className={cn("border-b border-border last:border-0", i % 2 === 1 && "bg-muted/30")}>
                <td className={cn("px-4 py-3 font-medium", row.urgent && "text-destructive")}>{row.type}</td>
                <td className="px-4 py-3 text-foreground/80">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Communication Channels</h3>
        <ul className="space-y-2">
          {[
            { label: "Primary", value: "Email / Lark" },
            { label: "Urgent", value: "Messenger / Phone", urgent: true },
            { label: "Project Updates", value: "Client portal" },
            { label: "Meetings", value: "Zoom / Google Meet" }
          ].map((item) => (
            <li key={`${item.label}-${item.value}`} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><span className={cn("font-medium", item.urgent ? "text-destructive" : "text-foreground")}>{item.label}:</span> {item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
