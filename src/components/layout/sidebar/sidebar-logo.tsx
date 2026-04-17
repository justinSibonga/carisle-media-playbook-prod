import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarLogoProps {
  isCollapsed: boolean;
}

export function SidebarLogo({ isCollapsed }: SidebarLogoProps) {
  return (
    <Link href="/home" className="block whitespace-nowrap group">
      <div className={cn("flex items-center transition-all duration-300", isCollapsed ? "justify-center" : "justify-start")}>
        {isCollapsed ? (
          <div className="relative w-8 h-8 shrink-0">
            <Image src="/cm-icon.png" alt="Carisle Media" fill sizes="32px" className="object-contain" />
          </div>
        ) : (
          <Image src="/CMLogo-text.svg" alt="Carisle Media" width={0} height={0} sizes="100vw" className="h-10 w-auto" />
        )}
      </div>
    </Link>
  );
}
