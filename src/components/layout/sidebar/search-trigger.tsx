import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface SearchTriggerProps {
  isCollapsed: boolean;
  onOpen: () => void;
}

export function SearchTrigger({ isCollapsed, onOpen }: SearchTriggerProps) {
  return (
    <button
      id="tour-search"
      onClick={onOpen}
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
  );
}
