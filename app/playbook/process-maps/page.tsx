"use client";

import { ProcessMapsSection } from "@/components/process-maps-section";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";

export default function ProcessMapsPage() {
  return (
    <PlaybookPageLayout>
      <div className="prose-handbook">
        <ProcessMapsSection />
      </div>
    </PlaybookPageLayout>
  );
}
