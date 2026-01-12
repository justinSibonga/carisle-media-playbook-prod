---
description: How to create a new page in the Next.js App Router
---

# Creating a New Page

## Steps

### 1. Create the Route Folder

Create a folder in `/src/app/` matching your desired URL:

```bash
# For URL: /dashboard
mkdir src/app/dashboard

# For URL: /settings/profile
mkdir -p src/app/settings/profile

# For dynamic routes: /users/[id]
mkdir -p src/app/users/[id]
```

### 2. Create page.tsx

```tsx
// src/app/[route]/page.tsx

// Optional: Add metadata
export const metadata = {
  title: "Page Title",
  description: "Page description for SEO",
};

export default function PageName() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Page Title</h1>
      {/* Page content */}
    </main>
  );
}
```

### 3. Optional: Add Layout

If this route needs a specific layout:

```tsx
// src/app/[route]/layout.tsx
export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="route-specific-wrapper">
      {/* Route-specific navigation, sidebar, etc. */}
      {children}
    </div>
  );
}
```

### 4. Optional: Add Loading State

```tsx
// src/app/[route]/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  );
}
```

### 5. Optional: Add Error Handling

```tsx
// src/app/[route]/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-xl font-semibold">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-primary text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
```

## Dynamic Routes

For pages with dynamic parameters:

```tsx
// src/app/users/[id]/page.tsx
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;

  // Fetch user data
  const user = await getUser(id);

  return (
    <main>
      <h1>{user.name}</h1>
    </main>
  );
}
```

## Route Groups

Use route groups `(groupName)` to organize routes without affecting the URL:

```
src/app/
├── (marketing)/
│   ├── about/page.tsx      → /about
│   └── contact/page.tsx    → /contact
├── (dashboard)/
│   ├── layout.tsx          → Shared dashboard layout
│   ├── overview/page.tsx   → /overview
│   └── settings/page.tsx   → /settings
```
