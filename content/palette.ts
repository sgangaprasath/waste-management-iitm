/**
 * Swatches for the bin finder.
 *
 * Deliberately separate from the Tailwind theme: these are data-driven
 * colours applied inline per item, not utility classes, so they cannot be
 * expressed as `bg-…` strings that Tailwind would have to see at build time.
 */

export type Swatch = {
  /** Very light background. */
  tint: string;
  /** Hairline border on `tint`. */
  edge: string;
  /** Text and glyph colour, legible on `tint` (all ≥ 4.5:1). */
  deep: string;
};

/**
 * One swatch per bin-finder category. The hue nods at the subject where it
 * can — greens for food and garden, blue for paper, amber for the lab — and
 * simply stays distinct where it cannot.
 */
export const groupSwatch: Record<string, Swatch> = {
  "Food & kitchen": { tint: "#EDF6F0", edge: "#C9E2D3", deep: "#1F5A32" },
  Packaging: { tint: "#EBF2FB", edge: "#C8DCF2", deep: "#154679" },
  "Paper & stationery": { tint: "#EEF1F9", edge: "#D2D9EE", deep: "#2E3C78" },
  "Electronics & electrical": { tint: "#F0F1F2", edge: "#D5D7DA", deep: "#30363D" },
  "Laboratory & chemicals": { tint: "#FBF4E4", edge: "#EDDCB4", deep: "#7A5709" },
  "Personal care & medical": { tint: "#FCEEED", edge: "#F2D2CF", deep: "#8A1C15" },
  "Textiles & footwear": { tint: "#F5EEF8", edge: "#E2D1EB", deep: "#5B2D73" },
  "Furniture & bulky": { tint: "#F7F0E8", edge: "#E6D6C4", deep: "#6B4420" },
  "Garden & outdoor": { tint: "#F0F6E8", edge: "#D7E7C2", deep: "#3C5B18" },
  "Festival & events": { tint: "#FBEDF3", edge: "#F0CFDE", deep: "#8A1E4D" },
  "Cleaning & maintenance": { tint: "#E9F5F4", edge: "#C4E3E0", deep: "#14544F" },
  "Construction & renovation": { tint: "#F2F1EE", edge: "#DCD9D1", deep: "#4A443A" },
  "Sports & other": { tint: "#EEEFFA", edge: "#D3D5F0", deep: "#33378C" },
  "Hostel & mess": { tint: "#FBF0E7", edge: "#F0D7C1", deep: "#8A4A14" },
  "Office & admin": { tint: "#EDF3F5", edge: "#CDDEE4", deep: "#1F4C5C" },
  Miscellaneous: { tint: "#F4F4F2", edge: "#E0E0DB", deep: "#4A4A45" },
};

export const neutralSwatch: Swatch = { tint: "#F4F4F2", edge: "#E0E0DB", deep: "#4A4A45" };

export function swatchFor(group: string): Swatch {
  return groupSwatch[group] ?? neutralSwatch;
}
