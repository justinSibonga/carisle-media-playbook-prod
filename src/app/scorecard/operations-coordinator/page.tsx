"use client";

import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { RoleScorecard } from "@/components/scorecard/role-scorecard";
import { META, TABS } from "@/data/scorecards/operations-coordinator";

export default function OperationsCoordinatorScorecardPage() {
  return (
    <PlaybookPageLayout>
      <RoleScorecard meta={META} tabs={TABS} />
    </PlaybookPageLayout>
  );
}
