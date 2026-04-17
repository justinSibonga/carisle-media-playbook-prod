"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import type { RoleScorecardMeta, RoleScorecardTab } from "@/types/scorecard";

interface RoleScorecardProps {
  meta: RoleScorecardMeta;
  tabs: RoleScorecardTab[];
  /** Tab key that should be open on initial render. Defaults to "purpose". */
  defaultTab?: string;
}

/**
 * Shared layout for the five role scorecard pages. Renders the page header,
 * role-info table, FolderTabs, and the acknowledgement signature block. Tab
 * content itself is supplied by each role's data file under
 * `src/data/scorecards/*`.
 */
export function RoleScorecard({ meta, tabs, defaultTab = "purpose" }: RoleScorecardProps) {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">Role Scorecard</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">{meta.title}</h1>
        <p className="text-muted-foreground">{meta.subtitle ?? "Carisle Media"}</p>
      </div>

      <table className="mb-12">
        <tbody>
          <tr>
            <th className="pr-8 py-4">Role Title</th>
            <td className="font-medium py-4">{meta.roleTitle}</td>
          </tr>
          <tr>
            <th className="pr-8 py-4">Reports To</th>
            <td className="py-4">{meta.reportsTo}</td>
          </tr>
          <tr>
            <th className="pr-8 py-4">Date Created</th>
            <td className="py-4">{meta.dateCreated}</td>
          </tr>
        </tbody>
      </table>

      <FolderTabs tabs={tabs} defaultTab={defaultTab} />

      <section className="border-t border-border pt-8 mt-12">
        <div className="grid gap-8 md:grid-cols-2 not-prose">
          <div>
            <p className="text-sm text-muted-foreground mb-4">Prepared By:</p>
            <div className="border-b border-border w-full mb-2" />
            <p className="text-sm text-muted-foreground">Date: _______________</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-4">Acknowledged By (Role Holder):</p>
            <div className="border-b border-border w-full mb-2" />
            <p className="text-sm text-muted-foreground">Date: _______________</p>
          </div>
        </div>
      </section>
    </div>
  );
}
