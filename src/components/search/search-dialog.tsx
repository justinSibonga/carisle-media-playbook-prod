"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "@/lib/motion";
import { SEARCH_INDEX, type SearchEntry } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [query, setQuery] = React.useState("");
  const focusFrameRef = React.useRef<number | null>(null);
  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        setQuery("");
      }
      onOpenChange(nextOpen);
    },
    [onOpenChange]
  );

  const setInputRef = React.useCallback((node: HTMLInputElement | null) => {
    if (!node) {
      return;
    }

    if (focusFrameRef.current !== null) {
      cancelAnimationFrame(focusFrameRef.current);
    }

    focusFrameRef.current = requestAnimationFrame(() => {
      node.focus();
      focusFrameRef.current = null;
    });
  }, []);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenChange(!open);
      }
      if (open && e.key === "Escape") {
        handleOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleOpenChange, open]);

  React.useEffect(() => {
    return () => {
      if (focusFrameRef.current !== null) {
        cancelAnimationFrame(focusFrameRef.current);
      }
    };
  }, []);

  // Full-text search with relevance scoring
  const filteredItems = React.useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    
    const results: Array<SearchEntry & { score: number; matchedTerms: string[] }> = [];
    
    SEARCH_INDEX.forEach((item) => {
      const searchableText = (
        item.name + " " + 
        item.category + " " + 
        item.content
      ).toLowerCase();
      
      let score = 0;
      const matchedTerms: string[] = [];
      
      for (const term of searchTerms) {
        if (searchableText.includes(term)) {
          matchedTerms.push(term);
          
          // Higher score for name matches
          if (item.name.toLowerCase().includes(term)) {
            score += 10;
          }
          // Medium score for category matches
          if (item.category.toLowerCase().includes(term)) {
            score += 5;
          }
          // Base score for content matches
          if (item.content.toLowerCase().includes(term)) {
            score += 2;
          }
        }
      }
      
      // Only include if all search terms are matched
      if (matchedTerms.length === searchTerms.length) {
        results.push({ ...item, score, matchedTerms });
      }
    });
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
  }, [query]);

  const handleSelect = (href: string) => {
    router.push(href);
    setQuery("");
    onOpenChange(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : undefined}
              className="fixed inset-0 z-60 bg-foreground/80 backdrop-blur-sm"
              onClick={() => handleOpenChange(false)}
              aria-hidden="true"
            />
            <m.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -20 }}
              transition={shouldReduceMotion ? { duration: 0 } : undefined}
              className="fixed left-[50%] top-[20%] z-61 w-full max-w-lg -translate-x-1/2 p-4"
              role="dialog"
              aria-modal="true"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                <div className="flex items-center border-b border-border px-4">
                  <HugeiconsIcon icon={Search01Icon} className="mr-2 h-5 w-5 text-accent" />
                  <input
                    ref={setInputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search anything..."
                    aria-label="Search handbook"
                    className="flex h-14 w-full bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground text-foreground"
                  />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="rounded border bg-muted px-1.5 py-0.5">ESC</span>
                  </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                  {query === "" && (
                    <div className="py-12 text-center text-sm text-muted-foreground">
                      Start typing to search across all pages...
                    </div>
                  )}

                  {query !== "" && filteredItems.length === 0 && (
                    <div className="py-12 text-center text-sm text-muted-foreground">
                      No results found for &quot;{query}&quot;
                    </div>
                  )}

                  {filteredItems.length > 0 && (
                    <div className="flex flex-col gap-1">
                      <div className="px-3 py-2 text-xs text-muted-foreground">
                        {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} found
                      </div>
                      {filteredItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleSelect(item.href)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left transition-all duration-200 hover:bg-primary/10 rounded-lg group border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                              <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
                            </div>
                            <div>
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                                {item.category}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
