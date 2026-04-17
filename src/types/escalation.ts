export type SeverityLevel = "P1" | "P2" | "P3" | "P4";

export interface SeverityDefinition {
  level: SeverityLevel;
  name: string;
  description: string;
  responseTime: string;
  badgeClass: string;
}

export interface EscalationMatrixRow {
  issueType: string;
  examples: string;
  level1: string;
  level2: string;
  level3: string;
}

export interface EscalationMatrix {
  title: string;
  id: string;
  rows: EscalationMatrixRow[];
}

export interface ResolutionOwner {
  title: string;
  description: string;
}
