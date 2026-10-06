import { zones } from "./zones";
import { categories, type Row } from "./items";
import type { BinKey } from "./bins";

export type IndexEntry = {
  /** The thing you are holding. */
  item: string;
  bin: BinKey;
  /** How to prepare it, or why it goes where it goes. */
  detail?: string;
  /** Which zone page this came from, for the "read more" link. */
  zone: "academic" | "hostel" | "residential" | "all";
  group: string;
  /** Extra words people actually search for. */
  aliases?: string[];
};

/** Which zone page a category should send people to. */
const groupZone: Record<string, IndexEntry["zone"]> = {
  "Laboratory & chemicals": "academic",
  "Office & admin": "academic",
  "Hostel & mess": "hostel",
  "Garden & outdoor": "residential",
  "Construction & renovation": "residential",
  "Cleaning & maintenance": "residential",
};

function expand(group: string, row: Row): IndexEntry {
  const [item, bin, detail, aliases] = row as [string, BinKey, string?, string?];
  return {
    item,
    bin,
    detail: detail || undefined,
    zone: groupZone[group] ?? "all",
    group,
    aliases: aliases ? aliases.split("|").filter(Boolean) : undefined,
  };
}

/** The curated dictionary. */
const fromDictionary: IndexEntry[] = categories.flatMap((c) =>
  c.rows.map((r) => expand(c.group, r))
);

/** Everything the zone pages already list, so nothing on the site is unsearchable. */
const fromZones: IndexEntry[] = zones.flatMap((z) =>
  z.groups.flatMap((g) =>
    g.items.map((it) => ({
      item: it.item,
      bin: it.bin,
      detail: it.detail,
      zone: z.slug,
      group: g.title,
    }))
  )
);

export const binIndex: IndexEntry[] = [...fromDictionary, ...fromZones];

/** Every distinct group, for the browse-by-category view. */
export const indexGroups: string[] = categories.map((c) => c.group);

const STOP = new Set(["and", "or", "the", "a", "an", "of", "with", "from", "for", "in", "on", "to", "my", "is"]);

/** Cheap singular/plural folding so "bottles" finds "bottle". */
function stem(t: string): string {
  if (t.length > 4 && t.endsWith("ies")) return t.slice(0, -3) + "y";
  // only drop "es" after a sibilant — boxes, dishes, benches — never bottles
  if (t.length > 4 && /(s|x|z|ch|sh)es$/.test(t)) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

export function searchIndex(query: string, limit = 20): IndexEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q
    .split(/[\s,/]+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => ({ raw: t, stem: stem(t) }));
  if (!terms.length) return [];

  const scored = binIndex
    .map((e) => {
      const name = e.item.toLowerCase();
      const nameStem = stem(name);
      const alias = (e.aliases ?? []).map((a) => a.toLowerCase());
      const hay = `${name} ${alias.join(" ")} ${e.detail ?? ""} ${e.group}`.toLowerCase();
      const words = name.split(/[^a-z0-9]+/).filter(Boolean);
      let score = 0;
      for (const { raw, stem: st } of terms) {
        if (name === raw || nameStem === st) score += 120;
        else if (alias.includes(raw)) score += 100;
        // a whole word inside the name beats a mere prefix of a different word
        else if (words.includes(raw) || words.map(stem).includes(st)) score += 85;
        else if (name.startsWith(raw)) score += 70;
        else if (alias.some((a) => a.startsWith(raw))) score += 55;
        else if (name.includes(raw) || name.includes(st)) score += 45;
        else if (alias.some((a) => a.includes(raw) || a.includes(st))) score += 35;
        else if (hay.includes(raw) || hay.includes(st)) score += 10;
      }
      // the curated singular entries beat the grouped phrases lifted from zone pages
      if (score && e.aliases) score += 6;
      if (score && e.detail) score += 2;
      // grouped phrases lifted from the zone pages are long; prefer the
      // single-item dictionary entries when both match
      if (score && e.item.length > 38) score -= 25;
      return { e, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.e.item.length - b.e.item.length);

  const seen = new Set<string>();
  const out: IndexEntry[] = [];
  for (const { e } of scored) {
    const k = e.item.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(e);
    if (out.length >= limit) break;
  }
  return out;
}

/** Everything in one group, for browsing. */
export function itemsInGroup(group: string): IndexEntry[] {
  return fromDictionary
    .filter((e) => e.group === group)
    .sort((a, b) => a.item.localeCompare(b.item));
}

/** Everything that goes in one container, for browsing by colour. */
export function itemsInBin(bin: BinKey): IndexEntry[] {
  return fromDictionary
    .filter((e) => e.bin === bin)
    .sort((a, b) => a.item.localeCompare(b.item));
}

/** How many dictionary items each container takes. */
export const binCounts = fromDictionary.reduce(
  (acc, e) => {
    acc[e.bin] = (acc[e.bin] ?? 0) + 1;
    return acc;
  },
  {} as Record<BinKey, number>
);

/** The container each item ends up in, so chips can be colour-coded. */
export const binOfItem = new Map<string, BinKey>(
  fromDictionary.map((e) => [e.item.toLowerCase(), e.bin])
);

/** A few starting points shown before anyone types. */
export const commonItems = [
  "Paper cup",
  "Chip packet",
  "Battery",
  "Broken glass",
  "Milk pouch",
  "Cardboard box",
  "Expired medicine",
  "Cycle",
  "Sanitary napkin",
  "Tube light",
];
