import type { BinKey } from "./bins";

export type Stream = {
  name: string;
  materials: string;
  prepare: string;
  fate: string;
  bin: BinKey;
  recoverable: "high" | "medium" | "low";
};

export const streams: Stream[] = [
  {
    name: "Paper and card",
    materials: "Scripts, notebooks, newspaper, cartons, office paper.",
    prepare: "Keep dry and free of food. Flatten cartons.",
    fate: "Baled and sold to authorised mills — the campus's highest-value stream.",
    bin: "blue",
    recoverable: "high",
  },
  {
    name: "Rigid plastics",
    materials: "PET bottles, milk and shampoo bottles, buckets, reagent bottles.",
    prepare: "Rinse with plain water, dry, cap on. Don't crush — sorters read the shape.",
    fate: "Granulated into fibre, sheet and moulded goods.",
    bin: "blue",
    recoverable: "high",
  },
  {
    name: "Metals",
    materials: "Cans, foil trays, staples, cycle parts, lab stands, scrap.",
    prepare: "Empty and rinse food cans.",
    fate: "Sold to scrap dealers. Infinitely recyclable, most valuable by weight.",
    bin: "blue",
    recoverable: "high",
  },
  {
    name: "Organics",
    materials: "Mess and kitchen waste, plate scrape, garden trimmings.",
    prepare: "Drain liquids. No plastic, cutlery or wrappers.",
    fate: "≈800 kg a day to the campus biogas digesters; 150–200 kg composted.",
    bin: "green",
    recoverable: "high",
  },
  {
    name: "E-waste",
    materials: "Batteries, cables, boards, instruments, lighting, IT equipment.",
    prepare: "Remove batteries, wipe data-bearing devices.",
    fate: "Certified recyclers under the E-Waste Rules.",
    bin: "black",
    recoverable: "high",
  },
  {
    name: "Glass — intact",
    materials: "Bottles and jars from kitchens, messes, the shopping complex.",
    prepare: "Rinse. Keep whole — broken glass is a hazard to handlers.",
    fate: "Returned to bottlers, or sent for cullet recovery.",
    bin: "blue",
    recoverable: "medium",
  },
  {
    name: "Plastic film — single layer",
    materials: "Carry bags, bubble wrap, clean covers.",
    prepare: "Shake out, keep dry, bundle rather than loose.",
    fate: "Accepted only when clean and unmixed; otherwise a reject.",
    bin: "blue",
    recoverable: "medium",
  },
  {
    name: "Multilayered packaging",
    materials: "Chip and biscuit packets, chocolate wrappers, sachets, cartons.",
    prepare: "Keep dry and hand to a Punch the Plastic point.",
    fate: "Not conventionally recyclable. Routed to pyrolysis partners.",
    bin: "red",
    recoverable: "low",
  },
];

export const contaminationRules = [
  { rule: "Wet is not biodegradable", body: "A wrapper soaked in sambar is still plastic." },
  { rule: "One greasy item spoils the bag", body: "Oil transfers to paper and makes the batch unsaleable." },
  { rule: "Water, not soap", body: "A quick rinse is enough; detergent wastes more than it saves." },
  { rule: "Flatten card, not bottles", body: "Optical sorters identify PET by its shape." },
  { rule: "Broken glass never goes blue", body: "It injures the people who sort by hand. Wrap, label, red bin." },
  { rule: "Unsure? Red is safer", body: "A lost recyclable costs little. A contaminant can cost the batch." },
];

/** One concise block per zone — rendered as sections of the single page. */
export type ZoneRecycling = {
  slug: "academic" | "hostel" | "residential";
  name: string;
  lede: string;
  priorities: string[];
  where: string[];
};

export const zoneRecycling: ZoneRecycling[] = [
  {
    slug: "academic",
    name: "Academic zone",
    lede: "Paper is the prize — clean, dry, uniform and produced in bulk.",
    priorities: [
      "A dedicated paper box per office beats a shared blue bin.",
      "Confidential scripts go to secure shredding, then the same paper stream.",
      "Clean lab plastics that never met a chemical are ordinary recycling — sign them separately.",
      "Return toner cartridges to the supplier under the purchase agreement.",
    ],
    where: [
      "Department paper boxes — office paper, scripts, drafts",
      "Building blue bins — bottles, cans, clean packaging",
      "Loading-bay flat-pack area — cartons and crates",
      "Departmental e-waste point — batteries, cables, instruments",
    ],
  },
  {
    slug: "hostel",
    name: "Hostel zone",
    lede: "Everything recoverable here passes through someone's hand beside a bin.",
    priorities: [
      "Rinse at the tap on the way out — three seconds makes it recyclable.",
      "Cartons go to a flat-pack corner, not into the bin.",
      "Keep multilayered wrappers dry and separate for Punch the Plastic.",
      "Textbooks to the book bank; pulp only what nobody will read.",
    ],
    where: [
      "Per-floor blue bins — rinsed bottles, cans, clean paper",
      "Entrance flat-pack corner — flattened cartons",
      "Punch the Plastic device — clean multilayered wrappers",
      "Mess plate-scrape station — food waste to biogas",
    ],
  },
  {
    slug: "residential",
    name: "Residential zone",
    lede: "Households segregate well when the system is predictable.",
    priorities: [
      "Three containers at the kitchen counter, not one bin downstairs.",
      "Rinse and dry before the dry bin, or it wets the paper.",
      "Compost garden waste and peel at home — no transport at all.",
      "Hold paint, medicines, batteries and CFLs for the monthly drive.",
    ],
    where: [
      "Door-to-door — wet daily, dry twice weekly",
      "Block dry-waste point — paper, card, bottles, cans, glass",
      "Community compost pit — garden waste and peel",
      "Block e-waste holding area — appliances, electronics, lighting",
    ],
  },
];
