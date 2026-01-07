import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Calendar01Icon, 
  Coins01Icon, 
  CalculatorIcon, 
  ShieldCheck, 
  FlashIcon, 
  Idea01Icon 
} from "@hugeicons/core-free-icons";

export function CompensationBenefitsSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Compensation & Benefits
        </h1>
        <p className="text-muted-foreground">
          Carisle Media Corporation is committed to supporting the well-being of its employees through competitive compensation and comprehensive benefits.
        </p>
      </div>

      {/* 1. Payroll Schedule */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Payroll Schedule
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cut-off Period</th>
                <th>Pay Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>26th (prev month) - 10th (current)</td>
                <td>15th of the month</td>
              </tr>
              <tr>
                <td>11th - 25th of the month</td>
                <td>30th of the month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Holiday Pay Dates Box */}
        <div className="bg-status-info/5 border-l-4 border-status-info p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Calendar01Icon} size={20} className="text-status-info shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-info mb-1 text-sm">Holiday Pay Dates</p>
            <p className="text-sm my-0! text-foreground/80">
              If a scheduled payroll date falls on a weekend or holiday, payment will be made on or before that date.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overtime Policy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Overtime Policy
        </h2>
        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            OT Requirements
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "All overtime must be pre-approved by Ms. Juliana",
              "Submit requests only AFTER receiving approval",
              "Unauthorized OT will NOT be compensated",
              "Approved OT reflects in next payroll cycle",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Salary Increases */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Salary Increases
        </h2>
        <p>
          All salary or service fee increases take effect on the first period of the month for streamlined processing.
        </p>
      </section>

      {/* 4. 13th Month Pay */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          13th Month Pay
        </h2>
        <div className="overflow-x-auto mt-6">
          <table className="border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-status-info/10 text-status-info border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={CalculatorIcon} size={16} /> Computation
                  </div>
                </th>
                <th className="bg-status-success-bg text-status-success border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={ShieldCheck} size={16} /> Eligibility
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Basic Salary ÷ 12</td>
                <td>All rank-and-file employees</td>
              </tr>
              <tr>
                <td>Paid on or before Dec 24</td>
                <td>Worked at least 1 month</td>
              </tr>
              <tr>
                <td>Pro-rated if resigned early</td>
                <td>Based on basic salary only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Government-Mandated Benefits */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
          Government-Mandated Benefits
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="w-[15%]">Benefit</th>
                <th className="w-[50%]">Coverage</th>
                <th className="w-[35%]">Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSS</td>
                <td>Sickness, maternity, disability, retirement, death</td>
                <td>Shared (Employee + Employer)</td>
              </tr>
              <tr>
                <td>PhilHealth</td>
                <td>Healthcare, hospitalization, medical consultations</td>
                <td>Shared (Employee + Employer)</td>
              </tr>
              <tr>
                <td>Pag-IBIG</td>
                <td>Savings programs, housing loans</td>
                <td>Shared (Employee + Employer)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tip Box */}
        <div className="bg-status-success-bg border-l-4 border-status-success p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-success shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-success mb-1 text-sm">Tip</p>
            <p className="text-sm my-0! text-foreground/80">
              Track your contributions through the respective government portals:{" "}
              <a href="https://my.sss.gov.ph" className="text-primary hover:underline" target="_blank">my.sss.gov.ph</a>,{" "}
              <a href="https://member.philhealth.gov.ph" className="text-primary hover:underline" target="_blank">member.philhealth.gov.ph</a>, and{" "}
              <a href="https://pagibigfundservices.com" className="text-primary hover:underline" target="_blank">pagibigfundservices.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* 6. HMO & Health Benefits */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">6</span>
          HMO & Health Benefits
        </h2>
        <p>
          Upon regularization, employees are enrolled in KwikCare Health Subscription Plan (Standard Plan).
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Coverage</th>
                <th>Waiting Period</th>
                <th>Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emergency cases</td>
                <td>15 days</td>
                <td>Up to MBL</td>
              </tr>
              <tr>
                <td>Doctor consultations</td>
                <td>15 days</td>
                <td>Up to MBL</td>
              </tr>
              <tr>
                <td>Inpatient & Outpatient</td>
                <td>6 months</td>
                <td>Up to MBL</td>
              </tr>
              <tr>
                <td>Lab & Diagnostics</td>
                <td>6 months</td>
                <td>Up to MBL</td>
              </tr>
              <tr>
                <td>Congenital conditions</td>
                <td>6 months</td>
                <td>50% of MBL</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Plan Details Box */}
        <div className="bg-status-info/5 border-l-4 border-status-info p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={FlashIcon} size={20} className="text-status-info shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-info mb-1 text-sm">Plan Details</p>
            <p className="text-sm my-0! text-foreground/80">
              Standard Plan: ₱1,250/month premium with ₱100,000 Maximum Benefit Limit (MBL) per illness per year.
            </p>
          </div>
        </div>
      </section>

      {/* 7. De Minimis Benefits */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">7</span>
          De Minimis Benefits (2025)
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Tax-Free Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rice Subsidy</td>
                <td>Up to ₱2,000/month</td>
              </tr>
              <tr>
                <td>Uniform/Clothing Allowance</td>
                <td>Up to ₱7,000/year</td>
              </tr>
              <tr>
                <td>Laundry Allowance</td>
                <td>Up to ₱300/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tax Note Box */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Coins01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">Tax Note</p>
            <p className="text-sm my-0! text-foreground/80">
              Amounts exceeding these limits are subject to the ₱90,000 annual ceiling for tax exemption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
