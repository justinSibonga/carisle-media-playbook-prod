---
description: Project architecture and folder structure guidelines
---

# Architecture Guidelines

## Project Overview

This is a Next.js 15 application using the App Router with Tailwind CSS v4 for styling.

## Folder Structure

### `/src/app` - App Router

- Contains all pages, layouts, and API routes
- Use route groups `(groupName)` for organization without affecting URLs
- Each route folder should contain `page.tsx` and optionally `layout.tsx`, `loading.tsx`, `error.tsx`

### `/src/components` - React Components

- `/ui` - Reusable primitives (Button, Input, Card, etc.)
- `/[feature]` - Feature-specific components grouped by domain

### `/src/lib` - Utilities

- Helper functions, API clients, and shared logic
- Keep functions pure when possible

### `/src/hooks` - Custom Hooks

- Reusable React hooks
- Prefix with `use` (e.g., `useAuth`, `useMediaQuery`)

### `/src/types` - TypeScript Definitions

- Shared type definitions and interfaces
- Domain-specific types in separate files

### `/src/constants` - Constants

- App configuration, API endpoints, static values

## Adding New Features

1. Create feature folder in `/src/components/[feature-name]`
2. Add page in `/src/app/[feature-name]/page.tsx`
3. Define types in `/src/types/[feature-name]-types.ts`
4. Add any utilities in `/src/lib/[feature-name].ts`

## Server vs Client Components

- **Default to Server Components** - They run on the server and reduce client bundle size
- **Use Client Components when you need:**
  - Event handlers (onClick, onChange, etc.)
  - useState, useEffect, or other React hooks
  - Browser-only APIs
  - Interactive UI elements
