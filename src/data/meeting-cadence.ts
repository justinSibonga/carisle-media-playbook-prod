export const MEETING_OVERVIEW_ROWS = [
  ["Daily Standup", "Daily (async)", "5 min (SOD/EOD)", "All team", "Each person"],
  ["Weekly Ops + Marketing", "Weekly", "30 min", "Ops + Marketing", "Ops Coord"],
  ["Weekly All-Hands", "Weekly", "30-45 min", "All departments", "Ops Coord"],
  ["Ad-Hoc / As-Needed", "As needed", "15-30 min", "Relevant people", "Requester"],
  ["Client Weekly Check-in", "Weekly per client", "30 min", "Ops + Client", "Ops Coord"],
  ["Monthly Review", "Monthly", "45-60 min", "Founder + 1", "Founder"],
  ["Quarterly Planning", "Quarterly", "2-3 hours", "All team", "Founder"],
] as const;

export const WEEKLY_OPS_AGENDA = [
  ["5 min", "Client Status Quick Check", "Any urgent client issues or updates"],
  ["10 min", "This Week's Deliverables", "What's due, who's doing what, dependencies"],
  ["10 min", "Handoffs & Blockers", "Items passing between Ops <-> Marketing, any blockers"],
  ["5 min", "Action Items", "Confirm who does what by when"],
] as const;

export const ALL_HANDS_AGENDA = [
  ["5 min", "Wins & Shoutouts", "Celebrate completed work, client feedback, team wins"],
  ["10 min", "Department Updates", "Quick update from each dept (Ops, Marketing, Dev, Finance)"],
  ["10 min", "Client Pipeline & Status", "Active clients, upcoming launches, new inquiries"],
  ["10 min", "Cross-Dept Issues", "Issues needing multiple departments, decisions to make"],
  ["5 min", "Announcements & Close", "Company news, upcoming events, action items recap"],
] as const;

export const AD_HOC_MEETING_REASONS = [
  "Urgent client issue that needs immediate discussion",
  "Blocker that can't wait until next scheduled meeting",
  "Complex problem that needs real-time collaboration",
  "Decision that requires multiple people's input",
];

export const AD_HOC_MEETING_RULES = [
  "Must have a clear purpose stated in the invite",
  "Keep to 15-30 min max",
  "Document outcome/decision in relevant Lark channel",
  "If it can be resolved async (Lark message), don't meet",
];

export const MONTHLY_REVIEW_AGENDA = [
  ["Review scorecard results", "10 min", "Walk through 4 components"],
  ["Discuss wins", "10 min", "What went well, recognize achievements"],
  ["Discuss growth areas", "15 min", "Where to improve, support needed"],
  ["Set next month focus", "10 min", "1-2 specific development goals"],
  ["Employee feedback", "10 min", "Their input on support, processes, team"],
];

export const QUARTERLY_PLANNING_AGENDA = [
  ["Review last quarter", "30 min", "What worked, what didn't, key metrics"],
  ["Company updates", "15 min", "Business health, new clients, changes"],
  ["Quarter goals", "45 min", "Set 3-5 company priorities for next 90 days"],
  ["Team goals", "30 min", "How each role supports company goals"],
  ["Process improvements", "20 min", "What to start, stop, continue"],
  ["Open discussion", "20 min", "Team input, questions, ideas"],
];

export const MEETING_DO_ITEMS = [
  "Start on time (don't wait for latecomers)",
  "End with clear action items (who, what, when)",
  "Camera ON for video calls",
  "Record all client meetings",
  "Post AI summary within 24h (client meetings)",
];

export const MEETING_DONT_ITEMS = [
  "Hold meetings without an agenda",
  "Let meetings run over without permission",
  "Multitask (check phone, work on other things)",
  "Skip meetings without notice",
  "Schedule meetings without checking calendars",
];
