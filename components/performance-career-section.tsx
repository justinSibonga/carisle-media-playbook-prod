import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Idea01Icon,
  ChartHistogramIcon,
  BarCode01Icon
} from "@hugeicons/core-free-icons";

export function PerformanceCareerSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Performance & Career Development
        </h1>
        <p className="text-muted-foreground">
          Carisle Media upholds a culture of accountability, growth, and continuous improvement.
        </p>
      </div>

      {/* 1. Probationary Period */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Probationary Period
        </h2>
        
        <p>
          All newly hired employees undergo a 6-month probationary period to assess fit and performance.
        </p>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6 mt-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Regularization Criteria
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Meet or exceed performance KPIs",
              "Demonstrate reliability and work quality",
              "Maintain satisfactory attendance",
              "Adhere to company policies and professionalism",
              "Work effectively with colleagues",
              "Show willingness to learn and adapt",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Performance Evaluation System */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Performance Evaluation System
        </h2>

        <div className="overflow-x-auto">
          <table className="border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-status-info/10 text-status-info border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={ChartHistogramIcon} size={16} /> What We Evaluate
                  </div>
                </th>
                <th className="bg-status-success-bg text-status-success border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={BarCode01Icon} size={16} /> When We Evaluate
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Job responsibilities & output</td>
                <td>End of probation period</td>
              </tr>
              <tr>
                <td>Quality and timeliness</td>
                <td>Annually for regular employees</td>
              </tr>
              <tr>
                <td>Collaboration skills</td>
                <td>Special reviews as needed</td>
              </tr>
              <tr>
                <td>Alignment with company values</td>
                <td>Project completion (contractors)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Career Growth Path */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Career Growth Path
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Focus</th>
                <th>Salary Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Entry Level</td>
                <td>Learning processes, meeting initial KPIs</td>
                <td>—</td>
              </tr>
              <tr>
                <td className="font-semibold">Mid-Level</td>
                <td>Consistent performance, cross-team collaboration</td>
                <td className="font-medium text-accent">8-12%</td>
              </tr>
              <tr>
                <td className="font-semibold">Senior Level</td>
                <td>Role mastery, mentoring peers</td>
                <td className="font-medium text-accent">12-15%</td>
              </tr>
              <tr>
                <td className="font-semibold">Leadership</td>
                <td>Leading teams, strategic decisions</td>
                <td className="font-medium text-accent">15-20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Annual Increase Box */}
        <div className="bg-status-success-bg border-l-4 border-status-success p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-success shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-success mb-1 text-sm">Annual Increase</p>
            <p className="text-sm my-0! text-foreground/80">
              All regular employees receive a 10% base salary increase every hiring anniversary (subject to meeting performance standards).
            </p>
          </div>
        </div>
      </section>

      {/* 4. Training & Development */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          Training & Development
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Growth Opportunities
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Onboarding & orientation for new hires",
              "Skills training and workshops",
              "Performance improvement coaching",
              "Access to online learning materials",
              "Participation in webinars and seminars",
              "Cross-training for additional skills",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
