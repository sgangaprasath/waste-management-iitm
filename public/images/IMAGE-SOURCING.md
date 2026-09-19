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

## Slots still on stand-in images

These three currently show a duplicate of another photo. They were created for
the student decks and are the highest priority.

| Slot | Wants | Source |
|------|-------|--------|
| `segregationYard` | Manual sorting at the yard; the baled categories | Group 3 deck, slides 6, 10, 11, 12 |
| `wasteMap` | The campus waste map itself | Group 1 deck, "Website for Campus Waste Map" |
| `freecycle` | The Freecycle platform in use | Group 4 deck, live-demo slide |

## Slots worth adding a photo to

These pages carry the most text and the fewest pictures. A single good
photograph on each would do more than any amount of editing.

| Page | Suggested slot | What the shot should show |
|------|----------------|---------------------------|
| `/guidelines/academic` | a second zone image | A three-bin station outside a lecture hall or lab |
| `/guidelines/residential` | a second zone image | Door-to-door collection, or a community compost pit |
| `/guidelines/hostel` | a second zone image | A mess plate-scrape station at peak time |
| `/progress` | a header image | The 4 MLD sewage treatment plant, or the biogas digesters |
| `/about` | committee image | The committee, or a campus clean-up drive |
| `/guidelines/lab-waste` | in-situ image | A labelled yellow container beside a working bench |

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
| `segregation-yard.jpg`, `waste-map.jpg`, `freecycle.jpg` | **stand-ins — replace** | — | — |
