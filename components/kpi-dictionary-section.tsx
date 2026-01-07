"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";

// Reusable KPI Table Component
function KpiTable({ data }: { data: { kpi: string; target: string }[] }) {
  return (
    <div className="overflow-x-auto prose-handbook">
      <table className="table-fixed w-full table-kpi">
        <thead>
          <tr>
            <th className="w-auto">KPI</th>
            <th className="w-28 text-right">Target</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.kpi}</td>
              <td className="font-medium text-accent">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// KPI Data by Role
const operationsKpis = [
  { kpi: "Real-Time Client Message Response Time", target: "≥98%" },
  { kpi: "Email Acknowledgement Time (≤1 hour)", target: "≥98%" },
  { kpi: "On-Time Client Deliverables", target: "≥95%" },
  { kpi: "Post-Project Net Promoter Score (NPS)", target: "≥60" },
  { kpi: "Weekly Client Satisfaction Score (CSAT)", target: "≥4.5/5" },
  { kpi: "Post-Project Feedback Participation Rate", target: "≥70%" },
  { kpi: "Client Retention Rate", target: "≥90%" },
  { kpi: "Churn Rate", target: "≤8%" },
  { kpi: "At-Risk Client Recovery Rate", target: "≥70%" },
  { kpi: "% of Clients Receiving Monthly Performance Report", target: "100%" },
  { kpi: "Client Meeting Attendance", target: "100%" },
  { kpi: "Client Meeting Recording", target: "100%" },
  { kpi: "Client Meeting AI Summaries within 24h", target: "100%" },
  { kpi: "Client Weekly Report Delivery", target: "100%" },
  { kpi: "Work Sent Right the First Time", target: "≥98%" },
  { kpi: "Weekly Alignment Participation Rate", target: "100%" },
  { kpi: "On-Time Issue Resolution", target: "100%" },
  { kpi: "Team Confidence Rating", target: "≥4.5/5" },
];

const financeKpis = [
  { kpi: "Income Recorded Accuracy", target: "100%" },
  { kpi: "Expense Recording Accuracy", target: "100%" },
  { kpi: "Weekly Finance Tracker Updated On Time", target: "100%" },
  { kpi: "Monthly Income Statement Delivered", target: "100%" },
  { kpi: "Net Profit Visibility (No Gaps)", target: "100%" },
  { kpi: "Accountant Meetings Held as Scheduled", target: "100%" },
  { kpi: "Missed Tax or Compliance Deadlines", target: "0" },
  { kpi: "Accountant Follow-Ups Completed On Time", target: "100%" },
  { kpi: "Unreconciled Transactions", target: "0" },
  { kpi: "Finance Questions Requiring Founder Involvement", target: "0" },
  { kpi: "Financial Errors Found After Reporting", target: "0-1 max" },
];

const marketingKpis = [
  { kpi: "SOD Submission Rate", target: "100%" },
  { kpi: "EOD Submission Rate", target: "100%" },
  { kpi: "Daily Task Completion Rate", target: "≥95%" },
  { kpi: "Client Project Board Task Accuracy", target: "≥98%" },
  { kpi: "On-Time Marketing Deliverables", target: "≥95%" },
  { kpi: "Tasks Updated in Real Time", target: "100%" },
  { kpi: "Deadline Extensions Due to Execution", target: "≤1" },
  { kpi: "Client Pending Items (Team-Controlled)", target: "≤2 per client" },
  { kpi: "Same-Day Action on Client Blockers", target: "100%" },
  { kpi: "Weekly Alignment Participation Rate", target: "100%" },
  { kpi: "On-Time Issue Resolution (Execution Issues)", target: "≥95%" },
  { kpi: "Escalations With Proposed Solutions", target: "100%" },
  { kpi: "Client Follow-Ups Completed Without Chasing", target: "≥98%" },
];

const developerKpis = [
  { kpi: "SOD Submission Rate", target: "100%" },
  { kpi: "EOD Submission Rate", target: "100%" },
  { kpi: "Daily Task Completion Rate", target: "≥95%" },
  { kpi: "Client Project Board Task Accuracy", target: "≥98%" },
  { kpi: "On-Time Technical Deliverables", target: "≥95%" },
  { kpi: "Tasks Updated in Real Time", target: "100%" },
  { kpi: "Deadline Extensions Due to Execution", target: "≤1" },
  { kpi: "Client Pending Items (Team-Controlled)", target: "≤2 per client" },
  { kpi: "Same-Day Action on Client Blockers", target: "100%" },
  { kpi: "Weekly Alignment Participation Rate", target: "100%" },
  { kpi: "On-Time Issue Resolution (Execution Issues)", target: "≥95%" },
  { kpi: "Escalations With Proposed Solutions", target: "100%" },
  { kpi: "Client Follow-Ups Completed Without Chasing", target: "≥98%" },
];

const hrAdminKpis = [
  { kpi: "Employee Records Accuracy", target: "100%" },
  { kpi: "Contracts & Documentation Up-to-Date", target: "100%" },
  { kpi: "Payroll Inputs Submitted On Time", target: "100%" },
  { kpi: "Payroll Input Accuracy", target: "100%" },
  { kpi: "HR Calendar Updated (Leave/Holidays/Reviews)", target: "100%" },
  { kpi: "HR Queries Resolved Without Founder Escalation", target: "≥95%" },
  { kpi: "Admin Deadlines Met", target: "100%" },
  { kpi: "Policies Documented & Accessible", target: "100%" },
  { kpi: "Employee Response Time (HR Questions)", target: "≤24 hrs" },
  { kpi: "Weekly HR & Admin Report Submitted On Time", target: "100%" },
  { kpi: "Onboarding Completion Rate", target: "100%" },
  { kpi: "Onboarding Completed Within Timeline", target: "100%" },
  { kpi: "Offboarding Completion Rate", target: "100%" },
  { kpi: "Founder-Level HR Escalations", target: "0" },
  { kpi: "Urgent HR Surprises", target: "0" },
];

export function KpiDictionarySection() {
  const tabs = [
    {
      key: "operations",
      label: "Operations",
      title: "Operations Coordinator (Danica)",
      description: "Client success, communication, and project delivery metrics",
      content: <KpiTable data={operationsKpis} />,
    },
    {
      key: "finance",
      label: "Finance",
      title: "Finance Coordinator",
      description: "Financial accuracy, reporting, and compliance metrics",
      content: <KpiTable data={financeKpis} />,
    },
    {
      key: "marketing",
      label: "Marketing",
      title: "Marketing Specialist",
      description: "Task execution, deliverables, and client coordination metrics",
      content: <KpiTable data={marketingKpis} />,
    },
    {
      key: "developer",
      label: "Developer",
      title: "Web Developer",
      description: "Technical delivery, task management, and execution metrics",
      content: <KpiTable data={developerKpis} />,
    },
    {
      key: "hr-admin",
      label: "HR & Admin",
      title: "HR & Admin Coordinator",
      description: "People operations, documentation, and administrative metrics",
      content: <KpiTable data={hrAdminKpis} />,
    },
  ];

  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          KPI Dictionary
        </h1>
        <p className="text-muted-foreground">
          All targets at a glance — Print this page for quick reference
        </p>
      </div>

      {/* Folder Tabs */}
      <FolderTabs tabs={tabs} defaultTab="operations" />
    </div>
  );
}
