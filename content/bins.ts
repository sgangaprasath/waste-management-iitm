export type BinKey = "green" | "blue" | "red" | "yellow" | "black";

import type { IconKey } from "@/components/icons";

export type Bin = {
  key: BinKey;
  name: string;
  stream: string;
  hex: string;
  /** Very light wash of `hex`, for tinted panels. */
  tint: string;
  /** Darker shade of `hex`, for text that must stay legible on `tint`. */
  deep: string;
  icon: IconKey;
  takes: string[];
  neverTakes: string[];
  destination: string;
};

export const bins: Bin[] = [
  {
    key: "green",
    icon: "leaf",
    name: "Green bin",
    stream: "Wet / biodegradable",
    hex: "#2E7D46",
    tint: "#EDF6F0",
    deep: "#1F5A32",
    takes: [
      "Cooked food, leftovers and plate waste",
      "Vegetable peel, fruit rind, egg shells",
      "Tea leaves, coffee grounds, used tea bags",
      "Garden trimmings, fallen leaves, flowers",
    ],
    neverTakes: [
      "Liquids poured in loose — drain them first",
      "Plastic bags, even when they held food",
      "Multilayered wrappers that merely feel wet",
      "Sanitary waste of any kind",
    ],
    destination:
      "Campus biogas digesters and the organic waste converters; roughly 800 kg of food waste a day becomes cooking gas.",
  },
  {
    key: "blue",
    icon: "cycle",
    name: "Blue bin",
    stream: "Dry recyclable",
    hex: "#1F5FA8",
    tint: "#EBF2FB",
    deep: "#154679",
    takes: [
      "Clean, dry paper, card and flattened cartons",
      "Rinsed PET bottles, jars and rigid containers",
      "Clean single-layer plastic film and covers",
      "Metal cans, foil trays, glass bottles (intact)",
    ],
    neverTakes: [
      "Anything still holding food residue or oil",
      "Paper cups and plates with a plastic lining",
      "Broken glass — wrap and mark it instead",
      "Thermocol, cling film and chip packets",
    ],
    destination:
      "Sorted at the material recovery point, then baled and sent to authorised recyclers.",
  },
  {
    key: "red",
    icon: "bin",
    name: "Red bin",
    stream: "Non-recyclable / rejects",
    hex: "#B3261E",
    tint: "#FCEEED",
    deep: "#8A1C15",
    takes: [
      "Multilayered snack, biscuit and noodle wrappers",
      "Soiled paper, oily wrapping, used tissues",
      "Thermocol, balloons, ribbon and cling film",
      "Sweepings, hair, dust and floor sweep",
    ],
    neverTakes: [
      "Batteries, bulbs, electronics or cables",
      "Chemicals, solvents or expired medicines",
      "Anything that could still be composted",
      "Clean recyclables that belong in blue",
    ],
    destination:
      "Handed to the municipal stream, or to pyrolysis partners through the Punch the Plastic drive where the material qualifies.",
  },
  {
    key: "yellow",
    icon: "hazard",
    name: "Yellow container",
    stream: "Hazardous, chemical & biomedical",
    hex: "#C08A16",
    tint: "#FBF4E4",
    deep: "#8A6310",
    takes: [
      "Solvent and reagent residues, spent acids and bases",
      "Contaminated gloves, tips, filter papers",
      "Cultures, agar plates and stained slides",
      "Expired medicines and sharps in rigid boxes",
    ],
    neverTakes: [
      "General laboratory paper or clean packaging",
      "Anything unlabelled — every container needs a label",
      "Mixed incompatible chemicals in one vessel",
    ],
    destination:
      "Collected lab by lab against a logbook and consigned to certified treatment and disposal facilities.",
  },
  {
    key: "black",
    icon: "bolt",
    name: "E-waste point",
    stream: "Electrical & electronic",
    hex: "#2B2B2B",
    tint: "#F1F1F0",
    deep: "#1A1A1A",
    takes: [
      "Batteries of every chemistry, including button cells",
      "Cables, chargers, adapters, keyboards, mice",
      "Instruments, boards, sensors and dead equipment",
      "Tube lights, CFLs and LED fittings",
    ],
    neverTakes: [
      "Equipment still in working order — offer it for reuse first",
      "Anything containing residual chemicals",
    ],
    destination:
      "Consolidated at the designated collection points and lifted by certified e-waste recyclers.",
  },
];

export const binByKey = Object.fromEntries(bins.map((b) => [b.key, b])) as Record<BinKey, Bin>;
