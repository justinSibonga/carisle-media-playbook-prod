"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { OnThisPage } from "./on-this-page";
import { GuidedTour } from "@/components/onboarding/guided-tour";
import { useEffect } from "react";

import { LazyMotion, domAnimation, m, useReducedMotion } from "@/lib/motion";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const isStandalonePage = pathname === "/" || pathname === "/home" || pathname === "/updates";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Standalone pages - no sidebar layout
  if (isStandalonePage) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
      <Sidebar />
      <LazyMotion features={domAnimation}>
        <m.main
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          key={pathname}
          className="flex-1 w-full relative"
        >
          <div className="relative max-w-[1400px] mx-auto px-1.5 md:px-12 pt-14 md:pt-0 py-8 md:py-16">
            <div className="flex xl:gap-12">
              <div className="flex-1 min-w-0">{children}</div>
              <OnThisPage />
            </div>
          </div>
        </m.main>
      </LazyMotion>
      <GuidedTour />
    </div>
  );
}
