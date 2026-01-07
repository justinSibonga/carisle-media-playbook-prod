"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, Alert01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

export default function OperationsCoordinatorScorecardPage() {
  const tabs = [
    {
      key: "purpose",
      label: "1. Purpose",
      title: "Role Purpose",
      description: "Understanding the core purpose and accountability of this role",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg! font-semibold!">
              Make sure work moves every day.
            </p>
            <p>
              Own daily task coordination, client communication, and team workload so work never gets stuck, deadlines are met, capacity is fully utilized, and operations continue smoothly – even when someone is absent – without founder involvement.
            </p>
            <p className="font-medium text-primary">
              This role exists to remove task chasing, status questions, and &quot;is this done yet?&quot; from the Founder completely.
            </p>
          </div>

          <div>
            <h3>Primary Accountability</h3>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If work is stuck, unclear, late, or waiting on someone – this role <u>owns</u> fixing it.
              </p>
            </div>
          </div>

          <div>
            <h3>If This Role Disappeared for 30 Days, What Would Break?</h3>
            <ul>
              <li>Tasks would stall or move inconsistently</li>
              <li>Deadlines would quietly slip</li>
              <li>Clients would wait for updates or escalate</li>
              <li>Sick leave or absences would cause chaos</li>
              <li>Work would depend on the founder to move forward</li>
            </ul>
          </div>

          <div>
            <h3>Specific Outcomes This Role Owns</h3>
            <p>This role is successful when:</p>
            <div className="grid gap-2 my-4 not-prose">
              {[
                "Team tasks are handled and redistributed daily without founder input",
                "Clients receive timely communication without the founder attending or presenting",
                "Team capacity is fully utilized (no idle time, no overload)",
                "Work continues smoothly even when someone is sick or unavailable",
                "Tasks move forward proactively, not just \"worked on\"",
                "Blockers are identified, researched, and acted on early",
                "KPI reports reflect reality, not explanations",
                "The founder does not need to manage, follow up, or coordinate execution",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-status-success shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>This Role Exists to Prevent</h3>
            <div className="grid gap-2 sm:grid-cols-2 my-4 not-prose">
              {[
                { label: "Idle time", desc: "team members underutilizing work hours" },
                { label: "Stuck work", desc: "tasks in progress with no real movement" },
                { label: "Missed deadlines", desc: "internal or client-facing" },
                { label: "Passive execution", desc: "waiting instead of figuring things out" },
                { label: "Client complaints", desc: "caused by slow or unclear communication" },
                { label: "Internal chaos", desc: "when plans change or people are unavailable" },
                { label: "Founder becoming the default", desc: "coordinator, presenter, or problem-solver" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-destructive/30 bg-destructive/5">
                  <HugeiconsIcon icon={CancelCircleIcon} className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>{item.label}</strong> – {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>When This Role Is Doing Its Job Well</h3>
            <ul>
              <li>Work moves forward daily without reminders</li>
              <li>Clients are informed without escalation</li>
              <li>Absences do not disrupt delivery</li>
              <li>Problems are surfaced early, not late</li>
              <li>The founder stays out of day-to-day operations</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      key: "outputs",
      label: "2. Outputs",
      title: "Key Outputs",
      description: "Primary and secondary outputs this role delivers",
      content: (
        <div className="space-y-6">
          <div>
            <h3>Primary Output (Non-Negotiable)</h3>
            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg my-4">
              <p className="font-medium text-primary my-0!">
                Accurate KPI dashboard updated and reviewed weekly
              </p>
              <p className="text-sm text-muted-foreground my-2!">
                Failure to update, maintain accuracy, or review the KPI dashboard in any given week is considered a failure of this role for that week.
              </p>
            </div>
          </div>

          <div>
            <h3>Core Outputs</h3>
            <h4 className="text-accent">Primary Outputs</h4>
            <ul>
              <li>KPI dashboards are updated on time, accurate, and reflect real performance</li>
              <li>Weekly operational and KPI reports are delivered on schedule</li>
              <li>Project/task boards are clean, current, and fully owned (no stuck or ownerless tasks)</li>
              <li>Risks, blockers, and issues are escalated early with proposed solutions</li>
            </ul>

            <h4 className="text-accent">Secondary Outputs</h4>
            <ul>
              <li>Team workload is balanced and adjusted proactively (including sick leave coverage)</li>
              <li>Weekly Team Alignment Meeting is conducted and documented</li>
              <li>Client communication and follow-ups meet response-time SLAs</li>
              <li>No operational surprises reach the Founder without prior escalation</li>
            </ul>
          </div>

          <div>
            <h3>Founder-Visible Outputs</h3>
            <p>The following outputs allow the Founder to stay out of day-to-day operations:</p>
            <ul>
              <li>Weekly KPI / Operations dashboard</li>
              <li>Clean and up-to-date project boards</li>
              <li>Zero un-escalated issues or surprises</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      key: "kpis",
      label: "3. KPIs",
      title: "KPIs — How Success Is Measured",
      description: "Key performance indicators and targets",
      content: (
        <div className="space-y-6">
          <div>
            <h3>Customer Perspective (CP) KPIs - 10 items</h3>
            <div className="overflow-x-auto">
              <table className="table-kpi">
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real-Time Client Message Response Time</td>
                    <td className="font-medium text-accent">≥98%</td>
                  </tr>
                  <tr>
                    <td>Email Acknowledgement Time (≤1 hour)</td>
                    <td className="font-medium text-accent">≥98%</td>
                  </tr>
                  <tr>
                    <td>On-Time Client Deliverables</td>
                    <td className="font-medium text-accent">≥95%</td>
                  </tr>
                  <tr>
                    <td>Post-Project Net Promoter Score (NPS)</td>
                    <td className="font-medium text-accent">≥60</td>
                  </tr>
                  <tr>
                    <td>Weekly Client Satisfaction Score (CSAT)</td>
                    <td className="font-medium text-accent">≥4.5/5</td>
                  </tr>
                  <tr>
                    <td>Post-Project Feedback Participation Rate</td>
                    <td className="font-medium text-accent">≥70%</td>
                  </tr>
                  <tr>
                    <td>Client Retention Rate</td>
                    <td className="font-medium text-accent">≥90%</td>
                  </tr>
                  <tr>
                    <td>Churn Rate</td>
                    <td className="font-medium text-accent">≤8%</td>
                  </tr>
                  <tr>
                    <td>At-Risk Client Recovery Rate</td>
                    <td className="font-medium text-accent">≥70%</td>
                  </tr>
                  <tr>
                    <td>% of Clients Receiving Monthly Performance Report</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3>Internal Business Process (IBP) KPIs - 8 items</h3>
            <div className="overflow-x-auto">
              <table className="table-kpi">
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Client Meeting Attendance</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>Client Meeting Recording</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>Client Meeting AI Summaries within 24h</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>Client Weekly Report Delivery</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>Work Sent Right the First Time</td>
                    <td className="font-medium text-accent">≥98%</td>
                  </tr>
                  <tr>
                    <td>Weekly Alignment Participation Rate</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>On-Time Issue Resolution</td>
                    <td className="font-medium text-accent">100%</td>
                  </tr>
                  <tr>
                    <td>Team Confidence Rating</td>
                    <td className="font-medium text-accent">≥4.5/5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "values",
      label: "4. Values",
      title: "Core Values in Action",
      description: "Expected behaviors and red flags",
      content: (
        <div className="space-y-6">
          <div>
            <h3>How This Role Is Expected to Think and Act</h3>
            <p className="font-medium text-primary">This role is the owner of momentum, clarity, and value.</p>

            <div className="grid gap-6 md:grid-cols-2 my-6 not-prose">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-status-success text-white px-4 py-3 font-medium">
                  Required Behaviors ✓
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    { label: "Ownership", desc: "Owns tasks and outcomes end-to-end. Never says \"I thought someone else was doing it.\" If something is unclear or stalled, this role takes responsibility to move it forward." },
                    { label: "Proactivity", desc: "Identifies risks, blockers, and gaps early and takes initiative to resolve them before deadlines are missed or issues escalate." },
                    { label: "Bias for Action", desc: "Attempts to solve problems independently. Escalates only after thinking through options and proposing solutions." },
                    { label: "Value-Driven Thinking", desc: "Consistently asks: Does this create value for the client? Does this help the team work better, faster, or with less friction? This role optimizes for outcomes, not just task completion." },
                    { label: "Responsiveness with Judgment", desc: "Acknowledges client and team messages promptly. Uses good judgment with availability — especially with international clients — where a timely acknowledgment is better than silence, even on weekends." },
                    { label: "Clarity & Documentation", desc: "Communicates in clear, structured updates. Writes emails and messages with strong documentation, logic, and reasoning so decisions and context are easy to understand and revisit." },
                    { label: "Professional Presence", desc: "Is always ready to speak with clients and the team calmly, confidently, and professionally. Communicates as if any message could be forwarded to a client or stakeholder." },
                    { label: "Integrity", desc: "Reports real status and data — not vague \"looks okay\" updates. Flags issues early instead of protecting appearances." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-status-success shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{item.label}:</span>{" "}
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
                  Red Flags ✗
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    "Waiting for reminders or instructions instead of taking action",
                    "Letting tasks or messages sit when something could be done to move them forward",
                    "Being unavailable by default instead of doing what is reasonable and right for clients and the team",
                    "Escalating problems immediately without first trying to solve them",
                    "Sending unclear, messy, or poorly written messages that create confusion",
                    "Hiding delays, blockers, or uncertainty instead of surfacing them early",
                    "Blaming others instead of owning the outcome",
                    "Needing the Founder to step in for clarity, reassurance, or follow-through",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>What This Role Replaces (Important)</h3>
            <p>This role replaces the Founder as:</p>
            <ul>
              <li>The default task coordinator</li>
              <li>The follow-up and accountability layer</li>
              <li>The first line of client communication</li>
              <li>The person who notices when work is stuck</li>
              <li>The person who keeps things moving when conditions are not perfect</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If this role is executed well, the Founder stays out of daily operations.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "authority",
      label: "5. Authority",
      title: "Authority & Decision Rights",
      description: "What this role can decide, needs approval for, and must escalate",
      content: (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-status-success text-white px-4 py-3 font-medium text-sm">
                Can Decide Alone
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• <strong>Prioritize and re-prioritize tasks within operations</strong> to keep work moving</p>
                <p>• <strong>Reassign tasks immediately</strong> when someone is blocked, unavailable, or sick</p>
                <p>• <strong>Follow up and hold team members accountable</strong> for deadlines and deliverables</p>
                <p>• <strong>Resolve day-to-day operational issues</strong> without CEO involvement</p>
                <p>• <strong>Escalate issues per SOP</strong> after attempting a solution</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-3 font-medium text-sm">
                Needs Approval
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• <strong>Process changes</strong> that impact other departments or company-wide workflows</p>
                <p>• <strong>Client-facing policy changes</strong> (pricing, scope, commitments, SLAs)</p>
                <p>• <strong>Deadline or scope changes</strong> that directly affect revenue, contracts, or client expectations</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium text-sm">
                Must Escalate If
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• <strong>Deadline risk exceeds 24 hours</strong> on a critical task or client deliverable</p>
                <p>• <strong>Repeated non-performance</strong> from a team member after follow-ups and corrective action</p>
                <p>• <strong>Any billing, payment, or client data risk</strong></p>
                <p>• <strong>Client dissatisfaction</strong> that may result in churn, refund, or escalation</p>
                <p className="text-muted-foreground pt-2">Escalation must include: (1) the issue, (2) what was tried, and (3) recommended next steps.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "tools",
      label: "6. Tools",
      title: "Tools & Reporting",
      description: "Primary tools and reporting cadence",
      content: (
        <div className="space-y-6">
          <table>
            <tbody>
              <tr>
                <th className="pr-8 py-4">Project Management</th>
                <td className="py-4">Lark</td>
              </tr>
              <tr>
                <th className="pr-8 py-4">Communication</th>
                <td className="py-4">WhatsApp / Lark (response SLA applies)</td>
              </tr>
              <tr>
                <th className="pr-8 py-4">Reporting Cadence</th>
                <td className="py-4">Weekly L10 Report (every Friday)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      key: "expectations",
      label: "7. Expectations",
      title: "30-60-90 Day Expectations",
      description: "Success milestones for the first 90 days",
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="table-expectations">
              <thead>
                <tr>
                  <th>First 30 Days</th>
                  <th>Days 31–60</th>
                  <th>After 60 Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>Runs daily operations with <strong>daily check-ins</strong></li>
                      <li>Learns and applies SOPs correctly</li>
                      <li>Maintains clean project boards and task ownership</li>
                      <li>Sends weekly reports and dashboards <strong>with guidance and feedback</strong></li>
                      <li>Escalates issues early while learning escalation standards</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Handles operational issues <strong>independently</strong></li>
                      <li>Escalates <strong>only according to decision rules</strong></li>
                      <li>Sends reports and dashboards <strong>without reminders</strong></li>
                      <li>Proactively identifies risks, blockers, and capacity gaps</li>
                      <li>Keeps clients and team informed without Founder involvement</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Founder reviews <strong>dashboards only</strong></li>
                      <li>No daily operational involvement required</li>
                      <li>No task follow-ups or reminders from Founder</li>
                      <li>Issues are surfaced early with proposed solutions</li>
                      <li>Operations run smoothly even during absences</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">Outcome: full delegation achieved</p>
                  </td>
                </tr>
                <tr className="summary-row">
                  <td>
                    <p className="font-medium text-accent mb-1">Founder role: coach, review, correct</p>
                    <p className="text-muted-foreground">Success signal: work moves daily with support</p>
                  </td>
                  <td>
                    <p className="font-medium text-accent mb-1">Founder role: review outputs only</p>
                    <p className="text-muted-foreground">Success signal: fewer questions, cleaner execution</p>
                  </td>
                  <td>
                    <p className="font-medium text-status-success">Outcome: full delegation achieved</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ];

  return (
    <PlaybookPageLayout>
      <div className="animate-fade-in prose-handbook">
        {/* Header */}
        <div className="mb-8">
          <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
            Role Score Card
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
            Operations Coordinator
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">Operations Coordinator</td>
            </tr>
            <tr>
              <th className="pr-8 py-4">Reports To</th>
              <td className="py-4">Juliana Carisle Matias (Founder)</td>
            </tr>
            <tr>
              <th className="pr-8 py-4">Date Created</th>
              <td className="py-4">December 2025</td>
            </tr>
          </tbody>
        </table>

        {/* Folder Tabs */}
        <FolderTabs tabs={tabs} defaultTab="purpose" />

        {/* Signature Section */}
        <section className="border-t border-border pt-8 mt-12">
          <div className="grid gap-8 md:grid-cols-2 not-prose">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Prepared By:</p>
              <div className="border-b border-border w-full mb-2" />
              <p className="text-sm text-muted-foreground">Date: _______________</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-4">Acknowledged By (Role Holder):</p>
              <div className="border-b border-border w-full mb-2" />
              <p className="text-sm text-muted-foreground">Date: _______________</p>
            </div>
          </div>
        </section>
      </div>
    </PlaybookPageLayout>
  );
}
