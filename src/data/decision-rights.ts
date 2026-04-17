import type {
  DecisionAuthority,
  MatrixSection,
  RoleDecisionSection,
  ThresholdRowData,
} from "@/types/decision-rights";

const m = (
  type: string,
  decider: string,
  approver: string,
  threshold: string,
  notes: string,
  color: DecisionAuthority
) => ({ type, decider, approver, threshold, notes, color });

export const FULL_MATRIX_SECTIONS: MatrixSection[] = [
  {
    title: "FINANCIAL DECISIONS",
    rows: [
      m("Operational Expenses", "Finance Coordinator", "Founder", "≤ ₱5,000/item", "Routine supplies, subscriptions, etc.", "yellow"),
      m("Marketing Spend", "Marketing Specialist", "Founder", "≤ ₱10,000/campaign", "Ad spend, content creation, etc.", "yellow"),
      m("Tool/Software Purchase", "Role Owner", "Founder", "≤ ₱2,000/month", "New tools within budget", "yellow"),
      m("Emergency Expense", "Any Role", "Founder", "≤ ₱3,000", "Urgent operational needs", "yellow"),
      m("Contractor Payment", "Finance Coordinator", "Founder", "Within approved contract", "Pre-approved contractors only", "yellow"),
      m("Refund to Client", "Operations Coordinator", "Founder", "≤ ₱5,000", "Per refund policy", "yellow"),
      m("Large Purchases", "—", "Founder", "> ₱5,000", "Always requires approval", "red"),
      m("Budget Reallocation", "—", "Founder", "Any amount", "Moving budget between categories", "red"),
    ],
  },
  {
    title: "CLIENT & SALES DECISIONS",
    rows: [
      m("Client Discount", "Operations Coordinator", "Founder", "≤ 10%", "Within standard discount policy", "yellow"),
      m("Payment Terms Extension", "Operations Coordinator", "Founder", "≤ 7 days", "For good-standing clients", "yellow"),
      m("Project Deadline Extension", "Operations Coordinator", "Founder", "≤ 48 hours", "Must notify client", "yellow"),
      m("Scope Clarification", "Operations Coordinator", "—", "Any", "Clarifying existing scope", "green"),
      m("Minor Scope Addition", "Operations Coordinator", "Founder", "≤ 2 hours work", "Small client requests", "yellow"),
      m("Major Scope Change", "—", "Founder", "> 2 hours work", "Always requires approval", "red"),
      m("New Client Contract", "—", "Founder", "Any", "All new contracts", "red"),
      m("Contract Renewal", "Operations Coordinator", "Founder", "Same terms only", "Changes need approval", "yellow"),
      m("Client Termination", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Pricing/Package Change", "—", "Founder", "Any", "Always requires approval", "red"),
    ],
  },
  {
    title: "HR & PEOPLE DECISIONS",
    rows: [
      m("Interview Scheduling", "HR Coordinator", "—", "Any", "Coordinate with candidates", "green"),
      m("Candidate Screening", "HR Coordinator", "—", "Any", "Filter applicants per criteria", "green"),
      m("Interview Recommendation", "HR Coordinator", "Founder", "All candidates", "Recommend, Founder decides", "yellow"),
      m("Final Hiring Decision", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Onboarding Schedule", "HR Coordinator", "—", "Any", "Standard onboarding process", "green"),
      m("Leave Approval (≤3 days)", "HR Coordinator", "—", "≤ 3 days", "Per leave policy", "green"),
      m("Leave Approval (>3 days)", "HR Coordinator", "Founder", "> 3 days", "Extended leave", "yellow"),
      m("Emergency Leave", "HR Coordinator", "—", "Any", "Immediate approval, document after", "green"),
      m("Performance Warning", "HR Coordinator", "Founder", "Verbal OK, Written needs approval", "Document all warnings", "yellow"),
      m("Termination", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Salary/Compensation Change", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Policy Clarification", "HR Coordinator", "—", "Any", "Clarifying existing policy", "green"),
      m("Policy Change", "—", "Founder", "Any", "Always requires approval", "red"),
    ],
  },
  {
    title: "MARKETING DECISIONS",
    rows: [
      m("Content Topics", "Marketing Specialist", "—", "Any", "Aligned with brand guidelines", "green"),
      m("Posting Schedule", "Marketing Specialist", "—", "Any", "Social media calendar", "green"),
      m("Visual Design Choices", "Marketing Specialist", "—", "Any", "Within brand guidelines", "green"),
      m("Ad Copy & Creative", "Marketing Specialist", "—", "Any", "Within brand voice", "green"),
      m("Ad Targeting", "Marketing Specialist", "—", "Any", "Within approved budget", "green"),
      m("A/B Testing", "Marketing Specialist", "—", "Any", "Test variations freely", "green"),
      m("New Marketing Channel", "Marketing Specialist", "Founder", "Any new platform", "Get approval first", "yellow"),
      m("Brand Guidelines Change", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Major Campaign Launch", "Marketing Specialist", "Founder", "> ₱10,000 spend", "Large campaigns", "yellow"),
      m("Partnership/Collab", "—", "Founder", "Any", "Always requires approval", "red"),
    ],
  },
  {
    title: "TECHNICAL DECISIONS",
    rows: [
      m("Implementation Approach", "Web Developer", "—", "Any", "How to build within scope", "green"),
      m("Bug Fix Priority", "Web Developer", "—", "Any", "Based on impact/urgency", "green"),
      m("Code/Tech Stack Choice", "Web Developer", "—", "Within project scope", "Technical decisions", "green"),
      m("Testing Approach", "Web Developer", "—", "Any", "QA methodology", "green"),
      m("Minor UI Adjustments", "Web Developer", "—", "< 1 hour work", "Small tweaks", "green"),
      m("Major UI/UX Changes", "Web Developer", "Founder", "> 1 hour work", "Significant changes", "yellow"),
      m("New Tool/Integration", "Web Developer", "Founder", "Any new tool", "Get approval first", "yellow"),
      m("Platform Migration", "—", "Founder", "Any", "Always requires approval", "red"),
      m("Security Changes", "Web Developer", "Founder", "Any", "Inform Founder of all security changes", "red"),
      m("Data/Access Changes", "—", "Founder", "Any", "Always requires approval", "red"),
    ],
  },
  {
    title: "OPERATIONAL DECISIONS",
    rows: [
      m("Task Prioritization", "Operations Coordinator", "—", "Any", "Daily/weekly priorities", "green"),
      m("Meeting Scheduling", "Any Role", "—", "Any", "Internal meetings", "green"),
      m("Client Meeting Scheduling", "Operations Coordinator", "—", "Any", "Coordinate with client", "green"),
      m("Process Improvement", "Operations Coordinator", "Founder", "Minor changes OK", "Major changes need approval", "yellow"),
      m("SOP Updates", "Role Owner", "Founder", "Minor edits OK", "Major changes need approval", "yellow"),
      m("Vendor Selection (Small)", "Role Owner", "Founder", "≤ ₱5,000/month", "Small recurring vendors", "yellow"),
      m("Vendor Selection (Large)", "—", "Founder", "> ₱5,000/month", "Always requires approval", "red"),
      m("Emergency Procedure", "Operations Coordinator", "Founder", "Inform ASAP", "Act first, inform immediately", "yellow"),
    ],
  },
];

export const BY_ROLE_SECTIONS: RoleDecisionSection[] = [
  {
    title: "OPERATIONS COORDINATOR",
    rows: [
      { decision: "Client communication & follow-ups", threshold: "Any", notes: "Day-to-day client management" },
      { decision: "Task prioritization", threshold: "Any", notes: "Daily/weekly task sequencing" },
      { decision: "Project deadline extension", threshold: "≤ 48 hours", notes: "Notify client, inform Founder" },
      { decision: "Client discount", threshold: "≤ 10%", notes: "Within discount policy" },
      { decision: "Payment terms extension", threshold: "≤ 7 days", notes: "Good-standing clients" },
      { decision: "Minor scope addition", threshold: "≤ 2 hours work", notes: "Small client requests" },
      { decision: "Refund to client", threshold: "≤ ₱5,000", notes: "Per refund policy" },
      { decision: "Meeting scheduling", threshold: "Any", notes: "Internal and client meetings" },
      { decision: "Process improvements", threshold: "Minor changes", notes: "Major changes need approval" },
      { decision: "Emergency procedures", threshold: "Act first", notes: "Inform Founder immediately" },
    ],
  },
  {
    title: "MARKETING SPECIALIST",
    rows: [
      { decision: "Content topics & calendar", threshold: "Any", notes: "Aligned with brand" },
      { decision: "Social media posting", threshold: "Any", notes: "Per content calendar" },
      { decision: "Visual design choices", threshold: "Any", notes: "Within brand guidelines" },
      { decision: "Ad copy & creative", threshold: "Any", notes: "Within brand voice" },
      { decision: "Ad targeting & optimization", threshold: "Any", notes: "Within approved budget" },
      { decision: "A/B testing", threshold: "Any", notes: "Test freely" },
      { decision: "Marketing spend", threshold: "≤ ₱10,000/campaign", notes: "Larger campaigns need approval" },
      { decision: "Analytics & reporting", threshold: "Any", notes: "Report insights proactively" },
    ],
  },
  {
    title: "HR & ADMIN COORDINATOR",
    rows: [
      { decision: "Interview scheduling", threshold: "Any", notes: "Coordinate logistics" },
      { decision: "Candidate screening", threshold: "Any", notes: "Filter per criteria" },
      { decision: "Onboarding schedule", threshold: "Any", notes: "Standard process" },
      { decision: "Leave approval", threshold: "≤ 3 days", notes: "Longer leave needs approval" },
      { decision: "Emergency leave", threshold: "Any", notes: "Approve immediately" },
      { decision: "Policy clarification", threshold: "Any", notes: "Clarify existing policy" },
      { decision: "Employee records", threshold: "Any", notes: "Maintain all records" },
      { decision: "HR calendar management", threshold: "Any", notes: "Track all HR dates" },
      { decision: "Verbal performance warning", threshold: "Any", notes: "Written needs approval" },
      { decision: "Payroll input preparation", threshold: "Any", notes: "Prepare for approval" },
    ],
  },
  {
    title: "WEB DEVELOPER",
    rows: [
      { decision: "Implementation approach", threshold: "Any", notes: "How to build technically" },
      { decision: "Bug fix priority", threshold: "Any", notes: "Based on impact" },
      { decision: "Code/tech stack choices", threshold: "Any", notes: "Within project scope" },
      { decision: "Testing approach", threshold: "Any", notes: "QA methodology" },
      { decision: "Minor UI adjustments", threshold: "< 1 hour", notes: "Small tweaks" },
      { decision: "Technical documentation", threshold: "Any", notes: "Document all builds" },
      { decision: "Development timeline", threshold: "Within deadline", notes: "Manage own schedule" },
    ],
  },
  {
    title: "FINANCE COORDINATOR",
    rows: [
      { decision: "Operational expenses", threshold: "≤ ₱5,000/item", notes: "Routine purchases" },
      { decision: "Contractor payments", threshold: "Within contract", notes: "Pre-approved only" },
      { decision: "Expense categorization", threshold: "Any", notes: "Categorize all expenses" },
      { decision: "Financial tracking", threshold: "Any", notes: "Update all trackers" },
      { decision: "Accountant coordination", threshold: "Any", notes: "Manage relationship" },
      { decision: "Invoice management", threshold: "Any", notes: "Process all invoices" },
      { decision: "Report preparation", threshold: "Any", notes: "Prepare for Founder review" },
    ],
  },
];

export const FOUNDER_APPROVAL_SECTIONS: RoleDecisionSection[] = [
  {
    title: "FINANCIAL",
    rows: [
      { decision: "Large purchases", threshold: "> ₱5,000", notes: "Any single purchase above threshold" },
      { decision: "Budget reallocation", threshold: "Any amount", notes: "Moving budget between categories" },
      { decision: "New recurring expense", threshold: "> ₱2,000/month", notes: "New subscriptions/tools" },
      { decision: "Large refunds", threshold: "> ₱5,000", notes: "Above standard refund policy" },
    ],
  },
  {
    title: "CLIENT & CONTRACTS",
    rows: [
      { decision: "New client contracts", threshold: "All", notes: "All new client agreements" },
      { decision: "Pricing changes", threshold: "Any", notes: "Package or rate changes" },
      { decision: "Major scope changes", threshold: "> 2 hours work", notes: "Significant additions" },
      { decision: "Client termination", threshold: "All", notes: "Ending client relationships" },
      { decision: "Large discounts", threshold: "> 10%", notes: "Above standard discount" },
      { decision: "Long deadline extensions", threshold: "> 48 hours", notes: "Significant delays" },
    ],
  },
  {
    title: "PEOPLE & HR",
    rows: [
      { decision: "Final hiring decision", threshold: "All hires", notes: "Founder makes final call" },
      { decision: "Termination", threshold: "All", notes: "Founder must approve" },
      { decision: "Salary/compensation changes", threshold: "All", notes: "Any pay adjustments" },
      { decision: "Policy changes", threshold: "All", notes: "Any policy modifications" },
      { decision: "Written warnings", threshold: "All", notes: "Formal documentation" },
      { decision: "Extended leave", threshold: "> 3 days", notes: "Longer absences" },
    ],
  },
  {
    title: "STRATEGIC",
    rows: [
      { decision: "New marketing channels", threshold: "All", notes: "Expanding to new platforms" },
      { decision: "Brand guideline changes", threshold: "All", notes: "Any brand modifications" },
      { decision: "Partnership/collaborations", threshold: "All", notes: "External partnerships" },
      { decision: "Major campaigns", threshold: "> ₱10,000", notes: "Large marketing initiatives" },
      { decision: "New tools/integrations", threshold: "All", notes: "Adding new systems" },
      { decision: "Platform migrations", threshold: "All", notes: "Changing core tools" },
      { decision: "Process major changes", threshold: "All", notes: "Significant operational changes" },
      { decision: "Vendor selection (large)", threshold: "> ₱5,000/month", notes: "Significant vendors" },
    ],
  },
];

export const THRESHOLD_ROWS: ThresholdRowData[] = [
  { category: "Spending (per item)", canDecide: "≤ ₱5,000", needsApproval: "> ₱5,000", whoDecides: "Finance Coord" },
  { category: "Marketing Spend", canDecide: "≤ ₱10,000/campaign", needsApproval: "> ₱10,000/campaign", whoDecides: "Marketing Spec" },
  { category: "Tool Purchase", canDecide: "≤ ₱2,000/month", needsApproval: "> ₱2,000/month", whoDecides: "Role Owner" },
  { category: "Client Discount", canDecide: "≤ 10%", needsApproval: "> 10%", whoDecides: "Ops Coord" },
  { category: "Deadline Extension", canDecide: "≤ 48 hours", needsApproval: "> 48 hours", whoDecides: "Ops Coord" },
  { category: "Scope Addition", canDecide: "≤ 2 hours work", needsApproval: "> 2 hours work", whoDecides: "Ops Coord" },
  { category: "Refund", canDecide: "≤ ₱5,000", needsApproval: "> ₱5,000", whoDecides: "Ops Coord" },
  { category: "Leave Approval", canDecide: "≤ 3 days", needsApproval: "> 3 days", whoDecides: "HR Coord" },
  { category: "UI Changes", canDecide: "< 1 hour", needsApproval: "> 1 hour", whoDecides: "Web Dev" },
  { category: "Payment Extension", canDecide: "≤ 7 days", needsApproval: "> 7 days", whoDecides: "Ops Coord" },
];
