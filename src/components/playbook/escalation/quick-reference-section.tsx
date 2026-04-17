import { ALWAYS_ESCALATE_ITEMS } from "@/data/escalation";

export function QuickReferenceSection() {
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
