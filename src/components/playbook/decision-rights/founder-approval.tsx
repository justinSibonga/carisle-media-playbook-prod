import { FOUNDER_APPROVAL_SECTIONS } from "@/data/decision-rights";
import { RoleDecisionTables } from "./role-decision-tables";

const RED_ROW_STYLE = { backgroundColor: "rgba(239, 68, 68, 0.1)" };
const RED_ROW_HOVER = { backgroundColor: "rgba(239, 68, 68, 0.2)" };

export function FounderApprovalContent() {
  return (
    <div className="space-y-2">
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-medium text-foreground m-0">
          These items <strong>ALWAYS</strong> need Founder approval — everything else is delegated.
        </p>
      </div>

      <RoleDecisionTables
        sections={FOUNDER_APPROVAL_SECTIONS}
        rowClassName="border-b border-border transition-colors"
        rowStyle={RED_ROW_STYLE}
        hoverStyle={RED_ROW_HOVER}
      />

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
        <h4 className="font-bold text-primary mb-3 text-sm">ESCALATION FORMAT</h4>
        <p className="text-sm text-muted-foreground mb-3">When escalating, include:</p>
        <ol className="text-sm space-y-1 list-decimal pl-5 m-0">
          <li>
            <strong>Decision needed:</strong> [What needs approval]
          </li>
          <li>
            <strong>Context:</strong> [Background information]
          </li>
          <li>
            <strong>Options considered:</strong> [What you evaluated]
          </li>
          <li>
            <strong>Recommendation:</strong> [Your suggested action]
          </li>
          <li>
            <strong>Deadline:</strong> [When decision is needed by]
          </li>
        </ol>
      </div>
    </div>
  );
}
