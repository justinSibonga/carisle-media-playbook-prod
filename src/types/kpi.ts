export interface KpiData {
  kpi: string;
  definition: string;
  formula: string;
  frequency: string;
  target: string;
  dataSource: string;
}

export interface KpiCategory {
  title: string;
  data: KpiData[];
}

export interface RoleKpiBundle {
  /** Role identifier used as the tab key suffix, e.g. "operations". */
  id: string;
  /** Tab label, e.g. "Operations". */
  label: string;
  /** Full role title, e.g. "Operations Coordinator (Danica)". */
  title: string;
  /** Role summary category (e.g. "Client Promise & Internal Process"). */
  categorySummary: string;
  /** Total KPIs for this role. */
  count: number;
  /** Description shown in the tab card header. */
  description: string;
  /** KPI categories (each with its own sub-table). */
  categories: KpiCategory[];
}
