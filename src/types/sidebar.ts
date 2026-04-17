/**
 * State and action shapes for the sidebar reducer. Kept here (not in the
 * component file) so tests and hooks can import them without pulling in the
 * full sidebar UI.
 */

export type SidebarState = {
  isOpen: boolean;
  isSearchOpen: boolean;
  isLogoutOpen: boolean;
  expandedSections: string[];
  isCollapsed: boolean;
};

export type SidebarAction =
  | { type: "toggleOpen" }
  | { type: "setOpen"; payload: boolean }
  | { type: "setSearchOpen"; payload: boolean }
  | { type: "setLogoutOpen"; payload: boolean }
  | { type: "toggleCollapse" }
  | { type: "collapseAll" }
  | { type: "toggleSection"; payload: string };
