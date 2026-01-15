"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";

// KPI Data Type
interface KpiData {
  kpi: string;
  definition: string;
  formula: string;
  frequency: string;
  target: string;
  dataSource: string;
}

// Full KPI Table Component (for Full Dictionary section)
function KpiTable({ data, categoryTitle }: { data: KpiData[]; categoryTitle?: string }) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full border-collapse min-w-[600px]">
        {categoryTitle && (
          <thead>
            <tr>
              <th colSpan={5} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
                {categoryTitle}
              </th>
            </tr>
          </thead>
        )}
        <thead>
          <tr className="bg-muted/50">
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border w-[35%]">KPI</th>
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border hidden lg:table-cell w-[25%]">Definition</th>
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border hidden xl:table-cell w-[20%]">Formula</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-[10%]">Frequency</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-[10%]">Target</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm align-top">
                <div>{row.kpi}</div>
                <div className="text-xs text-muted-foreground lg:hidden mt-1">{row.definition}</div>
              </td>
              <td className="py-2.5 px-4 text-sm text-muted-foreground hidden lg:table-cell align-top">{row.definition}</td>
              <td className="py-2.5 px-4 text-xs font-mono text-muted-foreground hidden xl:table-cell align-top">{row.formula}</td>
              <td className="py-2.5 px-4 text-sm text-center text-muted-foreground align-top">{row.frequency}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent align-top">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sectioned KPI Table for roles with multiple categories
function SectionedKpiTable({ sections }: { sections: { title: string; data: KpiData[] }[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <KpiTable key={idx} data={section.data} categoryTitle={section.title} />
      ))}
    </div>
  );
}

// Quick Reference Table (compact KPI + Target only)
function QuickRefTable({ title, data }: { title: string; data: KpiData[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={2} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm">{row.kpi}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent w-28">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// KPIs by Role Table (KPI + Frequency + Target)
function ByRoleTable({ title, count, data }: { title: string; count: number; data: KpiData[] }) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={3} className="bg-primary text-primary-foreground font-bold text-center py-2.5 text-xs">
              {title} ({count} KPIs)
            </th>
          </tr>
          <tr className="bg-muted/50">
            <th className="text-left py-2.5 px-4 font-semibold text-xs border-b border-border">KPI</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-28">Frequency</th>
            <th className="text-center py-2.5 px-4 font-semibold text-xs border-b border-border w-28">Target</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border hover:bg-muted/30">
              <td className="py-2.5 px-4 text-sm">{row.kpi}</td>
              <td className="py-2.5 px-4 text-sm text-center text-muted-foreground">{row.frequency}</td>
              <td className="py-2.5 px-4 text-sm text-center font-semibold text-accent">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// ==========================================
// OPERATIONS COORDINATOR (Danica) KPIs
// ==========================================

const operationsClientPromiseKpis: KpiData[] = [
  { kpi: "Real-Time Client Message Response Time", definition: "% of client messages responded to within SLA", formula: "(Messages Responded On-Time / Total Messages) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Lark / Email logs" },
  { kpi: "Email Acknowledgement Time (≤1 hour)", definition: "% of emails acknowledged within 1 hour during business hours", formula: "(Emails Ack'd Within 1hr / Total Emails) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Email tracking" },
  { kpi: "On-Time Client Deliverables", definition: "% of client deliverables sent by promised deadline", formula: "(On-Time Deliveries / Total Deliveries) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Project tracker" },
  { kpi: "Post-Project Net Promoter Score (NPS)", definition: "Client likelihood to recommend (0-10 scale)", formula: "% Promoters - % Detractors", frequency: "Per project", target: "≥60", dataSource: "Client surveys" },
  { kpi: "Weekly Client Satisfaction Score (CSAT)", definition: "Average weekly satisfaction rating from clients", formula: "Average of client ratings (1-5 scale)", frequency: "Weekly", target: "≥4.5/5", dataSource: "Weekly check-ins" },
  { kpi: "Post-Project Feedback Participation Rate", definition: "% of completed projects with client feedback collected", formula: "(Projects with Feedback / Total Completed) × 100", frequency: "Monthly", target: "≥70%", dataSource: "Feedback forms" },
  { kpi: "Client Retention Rate", definition: "% of clients who continue/renew after project", formula: "(Retained Clients / Total Clients) × 100", frequency: "Monthly", target: "≥90%", dataSource: "CRM / Client list" },
  { kpi: "Churn Rate", definition: "% of clients lost in the period", formula: "(Lost Clients / Total Clients) × 100", frequency: "Monthly", target: "≤8%", dataSource: "CRM / Client list" },
  { kpi: "At-Risk Client Recovery Rate", definition: "% of flagged at-risk clients successfully retained", formula: "(Recovered / Total At-Risk) × 100", frequency: "Monthly", target: "≥70%", dataSource: "At-risk tracker" },
  { kpi: "% of Clients Receiving Monthly Performance Report", definition: "% of active retainer clients sent monthly report", formula: "(Reports Sent / Active Retainer Clients) × 100", frequency: "Monthly", target: "100%", dataSource: "Report log" },
];

const operationsInternalProcessKpis: KpiData[] = [
  { kpi: "Client Meeting Attendance", definition: "% of scheduled client meetings attended", formula: "(Attended / Scheduled) × 100", frequency: "Weekly", target: "100%", dataSource: "Calendar" },
  { kpi: "Client Meeting Recording", definition: "% of client meetings properly recorded", formula: "(Recorded / Total Meetings) × 100", frequency: "Weekly", target: "100%", dataSource: "Recording storage" },
  { kpi: "Client Meeting AI Summaries within 24h", definition: "% of meetings with AI summary delivered within 24 hours", formula: "(Summaries On-Time / Total Meetings) × 100", frequency: "Weekly", target: "100%", dataSource: "Summary log" },
  { kpi: "Client Weekly Report Delivery", definition: "% of weekly reports delivered on time", formula: "(On-Time Reports / Total Due) × 100", frequency: "Weekly", target: "100%", dataSource: "Report tracker" },
  { kpi: "Work Sent Right the First Time", definition: "% of deliverables approved without revision requests", formula: "(First-Time Approvals / Total Sent) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Revision tracker" },
  { kpi: "Weekly Alignment Participation Rate", definition: "% attendance at internal weekly alignment meetings", formula: "(Attended / Total Alignments) × 100", frequency: "Weekly", target: "100%", dataSource: "Meeting attendance" },
  { kpi: "On-Time Issue Resolution", definition: "% of flagged issues resolved within SLA", formula: "(Resolved On-Time / Total Issues) × 100", frequency: "Weekly", target: "100%", dataSource: "Issue tracker" },
  { kpi: "Team Confidence Rating", definition: "Average team rating of ops support quality", formula: "Average of team ratings (1-5 scale)", frequency: "Monthly", target: "≥4.5/5", dataSource: "Team surveys" },
];

// ==========================================
// FINANCE COORDINATOR KPIs
// ==========================================

const financeExecutionKpis: KpiData[] = [
  { kpi: "Income Recorded Accuracy", definition: "% of income entries recorded correctly", formula: "(Accurate Entries / Total Entries) × 100", frequency: "Weekly", target: "100%", dataSource: "Finance tracker" },
  { kpi: "Expense Recording Accuracy", definition: "% of expense entries recorded correctly", formula: "(Accurate Entries / Total Entries) × 100", frequency: "Weekly", target: "100%", dataSource: "Finance tracker" },
  { kpi: "Weekly Finance Tracker Updated On Time", definition: "% of weeks tracker updated by deadline", formula: "(On-Time Updates / Total Weeks) × 100", frequency: "Weekly", target: "100%", dataSource: "Finance tracker" },
  { kpi: "Monthly Income Statement Delivered", definition: "% of months with P&L delivered on time", formula: "(On-Time P&L / Total Months) × 100", frequency: "Monthly", target: "100%", dataSource: "Financial reports" },
  { kpi: "Net Profit Visibility (No Gaps)", definition: "% of periods with complete profit visibility", formula: "(Complete Periods / Total Periods) × 100", frequency: "Monthly", target: "100%", dataSource: "Financial reports" },
  { kpi: "Accountant Meetings Held as Scheduled", definition: "% of scheduled accountant meetings held", formula: "(Held / Scheduled) × 100", frequency: "Monthly", target: "100%", dataSource: "Calendar" },
  { kpi: "Missed Tax or Compliance Deadlines", definition: "Count of missed tax/compliance deadlines", formula: "Count of missed deadlines", frequency: "Monthly", target: "0", dataSource: "Compliance calendar" },
];

const financeReliabilityKpis: KpiData[] = [
  { kpi: "Accountant Follow-Ups Completed On Time", definition: "% of accountant action items completed by deadline", formula: "(On-Time / Total Action Items) × 100", frequency: "Monthly", target: "100%", dataSource: "Action item log" },
  { kpi: "Unreconciled Transactions", definition: "Count of transactions not reconciled by month-end", formula: "Count of unreconciled items", frequency: "Monthly", target: "0", dataSource: "Bank reconciliation" },
  { kpi: "Finance Questions Requiring Founder Involvement", definition: "Count of finance issues escalated to founder", formula: "Count of founder escalations", frequency: "Monthly", target: "0", dataSource: "Escalation log" },
  { kpi: "Financial Errors Found After Reporting", definition: "Count of errors discovered after reports submitted", formula: "Count of post-report errors", frequency: "Monthly", target: "0-1 max", dataSource: "Error log" },
];

// ==========================================
// MARKETING SPECIALIST KPIs
// ==========================================

const marketingExecutionKpis: KpiData[] = [
  { kpi: "SOD Submission Rate", definition: "% of workdays with Start-of-Day submitted on time", formula: "(On-Time SODs / Total Workdays) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "SOD tracker" },
  { kpi: "EOD Submission Rate", definition: "% of workdays with End-of-Day submitted on time", formula: "(On-Time EODs / Total Workdays) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "EOD tracker" },
  { kpi: "Daily Task Completion Rate", definition: "% of daily planned tasks completed", formula: "(Completed Tasks / Planned Tasks) × 100", frequency: "Daily/Weekly", target: "≥95%", dataSource: "Task management" },
  { kpi: "Client Project Board Task Accuracy", definition: "% of tasks correctly logged and updated", formula: "(Accurate Tasks / Total Tasks) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Project board" },
  { kpi: "On-Time Marketing Deliverables", definition: "% of marketing deliverables delivered by deadline", formula: "(On-Time / Total Deliverables) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Project tracker" },
  { kpi: "Tasks Updated in Real Time", definition: "% of task status updates made same-day", formula: "(Same-Day Updates / Total Updates) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "Project board" },
  { kpi: "Deadline Extensions Due to Execution", definition: "Count of deadline extensions requested due to execution issues", formula: "Count of extensions", frequency: "Weekly", target: "≤1", dataSource: "Extension log" },
];

const marketingCollaborationKpis: KpiData[] = [
  { kpi: "Client Pending Items (Team-Controlled)", definition: "Count of pending items within team's control per client", formula: "Count per client", frequency: "Weekly", target: "≤2 per client", dataSource: "Project board" },
  { kpi: "Same-Day Action on Client Blockers", definition: "% of client blockers actioned same day identified", formula: "(Same-Day Actions / Total Blockers) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "Blocker log" },
  { kpi: "Weekly Alignment Participation Rate", definition: "% attendance at weekly team alignment meetings", formula: "(Attended / Total) × 100", frequency: "Weekly", target: "100%", dataSource: "Meeting attendance" },
  { kpi: "On-Time Issue Resolution (Execution Issues)", definition: "% of execution issues resolved within SLA", formula: "(On-Time / Total Issues) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Issue tracker" },
  { kpi: "Escalations With Proposed Solutions", definition: "% of escalations that include proposed solution", formula: "(With Solution / Total Escalations) × 100", frequency: "Weekly", target: "100%", dataSource: "Escalation log" },
  { kpi: "Client Follow-Ups Completed Without Chasing", definition: "% of follow-ups completed proactively", formula: "(Proactive / Total Follow-Ups) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Follow-up log" },
];

// ==========================================
// WEB DEVELOPER KPIs
// ==========================================

const developerExecutionKpis: KpiData[] = [
  { kpi: "SOD Submission Rate", definition: "% of workdays with Start-of-Day submitted on time", formula: "(On-Time SODs / Total Workdays) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "SOD tracker" },
  { kpi: "EOD Submission Rate", definition: "% of workdays with End-of-Day submitted on time", formula: "(On-Time EODs / Total Workdays) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "EOD tracker" },
  { kpi: "Daily Task Completion Rate", definition: "% of daily planned tasks completed", formula: "(Completed Tasks / Planned Tasks) × 100", frequency: "Daily/Weekly", target: "≥95%", dataSource: "Task management" },
  { kpi: "Client Project Board Task Accuracy", definition: "% of tasks correctly logged and updated", formula: "(Accurate Tasks / Total Tasks) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Project board" },
  { kpi: "On-Time Technical Deliverables", definition: "% of technical deliverables delivered by deadline", formula: "(On-Time / Total Deliverables) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Project tracker" },
  { kpi: "Tasks Updated in Real Time", definition: "% of task status updates made same-day", formula: "(Same-Day Updates / Total Updates) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "Project board" },
  { kpi: "Deadline Extensions Due to Execution", definition: "Count of deadline extensions requested due to execution issues", formula: "Count of extensions", frequency: "Weekly", target: "≤1", dataSource: "Extension log" },
];

const developerCollaborationKpis: KpiData[] = [
  { kpi: "Client Pending Items (Team-Controlled)", definition: "Count of pending items within team's control per client", formula: "Count per client", frequency: "Weekly", target: "≤2 per client", dataSource: "Project board" },
  { kpi: "Same-Day Action on Client Blockers", definition: "% of client blockers actioned same day identified", formula: "(Same-Day Actions / Total Blockers) × 100", frequency: "Daily/Weekly", target: "100%", dataSource: "Blocker log" },
  { kpi: "Weekly Alignment Participation Rate", definition: "% attendance at weekly team alignment meetings", formula: "(Attended / Total) × 100", frequency: "Weekly", target: "100%", dataSource: "Meeting attendance" },
  { kpi: "On-Time Issue Resolution (Execution Issues)", definition: "% of execution issues resolved within SLA", formula: "(On-Time / Total Issues) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Issue tracker" },
  { kpi: "Escalations With Proposed Solutions", definition: "% of escalations that include proposed solution", formula: "(With Solution / Total Escalations) × 100", frequency: "Weekly", target: "100%", dataSource: "Escalation log" },
  { kpi: "Client Follow-Ups Completed Without Chasing", definition: "% of follow-ups completed proactively", formula: "(Proactive / Total Follow-Ups) × 100", frequency: "Weekly", target: "≥98%", dataSource: "Follow-up log" },
];

// ==========================================
// HR & ADMIN COORDINATOR KPIs
// ==========================================

const hrRecurringKpis: KpiData[] = [
  { kpi: "Employee Records Accuracy", definition: "% of employee records accurate and up-to-date", formula: "(Accurate Records / Total Records) × 100", frequency: "Monthly", target: "100%", dataSource: "HR database" },
  { kpi: "Contracts & Documentation Up-to-Date", definition: "% of contracts and docs current and accessible", formula: "(Current Docs / Total Required) × 100", frequency: "Monthly", target: "100%", dataSource: "Document storage" },
  { kpi: "Payroll Inputs Submitted On Time", definition: "% of payroll inputs submitted by deadline", formula: "(On-Time / Total Pay Periods) × 100", frequency: "Per payroll", target: "100%", dataSource: "Payroll tracker" },
  { kpi: "Payroll Input Accuracy", definition: "% of payroll inputs without errors", formula: "(Accurate / Total Inputs) × 100", frequency: "Per payroll", target: "100%", dataSource: "Payroll tracker" },
  { kpi: "HR Calendar Updated (Leave/Holidays/Reviews)", definition: "% of HR events properly calendared", formula: "(Updated / Total Events) × 100", frequency: "Weekly", target: "100%", dataSource: "HR calendar" },
  { kpi: "HR Queries Resolved Without Founder Escalation", definition: "% of HR questions resolved independently", formula: "(Resolved Independently / Total Queries) × 100", frequency: "Weekly", target: "≥95%", dataSource: "Query log" },
  { kpi: "Admin Deadlines Met", definition: "% of administrative deadlines met", formula: "(On-Time / Total Deadlines) × 100", frequency: "Weekly", target: "100%", dataSource: "Admin tracker" },
  { kpi: "Policies Documented & Accessible", definition: "% of required policies documented and accessible", formula: "(Documented / Total Required) × 100", frequency: "Monthly", target: "100%", dataSource: "Policy folder" },
  { kpi: "Employee Response Time (HR Questions)", definition: "Average time to respond to employee HR questions", formula: "Average hours to first response", frequency: "Weekly", target: "≤24 hrs", dataSource: "Query log" },
  { kpi: "Weekly HR & Admin Report Submitted On Time", definition: "% of weekly HR reports submitted by deadline", formula: "(On-Time / Total Weeks) × 100", frequency: "Weekly", target: "100%", dataSource: "Report log" },
];

const hrEventBasedKpis: KpiData[] = [
  { kpi: "Onboarding Completion Rate", definition: "% of new hires fully onboarded", formula: "(Completed / Total New Hires) × 100", frequency: "Per hire", target: "100%", dataSource: "Onboarding checklist" },
  { kpi: "Onboarding Completed Within Timeline", definition: "% of onboardings finished within standard timeline", formula: "(On-Time / Total Onboardings) × 100", frequency: "Per hire", target: "100%", dataSource: "Onboarding tracker" },
  { kpi: "Offboarding Completion Rate", definition: "% of departures properly offboarded", formula: "(Completed / Total Departures) × 100", frequency: "Per departure", target: "100%", dataSource: "Offboarding checklist" },
  { kpi: "Founder-Level HR Escalations", definition: "Count of HR issues requiring founder involvement", formula: "Count of escalations", frequency: "Monthly", target: "0", dataSource: "Escalation log" },
  { kpi: "Urgent HR Surprises", definition: "Count of unexpected urgent HR issues", formula: "Count of surprises", frequency: "Monthly", target: "0", dataSource: "Issue log" },
];


// ==========================================
// MAIN COMPONENT EXPORT
// ==========================================

export function KpiDictionarySection() {
  // Combined data for quick reference
  const allOperationsKpis = [...operationsClientPromiseKpis, ...operationsInternalProcessKpis];
  const allFinanceKpis = [...financeExecutionKpis, ...financeReliabilityKpis];
  const allMarketingKpis = [...marketingExecutionKpis, ...marketingCollaborationKpis];
  const allDeveloperKpis = [...developerExecutionKpis, ...developerCollaborationKpis];
  const allHrKpis = [...hrRecurringKpis, ...hrEventBasedKpis];

  const tabs = [
    {
      key: "operations",
      label: "Operations",
      title: "Operations Coordinator (Danica)",
      description: "18 KPIs across Client Promise & Internal Business Process",
      content: (
        <SectionedKpiTable
          sections={[
            { title: "CLIENT PROMISE (CP) KPIs", data: operationsClientPromiseKpis },
            { title: "INTERNAL BUSINESS PROCESS (IBP) KPIs", data: operationsInternalProcessKpis },
          ]}
        />
      ),
    },
    {
      key: "finance",
      label: "Finance",
      title: "Finance Coordinator",
      description: "11 KPIs across Financial Execution & Reliability",
      content: (
        <SectionedKpiTable
          sections={[
            { title: "FINANCIAL EXECUTION KPIs", data: financeExecutionKpis },
            { title: "RELIABILITY & COMPLIANCE KPIs", data: financeReliabilityKpis },
          ]}
        />
      ),
    },
    {
      key: "marketing",
      label: "Marketing",
      title: "Marketing Specialist",
      description: "13 KPIs across Execution & Collaboration",
      content: (
        <SectionedKpiTable
          sections={[
            { title: "EXECUTION & ACCOUNTABILITY KPIs", data: marketingExecutionKpis },
            { title: "COLLABORATION & VISIBILITY KPIs", data: marketingCollaborationKpis },
          ]}
        />
      ),
    },
    {
      key: "developer",
      label: "Developer",
      title: "Web Developer",
      description: "13 KPIs across Execution & Collaboration",
      content: (
        <SectionedKpiTable
          sections={[
            { title: "EXECUTION & ACCOUNTABILITY KPIs", data: developerExecutionKpis },
            { title: "COLLABORATION & VISIBILITY KPIs", data: developerCollaborationKpis },
          ]}
        />
      ),
    },
    {
      key: "hr-admin",
      label: "HR & Admin",
      title: "HR & Admin Coordinator",
      description: "15 KPIs across Recurring & Event-Based",
      content: (
        <SectionedKpiTable
          sections={[
            { title: "RECURRING KPIs (TRACKED WEEKLY/MONTHLY)", data: hrRecurringKpis },
            { title: "EVENT-BASED KPIs (TRACKED PER OCCURRENCE)", data: hrEventBasedKpis },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="animate-fade-in prose-handbook space-y-12">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          KPI Dictionary
        </h1>
        <p className="text-muted-foreground">
          All metrics from role scorecards with definitions, formulas, and targets
        </p>
      </div>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          KPI Summary by Role
        </h2>
        <div className="overflow-x-auto -mx-3 md:mx-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left py-3 px-3 font-semibold border-b border-border">Role</th>
                <th className="text-center py-3 px-3 font-semibold border-b border-border w-24">Total KPIs</th>
                <th className="text-left py-3 px-3 font-semibold border-b border-border">Categories</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 font-medium">Operations Coordinator (Danica)</td>
                <td className="py-3 px-3 text-center text-accent font-bold">18</td>
                <td className="py-3 px-3 text-muted-foreground">Client Promise & Internal Process</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 font-medium">Finance Coordinator</td>
                <td className="py-3 px-3 text-center text-accent font-bold">11</td>
                <td className="py-3 px-3 text-muted-foreground">Financial Execution & Reliability</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 font-medium">Marketing Specialist</td>
                <td className="py-3 px-3 text-center text-accent font-bold">13</td>
                <td className="py-3 px-3 text-muted-foreground">Execution & Collaboration</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 font-medium">Web Developer</td>
                <td className="py-3 px-3 text-center text-accent font-bold">13</td>
                <td className="py-3 px-3 text-muted-foreground">Execution & Collaboration</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30">
                <td className="py-3 px-3 font-medium">HR & Admin Coordinator</td>
                <td className="py-3 px-3 text-center text-accent font-bold">15</td>
                <td className="py-3 px-3 text-muted-foreground">Recurring & Event-Based</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="py-3 px-3 font-bold">TOTAL</td>
                <td className="py-3 px-3 text-center text-accent font-bold">70</td>
                <td className="py-3 px-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Full Dictionary by Role */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Full Dictionary by Role
        </h2>
        <FolderTabs tabs={tabs} defaultTab="operations" />
      </section>

      {/* KPIs by Role */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          KPIs by Role
        </h2>
        <FolderTabs
          tabs={[
            {
              key: "ops-role",
              label: "Operations",
              title: "Operations Coordinator (Danica)",
              description: "18 KPIs",
              content: <ByRoleTable title="OPERATIONS COORDINATOR (Danica)" count={18} data={allOperationsKpis} />,
            },
            {
              key: "finance-role",
              label: "Finance",
              title: "Finance Coordinator",
              description: "11 KPIs",
              content: <ByRoleTable title="FINANCE COORDINATOR" count={11} data={allFinanceKpis} />,
            },
            {
              key: "marketing-role",
              label: "Marketing",
              title: "Marketing Specialist",
              description: "13 KPIs",
              content: <ByRoleTable title="MARKETING SPECIALIST" count={13} data={allMarketingKpis} />,
            },
            {
              key: "developer-role",
              label: "Developer",
              title: "Web Developer",
              description: "13 KPIs",
              content: <ByRoleTable title="WEB DEVELOPER" count={13} data={allDeveloperKpis} />,
            },
            {
              key: "hr-role",
              label: "HR & Admin",
              title: "HR & Admin Coordinator",
              description: "15 KPIs",
              content: <ByRoleTable title="HR & ADMIN COORDINATOR" count={15} data={allHrKpis} />,
            },
          ]}
          defaultTab="ops-role"
        />
      </section>

      {/* Quick Reference */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-2 pb-2 border-b border-border">
          KPI Quick Reference
        </h2>
        <p className="text-muted-foreground mb-6 text-sm italic">
          Print this page — All targets at a glance
        </p>
        <FolderTabs
          tabs={[
            {
              key: "ops-quick",
              label: "Operations",
              title: "Operations Coordinator (Danica)",
              description: "18 KPIs",
              content: <QuickRefTable title="OPERATIONS COORDINATOR (Danica)" data={allOperationsKpis} />,
            },
            {
              key: "finance-quick",
              label: "Finance",
              title: "Finance Coordinator",
              description: "11 KPIs",
              content: <QuickRefTable title="FINANCE COORDINATOR" data={allFinanceKpis} />,
            },
            {
              key: "marketing-quick",
              label: "Marketing",
              title: "Marketing Specialist",
              description: "13 KPIs",
              content: <QuickRefTable title="MARKETING SPECIALIST" data={allMarketingKpis} />,
            },
            {
              key: "developer-quick",
              label: "Developer",
              title: "Web Developer",
              description: "13 KPIs",
              content: <QuickRefTable title="WEB DEVELOPER" data={allDeveloperKpis} />,
            },
            {
              key: "hr-quick",
              label: "HR & Admin",
              title: "HR & Admin Coordinator",
              description: "15 KPIs",
              content: <QuickRefTable title="HR & ADMIN COORDINATOR" data={allHrKpis} />,
            },
          ]}
          defaultTab="ops-quick"
        />
      </section>
    </div>
  );
}
