
import { 
  HierarchyIcon, 
  DashboardSpeed01Icon,
  Book01Icon,
  UserSquareIcon,
  Settings02Icon,
  UserGroupIcon,
  UserAdd01Icon,
  Agreement01Icon
} from "@hugeicons/core-free-icons";

// Type for Hugeicons that can be rendered dynamically
export type IconComponent = typeof HierarchyIcon;

export type NavItem = {
  name: string;
  href: string;
  keywords?: string[];
  icon?: IconComponent;
};

export type NavSection = {
  items: NavItem[];
};

export type ExpandableSection = {
  name: string;
  icon?: IconComponent;
  items: NavItem[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    items: [
      { 
        name: "Organizational Chart", 
        href: "/org-chart",
        icon: HierarchyIcon,
        keywords: ["team", "structure", "hierarchy", "roles", "people", "staff", "management", "org chart", "organization", "employees", "team members", "department", "reporting"]
      },
    ]
  }
];

export const EXPANDABLE_SECTIONS: ExpandableSection[] = [
  {
    name: "Operational Playbook",
    icon: Book01Icon,
    items: [
      { 
        name: "Service Delivery SOP", 
        href: "/playbook/service-delivery",
        keywords: ["sales", "onboarding", "kick-off", "implementation", "quality gates", "dependencies", "communication", "delivery cycle", "5-week", "sop", "standard operating procedure", "client", "customer", "project", "timeline", "milestone", "weeks", "phases", "deliverables"]
      },
      { 
        name: "Process Maps", 
        href: "/playbook/process-maps",
        keywords: ["flowcharts", "diagrams", "workflows", "visuals", "steps", "process", "procedure", "flow", "chart", "visual", "map", "sequence", "order"]
      },
      { 
        name: "Quality Checklists", 
        href: "/playbook/quality-checklists",
        keywords: ["qa", "testing", "standards", "review", "audit", "compliance", "checklist", "quality assurance", "quality control", "verify", "validation", "check", "task list", "todo"]
      },
      { 
        name: "Escalation SOP", 
        href: "/playbook/escalation",
        keywords: ["emergency", "issues", "problems", "support", "resolution", "tier", "contact", "sop", "urgency", "priority", "critical", "help", "assistance", "response time", "urgent", "complaint", "crisis"]
      },
    ]
  },
  {
    name: "KPI & Reporting",
    icon: DashboardSpeed01Icon,
    items: [
      { 
        name: "KPI Dictionary", 
        href: "/playbook/kpi-dictionary",
        keywords: ["kpi", "targets", "metrics", "goals", "performance", "quick reference", "all targets", "key performance indicator", "measurement", "objectives", "results", "benchmark", "scorecard", "definition", "formula", "owner", "frequency"]
      },
    ]
  },
  {
    name: "Tools & Project Management",
    icon: Settings02Icon,
    items: [
      { 
        name: "PM Tool Standard", 
        href: "/playbook/pm-tool",
        keywords: ["lark", "tasks", "kanban", "project management", "task naming", "workspace", "tool", "software", "board", "columns", "status", "tracking", "assignment", "lists", "due dates", "owners"]
      },
      { 
        name: "File System Guide", 
        href: "/playbook/file-system",
        keywords: ["google drive", "files", "folders", "naming", "convention", "storage", "organization", "where things live", "file structure", "client folder", "assets", "deliverables", "version control", "sharing", "access", "permissions", "doc naming", "versioning"]
      },
      { 
        name: "Communication Rules", 
        href: "/playbook/communication-rules",
        keywords: ["communication", "chat", "slack", "lark", "whatsapp", "email", "meetings", "etiquette", "response time", "sla", "urgency", "priority", "critical", "high", "normal", "low", "video call", "phone call", "gc"]
      },
    ]
  },
  {
    name: "Hiring & Onboarding",
    icon: UserAdd01Icon,
    items: [
      { 
        name: "Hiring Pipeline SOP", 
        href: "/playbook/hiring-sop",
        keywords: ["recruiting", "hiring", "interview", "candidates", "screening", "offer", "contract", "sop", "job", "application", "applicant", "employment", "new hire", "recruitment", "resume", "cv"]
      },
      { 
        name: "Interview Scorecards", 
        href: "/playbook/interview-scorecards",
        keywords: ["interview", "scorecard", "hiring", "candidate", "evaluation", "assessment", "scoring", "interview questions", "rubric", "criteria"]
      },
      { 
        name: "Onboarding Plan", 
        href: "/playbook/onboarding-plan",
        keywords: ["onboarding", "new hire", "orientation", "probation", "milestones", "checklist", "30 60 90"]
      },
      { 
        name: "Training Plan", 
        href: "/playbook/training-plan",
        keywords: ["training", "ghl university", "deadlines", "proof of completion", "requirements", "matrix", "learn", "courses", "skills"]
      },
    ]
  },
  {
    name: "People Management",
    icon: UserGroupIcon,
    items: [
      { 
        name: "Core Values", 
        href: "/playbook/core-values",
        keywords: ["core values", "values", "mission", "vision", "culture", "principles", "beliefs", "company values", "guiding principles"]
      },
      { 
        name: "Performance Evaluation", 
        href: "/playbook/performance-evaluation",
        keywords: ["performance", "evaluation", "review", "assessment", "appraisal", "feedback", "rating", "performance review", "annual review", "quarterly review"]
      },
      { 
        name: "Coaching & PIP SOP", 
        href: "/playbook/coaching-pip-sop",
        keywords: ["coaching", "pip", "performance improvement plan", "warning", "termination", "discipline", "misconduct", "underperformance", "sop", "hr", "written warning", "separation", "feedback", "correction"]
      },
      { 
        name: "Meeting Cadence", 
        href: "/playbook/meeting-cadence",
        keywords: ["meeting", "cadence", "schedule", "meetings", "standup", "daily", "weekly", "monthly", "huddle", "sync", "one on one", "1:1", "team meeting"]
      },
    ]
  },
  {
    name: "Governance",
    icon: Agreement01Icon,
    items: [
      { 
        name: "RACI Chart", 
        href: "/playbook/raci-chart",
        keywords: ["raci", "responsibility", "accountable", "consulted", "informed", "delegation", "matrix", "roles", "chart", "who does what", "assign", "ownership"]
      },
      { 
        name: "Decision Rights", 
        href: "/playbook/decision-rights",
        keywords: ["authority", "delegation", "approval", "founder", "levels", "escalation", "permissions", "decisions", "authorize", "who can", "responsibility", "accountability", "sign off", "approve"]
      },
    ]
  },
  {
    name: "Role Score Card",
    icon: UserSquareIcon,
    items: [
      { 
        name: "Finance Coordinator", 
        href: "/scorecard/finance-coordinator",
        keywords: ["finance", "accounting", "budget", "taxes", "expenses", "income", "financial", "bookkeeping", "money", "cash", "invoices", "payments", "billing", "accounts", "receivable", "payable", "roi", "revenue"]
      },
      { 
        name: "HR & Admin Coordinator", 
        href: "/scorecard/hr-admin-coordinator",
        keywords: ["hr", "human resources", "admin", "onboarding", "payroll", "policies", "people", "records", "employee", "staff", "benefits", "leave", "vacation", "attendance", "documents", "files", "administration"]
      },
      { 
        name: "Marketing Specialist", 
        href: "/scorecard/marketing-specialist",
        keywords: ["marketing", "specialist", "campaigns", "ads", "social media", "content", "branding", "digital marketing", "advertising", "promotion", "seo", "ppc"]
      },
      { 
        name: "Operations Coordinator", 
        href: "/scorecard/operations-coordinator",
        keywords: ["operations", "coordinator", "ops", "logistics", "process", "efficiency", "workflow", "systems", "procedures", "operational"]
      },
      { 
        name: "Web Developer", 
        href: "/scorecard/web-developer",
        keywords: ["developer", "tech", "ghl", "website", "funnel", "landing page", "integration", "technical", "code", "programming", "development", "web", "frontend", "backend", "api", "automation", "highlevel", "go high level"]
      },
    ]
  }
];
