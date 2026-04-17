import { cn } from "@/lib/utils";
import { EXPANDABLE_SECTIONS, NAV_SECTIONS } from "@/lib/navigation";
import { SidebarExpandableSection } from "./sidebar-expandable-section";
import { SidebarNavItem } from "./sidebar-nav-item";

// Tour targets are derived from a name → id map so the nav list stays pure
// data. If a new tour step is added, just extend this map.
const NAV_TOUR_IDS: Record<string, string> = {
  "Organizational Chart": "tour-nav-org-chart",
  "KPI Dictionary": "tour-nav-kpi-dictionary",
};

interface SidebarNavProps {
  pathname: string;
  isCollapsed: boolean;
  expandedSections: string[];
  shouldReduceMotion: boolean;
  onCollapseAll: () => void;
  onToggleSection: (name: string) => void;
}

export function SidebarNav({
  pathname,
  isCollapsed,
  expandedSections,
  shouldReduceMotion,
  onCollapseAll,
  onToggleSection,
}: SidebarNavProps) {
  return (
    <div className={cn("flex-1 overflow-y-auto py-4 transition-all duration-300", isCollapsed ? "px-2" : "px-3")}>
      <nav className="flex flex-col gap-1 flex-1">
        {NAV_SECTIONS[0].items.map((item) => (
          <SidebarNavItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
            isCollapsed={isCollapsed}
            tourId={NAV_TOUR_IDS[item.name]}
            onNavigate={onCollapseAll}
          />
        ))}

        {EXPANDABLE_SECTIONS.map((section) => (
          <SidebarExpandableSection
            key={section.name}
            section={section}
            pathname={pathname}
            isCollapsed={isCollapsed}
            isExpanded={expandedSections.includes(section.name)}
            shouldReduceMotion={shouldReduceMotion}
            onToggle={() => onToggleSection(section.name)}
          />
        ))}
      </nav>
    </div>
  );
}
