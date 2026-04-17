export function EscalationTemplatePreview() {
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
