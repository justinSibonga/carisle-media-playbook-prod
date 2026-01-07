"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface StepItem {
  title: string;
  description?: string;
  badges?: { text: string; variant?: "default" | "secondary" | "outline" | "accent" }[];
  content: React.ReactNode;
}

interface StepProcessProps {
  steps: StepItem[];
  className?: string;
}

export function StepProcess({ steps, className }: StepProcessProps) {
  return (
    <div className={cn("relative max-w-5xl mx-auto py-0!", className)}>
      {steps.map((step, index) => (
        <div key={index} className="group relative flex gap-4 pb-6 last:pb-0">
          {/* Connecting Line */}
          {index !== steps.length - 1 && (
            <div 
              className="absolute left-5 top-10 bottom-0 w-px bg-border group-last:hidden" 
              aria-hidden="true"
            />
          )}

          {/* Step Number Badge */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-sm ring-4 ring-background">
            {index + 1}
          </div>

          {/* Content Card */}
          <div className="flex-1 min-w-0">
            <div className="rounded-xl border border-border bg-card p-4! shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
              <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-x-4 gap-y-1 mb-2! border-b border-border pb-2!">
                <div>
                   <h3 className="text-lg! font-bold! text-foreground mt-0! mb-0! leading-tight!">
                    Step {index + 1}: {step.title}
                  </h3> 
                  {step.description && (
                    <p className="text-muted-foreground mt-0.5! text-xs! mb-0! leading-tight!">{step.description}</p>
                  )}
                </div>
                
                {/* Badges */}
                {step.badges && step.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 shrink-0 md:justify-end">
                    {step.badges.map((badge, i) => (
                      <span key={i} className={cn(
                        "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold ring-1 ring-inset",
                        badge.variant === "accent" ? "bg-accent/10 text-accent ring-accent/20" : 
                        badge.variant === "secondary" ? "bg-secondary text-secondary-foreground ring-secondary/20" :
                        "bg-muted text-muted-foreground ring-muted-foreground/20"
                      )}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {step.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
