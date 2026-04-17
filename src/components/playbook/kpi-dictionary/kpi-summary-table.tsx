import { ROLE_KPI_BUNDLES, TOTAL_KPIS } from "@/data/kpi-dictionary";

export function KpiSummaryTable() {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-muted/50">
            <th className="text-left py-3 px-3 font-semibold border-b border-border">Role</th>
            <th className="text-center py-3 px-3 font-semibold border-b border-border w-24">Total KPIs</th>
            <th className="text-left py-3 px-3 font-semibold border-b border-border">Categories</th>
          </tr>
        </thead>
        <tbody>
          {ROLE_KPI_BUNDLES.map((bundle) => (
            <tr key={bundle.id} className="border-b border-border hover:bg-muted/30">
              <td className="py-3 px-3 font-medium">{bundle.title}</td>
              <td className="py-3 px-3 text-center text-accent font-bold">{bundle.count}</td>
              <td className="py-3 px-3 text-muted-foreground">{bundle.categorySummary}</td>
            </tr>
          ))}
          <tr className="bg-muted/50">
            <td className="py-3 px-3 font-bold">TOTAL</td>
            <td className="py-3 px-3 text-center text-accent font-bold">{TOTAL_KPIS}</td>
            <td className="py-3 px-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
