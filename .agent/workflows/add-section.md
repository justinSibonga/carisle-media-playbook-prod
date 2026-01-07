---
description: How to add a new section component to the handbook
---

# Adding a New Section

## Section Types

| Type          | Location                                | Example                                |
| ------------- | --------------------------------------- | -------------------------------------- |
| **Scorecard** | `/app/scorecard/[role-name]/page.tsx`   | `web-developer`, `finance-coordinator` |
| **Playbook**  | `/app/playbook/[section-name]/page.tsx` | `training-plan`, `communication-rules` |

---

## Scorecard Pages

### 1. Create Page

Create `app/scorecard/[role-name]/page.tsx`:

```tsx
"use client";
import { PlaybookPageLayout } from "@/components/playbook-page-layout";

export default function RoleNameScorecardPage() {
  return (
    <PlaybookPageLayout>
      <div className="animate-fade-in prose-handbook">
        <div className="mb-8">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">
            Role Score Card
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
            Role Name
          </h1>
          <p className="text-muted-foreground">Carisle Media</p>
        </div>
        {/* Sections with numbered headers */}
        <section>
          <h2 className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
              1
            </span>
            Role Purpose
          </h2>
          <p>Content...</p>
        </section>
      </div>
    </PlaybookPageLayout>
  );
}
```

### 2. Add to Navigation

In `lib/navigation.ts`, add to Role Score Card section:

```typescript
{ name: "Role Name", href: "/scorecard/role-name", keywords: ["keyword1", "keyword2"] }
```

---

## Playbook Pages

### 1. Create Component

Create `components/[section-name]-section.tsx`:

```tsx
export function SectionNameSection() {
  return (
    <div className="animate-fade-in prose-handbook">
      <div className="mb-8">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">
          Operations Playbook
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">
          Section Title
        </h1>
        <p className="text-muted-foreground">Description...</p>
      </div>
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6 pb-2 border-b border-border">
          Heading
        </h2>
        <p>Content...</p>
      </section>
    </div>
  );
}
```

### 2. Create Route Page

Create `app/playbook/[section-name]/page.tsx`:

```tsx
import { PlaybookPageLayout } from "@/components/playbook-page-layout";
import { SectionNameSection } from "@/components/section-name-section";

export default function SectionNamePage() {
  return (
    <PlaybookPageLayout>
      <SectionNameSection />
    </PlaybookPageLayout>
  );
}
```

### 3. Add to Navigation

In `lib/navigation.ts`, add to Operational Playbook section:

```typescript
{ name: "Section Name", href: "/playbook/section-name", keywords: ["keyword1", "keyword2"] }
```

---

## Common UI Patterns

### Info Box

```tsx
<div className="bg-muted/50 p-4 rounded-lg my-6">
  <p className="text-sm my-0!">
    <strong className="text-primary">Note:</strong> Info text
  </p>
</div>
```

### Alert Box

```tsx
<div className="bg-accent/10 border-l-4 border-accent p-4 mt-4 rounded-r-md">
  <p className="text-sm font-medium text-primary">Important message</p>
</div>
```

### Table

```tsx
<div className="overflow-x-auto">
  <table>
    <thead>
      <tr>
        <th>Column</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Value</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Checklist

- [ ] Created page/component with correct naming
- [ ] Used `animate-fade-in prose-handbook` wrapper
- [ ] Used semantic color tokens (no hardcoded colors)
- [ ] Added to `lib/navigation.ts` with keywords
- [ ] Wrapped tables in `overflow-x-auto`
