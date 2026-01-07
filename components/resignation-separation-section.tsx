import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Coins01Icon,
  File01Icon,
  Alert01Icon,
  Idea01Icon
} from "@hugeicons/core-free-icons";

export function ResignationSeparationSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Resignation & Separation
        </h1>
        <p className="text-muted-foreground">
          Carisle Media respects the right of employees and contractors to voluntarily end their service while ensuring a smooth transition.
        </p>
      </div>

      {/* 1. Notice Period */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Notice Period
        </h2>
        
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Employment Type</th>
                <th>Required Notice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Regular Employees</td>
                <td>30 days (written)</td>
              </tr>
              <tr>
                <td className="font-semibold">Independent Contractors</td>
                <td>15-30 days (per contract)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Clearance Process */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Clearance Process
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Clearance Requirements
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Complete handover of tasks and files",
              "Return all company property (laptop, ID, devices)",
              "Settle pending accountabilities",
              "Knowledge transfer to successors",
              "Complete exit interview with HR",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Box */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Alert01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">Important</p>
            <p className="text-sm my-0! text-foreground/80">
              Resigning employees are PROHIBITED from including CM client names in resumes or portfolios. All clients are managed under Carisle Media.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Final Pay & Benefits */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Final Pay & Benefits
        </h2>

        <div className="overflow-x-auto">
          <table className="border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-status-info/10 text-status-info border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={Coins01Icon} size={16} /> Final Pay Includes
                  </div>
                </th>
                <th className="bg-status-success-bg text-status-success border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={File01Icon} size={16} /> Documentation
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unpaid salary (to last day)</td>
                <td>Certificate of Employment (COE)</td>
              </tr>
              <tr>
                <td>Pro-rated 13th month pay</td>
                <td>Service Certification (contractors)</td>
              </tr>
              <tr>
                <td>Other mandated benefits</td>
                <td>Issued within 5-10 business days</td>
              </tr>
              <tr>
                <td>Released within 30 days</td>
                <td>Requires completed clearance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Exit Interview */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          Exit Interview
        </h2>

        <p>
          HR will schedule an exit interview before your last working day to gather feedback and maintain positive relationships.
        </p>

        {/* Rehire Eligibility Box */}
        <div className="bg-status-info/5 border-l-4 border-status-info p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-info shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-info mb-1 text-sm">Rehire Eligibility</p>
            <p className="text-sm my-0! text-foreground/80">
              Employees who leave in good standing may be considered for re-employment. Those with unresolved violations or poaching activities will NOT be eligible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
