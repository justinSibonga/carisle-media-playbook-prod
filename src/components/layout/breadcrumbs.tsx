"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { Fragment } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav className="flex items-center text-sm text-foreground/80 mb-6 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="hover:text-foreground transition-colors flex items-center">
        <HugeiconsIcon icon={Home01Icon} className="w-4 h-4 mr-1" />
        Home
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const title = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <Fragment key={href}>
            <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 mx-2 text-muted-foreground" />
            {isLast ? (
              <span className="font-medium text-foreground">{title}</span>
            ) : (
              <Link href={href} className="hover:text-foreground transition-colors">
                {title}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
