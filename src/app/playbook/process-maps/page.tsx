"use client";

import { ProcessMapsSection } from "@/components/playbook/process-maps/process-maps-section";
import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";

export default function ProcessMapsPage() {
  return (
    <PlaybookPageLayout>
      <div className="prose-handbook">
        <ProcessMapsSection />
      </div>
    </PlaybookPageLayout>
  );
}
