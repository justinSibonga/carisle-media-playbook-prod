"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, Alert01Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

export default function WebDeveloperScorecardPage() {
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
              Make sure all technical and web-related work is built correctly, delivered on time, and never becomes a blocker for projects, clients, or growth.
            </p>
            <p>
              Own end-to-end technical execution — including GHL websites, funnels, landing pages, forms, integrations, custom fixes, and external website builds — so technical work never stalls projects, causes last-minute emergencies, or requires Founder intervention.
            </p>
            <p className="font-medium text-primary">
              This role exists to remove technical execution, debugging, and &quot;can you fix this real quick?&quot; work from the Founder completely.
            </p>
          </div>

          <div>
            <h3>Primary Accountability</h3>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If technical or web work is blocked, broken, late, unfinished, unclear, or escalated at the last minute, this role owns fixing it.
              </p>
            </div>
          </div>

          <div>
            <h3>If This Role Disappeared for 30 Days, What Would Break?</h3>
            <ul>
              <li>Landing pages and websites would not launch on time</li>
              <li>Funnels and forms would break or go untested</li>
              <li>GHL limitations would block client delivery</li>
              <li>Marketing execution would stall waiting on &quot;tech&quot;</li>
              <li>Bugs would pile up until deadlines</li>
              <li>Founder would step in to debug, fix, or rebuild things</li>
              <li>Clients would experience broken pages or poor performance</li>
            </ul>
          </div>

          <div>
            <h3>Specific Outcomes This Role Owns</h3>
            <p>This role is successful when:</p>
            <div className="grid gap-2 my-4 not-prose">
              {[
                "Websites, landing pages, and funnels are built end-to-end and fully working",
                "GHL pages, forms, automations, and integrations function as intended",
                "Technical blockers are resolved without delaying projects",
                "Bugs are identified and fixed before clients report them",
                "Tasks are updated in real time with accurate status",
                "Marketing and Ops never wait on \"technical stuff\"",
                "Deliverables are finished, tested, and ready — not \"almost done\"",
                "The Founder never needs to debug, build, or fix technical work",
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
                "Technical emergencies near deadlines",
                "Broken pages, forms, or integrations reaching clients",
                "Delays caused by 'I'm still figuring it out'",
                "Marketing execution being blocked by dev work",
                "Founder jumping in to solve technical problems",
                "Rework due to poor testing or incomplete builds",
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
              <li>Technical work progresses daily without reminders</li>
              <li>Pages and funnels launch on time</li>
              <li>Issues are fixed before they escalate</li>
              <li>Marketing and Ops can rely on delivery dates</li>
              <li>The Founder stays out of technical execution entirely</li>
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
                Technical and web deliverables completed end-to-end, tested, and delivered on time.
              </p>
              <p className="text-sm text-muted-foreground my-2!">
                Failure to complete assigned technical deliverables (GHL pages, websites, landing pages, integrations, fixes, optimizations) or failure to update task status accurately in any given week is considered a failure of this role for that week.
              </p>
            </div>
          </div>

          <div>
            <h3>Core Outputs</h3>
            <h4>Primary Outputs</h4>
            <ul>
              <li>GHL websites, funnels, landing pages, and forms are fully built, tested, and live</li>
              <li>External websites or landing pages are completed according to requirements</li>
              <li>Integrations (GHL, forms, tracking, APIs, tools) work correctly</li>
              <li>Bugs and technical issues are resolved promptly</li>
              <li>Tasks are updated in real time and reflect actual progress</li>
              <li>Deadlines are met without last-minute extensions</li>
              <li>Technical blockers are escalated early with researched solutions</li>
            </ul>

            <h4>Secondary Outputs</h4>
            <ul>
              <li>Proactive follow-ups on missing requirements or assets</li>
              <li>Clear documentation of builds, logic, and configurations</li>
              <li>Performance, responsiveness, and usability checks completed</li>
              <li>Support provided to Marketing and Ops for technical questions</li>
              <li>Continuous improvement of technical skills and tools</li>
            </ul>
          </div>

          <div>
            <h3>Ops-Visible Outputs</h3>
            <p>The following outputs allow Operations to manage without chasing:</p>
            <ul>
              <li>Clean, accurate technical task boards</li>
              <li>Clear weekly execution status</li>
              <li>No forgotten or stalled dev tasks</li>
              <li>No surprise technical emergencies</li>
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

          <div>
            <h3>B. Collaboration & Visibility KPIs</h3>
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
            <p className="font-medium text-primary">This role is the owner of technical reliability and delivery.</p>

            <div className="grid gap-6 md:grid-cols-2 my-6 not-prose">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-status-success text-white px-4 py-3 font-medium">
                  Required Behaviors ✓
                </div>
                <div className="bg-card p-4 space-y-3">
                  {[
                    { label: "Ownership", desc: "Owns technical tasks end-to-end. Never leaves work half-done." },
                    { label: "Proactivity", desc: "Identifies issues before they block projects or deadlines." },
                    { label: "Bias for Completion", desc: "Finishes builds fully and tests before marking done." },
                    { label: "Problem-Solving", desc: "Researches and experiments before escalating." },
                    { label: "Quality Mindset", desc: "Delivers clean, functional, and reliable work." },
                    { label: "Clear Communication", desc: "Explains technical status and issues in plain language." },
                    { label: "Continuous Learning", desc: "Actively improves technical skills without reminders." },
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
                    "'Still figuring it out' near deadlines",
                    "Leaving bugs or broken functionality unfixed",
                    "Not testing before delivery",
                    "Letting tasks sit without updates",
                    "Escalating without trying solutions",
                    "Founder stepping in to fix technical work",
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
              <li>The person fixing broken pages or funnels</li>
              <li>The person debugging GHL issues</li>
              <li>The person rushing to launch landing pages</li>
              <li>The person solving last-minute technical problems</li>
              <li>The person &quot;who knows how this works&quot;</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-md my-4">
              <p className="my-0! font-medium">
                If this role is executed well, the Founder never touches technical execution again.
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
                <p>• Technical implementation choices</p>
                <p>• Build approach and tools within scope</p>
                <p>• Bug fixes and optimizations</p>
                <p>• Technical sequencing to meet deadlines</p>
                <p>• Escalate issues per SOP after attempting solutions</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-accent text-accent-foreground px-4 py-3 font-medium text-sm">
                Needs Approval
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Scope or timeline changes affecting client commitments</p>
                <p>• Major architectural or tool changes</p>
                <p>• New integrations impacting other teams</p>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium text-sm">
                Must Escalate If
              </div>
              <div className="bg-card p-4 space-y-2 text-sm">
                <p>• Deadline risk exceeds 24 hours</p>
                <p>• Security, data, or access risks</p>
                <p>• Platform limitations block delivery</p>
                <p>• Client dissatisfaction due to technical issues</p>
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
                <th>Primary Tools</th>
                <td>GoHighLevel, Website Builders, APIs</td>
              </tr>
              <tr>
                <th>Communication</th>
                <td>Lark / WhatsApp</td>
              </tr>
              <tr>
                <th>Reporting Cadence</th>
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
                      <li>Executes tasks with <strong>daily check-ins</strong></li>
                      <li>Learns GHL and company build standards</li>
                      <li>Updates task boards accurately</li>
                      <li>Escalates early while learning rules</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Delivers builds <strong>independently</strong></li>
                      <li>Fixes issues <strong>without escalation</strong></li>
                      <li>Proposes solutions when blocked</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Technical delivery runs <strong>without Founder involvement</strong></li>
                      <li>Builds launch on time</li>
                      <li>No recurring tech emergencies</li>
                    </ul>
                    <p className="mt-3 font-medium text-primary">Outcome: full delegation of technical execution achieved</p>
                  </td>
                </tr>
                <tr className="summary-row">
                  <td>
                    <p className="text-muted-foreground">Success signal: fewer tech emergencies</p>
                  </td>
                  <td>
                    <p className="text-muted-foreground">Success signal: Ops and Marketing stop waiting on dev work</p>
                  </td>
                  <td>
                    <p className="font-medium text-status-success">Outcome: full delegation of technical execution achieved</p>
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
            Web Developer
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">Web Developer</td>
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
