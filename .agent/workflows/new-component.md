---
description: How to create a new React component following project standards
---

# Creating a New Component

## Determine Component Location

- **UI primitives** (Button, Input, Card) → `/src/components/ui/`
- **Feature components** (UserProfile, DashboardWidget) → `/src/components/[feature]/`
- **Layout components** (Header, Sidebar) → `/src/components/layout/`

## Component Template

### Basic Component

```tsx
// src/components/ui/component-name.tsx
import { cn } from "@/lib/utils";

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return <div className={cn("base-styles", className)}>{children}</div>;
}
```

### Component with Variants

```tsx
// src/components/ui/button.tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Client Component

```tsx
// src/components/feature/interactive-component.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveComponentProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export function InteractiveComponent({
  initialValue = "",
  onChange,
}: InteractiveComponentProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return <div>{/* Interactive content */}</div>;
}
```

## Component Checklist

- [ ] File named in kebab-case: `component-name.tsx`
- [ ] Props interface defined as `ComponentNameProps`
- [ ] `className` prop accepted for customization
- [ ] `cn()` used for conditional/merged classes
- [ ] `'use client'` added only if needed (hooks, event handlers)
- [ ] TypeScript types are explicit (no implicit any)
- [ ] Component is exported as named export

## Exporting Components

If creating multiple related components, use an index file:

```tsx
// src/components/ui/index.ts
export { Button } from "./button";
export { Input } from "./input";
export { Card, CardHeader, CardContent } from "./card";
```

Then import:

```tsx
import { Button, Input, Card } from "@/components/ui";
```
