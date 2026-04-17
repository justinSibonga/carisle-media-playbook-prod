import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { AnimatePresence, m } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ICON_SIZE } from "@/constants/ui";

interface MobileToggleProps {
  isOpen: boolean;
  shouldReduceMotion: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function MobileToggle({ isOpen, shouldReduceMotion, onToggle, onClose }: MobileToggleProps) {
  return (
    <>
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn(
          "fixed top-4 left-4 z-50 p-3 md:hidden rounded-lg",
          "bg-card border border-border text-foreground"
        )}
      >
        <HugeiconsIcon icon={isOpen ? Cancel01Icon : Menu01Icon} size={ICON_SIZE.XL} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
