"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { HugeiconsIcon } from "@hugeicons/react";
import { Wrench01Icon } from "@hugeicons/core-free-icons";

interface UnderConstructionScorecardProps {
  roleTitle: string;
}

export function UnderConstructionScorecard({ roleTitle }: UnderConstructionScorecardProps) {
  return (
    <PlaybookPageLayout>
      <div className="animate-fade-in prose-handbook">
        {/* Header */}
        <div className="mb-8">
          <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
            Role Score Card
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
            {roleTitle}
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>

        {/* Role Info Table - Horizontal Layout */}
        <table className="mb-12">
          <tbody>
            <tr>
              <th className="pr-8 py-4">Role Title</th>
              <td className="font-medium py-4">{roleTitle}</td>
            </tr>
            <tr>
              <th className="pr-8 py-4">Reports To</th>
              <td className="py-4">Founder</td>
            </tr>
          </tbody>
        </table>

        {/* Under Construction Notice */}
        <div className="flex flex-col items-center justify-center py-16 px-8 bg-muted/50 rounded-2xl border border-border not-prose">
          <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
            <HugeiconsIcon icon={Wrench01Icon} size={32} className="text-amber-600" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Under Construction
          </h2>
          <p className="text-muted-foreground text-center max-w-md">
            This scorecard is currently being developed. Check back soon for the complete 
            {roleTitle} role scorecard with KPIs, expectations, and performance metrics.
          </p>
        </div>
      </div>
    </PlaybookPageLayout>
  );
}
