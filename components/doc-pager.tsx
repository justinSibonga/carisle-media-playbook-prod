"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

interface PageLink {
  title: string;
  href: string;
}

interface DocPagerProps {
  prev?: PageLink;
  next?: PageLink;
}

export function DocPager({ prev, next }: DocPagerProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-8 border-t border-border/50">
      {prev ? (
        <Link 
            href={prev.href}
            className="group flex flex-col items-start p-4 rounded-lg border border-border/40 hover:bg-muted/30 hover:border-accent/40 transition-all custom-transition-all"
        >
            <span className="flex items-center text-xs text-muted-foreground mb-1 group-hover:text-accent transition-colors">
                <HugeiconsIcon icon={ArrowLeft02Icon} className="mr-1 w-3 h-3" /> Previous
            </span>
            <span className="font-serif font-medium text-foreground">{prev.title}</span>
        </Link>
      ) : <div />}

      {next ? (
        <Link 
            href={next.href}
            className="group flex flex-col items-end p-4 rounded-lg border border-border/40 hover:bg-muted/30 hover:border-accent/40 transition-all custom-transition-all"
        >
            <span className="flex items-center text-xs text-muted-foreground mb-1 group-hover:text-accent transition-colors">
                Next <HugeiconsIcon icon={ArrowRight02Icon} className="ml-1 w-3 h-3" />
            </span>
            <span className="font-serif font-medium text-foreground">{next.title}</span>
        </Link>
      ) : <div />}
    </div>
  );
}
