import type { KpiCategory, KpiData } from "@/types/kpi";

interface KpiTableProps {
  data: KpiData[];
  categoryTitle?: string;
}

export function KpiTable({ data, categoryTitle }: KpiTableProps) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full border-collapse min-w-[600px]">
        {categoryTitle && (
          <thead>
            <tr>
              <th colSpan={5} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
                {categoryTitle}
              </th>
            </tr>
          </thead>
        )}
        <thead>
          <tr className="bg-muted/50">
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border w-[35%]">KPI</th>
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border hidden lg:table-cell w-[25%]">Definition</th>
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border hidden xl:table-cell w-[20%]">Formula</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-[10%]">Frequency</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-[10%]">Target</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.kpi} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm align-top">
                <div>{row.kpi}</div>
                <div className="text-xs text-muted-foreground lg:hidden mt-1">{row.definition}</div>
              </td>
              <td className="py-2.5 px-4 text-sm text-muted-foreground hidden lg:table-cell align-top">{row.definition}</td>
              <td className="py-2.5 px-4 text-xs font-mono text-muted-foreground hidden xl:table-cell align-top">{row.formula}</td>
              <td className="py-2.5 px-4 text-sm text-center text-muted-foreground align-top">{row.frequency}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent align-top">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SectionedKpiTable({ sections }: { sections: KpiCategory[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <KpiTable key={section.title} data={section.data} categoryTitle={section.title} />
      ))}
    </div>
  );
}

interface QuickRefTableProps {
  title: string;
  data: KpiData[];
}

export function QuickRefTable({ title, data }: QuickRefTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={2} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.kpi} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm">{row.kpi}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent w-28">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ByRoleTableProps {
  title: string;
  count: number;
  data: KpiData[];
}

export function ByRoleTable({ title, count, data }: ByRoleTableProps) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={3} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
              {title} ({count} KPIs)
            </th>
          </tr>
          <tr className="bg-muted/50">
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border">KPI</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-28">Frequency</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-28">Target</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.kpi} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm">{row.kpi}</td>
              <td className="py-2.5 px-4 text-sm text-center text-muted-foreground">{row.frequency}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
