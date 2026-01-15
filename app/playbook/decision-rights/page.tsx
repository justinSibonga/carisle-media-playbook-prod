"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { FolderTabs } from "@/components/ui/folder-tabs";

// Decision Section Header
function DecisionSectionHeader({ title }: { title: string }) {
  return (
    <tr>
      <td colSpan={5} className="bg-primary text-white! font-bold text-center py-2 text-xs">
        {title}
      </td>
    </tr>
  );
}

// Decision Rights Row Component
function DecisionRow({ type, decider, approver, threshold, notes, color }: {
  type: string;
  decider: string;
  approver: string;
  threshold: string;
  notes: string;
  color: "green" | "yellow" | "red";
}) {
  const colorStyles: Record<string, { bg: string; hover: string }> = {
    green: { bg: "rgba(34, 197, 94, 0.1)", hover: "rgba(34, 197, 94, 0.2)" },
    yellow: { bg: "rgba(234, 179, 8, 0.1)", hover: "rgba(234, 179, 8, 0.2)" },
    red: { bg: "rgba(239, 68, 68, 0.1)", hover: "rgba(239, 68, 68, 0.2)" },
  };

  const style = colorStyles[color];

  return (
    <tr 
      className="border-b border-border transition-colors"
      style={{ backgroundColor: style.bg }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = style.hover}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = style.bg}
    >
      <td className="py-3 px-3 text-left text-sm font-medium">{type}</td>
      <td className="py-3 px-3 text-center text-sm">{decider}</td>
      <td className="py-3 px-3 text-center text-sm">{approver}</td>
      <td className="py-3 px-3 text-center text-sm">{threshold}</td>
      <td className="py-3 px-3 text-left text-sm text-muted-foreground">{notes}</td>
    </tr>
  );
}

// Decision Rights Table Component
function DecisionTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-sm border-collapse min-w-[900px] no-zebra">
        <colgroup>
          <col className="w-[22%]" />
          <col className="w-[16%]" />
          <col className="w-[16%]" />
          <col className="w-[14%]" />
          <col className="w-[32%]" />
        </colgroup>
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-left py-3 px-3 font-semibold text-sm">Decision Type</th>
            <th className="text-center py-3 px-3 font-semibold text-sm whitespace-nowrap">Can Decide Alone</th>
            <th className="text-center py-3 px-3 font-semibold text-sm whitespace-nowrap">Needs Approval</th>
            <th className="text-center py-3 px-3 font-semibold text-sm">Threshold</th>
            <th className="text-left py-3 px-3 font-semibold text-sm">Notes</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

// Role-specific Decision Row (simpler 3-column layout)
function RoleDecisionRow({ decision, threshold, notes }: {
  decision: string;
  threshold: string;
  notes: string;
}) {
  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td className="py-3 px-3 text-left text-sm font-medium">{decision}</td>
      <td className="py-3 px-3 text-center text-sm">{threshold}</td>
      <td className="py-3 px-3 text-left text-sm text-muted-foreground">{notes}</td>
    </tr>
  );
}

// Role Decision Table Component
function RoleDecisionTable({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-primary mb-4">{title}</h3>
      <div className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-sm border-collapse min-w-[600px] no-zebra">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left py-3 px-3 font-semibold text-sm w-[35%]">Decision</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[20%]">Threshold</th>
              <th className="text-left py-3 px-3 font-semibold text-sm w-[45%]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Full Matrix Content
function FullMatrixContent() {
  return (
    <div className="space-y-6">
      <DecisionTable>
        <DecisionSectionHeader title="FINANCIAL DECISIONS" />
        <DecisionRow type="Operational Expenses" decider="Finance Coordinator" approver="Founder" threshold="≤ ₱5,000/item" notes="Routine supplies, subscriptions, etc." color="yellow" />
        <DecisionRow type="Marketing Spend" decider="Marketing Specialist" approver="Founder" threshold="≤ ₱10,000/campaign" notes="Ad spend, content creation, etc." color="yellow" />
        <DecisionRow type="Tool/Software Purchase" decider="Role Owner" approver="Founder" threshold="≤ ₱2,000/month" notes="New tools within budget" color="yellow" />
        <DecisionRow type="Emergency Expense" decider="Any Role" approver="Founder" threshold="≤ ₱3,000" notes="Urgent operational needs" color="yellow" />
        <DecisionRow type="Contractor Payment" decider="Finance Coordinator" approver="Founder" threshold="Within approved contract" notes="Pre-approved contractors only" color="yellow" />
        <DecisionRow type="Refund to Client" decider="Operations Coordinator" approver="Founder" threshold="≤ ₱5,000" notes="Per refund policy" color="yellow" />
        <DecisionRow type="Large Purchases" decider="—" approver="Founder" threshold="> ₱5,000" notes="Always requires approval" color="red" />
        <DecisionRow type="Budget Reallocation" decider="—" approver="Founder" threshold="Any amount" notes="Moving budget between categories" color="red" />

        <DecisionSectionHeader title="CLIENT & SALES DECISIONS" />
        <DecisionRow type="Client Discount" decider="Operations Coordinator" approver="Founder" threshold="≤ 10%" notes="Within standard discount policy" color="yellow" />
        <DecisionRow type="Payment Terms Extension" decider="Operations Coordinator" approver="Founder" threshold="≤ 7 days" notes="For good-standing clients" color="yellow" />
        <DecisionRow type="Project Deadline Extension" decider="Operations Coordinator" approver="Founder" threshold="≤ 48 hours" notes="Must notify client" color="yellow" />
        <DecisionRow type="Scope Clarification" decider="Operations Coordinator" approver="—" threshold="Any" notes="Clarifying existing scope" color="green" />
        <DecisionRow type="Minor Scope Addition" decider="Operations Coordinator" approver="Founder" threshold="≤ 2 hours work" notes="Small client requests" color="yellow" />
        <DecisionRow type="Major Scope Change" decider="—" approver="Founder" threshold="> 2 hours work" notes="Always requires approval" color="red" />
        <DecisionRow type="New Client Contract" decider="—" approver="Founder" threshold="Any" notes="All new contracts" color="red" />
        <DecisionRow type="Contract Renewal" decider="Operations Coordinator" approver="Founder" threshold="Same terms only" notes="Changes need approval" color="yellow" />
        <DecisionRow type="Client Termination" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Pricing/Package Change" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />

        <DecisionSectionHeader title="HR & PEOPLE DECISIONS" />
        <DecisionRow type="Interview Scheduling" decider="HR Coordinator" approver="—" threshold="Any" notes="Coordinate with candidates" color="green" />
        <DecisionRow type="Candidate Screening" decider="HR Coordinator" approver="—" threshold="Any" notes="Filter applicants per criteria" color="green" />
        <DecisionRow type="Interview Recommendation" decider="HR Coordinator" approver="Founder" threshold="All candidates" notes="Recommend, Founder decides" color="yellow" />
        <DecisionRow type="Final Hiring Decision" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Onboarding Schedule" decider="HR Coordinator" approver="—" threshold="Any" notes="Standard onboarding process" color="green" />
        <DecisionRow type="Leave Approval (≤3 days)" decider="HR Coordinator" approver="—" threshold="≤ 3 days" notes="Per leave policy" color="green" />
        <DecisionRow type="Leave Approval (>3 days)" decider="HR Coordinator" approver="Founder" threshold="> 3 days" notes="Extended leave" color="yellow" />
        <DecisionRow type="Emergency Leave" decider="HR Coordinator" approver="—" threshold="Any" notes="Immediate approval, document after" color="green" />
        <DecisionRow type="Performance Warning" decider="HR Coordinator" approver="Founder" threshold="Verbal OK, Written needs approval" notes="Document all warnings" color="yellow" />
        <DecisionRow type="Termination" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Salary/Compensation Change" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Policy Clarification" decider="HR Coordinator" approver="—" threshold="Any" notes="Clarifying existing policy" color="green" />
        <DecisionRow type="Policy Change" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />

        <DecisionSectionHeader title="MARKETING DECISIONS" />
        <DecisionRow type="Content Topics" decider="Marketing Specialist" approver="—" threshold="Any" notes="Aligned with brand guidelines" color="green" />
        <DecisionRow type="Posting Schedule" decider="Marketing Specialist" approver="—" threshold="Any" notes="Social media calendar" color="green" />
        <DecisionRow type="Visual Design Choices" decider="Marketing Specialist" approver="—" threshold="Any" notes="Within brand guidelines" color="green" />
        <DecisionRow type="Ad Copy & Creative" decider="Marketing Specialist" approver="—" threshold="Any" notes="Within brand voice" color="green" />
        <DecisionRow type="Ad Targeting" decider="Marketing Specialist" approver="—" threshold="Any" notes="Within approved budget" color="green" />
        <DecisionRow type="A/B Testing" decider="Marketing Specialist" approver="—" threshold="Any" notes="Test variations freely" color="green" />
        <DecisionRow type="New Marketing Channel" decider="Marketing Specialist" approver="Founder" threshold="Any new platform" notes="Get approval first" color="yellow" />
        <DecisionRow type="Brand Guidelines Change" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Major Campaign Launch" decider="Marketing Specialist" approver="Founder" threshold="> ₱10,000 spend" notes="Large campaigns" color="yellow" />
        <DecisionRow type="Partnership/Collab" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />

        <DecisionSectionHeader title="TECHNICAL DECISIONS" />
        <DecisionRow type="Implementation Approach" decider="Web Developer" approver="—" threshold="Any" notes="How to build within scope" color="green" />
        <DecisionRow type="Bug Fix Priority" decider="Web Developer" approver="—" threshold="Any" notes="Based on impact/urgency" color="green" />
        <DecisionRow type="Code/Tech Stack Choice" decider="Web Developer" approver="—" threshold="Within project scope" notes="Technical decisions" color="green" />
        <DecisionRow type="Testing Approach" decider="Web Developer" approver="—" threshold="Any" notes="QA methodology" color="green" />
        <DecisionRow type="Minor UI Adjustments" decider="Web Developer" approver="—" threshold="< 1 hour work" notes="Small tweaks" color="green" />
        <DecisionRow type="Major UI/UX Changes" decider="Web Developer" approver="Founder" threshold="> 1 hour work" notes="Significant changes" color="yellow" />
        <DecisionRow type="New Tool/Integration" decider="Web Developer" approver="Founder" threshold="Any new tool" notes="Get approval first" color="yellow" />
        <DecisionRow type="Platform Migration" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />
        <DecisionRow type="Security Changes" decider="Web Developer" approver="Founder" threshold="Any" notes="Inform Founder of all security changes" color="red" />
        <DecisionRow type="Data/Access Changes" decider="—" approver="Founder" threshold="Any" notes="Always requires approval" color="red" />

        <DecisionSectionHeader title="OPERATIONAL DECISIONS" />
        <DecisionRow type="Task Prioritization" decider="Operations Coordinator" approver="—" threshold="Any" notes="Daily/weekly priorities" color="green" />
        <DecisionRow type="Meeting Scheduling" decider="Any Role" approver="—" threshold="Any" notes="Internal meetings" color="green" />
        <DecisionRow type="Client Meeting Scheduling" decider="Operations Coordinator" approver="—" threshold="Any" notes="Coordinate with client" color="green" />
        <DecisionRow type="Process Improvement" decider="Operations Coordinator" approver="Founder" threshold="Minor changes OK" notes="Major changes need approval" color="yellow" />
        <DecisionRow type="SOP Updates" decider="Role Owner" approver="Founder" threshold="Minor edits OK" notes="Major changes need approval" color="yellow" />
        <DecisionRow type="Vendor Selection (Small)" decider="Role Owner" approver="Founder" threshold="≤ ₱5,000/month" notes="Small recurring vendors" color="yellow" />
        <DecisionRow type="Vendor Selection (Large)" decider="—" approver="Founder" threshold="> ₱5,000/month" notes="Always requires approval" color="red" />
        <DecisionRow type="Emergency Procedure" decider="Operations Coordinator" approver="Founder" threshold="Inform ASAP" notes="Act first, inform immediately" color="yellow" />
      </DecisionTable>

      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="font-bold text-primary mb-3 text-sm">LEGEND</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs">
            <span className="w-4 h-4 rounded bg-green-500/10 border border-green-500/20"></span>
            <span className="font-bold">Green rows:</span>
            <span className="text-muted-foreground">Full authority - decide alone, no approval needed</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="w-4 h-4 rounded bg-yellow-500/10 border border-yellow-500/20"></span>
            <span className="font-bold">Yellow rows:</span>
            <span className="text-muted-foreground">Conditional - can decide within threshold, else escalate</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="w-4 h-4 rounded bg-red-500/10 border border-red-500/20"></span>
            <span className="font-bold">Red rows:</span>
            <span className="text-muted-foreground">Must escalate - always needs Founder approval</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// By Role Content
function ByRoleContent() {
  return (
    <div className="space-y-2">
      <RoleDecisionTable title="OPERATIONS COORDINATOR">
        <RoleDecisionRow decision="Client communication & follow-ups" threshold="Any" notes="Day-to-day client management" />
        <RoleDecisionRow decision="Task prioritization" threshold="Any" notes="Daily/weekly task sequencing" />
        <RoleDecisionRow decision="Project deadline extension" threshold="≤ 48 hours" notes="Notify client, inform Founder" />
        <RoleDecisionRow decision="Client discount" threshold="≤ 10%" notes="Within discount policy" />
        <RoleDecisionRow decision="Payment terms extension" threshold="≤ 7 days" notes="Good-standing clients" />
        <RoleDecisionRow decision="Minor scope addition" threshold="≤ 2 hours work" notes="Small client requests" />
        <RoleDecisionRow decision="Refund to client" threshold="≤ ₱5,000" notes="Per refund policy" />
        <RoleDecisionRow decision="Meeting scheduling" threshold="Any" notes="Internal and client meetings" />
        <RoleDecisionRow decision="Process improvements" threshold="Minor changes" notes="Major changes need approval" />
        <RoleDecisionRow decision="Emergency procedures" threshold="Act first" notes="Inform Founder immediately" />
      </RoleDecisionTable>

      <RoleDecisionTable title="MARKETING SPECIALIST">
        <RoleDecisionRow decision="Content topics & calendar" threshold="Any" notes="Aligned with brand" />
        <RoleDecisionRow decision="Social media posting" threshold="Any" notes="Per content calendar" />
        <RoleDecisionRow decision="Visual design choices" threshold="Any" notes="Within brand guidelines" />
        <RoleDecisionRow decision="Ad copy & creative" threshold="Any" notes="Within brand voice" />
        <RoleDecisionRow decision="Ad targeting & optimization" threshold="Any" notes="Within approved budget" />
        <RoleDecisionRow decision="A/B testing" threshold="Any" notes="Test freely" />
        <RoleDecisionRow decision="Marketing spend" threshold="≤ ₱10,000/campaign" notes="Larger campaigns need approval" />
        <RoleDecisionRow decision="Analytics & reporting" threshold="Any" notes="Report insights proactively" />
      </RoleDecisionTable>

      <RoleDecisionTable title="HR & ADMIN COORDINATOR">
        <RoleDecisionRow decision="Interview scheduling" threshold="Any" notes="Coordinate logistics" />
        <RoleDecisionRow decision="Candidate screening" threshold="Any" notes="Filter per criteria" />
        <RoleDecisionRow decision="Onboarding schedule" threshold="Any" notes="Standard process" />
        <RoleDecisionRow decision="Leave approval" threshold="≤ 3 days" notes="Longer leave needs approval" />
        <RoleDecisionRow decision="Emergency leave" threshold="Any" notes="Approve immediately" />
        <RoleDecisionRow decision="Policy clarification" threshold="Any" notes="Clarify existing policy" />
        <RoleDecisionRow decision="Employee records" threshold="Any" notes="Maintain all records" />
        <RoleDecisionRow decision="HR calendar management" threshold="Any" notes="Track all HR dates" />
        <RoleDecisionRow decision="Verbal performance warning" threshold="Any" notes="Written needs approval" />
        <RoleDecisionRow decision="Payroll input preparation" threshold="Any" notes="Prepare for approval" />
      </RoleDecisionTable>

      <RoleDecisionTable title="WEB DEVELOPER">
        <RoleDecisionRow decision="Implementation approach" threshold="Any" notes="How to build technically" />
        <RoleDecisionRow decision="Bug fix priority" threshold="Any" notes="Based on impact" />
        <RoleDecisionRow decision="Code/tech stack choices" threshold="Any" notes="Within project scope" />
        <RoleDecisionRow decision="Testing approach" threshold="Any" notes="QA methodology" />
        <RoleDecisionRow decision="Minor UI adjustments" threshold="< 1 hour" notes="Small tweaks" />
        <RoleDecisionRow decision="Technical documentation" threshold="Any" notes="Document all builds" />
        <RoleDecisionRow decision="Development timeline" threshold="Within deadline" notes="Manage own schedule" />
      </RoleDecisionTable>

      <RoleDecisionTable title="FINANCE COORDINATOR">
        <RoleDecisionRow decision="Operational expenses" threshold="≤ ₱5,000/item" notes="Routine purchases" />
        <RoleDecisionRow decision="Contractor payments" threshold="Within contract" notes="Pre-approved only" />
        <RoleDecisionRow decision="Expense categorization" threshold="Any" notes="Categorize all expenses" />
        <RoleDecisionRow decision="Financial tracking" threshold="Any" notes="Update all trackers" />
        <RoleDecisionRow decision="Accountant coordination" threshold="Any" notes="Manage relationship" />
        <RoleDecisionRow decision="Invoice management" threshold="Any" notes="Process all invoices" />
        <RoleDecisionRow decision="Report preparation" threshold="Any" notes="Prepare for Founder review" />
      </RoleDecisionTable>
    </div>
  );
}

// Founder Approval Row
function FounderApprovalRow({ decision, threshold, notes }: {
  decision: string;
  threshold: string;
  notes: string;
}) {
  const bgColor = "rgba(239, 68, 68, 0.1)";
  const hoverColor = "rgba(239, 68, 68, 0.2)";

  return (
    <tr 
      className="border-b border-border transition-colors"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = bgColor}
    >
      <td className="py-3 px-3 text-left text-sm font-medium">{decision}</td>
      <td className="py-3 px-3 text-center text-sm">{threshold}</td>
      <td className="py-3 px-3 text-left text-sm text-muted-foreground">{notes}</td>
    </tr>
  );
}

// Founder Approval Table
function FounderApprovalTable({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-primary mb-4">{title}</h3>
      <div className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-sm border-collapse min-w-[600px] no-zebra">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left py-3 px-3 font-semibold text-sm w-[35%]">Decision</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[20%]">Threshold</th>
              <th className="text-left py-3 px-3 font-semibold text-sm w-[45%]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Founder Approval Content
function FounderApprovalContent() {
  return (
    <div className="space-y-2">
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-medium text-foreground m-0">
          These items <strong>ALWAYS</strong> need Founder approval — everything else is delegated.
        </p>
      </div>

      <FounderApprovalTable title="FINANCIAL">
        <FounderApprovalRow decision="Large purchases" threshold="> ₱5,000" notes="Any single purchase above threshold" />
        <FounderApprovalRow decision="Budget reallocation" threshold="Any amount" notes="Moving budget between categories" />
        <FounderApprovalRow decision="New recurring expense" threshold="> ₱2,000/month" notes="New subscriptions/tools" />
        <FounderApprovalRow decision="Large refunds" threshold="> ₱5,000" notes="Above standard refund policy" />
      </FounderApprovalTable>

      <FounderApprovalTable title="CLIENT & CONTRACTS">
        <FounderApprovalRow decision="New client contracts" threshold="All" notes="All new client agreements" />
        <FounderApprovalRow decision="Pricing changes" threshold="Any" notes="Package or rate changes" />
        <FounderApprovalRow decision="Major scope changes" threshold="> 2 hours work" notes="Significant additions" />
        <FounderApprovalRow decision="Client termination" threshold="All" notes="Ending client relationships" />
        <FounderApprovalRow decision="Large discounts" threshold="> 10%" notes="Above standard discount" />
        <FounderApprovalRow decision="Long deadline extensions" threshold="> 48 hours" notes="Significant delays" />
      </FounderApprovalTable>

      <FounderApprovalTable title="PEOPLE & HR">
        <FounderApprovalRow decision="Final hiring decision" threshold="All hires" notes="Founder makes final call" />
        <FounderApprovalRow decision="Termination" threshold="All" notes="Founder must approve" />
        <FounderApprovalRow decision="Salary/compensation changes" threshold="All" notes="Any pay adjustments" />
        <FounderApprovalRow decision="Policy changes" threshold="All" notes="Any policy modifications" />
        <FounderApprovalRow decision="Written warnings" threshold="All" notes="Formal documentation" />
        <FounderApprovalRow decision="Extended leave" threshold="> 3 days" notes="Longer absences" />
      </FounderApprovalTable>

      <FounderApprovalTable title="STRATEGIC">
        <FounderApprovalRow decision="New marketing channels" threshold="All" notes="Expanding to new platforms" />
        <FounderApprovalRow decision="Brand guideline changes" threshold="All" notes="Any brand modifications" />
        <FounderApprovalRow decision="Partnership/collaborations" threshold="All" notes="External partnerships" />
        <FounderApprovalRow decision="Major campaigns" threshold="> ₱10,000" notes="Large marketing initiatives" />
        <FounderApprovalRow decision="New tools/integrations" threshold="All" notes="Adding new systems" />
        <FounderApprovalRow decision="Platform migrations" threshold="All" notes="Changing core tools" />
        <FounderApprovalRow decision="Process major changes" threshold="All" notes="Significant operational changes" />
        <FounderApprovalRow decision="Vendor selection (large)" threshold="> ₱5,000/month" notes="Significant vendors" />
      </FounderApprovalTable>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
        <h4 className="font-bold text-primary mb-3 text-sm">ESCALATION FORMAT</h4>
        <p className="text-sm text-muted-foreground mb-3">When escalating, include:</p>
        <ol className="text-sm space-y-1 list-decimal pl-5 m-0">
          <li><strong>Decision needed:</strong> [What needs approval]</li>
          <li><strong>Context:</strong> [Background information]</li>
          <li><strong>Options considered:</strong> [What you evaluated]</li>
          <li><strong>Recommendation:</strong> [Your suggested action]</li>
          <li><strong>Deadline:</strong> [When decision is needed by]</li>
        </ol>
      </div>
    </div>
  );
}

// Quick Reference Threshold Row
function ThresholdRow({ category, canDecide, needsApproval, whoDecides }: {
  category: string;
  canDecide: string;
  needsApproval: string;
  whoDecides: string;
}) {
  return (
    <tr className="border-b border-border hover:bg-muted/30">
      <td className="py-3 px-3 text-left text-sm font-medium">{category}</td>
      <td className="py-3 px-3 text-center text-sm" style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}>{canDecide}</td>
      <td className="py-3 px-3 text-center text-sm" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}>{needsApproval}</td>
      <td className="py-3 px-3 text-center text-sm">{whoDecides}</td>
    </tr>
  );
}

// Quick Reference Content
function QuickReferenceContent() {
  return (
    <div className="space-y-8">
      <div className="overflow-x-auto -mx-3 md:mx-0">
        <table className="w-full text-sm border-collapse min-w-[700px] no-zebra">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left py-3 px-3 font-semibold text-sm w-[25%]">Category</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]" style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}>Can Decide Alone</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]" style={{ backgroundColor: "rgba(239, 68, 68, 0.2)" }}>Needs Approval</th>
              <th className="text-center py-3 px-3 font-semibold text-sm w-[25%]">Who Decides Alone</th>
            </tr>
          </thead>
          <tbody>
            <ThresholdRow category="Spending (per item)" canDecide="≤ ₱5,000" needsApproval="> ₱5,000" whoDecides="Finance Coord" />
            <ThresholdRow category="Marketing Spend" canDecide="≤ ₱10,000/campaign" needsApproval="> ₱10,000/campaign" whoDecides="Marketing Spec" />
            <ThresholdRow category="Tool Purchase" canDecide="≤ ₱2,000/month" needsApproval="> ₱2,000/month" whoDecides="Role Owner" />
            <ThresholdRow category="Client Discount" canDecide="≤ 10%" needsApproval="> 10%" whoDecides="Ops Coord" />
            <ThresholdRow category="Deadline Extension" canDecide="≤ 48 hours" needsApproval="> 48 hours" whoDecides="Ops Coord" />
            <ThresholdRow category="Scope Addition" canDecide="≤ 2 hours work" needsApproval="> 2 hours work" whoDecides="Ops Coord" />
            <ThresholdRow category="Refund" canDecide="≤ ₱5,000" needsApproval="> ₱5,000" whoDecides="Ops Coord" />
            <ThresholdRow category="Leave Approval" canDecide="≤ 3 days" needsApproval="> 3 days" whoDecides="HR Coord" />
            <ThresholdRow category="UI Changes" canDecide="< 1 hour" needsApproval="> 1 hour" whoDecides="Web Dev" />
            <ThresholdRow category="Payment Extension" canDecide="≤ 7 days" needsApproval="> 7 days" whoDecides="Ops Coord" />
          </tbody>
        </table>
      </div>

      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
        <h4 className="font-bold text-primary mb-4 text-base">ALWAYS NEEDS FOUNDER APPROVAL (No Threshold)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <ul className="text-sm space-y-2 list-disc pl-5 m-0">
            <li>New client contracts</li>
            <li>Pricing/package changes</li>
            <li>Client termination</li>
            <li>All hiring (final decision)</li>
            <li>All terminations</li>
            <li>Salary changes</li>
          </ul>
          <ul className="text-sm space-y-2 list-disc pl-5 m-0">
            <li>Policy changes</li>
            <li>New marketing channels</li>
            <li>Brand changes</li>
            <li>Partnerships</li>
            <li>Platform migrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function DecisionRightsSection() {
  const decisionTabs = [
    {
      key: "full-matrix",
      label: "Full Matrix",
      title: "Decision Rights Matrix",
      description: "What each role can decide independently vs. what needs Founder approval",
      content: <FullMatrixContent />
    },
    {
      key: "by-role",
      label: "By Role",
      title: "Decision Rights by Role",
      description: "Quick reference: What each role can decide alone",
      content: <ByRoleContent />
    },
    {
      key: "founder-approval",
      label: "Founder Approval",
      title: "Decisions Requiring Founder Approval",
      description: "These items ALWAYS need Founder approval - everything else is delegated",
      content: <FounderApprovalContent />
    },
    {
      key: "quick-reference",
      label: "Quick Reference",
      title: "Quick Reference: Key Thresholds",
      description: "Print this page for easy reference",
      content: <QuickReferenceContent />
    }
  ];

  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Decision Rights
        </h1>
        <p className="text-muted-foreground">
          Defining who can make what decisions without Founder approval to enable maximum delegation.
        </p>
      </div>

      <h2 id="purpose">Purpose</h2>
      <p>
        This document defines <strong>WHO</strong> can make <strong>WHAT</strong> decisions <strong>WITHOUT</strong> Founder approval.
      </p>
      <p>
        The goal is <strong>MAXIMUM DELEGATION</strong>:
      </p>
      <ul>
        <li>Team members should be able to make most decisions independently</li>
        <li>Founder approval is only required for high-impact/high-risk decisions</li>
        <li>When in doubt, refer to the thresholds defined here</li>
      </ul>

      <h3 id="how-to-use">How to Use</h3>
      <ol>
        <li>Find the decision category (Financial, Client, HR, etc.)</li>
        <li>Check if your decision falls within &quot;Can Decide Alone&quot; limits</li>
        <li>If <strong>YES</strong> → Make the decision, inform relevant parties</li>
        <li>If <strong>NO</strong> → Escalate to Founder with recommendation</li>
      </ol>

      <h2 id="decision-authority-levels">Decision Authority Levels</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Level</th>
            <th className="text-center">Symbol</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-500 dark:bg-green-900/30 dark:text-green-400">
                GREEN - Decide Alone
              </span>
            </td>
            <td className="text-center font-bold text-foreground">✓</td>
            <td className="text-foreground">Make the decision yourself, no approval needed</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400">
                YELLOW - Inform After
              </span>
            </td>
            <td className="text-center font-bold text-foreground">→</td>
            <td className="text-foreground">Decide yourself, but inform Founder afterward</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                ORANGE - Recommend
              </span>
            </td>
            <td className="text-center font-bold text-foreground">↑</td>
            <td className="text-foreground">Make a recommendation, Founder decides</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 border border-red-500 dark:bg-red-900/30 dark:text-red-400">
                RED - Must Escalate
              </span>
            </td>
            <td className="text-center font-bold text-foreground">✗</td>
            <td className="text-foreground">Cannot proceed without Founder approval</td>
          </tr>
        </tbody>
      </table>

      <FolderTabs tabs={decisionTabs} defaultTab="full-matrix" />

      <h2 id="escalation-rule">Escalation Rule</h2>
      <p>
        When escalating to Founder, <strong>ALWAYS</strong> include:
      </p>
      <ol>
        <li>The issue/decision needed</li>
        <li>What you&apos;ve already reviewed or tried</li>
        <li>Your recommended action</li>
        <li>Deadline for decision (if time-sensitive)</li>
      </ol>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
        <p className="text-sm font-medium text-primary m-0">
          <strong>The Founder should never receive an escalation without a recommendation.</strong>
        </p>
      </div>
    </div>
  );
}

export default function DecisionRightsPage() {
  return (
    <PlaybookPageLayout>
      <DecisionRightsSection />
    </PlaybookPageLayout>
  );
}
