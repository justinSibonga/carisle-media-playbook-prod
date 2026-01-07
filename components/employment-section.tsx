import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Idea01Icon, 
  Alert01Icon, 
  Megaphone01Icon 
} from "@hugeicons/core-free-icons";

export function EmploymentSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Employment Policies
        </h1>
        <p className="text-muted-foreground">
          Carisle Media Corporation recognizes different employment arrangements to meet operational needs and comply with labor regulations.
        </p>
      </div>

      {/* 1. Types of Employment */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Types of Employment
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Duration</th>
                <th>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Probationary</td>
                <td>3-6 months</td>
                <td>SSS, PhilHealth, Pag-IBIG, Allowances</td>
              </tr>
              <tr>
                <td>Regular</td>
                <td>Permanent</td>
                <td>Full benefits including HMO</td>
              </tr>
              <tr>
                <td>Contractual</td>
                <td>Project-based</td>
                <td>Per contract terms</td>
              </tr>
              <tr>
                <td>Intern/OJT</td>
                <td>Training period</td>
                <td>Per internship agreement</td>
              </tr>
              <tr>
                <td>Independent Contractor</td>
                <td>Service-based</td>
                <td>No employee benefits</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key Note */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">Key Note</p>
            <p className="text-sm my-0! text-foreground/80">
              Employment type, status, and benefits are clearly defined in all employment agreements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Equal Opportunity & Non-Discrimination */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Equal Opportunity & Non-Discrimination
        </h2>
        <p>
          Carisle Media is committed to fostering a work environment free from discrimination, harassment, and bias.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* We Ensure Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-status-success text-white px-4 py-3 font-medium">
              ✓ We Ensure
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Merit-based decisions",
                "Equal access to opportunities",
                "Reasonable accommodations",
                "Prompt complaint investigation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-status-success font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* We Prohibit Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
              ✗ We Prohibit
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Discrimination of any kind",
                "Harassment (verbal/physical/visual)",
                "Bias in hiring or promotions",
                "Retaliation against reporters",
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

      {/* 3. Code of Conduct & Professionalism */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Code of Conduct & Professionalism
        </h2>
        <p>
          All employees are expected to maintain the highest standards of professionalism, integrity, and ethical behavior.
        </p>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Professional Standards
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Perform duties competently and with integrity",
              "Maintain punctuality and accountability",
              "Treat all colleagues and clients with respect",
              "Protect confidential information",
              "Use company resources for work purposes only",
              "Avoid conflicts of interest",
              "Comply with all laws and company policies",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Alert */}
        <div className="bg-status-danger-bg border-l-4 border-status-danger p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Alert01Icon} size={20} className="text-status-danger shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-danger mb-1 text-sm">Important</p>
            <p className="text-sm my-0! text-foreground/80">
              Violations of the code may result in disciplinary action, up to and including termination.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Confidentiality & Data Privacy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          Confidentiality & Data Privacy
        </h2>
        <p>
          Compliance with the Philippine Data Privacy Act of 2012 (RA 10173) is mandatory for all employees.
        </p>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-8">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Data Protection Guidelines
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Never disclose confidential business, financial, or client information",
              "Only collect and process personal data for legitimate purposes",
              "Access sensitive data on a need-to-know basis only",
              "Use company systems responsibly and securely",
              "Report any suspected data breaches immediately to HR or DPO",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Conflict of Interest */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
          Conflict of Interest
        </h2>
        <p>
          Employees must avoid situations where personal interests interfere with professional responsibilities.
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Type of Conflict</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Outside Employment</td>
                <td>Working for a competitor</td>
              </tr>
              <tr>
                <td>Gifts & Favors</td>
                <td>Accepting items that influence decisions</td>
              </tr>
              <tr>
                <td>Misuse of Resources</td>
                <td>Using company property for personal gain</td>
              </tr>
              <tr>
                <td>Nepotism</td>
                <td>Supervising relatives without disclosure</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Responsibility Box */}
        <div className="bg-status-success-bg border-l-4 border-status-success p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Megaphone01Icon} size={20} className="text-status-success shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-success mb-1 text-sm">Your Responsibility</p>
            <p className="text-sm my-0! text-foreground/80">
              Disclose any actual or potential conflicts to management or HR immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
