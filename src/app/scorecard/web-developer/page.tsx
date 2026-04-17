"use client";

import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { RoleScorecard } from "@/components/scorecard/role-scorecard";
import { META, TABS } from "@/data/scorecards/web-developer";

export default function WebDeveloperScorecardPage() {
  return (
    <PlaybookPageLayout>
      <RoleScorecard meta={META} tabs={TABS} />
    </PlaybookPageLayout>
  );
}
