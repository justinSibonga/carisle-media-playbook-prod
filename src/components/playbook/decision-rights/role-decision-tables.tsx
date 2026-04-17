import type { RoleDecisionSection } from "@/types/decision-rights";

interface RoleDecisionTablesProps {
  sections: RoleDecisionSection[];
  rowClassName?: string;
  rowStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

// Shared table used for both the "By Role" tab and the "Founder Approval" tab.
// The two differ only in row colouring, so colour is injected via props.
export function RoleDecisionTables({
  sections,
  rowClassName,
  rowStyle,
  hoverStyle,
}: RoleDecisionTablesProps) {
  const handleEnter = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (hoverStyle?.backgroundColor) {
      e.currentTarget.style.backgroundColor = String(hoverStyle.backgroundColor);
    }
  };
  const handleLeave = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (rowStyle?.backgroundColor) {
      e.currentTarget.style.backgroundColor = String(rowStyle.backgroundColor);
    }
  };

  return (
    <div className="space-y-2">
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-4">{section.title}</h3>
          <div className="overflow-x-auto -mx-3 md:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px] no-zebra">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left py-3 px-3 font-semibold text-sm w-[35%]">Decision</th>
                  <th className="text-center py-3 px-3 font-semibold text-sm w-[20%]">Threshold</th>
                  <th className="text-left py-3 px-3 font-semibold text-sm w-[45%]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr
                    key={row.decision}
                    className={rowClassName ?? "border-b border-border hover:bg-muted/30"}
                    style={rowStyle}
                    onMouseEnter={hoverStyle ? handleEnter : undefined}
                    onMouseLeave={hoverStyle ? handleLeave : undefined}
                  >
                    <td className="py-3 px-3 text-left text-sm font-medium">{row.decision}</td>
                    <td className="py-3 px-3 text-center text-sm">{row.threshold}</td>
                    <td className="py-3 px-3 text-left text-sm text-muted-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
