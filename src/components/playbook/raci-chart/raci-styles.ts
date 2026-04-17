import type { RaciValue } from "@/types/raci";

export interface RaciCellStyle {
  bg: string;
  text: string;
}

// Blank or dash means "not involved" - render neutral muted styles.
export function getRaciStyles(value: RaciValue): RaciCellStyle {
  if (!value || value === "-") return { bg: "", text: "text-muted-foreground" };
  if (value === "A/R" || value === "A") return { bg: "bg-raci-accountable", text: "text-white" };
  if (value === "R") return { bg: "bg-raci-responsible", text: "text-white" };
  if (value === "C") return { bg: "bg-raci-consulted", text: "text-black" };
  if (value === "I") return { bg: "bg-raci-informed", text: "text-white" };
  return { bg: "bg-muted", text: "text-foreground" };
}
