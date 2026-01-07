import { HugeiconsIcon } from "@hugeicons/react";
import { 
  FireIcon,
  House01Icon,
  Alert01Icon,
  FirstAidKitIcon
} from "@hugeicons/core-free-icons";

export function HealthSafetySecuritySection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Health, Safety & Security
        </h1>
        <p className="text-muted-foreground">
          Carisle Media is committed to providing a safe and healthy work environment for all employees and contractors.
        </p>
      </div>

      {/* 1. Workplace Safety */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Workplace Safety
        </h2>
        
        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Safety Guidelines
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Comply with all health and safety regulations",
              "Keep work areas clean and hazard-free",
              "Know emergency procedures and evacuation routes",
              "Report all accidents or unsafe conditions immediately",
              "Maintain ergonomic home workspace for remote work",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Emergency Procedures */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Emergency Procedures
        </h2>

        <div className="overflow-x-auto">
          <table className="border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-status-warning-bg text-status-warning border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={FireIcon} size={16} /> Fire Emergency
                  </div>
                </th>
                <th className="bg-status-success-bg text-status-success border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={House01Icon} size={16} /> Earthquake
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activate nearest fire alarm</td>
                <td>Drop, Cover, Hold On</td>
              </tr>
              <tr>
                <td>Evacuate via fire exits (no elevators)</td>
                <td>Stay away from windows</td>
              </tr>
              <tr>
                <td>Turn off equipment if safe</td>
                <td>Evacuate after shaking stops</td>
              </tr>
              <tr>
                <td>Proceed to assembly area</td>
                <td>Move to open areas</td>
              </tr>
              <tr>
                <td>Wait for official clearance</td>
                <td>Report to assembly area</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Medical Emergency Box */}
        <div className="bg-status-danger-bg border-l-4 border-status-danger p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={FirstAidKitIcon} size={20} className="text-status-danger shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-danger mb-1 text-sm">Medical Emergency</p>
            <p className="text-sm my-0! text-foreground/80">
              Call for help immediately, notify HR/Admin, provide first aid only if trained, and keep the person comfortable until help arrives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Data Security & IT Policy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Data Security & IT Policy
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Passwords</td>
                <td>Strong, unique, updated regularly, never shared</td>
              </tr>
              <tr>
                <td className="font-semibold">Email</td>
                <td>Use company accounts only, beware of phishing</td>
              </tr>
              <tr>
                <td className="font-semibold">Devices</td>
                <td>Password-protected, locked when not in use</td>
              </tr>
              <tr>
                <td className="font-semibold">Data Storage</td>
                <td>Use authorized systems only</td>
              </tr>
              <tr>
                <td className="font-semibold">Network</td>
                <td>Use secure/private connections, VPN when remote</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Security Alert Box */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Alert01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">Security Alert</p>
            <p className="text-sm my-0! text-foreground/80">
              Lost or stolen devices must be reported IMMEDIATELY to HR/Admin. Any breach may result in disciplinary action and legal consequences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
