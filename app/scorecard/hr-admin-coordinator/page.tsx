"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, Alert01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

export default function HRAdminCoordinatorScorecardPage() {
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
              Make sure people, paperwork, and admin run correctly every day without Founder review, reminders, or approvals.
            </p>
            <p>
              Own end-to-end HR and administrative execution so hiring, onboarding, payroll inputs, records, policies, and people processes do not stall, get messy, or require Founder attention.
            </p>
            <p className="font-medium text-primary">
              This role exists to remove HR and admin decisions from the Founder&apos;s head and turn them into clean, predictable systems.
            </p>
          </div>

          <div>
            <h3>Primary Accountability</h3>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If an HR or admin task is unclear, late, incorrect, missing, or waiting on the Founder, this role owns fixing it.
              </p>
            </div>
          </div>

          <div>
            <h3>If This Role Disappeared for 30 Days, What Would Break?</h3>
            <ul>
              <li>Hiring and onboarding would slow down or be inconsistent</li>
              <li>Payroll inputs, contracts, or records would become risky or outdated</li>
              <li>People issues would escalate directly to the Founder</li>
              <li>Admin approvals would pile up</li>
              <li>Policies would exist but not be followed</li>
              <li>Founder would need to review documents, messages, and decisions daily</li>
            </ul>
          </div>

          <div>
            <h3>Specific Outcomes This Role Owns</h3>
            <p>This role is successful when:</p>
            <div className="grid gap-2 my-4 not-prose">
              {[
                "Hiring, onboarding, and offboarding run smoothly without Founder involvement",
                "Employee records, contracts, and files are accurate and up to date",
                "Payroll inputs and admin deadlines are handled correctly and on time",
                "HR questions are answered or resolved without escalating to the Founder",
                "Policies are documented, communicated, and actually followed",
                "Admin work does not interrupt leadership focus",
                "The Founder does not need to review routine HR or admin decisions",
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
                "Founder reviewing contracts, payroll inputs, or HR emails",
                "Last-minute admin emergencies",
                "Confusion about policies, leave, pay, or expectations",
                "People issues turning into Founder problems",
                "Compliance or documentation risks",
                "\"Small admin things\" consuming leadership time",
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
              <li>HR and admin run quietly in the background</li>
              <li>People know where to go for answers (not the Founder)</li>
              <li>Records are clean and updated</li>
              <li>Deadlines are met without reminders</li>
              <li>The Founder stays out of HR and admin entirely</li>
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
                HR and admin tasks completed accurately, on time, and without Founder review.
              </p>
              <p className="text-sm text-muted-foreground my-2!">
                Failure to complete or maintain accuracy in HR or admin deliverables in any given week is considered a failure of this role for that week.
              </p>
            </div>
          </div>

          <div>
            <h3>Core Outputs</h3>
            <h4>Primary Outputs</h4>
            <ul>
              <li>Hiring, onboarding, and offboarding completed end-to-end</li>
              <li>Employee records, contracts, and documentation kept accurate and current</li>
              <li>Payroll inputs submitted correctly and on time</li>
              <li>HR calendars (leave, holidays, reviews) kept up to date</li>
              <li>Policies documented, communicated, and accessible</li>
              <li>HR and admin issues resolved without Founder escalation</li>
            </ul>

            <h4>Secondary Outputs</h4>
            <ul>
              <li>Proactive follow-ups on missing documents or approvals</li>
              <li>Clear documentation of HR processes and decisions</li>
              <li>Employees receive timely responses to HR/admin questions</li>
              <li>Continuous improvement of HR systems and workflows</li>
            </ul>
          </div>

          <div>
            <h3>Ops-Visible Outputs</h3>
            <p>The following outputs allow Operations to manage without chasing:</p>
            <ul>
              <li>Clean HR tracker and records</li>
              <li>No Founder-level HR escalations</li>
              <li>No missed admin deadlines</li>
              <li>No &quot;urgent&quot; HR surprises</li>
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
            <h3>A. Recurring KPIs (Tracked Weekly)</h3>
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
                  <td>Employee Records Accuracy</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Contracts & Documentation Up-to-Date</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Payroll Inputs Submitted On Time</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Payroll Input Accuracy</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>HR Calendar Updated (Leave/Holidays/Reviews)</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>HR Queries Resolved Without Founder Escalation</td>
                  <td className="font-medium text-accent">≥95%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Admin Deadlines Met</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Policies Documented & Accessible</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Employee Response Time (HR Questions)</td>
                  <td className="font-medium text-accent">≤24 hours</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Weekly HR & Admin Report Submitted On Time</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3>B. Event-Based KPIs (Tracked Per Occurrence)</h3>
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
                  <td>Onboarding Completion Rate</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Per new hire</td>
                </tr>
                <tr>
                  <td>Onboarding Completed Within Timeline</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Per new hire</td>
                </tr>
                <tr>
                  <td>Offboarding Completion Rate</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Per exit</td>
                </tr>
                <tr>
                  <td>Founder-Level HR Escalations</td>
                  <td className="font-medium text-accent">0</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Urgent HR Surprises</td>
                  <td className="font-medium text-accent">0</td>
                  <td>Monthly</td>
                </tr>
              </tbody>
            </table>
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
            <p className="font-medium text-primary">This role is the owner of people operations and admin stability.</p>

            <div className="grid gap-6 md:grid-cols-2 my-6 not-prose">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-status-success text-white px-4 py-3 font-medium">
                  Required Behaviors ✓
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    { label: "Ownership", desc: "Owns HR and admin tasks end-to-end. Never waits for the Founder to step in." },
                    { label: "Proactivity", desc: "Identifies HR/admin risks before they become problems." },
                    { label: "Accuracy", desc: "Treats people data, contracts, and payroll with high attention to detail." },
                    { label: "Judgment", desc: "Handles routine decisions confidently within policy and SOPs." },
                    { label: "Clarity & Documentation", desc: "Keeps records, policies, and communication clear and accessible." },
                    { label: "Confidentiality", desc: "Handles sensitive information responsibly." },
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
                    "Asking the Founder to review routine HR/admin work",
                    "Missing admin deadlines",
                    "Incomplete or messy employee records",
                    "Escalating people issues without trying to resolve them",
                    "Unclear or undocumented decisions",
                    "Making HR feel chaotic or reactive",
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
              <li>The person reviewing HR documents</li>
              <li>The person approving admin decisions</li>
              <li>The person answering HR questions</li>
              <li>The person fixing onboarding or payroll mistakes</li>
              <li>The person dealing with people issues by default</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If this role is executed well, the Founder does not think about HR or admin at all.
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
                <p>• HR/admin decisions within policy and SOP</p>
                <p>• Onboarding and offboarding execution</p>
                <p>• HR documentation and record management</p>
                <p>• Admin scheduling and coordination</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-3 font-medium text-sm">
                Needs Approval
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Policy changes affecting company-wide rules</p>
                <p>• Compensation changes</p>
                <p>• Legal or compliance exceptions</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium text-sm">
                Must Escalate If
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Legal, compliance, or disciplinary risk</p>
                <p>• Repeated performance or conduct issues</p>
                <p>• Any issue that could affect company reputation</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm my-0!">
              <strong className="text-primary">Escalation must include:</strong>{" "}
              (1) the issue, (2) what was tried, (3) recommended next steps
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
                <th>HR Tools</th>
                <td>Lark, Sprout</td>
              </tr>
              <tr>
                <th>Communication</th>
                <td>Lark / Messenger</td>
              </tr>
              <tr>
                <th>Reporting Cadence</th>
                <td>Weekly L10 Report (every Friday), Weekly HR & Admin Meeting</td>
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
                      <li>Learns HR/admin SOPs and systems</li>
                      <li>Executes tasks with <strong>daily check-ins</strong></li>
                      <li>Maintains clean records</li>
                      <li>Escalates early while learning standards</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Handles HR/admin <strong>independently</strong></li>
                      <li>Resolves routine issues <strong>without escalation</strong></li>
                      <li>Keeps records and calendars clean</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Founder <strong>reviews nothing</strong></li>
                      <li>HR/admin runs quietly</li>
                      <li>No surprises, no emergencies</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">Outcome: full delegation of HR & Admin achieved</p>
                  </td>
                </tr>
                <tr className="summary-row">
                  <td>
                    <p className="text-muted-foreground">Success signal: fewer Founder questions</p>
                  </td>
                  <td>
                    <p className="text-muted-foreground">Success signal: Founder rarely involved</p>
                  </td>
                  <td>
                    <p className="font-medium text-status-success">Outcome: full delegation of HR & Admin achieved</p>
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
            HR & Admin Coordinator
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">HR & Admin Coordinator</td>
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
