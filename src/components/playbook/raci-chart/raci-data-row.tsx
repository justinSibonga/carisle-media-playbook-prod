import { cn } from "@/lib/utils";
import { RACI_COLUMN_WIDTH } from "@/constants/raci";
import type { RaciDataRow as RaciDataRowType } from "@/types/raci";
import { RaciCell } from "./raci-cell";
import { getRaciStyles } from "./raci-styles";

const { ACTIVITY, FREQUENCY, ROLE, MARKETING } = RACI_COLUMN_WIDTH;

interface RaciDataRowProps {
  row: RaciDataRowType;
}

export function RaciDataRow({ row }: RaciDataRowProps) {
  const { activity, frequency, founder, ops, marketing, hr, web, finance } = row;
  const founderStyles = getRaciStyles(founder);
  const opsStyles = getRaciStyles(ops);
  const marketingStyles = getRaciStyles(marketing);
  const hrStyles = getRaciStyles(hr);
  const webStyles = getRaciStyles(web);
  const financeStyles = getRaciStyles(finance);

  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td
        style={{ width: ACTIVITY, minWidth: ACTIVITY }}
        className="py-3 px-3 text-left text-sm"
      >
        {activity}
      </td>
      <td
        style={{ width: FREQUENCY, minWidth: FREQUENCY }}
        className="py-3 px-3 text-center text-sm text-muted-foreground"
      >
        {frequency}
      </td>
      <td
        style={{ width: ROLE, minWidth: ROLE }}
        className={cn("py-3 pl-4 pr-2 text-center", founderStyles.bg, founderStyles.text)}
      >
        <RaciCell value={founder} textColor={founderStyles.text} />
      </td>
      <td
        style={{ width: ROLE, minWidth: ROLE }}
        className={cn("py-3 pl-6 pr-2 text-center", opsStyles.bg, opsStyles.text)}
      >
        <RaciCell value={ops} textColor={opsStyles.text} />
      </td>
      <td
        style={{ width: MARKETING, minWidth: MARKETING }}
        className={cn("py-3 pl-3 pr-2 text-center", marketingStyles.bg, marketingStyles.text)}
      >
        <RaciCell value={marketing} textColor={marketingStyles.text} />
      </td>
      <td
        style={{ width: ROLE, minWidth: ROLE }}
        className={cn("py-3 pl-6 pr-2 text-center", hrStyles.bg, hrStyles.text)}
      >
        <RaciCell value={hr} textColor={hrStyles.text} />
      </td>
      <td
        style={{ width: ROLE, minWidth: ROLE }}
        className={cn("py-3 pl-4 pr-2 text-center", webStyles.bg, webStyles.text)}
      >
        <RaciCell value={web} textColor={webStyles.text} />
      </td>
      <td
        style={{ width: ROLE, minWidth: ROLE }}
        className={cn("py-3 pl-4 pr-2 text-center", financeStyles.bg, financeStyles.text)}
      >
        <RaciCell value={finance} textColor={financeStyles.text} />
      </td>
    </tr>
  );
}
