const PRE_DAY_ONE_ITEMS = [
  "Send welcome email with start date, time, what to expect",
  "Create Lark account and add to relevant channels",
  "Create Google Workspace account (email, Drive access)",
  "Set up GHL sub-account access (if applicable)",
  "Prepare contract and tax forms",
  "Add to payroll system",
  "Schedule Week 1 orientation meetings",
  "Notify team of new hire and start date",
];

const WEEK_ONE_PHASES = [
  {
    title: "Day 1",
    items: [
      "Welcome call with Founder (30 min) - company story, vision, values",
      "HR orientation - contract signing, policies, benefits, payroll",
      "Tool setup - Lark, email, GHL login verification",
      "Receive Employee Handbook and How We Work guides",
      "Meet the team (quick intro call)",
    ],
  },
  {
    title: "Day 2-3",
    items: [
      "Role-specific training with manager (2-3 hrs/day)",
      "Review job description and KPIs",
      "Tour of tools: Lark Tasks, Google Drive folders, GHL",
      "Start GHL University training (assigned modules)",
      "Shadow existing team member on tasks",
    ],
  },
  {
    title: "Day 4-5",
    items: [
      "Begin first supervised tasks",
      "Continue GHL University training",
      "Daily check-in with manager (15 min)",
      "End of Week 1 check-in with manager",
    ],
  },
];

const WEEKLY_SECTIONS = [
  {
    title: "Week 2: Guided Practice",
    items: [
      "Take on first client tasks (with oversight)",
      "Complete GHL University core modules",
      "Attend first client meeting as observer",
      "Participate in Weekly All-Hands meeting",
      "Daily check-in with manager",
      "Review work and receive feedback",
      "End of Week 2 check-in",
    ],
  },
  {
    title: "Week 3: Increasing Independence",
    items: [
      "Own tasks with spot-check reviews",
      "Complete GHL University advanced modules",
      "Participate (not just observe) in client meetings",
      "Begin SOD/EOD reports independently",
      "Ask questions proactively",
      "End of Week 3 check-in",
    ],
  },
  {
    title: "Week 4: Ramp to Full Capacity",
    items: [
      "Full task ownership with standard review process",
      "Complete all required GHL certifications",
      "Lead portions of client communication",
      "Identify areas where more training needed",
      "30-Day Review with Manager + Founder",
    ],
    emphasizedItem: "30-Day Review with Manager + Founder",
  },
];

const MILESTONES = [
  {
    label: "30 Days",
    outcomes: [
      "Understands role, KPIs, and expectations",
      "Completed all required training",
      "Can execute core tasks independently",
      "Comfortable with tools (Lark, GHL, Drive)",
      "Integrated into team rhythm",
    ],
    reviewFocus: [
      "Training completion verified",
      "Basic skill demonstration",
      "Culture fit assessment",
      "Address any early concerns",
    ],
  },
  {
    label: "60 Days",
    outcomes: [
      "Handles full workload without daily oversight",
      "Meets KPI targets consistently",
      "Proactively identifies issues",
      "Building client relationships",
      "Contributing in team meetings",
    ],
    reviewFocus: [
      "KPI performance review",
      "Quality of work assessment",
      "Team collaboration",
      "Development goals for next 30 days",
    ],
  },
  {
    label: "90 Days",
    outcomes: [
      "Fully productive team member",
      "Exceeds or meets all KPIs",
      "Handles complex situations",
      "May begin mentoring/helping new hires",
      "Clear on growth path",
    ],
    reviewFocus: [
      "Full performance evaluation",
      "Probation completion decision",
      "Compensation review (if applicable)",
      "Long-term development planning",
    ],
  },
];

function Checklist({
  items,
  emphasizedItem,
  className = "",
}: {
  items: string[];
  emphasizedItem?: string;
  className?: string;
}) {
  return (
    <ul className={`list-none space-y-2 ml-0 pl-0 ${className}`.trim()}>
      {items.map((item) => (
        <li
          key={item}
          className="group flex items-start gap-3 rounded p-2 transition-colors hover:bg-muted/50"
        >
          <div className="mt-0.5 h-5 w-5 shrink-0 rounded border border-primary/50 bg-background transition-colors group-hover:border-primary" />
          <span
            className={
              item === emphasizedItem
                ? "text-sm font-bold text-foreground/80"
                : "text-sm text-foreground/80"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InfoField({ label, widthClass }: { label: string; widthClass: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`shrink-0 font-bold ${widthClass}`}>{label}</span>
      <div className="grow border-b border-foreground/30 h-6" />
    </div>
  );
}

function OnboardingInfoCard() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 rounded-lg border border-border bg-muted/30 p-6 md:grid-cols-2">
      <div className="space-y-4">
        <InfoField label="New Hire:" widthClass="w-24" />
        <InfoField label="Start Date:" widthClass="w-24" />
      </div>
      <div className="space-y-4">
        <InfoField label="Role:" widthClass="w-20" />
        <InfoField label="Manager:" widthClass="w-20" />
      </div>
    </div>
  );
}

function WeekOneSection() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 mt-0 border-none pt-0 text-2xl font-bold tracking-tight text-primary">
        Week 1: Orientation & Setup
      </h2>
      {WEEK_ONE_PHASES.map((phase) => (
        <div key={phase.title}>
          <h3 className="mb-3 mt-4 border-none px-2 text-lg font-bold text-accent">
            {phase.title}
          </h3>
          <Checklist items={phase.items} className="mb-6" />
        </div>
      ))}
    </div>
  );
}

function WeeklySection({
  title,
  items,
  emphasizedItem,
}: {
  title: string;
  items: string[];
  emphasizedItem?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 mt-0 border-none pt-0 text-2xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      <Checklist items={items} emphasizedItem={emphasizedItem} />
    </div>
  );
}

function MilestonesTable() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 mt-0 border-none pt-0 text-2xl font-bold tracking-tight text-primary">
        30/60/90 Day Milestones
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-accent/20 bg-accent/10">
              <th className="w-24 p-3 text-left font-bold text-accent-foreground">Milestone</th>
              <th className="p-3 text-left font-bold text-accent-foreground">Expected Outcomes</th>
              <th className="p-3 text-left font-bold text-accent-foreground">Review Focus</th>
            </tr>
          </thead>
          <tbody>
            {MILESTONES.map((milestone) => (
              <tr key={milestone.label} className="border-b border-border hover:bg-muted/5">
                <td className="p-3 align-top text-lg font-bold text-primary">{milestone.label}</td>
                <td className="p-3 align-top">
                  <ul className="ml-4 list-disc space-y-1">
                    {milestone.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3 align-top">
                  <ul className="ml-4 list-disc space-y-1">
                    {milestone.reviewFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SignoffField({ label, widthClass }: { label: string; widthClass: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`shrink-0 font-bold ${widthClass}`}>{label}</span>
      <div className="grow border-b border-foreground/30 h-8" />
    </div>
  );
}

function CompletionSignoff() {
  return (
    <div className="mb-8 mt-12">
      <h2 className="mb-6 mt-0 border-none pt-0 text-2xl font-bold tracking-tight text-primary">
        Onboarding Completion Sign-Off
      </h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
        <SignoffField label="Employee:" widthClass="w-24" />
        <SignoffField label="Date:" widthClass="w-12" />
        <SignoffField label="Manager:" widthClass="w-24" />
        <SignoffField label="Date:" widthClass="w-12" />
        <SignoffField label="Founder:" widthClass="w-24" />
        <SignoffField label="Date:" widthClass="w-12" />
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
        <p>Owner: HR Coordinator</p>
      </div>
    </div>
  );
}

export function OnboardingPlanSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent!">
          Operations Playbook
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary lg:text-4xl">
          Onboarding Plan
        </h1>
        <p className="text-muted-foreground">Week 1-4 + 30/60/90 Day Milestones</p>
      </div>

      <OnboardingInfoCard />

      <div className="mb-8">
        <h2 className="mb-4 mt-0 border-none pt-0 text-2xl font-bold tracking-tight text-primary">
          Pre-Day 1 (HR Coordinator)
        </h2>
        <Checklist items={PRE_DAY_ONE_ITEMS} />
      </div>

      <WeekOneSection />

      {WEEKLY_SECTIONS.map((section) => (
        <WeeklySection
          key={section.title}
          title={section.title}
          items={section.items}
          emphasizedItem={section.emphasizedItem}
        />
      ))}

      <MilestonesTable />
      <CompletionSignoff />
    </div>
  );
}
