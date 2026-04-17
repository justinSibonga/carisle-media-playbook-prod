"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SearchDialog } from "@/components/search/search-dialog";
import { useSidebar } from "@/hooks/use-sidebar";
import { CollapseToggle } from "./collapse-toggle";
import { LogoutDialog } from "./logout-dialog";
import { MobileToggle } from "./mobile-toggle";
import { SearchTrigger } from "./search-trigger";
import { SidebarLogo } from "./sidebar-logo";
import { SidebarNav } from "./sidebar-nav";
import { UserMenu } from "./user-menu";

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [state, dispatch] = useSidebar();
  const { isOpen, isSearchOpen, isLogoutOpen, expandedSections, isCollapsed } = state;

  // Close the drawer on route change, but only after the path actually changed
  // so that opening-then-staying on the same route doesn't dismiss it.
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const timer = setTimeout(() => dispatch({ type: "setOpen", payload: false }), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, dispatch]);

  // The guided tour emits this event when advancing past the nav step so the
  // tooltip doesn't remain anchored to an open group.
  useEffect(() => {
    const handleCollapse = () => dispatch({ type: "collapseAll" });
    window.addEventListener("collapse-sidebar-sections", handleCollapse);
    return () => window.removeEventListener("collapse-sidebar-sections", handleCollapse);
  }, [dispatch]);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <MobileToggle
          isOpen={isOpen}
          shouldReduceMotion={shouldReduceMotion}
          onToggle={() => dispatch({ type: "toggleOpen" })}
          onClose={() => dispatch({ type: "setOpen", payload: false })}
        />

        <m.aside
          id="tour-sidebar"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
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
            <CollapseToggle isCollapsed={isCollapsed} onToggle={() => dispatch({ type: "toggleCollapse" })} />

            <div className={cn("p-6 pb-4 transition-all duration-300", isCollapsed && "px-0 flex flex-col items-center")}>
              <SidebarLogo isCollapsed={isCollapsed} />
              <SearchTrigger
                isCollapsed={isCollapsed}
                onOpen={() => dispatch({ type: "setSearchOpen", payload: true })}
              />
            </div>

            <div className="h-px mx-4 bg-border" />

            <SidebarNav
              pathname={pathname}
              isCollapsed={isCollapsed}
              expandedSections={expandedSections}
              shouldReduceMotion={shouldReduceMotion}
              onCollapseAll={() => dispatch({ type: "collapseAll" })}
              onToggleSection={(name) => dispatch({ type: "toggleSection", payload: name })}
            />

            {session?.user && (
              <div className={cn("border-t border-border p-3 transition-all duration-300", isCollapsed && "px-2")}>
                <UserMenu
                  session={session}
                  isCollapsed={isCollapsed}
                  shouldReduceMotion={shouldReduceMotion}
                  onSignOut={() => dispatch({ type: "setLogoutOpen", payload: true })}
                />
              </div>
            )}
          </div>
        </m.aside>

        <SearchDialog
          open={isSearchOpen}
          onOpenChange={(open) => dispatch({ type: "setSearchOpen", payload: open })}
        />
        <LogoutDialog
          open={isLogoutOpen}
          shouldReduceMotion={shouldReduceMotion}
          onOpenChange={(open) => dispatch({ type: "setLogoutOpen", payload: open })}
        />
      </>
    </LazyMotion>
  );
}
