"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { LAYOUT } from "@/constants/ui";

type Session = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

interface UserMenuProps {
  session: Session;
  isCollapsed: boolean;
  onSignOut: () => void;
  shouldReduceMotion: boolean;
}

export function UserMenu({ session, isCollapsed, onSignOut, shouldReduceMotion }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = session.user;
  if (!user) return null;

  const initials = user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U";
  const avatarSize = LAYOUT.AVATAR_SIZE;

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg transition-all duration-200 hover:bg-muted group"
        style={{
          display: isCollapsed ? "flex" : "grid",
          gridTemplateColumns: isCollapsed ? undefined : `${avatarSize}px 1fr 20px`,
          alignItems: "center",
          gap: "12px",
          padding: "8px",
          justifyContent: isCollapsed ? "center" : undefined,
        }}
        title={isCollapsed ? user.name || user.email || "User" : undefined}
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={avatarSize}
            height={avatarSize}
            sizes={`${avatarSize}px`}
            className="ring-2 ring-border group-hover:ring-primary/30 transition-all rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            style={{
              width: `${avatarSize}px`,
              height: `${avatarSize}px`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="bg-primary/10 ring-2 ring-border group-hover:ring-primary/30 transition-all"
          >
            <span className="text-sm font-semibold text-primary">{initials}</span>
          </div>
        )}
        {!isCollapsed && (
          <>
            <div style={{ minWidth: 0, textAlign: "left", overflow: "hidden" }}>
              <p
                style={{ margin: 0, fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="text-foreground"
              >
                {user.name || "User"}
              </p>
              <p
                style={{ margin: 0, fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="text-muted-foreground"
              >
                {user.email}
              </p>
            </div>
            <svg
              className={cn("text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
              style={{ width: "16px", height: "16px", flexShrink: 0 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.15 }}
            className={cn(
              "absolute bottom-full mb-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50",
              isCollapsed ? "left-0 w-48" : "left-0 right-0"
            )}
          >
            {isCollapsed && (
              <div className="px-3 py-2 border-b border-border">
                <p className="text-sm font-medium text-foreground truncate">{user.name || "User"}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            )}
            <button
              onClick={() => {
                setIsOpen(false);
                onSignOut();
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-colors"
            >
              <svg
                className="w-4 h-4"
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
              Sign out
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
