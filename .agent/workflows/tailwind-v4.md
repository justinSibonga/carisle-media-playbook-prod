---
description: Tailwind CSS v4 specific patterns and usage
---

# Tailwind CSS v4 Guidelines

## Setup

Tailwind v4 uses a simplified import system:

```css
/* src/styles/globals.css */
@import "tailwindcss";
```

## Theme Configuration

### Using @theme Directive

Tailwind v4 uses CSS-based configuration with the `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-primary: #3b82f6;
  --color-primary-foreground: #ffffff;
  --color-secondary: #64748b;
  --color-background: #ffffff;
  --color-foreground: #0f172a;

  /* Spacing */
  --spacing-section: 4rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  /* Fonts */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

## Utility Patterns

### Conditional Classes

Always use the `cn()` utility for conditional classes:

```tsx
import { cn } from "@/lib/utils";

// The cn() helper (typically using clsx + tailwind-merge)
<button
  className={cn(
    "px-4 py-2 rounded-md font-medium",
    "bg-primary text-primary-foreground",
    "hover:bg-primary/90 transition-colors",
    isDisabled && "opacity-50 cursor-not-allowed",
    className
  )}
/>;
```

### cn() Utility Implementation

```ts
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Responsive Design

Mobile-first approach with standard breakpoints:

```tsx
// Mobile first - base styles for mobile
<div
  className="
  flex flex-col gap-4
  sm:flex-row sm:gap-6
  md:gap-8
  lg:grid lg:grid-cols-3
"
/>
```

| Breakpoint | Min Width | Usage                       |
| ---------- | --------- | --------------------------- |
| `sm`       | 640px     | Large phones, small tablets |
| `md`       | 768px     | Tablets                     |
| `lg`       | 1024px    | Laptops                     |
| `xl`       | 1280px    | Desktops                    |
| `2xl`      | 1536px    | Large screens               |

## Dark Mode

Tailwind v4 supports dark mode with the `dark:` variant:

```tsx
<div
  className="
  bg-white dark:bg-slate-900
  text-slate-900 dark:text-slate-100
"
/>
```

## Animation Utilities

```css
@theme {
  --animate-fade-in: fade-in 0.2s ease-out;
  --animate-slide-up: slide-up 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

Usage:

```tsx
<div className="animate-fade-in" />
```

## Best Practices

### DO ✅

- Use semantic color names (primary, secondary, foreground)
- Group related utilities on separate lines for readability
- Use CSS variables in @theme for consistent theming
- Apply `cn()` for all conditional class logic

### DON'T ❌

- Use arbitrary values when a utility exists: `w-[200px]` vs `w-52`
- Create inline styles when Tailwind can do it
- Mix different color systems (hex in some places, CSS vars in others)
- Write excessively long single-line class strings
