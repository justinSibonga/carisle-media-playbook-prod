import { CopyableTemplate } from "@/components/ui/copyable-template";
import { StepProcess } from "@/components/ui/step-process";
import { ASSESS_ITEMS, ESCALATION_TEMPLATE, FOLLOW_UP_ITEMS, GATHER_ITEMS } from "@/data/escalation";
import { EscalationTemplatePreview } from "./escalation-template-preview";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-sm text-foreground/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function HowToEscalateSection() {
  return (
    <section>
      <h2 id="how-to-escalate">How to Escalate</h2>

      <StepProcess
        steps={[
          {
            title: "Assess the Situation",
            description: "Before escalating, ask yourself:",
            content: <BulletList items={ASSESS_ITEMS} />,
          },
          {
            title: "Gather Information",
            description: "Before escalating, document:",
            content: <BulletList items={GATHER_ITEMS} />,
          },
          {
            title: "Escalate with Context",
            description: "Use this template:",
            content: (
              <CopyableTemplate template={ESCALATION_TEMPLATE}>
                <EscalationTemplatePreview />
              </CopyableTemplate>
            ),
          },
          {
            title: "Follow Up",
            description: "After escalating:",
            content: <BulletList items={FOLLOW_UP_ITEMS} />,
          },
        ]}
      />
    </section>
  );
}
