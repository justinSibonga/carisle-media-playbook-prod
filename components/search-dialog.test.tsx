import { describe, test, expect, mock } from "bun:test";
import { SearchDialog } from './search-dialog';
import * as React from 'react';

// Mock next/navigation
mock.module("next/navigation", () => ({
  useRouter: () => ({
    push: () => {},
  }),
}));

describe("SearchDialog", () => {
  test("it exports the component", () => {
    expect(SearchDialog).toBeDefined();
  });
});
