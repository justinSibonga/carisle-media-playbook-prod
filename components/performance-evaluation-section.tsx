// ✅ Server Component by default

export function PerformanceEvaluationSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Performance Evaluation Framework
        </h1>
        <p className="text-muted-foreground">
          How We Measure and Develop Our Team
        </p>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          1
        </span>
        <span className="hidden">. </span>
        Evaluation Components
      </h2>
      <p>
        Every team member is evaluated on <strong>4 components</strong> with
        weighted scoring:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Weight</th>
              <th>What It Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">A: Attendance</td>
              <td className="font-bold text-accent">10%</td>
              <td>Days present, punctuality, leave compliance</td>
            </tr>
            <tr>
              <td className="font-semibold">B: KPI Performance</td>
              <td className="font-bold text-accent">40%</td>
              <td>Role-specific KPIs from individual scorecard</td>
            </tr>
            <tr>
              <td className="font-semibold">C: Core Values</td>
              <td className="font-bold text-accent">20%</td>
              <td>Demonstration of 4 company values</td>
            </tr>
            <tr>
              <td className="font-semibold">D: Role Behaviors</td>
              <td className="font-bold text-accent">30%</td>
              <td>Role-specific behaviors from scorecard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          2
        </span>
        <span className="hidden">. </span>
        Rating Scale (1-5)
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th className="w-20">Rating</th>
              <th className="w-36">Level</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-destructive text-center">1</td>
              <td className="font-semibold text-destructive">
                Needs Improvement
              </td>
              <td>
                Consistently below expectations; requires immediate attention
              </td>
            </tr>
            <tr>
              <td className="font-bold text-status-caution text-center">2</td>
              <td className="font-semibold text-status-caution">Developing</td>
              <td>
                Sometimes meets expectations but inconsistent; needs coaching
              </td>
            </tr>
            <tr>
              <td className="font-bold text-status-warning text-center">3</td>
              <td className="font-semibold text-status-warning">
                Meets Expectations
              </td>
              <td>
                Consistently delivers what is expected; solid performance
              </td>
            </tr>
            <tr>
              <td className="font-bold text-status-info text-center">4</td>
              <td className="font-semibold text-status-info">
                Exceeds Expectations
              </td>
              <td>
                Frequently goes above and beyond; role model in most areas
              </td>
            </tr>
            <tr>
              <td className="font-bold text-accent text-center">5</td>
              <td className="font-semibold text-accent">Exceptional</td>
              <td>
                Outstanding in all areas; sets the standard for others
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          3
        </span>
        <span className="hidden">. </span>
        Evaluation Cadence
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Review Type</th>
              <th>Frequency</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Weekly Check-in</td>
              <td>Every week (15-30 min)</td>
              <td>Task progress, blockers, quick feedback</td>
            </tr>
            <tr>
              <td className="font-semibold">Monthly Review</td>
              <td>End of each month</td>
              <td>Full 4-component evaluation, scoring, feedback</td>
            </tr>
            <tr>
              <td className="font-semibold">Quarterly Review</td>
              <td>End of Q1, Q2, Q3, Q4</td>
              <td>3-month trend analysis, development goals, career conversation</td>
            </tr>
            <tr>
              <td className="font-semibold">Annual Review</td>
              <td>December / Anniversary</td>
              <td>Full year summary, compensation review, promotion decisions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          4
        </span>
        <span className="hidden">. </span>
        Final Grade Calculation
      </h2>
      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Formula:</strong> (A × 10%) + (B ×
          40%) + (C × 20%) + (D × 30%) = Final Score
        </p>
      </div>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Final Score</th>
              <th>Overall Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">4.5 - 5.0</td>
              <td className="font-semibold text-accent">Exceptional</td>
              <td>Recognition, bonus consideration, growth opportunities</td>
            </tr>
            <tr>
              <td className="font-bold">3.5 - 4.4</td>
              <td className="font-semibold text-status-info">
                Exceeds Expectations
              </td>
              <td>Positive feedback, development investment</td>
            </tr>
            <tr>
              <td className="font-bold">2.5 - 3.4</td>
              <td className="font-semibold text-status-warning">
                Meets Expectations
              </td>
              <td>Continue current path, identify growth areas</td>
            </tr>
            <tr>
              <td className="font-bold">1.5 - 2.4</td>
              <td className="font-semibold text-status-caution">Developing</td>
              <td>Coaching plan, closer monitoring, support</td>
            </tr>
            <tr>
              <td className="font-bold">1.0 - 1.4</td>
              <td className="font-semibold text-destructive">
                Needs Improvement
              </td>
              <td>
                <strong className="text-destructive">PIP required</strong> — See
                Coaching &amp; PIP SOP
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Owner: Founder
        </p>
      </div>
    </div>
  );
}
