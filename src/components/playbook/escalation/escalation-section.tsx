import { EscalationMatrixSection } from "./escalation-matrix-section";
import { HowToEscalateSection } from "./how-to-escalate-section";
import { PurposeSection } from "./purpose-section";
import { QuickReferenceSection } from "./quick-reference-section";
import { SeverityLevelsSection } from "./severity-levels-section";

function EscalationHeader() {
  return (
    <div className="mb-8">
      <p className="text-accent! mb-2 text-sm font-medium uppercase tracking-widest">Operations Playbook</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary lg:text-4xl">Escalation SOP</h1>
      <p className="text-muted-foreground">
        When and how to escalate issues to ensure timely resolution
      </p>
    </div>
  );
}

export function EscalationSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <EscalationHeader />
      <div className="prose-handbook">
        <PurposeSection />
        <SeverityLevelsSection />
        <EscalationMatrixSection />
        <HowToEscalateSection />
        <QuickReferenceSection />
      </div>
    </div>
  );
}
