/**
 * The committee's printable signage.
 *
 * One manifest, used by the downloads page and by the poster carousel on
 * the home page, so a new poster only has to be described once.
 */

export type Poster = {
  title: string;
  /** Sentence shown on the downloads card. */
  blurb: string;
  /** Path under /public. */
  file: string;
  alt: string;
  /** Short kicker shown above the title in the carousel. */
  kicker: string;
  /** Where the matching guidance lives. */
  href: string;
};

export const zonePosters: Poster[] = [
  {
    title: "Campus-wide",
    kicker: "The three zones",
    blurb: "The three-bin system, for corridors, entrances and noticeboards anywhere on campus.",
    file: "/posters/Campus.png",
    alt: "Map of IIT Madras divided into the academic, hostel and residential zones",
    href: "/guidelines",
  },
  {
    title: "Academic zone",
    kicker: "Zone signage",
    blurb: "For departments, laboratories, lecture halls and the Central Library.",
    file: "/posters/Academic.png",
    alt: "Academic zone poster listing what goes in the compost, recyclable and non-recyclable bins",
    href: "/guidelines/academic",
  },
  {
    title: "Hostel zone",
    kicker: "Zone signage",
    blurb: "For hostel floors, mess halls, common rooms and cycle stands.",
    file: "/posters/Hostel.png",
    alt: "Hostel zone poster listing what goes in the compost, recyclable and non-recyclable bins",
    href: "/guidelines/hostel",
  },
  {
    title: "Residential zone",
    kicker: "Zone signage",
    blurb: "For quarters, apartment blocks, the community hall and the shopping complex.",
    file: "/posters/Residential.png",
    alt: "Residential zone poster listing what goes in the compost, recyclable and non-recyclable bins",
    href: "/guidelines/residential",
  },
];

export const eventPosters: Poster[] = [
  {
    title: "Conferences & symposia",
    kicker: "Event signage",
    blurb: "Bin-station signage for academic events, workshops and paper presentations.",
    file: "/posters/Conference.png",
    alt: "Conference poster listing what goes in each bin at an academic event",
    href: "/take-action/events",
  },
  {
    title: "Festivals",
    kicker: "Event signage",
    blurb: "For Shaastra, Saarang, hostel nights and campus celebrations.",
    file: "/posters/Festivals.png",
    alt: "Festival poster listing what goes in each bin at a campus celebration",
    href: "/take-action/events",
  },
  {
    title: "General event flyer",
    kicker: "Event signage",
    blurb: "A lighter-touch poster for gatherings, stalls and informal events.",
    file: "/posters/Fun.png",
    alt: "Illustrated poster of three talking bins complaining about being given the wrong waste",
    href: "/downloads",
  },
];

/**
 * The home-page carousel.
 *
 * Only the A4-landscape sheets go in here: they all share the same 1.414
 * ratio, so the carousel frame can be set to exactly that and every poster
 * fills it edge to edge — no letterboxing, no cropped bin lists. The
 * campus map and the portrait flyer are a different shape and live on the
 * downloads page instead.
 */
export const heroPosters: Poster[] = [
  zonePosters[1],
  zonePosters[2],
  zonePosters[3],
  eventPosters[1],
  eventPosters[0],
];
