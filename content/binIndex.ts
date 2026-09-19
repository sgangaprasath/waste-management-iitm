import { zones } from "./zones";
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

/**
 * Entries written specifically for search — the everyday singular nouns people
 * type, which the zone pages express as grouped phrases.
 */
const extra: IndexEntry[] = [
  { item: "Banana peel", bin: "green", detail: "All fruit and vegetable peel is wet waste.", zone: "all", group: "Food", aliases: ["fruit", "peel", "skin"] },
  { item: "Tea bag", bin: "green", detail: "Tea leaves and used bags are wet waste.", zone: "all", group: "Food", aliases: ["chai", "tea leaves"] },
  { item: "Coffee grounds", bin: "green", zone: "all", group: "Food" },
  { item: "Egg shells", bin: "green", zone: "all", group: "Food", aliases: ["egg", "eggshell"] },
  { item: "Coconut shell", bin: "green", detail: "The segregation yard sorts coconut shells as their own category.", zone: "all", group: "Food", aliases: ["coconut"] },
  { item: "Leftover food", bin: "green", detail: "Drain any liquid first.", zone: "all", group: "Food", aliases: ["plate scrape", "mess food", "rice", "curry", "sambar", "dal", "idli", "dosa", "roti", "chapati", "sabzi", "food"] },
  { item: "Paper cup", bin: "red", detail: "Lined with plastic, so it cannot be recycled as paper.", zone: "all", group: "Food", aliases: ["coffee cup", "tea cup", "disposable cup"] },
  { item: "Plastic water bottle", bin: "blue", detail: "Rinse, leave the cap on, do not crush.", zone: "all", group: "Packaging", aliases: ["pet bottle", "bisleri", "water bottle"] },
  { item: "Milk pouch", bin: "red", detail: "Multilayered. Rinse and keep dry for a Punch the Plastic point if you can.", zone: "all", group: "Packaging", aliases: ["milk packet", "milk cover"] },
  { item: "Chip packet", bin: "red", detail: "Multilayered foil — not conventionally recyclable.", zone: "all", group: "Packaging", aliases: ["lays", "crisps", "snack wrapper", "chips"] },
  { item: "Chocolate wrapper", bin: "red", zone: "all", group: "Packaging", aliases: ["candy wrapper", "sweet wrapper"] },
  { item: "Biscuit packet", bin: "red", zone: "all", group: "Packaging", aliases: ["cookie packet"] },
  { item: "Instant noodle packet", bin: "red", zone: "all", group: "Packaging", aliases: ["maggi", "noodles"] },
  { item: "Cardboard box", bin: "blue", detail: "Flatten it and stack it beside the bin, not inside.", zone: "all", group: "Packaging", aliases: ["carton", "delivery box", "amazon box", "parcel"] },
  { item: "Newspaper", bin: "blue", zone: "all", group: "Paper", aliases: ["paper", "news"] },
  { item: "Exam script", bin: "blue", detail: "Clean, dry paper is the highest-value thing the campus recycles.", zone: "academic", group: "Paper", aliases: ["answer sheet", "exam paper"] },
  { item: "Notebook", bin: "blue", detail: "Remove any spiral binding first.", zone: "all", group: "Paper", aliases: ["register", "note book"] },
  { item: "Textbook", bin: "blue", detail: "If it is still readable, take it to the book bank instead.", zone: "all", group: "Paper", aliases: ["book", "course book"] },
  { item: "Pen", bin: "red", detail: "Mixed plastic and metal — not recoverable.", zone: "all", group: "Stationery", aliases: ["ballpoint", "biro"] },
  { item: "Pencil", bin: "green", detail: "Bare wood composts; anything with a plastic body goes to red.", zone: "all", group: "Stationery" },
  { item: "Whiteboard marker", bin: "red", zone: "academic", group: "Stationery", aliases: ["marker pen"] },
  { item: "Sticky tape", bin: "red", zone: "all", group: "Stationery", aliases: ["cellotape", "sellotape"] },
  { item: "Stapler pins", bin: "blue", detail: "Recoverable metal.", zone: "all", group: "Stationery", aliases: ["staples"] },
  { item: "Battery", bin: "black", detail: "Never any of the three bins. Take it to an e-waste point.", zone: "all", group: "Electrical", aliases: ["cell", "aa", "aaa", "button cell", "power bank"] },
  { item: "Phone charger", bin: "black", zone: "all", group: "Electrical", aliases: ["cable", "adapter", "charger", "usb"] },
  { item: "Laptop", bin: "black", detail: "Wipe your data first. If it still works, offer it on Freecycle.", zone: "all", group: "Electrical", aliases: ["computer", "pc"] },
  { item: "Earphones", bin: "black", zone: "all", group: "Electrical", aliases: ["headphones", "earbuds"] },
  { item: "Tube light", bin: "black", detail: "Never break it — CFLs and tubes contain mercury.", zone: "all", group: "Electrical", aliases: ["cfl", "bulb", "led", "lamp"] },
  { item: "Broken glass", bin: "red", detail: "Wrap it in newspaper and mark it ‘broken glass’ for the person who empties the bin.", zone: "all", group: "Hazard", aliases: ["glass", "broken bottle", "shard"] },
  { item: "Glass bottle", bin: "blue", detail: "Rinse and keep it whole. Broken glass goes to red.", zone: "all", group: "Packaging", aliases: ["jar", "bottle"] },
  { item: "Sanitary napkin", bin: "red", detail: "Wrap in opaque paper or a marked bag. Use the dedicated bin where there is one.", zone: "all", group: "Personal", aliases: ["pad", "sanitary pad", "tampon"] },
  { item: "Diaper", bin: "red", detail: "Wrap securely before disposal.", zone: "residential", group: "Personal", aliases: ["nappy"] },
  { item: "Used tissue", bin: "red", zone: "all", group: "Personal", aliases: ["tissue paper", "napkin"] },
  { item: "Expired medicine", bin: "yellow", detail: "Hold it for the monthly hazardous drive. Never the drain, never a bin.", zone: "all", group: "Hazard", aliases: ["tablets", "syrup", "medicines", "drugs"] },
  { item: "Used cooking oil", bin: "yellow", detail: "Collect in a sealed bottle for the oil collection point. Never down the drain.", zone: "residential", group: "Hazard", aliases: ["oil", "frying oil"] },
  { item: "Paint tin", bin: "yellow", zone: "residential", group: "Hazard", aliases: ["paint", "varnish", "thinner"] },
  { item: "Laboratory solvent", bin: "yellow", detail: "Labelled container, logbook entry, certified consignment. Never a sink.", zone: "academic", group: "Hazard", aliases: ["acetone", "methanol", "toluene", "chemical", "reagent"] },
  { item: "Petri dish with culture", bin: "yellow", detail: "Autoclave before it leaves the lab.", zone: "academic", group: "Hazard", aliases: ["agar", "culture", "biohazard"] },
  { item: "Lab gloves", bin: "yellow", detail: "If they touched a reagent. Gloves that touched nothing are ordinary waste.", zone: "academic", group: "Hazard", aliases: ["nitrile", "gloves"] },
  { item: "Pipette tips", bin: "yellow", zone: "academic", group: "Hazard", aliases: ["microtips", "eppendorf"] },
  { item: "Thermocol", bin: "red", zone: "all", group: "Packaging", aliases: ["styrofoam", "polystyrene", "packing foam"] },
  { item: "Bubble wrap", bin: "blue", detail: "Clean single-layer film — keep it dry and bundled.", zone: "all", group: "Packaging" },
  { item: "Carry bag", bin: "blue", detail: "Clean and dry only. A greasy bag goes to red.", zone: "all", group: "Packaging", aliases: ["plastic bag", "polythene", "cover"] },
  { item: "Aluminium foil", bin: "blue", detail: "Only if clean. Foil with food on it goes to red.", zone: "all", group: "Packaging", aliases: ["foil", "silver foil"] },
  { item: "Food container", bin: "blue", detail: "Rinse with plain water and let it dry.", zone: "all", group: "Packaging", aliases: ["takeaway box", "tiffin", "parcel box"] },
  { item: "Steel can", bin: "blue", detail: "Empty and rinse.", zone: "all", group: "Packaging", aliases: ["tin", "can", "soft drink can"] },
  { item: "Garden trimmings", bin: "green", zone: "residential", group: "Garden", aliases: ["leaves", "grass", "branches", "flowers"] },
  { item: "Old clothes", bin: "red", detail: "Wearable clothing belongs in a donation drive or on Freecycle, not a bin.", zone: "all", group: "Bulky", aliases: ["clothing", "textile", "shirt", "fabric"] },
  { item: "Footwear", bin: "red", zone: "all", group: "Bulky", aliases: ["shoes", "slippers", "chappal"] },
  { item: "Mattress", bin: "red", detail: "At semester end, take it to the handover depot or list it on Freecycle.", zone: "hostel", group: "Bulky", aliases: ["bed", "bedding"] },
  { item: "Cycle", bin: "black", detail: "Working cycles go to the cycle pool or Freecycle; the rest are stripped for parts.", zone: "hostel", group: "Bulky", aliases: ["bicycle", "bike"] },
  { item: "Furniture", bin: "black", detail: "Book a bulky-waste collection. Offer it on Freecycle first.", zone: "all", group: "Bulky", aliases: ["chair", "table", "cupboard", "desk"] },
  { item: "Construction debris", bin: "black", detail: "Never mixed with household waste. Arrange separate lifting.", zone: "all", group: "Bulky", aliases: ["rubble", "cement", "tiles", "renovation"] },
  { item: "Room sweepings", bin: "red", zone: "hostel", group: "Other", aliases: ["dust", "hair", "sweeping"] },
  { item: "Ceramic mug", bin: "red", detail: "Broken crockery — wrap it before disposal.", zone: "all", group: "Other", aliases: ["cup", "crockery", "plate", "broken mug"] },
];

/** Everything the zone pages already list, flattened for search. */
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

export const binIndex: IndexEntry[] = [...extra, ...fromZones];

/** Words that are useless for matching. */
const STOP = new Set(["and", "or", "the", "a", "an", "of", "with", "from", "for", "in", "on", "to"]);

export function searchIndex(query: string): IndexEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/[\s,]+/).filter((t) => t.length > 1 && !STOP.has(t));
  if (!terms.length) return [];

  const scored = binIndex
    .map((e) => {
      const hay = `${e.item} ${e.aliases?.join(" ") ?? ""} ${e.detail ?? ""} ${e.group}`.toLowerCase();
      const name = e.item.toLowerCase();
      const alias = (e.aliases ?? []).map((a) => a.toLowerCase());
      let score = 0;
      for (const t of terms) {
        if (name === t) score += 100;
        else if (alias.includes(t)) score += 90;
        else if (name.startsWith(t)) score += 60;
        else if (name.includes(t)) score += 40;
        else if (alias.some((a) => a.includes(t))) score += 30;
        else if (hay.includes(t)) score += 10;
      }
      // prefer the hand-written singular entries over the grouped zone phrases
      if (score && e.aliases) score += 5;
      return { e, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.e.item.length - b.e.item.length);

  // de-duplicate by item name
  const seen = new Set<string>();
  const out: IndexEntry[] = [];
  for (const { e } of scored) {
    const k = e.item.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(e);
    if (out.length >= 12) break;
  }
  return out;
}

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
];
