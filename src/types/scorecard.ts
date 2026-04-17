import type { ReactNode } from "react";

/** Metadata rendered at the top of every role scorecard. */
export interface RoleScorecardMeta {
  /** Page heading, e.g. "Finance Coordinator" */
  title: string;
  /** Role title rendered in the role-info table (may differ from heading). */
  roleTitle: string;
  /** Free-form reports-to text, e.g. "Juliana Carisle Matias (Founder)". */
  reportsTo: string;
  /** Free-form date string, e.g. "December 2025". */
  dateCreated: string;
  /** Subheading under the title. Defaults to "Carisle Media" via the layout. */
  subtitle?: string;
}

export interface RoleScorecardTab {
  key: string;
  label: string;
  title: string;
  description: string;
  content: ReactNode;
}
