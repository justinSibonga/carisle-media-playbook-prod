export function DelegationPhilosophy() {
  return (
    <section id="delegation-philosophy">
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
        Delegation Philosophy
      </h2>

      <div className="bg-muted/50 p-6 rounded-lg my-6">
        <p className="text-sm my-0! mb-4!">
          This RACI chart is designed with <strong className="text-primary">MAXIMUM DELEGATION</strong> in mind.
        </p>

        <div className="mt-4">
          <p className="font-medium text-primary mb-2 my-0!">Founder&apos;s Role:</p>
          <ul className="text-sm space-y-1 my-0! list-disc pl-5">
            <li>Participates in weekly meetings (R)</li>
            <li>Updates own scorecard (R)</li>
            <li>Makes truly strategic decisions that cannot be delegated (A)</li>
            <li>Gets informed on key outcomes (I)</li>
            <li>Consulted only when founder input is truly needed (C)</li>
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-medium text-primary mb-2 my-0!">EVERYTHING ELSE IS DELEGATED TO ROLE OWNERS.</p>
          <p className="text-sm text-muted-foreground my-0! mb-2!">Each role OWNS their area completely:</p>
          <ul className="text-sm space-y-1 my-0! list-disc pl-5">
            <li>
              <strong>Operations Coordinator</strong> → Owns all client & project operations
            </li>
            <li>
              <strong>Marketing Specialist</strong> → Owns all marketing activities
            </li>
            <li>
              <strong>HR & Admin Coordinator</strong> → Owns all people operations
            </li>
            <li>
              <strong>Web Developer</strong> → Owns all technical work
            </li>
            <li>
              <strong>Finance Coordinator</strong> → Owns all financial tracking
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
