import { HugeiconsIcon } from "@hugeicons/react";
import { Message01Icon, Video01Icon, Call02Icon, Mail01Icon, SmartPhone01Icon, Tick01Icon, UserGroupIcon } from "@hugeicons/core-free-icons";

export function CommunicationRulesSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Communication Rules
        </h1>
        <p className="text-muted-foreground">
          When to Use What Channel + Response Time Expectations
        </p>
      </div>

      {/* Section 1: Group Chat Structure */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
          <span className="hidden">. </span>
          Group Chat Structure
        </h2>

        <div className="overflow-x-auto mb-6">
          <table>
            <thead>
              <tr>
                <th>Group Chat</th>
                <th>Platform</th>
                <th>Who&apos;s In It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Internal Client GC <span className="text-muted-foreground font-normal text-xs block">(Team discussions)</span></td>
                <td className="font-medium text-accent">Lark</td>
                <td>Ops + Marketing + Web Dev</td>
              </tr>
              <tr>
                <td className="font-medium">Client-Facing GC <span className="text-muted-foreground font-normal text-xs block">(Client communication)</span></td>
                <td className="font-medium text-status-success">WhatsApp</td>
                <td>Ops + Marketing + Founder + <strong>Client</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg mb-6">
          <p className="text-sm my-0!">
            <strong className="text-primary">Naming Convention:</strong>{" "}
            [Client Abbreviation] - Internal <span className="text-muted-foreground mx-2">|</span> [Client Name] - Carisle
          </p>
          <p className="text-xs text-muted-foreground mt-2 mb-0!">
            Example: <span className="font-mono text-accent">XB - Internal</span> (Lark) <span className="mx-2">|</span> <span className="font-mono text-status-success">XBathrooms - Carisle</span> (WhatsApp)
          </p>
        </div>
      </section>

      {/* Section 2: When to Use Each Channel */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
          <span className="hidden">. </span>
          When to Use Each Channel
        </h2>

        <div className="overflow-x-auto mb-6">
          <table>
            <thead>
              <tr>
                <th className="w-40">Channel</th>
                <th>Use For</th>
                <th className="w-48">Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium flex items-center gap-2">
                  <HugeiconsIcon icon={Message01Icon} className="w-4 h-4 text-accent" /> Lark <span className="text-xs text-muted-foreground">(Internal)</span>
                </td>
                <td>Daily updates, task discussions, quick questions, file sharing, internal coordination</td>
                <td className="font-bold">Same business day</td>
              </tr>
              <tr>
                <td className="font-medium flex items-center gap-2">
                  <HugeiconsIcon icon={SmartPhone01Icon} className="w-4 h-4 text-status-success" /> WhatsApp <span className="text-xs text-muted-foreground">(Client)</span>
                </td>
                <td>Client updates, quick approvals, scheduling, relationship building</td>
                <td className="font-bold text-amber-500">Within 4 hours</td>
              </tr>
              <tr>
                <td className="font-medium flex items-center gap-2">
                  <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4 text-status-info" /> Email
                </td>
                <td>Formal deliverables, contracts, invoices, milestone sign-offs, documentation</td>
                <td className="font-bold">Within 24 hours</td>
              </tr>
              <tr>
                <td className="font-medium flex items-center gap-2">
                  <HugeiconsIcon icon={Video01Icon} className="w-4 h-4 text-purple-500" /> Video Call
                </td>
                <td>Weekly check-ins, strategy discussions, training, complex issues</td>
                <td className="font-bold">Scheduled</td>
              </tr>
              <tr>
                <td className="font-medium flex items-center gap-2">
                  <HugeiconsIcon icon={Call02Icon} className="w-4 h-4 text-destructive" /> Phone Call
                </td>
                <td><span className="text-destructive font-bold">URGENT ONLY:</span> System down, critical blocker, time-sensitive issue</td>
                <td className="font-bold text-destructive">Immediate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Response Time by Priority */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
          <span className="hidden">. </span>
          Response Time by Priority
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-32">Priority</th>
                <th>Examples</th>
                <th className="w-48">Respond Within</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 border border-red-500 dark:bg-red-900/30 dark:text-red-400">
                    P1 - Critical
                  </span>
                </td>
                <td>System down, payment issue, launch blocker</td>
                <td className="font-bold text-destructive">1 hour</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                    P2 - High
                  </span>
                </td>
                <td>Client waiting on approval, deadline at risk</td>
                <td className="font-bold text-amber-600">4 hours</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400">
                    P3 - Medium
                  </span>
                </td>
                <td>Standard client messages, internal questions</td>
                <td className="font-bold">Same day</td>
              </tr>
              <tr>
                <td>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-500 dark:bg-green-900/30 dark:text-green-400">
                    P4 - Low
                  </span>
                </td>
                <td>FYIs, non-urgent updates, nice-to-haves</td>
                <td className="font-bold">24-48 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Meeting Etiquette */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
          <span className="hidden">. </span>
          Meeting Etiquette
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Client Meetings */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-sidebar text-sidebar-foreground px-4 py-3 font-medium flex items-center gap-2">
              <HugeiconsIcon icon={UserGroupIcon} className="w-4 h-4" />
              Client Meetings
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
                  </div>
                  <span><strong>Camera ON</strong> — Always on video for client meetings</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
                  </div>
                  <span><strong>Record ALL calls</strong> — Save to Training &amp; Docs folder</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
                  </div>
                  <span><strong>AI Summary within 24h</strong> — Post to Internal Lark GC</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-accent flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-accent" />
                  </div>
                  <span><strong>5 min early</strong> — Join before client</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Internal Meetings */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-muted text-muted-foreground px-4 py-3 font-medium flex items-center gap-2">
              <HugeiconsIcon icon={UserGroupIcon} className="w-4 h-4" />
              Internal Meetings
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span><strong>Agenda required</strong> — No agenda, no meeting</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span><strong>Start on time</strong> — Don&apos;t wait for latecomers</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={Tick01Icon} className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span><strong>End with action items</strong> — Who does what by when</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
      </div>
    </div>
  );
}


