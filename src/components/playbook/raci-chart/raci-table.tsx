import { RACI_COLUMN_WIDTH } from "@/constants/raci";
import type { RaciTableEntry } from "@/types/raci";
import { RaciDataRow } from "./raci-data-row";
import { RaciSectionHeader } from "./raci-section-header";

const { ACTIVITY, FREQUENCY, ROLE, MARKETING } = RACI_COLUMN_WIDTH;

interface RaciTableProps {
  entries: RaciTableEntry[];
}

export function RaciTable({ entries }: RaciTableProps) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-sm border-collapse table-fixed min-w-[800px]">
        <colgroup>
          <col style={{ width: ACTIVITY }} />
          <col style={{ width: FREQUENCY }} />
          <col style={{ width: ROLE }} />
          <col style={{ width: ROLE }} />
          <col style={{ width: MARKETING }} />
          <col style={{ width: ROLE }} />
          <col style={{ width: ROLE }} />
          <col style={{ width: ROLE }} />
        </colgroup>
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th style={{ width: ACTIVITY, minWidth: ACTIVITY }} className="text-left py-3 px-3 font-semibold text-sm">
              Activity
            </th>
            <th style={{ width: FREQUENCY, minWidth: FREQUENCY }} className="text-center py-3 px-1 font-semibold text-sm">
              Frequency
            </th>
            <th style={{ width: ROLE, minWidth: ROLE }} className="text-center py-3 px-2 font-semibold text-sm">
              Founder
            </th>
            <th style={{ width: ROLE, minWidth: ROLE }} className="text-center py-3 px-2 font-semibold text-sm">
              Ops
            </th>
            <th style={{ width: MARKETING, minWidth: MARKETING }} className="text-center py-3 px-2 font-semibold text-sm">
              Marketing
            </th>
            <th style={{ width: ROLE, minWidth: ROLE }} className="text-center py-3 px-2 font-semibold text-sm">
              HR
            </th>
            <th style={{ width: ROLE, minWidth: ROLE }} className="text-center py-3 px-2 font-semibold text-sm">
              Web Dev
            </th>
            <th style={{ width: ROLE, minWidth: ROLE }} className="text-center py-3 px-2 font-semibold text-sm">
              Finance
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) =>
            entry.kind === "header" ? (
              <RaciSectionHeader key={`h-${index}-${entry.title}`} title={entry.title} />
            ) : (
              <RaciDataRow key={`r-${index}-${entry.row.activity}`} row={entry.row} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
