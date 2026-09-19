# Image sourcing brief

Every image resolves through `content/images.ts`. To replace one, drop a file
into `public/images/` and point the slot's `src` at it — nothing else changes.

```ts
recycling: {
  src: "/images/plasticbottle.jpg",   // path under /public
  alt: "…",                            // required, describes what is shown
  search: "…",                         // suggested search term
  fit: "contain",                      // optional; for posters and diagrams
},
```

## Where the photographs came from

All campus photographs are from the student project decks and are credited in
`content/images.ts` via the `credit` field.

| File | From |
|------|------|
| `segregation-yard.jpg`, `yard-baling.jpg`, `yard-sorted.jpg`, `yard-records.jpg`, `vermicompost.jpg` | Catalog Flow of Packaging Materials (Group 3) |
| `waste-map.jpg`, `abandoned-cycles.jpg`, `construction-debris.jpg`, `unsegregated-waste.jpg` | IITM Campus Waste Map (Group 1) |
| `clean-up-drive.jpg`, `steel-cups.jpg`, `campus-survey.jpg` | Understanding Collective Campus Residents Behaviour (Group 2) |

Two of these are low resolution because the deck embedded them small:
`waste-map.jpg` (366×199) and `abandoned-cycles.jpg` (408×376). They are used at
small display sizes, but a higher-resolution original would be worth having.

## Slots that would still benefit from a photograph

| Page | What the shot should show |
|------|---------------------------|
| `/guidelines/academic` | A three-bin station outside a lecture hall or lab |
| `/guidelines/hostel` | A mess plate-scrape station at peak time |
| `/guidelines/residential` | Door-to-door collection, or a community compost pit |
| `/guidelines/lab-waste` | A labelled yellow container beside a working bench |
| `/about` | The committee, or a campus clean-up drive |

## Campus photography beats stock

The strongest version of this site uses photographs of this campus: the biogas
digesters, the treatment plant, the Punch the Plastic collection devices, a mess
scrape station, a Swachhta Hi Seva drive, the blackbuck grassland. Stock is the
fallback.

## If you are sourcing stock

Pixabay, Pexels, Unsplash and Wikimedia Commons all work fine from a normal
connection — download to `public/images/`, around 1600px on the long edge, JPEG,
under ~400KB. Record each file's source below as you add it.

`next.config.js` also allows `cdn.pixabay.com` and `images.pexels.com` as remote
hosts, so a full URL can be used as `src` directly. Self-hosting is preferred.

| File | Source | Licence | Added |
|------|--------|---------|-------|
| `CoverMain.jpg`, `Cover1.jpg`, `Cover2.jpg` | Institute photography | — | pre-existing |
| `campus-banyan.jpg` | Cropped from `CoverMain.jpg` | — | — |
| `posters/*.png` | Waste Management Committee | Institute | pre-existing |
| `compost.jpg`, `eWaste.jpg`, `labwaste.jpg`, `plasticbottle.jpg`, `upcycling.jpg`, `volunteer.jpg` | Pixabay | Pixabay licence | added by hand |
| Campus photographs (see table above) | Student project decks | Institute | added from decks |
