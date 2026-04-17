import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
export const JOURNEY_PHASES = [
  {
    title: "Phase 1: Sales",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    items: [
      ["Lead Capture", "Ads/Website"],
      ["Discovery Call", "15-30 min"],
      ["Strategy Call", "30-45 min"],
      ["Proposal", "24-48 hrs"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
        <span className="flex items-center gap-1 font-medium text-accent">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-4 w-4" /> Close
        </span>
        <span className="text-xs text-muted-foreground">1-2 weeks</span>
      </div>
    ),
  },
  {
    title: "Phase 2: Onboard",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    items: [
      ["Kick-off Call", "Week 0"],
      ["Asset Collection", "Client inputs"],
      ["Project Setup", "GHL Account"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
        <span className="text-xs text-muted-foreground">1 week</span>
      </div>
    ),
  },
  {
    title: "Phase 3: Delivery",
    headerClassName: "bg-sidebar text-sidebar-foreground",
    customBody: (
      <div className="p-4 text-sm">
        <div className="mb-3 grid grid-cols-5 gap-1 text-center">
          {["W1", "W2", "W3", "W4", "W5"].map((item) => (
            <div key={item} className="rounded bg-muted px-1 py-1 text-xs font-medium">
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 text-center text-[10px] text-muted-foreground">
          {["Foundation", "Pages", "Emails", "Workflows", "Launch"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">Weekly sign-offs required</p>
        <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
          <span className="text-xs text-muted-foreground">5 weeks</span>
        </div>
      </div>
    ),
  },
  {
    title: "Handoff",
    headerClassName: "bg-accent text-accent-foreground",
    items: [
      ["Training Call"],
      ["Documentation"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
        <span className="flex items-center gap-1 font-medium text-accent">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-4 w-4" /> Go-Live
        </span>
        <span className="text-xs text-muted-foreground">1 week</span>
      </div>
    ),
  },
  {
    title: "Retainer",
    headerClassName: "bg-muted text-muted-foreground",
    items: [
      ["Ads Management"],
      ["Lead Generation"],
      ["Ongoing Support"],
    ],
    footer: (
      <div className="mt-2 flex items-center justify-end border-t border-border pt-2">
        <span className="text-xs text-muted-foreground">Ongoing</span>
      </div>
    ),
  },
] as const;

export const DELIVERY_TIMELINE_ROWS = [
  {
    week: "Week 1",
    delivers: ["GHL setup", "Pipeline structure", "Funnel strategy", "Brand upload"],
    clientProvides: ["Brand assets", "Business info", "Offer details", "Target audience", "Access credentials"],
    gate: "Strategy Sign-off",
  },
  {
    week: "Week 2",
    delivers: ["Landing pages", "Thank you pages", "Opt-in forms", "Mobile design", "Funnel flow"],
    clientProvides: ["Testimonials", "Product images", "Copy inputs", "Headshots"],
    gate: "Design Approval",
  },
  {
    week: "Week 3",
    delivers: ["Nurture sequence", "Reminders", "Follow-ups", "Email templates", "SMS templates"],
    clientProvides: ["FAQs", "Case studies", "Sequence review & approval"],
    gate: "Sequence Approval",
  },
  {
    week: "Week 4",
    delivers: ["Calendar/booking", "Automations", "Pipeline rules", "Tag logic", "Integrations"],
    clientProvides: ["Availability", "Integration credentials", "Workflow review"],
    gate: "Workflow Approval",
  },
  {
    week: "Week 5",
    delivers: ["End-to-end testing", "Bug fixes", "Training call", "Documentation", "Go-live"],
    clientProvides: ["Attend training", "Final sign-off", "Go-live confirmation"],
    gate: "GO-LIVE!",
  },
] as const;

export const SWIM_LANE_ROWS = [
  {
    phase: "Week 0",
    delivers: ["Kick-off call", "Send onboarding form", "Project setup"],
    clientProvides: ["Complete onboarding form", "Provide all brand assets", "Grant access credentials"],
    gate: "Form Complete",
  },
  {
    phase: "Week 1",
    delivers: ["GHL account setup", "Pipeline structure", "Funnel strategy map"],
    clientProvides: ["Review strategy", "Provide any missing info", "Approve within 48 hrs"],
    gate: "Strategy Approved",
  },
  {
    phase: "Week 2",
    delivers: ["Landing page build", "Thank you pages", "Forms & funnel flow"],
    clientProvides: ["Provide testimonials", "Provide images", "Approve design/copy"],
    gate: "Design Approved",
  },
  {
    phase: "Week 3",
    delivers: ["Nurture sequence", "Reminder emails", "SMS templates"],
    clientProvides: ["Provide FAQs", "Provide case studies", "Approve sequences"],
    gate: "Sequences Approved",
  },
  {
    phase: "Week 4",
    delivers: ["Calendar/booking", "Automations", "Integrations"],
    clientProvides: ["Confirm availability", "Provide integrations", "Approve workflow logic"],
    gate: "Workflows Approved",
  },
  {
    phase: "Week 5",
    delivers: ["End-to-end testing", "Training call", "Documentation"],
    clientProvides: ["Attend training", "Final sign-off", "Confirm go-live"],
    gate: "GO-LIVE",
  },
] as const;

export const OPS_COORDINATOR_HANDLES = [
  "Client questions & complaints",
  "Schedule changes <= 48 hrs",
  "Discounts <= 10%",
  "Minor scope additions <= 2 hrs",
  "Bug fixes & technical issues",
  "Process & task prioritization",
];

export const FOUNDER_REQUIRED = [
  "Client threatening to leave",
  "Refunds > PHP 5,000",
  "Contract/pricing changes",
  "Major scope changes > 2 hrs",
  "Termination decisions",
  "Legal/security concerns",
];

export const RESPONSE_TIME_ROWS = [
  ["P1 - Critical", "Within 1 hour", "bg-red-100 text-red-700 border-red-500 dark:bg-red-900/30 dark:text-red-400"],
  ["P2 - High", "Within 4 hours", "bg-orange-100 text-orange-700 border-orange-500 dark:bg-orange-900/30 dark:text-orange-400"],
  ["P3 - Medium", "Within 24 hours", "bg-yellow-100 text-yellow-700 border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400"],
  ["P4 - Low", "Within 48 hours", "bg-green-100 text-green-700 border-green-500 dark:bg-green-900/30 dark:text-green-400"],
] as const;
