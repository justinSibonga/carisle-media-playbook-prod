"use client";

import { useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  key: string;
  label: string;
  title: string;
  description: string;
  content: ReactNode;
}

interface FolderTabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function FolderTabs({ tabs, defaultTab }: FolderTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.key);
  const currentTab = tabs.find(t => t.key === activeTab) || tabs[0];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextTab = (nextTabKey: string) => {
    setActiveTab(nextTabKey);
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={containerRef} className="mt-8 md:mt-12">
      {/* Folder Tabs */}
      <div className="flex items-end relative overflow-x-auto hide-scrollbar gap-1 snap-x snap-mandatory">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "relative h-9 md:h-10 px-3 md:px-5 min-w-[80px] md:min-w-[100px] text-xs md:text-sm font-semibold transition-all duration-200 focus:outline-none rounded-t-lg folder-tab snap-start shrink-0 whitespace-nowrap",
                isActive
                  ? "z-30 text-white bg-primary folder-tab-active"
                  : "text-foreground hover:opacity-80 z-10 folder-tab-inactive"
              )}
              style={{
                backgroundColor: isActive ? 'hsl(192 60% 25%)' : 'hsl(192 50% 70%)'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content Card */}
      <div className="bg-card rounded-lg rounded-tl-none shadow-md relative z-20 overflow-hidden">
        {/* Header - with dark teal border */}
        <div className="px-3 md:px-4 py-2.5 md:py-3 bg-primary">
          <h2 className="text-base md:text-lg font-bold tracking-tight text-white border-0! pb-0! mt-0! mb-0!">{currentTab.title}</h2>
          <p className="text-xs md:text-sm text-white/80! mb-0!">{currentTab.description}</p>
        </div>

        {/* Content - with light teal border */}
        <div className="p-3 md:p-4">
          {currentTab.content}
        </div>

        {/* Tab Navigation */}
        {(() => {
          const currentIndex = tabs.findIndex(t => t.key === activeTab);
          const prevTab = tabs[currentIndex - 1];
          const nextTab = tabs[currentIndex + 1];
          if (!prevTab && !nextTab) return null;
          return (
            <div className="border-t border-border px-3 md:px-5 py-3 md:py-4 flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between items-stretch md:items-center bg-muted/30">
              {/* Previous Button */}
              {prevTab ? (
                <button
                  onClick={() => handleNextTab(prevTab.key)}
                  className="px-3 md:px-4 py-2 md:py-2.5 bg-card border border-border rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2 group shadow-sm text-xs md:text-sm font-medium text-foreground"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  {prevTab.label}
                </button>
              ) : (
                <div className="hidden md:block" />
              )}

              {/* Next Button */}
              {nextTab && (
                <button
                  onClick={() => handleNextTab(nextTab.key)}
                  className="px-3 md:px-4 py-2 md:py-2.5 bg-primary text-white border border-primary rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-sm text-xs md:text-sm font-medium"
                >
                  {nextTab.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}

