"use client";

import { useState, useEffect, useRef } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import { HugeiconsIcon } from "@hugeicons/react";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";

const TOUR_STORAGE_KEY = "carisle-handbook-tour-seen";
const MOBILE_BREAKPOINT = 768;

const tourSteps: Step[] = [
  {
    target: "#tour-sidebar",
    content: "Welcome! This is your navigation sidebar. Use it to explore all sections of the handbook.",
    placement: "right",
    disableBeacon: true,
    disableScrolling: true,
  },
  {
    target: "#tour-search",
    content: "Use the search to quickly find any topic. Press ⌘ Command+K on Mac or Ctrl+K on Windows.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-org-chart",
    content: "View the Carisle Media organizational structure and reporting hierarchy.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-operational-playbook",
    content: "Access SOPs for service delivery, process maps, quality checklists, and escalation procedures.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-kpi-and-reporting",
    content: "Quick reference for all KPIs and performance targets across the organization.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-tools-and-project-management",
    content: "Find standards for PM tools, file system organization, and communication rules.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-hiring-and-onboarding",
    content: "Everything for recruiting, interviewing, onboarding, and training new team members.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-people-management",
    content: "Core values, performance evaluation, coaching, and meeting cadence documentation.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-governance",
    content: "RACI chart and decision rights to understand ownership and accountability.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-hr-policies",
    content: "All HR policies including compensation, benefits, work hours, code of conduct, and more.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-nav-role-score-card",
    content: "Find role-specific scorecards with KPIs and expectations for each position.",
    placement: "right",
    disableScrolling: true,
  },
  {
    target: "#tour-help-button",
    content: "That's it! Click this button anytime to replay the guide.",
    placement: "top",
    disableScrolling: true,
  },
];

export function GuidedTour() {
  const [run, setRun] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);

  // Detect mobile viewport and set mounted state
  useEffect(() => {
    // Use a microtask to batch state updates and avoid cascading renders
    const initialMobile = window.innerWidth < MOBILE_BREAKPOINT;
    
    // Batch both state updates together
    Promise.resolve().then(() => {
      setIsMobile(initialMobile);
      setMounted(true);
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check for first-time tour on mount - only on desktop
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    
    // Skip auto-tour on mobile since sidebar isn't visible
    if (window.innerWidth < MOBILE_BREAKPOINT) return;
    
    const hasSeen = localStorage.getItem(TOUR_STORAGE_KEY);
    if (!hasSeen) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new CustomEvent('collapse-sidebar-sections'));
        setRun(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem(TOUR_STORAGE_KEY, "true");
    }
  };

  const startTour = () => {
    // On mobile, don't run the tour since sidebar targets won't be visible
    if (isMobile) {
      alert("The guided tour is best experienced on a larger screen where the sidebar is visible.");
      return;
    }
    window.dispatchEvent(new CustomEvent('collapse-sidebar-sections'));
    setRun(true);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Joyride
        steps={tourSteps}
        run={run}
        continuous
        showProgress
        showSkipButton
        disableScrolling
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: "var(--color-primary)",
            zIndex: 10000,
            arrowColor: "#fff",
            backgroundColor: "#fff",
            textColor: "#1a1a1a",
            overlayColor: "rgba(0, 0, 0, 0.5)",
          },
          tooltip: {
            borderRadius: 16,
            padding: 20,
          },
          tooltipContent: {
            fontSize: 15,
            lineHeight: 1.6,
          },
          buttonNext: {
            backgroundColor: "var(--color-primary)",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 600,
          },
          buttonBack: {
            color: "#666",
            fontSize: 14,
          },
          buttonSkip: {
            color: "#999",
            fontSize: 14,
          },
        }}
        locale={{
          back: "Back",
          close: "Close",
          last: "Finish",
          next: "Next",
          skip: "Skip Tour",
        }}
      />

      {/* Help Button - hidden on mobile */}
      <button
        id="tour-help-button"
        onClick={startTour}
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200 items-center justify-center"
        aria-label="Start guided tour"
        title="Take a tour"
      >
        <HugeiconsIcon icon={HelpCircleIcon} size={24} />
      </button>
    </>
  );
}
