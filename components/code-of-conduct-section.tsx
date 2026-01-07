import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Cancel01Icon,
  Alert01Icon
} from "@hugeicons/core-free-icons";

export function CodeOfConductSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Code of Conduct
        </h1>
        <p className="text-muted-foreground">
          Carisle Media upholds the highest standards of professionalism, integrity, and ethical conduct.
        </p>
      </div>

      {/* 1. Professional Behavior & Ethics */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Professional Behavior & Ethics
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Expected Behavior Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-status-success text-white px-4 py-3 font-medium">
              ✓ Expected Behavior
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Act with integrity and honesty",
                "Treat everyone with respect",
                "Maintain confidentiality",
                "Comply with laws and policies",
                "Collaborate effectively",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-status-success font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited Behavior Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
              ✗ Prohibited Behavior
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Harassment or discrimination",
                "Sharing confidential info",
                "Conflicts of interest",
                "Misuse of company property",
                "Unprofessional communication",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-destructive font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Use of Company Property */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Use of Company Property
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Resource Guidelines
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Use company property for official business only",
              "Handle all equipment with care",
              "Report any damage or loss immediately",
              "Follow data security protocols",
              "Return all company property upon separation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Dress Code Guidelines */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Dress Code Guidelines
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Setting</th>
                <th>Dress Code</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Onsite/Office</td>
                <td>Business Casual</td>
                <td>Collared shirts, slacks, closed-toe shoes</td>
              </tr>
              <tr>
                <td className="font-semibold">Virtual Meetings</td>
                <td>Smart Casual</td>
                <td>Clean, professional tops visible on camera</td>
              </tr>
              <tr>
                <td className="font-semibold">Client Meetings</td>
                <td>Business Formal</td>
                <td>Blazers, dress shoes, professional attire</td>
              </tr>
              <tr>
                <td className="font-semibold">Company Events</td>
                <td>As Specified</td>
                <td>May require branded attire</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Prohibited Box */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Alert01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">Prohibited</p>
            <p className="text-sm my-0! text-foreground/80">
              Offensive graphics, revealing clothing, ripped attire, and slippers/flip-flops are not allowed.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Social Media Policy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          Social Media Policy
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Online Conduct
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Maintain professionalism on all platforms",
              "Never share confidential company or client info",
              "Only authorized reps may post on official accounts",
              "Get approval before using company branding",
              "Avoid negative comments about CM or colleagues",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Disciplinary Actions */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
          Disciplinary Actions
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Action</th>
                <th>Issued By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Level 1</td>
                <td>Formal Email Warning</td>
                <td>HR & Admin</td>
              </tr>
              <tr>
                <td className="font-semibold">Level 2</td>
                <td>Formal Email Warning (continued violation)</td>
                <td>Project Manager</td>
              </tr>
              <tr>
                <td className="font-semibold">Level 3</td>
                <td>Disciplinary Meeting / Suspension / Termination</td>
                <td>Founder</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Non-Solicitation Policy */}
        <div className="bg-status-danger-bg border-l-4 border-status-danger p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Cancel01Icon} size={20} className="text-status-danger shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-danger mb-1 text-sm">Non-Solicitation Policy</p>
            <p className="text-sm my-0! text-foreground/80">
              Client, employee, or intern poaching is strictly prohibited and may result in immediate termination and legal action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
