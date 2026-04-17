"use client";

import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { RoleScorecard } from "@/components/scorecard/role-scorecard";
import { META, TABS } from "@/data/scorecards/finance-coordinator";

export default function FinanceCoordinatorScorecardPage() {
  return (
    <PlaybookPageLayout>
      <RoleScorecard meta={META} tabs={TABS} />
    </PlaybookPageLayout>
  );
}
