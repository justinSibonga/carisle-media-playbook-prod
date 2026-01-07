"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function OnThisPage() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Function to generate a unique slug from text
    const generateSlug = (text: string, existingIds: Set<string>): string => {
      // Create a base slug from the text
      let slug = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
      
      if (!slug) slug = 'heading'; // Fallback if slug is empty
      
      // Ensure uniqueness
      let uniqueSlug = slug;
      let counter = 1;
      while (existingIds.has(uniqueSlug)) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
      }
      
      return uniqueSlug;
    };

    // Function to get headings
    const getHeadings = () => {
      // Select h2 and h3 from the main content area (assuming standard prose classes or just main tag)
      // Note: We need to make sure we're targeting the right container.
      // Based on ClientLayout, main content is likely in 'main' or prose container.
      // Let's target 'main h2, main h3'.
      const elements = Array.from(document.querySelectorAll("main h2, main h3"));
      const existingIds = new Set<string>();
      
      const items: TOCItem[] = [];
      const seenIds = new Set<string>();
      
      elements.forEach((element) => {
        // Ensure element has an ID
        if (!element.id) {
          const text = element.textContent || '';
          const newId = generateSlug(text, existingIds);
          element.id = newId;
          existingIds.add(newId);
        } else {
          // If ID already exists, ensure it's unique
          if (existingIds.has(element.id)) {
            const text = element.textContent || '';
            const newId = generateSlug(text, existingIds);
            element.id = newId;
            existingIds.add(newId);
          } else {
            existingIds.add(element.id);
          }
        }
        
        // Only add if we haven't seen this ID before
        if (!seenIds.has(element.id)) {
          seenIds.add(element.id);
          
          // Extract title text, excluding number badges (spans with single digit)
          // This handles headings like: <span>1</span>Professional Behavior
          let title = '';
          element.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              title += node.textContent || '';
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node as Element;
              // Skip number badge spans (typically contain single digit)
              const text = el.textContent || '';
              if (!(el.tagName === 'SPAN' && /^\d+$/.test(text.trim()))) {
                title += text;
              }
            }
          });
          
          items.push({
            id: element.id,
            title: title.trim() || element.textContent || "",
            level: element.tagName === "H2" ? 2 : 3,
          });
        }
      });
      
      setHeadings(items);
    };

    // Initial fetch
    getHeadings();

    // Re-fetch on route change mechanism is needed? 
    // Actually, this component will mount/unmount or update. 
    // Since it's in a layout, we might need to trigger it when pathname changes.
    // The parent might need to key this component or we use a MutationObserver.
    
    const observer = new MutationObserver(getHeadings);
    const main = document.querySelector("main");
    if (main) {
      observer.observe(main, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header if any
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 shrink-0 pl-8">
      <div className="sticky top-24">
        <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          On This Page
        </h4>
        <nav className="flex flex-col gap-2 relative border-l border-border/50">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(heading.id, e)}
              className={cn(
                "block text-sm transition-colors pl-4 relative py-1",
                heading.level === 3 && "pl-8",
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeId === heading.id && (
                <motion.div
                  layoutId="toc-active"
                  className="absolute -left-px top-0 bottom-0 w-[2px] bg-primary"
                />
              )}
              {heading.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
