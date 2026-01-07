import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon, CheckmarkCircle01Icon, Alert01Icon } from "@hugeicons/core-free-icons";
import { FlowArrow } from "@/components/ui/flow-arrow";

export function ProcessMapsSection() {
  return (
    <div className="animate-fade-in prose-handbook space-y-12">
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Process Maps & Flowcharts
        </h1>
        <p className="text-muted-foreground">
          Visual guides for GHL / Automation Workflow Setup and End-to-End Service Delivery
        </p>
      </div>

      {/* End-to-End Journey Overview */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          End-to-End Journey Overview
        </h2>
        <p className="text-muted-foreground mb-6 flex items-center gap-1 flex-wrap">
          <span>Lead</span> <FlowArrow /> <span>Close</span> <FlowArrow /> <span>Delivery</span> <FlowArrow /> <span>Retainer</span>
        </p>

        {/* Responsive Grid - wraps on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Phase 1: Sales */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-sidebar text-sidebar-foreground px-4 py-2 text-sm font-medium">
              Phase 1: Sales
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Lead Capture</span>
                <span className="text-muted-foreground text-xs ml-auto">Ads/Website</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Discovery Call</span>
                <span className="text-muted-foreground text-xs ml-auto">15-30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Strategy Call</span>
                <span className="text-muted-foreground text-xs ml-auto">30-45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Proposal</span>
                <span className="text-muted-foreground text-xs ml-auto">24-48 hrs</span>
              </div>
              <div className="pt-2 mt-2 border-t border-border flex items-center justify-between">
                <span className="font-medium text-accent flex items-center gap-1">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4" /> Close
                </span>
                <span className="text-xs text-muted-foreground">1-2 weeks</span>
              </div>
            </div>
          </div>

          {/* Phase 2: Onboard */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-sidebar text-sidebar-foreground px-4 py-2 text-sm font-medium">
              Phase 2: Onboard
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Kick-off Call</span>
                <span className="text-muted-foreground text-xs ml-auto">Week 0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Asset Collection</span>
                <span className="text-muted-foreground text-xs ml-auto">Client inputs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Project Setup</span>
                <span className="text-muted-foreground text-xs ml-auto">GHL Account</span>
              </div>
              <div className="pt-2 mt-2 border-t border-border flex items-center justify-end">
                <span className="text-xs text-muted-foreground">1 week</span>
              </div>
            </div>
          </div>

          {/* Phase 3: Delivery */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-sidebar text-sidebar-foreground px-4 py-2 text-sm font-medium">
              Phase 3: Delivery
            </div>
            <div className="p-4 text-sm">
              <div className="grid grid-cols-5 gap-1 text-center mb-3">
                <div className="bg-muted rounded px-1 py-1 text-xs font-medium">W1</div>
                <div className="bg-muted rounded px-1 py-1 text-xs font-medium">W2</div>
                <div className="bg-muted rounded px-1 py-1 text-xs font-medium">W3</div>
                <div className="bg-muted rounded px-1 py-1 text-xs font-medium">W4</div>
                <div className="bg-muted rounded px-1 py-1 text-xs font-medium">W5</div>
              </div>
              <div className="grid grid-cols-5 gap-1 text-center text-[10px] text-muted-foreground">
                <span>Foundation</span>
                <span>Pages</span>
                <span>Emails</span>
                <span>Workflows</span>
                <span>Launch</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">Weekly sign-offs required</p>
              <div className="pt-2 mt-2 border-t border-border flex items-center justify-end">
                <span className="text-xs text-muted-foreground">5 weeks</span>
              </div>
            </div>
          </div>

          {/* Handoff */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
              Handoff
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Training Call</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Documentation</span>
              </div>
              <div className="pt-2 mt-2 border-t border-border flex items-center justify-between">
                <span className="font-medium text-accent flex items-center gap-1">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4" /> Go-Live
                </span>
                <span className="text-xs text-muted-foreground">1 week</span>
              </div>
            </div>
          </div>

          {/* Retainer */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-muted text-muted-foreground px-4 py-2 text-sm font-medium">
              Retainer
            </div>
            <div className="p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Ads Management</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Lead Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Ongoing Support</span>
              </div>
              <div className="pt-2 mt-2 border-t border-border flex items-center justify-end">
                <span className="text-xs text-muted-foreground">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Week Delivery Timeline */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          5-Week Delivery Timeline
        </h2>
        <p className="text-muted-foreground mb-6">Phase 3: Done-For-You Build</p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Carisle Delivers</th>
                <th>Client Provides</th>
                <th>Gate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Week 1</td>
                <td>• GHL setup<br/>• Pipeline structure<br/>• Funnel strategy<br/>• Brand upload</td>
                <td className="text-muted-foreground">• Brand assets<br/>• Business info<br/>• Offer details<br/>• Target audience<br/>• Access credentials</td>
                <td className="text-accent font-medium"><HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 inline mr-1" /> Strategy Sign-off</td>
              </tr>
              <tr>
                <td className="font-medium">Week 2</td>
                <td>• Landing pages<br/>• Thank you pages<br/>• Opt-in forms<br/>• Mobile design<br/>• Funnel flow</td>
                <td className="text-muted-foreground">• Testimonials<br/>• Product images<br/>• Copy inputs<br/>• Headshots</td>
                <td className="text-accent font-medium"><HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 inline mr-1" /> Design Approval</td>
              </tr>
              <tr>
                <td className="font-medium">Week 3</td>
                <td>• Nurture sequence<br/>• Reminders<br/>• Follow-ups<br/>• Email templates<br/>• SMS templates</td>
                <td className="text-muted-foreground">• FAQs<br/>• Case studies<br/>• Sequence review & approval</td>
                <td className="text-accent font-medium"><HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 inline mr-1" /> Sequence Approval</td>
              </tr>
              <tr>
                <td className="font-medium">Week 4</td>
                <td>• Calendar/booking<br/>• Automations<br/>• Pipeline rules<br/>• Tag logic<br/>• Integrations</td>
                <td className="text-muted-foreground">• Availability<br/>• Integration credentials<br/>• Workflow review</td>
                <td className="text-accent font-medium"><HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 inline mr-1" /> Workflow Approval</td>
              </tr>
              <tr>
                <td className="font-medium">Week 5</td>
                <td>• End-to-end testing<br/>• Bug fixes<br/>• Training call<br/>• Documentation<br/>• Go-live</td>
                <td className="text-muted-foreground">• Attend training<br/>• Final sign-off<br/>• Go-live confirmation</td>
                <td className="font-bold text-accent"><HugeiconsIcon icon={Tick01Icon} className="w-4 h-4 inline mr-1" /> GO-LIVE!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-4 italic">
          Each milestone requires client sign-off before proceeding. Client delays push timeline accordingly.
        </p>
      </section>

      {/* Responsibility Swim Lane */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Responsibility Swim Lane
        </h2>
        <p className="text-muted-foreground mb-6">Who Does What During Delivery</p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Carisle Media (Delivers)</th>
                <th>Client (Provides)</th>
                <th>Gate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Week 0</td>
                <td>• Kick-off call<br/>• Send onboarding form<br/>• Project setup</td>
                <td className="text-muted-foreground">• Complete onboarding form<br/>• Provide all brand assets<br/>• Grant access credentials</td>
                <td className="font-medium">Form Complete</td>
              </tr>
              <tr>
                <td className="font-medium">Week 1</td>
                <td>• GHL account setup<br/>• Pipeline structure<br/>• Funnel strategy map</td>
                <td className="text-muted-foreground">• Review strategy<br/>• Provide any missing info<br/>• Approve within 48 hrs</td>
                <td className="font-medium">Strategy Approved</td>
              </tr>
              <tr>
                <td className="font-medium">Week 2</td>
                <td>• Landing page build<br/>• Thank you pages<br/>• Forms & funnel flow</td>
                <td className="text-muted-foreground">• Provide testimonials<br/>• Provide images<br/>• Approve design/copy</td>
                <td className="font-medium">Design Approved</td>
              </tr>
              <tr>
                <td className="font-medium">Week 3</td>
                <td>• Nurture sequence<br/>• Reminder emails<br/>• SMS templates</td>
                <td className="text-muted-foreground">• Provide FAQs<br/>• Provide case studies<br/>• Approve sequences</td>
                <td className="font-medium">Sequences Approved</td>
              </tr>
              <tr>
                <td className="font-medium">Week 4</td>
                <td>• Calendar/booking<br/>• Automations<br/>• Integrations</td>
                <td className="text-muted-foreground">• Confirm availability<br/>• Provide integrations<br/>• Approve workflow logic</td>
                <td className="font-medium">Workflows Approved</td>
              </tr>
              <tr>
                <td className="font-medium">Week 5</td>
                <td>• End-to-end testing<br/>• Training call<br/>• Documentation</td>
                <td className="text-muted-foreground">• Attend training<br/>• Final sign-off<br/>• Confirm go-live</td>
                <td className="font-bold text-accent">GO-LIVE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-4 mt-4 rounded-r-md">
          <p className="text-sm font-medium text-primary">
            Client 48-hour SLA on all approvals. Delays push timeline accordingly.
          </p>
        </div>
      </section>

      {/* Escalation Summary */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Escalation Quick Reference
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Operations Coordinator Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-accent text-accent-foreground px-4 py-3 font-medium">
              Operations Coordinator Handles
            </div>
            <div className="bg-card p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Client questions & complaints</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Schedule changes ≤ 48 hrs</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Discounts ≤ 10%</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Minor scope additions ≤ 2 hrs</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Bug fixes & technical issues</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-4 h-4 text-accent shrink-0" />
                <span>Process & task prioritization</span>
              </div>
            </div>
          </div>

          {/* Founder Required Card */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-destructive text-destructive-foreground px-4 py-3 font-medium">
              Founder Required
            </div>
            <div className="bg-card p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Client threatening to leave</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Refunds &gt; ₱5,000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Contract/pricing changes</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Major scope changes &gt; 2 hrs</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Termination decisions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HugeiconsIcon icon={Alert01Icon} className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Legal/security concerns</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-8 mb-4">Response Times by Severity</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 border border-red-500 dark:bg-red-900/30 dark:text-red-400">
                    P1 - Critical
                  </span>
                </td>
                <td>Within 1 hour</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                    P2 - High
                  </span>
                </td>
                <td>Within 4 hours</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400">
                    P3 - Medium
                  </span>
                </td>
                <td>Within 24 hours</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-500 dark:bg-green-900/30 dark:text-green-400">
                    P4 - Low
                  </span>
                </td>
                <td>Within 48 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6 rounded-r-md">
          <p className="text-sm font-medium text-primary">
            Always escalate with context + recommendation. Never escalate without trying to solve first.
          </p>
        </div>
      </section>
    </div>
  );
}
