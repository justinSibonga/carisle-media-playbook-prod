// ✅ Server Component by default
import React from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon } from "@hugeicons/core-free-icons";

export function TrainingPlanSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="text-accent! font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Training Plan
        </h1>
        <p className="text-muted-foreground">
          GHL University + Role-Specific Training Requirements
        </p>
      </div>

      <h2 id="purpose">Purpose</h2>
      <p>
        Ensure all team members have the skills needed to perform their role. Training must be completed within specified deadlines and proof of completion provided.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
        <span className="hidden">. </span>
        GHL University Training Matrix
      </h2>
      <p><strong>Access:</strong> app.gohighlevel.com → Settings → GHL University</p>
      
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>GHL Course</th>
              <th className="text-center bg-accent/20 text-foreground">Ops</th>
              <th className="text-center bg-accent/20 text-foreground">Marketing</th>
              <th className="text-center bg-accent/20 text-foreground">Web Dev</th>
              <th className="text-center bg-accent/10">Finance</th>
              <th className="text-center bg-accent/10">HR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">GHL Overview & Navigation</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">CRM & Contacts</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Conversations & Communication</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Funnels & Landing Pages</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Website Builder</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Email Marketing</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Workflows & Automations</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Calendars & Appointments</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Pipelines & Opportunities</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="font-semibold">Reporting & Dashboards</td>
              <td className="text-center text-status-success bg-status-success-bg"><HugeiconsIcon icon={Tick01Icon} className="w-5 h-5 mx-auto" /></td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
              <td className="text-center text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
        <span className="hidden">. </span>
        Training Deadlines
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Training Type</th>
              <th className="w-1/3">Deadline</th>
              <th>Verified By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">GHL Core Modules</td>
              <td className="text-accent font-bold">End of Week 2</td>
              <td>Manager</td>
            </tr>
            <tr>
              <td className="font-semibold">GHL Advanced Modules</td>
              <td className="text-accent font-bold">End of Week 4 (30 days)</td>
              <td>Manager</td>
            </tr>
            <tr>
              <td className="font-semibold">Company SOPs & Processes</td>
              <td className="text-accent font-bold">End of Week 1</td>
              <td>HR Coordinator</td>
            </tr>
            <tr>
              <td className="font-semibold">Role-Specific Tools</td>
              <td className="text-accent font-bold">End of Week 3</td>
              <td>Manager</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
        <span className="hidden">. </span>
        Proof of Completion
      </h2>
      <p><strong>Required documentation:</strong></p>
      <ul>
        <li><strong>GHL University:</strong> Screenshot of completed modules dashboard showing 100% completion</li>
        <li><strong>GHL Certification:</strong> PDF certificate (if available for module)</li>
        <li><strong>Company SOPs:</strong> Signed acknowledgment form</li>
        <li><strong>Tool Training:</strong> Manager sign-off on competency checklist</li>
      </ul>
      <p className="mt-4"><strong>Storage:</strong> All proof saved to employee&apos;s folder: HR &gt; [Employee Name] &gt; Training</p>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
        <span className="hidden">. </span>
        Ongoing Training Requirements
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Frequency</th>
              <th>Applies To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">GHL New Feature Updates</td>
              <td>As released</td>
              <td>Ops, Marketing, Web Dev</td>
            </tr>
            <tr>
              <td className="font-semibold">Process/SOP Updates</td>
              <td>When updated</td>
              <td>All team</td>
            </tr>
            <tr>
              <td className="font-semibold">Skill Development Training</td>
              <td>Quarterly</td>
              <td>Per development plan</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
