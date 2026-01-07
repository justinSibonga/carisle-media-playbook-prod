"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function RightSidebar() {
  return (
    <aside
      className={cn(
        "hidden xl:block w-72 shrink-0",
        "bg-background border-l border-border",
        "h-screen sticky top-0 overflow-y-auto"
      )}
    >
      <div className="flex flex-col h-full justify-center">
        {/* Top Section: Info */}
        <div className="p-6 text-center">
          <Image 
            src="/img.png" 
            alt="Carisle Media Handbook" 
            width={288}
            height={400}
            className="w-full mb-6 mx-auto"
          />
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Jan 5, 2026 UI Refactor</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Major design updates focused on increasing information density and professionalism.
            </p>
            <Link 
              href="/updates"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-200 text-foreground text-sm font-medium rounded-full hover:bg-neutral-300 transition-colors"
            >
              View Updates
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
