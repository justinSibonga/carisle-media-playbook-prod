import Image from "next/image";

interface CMLogoProps {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
}

/**
 * Optimized Carisle Media Logo Component
 * 
 * Server Component - renders on server for faster initial load
 * Use `priority` prop for above-the-fold logos
 */
export function CMLogo({ variant = "full", className, priority = false }: CMLogoProps) {
  if (variant === "icon") {
    return (
      <div className={className || "relative w-8 h-8"}>
        <Image
          src="/cm-icon.png"
          alt="Carisle Media"
          fill
          className="object-contain"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <Image
      src="/CMLogo-text.svg"
      alt="Carisle Media"
      width={0}
      height={0}
      sizes="100vw"
      className={className || "h-10 w-auto"}
      priority={priority}
    />
  );
}
