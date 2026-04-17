/**
 * Types used by the RACI chart. Values are kept as string literals so the
 * data files stay terse (`"A/R"` rather than an enum import everywhere).
 */

export type RaciValue = "R" | "A" | "A/R" | "C" | "I" | "-" | "";

export interface RaciRoleValues {
  founder: RaciValue;
  ops: RaciValue;
  marketing: RaciValue;
  hr: RaciValue;
  web: RaciValue;
  finance: RaciValue;
}

export interface RaciDataRow extends RaciRoleValues {
  activity: string;
  frequency: string;
}

export type RaciTableEntry =
  | { kind: "header"; title: string }
  | { kind: "row"; row: RaciDataRow };

export interface RoleOwnedActivity {
  activity: string;
  category: string;
}

export interface RoleSectionData {
  title: string;
  total: number;
  activities: RoleOwnedActivity[];
}

export type FounderInvolvementType = "accountable" | "responsible" | "consulted" | "informed";

export interface FounderInvolvementGroup {
  id: string;
  title: string;
  type: FounderInvolvementType;
  rows: RoleOwnedActivity[];
}

export interface FounderSummaryStats {
  accountable: number;
  responsible: number;
  consulted: number;
  informed: number;
  notInvolved: number;
}
