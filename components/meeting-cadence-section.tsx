// ✅ Server Component by default

export function MeetingCadenceSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Meeting Cadence
        </h1>
        <p className="text-muted-foreground">
          Our Rhythm of Communication &amp; Alignment
        </p>
      </div>

      {/* Meeting Overview */}
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
            <tr>
              <td className="font-semibold">Daily Standup</td>
              <td>Daily (async)</td>
              <td>5 min (SOD/EOD)</td>
              <td>All team</td>
              <td>Each person</td>
            </tr>
            <tr>
              <td className="font-semibold">Weekly Ops + Marketing</td>
              <td>Weekly</td>
              <td>30 min</td>
              <td>Ops + Marketing</td>
              <td>Ops Coord</td>
            </tr>
            <tr>
              <td className="font-semibold">Weekly All-Hands</td>
              <td>Weekly</td>
              <td>30-45 min</td>
              <td>All departments</td>
              <td>Ops Coord</td>
            </tr>
            <tr>
              <td className="font-semibold">Ad-Hoc / As-Needed</td>
              <td>As needed</td>
              <td>15-30 min</td>
              <td>Relevant people</td>
              <td>Requester</td>
            </tr>
            <tr>
              <td className="font-semibold">Client Weekly Check-in</td>
              <td>Weekly per client</td>
              <td>30 min</td>
              <td>Ops + Client</td>
              <td>Ops Coord</td>
            </tr>
            <tr>
              <td className="font-semibold">Monthly Review</td>
              <td>Monthly</td>
              <td>45-60 min</td>
              <td>Founder + 1</td>
              <td>Founder</td>
            </tr>
            <tr>
              <td className="font-semibold">Quarterly Planning</td>
              <td>Quarterly</td>
              <td>2-3 hours</td>
              <td>All team</td>
              <td>Founder</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 1. Daily Standup */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          1
        </span>
        <span className="hidden">. </span>
        Daily Standup (Async via Lark)
      </h2>

      <h3 className="text-primary mt-6 mb-2">
        SOD (Start of Day) — Post by 9:00 AM:
      </h3>
      <ul>
        <li>Top 3 priorities for today</li>
        <li>Any blockers or help needed</li>
      </ul>

      <h3 className="text-primary mt-6 mb-2">
        EOD (End of Day) — Post by 6:00 PM:
      </h3>
      <ul>
        <li>What got done today</li>
        <li>What&apos;s carrying over to tomorrow</li>
        <li>Any issues or wins to flag</li>
      </ul>

      {/* 2. Weekly Ops + Marketing Sync */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          2
        </span>
        <span className="hidden">. </span>
        Weekly Ops + Marketing Sync
      </h2>

      <p>
        <strong>When:</strong> Every Monday, 9:00 AM (30 min)
        <br />
        <strong>Who:</strong> Operations Coordinator + Marketing Specialist
      </p>

      <p>
        <strong>Purpose:</strong> Align on client deliverables, content
        calendars, and handoffs between ops and marketing tasks.
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
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
            <tr>
              <td>5 min</td>
              <td className="font-semibold">Client Status Quick Check</td>
              <td>Any urgent client issues or updates</td>
            </tr>
            <tr>
              <td>10 min</td>
              <td className="font-semibold">This Week&apos;s Deliverables</td>
              <td>What&apos;s due, who&apos;s doing what, dependencies</td>
            </tr>
            <tr>
              <td>10 min</td>
              <td className="font-semibold">Handoffs &amp; Blockers</td>
              <td>
                Items passing between Ops ↔ Marketing, any blockers
              </td>
            </tr>
            <tr>
              <td>5 min</td>
              <td className="font-semibold">Action Items</td>
              <td>Confirm who does what by when</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Required Output:</strong> Brief notes
          in Ops + Marketing Lark channel
        </p>
      </div>

      {/* 3. Weekly All-Hands */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          3
        </span>
        <span className="hidden">. </span>
        Weekly All-Hands (All Departments)
      </h2>

      <p>
        <strong>When:</strong> Every Friday, 10:00 AM (30-45 min)
        <br />
        <strong>Who:</strong> All team members (Ops, Marketing, Web Dev,
        Finance, HR)
      </p>

      <p>
        <strong>Purpose:</strong> Full team alignment, celebrate wins, address
        cross-department issues, maintain team connection.
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
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
            <tr>
              <td>5 min</td>
              <td className="font-semibold">Wins &amp; Shoutouts</td>
              <td>Celebrate completed work, client feedback, team wins</td>
            </tr>
            <tr>
              <td>10 min</td>
              <td className="font-semibold">Department Updates</td>
              <td>Quick update from each dept (Ops, Marketing, Dev, Finance)</td>
            </tr>
            <tr>
              <td>10 min</td>
              <td className="font-semibold">Client Pipeline &amp; Status</td>
              <td>Active clients, upcoming launches, new inquiries</td>
            </tr>
            <tr>
              <td>10 min</td>
              <td className="font-semibold">Cross-Dept Issues</td>
              <td>Issues needing multiple departments, decisions to make</td>
            </tr>
            <tr>
              <td>5 min</td>
              <td className="font-semibold">Announcements &amp; Close</td>
              <td>Company news, upcoming events, action items recap</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Required Output:</strong> Meeting
          notes posted to team Lark channel within 1 hour
        </p>
      </div>

      {/* 4. Ad-Hoc / As-Needed Meetings */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          4
        </span>
        <span className="hidden">. </span>
        Ad-Hoc / As-Needed Meetings
      </h2>

      <p>
        <strong>When:</strong> As needed — scheduled same day or 24h in advance
        <br />
        <strong>Who:</strong> Only people who need to be there (keep it small)
      </p>

      <h3 className="text-primary mt-6 mb-2">When to call an ad-hoc meeting:</h3>
      <ul>
        <li>Urgent client issue that needs immediate discussion</li>
        <li>Blocker that can&apos;t wait until next scheduled meeting</li>
        <li>Complex problem that needs real-time collaboration</li>
        <li>Decision that requires multiple people&apos;s input</li>
      </ul>

      <h3 className="text-primary mt-6 mb-2">Rules for ad-hoc meetings:</h3>
      <ul>
        <li>Must have a clear purpose stated in the invite</li>
        <li>Keep to 15-30 min max</li>
        <li>Document outcome/decision in relevant Lark channel</li>
        <li>If it can be resolved async (Lark message), don&apos;t meet</li>
      </ul>

      {/* 5. Monthly Performance Review */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          5
        </span>
        <span className="hidden">. </span>
        Monthly Performance Review
      </h2>

      <p>
        <strong>When:</strong> Last week of each month (45-60 min per person)
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <ol>
        <li>
          <strong>Review scorecard results</strong> (10 min) — Walk through 4
          components
        </li>
        <li>
          <strong>Discuss wins</strong> (10 min) — What went well, recognize
          achievements
        </li>
        <li>
          <strong>Discuss growth areas</strong> (15 min) — Where to improve,
          support needed
        </li>
        <li>
          <strong>Set next month focus</strong> (10 min) — 1-2 specific
          development goals
        </li>
        <li>
          <strong>Employee feedback</strong> (10 min) — Their input on support,
          processes, team
        </li>
      </ol>

      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Required Output:</strong> Completed
          Monthly Evaluation form saved to employee file
        </p>
      </div>

      {/* 6. Quarterly Planning Session */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          6
        </span>
        <span className="hidden">. </span>
        Quarterly Planning Session
      </h2>

      <p>
        <strong>When:</strong> First week of Jan, Apr, Jul, Oct (2-3 hours)
      </p>

      <p className="mb-2">
        <strong>Agenda:</strong>
      </p>
      <ol start={6}>
        <li>
          <strong>Review last quarter</strong> (30 min) — What worked, what
          didn&apos;t, key metrics
        </li>
        <li>
          <strong>Company updates</strong> (15 min) — Business health, new
          clients, changes
        </li>
        <li>
          <strong>Quarter goals</strong> (45 min) — Set 3-5 company priorities
          for next 90 days
        </li>
        <li>
          <strong>Team goals</strong> (30 min) — How each role supports company
          goals
        </li>
        <li>
          <strong>Process improvements</strong> (20 min) — What to start, stop,
          continue
        </li>
        <li>
          <strong>Open discussion</strong> (20 min) — Team input, questions,
          ideas
        </li>
      </ol>

      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Required Output:</strong> Quarterly
          Goals document shared with team within 48 hours
        </p>
      </div>

      {/* 7. Meeting Rules */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
          7
        </span>
        <span className="hidden">. </span>
        Meeting Rules (All Meetings)
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* DO Card */}
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="bg-primary text-primary-foreground px-4 py-3 font-medium">
            ✓ DO
          </div>
          <div className="bg-card p-4 space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <span className="text-status-success font-bold">•</span>
              <span>Start on time (don&apos;t wait for latecomers)</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-status-success font-bold">•</span>
              <span>End with clear action items (who, what, when)</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-status-success font-bold">•</span>
              <span>Camera ON for video calls</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-status-success font-bold">•</span>
              <span>Record all client meetings</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-status-success font-bold">•</span>
              <span>Post AI summary within 24h (client meetings)</span>
            </div>
          </div>
        </div>

        {/* DON'T Card */}
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
            ✗ DON&apos;T
          </div>
          <div className="bg-card p-4 space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <span className="text-destructive font-bold">•</span>
              <span>Hold meetings without an agenda</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-destructive font-bold">•</span>
              <span>Let meetings run over without permission</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-destructive font-bold">•</span>
              <span>Multitask (check phone, work on other things)</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-destructive font-bold">•</span>
              <span>Skip meetings without notice</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <span className="text-destructive font-bold">•</span>
              <span>Schedule meetings without checking calendars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Owner: Operations Coordinator
        </p>
      </div>
    </div>
  );
}
