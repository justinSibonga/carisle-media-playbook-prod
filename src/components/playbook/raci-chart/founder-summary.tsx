import { cn } from "@/lib/utils";
import { FOUNDER_INVOLVEMENT_GROUPS, FOUNDER_SUMMARY_STATS } from "@/data/raci-chart";
import type { FounderInvolvementGroup, FounderInvolvementType } from "@/types/raci";

const SECTION_STYLES: Record<FounderInvolvementType, { bg: string; text: string }> = {
  accountable: { bg: "bg-raci-accountable", text: "rgba(255, 255, 255, 0.8)" },
  responsible: { bg: "bg-raci-responsible", text: "rgba(255, 255, 255, 0.8)" },
  consulted: { bg: "bg-raci-consulted", text: "rgba(0, 0, 0, 0.8)" },
  informed: { bg: "bg-raci-informed", text: "rgba(255, 255, 255, 0.8)" },
};

function FounderGroupTable({ group }: { group: FounderInvolvementGroup }) {
  const { bg, text } = SECTION_STYLES[group.type];
  return (
    <div id={group.id} className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <td colSpan={2} className={cn(bg, "font-bold text-center py-2 text-xs")} style={{ color: text }}>
              {group.title}
            </td>
          </tr>
          <tr className="bg-muted/50">
            <th className="text-left py-2 px-3 font-semibold text-xs">Activity</th>
            <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
          </tr>
        </thead>
        <tbody>
          {group.rows.map((row) => (
            <tr key={row.activity} className="border-b border-border hover:bg-muted/30">
              <td className="py-2 px-3 text-left text-xs">{row.activity}</td>
              <td className="py-2 px-3 text-left text-xs text-muted-foreground">{row.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FounderSummaryContent() {
  const stats = FOUNDER_SUMMARY_STATS;
  return (
    <div className="space-y-6">
      {FOUNDER_INVOLVEMENT_GROUPS.map((group) => (
        <FounderGroupTable key={group.id} group={group} />
      ))}

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="font-bold text-primary mb-3 text-sm">SUMMARY</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Accountable (A)</td>
                <td className="py-2 px-3 text-center font-bold">{stats.accountable}</td>
                <td className="py-2 px-3 text-muted-foreground">Strategic decisions only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Responsible (R)</td>
                <td className="py-2 px-3 text-center font-bold">{stats.responsible}</td>
                <td className="py-2 px-3 text-muted-foreground">Meetings & own scorecard</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Consulted (C)</td>
                <td className="py-2 px-3 text-center font-bold">{stats.consulted}</td>
                <td className="py-2 px-3 text-muted-foreground">Input when escalated</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Informed (I)</td>
                <td className="py-2 px-3 text-center font-bold">{stats.informed}</td>
                <td className="py-2 px-3 text-muted-foreground">FYI updates only</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">Not Involved</td>
                <td className="py-2 px-3 text-center font-bold">{stats.notInvolved}</td>
                <td className="py-2 px-3 text-muted-foreground">Fully delegated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
