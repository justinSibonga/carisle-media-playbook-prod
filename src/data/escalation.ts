import type {
  EscalationMatrix,
  ResolutionOwner,
  SeverityDefinition,
} from "@/types/escalation";

export const GUIDING_PRINCIPLES: string[] = [
  "Most issues should be resolved at the team level",
  "Escalate early for true blockers - don't wait until crisis",
  "Always escalate with context AND a recommendation",
  "Founder escalation is a last resort, not a first response",
];

export const RESOLUTION_OWNERS: ResolutionOwner[] = [
  { title: "Team Member", description: "Day-to-day operational issues within their scope" },
  { title: "Operations Coordinator", description: "Client issues, timeline adjustments, process problems" },
  { title: "Founder", description: "Strategic decisions, major client issues, financial/contractual matters" },
];

export const SEVERITY_LEVELS: SeverityDefinition[] = [
  {
    level: "P1",
    name: "Critical",
    description: "System down, client cannot operate, major revenue impact",
    responseTime: "Within 1 hour",
    badgeClass: "bg-red-100 text-red-700 border-red-500 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    level: "P2",
    name: "High",
    description: "Major functionality broken, significant client impact",
    responseTime: "Within 4 hours",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    level: "P3",
    name: "Medium",
    description: "Feature not working as expected, workaround available",
    responseTime: "Within 24 hours",
    badgeClass: "bg-yellow-100 text-yellow-700 border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    level: "P4",
    name: "Low",
    description: "Minor issue, cosmetic, enhancement request",
    responseTime: "Within 48 hours",
    badgeClass: "bg-green-100 text-green-700 border-green-500 dark:bg-green-900/30 dark:text-green-400",
  },
];

const mat = (issueType: string, examples: string, level1: string, level2: string, level3: string) => ({
  issueType,
  examples,
  level1,
  level2,
  level3,
});

export const ESCALATION_MATRICES: EscalationMatrix[] = [
  {
    title: "Client Issues",
    id: "client-issues",
    rows: [
      mat("Client question", "General how-to, status update", "Handle", "If complex", "-"),
      mat("Client complaint", "Unhappy with deliverable", "Document", "Handle + resolve", "If unresolved"),
      mat("Client not responding", "No feedback for 48+ hours", "Follow up", "Handle + escalate", "If >5 days"),
      mat("Client wants scope change", "Requesting additions", "Document request", "Assess + quote", "If >2 hours work"),
      mat("Client threatening to leave", "Major dissatisfaction", "Inform immediately", "Inform immediately", "Handle"),
    ],
  },
  {
    title: "Technical Issues",
    id: "technical-issues",
    rows: [
      mat("Bug - Minor", "Cosmetic, non-blocking", "Fix", "If >2 hours", "-"),
      mat("Bug - Major", "Feature broken", "Attempt fix", "Prioritize fix", "If client-facing P1"),
      mat("System down", "GHL/integration outage", "Document + notify", "Handle + communicate", "If prolonged >4 hrs"),
      mat("Integration failure", "Zapier, API broken", "Investigate", "Handle", "If business-critical"),
      mat("Data issue", "Lost contacts, wrong data", "Investigate scope", "Handle + resolve", "If major data loss"),
    ],
  },
  {
    title: "Delivery Issues",
    id: "delivery-issues",
    rows: [
      mat("Behind schedule", "<1 day delay", "Catch up", "If >1 day", "If >3 days"),
      mat("Missing client inputs", "Assets, approvals pending", "Follow up", "Handle + push timeline", "If blocking >3 days"),
      mat("Quality issue", "Deliverable below standard", "Rework", "Review before client", "-"),
      mat("Scope creep", "Work expanding beyond contract", "Document", "Assess + propose CR", "Approve CR"),
      mat("Resource conflict", "Team overloaded", "Flag early", "Re-prioritize", "If cannot resolve"),
    ],
  },
  {
    title: "Financial / Contract",
    id: "financial-contract",
    rows: [
      mat("Payment overdue", "<7 days late", "Remind", "Follow up formally", "If >14 days"),
      mat("Refund request", "Client wants money back", "Document reason", "Assess validity", "Decide"),
      mat("Discount request", "Client asking for discount", "-", "If <=10%", "If >10%"),
      mat("Contract dispute", "Terms disagreement", "Document", "Gather facts", "Handle"),
      mat("New contract", "Pricing, terms", "-", "Draft + recommend", "Approve"),
    ],
  },
];

export const ASSESS_ITEMS: string[] = [
  "Can I resolve this myself? Have I tried?",
  "What's the impact if this isn't resolved quickly?",
  "What severity level is this? (P1/P2/P3/P4)",
  "Who is the right person to escalate to?",
];

export const GATHER_ITEMS: string[] = [
  "What is the issue? (Be specific)",
  "When did it start? What triggered it?",
  "Who is affected? (Client name, project)",
  "What have you already tried?",
  "What is the impact if not resolved?",
  "What do you recommend?",
];

export const FOLLOW_UP_ITEMS: string[] = [
  "Acknowledge receipt was confirmed",
  "Track the resolution",
  "Update relevant stakeholders",
  "Document the outcome for future reference",
  "Close the loop with client (if applicable)",
];

export const ALWAYS_ESCALATE_ITEMS: string[] = [
  "Client threatening to leave",
  "Refund requests",
  "Contract/pricing changes",
  "Major scope changes (>2 hrs)",
  "Legal/security concerns",
];

export const ESCALATION_TEMPLATE = `ESCALATION REQUEST

Severity: [P1/P2/P3/P4]
Issue: [One-line summary]
Client/Project: [Name]

Details:
[Describe the situation in 2-3 sentences]

Impact:
[What happens if not resolved? Timeline impact?]

What I've Tried:
[List actions already taken]

My Recommendation:
[What I think we should do]

Decision Needed By: [Date/Time]`;
