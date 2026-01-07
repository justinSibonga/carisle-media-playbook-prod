// ✅ Server Component by default
import React from 'react';


export function OnboardingPlanSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Onboarding Plan
        </h1>
        <p className="text-muted-foreground">
          Week 1-4 + 30/60/90 Day Milestones
        </p>
      </div>

      {/* Info Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-muted/30 rounded-lg border border-border">
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-24 shrink-0">New Hire:</span>
            <div className="border-b border-foreground/30 grow h-6"></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-24 shrink-0">Start Date:</span>
            <div className="border-b border-foreground/30 grow h-6"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-20 shrink-0">Role:</span>
            <div className="border-b border-foreground/30 grow h-6"></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-20 shrink-0">Manager:</span>
            <div className="border-b border-foreground/30 grow h-6"></div>
          </div>
        </div>
      </div>

      {/* Pre-Day 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          Pre-Day 1 (HR Coordinator)
        </h2>
        <ul className="list-none space-y-2 ml-0 pl-0">
          {[
            "Send welcome email with start date, time, what to expect",
            "Create Lark account and add to relevant channels",
            "Create Google Workspace account (email, Drive access)",
            "Set up GHL sub-account access (if applicable)",
            "Prepare contract and tax forms",
            "Add to payroll system",
            "Schedule Week 1 orientation meetings",
            "Notify team of new hire and start date"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Week 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          Week 1: Orientation & Setup
        </h2>
        
        <h3 className="text-lg font-bold text-accent mb-3 mt-4 border-none px-2">Day 1</h3>
        <ul className="list-none space-y-2 ml-0 pl-0 mb-6">
          {[
            "Welcome call with Founder (30 min) — company story, vision, values",
            "HR orientation — contract signing, policies, benefits, payroll",
            "Tool setup — Lark, email, GHL login verification",
            "Receive Employee Handbook and How We Work guides",
            "Meet the team (quick intro call)"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-accent mb-3 mt-4 border-none px-2">Day 2-3</h3>
        <ul className="list-none space-y-2 ml-0 pl-0 mb-6">
          {[
            "Role-specific training with manager (2-3 hrs/day)",
            "Review job description and KPIs",
            "Tour of tools: Lark Tasks, Google Drive folders, GHL",
            "Start GHL University training (assigned modules)",
            "Shadow existing team member on tasks"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-accent mb-3 mt-4 border-none px-2">Day 4-5</h3>
        <ul className="list-none space-y-2 ml-0 pl-0 mb-6">
          {[
            "Begin first supervised tasks",
            "Continue GHL University training",
            "Daily check-in with manager (15 min)",
            "End of Week 1 check-in with manager"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Week 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          Week 2: Guided Practice
        </h2>
        <ul className="list-none space-y-2 ml-0 pl-0">
          {[
            "Take on first client tasks (with oversight)",
            "Complete GHL University core modules",
            "Attend first client meeting as observer",
            "Participate in Weekly All-Hands meeting",
            "Daily check-in with manager",
            "Review work and receive feedback",
            "End of Week 2 check-in"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Week 3 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          Week 3: Increasing Independence
        </h2>
        <ul className="list-none space-y-2 ml-0 pl-0">
          {[
            "Own tasks with spot-check reviews",
            "Complete GHL University advanced modules",
            "Participate (not just observe) in client meetings",
            "Begin SOD/EOD reports independently",
            "Ask questions proactively",
            "End of Week 3 check-in"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Week 4 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          Week 4: Ramp to Full Capacity
        </h2>
        <ul className="list-none space-y-2 ml-0 pl-0">
          {[
            "Full task ownership with standard review process",
            "Complete all required GHL certifications",
            "Lead portions of client communication",
            "Identify areas where more training needed",
            "30-Day Review with Manager + Founder"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors group">
              <div className="w-5 h-5 border border-primary/50 rounded shrink-0 mt-0.5 group-hover:border-primary transition-colors bg-background" />
              <span className={idx === 4 ? "font-bold text-sm text-foreground/80" : "text-sm text-foreground/80"}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 30/60/90 Day Milestones */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-4 border-none pt-0 mt-0">
          30/60/90 Day Milestones
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-accent/10 border-b border-accent/20">
                <th className="p-3 text-left w-24 font-bold text-accent-foreground">Milestone</th>
                <th className="p-3 text-left font-bold text-accent-foreground">Expected Outcomes</th>
                <th className="p-3 text-left font-bold text-accent-foreground">Review Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/5">
                <td className="p-3 font-bold align-top text-lg text-primary">30 Days</td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Understands role, KPIs, and expectations</li>
                    <li>Completed all required training</li>
                    <li>Can execute core tasks independently</li>
                    <li>Comfortable with tools (Lark, GHL, Drive)</li>
                    <li>Integrated into team rhythm</li>
                  </ul>
                </td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Training completion verified</li>
                    <li>Basic skill demonstration</li>
                    <li>Culture fit assessment</li>
                    <li>Address any early concerns</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/5">
                <td className="p-3 font-bold align-top text-lg text-primary">60 Days</td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Handles full workload without daily oversight</li>
                    <li>Meets KPI targets consistently</li>
                    <li>Proactively identifies issues</li>
                    <li>Building client relationships</li>
                    <li>Contributing in team meetings</li>
                  </ul>
                </td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>KPI performance review</li>
                    <li>Quality of work assessment</li>
                    <li>Team collaboration</li>
                    <li>Development goals for next 30 days</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/5">
                <td className="p-3 font-bold align-top text-lg text-primary">90 Days</td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Fully productive team member</li>
                    <li>Exceeds or meets all KPIs</li>
                    <li>Handles complex situations</li>
                    <li>May begin mentoring/helping new hires</li>
                    <li>Clear on growth path</li>
                  </ul>
                </td>
                <td className="p-3 align-top">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Full performance evaluation</li>
                    <li>Probation completion decision</li>
                    <li>Compensation review (if applicable)</li>
                    <li>Long-term development planning</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sign-Off */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 border-none pt-0 mt-0">
          Onboarding Completion Sign-Off
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-24 shrink-0">Employee:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-12 shrink-0">Date:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-24 shrink-0">Manager:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-12 shrink-0">Date:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-bold w-24 shrink-0">Founder:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold w-12 shrink-0">Date:</span>
            <div className="border-b border-foreground/30 grow h-8"></div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-sm text-muted-foreground">
          <p>Owner: HR Coordinator</p>
        </div>
      </div>

    </div>
  );
}
