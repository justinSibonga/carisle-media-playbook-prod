import { ESCALATION_MATRICES } from "@/data/escalation";
import { EscalationMatrixTable } from "./escalation-matrix-table";

export function EscalationMatrixSection() {
  return (
    <section>
      <h2 id="escalation-matrix">Escalation Matrix</h2>
      <p className="mb-4 text-sm text-muted-foreground">Who handles what and when to escalate</p>
      {ESCALATION_MATRICES.map((matrix) => (
        <EscalationMatrixTable key={matrix.id} matrix={matrix} />
      ))}
    </section>
  );
}
