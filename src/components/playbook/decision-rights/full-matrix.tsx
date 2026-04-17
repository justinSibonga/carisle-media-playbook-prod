"use client";

import { Fragment } from "react";
import { FULL_MATRIX_SECTIONS } from "@/data/decision-rights";
import type { DecisionAuthority, MatrixRow, MatrixSection } from "@/types/decision-rights";

const ROW_COLORS: Record<DecisionAuthority, { bg: string; hover: string }> = {
  green: { bg: "rgba(34, 197, 94, 0.1)", hover: "rgba(34, 197, 94, 0.2)" },
  yellow: { bg: "rgba(234, 179, 8, 0.1)", hover: "rgba(234, 179, 8, 0.2)" },
  red: { bg: "rgba(239, 68, 68, 0.1)", hover: "rgba(239, 68, 68, 0.2)" },
};

function DecisionRow({ row }: { row: MatrixRow }) {
  const style = ROW_COLORS[row.color];
  return (
    <tr
      className="border-b border-border transition-colors"
      style={{ backgroundColor: style.bg }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = style.hover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = style.bg)}
    >
      <td className="py-3 px-3 text-left text-sm font-medium">{row.type}</td>
      <td className="py-3 px-3 text-center text-sm">{row.decider}</td>
      <td className="py-3 px-3 text-center text-sm">{row.approver}</td>
      <td className="py-3 px-3 text-center text-sm">{row.threshold}</td>
      <td className="py-3 px-3 text-left text-sm text-muted-foreground">{row.notes}</td>
    </tr>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <tr>
      <td colSpan={5} className="bg-primary text-white! font-bold text-center py-2 text-xs">
        {title}
      </td>
    </tr>
  );
}

function MatrixTable({ sections }: { sections: MatrixSection[] }) {
  return (
    <div className="overflow-x-auto -mx-3 md:mx-0">
      <table className="w-full text-sm border-collapse min-w-[900px] no-zebra">
        <colgroup>
          <col className="w-[22%]" />
          <col className="w-[16%]" />
          <col className="w-[16%]" />
          <col className="w-[14%]" />
          <col className="w-[32%]" />
        </colgroup>
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="text-left py-3 px-3 font-semibold text-sm">Decision Type</th>
            <th className="text-center py-3 px-3 font-semibold text-sm whitespace-nowrap">Can Decide Alone</th>
            <th className="text-center py-3 px-3 font-semibold text-sm whitespace-nowrap">Needs Approval</th>
            <th className="text-center py-3 px-3 font-semibold text-sm">Threshold</th>
            <th className="text-left py-3 px-3 font-semibold text-sm">Notes</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <Fragment key={section.title}>
              <SectionHeader title={section.title} />
              {section.rows.map((row) => (
                <DecisionRow key={`${section.title}-${row.type}`} row={row} />
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-muted/50 rounded-lg p-4">
      <h4 className="font-bold text-primary mb-3 text-sm">LEGEND</h4>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="w-4 h-4 rounded bg-green-500/10 border border-green-500/20" />
          <span className="font-bold">Green rows:</span>
          <span className="text-muted-foreground">Full authority - decide alone, no approval needed</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="w-4 h-4 rounded bg-yellow-500/10 border border-yellow-500/20" />
          <span className="font-bold">Yellow rows:</span>
          <span className="text-muted-foreground">Conditional - can decide within threshold, else escalate</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="w-4 h-4 rounded bg-red-500/10 border border-red-500/20" />
          <span className="font-bold">Red rows:</span>
          <span className="text-muted-foreground">Must escalate - always needs Founder approval</span>
        </div>
      </div>
    </div>
  );
}

export function FullMatrixContent() {
  return (
    <div className="space-y-6">
      <MatrixTable sections={FULL_MATRIX_SECTIONS} />
      <Legend />
    </div>
  );
}
