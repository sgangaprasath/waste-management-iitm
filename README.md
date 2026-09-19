# IIT Madras — Waste & Circularity

The institute's reference site for waste segregation, recycling, repurposing and
campus action, covering the academic, hostel and residential zones.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

Node 20+ required.

## How the site is put together

Content is **data, not markup**. Everything substantive lives in `content/` as
typed TypeScript, and the pages in `app/` render it. To change what the site
says, edit `content/` — you almost never need to touch a page component.

```
content/
  site.ts         Navigation, contact details, campus metrics (each with its source)
  bins.ts         The five waste streams — what each takes, refuses, and where it goes
  zones.ts        Academic / hostel / residential: collection points, waste
                  categories, disposal tables, best practice, known gaps
  recycling.ts    Material streams, contamination rules, per-zone blocks
  repurposing.ts  The reuse-first ladder, programmes, per-zone blocks
  takeAction.ts   Audience pledges and checklists, campaigns, recognition schemes
  images.ts       The image manifest (see public/images/IMAGE-SOURCING.md)

components/
  navbar.tsx      Sticky header with desktop dropdowns and mobile drawer
  footer.tsx
  ui.tsx          Section, PageHeader, Card, StatGrid, Callout, Button, Pill…
  icons.tsx       The 24×24 line icon set, and the three-dot effort scale
  binParts.tsx    Bin chips and the five bin cards
  zoneParts.tsx   Waste tables, disposal tables, practice lists
  figure.tsx      Resolves an image slot to a photo or generated artwork
  artwork.tsx     Generated SVG fallback for slots without a photograph
```

Routes are derived: `/guidelines/[zone]` and `/take-action/[audience]` are
statically generated from the content arrays, so adding a zone or an audience
means adding one object.

Recycling and repurposing are one page each, with the three zones as sections
of that page rather than separate routes.

Old URLs (`/academic`, `/hostel`, `/residence`, `/general`, `/download`, `/lab`,
`/recycling/*`, `/repurposing/*`) redirect to their new homes, so printed QR
codes and existing links keep working.

## Design

- **Type.** EB Garamond for titles only — `h1`–`h5`, the `.display-*` classes and
  card headings. All body text, labels and UI chrome are Inter. `body` is set to
  `font-sans`, so anything that should be serif must say so explicitly.
- **Colour.** Near-black ink (`#111110`) on white, with a cool grey
  (`paper-soft`, `#F7F7F5`) for alternating bands — no beige. IIT Madras maroon
  (`brand`) carries buttons, links, eyebrows and icons. Bin colours are fixed
  under `bin` and must not be restyled — they are the interface.
- **Surfaces.** Rounded cards (`rounded-xl`) with a hairline `ink-line` border
  and the `card` / `lift` shadows. `ink-line` is for structural borders,
  `ink-hair` for dividers inside a card.
- All of it is defined in `tailwind.config.js` and `app/global.css`.

### Fonts

Fonts load through a `<link>` in `app/layout.tsx` rather than
`next/font/google`, so the project builds on networks without access to
fonts.googleapis.com. On a normal network `next/font/google` is better — it
self-hosts the files and removes a render-blocking request. The switch is a
short comment block at the top of `app/layout.tsx`.

## Images

Every image resolves through `content/images.ts`, so replacing a placeholder is
a one-line change. Slots without a photograph render generated SVG artwork
rather than an empty box. See `public/images/IMAGE-SOURCING.md` for what each
slot needs and where to get it.

## Content conventions

Two labels appear throughout the site and are load-bearing:

- **“to confirm”** — a figure supplied by the committee that could not be
  verified against a published source. Set `verified: false` in `content/site.ts`.
- **“proposed”** — a programme or practice that is an aspiration, not current
  reality. Set `status: "proposed"`.

Both exist so the site never overstates what the campus already does. Please
keep them accurate; a guidance site that exaggerates is harder to trust on the
things it gets right.

Verified campus figures come from the
[Climate Action Plan of IIT Madras (2022)](https://www.iitm.ac.in/sites/default/files/Others/jan-2022-climate-action-plan.pdf).

## Archive

`blog/*.md` holds the original markdown content the site was built from. Nothing
renders it any more; it is kept for reference and can be deleted once the
committee is satisfied nothing was lost in the move to `content/`.
