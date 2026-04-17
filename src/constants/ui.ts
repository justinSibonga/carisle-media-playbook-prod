/**
 * UI design tokens used across components.
 *
 * Centralized here so that icon sizes, animation timings, layout metrics, and
 * z-index layers stay consistent as components are added or refactored.
 */

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

export const LAYOUT = {
  /** Sidebar avatar size */
  AVATAR_SIZE: 40,
  /** Small icon container */
  ICON_CONTAINER_SM: 16,
} as const;

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
