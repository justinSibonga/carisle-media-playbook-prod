import type { EscalationMatrix } from "@/types/escalation";

// Tokens that indicate "this level owns the action" (rather than "escalate if X").
const OWNS_LEVEL_1 = new Set(["Handle", "Fix", "Rework"]);
const OWNS_LEVEL_3 = new Set(["Handle", "Decide", "Approve"]);
const OWNS_LEVEL_2_MATCHERS = [
  "Handle",
  "Prioritize",
  "Assess + quote",
  "Follow up formally",
  "Re-prioritize",
];

function level2OwnsAction(cell: string): boolean {
  return OWNS_LEVEL_2_MATCHERS.some((t) => cell.includes(t));
}

interface EscalationMatrixTableProps {
  matrix: EscalationMatrix;
}

export function EscalationMatrixTable({ matrix }: EscalationMatrixTableProps) {
  const ownsClass = "font-medium text-status-success";
  return (
    <>
      <h3 id={matrix.id}>{matrix.title}</h3>
      <table>
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Examples</th>
            <th>Level 1: Team</th>
            <th>Level 2: Ops Coord</th>
            <th>Level 3: Founder</th>
          </tr>
        </thead>
        <tbody>
          {matrix.rows.map((row) => (
            <tr key={`${matrix.id}-${row.issueType}`}>
              <td>{row.issueType}</td>
              <td>{row.examples}</td>
              <td className={OWNS_LEVEL_1.has(row.level1) ? ownsClass : undefined}>{row.level1}</td>
              <td className={level2OwnsAction(row.level2) ? ownsClass : undefined}>{row.level2}</td>
              <td className={OWNS_LEVEL_3.has(row.level3) ? ownsClass : undefined}>{row.level3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
