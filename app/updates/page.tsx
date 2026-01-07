"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar01Icon } from "@hugeicons/core-free-icons";

import { Footer } from "@/components/footer";

interface Update {
  date: string;
  title: string;
  description: string;
  changes: string[];
}

const updates: Update[] = [
  {
    date: "January 5, 2026",
    title: "UI Refactor",
    description: "Major design updates focused on increasing information density and professionalism.",
    changes: [
      "Tightened global typography for better readability",
      "Compacted Service Delivery UI for more efficient workflows",
      "Standardized \"StepProcess\" component across all pages",
      "Refactored Escalation SOP with clearer visual hierarchy",
      "Improved table styles with better zebra striping",
      "Enhanced scroll behavior and navigation",
    ],
  },
  {
    date: "December 28, 2025",
    title: "Initial Launch",
    description: "Launched the Carisle Media Digital Handbook with core documentation.",
    changes: [
      "Organizational Chart with team structure",
      "Service Delivery SOP documentation",
      "Quality Checklists for all deliverables",
      "Escalation procedures and decision rights",
      "KPI Dictionary with metrics definitions",
      "Communication rules and guidelines",
    ],
  },
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-1.5 md:px-12 py-8 md:py-16">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="w-4 h-4" />
          Back to Handbook
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Updates & Changelog
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay up to date with the latest improvements and changes to the Carisle Media Handbook.
          </p>
        </div>

        {/* Updates List */}
        <div className="space-y-12">
          {updates.map((update, idx) => (
            <article 
              key={idx}
              className="pb-12 border-b border-border last:border-b-0"
            >
              {/* Date & Author */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4" />
                {update.date}
                <span className="mx-1">•</span>
                <span>By Justin Sibonga</span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {update.title}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {update.description}
              </p>

              {/* Changes List */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  What&apos;s Changed
                </h3>
                <ul className="space-y-2">
                  {update.changes.map((change, changeIdx) => (
                    <li 
                      key={changeIdx}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
