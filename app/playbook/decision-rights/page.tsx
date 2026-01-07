"use client";

import { PlaybookPageLayout } from "@/components/playbook-page-layout";

export function DecisionRightsSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Decision Rights
        </h1>
        <p className="text-muted-foreground">
          Defining who can make what decisions without Founder approval to enable maximum delegation.
        </p>
      </div>

      <h2 id="purpose">Purpose</h2>
      <p>
        This document defines <strong>WHO</strong> can make <strong>WHAT</strong> decisions <strong>WITHOUT</strong> Founder approval.
      </p>
      <p>
        The goal is <strong>MAXIMUM DELEGATION</strong>:
      </p>
      <ul>
        <li>Team members should be able to make most decisions independently</li>
        <li>Founder approval is only required for high-impact/high-risk decisions</li>
        <li>When in doubt, refer to the thresholds defined here</li>
      </ul>

      <h3 id="how-to-use">How to Use</h3>
      <ol>
        <li>Find the decision category (Financial, Client, HR, etc.)</li>
        <li>Check if your decision falls within &quot;Can Decide Alone&quot; limits</li>
        <li>If <strong>YES</strong> → Make the decision, inform relevant parties</li>
        <li>If <strong>NO</strong> → Escalate to Founder with recommendation</li>
      </ol>

      <h2 id="decision-authority-levels">Decision Authority Levels</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Level</th>
            <th className="text-center">Symbol</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700 border border-green-500 dark:bg-green-900/30 dark:text-green-400">
                GREEN - Decide Alone
              </span>
            </td>
            <td className="text-center font-bold text-foreground">✓</td>
            <td className="text-foreground">Make the decision yourself, no approval needed</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400">
                YELLOW - Inform After
              </span>
            </td>
            <td className="text-center font-bold text-foreground">→</td>
            <td className="text-foreground">Decide yourself, but inform Founder afterward</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                ORANGE - Recommend
              </span>
            </td>
            <td className="text-center font-bold text-foreground">↑</td>
            <td className="text-foreground">Make a recommendation, Founder decides</td>
          </tr>
          <tr>
            <td>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 border border-red-500 dark:bg-red-900/30 dark:text-red-400">
                RED - Must Escalate
              </span>
            </td>
            <td className="text-center font-bold text-foreground">✗</td>
            <td className="text-foreground">Cannot proceed without Founder approval</td>
          </tr>
        </tbody>
      </table>

      <h2 id="escalation-rule">Escalation Rule</h2>
      <p>
        When escalating to Founder, <strong>ALWAYS</strong> include:
      </p>
      <ol>
        <li>The issue/decision needed</li>
        <li>What you&apos;ve already reviewed or tried</li>
        <li>Your recommended action</li>
        <li>Deadline for decision (if time-sensitive)</li>
      </ol>

      <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
        <p className="text-sm font-medium text-primary m-0">
          <strong>The Founder should never receive an escalation without a recommendation.</strong>
        </p>
      </div>
    </div>
  );
}

export default function DecisionRightsPage() {
  return (
    <PlaybookPageLayout>
      <DecisionRightsSection />
    </PlaybookPageLayout>
  );
}
