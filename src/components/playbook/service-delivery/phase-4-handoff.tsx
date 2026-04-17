export function Phase4Content() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Training Call</h3>
        <div className="text-base text-foreground/80 space-y-2 mb-4">
          <p><span className="font-medium text-foreground">Duration:</span> 60-90 minutes</p>
          <p><span className="font-medium text-foreground">Recording:</span> Provided to client for reference</p>
        </div>
        
        <p className="text-base font-medium text-foreground mb-2">Training Covers:</p>
        <ul className="space-y-2">
          {[
            "GHL dashboard navigation",
            "Managing contacts and pipelines",
            "Editing landing pages and emails",
            "Monitoring workflows and automations",
            "Viewing reports and analytics",
            "Common troubleshooting"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Documentation Delivered</h3>
        <ul className="space-y-2">
          {[
            "User guide document",
            "Workflow documentation",
            "Login credentials (securely shared)",
            "Integration details",
            "Troubleshooting guide"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3 pb-2 border-b border-border/60">Sign-off Checklist</h3>
        <div className="space-y-2">
          {[
            "Client approved all deliverables",
            "Final sign-off received",
            "Project marked complete in system",
            "Retainer discussion (if applicable)",
            "30-day follow-up scheduled"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 group-hover:border-primary transition-colors bg-background" />
              <span className="text-base text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
