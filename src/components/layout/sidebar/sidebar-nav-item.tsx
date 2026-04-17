import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";
import { ICON_SIZE } from "@/constants/ui";
import type { NavItem } from "@/lib/navigation";

interface SidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
  isCollapsed: boolean;
  tourId?: string;
  onNavigate?: () => void;
}

export function SidebarNavItem({ item, isActive, isCollapsed, tourId, onNavigate }: SidebarNavItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      id={tourId}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-lg transition-all duration-200 relative group",
        isCollapsed ? "justify-center p-2.5" : "px-3 py-2.5",
        isActive ? "bg-primary text-white" : "hover:bg-muted"
      )}
      title={isCollapsed ? item.name : undefined}
    >
      {Icon && (
        <HugeiconsIcon
          icon={Icon}
          size={ICON_SIZE.LG}
          className={cn(
            "relative z-10 shrink-0 transition-colors",
            isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"
          )}
        />
      )}
      {!isCollapsed && (
        <span
          className={cn(
            "text-sm relative z-10 font-medium transition-colors whitespace-nowrap",
            isActive ? "text-white font-semibold" : "text-foreground/80 group-hover:text-foreground"
          )}
        >
          {item.name}
        </span>
      )}
    </Link>
  );
}
