# Carisle Media Handbook

Internal digital handbook for Carisle Media, built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. It publishes the company's operational playbooks, HR policies, role scorecards, KPIs, and onboarding docs, and is protected by Google OAuth for the `hireable.ph` and `carislemedia.com` domains.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. The home page shows a sign-in screen; authenticated users land on `/home`.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Regenerate the search index and build for production |
| `npm run build-index` | Regenerate `src/lib/search-index.ts` only |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

### Environment variables

Copy `.env.example` (if present) and set at least:

- `AUTH_SECRET` — NextAuth session secret
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` — OAuth credentials (see `docs/GOOGLE_OAUTH_SETUP.md`)

## Project layout

All source lives under `src/` and is grouped by feature. The top-level shape:

```
src/
  app/                         # Next.js App Router routes
    (playbook|hr-policies|scorecard)/<slug>/page.tsx
    api/auth/[...nextauth]/route.ts
    layout.tsx, page.tsx, globals.css
  proxy.ts                     # Next.js middleware (auth guard)
  components/
    ui/                        # Reusable primitives (FolderTabs, StepProcess, ...)
    layout/                    # Sidebar, footers, page shells, session provider
    layout/sidebar/            # Split sidebar (composition, nav, user menu, dialogs)
    search/                    # Cmd+K search dialog
    auth/                      # Login form
    onboarding/                # Guided tour
    icons/                     # Logo and team-member images
    playbook/<feature>/        # One folder per playbook page
    hr-policies/<policy>/      # One folder per HR policy page
    scorecard/                 # Shared role-scorecard layout
  data/                        # Content data for playbook/scorecard pages
  hooks/                       # Reusable React hooks (useSidebar, useScrollToHash)
  types/                       # Shared TypeScript types
  constants/                   # UI tokens and layout constants
  lib/                         # Auth, utils, motion, navigation, generated search index
```

### Where does what live?

- **A new playbook page** — add a route at `src/app/playbook/<slug>/page.tsx` that renders a thin shell, and put the content under `src/components/playbook/<slug>/`. Move any data arrays into `src/data/<slug>.ts`.
- **A new HR policy page** — same pattern under `src/app/hr-policies/<slug>/` and `src/components/hr-policies/<slug>/`.
- **A new role scorecard** — add a data file at `src/data/scorecards/<role>.tsx` exporting `META` and `TABS`, then create a one-file `src/app/scorecard/<role>/page.tsx` that forwards them to `RoleScorecard`.
- **UI primitives** — go under `src/components/ui/`.
- **Design tokens** — sizes, timings, z-index, table widths live in `src/constants/*`. Avoid hard-coded values in components.

### Authentication

Google OAuth with domain allowlisting is wired up in `src/lib/auth.ts`. `src/proxy.ts` redirects unauthenticated traffic to `/`, and `src/app/page.tsx` is the sign-in screen.

### Search

`src/lib/search-index.ts` is regenerated from page and component content by `scripts/generate-search-index.js` (run automatically as part of `npm run build`). The dialog itself lives at `src/components/search/search-dialog.tsx`.

## Conventions

See `.cursorrules` and the files under `.agent/workflows/` for TypeScript, Tailwind v4, component, and data-fetching conventions. Highlights:

- Functional components only. Keep props interfaces named `<Component>Props`.
- Use the `cn()` helper from `src/lib/utils.ts` for conditional classes.
- Prefer server components; add `"use client"` only when a hook, event handler, or browser API is needed.
- No magic numbers — use the constants in `src/constants/`.
