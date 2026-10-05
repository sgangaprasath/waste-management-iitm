import type { ImageKey } from "./images";
import type { IconKey } from "@/components/icons";
import type { BinKey } from "./bins";

export type WasteItem = {
  item: string;
  detail?: string;
  bin: BinKey;
  classification: string;
};

export type WasteGroup = {
  title: string;
  intro?: string;
  items: WasteItem[];
  icon?: IconKey;
};

export type Practice = { title: string; body: string };

export type Zone = {
  slug: "academic" | "hostel" | "residential";
  name: string;
  short: string;
  image: ImageKey;
  poster: string;
  summary: string;
  lede: string;
  scale: { value: string; label: string }[];
  collectionPoints: { place: string; detail: string }[];
  groups: WasteGroup[];
  disposal: { waste: string; bin: BinKey; guidance: string }[];
  practices: Practice[];
  gaps?: string[];
};

export const zones: Zone[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "academic",
    name: "Academic zone",
    short: "Academic",
    image: "zoneAcademic",
    poster: "/posters/Academic.png",
    summary:
      "Departments, laboratories, lecture halls, the Central Library and the conference venues.",
    lede: "Paper dominates by volume; laboratory streams dominate by risk. The two need entirely different handling, and this page keeps them apart.",
    scale: [
      { value: "16+", label: "Departments" },
      { value: "1", label: "Central Library" },
      { value: "Daily", label: "Collection rounds" },
    ],
    collectionPoints: [
      {
        place: "Classrooms and lecture halls",
        detail: "HSB, MSB, ESB and the other teaching complexes — three-bin stations at every exit. The Housekeeping team does a primary sort before material leaves for the segregation yard.",
      },
      {
        place: "Laboratories",
        detail:
          "Chemistry, Physics, Biology, Microbiology, Biotechnology and the engineering labs, each with their own chemical and biohazard containers alongside the three-bin set.",
      },
      {
        place: "Faculty offices and administrative rooms",
        detail: "Department cabins, conference rooms, department offices and the Administration Block.",
      },
      {
        place: "Conference halls and seminar spaces",
        detail: "HSB 209, ICSR and the workshop and symposium venues — bins scaled up before every event.",
      },
      {
        place: "Academic lawns and corridors",
        detail: "CLT and ICSR lawns, department courtyards, stairwells and building corridors.",
      },
      {
        place: "Central Library",
        detail: "Reading halls, reprography and the periodicals section.",
      },
    ],
    groups: [
      {
        title: "Stationery and academic waste",
    icon: "document",
        intro: "The largest stream by volume, and the easiest to recover — provided it stays dry.",
        items: [
          {
            item: "Used worksheets, exam scripts, printed notes, old registers",
            detail: "Keep away from food and drink; damp paper cannot be recovered.",
            bin: "blue",
            classification: "Highly recyclable dry waste",
          },
          {
            item: "Cardboard packaging from book shipments and couriers",
            detail: "Flatten and stack beside the bin rather than filling it.",
            bin: "blue",
            classification: "Highly recyclable dry waste",
          },
          {
            item: "Laminated notices, plastic folders, ID pouches, stationery packaging",
            bin: "red",
            classification: "Non-biodegradable, non-recyclable",
          },
          {
            item: "Spiral-bound books with plastic covers",
            detail: "Remove the spiral and cover; the paper block goes to blue.",
            bin: "blue",
            classification: "Recyclable once separated",
          },
          {
            item: "Staples, rusted paper clips, compass and divider parts",
            bin: "blue",
            classification: "Recyclable metal",
          },
          {
            item: "Spent whiteboard markers, adhesives, correction pens",
            bin: "red",
            classification: "Non-biodegradable dry waste",
          },
          {
            item: "Wooden shipping crates and pallets",
            detail: "Offer to the Engineering Unit for reuse before discarding.",
            bin: "blue",
            classification: "Reusable, then recyclable",
          },
        ],
      },
      {
        title: "Laboratory waste — chemical",
    icon: "flask",
        intro: "Never a general bin, never a sink. Every container is labelled and logged.",
        items: [
          {
            item: "Organic solvent residues — acetone, benzene, toluene, methanol",
            bin: "yellow",
            classification: "Hazardous waste",
          },
          {
            item: "Salts, acids, buffers, base solutions and reaction media",
            detail: "Requires neutralisation before consignment.",
            bin: "yellow",
            classification: "Hazardous — neutralise first",
          },
          {
            item: "Staining dyes such as crystal violet and safranin",
            bin: "yellow",
            classification: "Hazardous waste",
          },
        ],
      },
      {
        title: "Laboratory waste — contaminated and microbiological",
    icon: "hazard",
        items: [
          {
            item: "Used filter papers, aluminium foil, tissues from bench work",
            bin: "yellow",
            classification: "Potentially hazardous if contaminated",
          },
          {
            item: "Gloves, microtips, Eppendorf tubes, pipette tips",
            detail: "Classification follows the use — biohazardous or chemical.",
            bin: "yellow",
            classification: "Biohazardous or chemical",
          },
          {
            item: "Petri dishes with mould or fungal cultures, agar plates, bacterial cultures",
            detail: "Autoclave before consignment; use autoclavable biohazard bags.",
            bin: "yellow",
            classification: "Biohazardous waste",
          },
          {
            item: "Cracked test tubes, beakers, measuring cylinders",
            detail: "Wrap, mark ‘broken glass — sharp’, and place in the rigid sharps box.",
            bin: "red",
            classification: "Broken glass — non-recyclable",
          },
        ],
      },
      {
        title: "Electronic and equipment waste",
    icon: "computer",
        items: [
          {
            item: "Dead batteries, multimeters, wires, heating mantles, dead instruments",
            bin: "black",
            classification: "E-waste — separate collection",
          },
          {
            item: "Old keyboards, mice, calculators, chargers",
            bin: "black",
            classification: "E-waste",
          },
          {
            item: "Worn lab coats, damaged stools, faulty equipment",
            detail: "Route through the repair and reuse pool before disposal.",
            bin: "red",
            classification: "Reusable with repair, otherwise reject",
          },
        ],
      },
      {
        title: "Event and conference waste",
    icon: "calendar",
        intro: "Predictable, concentrated, and almost entirely avoidable with planning.",
        items: [
          {
            item: "Disposable cups, plates and cutlery from catering",
            detail: "Switch to the reusable crockery pool — see the event organisers guide.",
            bin: "red",
            classification: "Non-recyclable plastic",
          },
          {
            item: "Food left over after catered sessions",
            bin: "green",
            classification: "Wet waste to biogas",
          },
          {
            item: "Pamphlets, printed agendas, paper badges",
            bin: "blue",
            classification: "Recyclable if clean",
          },
          {
            item: "Flex and vinyl banners",
            detail: "Use undated banners so they can be reused across editions.",
            bin: "red",
            classification: "Non-recyclable",
          },
          {
            item: "Thermocol, balloons, ribbons and decorations",
            bin: "red",
            classification: "Non-recyclable",
          },
        ],
      },
    ],
    disposal: [
      {
        waste: "Dry recyclable waste",
        bin: "blue",
        guidance:
          "Paper must be clean and dry. Rinse plastic containers before disposal. Flatten boxes. Keep clean laboratory plastics — microtip boxes, reagent bottles — in a separately signed blue stream so they are not mistaken for contaminated material.",
      },
      {
        waste: "Wet / biodegradable waste",
        bin: "green",
        guidance:
          "Food left over from events should be drained and placed in lined bins. No liquids directly into the bin.",
      },
      {
        waste: "Non-recyclable waste",
        bin: "red",
        guidance:
          "Wrap broken glass or contaminated items in paper or newspaper and label them ‘sharp’. Soiled packaging and multilayered food wrappers belong here.",
      },
      {
        waste: "Hazardous / chemical waste",
        bin: "yellow",
        guidance:
          "Use the yellow containers or the dedicated chemical disposal tanks. Follow lab-wise collection protocols. Never dispose down the sink without neutralisation. Consignment runs through certified disposal agencies.",
      },
      {
        waste: "Biohazardous waste",
        bin: "yellow",
        guidance:
          "Autoclavable biohazard bags or containers for contaminated gloves, tissues, Petri dishes and biological material. Must never mix with regular waste.",
      },
      {
        waste: "E-waste",
        bin: "black",
        guidance:
          "Use the e-waste bins and the departmental collection drives for batteries, electronics and cabling. Coordinate certified recycling through the sustainability office.",
      },
    ],
    practices: [
      {
        title: "Colour-coded bins in every laboratory",
        body: "Placed so the correct container is always the nearest one.",
      },
      {
        title: "Training before bench access",
        body: "Every new scholar and project staff member, before they begin bench work.",
      },
      {
        title: "Logbooks that close the loop",
        body: "Records lab by lab, so what leaves the bench reconciles with what leaves the campus.",
      },
      {
        title: "Monthly departmental e-waste drives",
        body: "A fixed date gets dead equipment out of cupboards.",
      },
      {
        title: "Reuse before replacement",
        body: "Part-used markers, gloves and glassware pooled for teaching rather than discarded.",
      },
      {
        title: "Signage where the decision is made",
        body: "Posters at lab exits and in classrooms, not in corridors where nobody holds waste.",
      },
      {
        title: "Periodic waste audits",
        body: "A rotating schedule, with results published back to the department.",
      },
      {
        title: "A route for reporting problems",
        body: "Bin shortages and improper disposal can be reported, and get a response.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hostel",
    name: "Hostel zone",
    short: "Hostel",
    image: "zoneHostel",
    poster: "/posters/Hostel.png",
    summary:
      "Twenty-one hostels, their mess halls, common rooms, courts and the ground between them.",
    lede: "Waste here arrives in two sharp peaks: every evening after mess, and every semester end when rooms empty out. Both are predictable, which makes both manageable.",
    scale: [
      { value: "21", label: "Hostels" },
      { value: "~12,000", label: "Resident students" },
      { value: "2", label: "Waste peaks a day" },
    ],
    collectionPoints: [
      {
        place: "Hostel rooms and corridors",
        detail: "Per-floor three-bin stations; residents carry room waste down already segregated.",
      },
      {
        place: "Mess halls",
        detail:
          "Cauvery, Himalaya, Nilgiri, Ganga and the other messes — plate-scrape stations feeding the wet-waste line to the biogas digesters. Messes and commercial eateries must separate dry from wet before handing over to the Housekeeping team.",
      },
      {
        place: "Recreational areas",
        detail: "Sports courts, gyms, common rooms and TV rooms within or adjoining the hostels.",
      },
      {
        place: "Inter-hostel areas",
        detail: "Pathways, lawns and green spaces between blocks, including the cycle stands.",
      },
      {
        place: "Washrooms and garden areas",
        detail: "Dedicated sanitary bins in every washroom; garden trimmings go straight to the wet stream.",
      },
    ],
    groups: [
      {
        title: "Food-related waste",
    icon: "plate",
        intro: "The biggest stream here, and where a wrong bin does most damage. Wet does not mean biodegradable.",
        items: [
          {
            item: "Food scraps, fruit peel, leftover cooked food, tea bags, coffee grounds",
            bin: "green",
            classification: "Wet / biodegradable",
          },
          {
            item: "Wet food wrappers",
            detail:
              "The most common mistake in the zone. A wrapper soaked in curry is still plastic — it is wet, not biodegradable.",
            bin: "red",
            classification: "Non-recyclable",
          },
          {
            item: "Plastic takeaway containers and milk pouches",
            detail: "Rinse and dry; recyclable only when clean and single-layered.",
            bin: "blue",
            classification: "Dry, recyclable if rinsed",
          },
          {
            item: "Snack and noodle wrappers, chocolate and chip packets, biscuit packets",
            bin: "red",
            classification: "Multilayered — non-recyclable",
          },
          {
            item: "Styrofoam cups and plates, expired packaged food",
            detail: "Expired stock spikes at semester end — clear it before you leave, not on the last morning.",
            bin: "red",
            classification: "Non-recyclable",
          },
        ],
      },
      {
        title: "Stationery and study waste",
    icon: "book",
        items: [
          {
            item: "Notebooks, registers, loose paper, textbooks, craft paper",
            detail: "Usable textbooks belong in the hostel book bank, not the bin.",
            bin: "blue",
            classification: "Highly recyclable dry waste",
          },
          {
            item: "Delivery cartons and snack cardboard",
            detail: "Flatten before placing; an unflattened carton fills a bin on its own.",
            bin: "blue",
            classification: "Highly recyclable",
          },
          {
            item: "PVC files and folders, broken rulers, pen and pencil bodies, tape dispensers",
            bin: "red",
            classification: "Non-biodegradable dry waste",
          },
          {
            item: "Stapler pins, paper clips, sharpener blades",
            bin: "blue",
            classification: "Recyclable metal",
          },
          {
            item: "Erasers, glue, adhesives, paint brushes",
            bin: "red",
            classification: "Non-biodegradable dry waste",
          },
        ],
      },
      {
        title: "Room and personal waste",
    icon: "home",
        items: [
          {
            item: "Room sweepings, dust, hair, old window netting",
            bin: "red",
            classification: "Non-recyclable",
          },
          {
            item: "Empty plastic bottles and oil boxes",
            detail: "Rinse and they become recyclable.",
            bin: "blue",
            classification: "Recyclable once clean",
          },
          {
            item: "Sanitary napkins, cotton buds, contaminated tissues",
            detail: "Wrap in opaque paper or a marked bag before disposal.",
            bin: "red",
            classification: "Sanitary — dedicated bins where provided",
          },
          {
            item: "Used bandages and small-scale medical waste",
            bin: "red",
            classification: "Wrap and mark before disposal",
          },
          {
            item: "Broken crockery, mugs and glass",
            detail: "Wrap in newspaper and label ‘broken glass’ so nobody is cut handling it.",
            bin: "red",
            classification: "Non-recyclable — handle with care",
          },
        ],
      },
      {
        title: "Semester-end and bulky waste",
    icon: "box",
        intro: "Almost none of this is waste. Most of it is somebody else's first-year kit.",
        items: [
          {
            item: "Mattresses, buckets, desk lamps, furniture",
            detail: "Route to the semester-end exchange before the last week.",
            bin: "red",
            classification: "Reuse first; reject only if unusable",
          },
          {
            item: "Clothes, handkerchiefs, doormats, curtains, footwear",
            detail: "Donate wearable items; textiles in poor condition go to the rag stream.",
            bin: "red",
            classification: "Donate, otherwise reject",
          },
          {
            item: "Cycles, cycle parts and tyres",
            detail: "The cycle pool takes working cycles and salvages parts from the rest.",
            bin: "black",
            classification: "Reuse or scrap metal recovery",
          },
        ],
      },
    ],
    disposal: [
      {
        waste: "Dry recyclable waste",
        bin: "blue",
        guidance:
          "Rinse containers with plain water — soap is not needed — so that residue does not contaminate the rest of the bin. Flatten bulky cardboard and place it beside the bin in the marked area rather than inside. Leave bottle caps on; they are recovered with the bottle.",
      },
      {
        waste: "Wet / biodegradable waste",
        bin: "green",
        guidance:
          "Drain all liquids before disposal. Use bin liners for wet waste to prevent leakage and odour. Never pour liquids into an unlined bin.",
      },
      {
        waste: "Non-recyclable waste",
        bin: "red",
        guidance:
          "Wrap heavily contaminated waste to control odour. Sanitary napkins must be wrapped in opaque bags. Broken glass is wrapped in newspaper and labelled ‘broken glass’ for the safety of collection staff.",
      },
    ],
    practices: [
      {
        title: "Close the two gaps",
        body: "Neither hazardous waste nor e-waste has a dedicated hostel collection. Both would be the highest-value addition here.",
      },
      {
        title: "Steel over single-use",
        body: "A tumbler and a set of containers cover a whole degree.",
      },
      {
        title: "Hand over, don't leave behind",
        body: "Match vacating students' kit to incoming students, interns and staff.",
      },
      {
        title: "Audit each hostel, publish the result",
        body: "Track compliance and generation per hostel; publish it back to residents.",
    },
      {
        title: "Right number of bins, right places",
        body: "Reviewed per floor against resident feedback on adequacy and upkeep.",
      },
      {
        title: "Watch the events",
        body: "Segregation slips most during hostel nights — the moment worth watching.",
      },
    ],
    gaps: [
      "Dedicated hazardous-waste collection points in hostels",
      "Dedicated e-waste bins at hostel level rather than campus level",
      "A standing semester-end reuse depot rather than an ad-hoc one",
      "Abandoned cycles accumulating around hostels with no route to recovery",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "residential",
    name: "Residential zone",
    short: "Residential",
    image: "zoneResidential",
    poster: "/posters/Residential.png",
    summary:
      "Quarters and apartments, the community hall and shopping complex, the campus schools and the gardens between them.",
    lede: "1,069 households with kitchens, gardens and festivals: the highest share of compostable material on campus, and the widest spread of occasional streams — paint, medicines, appliances, debris.",
    scale: [
      { value: "1,069", label: "Occupied households" },
      { value: "2", label: "Campus schools" },
      { value: "Daily", label: "Wet-waste collection" },
    ],
    collectionPoints: [
      {
        place: "Individual housing units",
        detail: "Door-to-door collection from each household. Residents are asked to segregate before handing waste over — the collector does not re-sort it.",
      },
      {
        place: "Community areas",
        detail: "Community hall, children's play area, shopping complex and temples.",
      },
      { place: "Community gardens and roadside bins", detail: "Garden waste is collected separately for composting." },
      { place: "Apartments", detail: "Separate collection from each household rather than a shared chute." },
      { place: "Schools", detail: "Kendriya Vidyalaya and Vana Vani, with their own segregation programmes." },
      {
        place: "Service areas",
        detail: "Maintenance yards, vehicle parking zones and the zone's administrative offices.",
      },
    ],
    groups: [
      {
        title: "Kitchen waste",
    icon: "plate",
        items: [
          {
            item: "Vegetable peel, fruit rind, leftover cooked food, expired food, tea leaves, coffee grounds",
            bin: "green",
            classification: "Wet / biodegradable",
          },
          {
            item: "Plastic takeaway boxes, milk pouches, aluminium foil, glass jars and bottles",
            detail: "Rinse before disposal — a rinsed container is recyclable, a greasy one is not.",
            bin: "blue",
            classification: "Dry, recyclable if clean",
          },
          {
            item: "Milk cartons, snack wrappers, frozen-food packaging, instant noodle packets",
            bin: "red",
            classification: "Multilayered — non-recyclable",
          },
          {
            item: "Used cooking oil and oil-soaked paper",
            detail:
              "Never pour oil down the drain or into the wet bin. Collect it in a sealed bottle for the separate used-oil collection.",
            bin: "yellow",
            classification: "Special disposal required",
          },
        ],
      },
      {
        title: "Living area waste",
    icon: "home",
        items: [
          {
            item: "Newspapers, magazines, old books, cardboard, bills and documents",
            detail: "Books in good condition go to the community book exchange first.",
            bin: "blue",
            classification: "Recyclable dry waste",
          },
          {
            item: "Plastic bags, bottles, containers, toys, packaging",
            bin: "blue",
            classification: "Recyclable when clean and rigid",
          },
          {
            item: "Old clothes, bed sheets, curtains, towels, footwear",
            detail: "Donation-worthy if in good condition; see the residential repurposing guide.",
            bin: "red",
            classification: "Donate or textile recovery",
          },
        ],
      },
      {
        title: "Bathroom and personal care",
    icon: "drop",
        items: [
          {
            item: "Sanitary napkins, diapers, cotton, used tissues",
            detail: "Wrap securely in opaque material and mark before disposal.",
            bin: "red",
            classification: "Sanitary waste",
          },
          {
            item: "Shampoo bottles, cosmetic containers, medicine bottles",
            bin: "blue",
            classification: "Recyclable dry waste if clean",
          },
          {
            item: "Expired medicines, tablets, syrups, medical supplies",
            detail: "Hold for the monthly hazardous collection drive — never the regular bin, never the drain.",
            bin: "yellow",
            classification: "Hazardous — special collection",
          },
        ],
      },
      {
        title: "Cleaning, maintenance and garden",
    icon: "tool",
        items: [
          {
            item: "Empty detergent and cleaning-chemical containers, mop heads, old brushes",
            detail: "Classification follows contamination: rinsed and empty goes blue, residue-bearing goes yellow.",
            bin: "blue",
            classification: "Mixed — depends on contamination",
          },
          {
            item: "Paint cans, solvents, hardware chemicals",
            bin: "yellow",
            classification: "Hazardous waste",
          },
          {
            item: "Broken appliances and old furniture",
            detail: "Book a bulky-waste collection rather than leaving items at the roadside.",
            bin: "black",
            classification: "Bulky waste — reuse or certified recovery",
          },
          {
            item: "Pruned branches, fallen leaves, grass clippings, plant pots",
            bin: "green",
            classification: "Biodegradable — suitable for composting",
          },
        ],
      },
      {
        title: "Electronic waste",
    icon: "bolt",
        items: [
          {
            item: "Mixers, rice cookers, fans, gadgets, chargers, batteries",
            bin: "black",
            classification: "E-waste — separate collection",
          },
          {
            item: "Televisions, computers, mobile phones, audio equipment",
            detail: "Remove and separately deposit batteries before handing over the device.",
            bin: "black",
            classification: "E-waste — certified disposal",
          },
        ],
      },
      {
        title: "Seasonal and occasional waste",
    icon: "gift",
        intro: "Bursts that regular collection is not sized for. Plan each a week ahead.",
        items: [
          {
            item: "Flowers, rangoli material, decorations, thermocol",
            detail: "Flowers and rangoli powder compost; thermocol and plastic decoration do not.",
            bin: "green",
            classification: "Mixed — separate at source",
          },
          {
            item: "Wrapping paper, greeting cards, gift packaging",
            bin: "blue",
            classification: "Mostly recyclable dry waste",
          },
          {
            item: "Cardboard boxes, bubble wrap, packing foam, plastic covers",
            detail: "Offer intact boxes to the next household moving in.",
            bin: "blue",
            classification: "Recyclable dry waste",
          },
          {
            item: "Furniture, appliances, cycles, books and belongings left on moving out",
            bin: "red",
            classification: "Bulky waste — donation-worthy items go to the exchange",
          },
          {
            item: "Broken tiles, cement debris, renovation rubble",
            detail: "Construction and demolition waste is never mixed with household waste; arrange separate lifting.",
            bin: "black",
            classification: "Construction & demolition waste",
          },
        ],
      },
    ],
    disposal: [
      {
        waste: "Dry recyclable waste",
        bin: "blue",
        guidance:
          "Rinse containers to remove residue. Flatten oversized cardboard. Keep paper clean and dry. Where local recycling rules differ on bottle caps, follow the signage at the collection point.",
      },
      {
        waste: "Wet / biodegradable waste",
        bin: "green",
        guidance:
          "Drain liquids before disposal and use compostable liners. Never pour cooking oil in — collect it separately in a sealed container.",
      },
      {
        waste: "Non-recyclable waste",
        bin: "red",
        guidance:
          "Wrap contaminated items before disposal. Soiled paper, mixed materials and multilayered packaging belong here. Seal to prevent odour.",
      },
      {
        waste: "Sanitary waste",
        bin: "red",
        guidance:
          "Wrap securely in opaque material, mark it, and use the designated sanitary bins where they are provided. Handling hygiene matters as much as the bin choice.",
      },
      {
        waste: "Hazardous waste",
        bin: "yellow",
        guidance:
          "Store separately until the monthly collection drive: expired medicines, paint, chemicals and batteries. Never in a regular bin, never down the drain.",
      },
      {
        waste: "E-waste",
        bin: "black",
        guidance:
          "Deposit at the designated e-waste points. Remove batteries first and deposit them separately. Never mix with regular waste.",
      },
    ],
    practices: [
      {
        title: "Colour-coded bins with multilingual signage",
        body: "Tamil, Hindi and English, so residents and service staff read the same instruction.",
      },
      {
        title: "Daily wet, twice-weekly dry",
        body: "Wet daily, dry twice weekly, with segregated transport so streams do not remix.",
      },
      {
        title: "Block-level bulky waste points",
        body: "A block point rather than the roadside, lifted around academic breaks.",
      },
      {
        title: "Secure e-waste holding",
        body: "A locked area per block until the certified recycler collects.",
      },
      {
        title: "Waste management in the welcome kit",
        body: "A printed guide at handover, and an orientation within the first month.",
      },
      {
        title: "Resident volunteers and a zone committee",
        body: "Volunteers support daily practice; a zone committee oversees implementation.",
      },
      {
        title: "Monthly hazardous collection drives",
        body: "A fixed date for medicines, batteries and chemicals, with safe storage provided.",
      },
      {
        title: "Measure, then adjust",
        body: "Audits, diversion tracking and surveys — with schedules adjusted to the data.",
      },
    ],
  },
];

export const zoneBySlug = Object.fromEntries(zones.map((z) => [z.slug, z])) as Record<
  Zone["slug"],
  Zone
>;
