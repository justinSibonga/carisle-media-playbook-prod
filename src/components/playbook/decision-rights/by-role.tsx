import { BY_ROLE_SECTIONS } from "@/data/decision-rights";
import { RoleDecisionTables } from "./role-decision-tables";

export function ByRoleContent() {
  return <RoleDecisionTables sections={BY_ROLE_SECTIONS} />;
}
