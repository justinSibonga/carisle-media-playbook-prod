import { BY_ROLE_SECTIONS } from "@/data/raci-chart";
import type { RoleSectionData } from "@/types/raci";

interface RoleSectionProps {
  section: RoleSectionData;
}

function RoleSection({ section }: RoleSectionProps) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <td colSpan={2} className="bg-primary text-white! font-bold text-center py-2 text-xs">
              {section.title}
            </td>
          </tr>
          <tr className="bg-muted/50">
            <th className="text-left py-2 px-3 font-semibold text-xs">Owns & Executes (A/R)</th>
            <th className="text-left py-2 px-3 font-semibold text-xs">Category</th>
          </tr>
        </thead>
        <tbody>
          {section.activities.map((item) => (
            <tr key={item.activity} className="border-b border-border hover:bg-muted/30">
              <td className="py-2 px-3 text-left text-xs">{item.activity}</td>
              <td className="py-2 px-3 text-left text-xs text-muted-foreground">{item.category}</td>
            </tr>
          ))}
          <tr className="bg-muted/30">
            <td colSpan={2} className="py-2 px-3 font-semibold text-xs">
              Total: {section.total} activities owned
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function AccountabilityByRoleContent() {
  return (
    <div className="space-y-8">
      {BY_ROLE_SECTIONS.map((section) => (
        <RoleSection key={section.title} section={section} />
      ))}
    </div>
  );
}
