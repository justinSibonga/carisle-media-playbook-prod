"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, Alert01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

export default function MarketingSpecialistScorecardPage() {
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
              Make sure marketing execution in GoHighLevel moves forward every day and finishes on time.
            </p>
            <p>
              Own end-to-end GHL execution so campaigns, automations, and tasks do not stall, deadlines are met, client details are followed exactly, and work is completed properly — without last-minute rush, extensions, or founder involvement.
            </p>
            <p className="font-medium text-primary">
              This role is responsible for making sure marketing plans actually get done.
            </p>
          </div>

          <div>
            <h3>Primary Accountability</h3>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If marketing work is <strong>stuck, late, unfinished, forgotten, or waiting on someone</strong>, this role <u>owns</u> fixing it.
              </p>
            </div>
          </div>

          <div>
            <h3>If This Role Disappeared for 30 Days, What Would Break?</h3>
            <ul>
              <li>GHL tasks would stall or be forgotten</li>
              <li>Deadlines would be missed or repeatedly extended</li>
              <li>Client feedback would not be implemented correctly</li>
              <li>Updates to clients would be delayed or unclear</li>
              <li>The founder would step in to finish execution</li>
            </ul>
          </div>

          <div>
            <h3>Specific Outcomes This Role Owns</h3>
            <p>This role is successful when:</p>
            <div className="grid gap-2 my-4 not-prose">
              {[
                "GHL tasks move forward daily",
                "Campaigns, automations, and funnels are completed end to end",
                "Client comments, preferences, and requests are followed accurately",
                "Tasks are updated in real time and reflect actual progress",
                "Issues are identified early and worked on before escalation",
                "Clients receive updates without chasing",
                "The founder does not need to complete or fix execution",
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
                "Work becoming urgent at the last minute because nothing moved earlier",
                "Deadlines being moved because tasks were not finished on time",
                "Waiting for instructions instead of starting or figuring things out",
                "Tasks being forgotten or not updated, so no one knows what's actually done",
                "Clients asking for updates because they haven't heard anything",
                "The founder stepping in to finish work or talk to clients",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-destructive/30 bg-destructive/5">
                  <HugeiconsIcon icon={CancelCircleIcon} className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>When This Role Is Doing Its Job Well</h3>
            <ul>
              <li>Marketing work progresses daily</li>
              <li>Deliverables are finished on time</li>
              <li>Clients receive timely updates</li>
              <li>Problems are raised early, not at the deadline</li>
              <li>The founder stays out of execution</li>
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
                Client marketing deliverables (GHL and non-GHL) completed end-to-end and updated accurately each day.
              </p>
              <p className="text-sm text-muted-foreground my-2!">
                Failure to complete assigned <strong>marketing client deliverables</strong> (GHL campaigns, automations, funnels, pipelines, email/SMS workflows, landing pages, forms, integrations, reports, or revisions) on time <strong>or</strong> failure to keep task status accurate in any given day/week is considered a failure of this role for that week.
              </p>
            </div>
          </div>

          <div>
            <h3>Core Outputs</h3>
            <h4 className="text-accent">Primary Outputs</h4>
            <ul>
              <li>GHL campaigns, automations, workflows, pipelines, and integrations are <strong>fully built, tested, and working</strong></li>
              <li>Marketing deliverables outside GHL (landing pages, email/SMS content setup, tracking, reports, revisions) are completed correctly</li>
              <li>Client instructions, comments, and preferences are followed <strong>exactly</strong></li>
              <li>Tasks are updated in real time and reflect actual progress (no &quot;almost done&quot;)</li>
              <li>Deadlines are met without last-minute extensions</li>
              <li>Blockers or technical limits are identified early and escalated <strong>with research and proposed solutions</strong></li>
            </ul>

            <h4 className="text-accent">Secondary Outputs</h4>
            <ul>
              <li>Proactive follow-ups when waiting on client assets, approvals, or feedback</li>
              <li>Clear documentation of GHL setup, logic, and configurations</li>
              <li>Clients receive timely progress updates through Ops (no silence)</li>
              <li>Continuous improvement in GHL and marketing execution skills (learning, testing, optimization)</li>
            </ul>
          </div>

          <div>
            <h3>Ops-Visible Outputs</h3>
            <p>The following outputs allow Operations to manage marketing execution without chasing:</p>
            <ul>
              <li>Clean, accurate, and up-to-date task boards</li>
              <li>Clear daily & weekly execution status on client deliverables</li>
              <li>No forgotten, stalled, or ownerless marketing tasks</li>
              <li>No last-minute surprises close to client deadlines</li>
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
            <h3>A. Execution & Accountability KPIs</h3>
            <div className="overflow-x-auto">
              <table className="table-kpi">
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Target</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SOD Submission Rate</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>EOD Submission Rate</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>Daily Task Completion Rate</td>
                    <td className="font-medium text-accent">≥95%</td>
                    <td>Daily / Weekly</td>
                  </tr>
                  <tr>
                    <td>Client Project Board Task Accuracy</td>
                    <td className="font-medium text-accent">≥98%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>On-Time Marketing Deliverables</td>
                    <td className="font-medium text-accent">≥95%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>Tasks Updated in Real Time</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>Deadline Extensions Due to Execution</td>
                    <td className="font-medium text-accent">≤1</td>
                    <td>Monthly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3>B. Collaboration & Visibility KPIs</h3>
            <div className="overflow-x-auto">
              <table className="table-kpi">
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Target</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Client Pending Items (Team-Controlled)</td>
                    <td className="font-medium text-accent">≤2 per client</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>Same-Day Action on Client Blockers</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>Weekly Alignment Participation Rate</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>On-Time Issue Resolution (Execution Issues)</td>
                    <td className="font-medium text-accent">≥95%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>Escalations With Proposed Solutions</td>
                    <td className="font-medium text-accent">100%</td>
                    <td>Monthly</td>
                  </tr>
                  <tr>
                    <td>Client Follow-Ups Completed Without Chasing</td>
                    <td className="font-medium text-accent">≥98%</td>
                    <td>Weekly</td>
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
            <p className="font-medium text-primary">This role is the owner of execution, accuracy, and follow-through for marketing deliverables.</p>

            <div className="grid gap-6 md:grid-cols-2 my-6 not-prose">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-status-success text-white px-4 py-3 font-medium">
                  Required Behaviors ✓
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    { label: "Ownership", desc: "Owns assigned marketing and GHL deliverables end-to-end. Never says \"I thought someone else was doing it.\" If a task is unclear, blocked, or delayed, this role takes responsibility to move it forward." },
                    { label: "Proactivity", desc: "Identifies risks, missing inputs, technical limits, or dependencies early and takes action before deadlines are missed." },
                    { label: "Bias for Completion", desc: "Focuses on finishing deliverables fully and correctly — not just \"working on them\" or getting them close to done." },
                    { label: "Client Detail Obsession", desc: "Carefully follows client instructions, preferences, comments, and revisions. Checks work against client requirements before marking anything done." },
                    { label: "Solution-First Thinking", desc: "Researches issues, tests options, and proposes solutions before escalating problems to Ops or the client." },
                    { label: "Responsiveness with Judgment", desc: "Acknowledges client and internal messages promptly. Uses good judgment with availability, especially for international clients, where acknowledgment is better than silence." },
                    { label: "Clarity & Documentation", desc: "Writes clear, structured updates. Documents GHL setups, logic, and changes so work is easy to review, explain, or hand off." },
                    { label: "Continuous Learning", desc: "Actively improves GHL and marketing skills through self-learning, testing, and practice without needing reminders." },
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
                    "Waiting for reminders or step-by-step instructions",
                    "Letting tasks or messages sit when something could be done",
                    "Starting work late or inconsistently (office or remote)",
                    "Escalating problems without first researching or trying solutions",
                    "Sending unclear, rushed, or poorly written messages",
                    "Missing or extending deadlines without early warning",
                    "Forgetting tasks or failing to update boards in real time",
                    "Leaving work unfinished for others to fix",
                    "Needing the Founder to step in to complete execution",
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
              <li>The person who <strong>finishes marketing execution</strong> when deadlines are close</li>
              <li>The person who <strong>remembers, tracks, and completes</strong> marketing tasks</li>
              <li>The person who <strong>implements client feedback and revisions</strong></li>
              <li>The person who <strong>fixes or builds GHL campaigns, automations, and workflows</strong></li>
              <li>The person who <strong>steps in when execution is slow, blocked, or unclear</strong></li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If this role is executed well, the Founder does not need to touch marketing execution, fix deliverables, or rescue deadlines.
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
                <p>• <strong>Prioritize and sequence</strong> assigned marketing tasks to meet deadlines and keep execution moving</p>
                <p>• <strong>Decide how to execute marketing deliverables</strong> inside GHL (campaign setup, automations, workflows, funnels, integrations)</p>
                <p>• <strong>Follow up proactively</strong> on missing assets, approvals, or feedback needed to complete work</p>
                <p>• <strong>Resolve day-to-day execution issues</strong> without escalating unnecessarily</p>
                <p>• <strong>Make technical implementation decisions</strong> within agreed scope and requirements</p>
                <p>• <strong>Escalate issues per SOP</strong> after attempting a solution</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-3 font-medium text-sm">
                Needs Approval
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• <strong>Changes to scope, timelines, or deliverables</strong> that affect client expectations</p>
                <p>• <strong>Client-facing changes</strong> that alter agreed outcomes, messaging, or commitments</p>
                <p>• <strong>Use of new tools, integrations, or workflows</strong> that impact other teams or systems</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium text-sm">
                Must Escalate If
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• <strong>Deadline risk exceeds 24 hours</strong> on a critical marketing task or client deliverable</p>
                <p>• <strong>A technical limitation in GHL</strong> blocks delivery after reasonable research and testing</p>
                <p>• <strong>Repeated dependency delays</strong> that prevent task completion despite follow-ups</p>
                <p>• <strong>Client dissatisfaction</strong> that may result in escalation, refund, or churn</p>
                <p>• <strong>Any billing, access, or client data risk</strong></p>
                <p className="text-muted-foreground pt-2"><strong>Escalation must include:</strong> (1) the issue, (2) what was tried, and (3) recommended next steps.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-primary mb-2">Decision Rule (Simple)</h4>
            <p className="text-sm my-0!">
              If a decision <strong>keeps work moving</strong>, <strong>stays within scope</strong>, and <strong>does not change client expectations</strong>, this role decides.
              If it affects <strong>scope, deadlines, or client trust</strong>, it must be escalated.
            </p>
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
                <td className="py-4">Weekly L10 Report (every Friday), Weekly Team Meeting</td>
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
                      <li>Executes assigned marketing and GHL tasks with <strong>daily check-ins</strong></li>
                      <li>Learns and applies SOPs, client standards, and GHL best practices correctly</li>
                      <li>Maintains clean, up-to-date task boards with clear ownership</li>
                      <li>Delivers weekly execution updates <strong>with guidance and feedback</strong></li>
                      <li>Escalates issues early while learning escalation and decision rules</li>
                      <li>Starts work on time (office or remote) and follows execution schedules</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Completes marketing and GHL deliverables <strong>independently</strong></li>
                      <li>Escalates <strong>only according to decision and escalation rules</strong></li>
                      <li>Updates task boards and execution status <strong>without reminders</strong></li>
                      <li>Proactively identifies risks, blockers, missing inputs, and dependencies</li>
                      <li>Researches issues and proposes solutions before escalating</li>
                      <li>Keeps Ops informed without Founder involvement</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Founder and Ops review <strong>outputs only</strong></li>
                      <li>No daily execution involvement required from Founder</li>
                      <li>No task follow-ups or reminders needed</li>
                      <li>Marketing deliverables are completed on time and end-to-end</li>
                      <li>Issues are surfaced early with clear next steps</li>
                      <li>Execution continues smoothly even during absences or handoffs</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">Outcome: full delegation of marketing execution achieved</p>
                  </td>
                </tr>
                <tr className="summary-row">
                  <td>
                    <p className="font-medium text-accent mb-1">Founder / Ops role: coach, review, correct</p>
                    <p className="text-muted-foreground">Success signal: marketing work moves daily with support</p>
                  </td>
                  <td>
                    <p className="font-medium text-accent mb-1">Founder / Ops role: review outputs only</p>
                    <p className="text-muted-foreground">Success signal: fewer questions, cleaner execution, fewer escalations</p>
                  </td>
                  <td>
                    <p className="font-medium text-status-success">Outcome: full delegation of marketing execution achieved</p>
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
            Role Scorecard
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
            Marketing Specialist
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">Marketing Specialist</td>
            </tr>
            <tr>
              <th className="pr-8 py-4">Reports To</th>
              <td className="py-4">Danica Lagria (Operations Coordinator)</td>
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
