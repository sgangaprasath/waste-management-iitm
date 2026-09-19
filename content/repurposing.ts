export type Ladder = { step: string; title: string; body: string };

export const ladder: Ladder[] = [
  { step: "01", title: "Refuse", body: "The cheapest waste is the item that never arrives." },
  { step: "02", title: "Reduce", body: "Print double-sided; cater to the headcount, not to the fear of running short." },
  { step: "03", title: "Reuse", body: "Keep the object doing the job it was built for." },
  { step: "04", title: "Repair", body: "Extend a working life rather than start a new one." },
  { step: "05", title: "Repurpose", body: "Give it a second job: crates into shelving, drafts into notepads." },
  { step: "06", title: "Recycle", body: "Recovers the material but destroys the object — a step down." },
  { step: "07", title: "Recover", body: "Biogas and pyrolysis. Only what survives all seven goes out as reject." },
];

export type Programme = {
  title: string;
  who: string;
  body: string;
  status: "running";
  href?: string;
  linkLabel?: string;
};

export const programmes: Programme[] = [
  {
    title: "Book bank",
    who: "All zones",
    status: "running",
    body: "Textbooks and references pass between cohorts on hostel and community shelves instead of being pulped.",
  },
  {
    title: "Single-side paper to notepads",
    who: "Academic",
    status: "running",
    body: "Misprints and drafts collected in every office and bound into rough pads.",
  },
  {
    title: "Punch the Plastic",
    who: "All zones",
    status: "running",
    body: "Clean, dry, non-recyclable plastic packaging collected and routed to pyrolysis rather than landfill.",
  },
  {
    title: "Garden waste to campus compost",
    who: "Residential & academic",
    status: "running",
    body: "Leaf litter and pruning composted and returned to campus landscaping.",
  },
];

export type ZoneRepurposing = {
  slug: "academic" | "hostel" | "residential";
  name: string;
  lede: string;
  ideas: string[];
  moments: { when: string; what: string }[];
};

export const zoneRepurposing: ZoneRepurposing[] = [
  {
    slug: "academic",
    name: "Academic zone",
    lede: "Departments discard working things. Almost none of it is worn out — it is in the wrong room.",
    ideas: [
      "Check the surplus register before raising a requisition.",
      "Bind single-side misprints into rough notepads.",
      "Retired research instruments are ideal for teaching labs.",
      "Shipping crates make sound shelving and cable trays.",
      "Design banners without the year — they last a decade.",
    ],
    moments: [
      { when: "End of a project", what: "Register surplus reagents and equipment before the account closes." },
      { when: "Lab refurbishment", what: "Offer displaced furniture internally first." },
      { when: "Before a conference", what: "Book the crockery pool; reuse last edition's signage." },
    ],
  },
  {
    slug: "hostel",
    name: "Hostel zone",
    lede: "Every year the hostels throw away a complete set of everything a first-year needs to buy.",
    ideas: [
      "A staffed handover depot in the final fortnight of each semester.",
      "Tag, hold, repair and re-issue abandoned cycles.",
      "A book bank shelf in every hostel.",
      "A steel tumbler and two containers remove most dry waste for a whole degree.",
      "A shared repair kit per wing — tools, thread, glue, soldering iron.",
    ],
    moments: [
      { when: "Final fortnight of term", what: "Hand over, don't leave behind." },
      { when: "Start of term", what: "Collect from the depot before buying new." },
      { when: "Monthly", what: "Cycle repair clinic and wing repair session." },
    ],
  },
  {
    slug: "residential",
    name: "Residential zone",
    lede: "A timing problem: the furniture leaving one quarter is what the next family needs.",
    ideas: [
      "A sheltered swap shelf at each block for anything worth passing on.",
      "Put outgoing and incoming residents in touch before the move.",
      "Compost at home — no collection, no transport.",
      "Wearable clothing to donation; worn cotton becomes cleaning cloth.",
      "Cloth buntings and brass lamps store flat and come out every year.",
    ],
    moments: [
      { when: "Quarter handover", what: "Match outgoing furniture to the incoming family." },
      { when: "Monthly", what: "Repair clinic at the community hall, with the hazardous drive." },
      { when: "Academic break", what: "Bulky-waste and donation drive, timed to the moving season." },
    ],
  },
];
