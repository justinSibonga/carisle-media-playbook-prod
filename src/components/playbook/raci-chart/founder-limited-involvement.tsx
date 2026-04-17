import { Fragment } from "react";

type Badge = { letter: "I" | "R" | "C" | "A"; kind: "accountable" | "responsible" | "consulted" | "informed" };

interface InvolvementRow {
  category: string;
  badges: Badge[];
  summary: string;
  why: string;
}

const BADGE_CLASS: Record<Badge["kind"], string> = {
  accountable: "bg-raci-accountable/20 text-raci-accountable",
  responsible: "bg-raci-responsible/20 text-raci-responsible",
  consulted: "bg-raci-consulted/20 text-raci-consulted",
  informed: "bg-raci-informed/20 text-raci-informed",
};

const INVOLVEMENT_ROWS: InvolvementRow[] = [
  {
    category: "Daily Operations",
    badges: [{ letter: "I", kind: "informed" }],
    summary: "Not involved / Informed",
    why: "Fully delegated to Ops Coordinator",
  },
  {
    category: "Weekly Meetings",
    badges: [{ letter: "R", kind: "responsible" }],
    summary: "Participates (R)",
    why: "Attends and updates own scorecard only",
  },
  {
    category: "Client Management",
    badges: [
      { letter: "I", kind: "informed" },
      { letter: "C", kind: "consulted" },
    ],
    summary: "Informed / Consulted if escalated",
    why: "Ops Coordinator owns client relationships",
  },
  {
    category: "Marketing",
    badges: [{ letter: "I", kind: "informed" }],
    summary: "Informed on results",
    why: "Marketing Specialist owns all campaigns",
  },
  {
    category: "Technical",
    badges: [{ letter: "I", kind: "informed" }],
    summary: "Informed on major issues",
    why: "Web Developer owns all technical work",
  },
  {
    category: "HR & Admin",
    badges: [
      { letter: "I", kind: "informed" },
      { letter: "C", kind: "consulted" },
    ],
    summary: "Informed / Consulted on policy",
    why: "HR Coordinator owns people operations",
  },
  {
    category: "Finance",
    badges: [{ letter: "I", kind: "informed" }],
    summary: "Informed on reports",
    why: "Finance Coordinator owns all tracking",
  },
  {
    category: "Strategic Decisions",
    badges: [{ letter: "A", kind: "accountable" }],
    summary: "Accountable (A)",
    why: "Only area Founder must own",
  },
];

// Strategic Decisions shows the summary as part of a sentence with a span;
// other rows use a muted-foreground span.
function SummaryText({ row }: { row: InvolvementRow }) {
  if (row.category === "Weekly Meetings" || row.category === "Strategic Decisions") {
    return <span>{row.summary}</span>;
  }
  return <span className="text-muted-foreground">{row.summary}</span>;
}

export function FounderLimitedInvolvement() {
  return (
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
            {INVOLVEMENT_ROWS.map((row) => (
              <tr key={row.category}>
                <td className="font-medium">{row.category}</td>
                <td>
                  <span className="inline-flex items-center gap-2">
                    {row.badges.map((badge, i) => (
                      <Fragment key={`${row.category}-${i}`}>
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs ${BADGE_CLASS[badge.kind]}`}
                        >
                          {badge.letter}
                        </span>
                      </Fragment>
                    ))}
                    <SummaryText row={row} />
                  </span>
                </td>
                <td className="text-muted-foreground">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
