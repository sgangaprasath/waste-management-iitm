/**
 * Central image manifest.
 *
 * Every image on the site resolves through this file, so swapping a
 * placeholder for a real photograph is a one-line change.
 *
 *  - `src`    : path under /public, or a full https URL (see next.config.js
 *               remotePatterns — cdn.pixabay.com is pre-allowed).
 *  - `art`    : when no photograph is available, the named generated artwork
 *               is rendered instead (see components/artwork.tsx).
 *  - `search` : the Pixabay search term recommended for this slot.
 *
 * See public/images/IMAGE-SOURCING.md for the full sourcing brief.
 */

export type ArtKey =
  | "strata"
  | "streams"
  | "loop"
  | "grid"
  | "canopy"
  | "vessel";

export type ImageSlot = {
  src?: string;
  art?: ArtKey;
  alt: string;
  credit?: string;
  search: string;
  /** "contain" for posters and diagrams that must not be cropped. */
  fit?: "cover" | "contain";
};

export const images = {
  heroCampus: {
    src: "/images/campus-banyan.jpg",
    alt: "The banyan grove on the IIT Madras campus, inside the Guindy forest",
    search: "university campus green trees india",
  },
  homeGuidelines: {
    src: "/images/Cover1.jpg",
    alt: "Segregated waste bins on the IIT Madras campus",
    search: "recycling bins segregation colour coded",
    fit: "contain",
  },
  homeZones: {
    src: "/images/Cover2.jpg",
    alt: "Campus life across the residential and hostel zones",
    search: "student hostel campus india",
    fit: "contain",
  },

  zoneAcademic: {
    src: "/posters/Academic.png",
    alt: "Academic zone waste segregation poster",
    search: "university lecture hall laboratory",
    fit: "contain",
  },
  zoneHostel: {
    src: "/posters/Hostel.png",
    alt: "Hostel zone waste segregation poster",
    search: "student dormitory mess dining hall",
    fit: "contain",
  },
  zoneResidential: {
    src: "/posters/Residential.png",
    alt: "Residential zone waste segregation poster",
    search: "residential apartments community garden",
    fit: "contain",
  },
  campusPoster: {
    src: "/posters/Campus.png",
    alt: "Campus-wide three-bin segregation poster",
    search: "three bin system waste segregation",
    fit: "contain",
  },

  recycling: {
    src: "/images/plasticbottle.jpg",
    alt: "Material recovery and recycling",
    search: "recycling plastic bottles sorted material recovery",
  },
  repurposing: {
    src: "/images/upcycling.jpg",
    alt: "Repair, reuse and repurposing",
    search: "repair workshop upcycling reuse furniture",
  },
  composting: {
    src: "/images/compost.jpg",
    alt: "Composting and organic waste processing",
    search: "compost heap organic waste garden",
  },
  eWaste: {
    src: "/images/eWaste.jpg",
    alt: "Electronic waste collection",
    search: "electronic waste circuit boards recycling",
  },
  labWaste: {
    src: "/images/labwaste.jpg",
    alt: "Laboratory and hazardous waste handling",
    search: "chemistry laboratory glassware safety",
  },
  segregationYard: {
    src: "/images/segregation-yard.jpg",
    alt: "Manual sorting at the campus segregation yard",
    search: "waste sorting facility material recovery workers",
  },
  wasteMap: {
    src: "/images/waste-map.jpg",
    alt: "The campus waste map",
    search: "campus map waste points",
    fit: "contain",
  },
  freecycle: {
    src: "/images/freecycle.jpg",
    alt: "The Freecycle platform for reselling and donating used items",
    search: "second hand marketplace students",
    fit: "contain",
  },
  takeAction: {
    src: "/images/volunteer.jpg",
    alt: "Students and staff taking part in campus sustainability action",
    search: "volunteers cleanup campaign community",
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
