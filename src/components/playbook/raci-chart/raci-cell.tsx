import { cn } from "@/lib/utils";
import type { RaciValue } from "@/types/raci";

interface RaciCellProps {
  value: RaciValue;
  textColor?: string;
}

export function RaciCell({ value, textColor }: RaciCellProps) {
  if (!value || value === "-") {
    return <span className="text-muted-foreground">—</span>;
  }
  return <span className={cn("text-xs font-bold", textColor)}>{value}</span>;
}
