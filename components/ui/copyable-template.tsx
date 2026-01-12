"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { TIMING, ICON_SIZE } from "@/lib/constants";

interface CopyableTemplateProps {
  template: string;
  children: React.ReactNode;
}

export function CopyableTemplate({ template, children }: CopyableTemplateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      setTimeout(() => setCopied(false), TIMING.TOAST_DURATION);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className={cn(
          "absolute top-2 right-2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium",
          copied 
            ? "bg-status-success text-white" 
            : "bg-background/90 hover:bg-background border border-border text-muted-foreground hover:text-foreground"
        )}
        title={copied ? "Copied!" : "Copy template"}
      >
        <HugeiconsIcon 
          icon={copied ? Tick01Icon : Copy01Icon} 
          size={ICON_SIZE.SM} 
        />
        {copied ? "Copied!" : "Copy"}
      </button>
      {children}
    </div>
  );
}
