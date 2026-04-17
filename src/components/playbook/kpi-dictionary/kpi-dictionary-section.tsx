"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import { ROLE_KPI_BUNDLES, flattenRoleKpis } from "@/data/kpi-dictionary";
import { ByRoleTable, QuickRefTable, SectionedKpiTable } from "./kpi-tables";
import { KpiSummaryTable } from "./kpi-summary-table";

const dictionaryTabs = ROLE_KPI_BUNDLES.map((bundle) => ({
  key: bundle.id,
  label: bundle.label,
  title: bundle.title,
  description: bundle.description,
  content: <SectionedKpiTable sections={bundle.categories} />,
}));

const byRoleTabs = ROLE_KPI_BUNDLES.map((bundle) => ({
  key: `${bundle.id}-role`,
  label: bundle.label,
  title: bundle.title,
  description: `${bundle.count} KPIs`,
  content: (
    <ByRoleTable
      title={bundle.title.toUpperCase()}
      count={bundle.count}
      data={flattenRoleKpis(bundle)}
    />
  ),
}));

const quickRefTabs = ROLE_KPI_BUNDLES.map((bundle) => ({
  key: `${bundle.id}-quick`,
  label: bundle.label,
  title: bundle.title,
  description: `${bundle.count} KPIs`,
  content: <QuickRefTable title={bundle.title.toUpperCase()} data={flattenRoleKpis(bundle)} />,
}));

export function KpiDictionarySection() {
  return (
    <div className="animate-fade-in prose-handbook space-y-12">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">Operations Playbook</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">KPI Dictionary</h1>
        <p className="text-muted-foreground">
          All metrics from role scorecards with definitions, formulas, and targets
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          KPI Summary by Role
        </h2>
        <KpiSummaryTable />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Full Dictionary by Role
        </h2>
        <FolderTabs tabs={dictionaryTabs} defaultTab={ROLE_KPI_BUNDLES[0].id} />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          KPIs by Role
        </h2>
        <FolderTabs tabs={byRoleTabs} defaultTab={`${ROLE_KPI_BUNDLES[0].id}-role`} />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-2 pb-2 border-b border-border">
          KPI Quick Reference
        </h2>
        <p className="text-muted-foreground mb-6 text-sm italic">Print this page — All targets at a glance</p>
        <FolderTabs tabs={quickRefTabs} defaultTab={`${ROLE_KPI_BUNDLES[0].id}-quick`} />
      </section>
    </div>
  );
}
