/** Icon keys rendered by components/icons.tsx */
export type IconKey =
  | "bin"
  | "map"
  | "bottle"
  | "battery"
  | "people"
  | "plate"
  | "flask"
  | "printer"
  | "box"
  | "leaf"
  | "cup"
  | "sign"
  | "scale"
  | "clipboard"
  | "cycle"
  | "drop";

export const getStarted: { n: string; icon: IconKey; title: string; body: string; href: string }[] = [
  {
    n: "01",
    icon: "bin",
    title: "Learn your three bins",
    body: "Green for wet, blue for clean dry, red for the rest. A wet wrapper is still plastic.",
    href: "/guidelines",
  },
  {
    n: "02",
    icon: "map",
    title: "Find your zone",
    body: "Academic, hostel and residential are collected differently. Read yours.",
    href: "/guidelines/academic",
  },
  {
    n: "03",
    icon: "bottle",
    title: "Carry your own",
    body: "A steel tumbler, a cloth bag and a set of containers. Buy used before buying new.",
    href: "/repurposing",
  },
  {
    n: "04",
    icon: "battery",
    title: "Separate the dangerous things",
    body: "Batteries, medicines, paint, CFLs, electronics. Never any of the three bins.",
    href: "/guidelines/e-waste",
  },
  {
    n: "05",
    icon: "people",
    title: "Bring someone with you",
    body: "Segregation works at the level of a wing or a block, not an individual.",
    href: "/take-action/campaigns",
  },
];

export type Pledge = { icon: IconKey; title: string; body: string; effort: 1 | 2 | 3 };

export type Audience = {
  slug: "students" | "faculty-staff" | "residents" | "events";
  title: string;
  kicker: string;
  lede: string;
  pledges: Pledge[];
  checklist: { group: string; icon: IconKey; items: string[] }[];
  ask?: string;
};

export const audiences: Audience[] = [
  {
    slug: "students",
    title: "Students",
    kicker: "Room · mess · lab",
    lede: "You generate waste in three places, and each has a different answer.",
    pledges: [
      { icon: "bin", title: "Two bins in your room", body: "Dry recyclable and reject. Wet goes straight down.", effort: 1 },
      { icon: "drop", title: "Rinse before blue", body: "Three seconds under the tap. Plain water is enough.", effort: 1 },
      { icon: "bottle", title: "Steel tumbler and cloth bag", body: "Covers the canteen, mess, shops and every event.", effort: 1 },
      { icon: "plate", title: "Take only what you'll eat", body: "Plate scrape is the hostels' largest single stream.", effort: 1 },
      { icon: "box", title: "Hand over at semester end", body: "Mattresses, buckets, cycles and books to the depot.", effort: 2 },
      { icon: "cup", title: "Collect wrappers separately", body: "Clean and dry, for the Punch the Plastic point.", effort: 2 },
      { icon: "people", title: "Be your wing's contact", body: "One informed person changes the behaviour of forty.", effort: 3 },
      { icon: "scale", title: "Run a hostel audit", body: "Nothing shifts behaviour like a wing seeing its own numbers.", effort: 3 },
    ],
    checklist: [
      {
        group: "In your room",
        icon: "bin",
        items: [
          "Two labelled containers — dry and reject",
          "Rinse and dry before the dry bag",
          "Flatten cartons, take to the flat-pack corner",
          "Separate bag for multilayered wrappers",
          "Batteries and chargers to the e-waste point",
          "Anything still usable passed on, not binned",
        ],
      },
      {
        group: "In the mess",
        icon: "plate",
        items: [
          "Serve what you will finish; go back for seconds",
          "Scrape plates at the marked station",
          "No cutlery, tissue or wrappers in the wet tray",
          "Use mess crockery, not disposables",
        ],
      },
      {
        group: "In the lab",
        icon: "flask",
        items: [
          "Know where the yellow container and sharps box are",
          "Never put chemical waste down the sink un-neutralised",
          "Label every container — date, contents, hazard",
          "Autoclave cultures before they leave the lab",
          "Clean packaging is ordinary recycling",
        ],
      },
    ],
    ask: "The committee works with student volunteers on audits, signage, hostel campaigns and the semester-end depot.",
  },
  {
    slug: "faculty-staff",
    title: "Faculty & staff",
    kicker: "Office · lab · procurement",
    lede: "What you purchase and how your lab is organised shapes far more waste than your own bin.",
    pledges: [
      { icon: "printer", title: "Double-sided by default", body: "Set it at driver level for the whole department.", effort: 1 },
      { icon: "box", title: "A paper box per office", body: "Recovers a better grade than a shared blue bin.", effort: 1 },
      { icon: "flask", title: "Brief new members on day one", body: "Before the first experiment, not after the first incident.", effort: 1 },
      { icon: "cup", title: "Buy less packaging", body: "Consolidate orders; specify take-back in purchase terms.", effort: 2 },
      { icon: "cycle", title: "Register surplus before discarding", body: "Working instruments, reagents, displaced furniture.", effort: 2 },
      { icon: "clipboard", title: "Keep a disposal logbook", body: "Generated, neutralised, consigned — lab by lab.", effort: 2 },
      { icon: "leaf", title: "Take a Green Lab assessment", body: "A short annual self-assessment of segregation, storage and procurement.", effort: 3 },
      { icon: "people", title: "Teach it", body: "The campus is a working case study with real data.", effort: 3 },
    ],
    checklist: [
      {
        group: "Office",
        icon: "printer",
        items: [
          "Double-sided printing as the default",
          "Clean-paper box separate from the general bin",
          "Reusable crockery for meetings; no bottled water",
          "Cartridges returned to the supplier",
          "Confidential paper shredded, then to the paper stream",
        ],
      },
      {
        group: "Laboratory",
        icon: "flask",
        items: [
          "Disposal induction before bench access",
          "Yellow containers and sharps boxes within reach",
          "Every container labelled — date, contents, hazard",
          "Neutralisation before any aqueous discharge",
          "Autoclave biological waste before consignment",
          "Monthly e-waste clear-out",
          "Disposal logbook maintained and reconciled",
        ],
      },
      {
        group: "Procurement",
        icon: "box",
        items: [
          "Check the surplus register before a requisition",
          "Specify packaging and cartridge take-back",
          "Order reagents you will actually consume",
          "Plan end-of-project disposal before the account closes",
        ],
      },
    ],
  },
  {
    slug: "residents",
    title: "Campus residents",
    kicker: "Kitchen · household · garden",
    lede: "The highest share of compostable waste on campus, and the widest spread of occasional streams.",
    pledges: [
      { icon: "bin", title: "Three containers in the kitchen", body: "Sorted where the waste is made, not at the bin downstairs.", effort: 1 },
      { icon: "drop", title: "Rinse and dry the dry waste", body: "Pouches, bottles, curd cups and foil all recycle cleanly.", effort: 1 },
      { icon: "cup", title: "Never pour oil down the drain", body: "Collect it in a sealed bottle for the collection point.", effort: 1 },
      { icon: "leaf", title: "Compost at home", body: "A bin or a shared pit — no collection, no transport.", effort: 2 },
      { icon: "battery", title: "Hold the hazardous things", body: "Medicines, batteries, paint and CFLs for the monthly drive.", effort: 2 },
      { icon: "cycle", title: "Use the swap shelf", body: "Pass on working clothing, kitchenware, toys, books and furniture.", effort: 2 },
      { icon: "people", title: "Host a block session", body: "Twenty minutes with neighbours beats a year of notices.", effort: 3 },
      { icon: "clipboard", title: "Join the zone committee", body: "Residents decide bin placement, timing and drives.", effort: 3 },
    ],
    checklist: [
      {
        group: "Kitchen",
        icon: "plate",
        items: [
          "Wet waste drained, lined and out daily",
          "Dry recyclables rinsed, dried and stored",
          "Multilayered packaging kept apart as reject",
          "Used cooking oil in a sealed bottle",
        ],
      },
      {
        group: "Household",
        icon: "box",
        items: [
          "Sanitary waste wrapped in opaque material and marked",
          "Expired medicines held for the monthly drive",
          "Batteries and bulbs to the e-waste holding area",
          "Bulky items booked for block collection",
          "Renovation debris lifted separately",
        ],
      },
      {
        group: "Garden & community",
        icon: "leaf",
        items: [
          "Trimmings and leaf litter to the compost pit",
          "Festival decoration stored and reused",
          "Swap shelf used at every handover and move",
          "New residents given the guide at handover",
        ],
      },
    ],
  },
  {
    slug: "events",
    title: "Event organisers",
    kicker: "Shaastra · Saarang · conferences",
    lede: "An event compresses a month of waste into two days, from people who don't know where the bins are.",
    pledges: [
      { icon: "people", title: "Appoint a waste lead", body: "One named person owning bins, signage, catering and clear-up.", effort: 1 },
      { icon: "sign", title: "Undated signage", body: "Leave the year off and the banners serve every edition.", effort: 1 },
      { icon: "printer", title: "Go digital for paper", body: "QR agendas, digital certificates, returnable card badges.", effort: 1 },
      { icon: "plate", title: "Write it into the catering contract", body: "Reusable serviceware, no bottled water, sized to registrations.", effort: 2 },
      { icon: "cup", title: "Book the crockery pool", body: "Washable plates and tumblers instead of disposables.", effort: 2 },
      { icon: "bin", title: "Staff the bins at peak hours", body: "A volunteer at lunch beats any poster.", effort: 2 },
      { icon: "scale", title: "Report the numbers", body: "Weigh each stream and publish it with the event report.", effort: 3 },
    ],
    checklist: [
      {
        group: "Four weeks before",
        icon: "clipboard",
        items: [
          "Name the waste lead and brief the team",
          "Confirm reusable serviceware in writing",
          "Book bin stations, liners and signage",
          "Design undated banners and QR programmes",
        ],
      },
      {
        group: "On the day",
        icon: "bin",
        items: [
          "Bin stations in threes — never a lone bin",
          "Stations at every exit, catering area and stage wing",
          "Volunteers at the stations during meal breaks",
          "Water stations rather than bottled water",
          "A holding area for banners and decor to reuse",
        ],
      },
      {
        group: "Afterwards",
        icon: "box",
        items: [
          "Decor and signage returned to store",
          "Leftover food to the wet stream the same evening",
          "Streams weighed and recorded",
          "A short waste note in the event report",
        ],
      },
    ],
    ask: "Write to the committee a month ahead for Shaastra, Saarang, convocation and international conferences.",
  },
];

export const audienceBySlug = Object.fromEntries(audiences.map((a) => [a.slug, a])) as Record<
  Audience["slug"],
  Audience
>;

export type Campaign = {
  title: string;
  when: string;
  body: string;
  status: "running";
  href?: string;
  linkLabel?: string;
};

export const campaigns: Campaign[] = [
  {
    title: "Eco Ganesha workshop",
    when: "Ahead of the festival",
    status: "running",
    body: "Making unpainted clay idols that dissolve without leaving plaster and paint behind. Places are limited and fill quickly.",
  },
  {
    title: "Punch the Plastic",
    when: "October — World Sustainability Day",
    status: "running",
    body: "Collects clean, dry non-recyclable plastic packaging through dedicated devices and routes it to pyrolysis. Run by the sustainable campus collective.",
  },
  {
    title: "Sustainability Champions",
    when: "Annual",
    status: "running",
    body: "Recognition for the zones, academic areas and service providers with the strongest practice over the year.",
  },
  {
    title: "Monkey-proof bin hackathon",
    when: "Alongside Punch the Plastic",
    status: "running",
    body: "A design challenge for the campus's particular problem of wildlife opening food-waste bins.",
  },
];
