"use client";

import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { RoleScorecard } from "@/components/scorecard/role-scorecard";
import { META, TABS } from "@/data/scorecards/marketing-specialist";

export default function MarketingSpecialistScorecardPage() {
  return (
    <PlaybookPageLayout>
      <RoleScorecard meta={META} tabs={TABS} />
    </PlaybookPageLayout>
  );
}
