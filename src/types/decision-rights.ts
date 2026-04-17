export type DecisionAuthority = "green" | "yellow" | "red";

export interface MatrixRow {
  type: string;
  decider: string;
  approver: string;
  threshold: string;
  notes: string;
  color: DecisionAuthority;
}

export interface MatrixSection {
  title: string;
  rows: MatrixRow[];
}

export interface RoleDecision {
  decision: string;
  threshold: string;
  notes: string;
}

export interface RoleDecisionSection {
  title: string;
  rows: RoleDecision[];
}

export interface ThresholdRowData {
  category: string;
  canDecide: string;
  needsApproval: string;
  whoDecides: string;
}
