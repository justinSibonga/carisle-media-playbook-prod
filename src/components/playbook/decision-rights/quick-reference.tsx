import { THRESHOLD_ROWS } from "@/data/decision-rights";

const GREEN_CELL_STYLE = { backgroundColor: "rgba(34, 197, 94, 0.1)" };
const RED_CELL_STYLE = { backgroundColor: "rgba(239, 68, 68, 0.1)" };
const GREEN_HEADER_STYLE = { backgroundColor: "rgba(34, 197, 94, 0.2)" };
const RED_HEADER_STYLE = { backgroundColor: "rgba(239, 68, 68, 0.2)" };

export function QuickReferenceContent() {
  return (
    <div className="space-y-8">
      <div className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-sm border-collapse min-w-[700px] no-zebra">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left py-3 px-3 font-semibold text-sm w-[25%]">Category</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]" style={GREEN_HEADER_STYLE}>
                Can Decide Alone
              </th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]" style={RED_HEADER_STYLE}>
                Needs Approval
              </th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]">Who Decides Alone</th>
            </tr>
          </thead>
          <tbody>
            {THRESHOLD_ROWS.map((row) => (
              <tr key={row.category} className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 text-left text-sm font-medium">{row.category}</td>
                <td className="py-3 px-3 text-center text-sm" style={GREEN_CELL_STYLE}>
                  {row.canDecide}
                </td>
                <td className="py-3 px-3 text-center text-sm" style={RED_CELL_STYLE}>
                  {row.needsApproval}
                </td>
                <td className="py-3 px-3 text-center text-sm">{row.whoDecides}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
        <h4 className="font-bold text-primary mb-4 text-base">ALWAYS NEEDS FOUNDER APPROVAL (No Threshold)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <ul className="text-sm space-y-2 list-disc pl-5 m-0">
            <li>New client contracts</li>
            <li>Pricing/package changes</li>
            <li>Client termination</li>
            <li>All hiring (final decision)</li>
            <li>All terminations</li>
            <li>Salary changes</li>
          </ul>
          <ul className="text-sm space-y-2 list-disc pl-5 m-0">
            <li>Policy changes</li>
            <li>New marketing channels</li>
            <li>Brand changes</li>
            <li>Partnerships</li>
            <li>Platform migrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
