import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AnimatePresence, m } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ICON_SIZE } from "@/constants/ui";
import type { ExpandableSection } from "@/lib/navigation";

interface SidebarExpandableSectionProps {
  section: ExpandableSection;
  pathname: string;
  isExpanded: boolean;
  isCollapsed: boolean;
  shouldReduceMotion: boolean;
  onToggle: () => void;
}

function sectionTourId(name: string) {
  const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
  return `tour-nav-${slug}`;
}

export function SidebarExpandableSection({
  section,
  pathname,
  isExpanded,
  isCollapsed,
  shouldReduceMotion,
  onToggle,
}: SidebarExpandableSectionProps) {
  const hasActiveChild = section.items.some((item) => pathname === item.href);
  const SectionIcon = section.icon;

  return (
    <div className="flex flex-col gap-1">
      <button
        id={sectionTourId(section.name)}
        onClick={onToggle}
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
            size={ICON_SIZE.LG}
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
                size={ICON_SIZE.XL}
                className={cn("transition-transform duration-200", isExpanded && "rotate-90")}
              />
            </div>
          </>
        )}
      </button>

      <AnimatePresence>
        {isExpanded && !isCollapsed && (
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
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
                      isActive ? "bg-primary text-white" : "hover:bg-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm relative z-10 transition-colors text-left flex-1",
                        isActive ? "text-white font-semibold" : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
