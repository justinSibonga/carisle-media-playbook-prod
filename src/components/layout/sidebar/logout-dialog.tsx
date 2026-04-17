"use client";

import { signOut } from "next-auth/react";
import { AnimatePresence, m } from "@/lib/motion";

interface LogoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shouldReduceMotion: boolean;
}

export function LogoutDialog({ open, onOpenChange, shouldReduceMotion }: LogoutDialogProps) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="fixed inset-0 z-60 bg-foreground/80 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -20 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="fixed left-[50%] top-[50%] z-61 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl p-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-destructive"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sign out</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Are you sure you want to sign out of your account?
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => onOpenChange(false)}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-destructive hover:bg-destructive/90 rounded-lg transition-colors"
                >
                  Sign out
                </button>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
