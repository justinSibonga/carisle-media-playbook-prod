import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "subtle";
  hover?: boolean;
}

export function GlassPanel({ 
  children, 
  className, 
  variant = "default",
  hover = true,
  ...props 
}: GlassPanelProps) {
  const variants = {
    default: `
      bg-gradient-to-br from-card/95 via-card/90 to-card/80
      backdrop-blur-xl backdrop-saturate-150
      border border-border/40
      shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.08)]
      [box-shadow:inset_0_1px_0_0_hsl(var(--card)/0.8),inset_0_-1px_0_0_hsl(var(--border)/0.2),0_4px_24px_-4px_hsl(var(--primary)/0.08)]
    `,
    elevated: `
      bg-gradient-to-br from-card via-card/95 to-card/90
      backdrop-blur-2xl backdrop-saturate-180
      border border-border/30
      shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.12),0_0_0_1px_hsl(var(--card)/0.5)_inset]
    `,
    subtle: `
      bg-card/60
      backdrop-blur-md
      border border-border/20
      shadow-sm
    `,
  };

  const hoverStyles = hover ? `
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:-translate-y-1 hover:scale-[1.01]
    hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.15),0_0_0_1px_hsl(var(--accent)/0.15)_inset]
    hover:border-accent/30
  ` : "transition-colors duration-300";

  return (
    <div 
      className={cn(
        "rounded-2xl",
        variants[variant],
        hoverStyles,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
