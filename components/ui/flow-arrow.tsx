import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface FlowArrowProps {
  className?: string;
}

export function FlowArrow({ className }: FlowArrowProps) {
  return (
    <HugeiconsIcon 
      icon={ArrowRight01Icon}
      className={cn("w-4 h-4 text-muted-foreground shrink-0", className)} 
    />
  );
}
