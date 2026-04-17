"use client";

import { FolderTabs } from "@/components/ui/folder-tabs";
import { AuthorityLevelsTable } from "./authority-levels";
import { ByRoleContent } from "./by-role";
import { FounderApprovalContent } from "./founder-approval";
import { FullMatrixContent } from "./full-matrix";
import { QuickReferenceContent } from "./quick-reference";

const DECISION_TABS = [
  {
    key: "full-matrix",
    label: "Full Matrix",
    title: "Decision Rights Matrix",
    description: "What each role can decide independently vs. what needs Founder approval",
    content: <FullMatrixContent />,
  },
  {
    key: "by-role",
    label: "By Role",
    title: "Decision Rights by Role",
    description: "Quick reference: What each role can decide alone",
    content: <ByRoleContent />,
  },
  {
    key: "founder-approval",
    label: "Founder Approval",
    title: "Decisions Requiring Founder Approval",
    description: "These items ALWAYS need Founder approval - everything else is delegated",
    content: <FounderApprovalContent />,
  },
  {
    key: "quick-reference",
    label: "Quick Reference",
    title: "Quick Reference: Key Thresholds",
    description: "Print this page for easy reference",
    content: <QuickReferenceContent />,
  },
];

export function DecisionRightsSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="!text-accent font-medium tracking-widest uppercase text-sm mb-2">Operations Playbook</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">Decision Rights</h1>
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
        <li>
          If <strong>YES</strong> → Make the decision, inform relevant parties
        </li>
        <li>
          If <strong>NO</strong> → Escalate to Founder with recommendation
        </li>
      </ol>

      <h2 id="decision-authority-levels">Decision Authority Levels</h2>
      <AuthorityLevelsTable />

      <FolderTabs tabs={DECISION_TABS} defaultTab="full-matrix" />

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
