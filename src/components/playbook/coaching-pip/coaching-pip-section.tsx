// Server Component - no "use client" needed

export function CoachingPipSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Coaching & PIP SOP
        </h1>
        <p className="text-muted-foreground">
          Standard Operating Procedure for Performance Correction
        </p>
      </div>

      {/* Purpose */}
      <div className="bg-muted/50 p-4 rounded-lg my-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">Purpose:</strong> This document outlines how to address performance issues fairly, consistently, and with proper documentation. The goal is always to help team members succeed — separation is a last resort.
        </p>
      </div>

      {/* Section 1: Performance Issue Levels */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
        <span className="hidden">. </span>
        Performance Issue Levels
      </h2>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th className="bg-destructive/80 text-destructive-foreground">Level</th>
              <th className="bg-accent text-accent-foreground">Trigger</th>
              <th className="bg-primary/80 text-primary-foreground">Response</th>
              <th className="bg-primary text-primary-foreground">Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium bg-status-warning-bg dark:bg-status-warning/20">Level 1: Coaching</td>
              <td>Score 2.0-2.4 OR single issue noticed</td>
              <td>Verbal feedback + coaching</td>
              <td>2-4 weeks</td>
            </tr>
            <tr>
              <td className="font-medium bg-status-caution-bg dark:bg-status-caution/20">Level 2: Written Warning</td>
              <td>No improvement after coaching OR score 1.5-1.9</td>
              <td>Documented warning</td>
              <td>2 weeks</td>
            </tr>
            <tr>
              <td className="font-medium bg-status-danger-bg dark:bg-status-danger/20">Level 3: PIP</td>
              <td>No improvement after warning OR score &lt;1.5</td>
              <td>Formal PIP document</td>
              <td>30 days</td>
            </tr>
            <tr>
              <td className="font-medium bg-status-danger-bg-dark dark:bg-status-danger/30">Level 4: Separation</td>
              <td>PIP goals not met OR gross misconduct</td>
              <td>Termination</td>
              <td>Immediate or per contract</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2: Level 1 - Coaching Process */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3 mt-10">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
        <span className="hidden">. </span>
        Level 1: Coaching Process
      </h2>

      <div className="bg-muted/50 p-4 rounded-lg mb-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">When to use:</strong> First sign of underperformance, minor issues, skill gaps
        </p>
      </div>

      <h3 className="text-lg font-semibold text-primary mb-4">Steps:</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <span className="font-bold text-primary shrink-0">1.</span>
          <div>
            <p className="font-medium text-sm my-0!">Private conversation</p>
            <p className="text-xs text-muted-foreground my-0!">Describe the issue with specific examples</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <span className="font-bold text-primary shrink-0">2.</span>
          <div>
            <p className="font-medium text-sm my-0!">Listen</p>
            <p className="text-xs text-muted-foreground my-0!">Ask for their perspective, understand root cause</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <span className="font-bold text-primary shrink-0">3.</span>
          <div>
            <p className="font-medium text-sm my-0!">Agree on solution</p>
            <p className="text-xs text-muted-foreground my-0!">What needs to change, what support is needed</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <span className="font-bold text-primary shrink-0">4.</span>
          <div>
            <p className="font-medium text-sm my-0!">Set check-in date</p>
            <p className="text-xs text-muted-foreground my-0!">Usually 2-4 weeks</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <span className="font-bold text-primary shrink-0">5.</span>
          <div>
            <p className="font-medium text-sm my-0!">Document</p>
            <p className="text-xs text-muted-foreground my-0!">Brief notes in employee file (date, issue, agreed actions)</p>
          </div>
        </div>
      </div>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6 rounded-r-md">
        <p className="text-sm font-medium text-primary m-0">
          <strong>Outcome:</strong> If improved → return to normal. If not → escalate to Level 2.
        </p>
      </div>

      {/* Section 3: Level 2 - Written Warning */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3 mt-10">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
        <span className="hidden">. </span>
        Level 2: Written Warning
      </h2>

      <div className="bg-muted/50 p-4 rounded-lg mb-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">When to use:</strong> Coaching didn&apos;t work, or issue is more serious
        </p>
      </div>

      <h3 className="text-lg font-semibold text-primary mb-4">Written Warning Must Include:</h3>
      <ul className="space-y-2">
        <li>Date and employee name</li>
        <li>Specific performance issues (with examples)</li>
        <li>Previous coaching attempts (dates, what was discussed)</li>
        <li>Expected improvement (specific, measurable)</li>
        <li>Timeline for improvement (usually 2 weeks)</li>
        <li>Consequences if not improved (PIP)</li>
        <li>Employee signature acknowledging receipt</li>
      </ul>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6 rounded-r-md">
        <p className="text-sm font-medium text-primary m-0">
          <strong>Outcome:</strong> If improved → return to normal (warning stays on file 6 months). If not → escalate to PIP.
        </p>
      </div>

      {/* Section 4: Level 3 - Performance Improvement Plan (PIP) */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3 mt-10">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
        <span className="hidden">. </span>
        Level 3: Performance Improvement Plan (PIP)
      </h2>

      <div className="bg-muted/50 p-4 rounded-lg mb-6">
        <p className="text-sm my-0!">
          <strong className="text-primary">When to use:</strong> Serious performance issues, pattern of underperformance, written warning didn&apos;t work
        </p>
      </div>

      <h3 className="text-lg font-semibold text-primary mb-4">PIP Document Must Include:</h3>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th className="w-1/3">Section</th>
              <th>Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Performance Gaps</td>
              <td>Specific issues with data/examples from evaluations</td>
            </tr>
            <tr>
              <td className="font-medium">Success Criteria</td>
              <td>SMART goals — what &quot;success&quot; looks like at end of PIP</td>
            </tr>
            <tr>
              <td className="font-medium">Support Provided</td>
              <td>Training, resources, additional check-ins, mentor</td>
            </tr>
            <tr>
              <td className="font-medium">Check-in Schedule</td>
              <td>Weekly meetings during 30-day period</td>
            </tr>
            <tr>
              <td className="font-medium">Timeline</td>
              <td>30 days (start and end date)</td>
            </tr>
            <tr>
              <td className="font-medium">Consequences</td>
              <td>Clear statement: failure to meet goals may result in termination</td>
            </tr>
            <tr>
              <td className="font-medium">Signatures</td>
              <td>Employee, Manager/Founder, HR (if applicable)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6 rounded-r-md">
        <p className="text-sm font-medium text-primary m-0">
          <strong>Outcome:</strong> If goals met → PIP closed, return to normal monitoring. If not → separation.
        </p>
      </div>

      {/* Section 5: Immediate Termination (Gross Misconduct) */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3 mt-10">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
        <span className="hidden">. </span>
        Immediate Termination (Gross Misconduct)
      </h2>

      <div className="bg-destructive/10 border-l-4 border-destructive pl-6 pr-4 py-3 my-4">
        <p className="text-sm font-medium text-destructive m-0">
          Some behaviors bypass the progressive discipline process and result in immediate termination:
        </p>
      </div>

      <ul className="space-y-2">
        <li>Theft or fraud</li>
        <li>Violence or threats of violence</li>
        <li>Harassment or discrimination</li>
        <li>Sharing confidential client information</li>
        <li>Intentional damage to company property or reputation</li>
        <li>Working while under influence of drugs/alcohol</li>
      </ul>

      {/* Section 6: Documentation & Storage */}
      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3 mt-10">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">6</span>
        <span className="hidden">. </span>
        Documentation & Storage
      </h2>

      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-sm my-0!">All records stored:</p>
            <p className="text-xs text-muted-foreground my-0!">HR folder (restricted access — Founder only)</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-sm my-0!">Coaching notes:</p>
            <p className="text-xs text-muted-foreground my-0!">Kept for 6 months after resolution</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-sm my-0!">Written warnings:</p>
            <p className="text-xs text-muted-foreground my-0!">Kept for 1 year after resolution</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-sm my-0!">PIP documents:</p>
            <p className="text-xs text-muted-foreground my-0!">Kept for duration of employment + 2 years</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-sm my-0!">Termination records:</p>
            <p className="text-xs text-muted-foreground my-0!">Kept permanently</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Owner: Founder
        </p>
      </div>
    </div>
  );
}
