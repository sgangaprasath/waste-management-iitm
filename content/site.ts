export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = {
  label: string;
  href: string;
  blurb?: string;
  children?: NavChild[];
};

export const site = {
  name: "Waste & Circularity",
  institute: "Indian Institute of Technology Madras",
  shortName: "IIT Madras",
  tagline:
    "Guidelines, recovery pathways and campus action for a zero-landfill institute.",
  email: "waste@iitm.ac.in",
  address: ["Waste Management Committee", "IIT Madras, Chennai", "Tamil Nadu 600036"],
};

export const nav: NavItem[] = [
  {
    label: "Guidelines",
    href: "/guidelines",
    blurb: "What goes where, across every part of the campus.",
    children: [
      {
        label: "Campus-wide rules",
        href: "/guidelines",
        blurb: "The three-bin system and the rules that apply everywhere.",
      },
      {
        label: "Where it goes",
        href: "/guidelines/where-it-goes",
        blurb: "Bin to segregation yard to vendor — the route your waste takes.",
      },
      {
        label: "Bin finder",
        href: "/bin-finder",
        blurb: "Search any item and get the right bin.",
      },
      {
        label: "Academic zone",
        href: "/guidelines/academic",
        blurb: "Departments, laboratories, libraries and lecture halls.",
      },
      {
        label: "Hostel zone",
        href: "/guidelines/hostel",
        blurb: "Twenty-one hostels, mess halls and common rooms.",
      },
      {
        label: "Residential zone",
        href: "/guidelines/residential",
        blurb: "Quarters, apartments, schools and the shopping complex.",
      },
      {
        label: "Laboratory & hazardous waste",
        href: "/guidelines/lab-waste",
        blurb: "Chemical, biohazardous and sharps protocols.",
      },
      {
        label: "E-waste",
        href: "/guidelines/e-waste",
        blurb: "Batteries, electronics and certified recovery.",
      },
    ],
  },
  { label: "Recycling", href: "/recycling" },
  { label: "Repurposing", href: "/repurposing" },
  {
    label: "Take action",
    href: "/take-action",
    blurb: "Practical commitments for every member of the campus.",
    children: [
      {
        label: "Get started",
        href: "/take-action",
        blurb: "Five things to do in your first week.",
      },
      {
        label: "Students",
        href: "/take-action/students",
        blurb: "Room, mess, lab and hostel-wide action.",
      },
      {
        label: "Faculty & staff",
        href: "/take-action/faculty-staff",
        blurb: "Offices, labs, procurement and teaching.",
      },
      {
        label: "Campus residents",
        href: "/take-action/residents",
        blurb: "Households, gardens and community spaces.",
      },
      {
        label: "Event organisers",
        href: "/take-action/events",
        blurb: "Shaastra, Saarang, conferences and festivals.",
      },
      {
        label: "Campaigns",
        href: "/take-action/campaigns",
        blurb: "Freecycle, Punch the Plastic and the campus waste map.",
      },
    ],
  },
  { label: "Progress", href: "/progress" },
  { label: "Resources", href: "/downloads" },
  { label: "About", href: "/about" },
];

/**
 * Verified campus figures. Every entry carries its source so the committee
 * can audit and refresh them. `verified: false` marks a figure that could
 * not be confirmed from a public document — replace before publication.
 */
export type Metric = {
  value: string;
  unit?: string;
  label: string;
  note?: string;
  source?: string;
  sourceUrl?: string;
  verified: boolean;
};

export const CAP_URL =
  "https://www.iitm.ac.in/sites/default/files/Others/jan-2022-climate-action-plan.pdf";

export const headlineMetrics: Metric[] = [
  {
    value: "661",
    unit: "acres",
    label: "Campus inside a protected forest",
    note: "Roughly 67% green cover, rising to about 75% counting water bodies and marshland.",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "800",
    unit: "kg/day",
    label: "Food waste sent to biogas",
    note: "Yields fuel equivalent to 5–7 LPG cylinders a month.",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "4",
    unit: "MLD",
    label: "Sewage treated and reused on campus",
    note: "SBR-technology plant operational since 2016; meets 35% of domestic water demand.",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "2050",
    label: "Target year for carbon neutrality",
    note: "Campus emissions stood at 18,763 tCO₂/year against 5,196 tCO₂/year sequestered by campus trees.",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
];

export const campusFacts: Metric[] = [
  {
    value: "150–200",
    unit: "kg",
    label: "Raw vegetable waste composted each day",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "~100",
    label: "Staff running door-to-door segregated collection",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "3",
    unit: "MW",
    label: "Rooftop solar photovoltaic capacity",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "1,069",
    label: "Occupied residential households",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
  {
    value: "21",
    label: "Hostels served by the segregation programme",
    note: "The Climate Action Plan records 20 hostels and two guest houses; hostel count updated by the Committee.",
    source: "Waste Management Committee",
    verified: false,
  },
  {
    value: "~600",
    label: "Species of plants, butterflies and vertebrates on campus",
    source: "IIT Madras Climate Action Plan, 2022",
    sourceUrl: CAP_URL,
    verified: true,
  },
];

export const population: Metric[] = [
  { value: "12,000", label: "Resident students", verified: false, source: "Waste Management Committee" },
  { value: "4,000", label: "Faculty, staff and families", verified: false, source: "Waste Management Committee" },
  { value: "4,000", label: "Academic and support staff", verified: false, source: "Waste Management Committee" },
];
