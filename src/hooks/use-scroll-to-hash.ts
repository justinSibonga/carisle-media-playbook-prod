import { useEffect } from "react";
import { TIMING } from "@/constants/ui";

/**
 * Scrolls to the element matching `window.location.hash` when the hash matches
 * one of the provided ids. Used on pages that have hash-deep-linkable sections
 * outside of the FolderTabs hash map so the page still jumps smoothly on load
 * and on subsequent hash changes.
 */
export function useScrollToHash(targetIds: readonly string[]) {
  useEffect(() => {
    const targets = new Set(targetIds);
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash || !targets.has(hash)) return;
      const element = document.getElementById(hash);
      if (!element) return;
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, TIMING.SCROLL_DELAY);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [targetIds]);
}
