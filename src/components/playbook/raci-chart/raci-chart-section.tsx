"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import {
  FINANCE_DECISIONS_ENTRIES,
  MARKETING_TECHNICAL_ENTRIES,
  OPERATIONS_ENTRIES,
  RACI_HASH_TO_TAB_MAP,
  RACI_NON_TAB_SECTION_IDS,
} from "@/data/raci-chart";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { AccountabilityByRoleContent } from "./by-role";
import { DelegationPhilosophy } from "./delegation-philosophy";
import { FounderLimitedInvolvement } from "./founder-limited-involvement";
import { FounderSummaryContent } from "./founder-summary";
import { RaciDefinitions } from "./raci-definitions";
import { RaciTable } from "./raci-table";

const RACI_TABS = [
  {
    key: "operations",
    label: "Operations",
    title: "Daily, Weekly & Client Operations",
    description: "Day-to-day activities, weekly cadence, and client project management responsibilities",
    content: <RaciTable entries={OPERATIONS_ENTRIES} />,
  },
  {
    key: "finance-decisions",
    label: "Finance & Decisions",
    title: "Finance, Accounting & Founder Decisions",
    description: "Financial operations and strategic decisions that require founder involvement",
    content: <RaciTable entries={FINANCE_DECISIONS_ENTRIES} />,
  },
  {
    key: "marketing-technical-hr",
    label: "Marketing, Tech & HR",
    title: "Marketing, Technical & HR Operations",
    description: "Marketing campaigns, web development, and people operations responsibilities",
    content: <RaciTable entries={MARKETING_TECHNICAL_ENTRIES} />,
  },
  {
    key: "founder-summary",
    label: "Founder Summary",
    title: "Founder's Involvement Summary",
    description: "Only these items require Founder involvement - everything else is delegated",
    content: <FounderSummaryContent />,
  },
  {
    key: "by-role",
    label: "By Role",
    title: "Accountability by Role",
    description: "Each role OWNS (A/R) their area completely",
    content: <AccountabilityByRoleContent />,
  },
];

export function RaciChartSection() {
  useScrollToHash(RACI_NON_TAB_SECTION_IDS);

  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">Operations Playbook</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">RACI Chart</h1>
        <p className="text-muted-foreground">
          Responsibility assignment matrix designed with maximum delegation in mind
        </p>
      </div>

      <DelegationPhilosophy />
      <RaciDefinitions />
      <FounderLimitedInvolvement />

      <section id="detailed-raci-matrix">
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-2 pb-2 border-b border-border">
          Detailed RACI Matrix
        </h2>
        <p className="text-muted-foreground mb-0">
          Complete responsibility assignments by department and function
        </p>

        <FolderTabs tabs={RACI_TABS} defaultTab="operations" hashToTabMap={RACI_HASH_TO_TAB_MAP} />
      </section>
    </div>
  );
}
