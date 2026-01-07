---
description: Next.js Standards for Components, Tailwind CSS, and Global Styles
---

# Next.js Standards

## Folder Structure

| Location                         | Purpose                |
| -------------------------------- | ---------------------- |
| `/app/[route]/page.tsx`          | Route pages            |
| `/components/[name]-section.tsx` | Section components     |
| `/components/ui/`                | Reusable UI primitives |
| `/lib/navigation.ts`             | Sidebar config         |
| `/lib/search-content.ts`         | Search keywords        |

## File Naming

- **Files**: `kebab-case.tsx` (e.g., `user-card.tsx`)
- **Components**: PascalCase (e.g., `export function UserCard()`)
- **Pages**: Always `page.tsx` in route folder

## Use Client Directive

Add `"use client"` ONLY when using:

- `useState`, `useEffect`, `useRef`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `document`)

**Default to Server Components.** Only add when you get an error.

## Semantic Color Tokens

**Never use raw colors** like `bg-white`, `text-gray-900`. Use semantic tokens:

| Token                   | Purpose             |
| ----------------------- | ------------------- |
| `bg-background`         | Page background     |
| `bg-card`               | Cards, panels       |
| `bg-muted`              | Subtle backgrounds  |
| `bg-accent`             | Highlights          |
| `text-foreground`       | Main text           |
| `text-primary`          | Headings            |
| `text-muted-foreground` | Secondary text      |
| `border-border`         | All borders         |
| `bg-rating-1` to `5`    | Rating scale colors |
| `bg-raci-*`             | RACI chart colors   |
| `bg-value-*`            | Core value colors   |
| `text-status-success`   | Success/green text  |
| `text-status-warning`   | Warning/yellow text |
| `text-status-caution`   | Caution/orange text |
| `text-status-danger`    | Danger/red text     |
| `text-status-info`      | Info/blue text      |
| `bg-status-*-bg`        | Status backgrounds  |

## Import Order

```tsx
// 1. React/Next.js
import { useState } from "react";
import Image from "next/image";

// 2. Third-party
import { CheckCircle2 } from "lucide-react";

// 3. Internal
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

// 4. Types
import type { User } from "@/types";
```

Always use `@/` path aliases, never relative paths.

## cn() Utility

Use for class merging:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class", className)} />;
```

## Common Issues

| Issue                  | Fix                                                         |
| ---------------------- | ----------------------------------------------------------- |
| Unknown Tailwind class | Define in `globals.css` AND `tailwind.config.ts`            |
| Hydration mismatch     | Use `useState(false)` + `useEffect(() => setMounted(true))` |
| Images not loading     | Use `next/image` with explicit `width` and `height`         |
