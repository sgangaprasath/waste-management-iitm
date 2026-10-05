/**
 * How waste actually moves through the campus.
 *
 * Source: "Life of Ubiquitous Materials: From Science to Behaviour — Catalog
 * Flow of Packaging Materials", a student study by Ananya V, Harshit Moondra
 * and Visali Shanmugam, based on primary interviews with Mr. Babu,
 * Mr. Narayanaperumal and Mr. Paneerselvam and on segregation-yard records.
 */

export const STUDY_PACKAGING = {
  title: "Catalog Flow of Packaging Materials",
  authors: "Ananya V, Harshit Moondra, Visali Shanmugam",
  note: "Primary interviews with campus waste-management personnel, segregation-yard records and a cradle-to-grave life cycle assessment.",
};

/* ------------------------------------------------------------ collection */

export type ZoneRoute = {
  zone: string;
  slug: "academic" | "hostel" | "residential";
  sources: string[];
  route: string;
  ask: string;
};

export const zoneRoutes: ZoneRoute[] = [
  {
    zone: "Residential zone",
    slug: "residential",
    sources: ["Individual quarters", "Apartments", "Community areas"],
    route: "Door-to-door collection from each household.",
    ask: "Residents are asked to segregate before handing waste over.",
  },
  {
    zone: "Hostel zone",
    slug: "hostel",
    sources: ["Hostels", "Messes", "Commercial eateries"],
    route: "Handed to the Housekeeping team, which runs collection across the zone.",
    ask: "Dry and wet waste must be separated before handover.",
  },
  {
    zone: "Academic zone",
    slug: "academic",
    sources: ["Departments", "Laboratories", "Offices and libraries"],
    route:
      "Primary segregation is done by the Housekeeping team before transport to the segregation yard.",
    ask: "Keep streams apart at the bin so the primary sort is not undone.",
  },
];

/** Streams that bypass the ordinary route and go straight to the yard or to a vendor. */
export const directStreams = [
  "Electronic waste",
  "Sanitary napkins",
  "Food waste",
  "Cut vegetable peel",
  "Packaging material",
  "Chemical waste",
  "Biomedical waste",
];

/* ---------------------------------------------------------------- the yard */

export const yard = {
  people: "30–35",
  categories: 24,
  facts: [
    "Sorting is manual, by a team of 30 to 35 people working from decades of accumulated judgement.",
    "Material is separated into 24 distinct categories by the Housekeeping team.",
    "Categories follow what vendors will buy and the price it fetches — not the material composition of the product.",
    "Some categories are baled; others are stored in gunny bags as they are.",
    "Tenders are floated per category and the material is sold on, which makes the yard a revenue stream for the institute rather than a cost.",
  ],
  limitations: [
    "Documentation of the process is inconsistent.",
    "Staff training is informal and experience-based rather than standardised.",
    "Quantitative records are kept by hand.",
  ],
  recommendations: [
    "Define each category by its constituent materials rather than by its resale value.",
    "Introduce segregation based on the packaging symbols printed on the item.",
    "Digitise data collection and storage.",
    "Make the resulting data publicly accessible.",
  ],
};

/** The 24 categories the yard sorts into. */
export const yardCategories: { group: string; items: string[] }[] = [
  {
    group: "Plastics",
    items: [
      "Plastic I",
      "Plastic II (high quality)",
      "Plastic III (low quality)",
      "Mica (a low-quality plastic)",
      "Plastic (PET) bottles",
      "Water cans",
    ],
  },
  {
    group: "Paper and card",
    items: ["Cardboard and carton boxes", "KD (card with a plastic coating)", "Newspapers", "Books"],
  },
  {
    group: "Metals",
    items: ["Aluminium cans", "Aluminium food packaging", "Iron", "Tin", "Steel (non-magnetic)", "Wire"],
  },
  {
    group: "Glass",
    items: ["Beer bottles", "“Quarter” bottles"],
  },
  {
    group: "Other",
    items: [
      "Thermocol (high quality)",
      "Thermocol (low quality)",
      "Oil packets",
      "Milk packets",
      "CDs and cassettes",
      "Coconut shells",
    ],
  },
];

/* ------------------------------------------------------- measured volumes */

export type Volume = { category: string; kgPerDay: number; note?: string };

/** Daily quantities recorded at the segregation yard for the eight quantifiable
 *  packaging categories analysed in the study. */
export const dailyVolumes: Volume[] = [
  { category: "KD (plastic-coated card)", kgPerDay: 183.8, note: "Paper cups, tetra pak and similar" },
  { category: "Cardboard boxes", kgPerDay: 180.0 },
  { category: "Plastic III (low quality)", kgPerDay: 52.4 },
  { category: "Mica", kgPerDay: 45.8 },
  { category: "Plastic II (high quality)", kgPerDay: 31.4 },
  { category: "Plastic (PET) bottles", kgPerDay: 28.1 },
  { category: "Aluminium cans", kgPerDay: 3.5 },
  { category: "Aluminium food packaging", kgPerDay: 3.5 },
];

/* ------------------------------------------------------- final disposal */

export type Destination = {
  stream: string;
  fate: string;
  handler: string;
};

export const destinations: Destination[] = [
  {
    stream: "Packaging material",
    fate: "Sorted into the 24 categories at the yard, baled or bagged, then sold on when a tender is awarded.",
    handler: "Vendors, category by category",
  },
  {
    stream: "Food waste",
    fate: "Partly to the campus biogas plant, whose output is used in the messes; partly to an animal husbandry institute as livestock feed.",
    handler: "Campus biogas plant · animal husbandry institute",
  },
  {
    stream: "Cut vegetable peel",
    fate: "To the vermicompost yard; the manure produced is used for in-house gardening.",
    handler: "Campus vermicompost yard",
  },
  {
    stream: "Electronic waste",
    fate: "Consigned to an authorised agency for recovery.",
    handler: "TNPCB-authorised agency",
  },
  {
    stream: "Chemical waste",
    fate: "Consigned to an authorised agency for treatment and disposal.",
    handler: "TNPCB-authorised agency",
  },
  {
    stream: "Biomedical waste",
    fate: "Hospital waste is handled by a different authorised vendor from the one that collects general campus waste.",
    handler: "TNPCB-authorised agency",
  },
  {
    stream: "Sanitary waste",
    fate: "Consigned to an authorised agency.",
    handler: "TNPCB-authorised agency",
  },
];

/* --------------------------------------------- sustainable alternatives */

export type Alternative = {
  name: string;
  replaces: string;
  category: string;
  benefits: string[];
  drawbacks: string[];
};

export const alternatives: Alternative[] = [
  {
    name: "PLA",
    replaces: "HDPE and LDPE",
    category: "Plastic II and Mica",
    benefits: [
      "Made from renewable resources and breaks down naturally",
      "Compostable in industrial facilities with composting enhancers",
      "Replaces conventional plastic in food containers and detergent bottles",
    ],
    drawbacks: [
      "Looks like ordinary plastic, so it is hard to segregate",
      "Deforms above 50°C",
      "Needs an awareness campaign and a disposal route to work at all",
    ],
  },
  {
    name: "Bagasse",
    replaces: "Paper + PE, PHA/PHB",
    category: "KD and Plastic III",
    benefits: [
      "Composts in ordinary facilities, unlike PHA",
      "Withstands moderate heat, so it suits hot food and drink",
      "A by-product of sugarcane processing, sourced locally",
      "Generally affordable",
    ],
    drawbacks: [
      "Durability and heat resistance vary by vendor",
      "Weakens when wet, limiting it for some foods",
    ],
  },
  {
    name: "Beeswax wrap",
    replaces: "Aluminium foil",
    category: "Aluminium food packaging",
    benefits: [
      "Biodegradable, unlike foil",
      "Reusable up to twenty times",
      "Made from natural materials",
    ],
    drawbacks: [
      "Around ₹23 per use-case item — costlier than foil",
      "Suited mainly to dry food",
    ],
  },
  {
    name: "rPET",
    replaces: "Virgin PET",
    category: "Plastic bottles",
    benefits: [
      "Cuts demand for virgin plastic production",
      "Can be recycled and reused repeatedly",
      "Durable enough for repeat-use items",
    ],
    drawbacks: [
      "Still a plastic — it reduces impact rather than removing it",
      "Depends on a reliable collection stream to exist at all",
    ],
  },
  {
    name: "Recycled aluminium",
    replaces: "Virgin aluminium",
    category: "Aluminium cans",
    benefits: [
      "Uses 95% less energy than virgin aluminium",
      "Reduces bauxite mining",
      "Can be reused indefinitely without quality loss",
    ],
    drawbacks: [
      "Higher upfront cost",
      "Minor impurities can affect consistency in some applications",
    ],
  },
];

export const altMetrics = [
  "Local production and distribution",
  "Potential to work with local manufacturers",
  "Affordability and bulk purchasing",
  "Disposal and end-of-life management",
  "Durability and heat endurance",
  "Feasibility of adoption on campus",
];
