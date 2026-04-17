/**
 * Column widths for the RACI chart table. Kept as strings because they are
 * applied directly to `style.width` attributes on `<col>` and `<th>` elements.
 */

export const RACI_COLUMN_WIDTH = {
  /** Activity description column */
  ACTIVITY: "200px",
  /** Frequency column */
  FREQUENCY: "90px",
  /** Role columns (standard) */
  ROLE: "80px",
  /** Marketing column (wider for label) */
  MARKETING: "90px",
} as const;
