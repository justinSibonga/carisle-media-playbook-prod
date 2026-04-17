import { PlaybookPageLayout } from "@/components/layout/playbook-page-layout";
import { EscalationSection } from "@/components/playbook/escalation/escalation-section";

export default function EscalationPage() {
  return (
    <PlaybookPageLayout>
      <EscalationSection />
    </PlaybookPageLayout>
  );
}
