// ✅ Server Component by default
import React from 'react';

export function HiringSopSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      {/* Header Block */}
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Hiring Pipeline SOP
        </h1>
        <p className="text-muted-foreground">
          Standard Operating Procedure for Recruiting & Hiring
        </p>
      </div>

      <h2 id="purpose">Purpose</h2>
      <p>
        Ensure consistent, efficient hiring that fills roles quickly with quality candidates while providing a professional candidate experience.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
        <span className="hidden">. </span>
        Hiring Pipeline Stages
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Stage</th>
              <th>What Happens</th>
              <th>Owner</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">1</td>
              <td className="font-semibold">Job Posting</td>
              <td>Create JD, post to job boards, share in networks</td>
              <td>HR Coordinator</td>
              <td>Day 1</td>
            </tr>
            <tr>
              <td className="font-bold">2</td>
              <td className="font-semibold">Application Review</td>
              <td>Screen resumes, filter qualified candidates</td>
              <td>HR Coordinator</td>
              <td>Within 24hrs</td>
            </tr>
            <tr>
              <td className="font-bold">3</td>
              <td className="font-semibold">Initial Screening</td>
              <td>15-min phone/video call, basic fit check</td>
              <td>HR Coordinator</td>
              <td>Day 2</td>
            </tr>
            <tr>
              <td className="font-bold">4</td>
              <td className="font-semibold">Skills Assessment</td>
              <td>Role-specific test or task (1-2 hrs)</td>
              <td>HR + Ops</td>
              <td>Days 2-3</td>
            </tr>
            <tr>
              <td className="font-bold">5</td>
              <td className="font-semibold">Ops Interview</td>
              <td>30-45 min interview with Ops Coordinator</td>
              <td>Ops Coordinator</td>
              <td>Days 3-4</td>
            </tr>
            <tr>
              <td className="font-bold">6</td>
              <td className="font-semibold">Founder Interview</td>
              <td>30 min final interview, culture fit</td>
              <td>Founder</td>
              <td>Days 4-5</td>
            </tr>
            <tr>
              <td className="font-bold">7</td>
              <td className="font-semibold">Reference Check</td>
              <td>Contact 2 references</td>
              <td>HR Coordinator</td>
              <td>Days 5-6</td>
            </tr>
            <tr>
              <td className="font-bold">8</td>
              <td className="font-semibold">Offer & Contract</td>
              <td>Extend offer, negotiate, send contract</td>
              <td>Founder + HR</td>
              <td>Day 7</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
        <p className="text-sm font-medium text-primary m-0">
          <strong>Target:</strong> Job posting to signed contract in 7 business days
        </p>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
        <span className="hidden">. </span>
        Role Responsibilities
      </h2>
      
      <h3 className="text-primary mt-6 mb-2">HR Coordinator</h3>
      <ul>
        <li>Create and post job descriptions</li>
        <li>Screen all applications within 48 hours</li>
        <li>Conduct initial screening calls</li>
        <li>Coordinate interview scheduling</li>
        <li>Send skills assessments</li>
        <li>Conduct reference checks</li>
        <li>Prepare offer letters and contracts</li>
        <li>Send rejection emails to unsuccessful candidates</li>
        <li>Maintain hiring tracker and provide weekly report</li>
      </ul>

      <h3 className="text-primary mt-6 mb-2">Ops Coordinator</h3>
      <ul>
        <li>Define role requirements and success criteria</li>
        <li>Review skills assessment results</li>
        <li>Conduct Ops interview</li>
        <li>Complete interview scorecard</li>
        <li>Provide hire/no-hire recommendation</li>
      </ul>

      <h3 className="text-primary mt-6 mb-2">Founder</h3>
      <ul>
        <li>Approve job posting before publishing</li>
        <li>Conduct final culture-fit interview</li>
        <li>Make final hiring decision</li>
        <li>Approve compensation package</li>
      </ul>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
        <span className="hidden">. </span>
        Weekly Hiring Report
      </h2>
      <p className="mb-2"><strong>Due:</strong> Every Friday by 10:00 PM | <strong>Submitted to:</strong> Founder</p>
      <p className="mb-4">Report must include:</p>
      
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Open Positions</td>
              <td>List of all active job postings with days open</td>
            </tr>
            <tr>
              <td className="font-semibold">Pipeline Summary</td>
              <td># of candidates at each stage per role</td>
            </tr>
            <tr>
              <td className="font-semibold">This Week&apos;s Activity</td>
              <td>Applications received, screenings done, interviews conducted</td>
            </tr>
            <tr>
              <td className="font-semibold">Top Candidates</td>
              <td>Names and status of candidates in Stage 5+</td>
            </tr>
            <tr>
              <td className="font-semibold">Blockers / Needs</td>
              <td>Any issues slowing hiring, decisions needed from Founder</td>
            </tr>
            <tr>
              <td className="font-semibold">Next Week Plan</td>
              <td>Planned interviews, expected offers, next actions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
        <span className="hidden">. </span>
        Job Posting Channels
      </h2>
      <ul>
        <li><strong>OnlineJobs.ph</strong> — Primary for PH-based roles</li>
        <li><strong>LinkedIn</strong> — For senior/specialized roles</li>
        <li><strong>Facebook Groups</strong> — VA and freelancer communities</li>
        <li><strong>Referrals</strong> — Team referral bonus program</li>
      </ul>

      <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
        <span className="hidden">. </span>
        Candidate Communication SLAs
      </h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Acknowledge application</td>
              <td>Within 24 hours (auto-reply OK)</td>
            </tr>
            <tr>
              <td className="font-semibold">Schedule screening after resume review</td>
              <td>Within 24 hours of application</td>
            </tr>
            <tr>
              <td className="font-semibold">Send rejection to non-qualified</td>
              <td>Within 2 business days of application</td>
            </tr>
            <tr>
              <td className="font-semibold">Post-interview feedback</td>
              <td>Within 24 hours of interview</td>
            </tr>
            <tr>
              <td className="font-semibold">Extend offer to selected candidate</td>
              <td>Same day as final decision</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
