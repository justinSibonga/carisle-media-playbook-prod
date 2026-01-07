import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Clock01Icon, 
  Home01Icon, 
  Alert01Icon, 
  Idea01Icon,
  Calendar01Icon
} from "@hugeicons/core-free-icons";

export function WorkHoursAttendanceSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          HR Policies
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Work Hours & Attendance
        </h1>
        <p className="text-muted-foreground">
          Carisle Media Corporation establishes standard work hours to ensure productivity, collaboration, and operational efficiency.
        </p>
      </div>

      {/* 1. Standard Work Schedule */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          Standard Work Schedule
        </h2>
        
        <div className="overflow-x-auto">
          <table className="border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-status-info/10 text-status-info border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={Clock01Icon} size={16} /> Work Hours
                  </div>
                </th>
                <th className="bg-status-success-bg text-status-success border-b-0">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={Home01Icon} size={16} /> Work Arrangement
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:00 PM - 10:00 PM</td>
                <td>4 days: Work From Home</td>
              </tr>
              <tr>
                <td>Monday to Friday</td>
                <td>1 day: Onsite (Fridays)</td>
              </tr>
              <tr>
                <td>1-hour break included</td>
                <td>Core hours availability required</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Time Tracking Box */}
        <div className="bg-status-info/5 border-l-4 border-status-info p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Calendar01Icon} size={20} className="text-status-info shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-info mb-1 text-sm">Time Tracking</p>
            <p className="text-sm my-0! text-foreground/80">
              All employees must log in and log out using Sprout at the start and end of their shifts. This applies to both WFH and onsite days.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tardiness Policy */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          Tardiness Policy
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            Attendance Rules
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "10-minute grace period for late clock-ins",
              "Minutes beyond grace period = deduction",
              "Frequent tardiness = disciplinary action",
              "Ensure time records are accurate",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Overtime & Holiday Pay */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          Overtime & Holiday Pay
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Work Type</th>
                <th>Pay Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Regular OT (beyond 8 hrs)</td>
                <td className="font-medium text-accent">+25% of hourly rate</td>
              </tr>
              <tr>
                <td>Rest Day/Special Day OT</td>
                <td className="font-medium text-accent">+30% of hourly rate</td>
              </tr>
              <tr>
                <td>Work on Rest Day</td>
                <td className="font-medium text-accent">+30% of daily rate (first 8 hrs)</td>
              </tr>
              <tr>
                <td>Regular Holiday (worked)</td>
                <td className="font-medium text-accent">200% of daily rate</td>
              </tr>
              <tr>
                <td>Regular Holiday (not worked)</td>
                <td className="font-medium text-accent">100% of daily rate</td>
              </tr>
              <tr>
                <td>Special Holiday (worked)</td>
                <td className="font-medium text-accent">+30% of daily rate</td>
              </tr>
              <tr>
                <td>Special Holiday (not worked)</td>
                <td>No work, no pay</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* OT Reminder */}
        <div className="bg-status-warning-bg/50 border-l-4 border-status-warning p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Alert01Icon} size={20} className="text-status-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-warning mb-1 text-sm">OT Reminder</p>
            <p className="text-sm my-0! text-foreground/80">
              The Company does not encourage overtime. Prior approval from supervisor is REQUIRED before rendering additional hours.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Leave Benefits */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          Leave Benefits
        </h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Days</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vacation Leave (VL)</td>
                <td>6 days/year</td>
                <td>Upon regularization</td>
              </tr>
              <tr>
                <td>Sick Leave (SL)</td>
                <td>6 days/year</td>
                <td>Upon regularization</td>
              </tr>
              <tr>
                <td>Maternity Leave</td>
                <td>105 days paid</td>
                <td>Female employees (RA 11210)</td>
              </tr>
              <tr>
                <td>Paternity Leave</td>
                <td>7 days paid</td>
                <td>Married males (first 4 deliveries)</td>
              </tr>
              <tr>
                <td>Solo Parent Leave</td>
                <td>7 days paid</td>
                <td>After 1 year of service</td>
              </tr>
              <tr>
                <td>Gynecological Leave</td>
                <td>60 days paid</td>
                <td>Post-surgery (RA 9710)</td>
              </tr>
              <tr>
                <td>VAWC Leave</td>
                <td>10 days paid</td>
                <td>RA 9262</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note Box */}
        <div className="bg-status-success-bg border-l-4 border-status-success p-4 my-6 rounded-r-lg flex gap-3 items-start">
          <HugeiconsIcon icon={Idea01Icon} size={20} className="text-status-success shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-status-success mb-1 text-sm">Note</p>
            <p className="text-sm my-0! text-foreground/80">
              Unused VL and SL are NOT convertible to cash and cannot be carried over to the following year.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Remote Work Guidelines */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
          Remote Work Guidelines
        </h2>

        <div className="bg-status-info/5 p-6 rounded-xl border border-status-info/20 mb-6">
          <h3 className="text-lg font-bold text-status-info mt-0 mb-4 flex items-center gap-2">
            WFH Requirements
          </h3>
          <ul className="space-y-2 list-none ml-0!">
            {[
              "Adhere to agreed work schedule",
              "Stay accessible via email and Lark during work hours",
              "Maintain a safe, quiet, productive workspace",
              "Follow data privacy and security policies",
              "Submit SOD and EOD reports daily",
              "Attend all scheduled virtual meetings on time",
              "Report technical issues immediately",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-status-success mt-1">▶</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
