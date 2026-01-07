import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Idea01Icon
} from "@hugeicons/core-free-icons";

export function RewardsRecognitionSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Rewards & Recognition
        </h1>
        <p className="text-muted-foreground">
          Carisle Media recognizes and rewards hard work, dedication, and achievements to foster a culture of appreciation and growth.
        </p>
      </div>

      {/* 1. Performance Incentives */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Performance Incentives
        </h2>
        
        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Types of Incentives
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Performance Bonuses (based on KPIs and targets)",
              "Recognition Awards (Employee of the Month/Quarter)",
              "Professional Development Sponsorship",
              "Priority for Promotions and Leadership Roles",
              "Special Perks (time off, vouchers, celebrations)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Recognition Categories */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Recognition Categories
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Award</th>
                <th>Recognition For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Performance Excellence</td>
                <td>Consistently exceeding KPIs and quality standards</td>
              </tr>
              <tr>
                <td className="font-semibold">Core Values Champion</td>
                <td>Embodying integrity, teamwork, and innovation</td>
              </tr>
              <tr>
                <td className="font-semibold">Rising Star</td>
                <td>Outstanding potential and rapid growth (new hires)</td>
              </tr>
              <tr>
                <td className="font-semibold">Leadership Award</td>
                <td>Demonstrating leadership and mentoring others</td>
              </tr>
              <tr>
                <td className="font-semibold">Team Collaboration</td>
                <td>Achieving results through teamwork</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Referral Bonus Program */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Referral Bonus Program
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Eligible Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-status-success text-white px-4 py-3 font-medium">
              ✓ Eligible
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Active employees & contractors",
                "Candidates not with CM in past 12 months",
                "Bonus after referral completes probation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-status-success font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Eligible Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
              ✗ Not Eligible
            </div>
            <div className="bg-card p-4 space-y-3">
              {[
                "Management-level positions",
                "Direct family members",
                "Former CM employees (<12 months)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-destructive font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Refer Box */}
        <div className="bg-status-success-bg border-l-4 border-status-success p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-success shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-success mb-1 text-sm">How to Refer</p>
            <p className="text-sm my-0! text-foreground/80">
              Submit candidate&apos;s name, resume, and contact info to HR BEFORE they apply. First submitted referral gets the bonus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
