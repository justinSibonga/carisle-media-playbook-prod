import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { ICON_SIZE } from "@/constants/ui";

interface CollapseToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function CollapseToggle({ isCollapsed, onToggle }: CollapseToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background border border-border rounded-full items-center justify-center text-muted-foreground hover:text-foreground shadow-sm z-50 cursor-pointer hover:bg-muted/50 transition-colors"
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        size={ICON_SIZE.SM}
        className={cn("transition-transform duration-300", !isCollapsed && "rotate-180")}
      />
    </button>
  );
}
