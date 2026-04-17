import {
  MEETING_OVERVIEW_ROWS,
  WEEKLY_OPS_AGENDA,
  ALL_HANDS_AGENDA,
  AD_HOC_MEETING_REASONS,
  AD_HOC_MEETING_RULES,
  MONTHLY_REVIEW_AGENDA,
  QUARTERLY_PLANNING_AGENDA,
  MEETING_DO_ITEMS,
  MEETING_DONT_ITEMS,
} from "@/data/meeting-cadence";

function MeetingCadenceHeader() {
  return (
    <div className="mb-8">
      <p className="text-accent! mb-2 text-sm font-medium uppercase tracking-widest">
        Operations Playbook
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary lg:text-4xl">
        Meeting Cadence
      </h1>
      <p className="text-muted-foreground">Our Rhythm of Communication & Alignment</p>
    </div>
  );
}

function NumberedSectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 border-b border-border pb-2 text-2xl font-bold tracking-tight text-primary">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
        {number}
      </span>
      <span className="hidden">. </span>
      {title}
    </h2>
  );
}

function RequiredOutput({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg bg-muted/50 p-4">
      <p className="my-0! text-sm">
        <strong className="text-primary">Required Output:</strong> {children}
      </p>
    </div>
  );
}

function AgendaTable({ rows }: { rows: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th className="w-20">Time</th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([time, topic, details]) => (
            <tr key={topic}>
              <td>{time}</td>
              <td className="font-semibold">{topic}</td>
              <td>{details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MeetingOverviewSection() {
  return (
    <>
      <h2 id="meeting-overview">Meeting Overview</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Meeting</th>
              <th>Frequency</th>
              <th>Duration</th>
              <th>Attendees</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {MEETING_OVERVIEW_ROWS.map(([meeting, frequency, duration, attendees, owner]) => (
              <tr key={meeting}>
                <td className="font-semibold">{meeting}</td>
                <td>{frequency}</td>
                <td>{duration}</td>
                <td>{attendees}</td>
                <td>{owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DailyStandupSection() {
  return (
    <section>
      <NumberedSectionHeading number="1" title="Daily Standup (Async via Lark)" />

      <h3 className="mb-2 mt-6 text-primary">SOD (Start of Day) - Post by 9:00 AM:</h3>
      <ul>
        <li>Top 3 priorities for today</li>
        <li>Any blockers or help needed</li>
      </ul>

      <h3 className="mb-2 mt-6 text-primary">EOD (End of Day) - Post by 6:00 PM:</h3>
      <ul>
        <li>What got done today</li>
        <li>What&apos;s carrying over to tomorrow</li>
        <li>Any issues or wins to flag</li>
      </ul>
    </section>
  );
}

function WeeklyOpsMarketingSection() {
  return (
    <section>
      <NumberedSectionHeading number="2" title="Weekly Ops + Marketing Sync" />

      <p>
        <strong>When:</strong> Every Monday, 9:00 AM (30 min)
        <br />
        <strong>Who:</strong> Operations Coordinator + Marketing Specialist
      </p>

      <p>
        <strong>Purpose:</strong> Align on client deliverables, content calendars, and handoffs between
        ops and marketing tasks.
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <AgendaTable rows={WEEKLY_OPS_AGENDA} />
      <RequiredOutput>Brief notes in Ops + Marketing Lark channel</RequiredOutput>
    </section>
  );
}

function WeeklyAllHandsSection() {
  return (
    <section>
      <NumberedSectionHeading number="3" title="Weekly All-Hands (All Departments)" />

      <p>
        <strong>When:</strong> Every Friday, 10:00 AM (30-45 min)
        <br />
        <strong>Who:</strong> All team members (Ops, Marketing, Web Dev, Finance, HR)
      </p>

      <p>
        <strong>Purpose:</strong> Full team alignment, celebrate wins, address cross-department issues,
        maintain team connection.
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <AgendaTable rows={ALL_HANDS_AGENDA} />
      <RequiredOutput>Meeting notes posted to team Lark channel within 1 hour</RequiredOutput>
    </section>
  );
}

function AdHocMeetingsSection() {
  return (
    <section>
      <NumberedSectionHeading number="4" title="Ad-Hoc / As-Needed Meetings" />

      <p>
        <strong>When:</strong> As needed - scheduled same day or 24h in advance
        <br />
        <strong>Who:</strong> Only people who need to be there (keep it small)
      </p>

      <h3 className="mb-2 mt-6 text-primary">When to call an ad-hoc meeting:</h3>
      <ul>
        {AD_HOC_MEETING_REASONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mb-2 mt-6 text-primary">Rules for ad-hoc meetings:</h3>
      <ul>
        {AD_HOC_MEETING_RULES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function MonthlyPerformanceReviewSection() {
  return (
    <section>
      <NumberedSectionHeading number="5" title="Monthly Performance Review" />

      <p>
        <strong>When:</strong> Last week of each month (45-60 min per person)
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <ol>
        {MONTHLY_REVIEW_AGENDA.map(([title, duration, details]) => (
          <li key={title}>
            <strong>{title}</strong> ({duration}) - {details}
          </li>
        ))}
      </ol>

      <RequiredOutput>Completed Monthly Evaluation form saved to employee file</RequiredOutput>
    </section>
  );
}

function QuarterlyPlanningSection() {
  return (
    <section>
      <NumberedSectionHeading number="6" title="Quarterly Planning Session" />

      <p>
        <strong>When:</strong> First week of Jan, Apr, Jul, Oct (2-3 hours)
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <ol start={6}>
        {QUARTERLY_PLANNING_AGENDA.map(([title, duration, details]) => (
          <li key={title}>
            <strong>{title}</strong> ({duration}) - {details}
          </li>
        ))}
      </ol>

      <RequiredOutput>Quarterly Goals document shared with team within 48 hours</RequiredOutput>
    </section>
  );
}

function MeetingRuleCard({
  title,
  headerClassName,
  bulletClassName,
  items,
}: {
  title: string;
  headerClassName: string;
  bulletClassName: string;
  items: readonly string[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={headerClassName}>{title}</div>
      <div className="space-y-3 bg-card p-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm">
            <span className={bulletClassName}>•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeetingRulesSection() {
  return (
    <section>
      <NumberedSectionHeading number="7" title="Meeting Rules (All Meetings)" />

      <div className="grid gap-6 md:grid-cols-2">
        <MeetingRuleCard
          title="✓ DO"
          headerClassName="bg-primary px-4 py-3 font-medium text-primary-foreground"
          bulletClassName="font-bold text-status-success"
          items={MEETING_DO_ITEMS}
        />
        <MeetingRuleCard
          title="✕ DON'T"
          headerClassName="bg-destructive px-4 py-3 font-medium text-destructive-foreground"
          bulletClassName="font-bold text-destructive"
          items={MEETING_DONT_ITEMS}
        />
      </div>
    </section>
  );
}

function MeetingCadenceFooter() {
  return (
    <div className="mt-12 border-t border-border pt-6">
      <p className="text-sm italic text-muted-foreground">Owner: Operations Coordinator</p>
    </div>
  );
}

export function MeetingCadenceSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <MeetingCadenceHeader />
      <MeetingOverviewSection />
      <DailyStandupSection />
      <WeeklyOpsMarketingSection />
      <WeeklyAllHandsSection />
      <AdHocMeetingsSection />
      <MonthlyPerformanceReviewSection />
      <QuarterlyPlanningSection />
      <MeetingRulesSection />
      <MeetingCadenceFooter />
    </div>
  );
}
