import { SEVERITY_LEVELS } from "@/data/escalation";
import type { SeverityLevel } from "@/types/escalation";
import { SeverityBadge } from "./severity-badge";

const NAME_COLOR: Record<SeverityLevel, string> = {
  P1: "text-red-600 dark:text-red-400",
  P2: "text-orange-600 dark:text-orange-400",
  P3: "text-yellow-600 dark:text-yellow-400",
  P4: "text-green-600 dark:text-green-400",
};

export function SeverityLevelsSection() {
  return (
    <section>
      <h2 id="severity-levels">Severity Levels</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Description</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          {SEVERITY_LEVELS.map((sev) => (
            <tr key={sev.level}>
              <td>
                <SeverityBadge level={sev.level} colorClassName={sev.badgeClass} />
              </td>
              <td className={`font-medium ${NAME_COLOR[sev.level]}`}>{sev.name}</td>
              <td>{sev.description}</td>
              <td className="font-medium">{sev.responseTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
