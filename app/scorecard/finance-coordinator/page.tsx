"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, Alert01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

export default function FinanceCoordinatorScorecardPage() {
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
              Make sure the company&apos;s financial data is accurate, up to date, and visible at all times — without the Founder chasing numbers, reminders, or compliance.
            </p>
            <p>
              Own day-to-day financial tracking, reporting, and coordination with the accountant so income, expenses, profit, taxes, and cash visibility are always current, correct, and ready for decision-making.
            </p>
            <p className="font-medium text-primary">
              This role exists to remove financial uncertainty, last-minute tax stress, and &quot;where are we at?&quot; questions from the Founder entirely.
            </p>
          </div>

          <div>
            <h3>Primary Accountability</h3>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If financial data is missing, outdated, inaccurate, unclear, or waiting on the Founder, this role owns fixing it.
              </p>
            </div>
          </div>

          <div>
            <h3>If This Role Disappeared for 30 Days, What Would Break?</h3>
            <ul>
              <li>Income and expenses would not be recorded consistently</li>
              <li>The Founder would not know real profit or cash position</li>
              <li>Weekly trackers would fall behind or be inaccurate</li>
              <li>Accountant deadlines would be missed or rushed</li>
              <li>Taxes would become reactive and stressful</li>
              <li>Financial decisions would be made without reliable data</li>
              <li>Founder would need to chase numbers and updates</li>
            </ul>
          </div>

          <div>
            <h3>Specific Outcomes This Role Owns</h3>
            <p>This role is successful when:</p>
            <div className="grid gap-2 my-4 not-prose">
              {[
                "All income and expenses are recorded accurately and on time",
                "Net profit and key financial metrics are always visible",
                "Weekly finance trackers are updated and reliable",
                "Monthly financial reports are prepared and understood",
                "Meetings with the accountant are scheduled, prepared, and documented",
                "Tax filings are tracked, reminded, and confirmed as completed",
                "The Founder never needs to ask for financial data or status",
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
                "Founder guessing financial performance",
                "Last-minute tax or compliance stress",
                "Incomplete or messy financial records",
                "Delayed or inaccurate reporting",
                "Missed accountant deadlines",
                "Financial surprises late in the month or quarter",
                "Founder doing financial tracking herself",
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
              <li>Financial numbers are always current</li>
              <li>Weekly and monthly reports arrive on time</li>
              <li>Taxes and filings are handled proactively</li>
              <li>The accountant is managed, not chased</li>
              <li>The Founder trusts the numbers without double-checking</li>
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
                Accurate, up-to-date financial records and trackers available at all times.
              </p>
              <p className="text-sm text-muted-foreground my-2!">
                Failure to record income/expenses correctly, update trackers, or prepare required financial reports in any given week is considered a failure of this role for that week.
              </p>
            </div>
          </div>

          <div>
            <h3>Core Outputs</h3>
            <h4>Primary Outputs</h4>
            <ul>
              <li>All income recorded accurately and categorized correctly</li>
              <li>All expenses logged, categorized, and reconciled</li>
              <li>Net profit and key metrics calculated and visible</li>
              <li>Weekly finance sheet / trackers updated on schedule</li>
              <li>Monthly income statements prepared and reviewed</li>
              <li>Accountant meetings scheduled, prepared, and documented</li>
              <li>Tax deadlines tracked, reminded, and confirmed completed</li>
            </ul>

            <h4>Secondary Outputs</h4>
            <ul>
              <li>Proactive follow-ups with the accountant</li>
              <li>Clear documentation of financial assumptions and changes</li>
              <li>Timely responses to finance-related questions from Ops or Founder</li>
              <li>Continuous improvement of financial processes and tracking</li>
            </ul>
          </div>

          <div>
            <h3>Founder-Visible Outputs</h3>
            <p>The following outputs allow Operations to manage without chasing:</p>
            <ul>
              <li>Clean, up-to-date finance trackers</li>
              <li>Clear monthly financial summaries</li>
              <li>No missed accountant deadlines</li>
              <li>No financial surprises</li>
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
            <h3>A. Financial Execution KPIs</h3>
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
                  <td>Income Recorded Accuracy</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Expense Recording Accuracy</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Weekly Finance Tracker Updated On Time</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>Monthly Income Statement Delivered</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Net Profit Visibility (No Gaps)</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Accountant Meetings Held as Scheduled</td>
                  <td className="font-medium text-accent">100%</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Missed Tax or Compliance Deadlines</td>
                  <td className="font-medium text-accent">0</td>
                  <td>Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3>B. Reliability & Compliance KPIs</h3>
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
                  <td>Accountant Follow-Ups Completed On Time</td>
                  <td className="font-medium text-accent">≥98%</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Unreconciled Transactions</td>
                  <td className="font-medium text-accent">≤2</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Finance Questions Requiring Founder Involvement</td>
                  <td className="font-medium text-accent">0</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Financial Errors Found After Reporting</td>
                  <td className="font-medium text-accent">0–1 max</td>
                  <td>Quarterly</td>
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
            <p className="font-medium text-primary">This role is the owner of financial clarity and discipline.</p>

            <div className="grid gap-6 md:grid-cols-2 my-6 not-prose">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-status-success text-white px-4 py-3 font-medium">
                  Required Behaviors ✓
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    { label: "Ownership", desc: "Owns financial tracking end-to-end. Never waits to be reminded." },
                    { label: "Accuracy", desc: "Treats financial data with high attention to detail." },
                    { label: "Proactivity", desc: "Tracks deadlines and follows up before issues arise." },
                    { label: "Reliability", desc: "Delivers reports consistently and on time." },
                    { label: "Clarity", desc: "Explains numbers clearly and simply." },
                    { label: "Confidentiality", desc: "Handles sensitive financial data responsibly." },
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
                    "Missing or outdated financial data",
                    "Late reports or trackers",
                    "\"Waiting on the accountant\" without follow-up",
                    "Founder needing to calculate or verify numbers",
                    "Surprise tax or compliance issues",
                    "Unclear or undocumented financial status",
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
              <li>The person tracking income and expenses</li>
              <li>The person updating finance trackers</li>
              <li>The person chasing the accountant</li>
              <li>The person worrying about taxes and filings</li>
              <li>The person asking &quot;are these numbers right?&quot;</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If this role is executed well, the Founder never manages finances day to day — only reviews summaries to make decisions.
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
                <p>• Day-to-day financial tracking and categorization</p>
                <p>• Scheduling and running accountant check-ins</p>
                <p>• Finance reporting formats and updates</p>
                <p>• Follow-ups related to finance and compliance</p>
                <p>• Escalate issues per SOP after attempting resolution</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-3 font-medium text-sm">
                Needs Approval
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Changes to accounting methods</p>
                <p>• Major financial corrections</p>
                <p>• Budget changes or financial commitments</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium text-sm">
                Must Escalate If
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Tax or compliance risk</p>
                <p>• Significant discrepancies in financial data</p>
                <p>• Cash flow concerns</p>
                <p>• Accountant unresponsiveness impacting deadlines</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm my-0!">
              <strong className="text-primary">Escalation must include:</strong>{" "}
              (1) the issue, (2) what was reviewed/tried, (3) recommended next steps
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
                <td className="font-medium">Primary Tools</td>
                <td>Finance tracker / accounting software</td>
              </tr>
              <tr>
                <td className="font-medium">Communication</td>
                <td>Lark / Messenger</td>
              </tr>
              <tr>
                <td className="font-medium">Reporting Cadence</td>
                <td>Weekly L10 Report (every Friday), Weekly Team Meeting</td>
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
                      <li>Learns finance tools, trackers, and processes</li>
                      <li>Executes tasks with <strong>regular check-ins</strong></li>
                      <li>Cleans up any missing or outdated data</li>
                      <li>Escalates early while learning standards</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Runs finance tracking <strong>independently</strong></li>
                      <li>Prepares reports <strong>without reminders</strong></li>
                      <li>Manages accountant proactively</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Financial visibility is <strong>constant and trusted</strong></li>
                      <li>Taxes and filings are handled proactively</li>
                      <li>No Founder involvement in finance operations</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">Outcome: full delegation of finance achieved</p>
                  </td>
                </tr>
                <tr className="summary-row">
                  <td>
                    <p className="text-muted-foreground">Success signal: financial data becomes current</p>
                  </td>
                  <td>
                    <p className="text-muted-foreground">Success signal: Founder stops asking for numbers</p>
                  </td>
                  <td>
                    <p className="font-medium text-status-success">Outcome: full delegation of finance achieved</p>
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
            Finance Coordinator
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">Finance Coordinator</td>
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
