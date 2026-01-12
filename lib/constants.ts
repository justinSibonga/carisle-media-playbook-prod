/**
 * UI Constants - Centralized magic numbers and design tokens
 * These values are used across components to maintain consistency
 */

// =============================================================================
// ICON SIZES
// =============================================================================
export const ICON_SIZE = {
  /** Extra small icons (badges, inline) */
  XS: 12,
  /** Small icons (buttons, list items) */
  SM: 14,
  /** Default icon size */
  MD: 16,
  /** Medium-large icons (section headers) */
  LG: 18,
  /** Large icons (callouts, alerts) */
  XL: 20,
  /** Extra large icons (hero sections) */
  XXL: 24,
  /** Feature icons */
  XXXL: 32,
} as const;

// =============================================================================
// TIMING / DURATION
// =============================================================================
export const TIMING = {
  /** Immediate/next tick (focus, close) */
  IMMEDIATE: 0,
  /** Toast/notification auto-dismiss */
  TOAST_DURATION: 2000,
  /** Scroll to element delay */
  SCROLL_DELAY: 100,
  /** Debounce for search input */
  DEBOUNCE_SEARCH: 300,
} as const;

// =============================================================================
// RACI TABLE COLUMN WIDTHS
// =============================================================================
export const RACI_COLUMN_WIDTH = {
  /** Activity description column */
  ACTIVITY: '200px',
  /** Frequency column */
  FREQUENCY: '90px',
  /** Role columns (standard) */
  ROLE: '80px',
  /** Marketing column (wider for label) */
  MARKETING: '90px',
} as const;

// =============================================================================
// LAYOUT
// =============================================================================
export const LAYOUT = {
  /** Sidebar avatar size */
  AVATAR_SIZE: 40,
  /** Small icon container */
  ICON_CONTAINER_SM: 16,
} as const;

// =============================================================================
// Z-INDEX LAYERS
// =============================================================================
export const Z_INDEX = {
  /** Base layer */
  BASE: 0,
  /** Dropdown menus */
  DROPDOWN: 10,
  /** Fixed headers */
  HEADER: 20,
  /** Sidebar overlay */
  SIDEBAR: 30,
  /** Modals and dialogs */
  MODAL: 40,
  /** Toast notifications */
  TOAST: 50,
} as const;
