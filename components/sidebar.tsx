"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { NAV_SECTIONS, EXPANDABLE_SECTIONS } from "@/lib/navigation";
import { SearchDialog } from "@/components/search-dialog";

// Logout Confirmation Dialog
function LogoutDialog({ 
  open, 
  onOpenChange 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
}) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-foreground/80 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Sign out
                </h3>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSection = (name: string) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setExpandedSections([name]);
      return;
    }
    setExpandedSections(prev => {
      const newState = prev.includes(name) ? [] : [name];
      return newState;
    });
  };
  
  const prevPathname = React.useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const timer = setTimeout(() => setIsOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Listen for tour collapse event
  useEffect(() => {
    const handleCollapse = () => {
      setExpandedSections([]);
    };
    window.addEventListener('collapse-sidebar-sections', handleCollapse);
    return () => window.removeEventListener('collapse-sidebar-sections', handleCollapse);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-4 left-4 z-50 p-3 md:hidden rounded-lg",
          "bg-card border border-border text-foreground"
        )}
      >
        {isOpen ? <HugeiconsIcon icon={Cancel01Icon} size={20} /> : <HugeiconsIcon icon={Menu01Icon} size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        id="tour-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50",
          "bg-background text-foreground border-r border-border",
          "transition-all duration-300 ease-in-out",
          "md:translate-x-0 md:sticky md:h-screen md:top-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "w-20" : "w-72"
        )}
        style={{ fontFamily: '"DM Sans", "Inter", system-ui, sans-serif' }}
      >
        <div className="flex flex-col h-full relative">
          
          {/* Collapse Toggle - Centered Vertical */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background border border-border rounded-full items-center justify-center text-muted-foreground hover:text-foreground shadow-sm z-50 cursor-pointer hover:bg-muted/50 transition-colors"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} className={cn("transition-transform duration-300", !isCollapsed && "rotate-180")} />
          </button>

          <div className={cn("p-6 pb-4 transition-all duration-300", isCollapsed && "px-0 flex flex-col items-center")}>
            <Link href="/home" className="block whitespace-nowrap group">
               <div className={cn("flex items-center transition-all duration-300", isCollapsed ? "justify-center" : "justify-start")}>
                 {isCollapsed ? (
                    <div className="relative w-8 h-8 shrink-0">
                        <Image 
                            src="/cm-icon.png" 
                            alt="Carisle Media" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                 ) : (
                    <Image 
                        src="/CMLogo-text.svg" 
                        alt="Carisle Media" 
                        width={0} 
                        height={0} 
                        sizes="100vw" 
                        className="h-10 w-auto" 
                    />
                 )}
               </div>
            </Link>

            <button
              id="tour-search"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "mt-6 flex items-center gap-2 rounded-lg border border-border bg-muted/50 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:border-border hover:shadow-sm",
                isCollapsed ? "justify-center w-10 h-10 p-0 mx-auto" : "w-full px-3 py-2.5"
              )}
            >
              <HugeiconsIcon icon={Search01Icon} className="h-4 w-4 text-accent shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="font-medium">Search...</span>
                  <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </>
              )}
            </button>
          </div>

          <div className="h-px mx-4 bg-border" />

          <div className={cn("flex-1 overflow-y-auto py-4 transition-all duration-300", isCollapsed ? "px-2" : "px-3")}>
            <nav className="flex flex-col gap-1 flex-1">
              {/* Standard Links */}
              {NAV_SECTIONS[0].items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={item.name === "Organizational Chart" ? "tour-nav-org-chart" : item.name === "KPI Dictionary" ? "tour-nav-kpi-dictionary" : undefined}
                    onClick={() => setExpandedSections([])}
                    className={cn(
                      "flex items-center gap-3 rounded-lg transition-all duration-200 relative group",
                      isCollapsed ? "justify-center p-2.5" : "px-3 py-2.5",
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-muted"
                    )}
                    title={isCollapsed ? item.name : undefined}
                  >
                    {Icon && (
                      <HugeiconsIcon 
                        icon={Icon} 
                        size={18} 
                        className={cn(
                          "relative z-10 shrink-0 transition-colors",
                          isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"
                        )} 
                      />
                    )}
                    {!isCollapsed && (
                      <span className={cn(
                        "text-sm relative z-10 font-medium transition-colors whitespace-nowrap",
                        isActive ? "text-white font-semibold" : "text-foreground/80 group-hover:text-foreground"
                      )}>
                        {item.name}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Expandable Sections */}
              {EXPANDABLE_SECTIONS.map((section) => {
                const isExpanded = expandedSections.includes(section.name);
                const hasActiveChild = section.items.some(item => pathname === item.href);
                const SectionIcon = section.icon;
                
                return (
                  <div key={section.name} className="flex flex-col gap-1">
                    <button
                      id={`tour-nav-${section.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      onClick={() => toggleSection(section.name)}
                      title={isCollapsed ? section.name : undefined}
                      className={cn(
                        "flex items-center w-full gap-3 rounded-lg transition-all duration-200 relative group",
                        isCollapsed ? "justify-center p-2.5" : "px-3 py-3",
                        hasActiveChild && !isExpanded ? "bg-primary/20" : "hover:bg-muted"
                      )}
                    >
                      {SectionIcon && (
                        <HugeiconsIcon 
                          icon={SectionIcon} 
                          size={18} 
                          className="relative z-10 shrink-0 transition-colors text-muted-foreground group-hover:text-foreground" 
                        />
                      )}
                      {!isCollapsed && (
                        <>
                          <span className="text-sm relative z-10 font-medium transition-colors flex-1 text-left text-foreground/80 group-hover:text-foreground">
                            {section.name}
                          </span>
                          <div className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                            <HugeiconsIcon 
                              icon={ArrowRight01Icon} 
                              size={20} 
                              className={cn("transition-transform duration-200", isExpanded && "rotate-90")} 
                            />
                          </div>
                        </>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && !isCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-0.5 mt-1 ml-6 pl-4 border-l-2 border-border">
                            {section.items.map((item) => {
                              const isActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={cn(
                                    "flex items-center px-3 py-2 rounded-lg transition-all duration-200 relative group pr-4",
                                    isActive
                                      ? "bg-primary text-white"
                                      : "hover:bg-muted"
                                  )}
                                >
                                  <span className={cn(
                                    "text-sm relative z-10 transition-colors text-left flex-1",
                                    isActive ? "text-white font-semibold" : "text-muted-foreground group-hover:text-foreground"
                                  )}>
                                    {item.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* User Info & Sign Out */}
          {session?.user && (
            <div className={cn(
              "border-t border-border p-4 transition-all duration-300",
              isCollapsed && "px-2"
            )}>
              <div className={cn(
                "flex flex-row items-center gap-3 mb-3",
                isCollapsed && "justify-center"
              )}>
                {session.user.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-9 h-9 rounded-full shrink-0 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {session.user.name?.[0]?.toUpperCase() || session.user.email?.[0]?.toUpperCase() || "U"}
                    </span>
                  </div>
                )}
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {session.user.name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {session.user.email}
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsLogoutOpen(true)}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",
                  isCollapsed && "p-2"
                )}
                title={isCollapsed ? "Sign out" : undefined}
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
                {!isCollapsed && "Sign out"}
              </button>
            </div>
          )}
        </div>
      </motion.aside>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <LogoutDialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen} />
    </>
  );
}
