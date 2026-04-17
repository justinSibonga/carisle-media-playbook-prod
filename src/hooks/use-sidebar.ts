import { useReducer } from "react";
import type { SidebarAction, SidebarState } from "@/types/sidebar";

export const INITIAL_SIDEBAR_STATE: SidebarState = {
  isOpen: false,
  isSearchOpen: false,
  isLogoutOpen: false,
  expandedSections: [],
  isCollapsed: false,
};

// Only one expandable section can be open at a time. Toggling a section while
// the sidebar is collapsed first expands the sidebar before opening the group.
export function sidebarReducer(state: SidebarState, action: SidebarAction): SidebarState {
  switch (action.type) {
    case "toggleOpen":
      return { ...state, isOpen: !state.isOpen };
    case "setOpen":
      return { ...state, isOpen: action.payload };
    case "setSearchOpen":
      return { ...state, isSearchOpen: action.payload };
    case "setLogoutOpen":
      return { ...state, isLogoutOpen: action.payload };
    case "toggleCollapse":
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
        expandedSections: state.isCollapsed ? state.expandedSections : [],
      };
    case "collapseAll":
      return { ...state, expandedSections: [] };
    case "toggleSection":
      if (state.isCollapsed) {
        return {
          ...state,
          isCollapsed: false,
          expandedSections: [action.payload],
        };
      }
      return {
        ...state,
        expandedSections: state.expandedSections.includes(action.payload) ? [] : [action.payload],
      };
    default:
      return state;
  }
}

export function useSidebar() {
  return useReducer(sidebarReducer, INITIAL_SIDEBAR_STATE);
}
