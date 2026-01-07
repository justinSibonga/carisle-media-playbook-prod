"use client";

import { Footer } from "@/components/footer";
import { ReactNode } from "react";

interface PlaybookPageLayoutProps {
  children: ReactNode;
}

export function PlaybookPageLayout({ children }: PlaybookPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-1.5 md:px-6 mt-6 md:mt-8">
        {children}

        {/* Footer */}
        <div className="pt-10">
          <div className="h-px w-full bg-border mb-8" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
