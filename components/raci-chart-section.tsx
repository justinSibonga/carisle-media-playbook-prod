"use client";

import { useEffect } from "react";
import { FolderTabs } from "@/components/ui/folder-tabs";
import { cn } from "@/lib/utils";
import { RACI_COLUMN_WIDTH } from "@/lib/constants";

// Helper function to get RACI cell styles
function getRaciStyles(v: string) {
  if (!v || v === "-") return { bg: "", text: "text-muted-foreground" };
  if (v === "A/R" || v === "A") return { bg: "bg-raci-accountable", text: "text-white" };
  if (v === "R") return { bg: "bg-raci-responsible", text: "text-white" };
  if (v === "C") return { bg: "bg-raci-consulted", text: "text-black" };
  if (v === "I") return { bg: "bg-raci-informed", text: "text-white" };
  return { bg: "bg-muted", text: "text-foreground" };
}

// RACI Cell Component
function RaciCell({ value, textColor }: { value: string; textColor?: string }) {
  if (!value || value === "-") {
    return <span className="text-muted-foreground">—</span>;
  }
  return (
    <span className={cn("text-xs font-bold", textColor)}>
      {value}
    </span>
  );
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  return (
    <tr>
      <td colSpan={8} className="bg-primary text-white! font-bold text-center py-2 text-xs">
        {title}
      </td>
    </tr>
  );
}

// RACI Table Component
function RaciTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-sm border-collapse table-fixed min-w-[800px]">
        <colgroup>
          <col style={{ width: RACI_COLUMN_WIDTH.ACTIVITY }} />
          <col style={{ width: RACI_COLUMN_WIDTH.FREQUENCY }} />
          <col style={{ width: RACI_COLUMN_WIDTH.ROLE }} />
          <col style={{ width: RACI_COLUMN_WIDTH.ROLE }} />
          <col style={{ width: RACI_COLUMN_WIDTH.MARKETING }} />
          <col style={{ width: RACI_COLUMN_WIDTH.ROLE }} />
          <col style={{ width: RACI_COLUMN_WIDTH.ROLE }} />
          <col style={{ width: RACI_COLUMN_WIDTH.ROLE }} />
        </colgroup>
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th style={{ width: RACI_COLUMN_WIDTH.ACTIVITY, minWidth: RACI_COLUMN_WIDTH.ACTIVITY }} className="text-left py-3 px-3 font-semibold text-sm">Activity</th>
            <th style={{ width: RACI_COLUMN_WIDTH.FREQUENCY, minWidth: RACI_COLUMN_WIDTH.FREQUENCY }} className="text-center py-3 px-1 font-semibold text-sm">Frequency</th>
            <th style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className="text-center py-3 px-2 font-semibold text-sm">Founder</th>
            <th style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className="text-center py-3 px-2 font-semibold text-sm">Ops</th>
            <th style={{ width: RACI_COLUMN_WIDTH.MARKETING, minWidth: RACI_COLUMN_WIDTH.MARKETING }} className="text-center py-3 px-2 font-semibold text-sm">Marketing</th>
            <th style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className="text-center py-3 px-2 font-semibold text-sm">HR</th>
            <th style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className="text-center py-3 px-2 font-semibold text-sm">Web Dev</th>
            <th style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className="text-center py-3 px-2 font-semibold text-sm">Finance</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

// Data Row Component
function DataRow({ activity, frequency, founder, ops, marketing, hr, web, finance }: {
  activity: string;
  frequency: string;
  founder: string;
  ops: string;
  marketing: string;
  hr: string;
  web: string;
  finance: string;
}) {
  const founderStyles = getRaciStyles(founder);
  const opsStyles = getRaciStyles(ops);
  const marketingStyles = getRaciStyles(marketing);
  const hrStyles = getRaciStyles(hr);
  const webStyles = getRaciStyles(web);
  const financeStyles = getRaciStyles(finance);

  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td style={{ width: RACI_COLUMN_WIDTH.ACTIVITY, minWidth: RACI_COLUMN_WIDTH.ACTIVITY }} className="py-3 px-3 text-left text-sm">{activity}</td>
      <td style={{ width: RACI_COLUMN_WIDTH.FREQUENCY, minWidth: RACI_COLUMN_WIDTH.FREQUENCY }} className="py-3 px-3 text-center text-sm text-muted-foreground">{frequency}</td>
      <td style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className={cn("py-3 pl-4 pr-2 text-center", founderStyles.bg, founderStyles.text)}><RaciCell value={founder} textColor={founderStyles.text} /></td>
      <td style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className={cn("py-3 pl-6 pr-2 text-center", opsStyles.bg, opsStyles.text)}><RaciCell value={ops} textColor={opsStyles.text} /></td>
      <td style={{ width: RACI_COLUMN_WIDTH.MARKETING, minWidth: RACI_COLUMN_WIDTH.MARKETING }} className={cn("py-3 pl-3 pr-2 text-center", marketingStyles.bg, marketingStyles.text)}><RaciCell value={marketing} textColor={marketingStyles.text} /></td>
      <td style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className={cn("py-3 pl-6 pr-2 text-center", hrStyles.bg, hrStyles.text)}><RaciCell value={hr} textColor={hrStyles.text} /></td>
      <td style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className={cn("py-3 pl-4 pr-2 text-center", webStyles.bg, webStyles.text)}><RaciCell value={web} textColor={webStyles.text} /></td>
      <td style={{ width: RACI_COLUMN_WIDTH.ROLE, minWidth: RACI_COLUMN_WIDTH.ROLE }} className={cn("py-3 pl-4 pr-2 text-center", financeStyles.bg, financeStyles.text)}><RaciCell value={finance} textColor={financeStyles.text} /></td>
    </tr>
  );
}

// Operations Tab Content
function OperationsContent() {
  return (
    <RaciTable>
      <SectionHeader title="DAILY OPERATIONS" />
      <DataRow activity="SOD (Start of Day) Submission" frequency="Daily" founder="-" ops="A/R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="EOD (End of Day) Submission" frequency="Daily" founder="-" ops="A/R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Daily Task Completion" frequency="Daily" founder="-" ops="A/R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Task Board Updates (Real-Time)" frequency="Daily" founder="-" ops="A/R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Client Communication & Follow-ups" frequency="Daily" founder="I" ops="A/R" marketing="C" hr="-" web="-" finance="-" />
      <DataRow activity="Same-Day Action on Client Blockers" frequency="Daily" founder="I" ops="A/R" marketing="-" hr="-" web="C" finance="-" />
      <DataRow activity="Urgent Issue Escalation" frequency="As needed" founder="I" ops="A/R" marketing="-" hr="-" web="-" finance="-" />
      
      <SectionHeader title="WEEKLY OPERATIONS" />
      <DataRow activity="Weekly L10 Meeting Facilitation" frequency="Weekly" founder="-" ops="A/R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Weekly L10 Report Submission" frequency="Weekly" founder="-" ops="A" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Founder Scorecard Update" frequency="Weekly" founder="R" ops="I" marketing="-" hr="-" web="-" finance="-" />
      <DataRow activity="Client Project Board Accuracy Review" frequency="Weekly" founder="-" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      <DataRow activity="Weekly Alignment/Team Meeting" frequency="Weekly" founder="R" ops="A" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Client Pending Items Review" frequency="Weekly" founder="I" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      
      <SectionHeader title="CLIENT & PROJECT MANAGEMENT" />
      <DataRow activity="Client Onboarding (Project Setup)" frequency="As needed" founder="I" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      <DataRow activity="Client Deliverable Tracking" frequency="Ongoing" founder="I" ops="A/R" marketing="R" hr="-" web="R" finance="-" />
      <DataRow activity="Client Escalation Management" frequency="As needed" founder="C" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      <DataRow activity="Project Timeline Management" frequency="Ongoing" founder="I" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      <DataRow activity="Scope Change Requests" frequency="As needed" founder="C" ops="A/R" marketing="C" hr="-" web="C" finance="-" />
      <DataRow activity="Client Relationship Management" frequency="Ongoing" founder="C" ops="A/R" marketing="-" hr="-" web="-" finance="-" />
    </RaciTable>
  );
}

// Finance & Decisions Tab Content
function FinanceDecisionsContent() {
  return (
    <RaciTable>
      <SectionHeader title="FINANCE & ACCOUNTING" />
      <DataRow activity="Income Recording & Categorization" frequency="Daily/Weekly" founder="-" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Expense Recording & Reconciliation" frequency="Daily/Weekly" founder="-" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Weekly Finance Tracker Updates" frequency="Weekly" founder="I" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Monthly Income Statement Preparation" frequency="Monthly" founder="I" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Net Profit Calculation & Visibility" frequency="Monthly" founder="I" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Accountant Meeting Coordination" frequency="Monthly" founder="-" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Tax Deadline Tracking & Reminders" frequency="Ongoing" founder="I" ops="-" marketing="C" hr="-" web="-" finance="A/R" />
      <DataRow activity="Tax Filing Coordination" frequency="Quarterly" founder="I" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Financial Report Preparation" frequency="Monthly" founder="I" ops="-" marketing="-" hr="-" web="-" finance="A/R" />
      <DataRow activity="Budget Tracking & Reporting" frequency="Monthly" founder="I" ops="C" marketing="C" hr="C" web="C" finance="A/R" />
      <DataRow activity="Invoice Management" frequency="As needed" founder="-" ops="C" marketing="-" hr="-" web="-" finance="A/R" />
      
      <SectionHeader title="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
      <DataRow activity="Strategic Planning & Vision" frequency="Quarterly" founder="A/R" ops="C" marketing="C" hr="C" web="C" finance="C" />
      <DataRow activity="Company OKRs / Goal Setting" frequency="Quarterly" founder="A/R" ops="C" marketing="C" hr="C" web="C" finance="C" />
      <DataRow activity="Final Hiring Approval" frequency="As needed" founder="A" ops="C" marketing="C" hr="R" web="C" finance="-" />
      <DataRow activity="Termination Decisions" frequency="As needed" founder="A" ops="-" marketing="-" hr="R" web="-" finance="-" />
      <DataRow activity="Major Budget Approval (>threshold)" frequency="As needed" founder="A" ops="-" marketing="C" hr="-" web="C" finance="R" />
      <DataRow activity="New Client Contract Approval" frequency="As needed" founder="A" ops="R" marketing="-" hr="-" web="-" finance="-" />
      <DataRow activity="Pricing & Package Decisions" frequency="As needed" founder="A/R" ops="C" marketing="C" hr="-" web="C" finance="C" />
      <DataRow activity="Major Vendor/Tool Decisions" frequency="As needed" founder="A" ops="C" marketing="C" hr="C" web="C" finance="C" />
      <DataRow activity="Company Policy Final Approval" frequency="As needed" founder="A" ops="C" marketing="C" hr="C" web="C" finance="-" />
      
      <SectionHeader title="PERFORMANCE MANAGEMENT" />
      <DataRow activity="Monthly Performance Evaluations" frequency="Monthly" founder="R" ops="-" marketing="-" hr="A" web="-" finance="-" />
      <DataRow activity="KPI Review & Feedback" frequency="Weekly" founder="R" ops="R" marketing="R" hr="R" web="R" finance="R" />
      <DataRow activity="Quarterly Performance Reviews" frequency="Quarterly" founder="C" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Probation Reviews" frequency="As needed" founder="C" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Team Development & Coaching" frequency="Ongoing" founder="C" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
    </RaciTable>
  );
}

// Role Accountability Row Component
function RoleActivityRow({ activity, category }: { activity: string; category: string }) {
  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td className="py-2 px-3 text-left text-xs">{activity}</td>
      <td className="py-2 px-3 text-left text-xs text-muted-foreground">{category}</td>
    </tr>
  );
}

// Role Section Component
function RoleSection({ title, activities, total }: { 
  title: string; 
  activities: { activity: string; category: string }[];
  total: number;
}) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <td colSpan={2} className="bg-primary text-white! font-bold text-center py-2 text-xs">
              {title}
            </td>
          </tr>
          <tr className="bg-muted/50">
            <th className="text-left py-2 px-3 font-semibold text-xs">Owns & Executes (A/R)</th>
            <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, idx) => (
            <RoleActivityRow key={idx} activity={item.activity} category={item.category} />
          ))}
          <tr className="bg-muted/30">
            <td colSpan={2} className="py-2 px-3 font-semibold text-xs">
              Total: {total} activities owned
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Accountability by Role Tab Content
function AccountabilityByRoleContent() {
  const opsActivities = [
    { activity: "SOD (Start of Day) Submission", category: "DAILY OPERATIONS" },
    { activity: "EOD (End of Day) Submission", category: "DAILY OPERATIONS" },
    { activity: "Daily Task Completion", category: "DAILY OPERATIONS" },
    { activity: "Task Board Updates (Real-Time)", category: "DAILY OPERATIONS" },
    { activity: "Client Communication & Follow-ups", category: "DAILY OPERATIONS" },
    { activity: "Same-Day Action on Client Blockers", category: "DAILY OPERATIONS" },
    { activity: "Urgent Issue Escalation", category: "DAILY OPERATIONS" },
    { activity: "Weekly L10 Meeting Facilitation", category: "WEEKLY OPERATIONS" },
    { activity: "Weekly L10 Report Submission", category: "WEEKLY OPERATIONS" },
    { activity: "Client Project Board Accuracy Review", category: "WEEKLY OPERATIONS" },
    { activity: "Weekly Alignment/Team Meeting", category: "WEEKLY OPERATIONS" },
    { activity: "Client Pending Items Review", category: "WEEKLY OPERATIONS" },
    { activity: "Client Onboarding (Project Setup)", category: "CLIENT & PROJECT MANAGEMENT" },
    { activity: "Client Deliverable Tracking", category: "CLIENT & PROJECT MANAGEMENT" },
    { activity: "Client Escalation Management", category: "CLIENT & PROJECT MANAGEMENT" },
    { activity: "Project Timeline Management", category: "CLIENT & PROJECT MANAGEMENT" },
    { activity: "Scope Change Requests", category: "CLIENT & PROJECT MANAGEMENT" },
    { activity: "Client Relationship Management", category: "CLIENT & PROJECT MANAGEMENT" },
  ];

  const marketingActivities = [
    { activity: "Campaign Planning & Strategy", category: "MARKETING & CONTENT" },
    { activity: "Content Creation (Social, Blog, etc.)", category: "MARKETING & CONTENT" },
    { activity: "Social Media Management", category: "MARKETING & CONTENT" },
    { activity: "Lead Generation & Tracking", category: "MARKETING & CONTENT" },
    { activity: "Marketing Analytics & Reporting", category: "MARKETING & CONTENT" },
    { activity: "Email Marketing Campaigns", category: "MARKETING & CONTENT" },
    { activity: "Brand Asset Management", category: "MARKETING & CONTENT" },
    { activity: "Marketing Calendar Management", category: "MARKETING & CONTENT" },
  ];

  const hrActivities = [
    { activity: "New Hire Onboarding", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Employee Offboarding", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Employee Records Management", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Contracts & Documentation", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Payroll Input Preparation", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Leave Management & Tracking", category: "HR & PEOPLE OPERATIONS" },
    { activity: "HR Calendar Management", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Policy Documentation & Updates", category: "HR & PEOPLE OPERATIONS" },
    { activity: "HR Query Resolution", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Performance Review Scheduling", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Weekly HR & Admin Report", category: "HR & PEOPLE OPERATIONS" },
    { activity: "Monthly Performance Evaluations", category: "PERFORMANCE MANAGEMENT" },
    { activity: "Quarterly Performance Reviews", category: "PERFORMANCE MANAGEMENT" },
    { activity: "Probation Reviews", category: "PERFORMANCE MANAGEMENT" },
    { activity: "Team Development & Coaching", category: "PERFORMANCE MANAGEMENT" },
  ];

  const webActivities = [
    { activity: "GHL Website/Funnel Builds", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Landing Page Development", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Form & Integration Setup", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Bug Fixes & Technical Issues", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Testing Before Delivery", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Technical Documentation", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "API & Tool Integrations", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Website Performance Optimization", category: "TECHNICAL & WEB DEVELOPMENT" },
    { activity: "Technical Escalation (Platform Limits)", category: "TECHNICAL & WEB DEVELOPMENT" },
  ];

  const financeActivities = [
    { activity: "Income Recording & Categorization", category: "FINANCE & ACCOUNTING" },
    { activity: "Expense Recording & Reconciliation", category: "FINANCE & ACCOUNTING" },
    { activity: "Weekly Finance Tracker Updates", category: "FINANCE & ACCOUNTING" },
    { activity: "Monthly Income Statement Preparation", category: "FINANCE & ACCOUNTING" },
    { activity: "Net Profit Calculation & Visibility", category: "FINANCE & ACCOUNTING" },
    { activity: "Accountant Meeting Coordination", category: "FINANCE & ACCOUNTING" },
    { activity: "Tax Deadline Tracking & Reminders", category: "FINANCE & ACCOUNTING" },
    { activity: "Tax Filing Coordination", category: "FINANCE & ACCOUNTING" },
    { activity: "Financial Report Preparation", category: "FINANCE & ACCOUNTING" },
    { activity: "Budget Tracking & Reporting", category: "FINANCE & ACCOUNTING" },
    { activity: "Invoice Management", category: "FINANCE & ACCOUNTING" },
  ];

  return (
    <div className="space-y-8">
      <RoleSection 
        title="OPERATIONS COORDINATOR" 
        activities={opsActivities} 
        total={18} 
      />
      <RoleSection 
        title="MARKETING SPECIALIST" 
        activities={marketingActivities} 
        total={8} 
      />
      <RoleSection 
        title="HR & ADMIN COORDINATOR" 
        activities={hrActivities} 
        total={15} 
      />
      <RoleSection 
        title="WEB DEVELOPER" 
        activities={webActivities} 
        total={9} 
      />
      <RoleSection 
        title="FINANCE COORDINATOR" 
        activities={financeActivities} 
        total={11} 
      />
    </div>
  );
}

// Founder Summary Row Component
function FounderSummaryRow({ activity, category }: { activity: string; category: string }) {
  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td className="py-2 px-3 text-left text-xs">{activity}</td>
      <td className="py-2 px-3 text-left text-xs text-muted-foreground">{category}</td>
    </tr>
  );
}

// Founder Summary Section Header
function FounderSectionHeader({ title, type }: { title: string; type: "accountable" | "responsible" | "consulted" | "informed" }) {
  const getStyles = () => {
    switch (type) {
      case "accountable": return "bg-raci-accountable";
      case "responsible": return "bg-raci-responsible";
      case "consulted": return "bg-raci-consulted";
      case "informed": return "bg-raci-informed";
    }
  };
  
  const getTextColor = () => {
    switch (type) {
      case "accountable": return "rgba(255, 255, 255, 0.8)";
      case "responsible": return "rgba(255, 255, 255, 0.8)";
      case "consulted": return "rgba(0, 0, 0, 0.8)";
      case "informed": return "rgba(255, 255, 255, 0.8)";
    }
  };
  
  return (
    <tr>
      <td colSpan={2} className={cn(getStyles(), "font-bold text-center py-2 text-xs")} style={{ color: getTextColor() }}>
        {title}
      </td>
    </tr>
  );
}

// Founder Involvement Summary Tab Content
function FounderSummaryContent() {
  return (
    <div className="space-y-6">
      {/* Accountable For */}
      <div id="founder-accountable" className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-xs border-collapse">
          <thead>
            <FounderSectionHeader title="ACCOUNTABLE FOR (Must Own - Cannot Delegate)" type="accountable" />
            <tr className="bg-muted/50">
              <th className="text-left py-2 px-3 font-semibold text-xs">Activity</th>
              <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
            </tr>
          </thead>
          <tbody>
            <FounderSummaryRow activity="Strategic Planning & Vision" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Company OKRs / Goal Setting" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Final Hiring Approval" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Termination Decisions" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Major Budget Approval (>threshold)" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="New Client Contract Approval" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Pricing & Package Decisions" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Major Vendor/Tool Decisions" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
            <FounderSummaryRow activity="Company Policy Final Approval" category="FOUNDER-LEVEL DECISIONS (Cannot Delegate)" />
          </tbody>
        </table>
      </div>

      {/* Responsible For */}
      <div id="founder-responsible" className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-xs border-collapse">
          <thead>
            <FounderSectionHeader title="RESPONSIBLE FOR (Founder Does the Work)" type="responsible" />
            <tr className="bg-muted/50">
              <th className="text-left py-2 px-3 font-semibold text-xs">Activity</th>
              <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
            </tr>
          </thead>
          <tbody>
            <FounderSummaryRow activity="Founder Scorecard Update" category="WEEKLY OPERATIONS" />
            <FounderSummaryRow activity="Weekly Alignment/Team Meeting" category="WEEKLY OPERATIONS" />
            <FounderSummaryRow activity="Monthly Performance Evaluations" category="PERFORMANCE MANAGEMENT" />
            <FounderSummaryRow activity="KPI Review & Feedback" category="PERFORMANCE MANAGEMENT" />
          </tbody>
        </table>
      </div>

      {/* Consulted On */}
      <div id="founder-consulted" className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-xs border-collapse">
          <thead>
            <FounderSectionHeader title="CONSULTED ON (Input Requested Before Decision)" type="consulted" />
            <tr className="bg-muted/50">
              <th className="text-left py-2 px-3 font-semibold text-xs">Activity</th>
              <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
            </tr>
          </thead>
          <tbody>
            <FounderSummaryRow activity="Client Escalation Management" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Scope Change Requests" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Client Relationship Management" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Technical Escalation (Platform Limits)" category="TECHNICAL & WEB DEVELOPMENT" />
            <FounderSummaryRow activity="Policy Documentation & Updates" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Quarterly Performance Reviews" category="PERFORMANCE MANAGEMENT" />
            <FounderSummaryRow activity="Probation Reviews" category="PERFORMANCE MANAGEMENT" />
            <FounderSummaryRow activity="Team Development & Coaching" category="PERFORMANCE MANAGEMENT" />
          </tbody>
        </table>
      </div>

      {/* Informed Of */}
      <div id="founder-informed" className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-xs border-collapse">
          <thead>
            <FounderSectionHeader title="INFORMED OF (FYI Only - No Action Required)" type="informed" />
            <tr className="bg-muted/50">
              <th className="text-left py-2 px-3 font-semibold text-xs">Activity</th>
              <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
            </tr>
          </thead>
          <tbody>
            <FounderSummaryRow activity="Client Communication & Follow-ups" category="DAILY OPERATIONS" />
            <FounderSummaryRow activity="Same-Day Action on Client Blockers" category="DAILY OPERATIONS" />
            <FounderSummaryRow activity="Urgent Issue Escalation" category="DAILY OPERATIONS" />
            <FounderSummaryRow activity="Client Pending Items Review" category="WEEKLY OPERATIONS" />
            <FounderSummaryRow activity="Client Onboarding (Project Setup)" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Client Deliverable Tracking" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Project Timeline Management" category="CLIENT & PROJECT MANAGEMENT" />
            <FounderSummaryRow activity="Campaign Planning & Strategy" category="MARKETING & CONTENT" />
            <FounderSummaryRow activity="Lead Generation & Tracking" category="MARKETING & CONTENT" />
            <FounderSummaryRow activity="Marketing Analytics & Reporting" category="MARKETING & CONTENT" />
            <FounderSummaryRow activity="API & Tool Integrations" category="TECHNICAL & WEB DEVELOPMENT" />
            <FounderSummaryRow activity="New Hire Onboarding" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Employee Offboarding" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Contracts & Documentation" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Payroll Input Preparation" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Performance Review Scheduling" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Weekly HR & Admin Report" category="HR & PEOPLE OPERATIONS" />
            <FounderSummaryRow activity="Weekly Finance Tracker Updates" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Monthly Income Statement Preparation" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Net Profit Calculation & Visibility" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Tax Deadline Tracking & Reminders" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Tax Filing Coordination" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Financial Report Preparation" category="FINANCE & ACCOUNTING" />
            <FounderSummaryRow activity="Budget Tracking & Reporting" category="FINANCE & ACCOUNTING" />
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="font-bold text-primary mb-3 text-sm">SUMMARY</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Accountable (A)</td>
                <td className="py-2 px-3 text-center font-bold">9</td>
                <td className="py-2 px-3 text-muted-foreground">Strategic decisions only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Responsible (R)</td>
                <td className="py-2 px-3 text-center font-bold">4</td>
                <td className="py-2 px-3 text-muted-foreground">Meetings & own scorecard</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Consulted (C)</td>
                <td className="py-2 px-3 text-center font-bold">8</td>
                <td className="py-2 px-3 text-muted-foreground">Input when escalated</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-3 font-medium">Informed (I)</td>
                <td className="py-2 px-3 text-center font-bold">24</td>
                <td className="py-2 px-3 text-muted-foreground">FYI updates only</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">Not Involved</td>
                <td className="py-2 px-3 text-center font-bold">25</td>
                <td className="py-2 px-3 text-muted-foreground">Fully delegated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Marketing & Technical Tab Content
function MarketingTechnicalContent() {
  return (
    <RaciTable>
      <SectionHeader title="MARKETING & CONTENT" />
      <DataRow activity="Campaign Planning & Strategy" frequency="Monthly" founder="I" ops="I" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Content Creation (Social, Blog, etc.)" frequency="Ongoing" founder="-" ops="-" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Social Media Management" frequency="Daily" founder="-" ops="-" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Lead Generation & Tracking" frequency="Ongoing" founder="I" ops="C" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Marketing Analytics & Reporting" frequency="Weekly" founder="I" ops="I" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Email Marketing Campaigns" frequency="As needed" founder="-" ops="C" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Brand Asset Management" frequency="Ongoing" founder="-" ops="-" marketing="A/R" hr="-" web="-" finance="-" />
      <DataRow activity="Marketing Calendar Management" frequency="Ongoing" founder="-" ops="C" marketing="A/R" hr="-" web="-" finance="-" />
      
      <SectionHeader title="TECHNICAL & WEB DEVELOPMENT" />
      <DataRow activity="GHL Website/Funnel Builds" frequency="As needed" founder="-" ops="C" marketing="C" hr="-" web="A/R" finance="-" />
      <DataRow activity="Landing Page Development" frequency="As needed" founder="-" ops="C" marketing="C" hr="-" web="A/R" finance="-" />
      <DataRow activity="Form & Integration Setup" frequency="As needed" founder="-" ops="C" marketing="-" hr="-" web="A/R" finance="-" />
      <DataRow activity="Bug Fixes & Technical Issues" frequency="As needed" founder="-" ops="-" marketing="I" hr="-" web="A/R" finance="-" />
      <DataRow activity="Testing Before Delivery" frequency="As needed" founder="-" ops="-" marketing="I" hr="-" web="A/R" finance="-" />
      <DataRow activity="Technical Documentation" frequency="Ongoing" founder="-" ops="-" marketing="I" hr="-" web="A/R" finance="-" />
      <DataRow activity="API & Tool Integrations" frequency="As needed" founder="-" ops="C" marketing="-" hr="-" web="A/R" finance="-" />
      <DataRow activity="Website Performance Optimization" frequency="Ongoing" founder="-" ops="-" marketing="-" hr="-" web="A/R" finance="-" />
      <DataRow activity="Technical Escalation (Platform Limits)" frequency="As needed" founder="C" ops="-" marketing="I" hr="-" web="A/R" finance="-" />
      
      <SectionHeader title="HR & PEOPLE OPERATIONS" />
      <DataRow activity="New Hire Onboarding" frequency="As needed" founder="I" ops="I" marketing="I" hr="A/R" web="-" finance="C" />
      <DataRow activity="Employee Offboarding" frequency="As needed" founder="I" ops="I" marketing="-" hr="A/R" web="-" finance="C" />
      <DataRow activity="Employee Records Management" frequency="Ongoing" founder="-" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Contracts & Documentation" frequency="As needed" founder="I" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Payroll Input Preparation" frequency="Monthly" founder="I" ops="-" marketing="-" hr="A/R" web="-" finance="C" />
      <DataRow activity="Leave Management & Tracking" frequency="Ongoing" founder="-" ops="I" marketing="I" hr="A/R" web="I" finance="I" />
      <DataRow activity="HR Calendar Management" frequency="Ongoing" founder="-" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Policy Documentation & Updates" frequency="As needed" founder="C" ops="C" marketing="C" hr="A/R" web="C" finance="C" />
      <DataRow activity="HR Query Resolution" frequency="As needed" founder="-" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
      <DataRow activity="Performance Review Scheduling" frequency="Quarterly" founder="I" ops="-" marketing="C" hr="A/R" web="-" finance="-" />
      <DataRow activity="Weekly HR & Admin Report" frequency="Weekly" founder="I" ops="-" marketing="-" hr="A/R" web="-" finance="-" />
    </RaciTable>
  );
}

export function RaciChartSection() {
  const raciTabs = [
    {
      key: "operations",
      label: "Operations",
      title: "Daily, Weekly & Client Operations",
      description: "Day-to-day activities, weekly cadence, and client project management responsibilities",
      content: <OperationsContent />
    },
    {
      key: "finance-decisions",
      label: "Finance & Decisions",
      title: "Finance, Accounting & Founder Decisions",
      description: "Financial operations and strategic decisions that require founder involvement",
      content: <FinanceDecisionsContent />
    },
    {
      key: "marketing-technical-hr",
      label: "Marketing, Tech & HR",
      title: "Marketing, Technical & HR Operations",
      description: "Marketing campaigns, web development, and people operations responsibilities",
      content: <MarketingTechnicalContent />
    },
    {
      key: "founder-summary",
      label: "Founder Summary",
      title: "Founder's Involvement Summary",
      description: "Only these items require Founder involvement - everything else is delegated",
      content: <FounderSummaryContent />
    },
    {
      key: "by-role",
      label: "By Role",
      title: "Accountability by Role",
      description: "Each role OWNS (A/R) their area completely",
      content: <AccountabilityByRoleContent />
    }
  ];

  // Hash to tab mapping for sections within tabs
  const hashToTabMap: Record<string, string> = {
    'founder-accountable': 'founder-summary',
    'founder-responsible': 'founder-summary',
    'founder-consulted': 'founder-summary',
    'founder-informed': 'founder-summary',
  };

  // Handle hash navigation for non-tab sections
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      // Check if it's a section that's not in a tab
      const nonTabSections = ['delegation-philosophy', 'raci-definitions', 'founders-limited-involvement', 'detailed-raci-matrix'];
      if (nonTabSections.includes(hash)) {
        const element = document.getElementById(hash);
        if (element) {
          // Small delay to ensure page is rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          RACI Chart
        </h1>
        <p className="text-muted-foreground">
          Responsibility assignment matrix designed with maximum delegation in
          mind
        </p>
      </div>

      {/* Delegation Philosophy */}
      <section id="delegation-philosophy">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Delegation Philosophy
        </h2>

        <div className="bg-muted/50 p-6 rounded-lg my-6">
          <p className="text-sm my-0! mb-4!">
            This RACI chart is designed with{" "}
            <strong className="text-primary">MAXIMUM DELEGATION</strong> in
            mind.
          </p>

          <div className="mt-4">
            <p className="font-medium text-primary mb-2 my-0!">
              Founder&apos;s Role:
            </p>
            <ul className="text-sm space-y-1 my-0! list-disc pl-5">
              <li>Participates in weekly meetings (R)</li>
              <li>Updates own scorecard (R)</li>
              <li>
                Makes truly strategic decisions that cannot be delegated (A)
              </li>
              <li>Gets informed on key outcomes (I)</li>
              <li>Consulted only when founder input is truly needed (C)</li>
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-medium text-primary mb-2 my-0!">
              EVERYTHING ELSE IS DELEGATED TO ROLE OWNERS.
            </p>
            <p className="text-sm text-muted-foreground my-0! mb-2!">
              Each role OWNS their area completely:
            </p>
            <ul className="text-sm space-y-1 my-0! list-disc pl-5">
              <li>
                <strong>Operations Coordinator</strong> → Owns all client &
                project operations
              </li>
              <li>
                <strong>Marketing Specialist</strong> → Owns all marketing
                activities
              </li>
              <li>
                <strong>HR & Admin Coordinator</strong> → Owns all people
                operations
              </li>
              <li>
                <strong>Web Developer</strong> → Owns all technical work
              </li>
              <li>
                <strong>Finance Coordinator</strong> → Owns all financial
                tracking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RACI Definitions */}
      <section id="raci-definitions">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          RACI Definitions
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Role</th>
                <th>Meaning</th>
                <th className="text-center">Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-responsible/20 text-raci-responsible font-bold text-sm">
                    R
                  </span>
                </td>
                <td className="font-medium">Responsible</td>
                <td>Does the work. Executes the task.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-responsible" />
                    <span className="text-sm">Green</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-sm">
                    A
                  </span>
                </td>
                <td className="font-medium">Accountable</td>
                <td>
                  Owns it. Makes sure it gets done. Final decision maker.
                </td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-accountable" />
                    <span className="text-sm">Blue</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-sm">
                    A/R
                  </span>
                </td>
                <td className="font-medium">Accountable + Responsible</td>
                <td>Owns it AND does the work (common for role owners)</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-accountable" />
                    <span className="text-sm">Blue</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-sm">
                    C
                  </span>
                </td>
                <td className="font-medium">Consulted</td>
                <td>Provides input BEFORE the decision or action.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-consulted" />
                    <span className="text-sm">Yellow</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-sm">
                    I
                  </span>
                </td>
                <td className="font-medium">Informed</td>
                <td>Kept in the loop AFTER the decision or action.</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-raci-informed" />
                    <span className="text-sm">Gray</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-card border border-border text-muted-foreground font-bold text-sm">
                    —
                  </span>
                </td>
                <td className="font-medium text-muted-foreground">
                  Not Involved
                </td>
                <td className="text-muted-foreground">
                  No role in this activity.
                </td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded bg-card border border-border" />
                    <span className="text-sm">White</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Founder's Limited Involvement */}
      <section id="founders-limited-involvement">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Founder&apos;s Limited Involvement
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Founder Role</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Daily Operations</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Not involved / Informed
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Fully delegated to Ops Coordinator
                </td>
              </tr>
              <tr>
                <td className="font-medium">Weekly Meetings</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-responsible/20 text-raci-responsible font-bold text-xs">
                      R
                    </span>
                    <span>Participates (R)</span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Attends and updates own scorecard only
                </td>
              </tr>
              <tr>
                <td className="font-medium">Client Management</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-xs">
                      C
                    </span>
                    <span className="text-muted-foreground">
                      Informed / Consulted if escalated
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Ops Coordinator owns client relationships
                </td>
              </tr>
              <tr>
                <td className="font-medium">Marketing</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on results
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Marketing Specialist owns all campaigns
                </td>
              </tr>
              <tr>
                <td className="font-medium">Technical</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on major issues
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Web Developer owns all technical work
                </td>
              </tr>
              <tr>
                <td className="font-medium">HR & Admin</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-consulted/20 text-raci-consulted font-bold text-xs">
                      C
                    </span>
                    <span className="text-muted-foreground">
                      Informed / Consulted on policy
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  HR Coordinator owns people operations
                </td>
              </tr>
              <tr>
                <td className="font-medium">Finance</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-informed/20 text-raci-informed font-bold text-xs">
                      I
                    </span>
                    <span className="text-muted-foreground">
                      Informed on reports
                    </span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Finance Coordinator owns all tracking
                </td>
              </tr>
              <tr>
                <td className="font-medium">Strategic Decisions</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-raci-accountable/20 text-raci-accountable font-bold text-xs">
                      A
                    </span>
                    <span>Accountable (A)</span>
                  </span>
                </td>
                <td className="text-muted-foreground">
                  Only area Founder must own
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed RACI Matrix - Tabbed */}
      <section id="detailed-raci-matrix">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-2 pb-2 border-b border-border">
          Detailed RACI Matrix
        </h2>
        <p className="text-muted-foreground mb-0">
          Complete responsibility assignments by department and function
        </p>
        
        <FolderTabs tabs={raciTabs} defaultTab="operations" hashToTabMap={hashToTabMap} />
      </section>
    </div>
  );
}
