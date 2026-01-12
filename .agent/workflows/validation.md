---
description: How to validate code changes against project standards
---

# Validation Workflow

## Pre-Commit Checklist

Before committing any code, run these checks:

// turbo-all

### 1. TypeScript Compilation

```bash
npm run type-check
```

- Ensure no TypeScript errors
- All types are properly defined
- No implicit `any` types

### 2. Linting

```bash
npm run lint
```

- ESLint rules pass
- No unused imports or variables
- Code formatting is correct

### 3. Build Verification

```bash
npm run build
```

- Build completes successfully
- No runtime errors during SSR
- All pages render correctly

## Code Review Checklist

When reviewing or validating code:

### File Naming

- [ ] Components use kebab-case: `user-profile.tsx`
- [ ] Hooks use camelCase with `use` prefix: `useAuth.ts`
- [ ] Types files use kebab-case: `user-types.ts`

### Component Structure

- [ ] Props interface defined with `ComponentNameProps` pattern
- [ ] Imports organized (React → external → internal)
- [ ] Hooks at top of component
- [ ] Handlers defined before return
- [ ] `cn()` used for conditional classes

### Imports

- [ ] Path aliases used (`@/` prefix)
- [ ] No deep relative imports (`../../../`)
- [ ] Unused imports removed

### Tailwind CSS

- [ ] Mobile-first responsive design
- [ ] Classes organized logically
- [ ] CSS variables used for theme values where appropriate
- [ ] No arbitrary values when utility exists

### Forms & Validation

- [ ] Proper form validation implemented
- [ ] Error states handled and displayed
- [ ] Loading states shown during submission
- [ ] Success/error feedback provided

### API & Data

- [ ] Server Components used where possible
- [ ] Proper error handling with try/catch
- [ ] Loading states implemented
- [ ] Data validated before use

### Accessibility

- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus states visible

## Quick Validation Commands

```bash
# Run all checks at once
npm run type-check && npm run lint && npm run build
```
