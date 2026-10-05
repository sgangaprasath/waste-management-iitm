import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section, SectionHead, Callout, NextSteps } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources & downloads",
  description:
    "Printable waste segregation posters and event signage for the academic, hostel and residential zones of IIT Madras.",
};

type Poster = { title: string; blurb: string; file: string };

const zonePosters: Poster[] = [
  {
    title: "Campus-wide",
    blurb: "The three-bin system, for corridors, entrances and noticeboards anywhere on campus.",
    file: "/posters/Campus.png",
  },
  {
    title: "Academic zone",
    blurb: "For departments, laboratories, lecture halls and the Central Library.",
    file: "/posters/Academic.png",
  },
  {
    title: "Hostel zone",
    blurb: "For hostel floors, mess halls, common rooms and cycle stands.",
    file: "/posters/Hostel.png",
  },
  {
    title: "Residential zone",
    blurb: "For quarters, apartment blocks, the community hall and the shopping complex.",
    file: "/posters/Residential.png",
  },
];

const eventPosters: Poster[] = [
  {
    title: "Conferences & symposia",
    blurb: "Bin-station signage for academic events, workshops and paper presentations.",
    file: "/posters/Conference.png",
  },
  {
    title: "Festivals",
    blurb: "For Shaastra, Saarang, hostel nights and campus celebrations.",
    file: "/posters/Festivals.png",
  },
  {
    title: "General event flyer",
    blurb: "A lighter-touch poster for gatherings, stalls and informal events.",
    file: "/posters/Fun.png",
  },
];

function PosterGrid({ items }: { items: Poster[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => (
        <li
          key={p.file}
          className="group flex flex-col overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-ink-hair bg-paper-soft">
            <Image
              src={p.file}
              alt={`${p.title} waste segregation poster`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-serif text-lg leading-snug text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-mute">{p.blurb}</p>
            <a
              href={p.file}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-ink-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download PNG
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        icon="printer"
        title="Posters & printable signage"
        lede="Signage works where the decision is made — at the bin, at the exit, above the plate-scrape station. Print, laminate, and put them where someone is standing with something in their hand."
        crumbs={[{ label: "Resources", href: "/downloads" }]}
      />

      <Section tone="paper">
        <SectionHead
          eyebrow="Zone signage"
          icon="printer"
          title="Segregation posters by zone"
        />
        <div className="mt-10">
          <PosterGrid items={zonePosters} />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="Events"
          icon="calendar"
          title="Flyers and bin-station signage for events"
          lede="Signage at every station, plus a volunteer during meal breaks, does most of the work."
        />
        <div className="mt-10">
          <PosterGrid items={eventPosters} />
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <Callout title="Printing notes" tone="brand">
            <ul className="mt-2 space-y-2">
              <li>A3 at every bin station; A2 or larger at building entrances and mess halls.</li>
              <li>Laminate anything going outdoors or near a wet-waste station.</li>
              <li>
                Mount at eye level directly above or beside the bins, not on the wall opposite them.
              </li>
              <li>
                Replace faded or peeling signage promptly &mdash; illegible signage teaches people to
                stop reading signage.
              </li>
            </ul>
          </Callout>
          <Callout title="Need something that is not here?" tone="moss">
            <p>
              We can supply artwork for a specific lab, wing, department or event, including Tamil
              and Hindi versions. Say what you need, where it goes, and how many copies.
            </p>
          </Callout>
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <h3 className="display-3 mb-6 text-xl">Related</h3>
          <NextSteps
            items={[
              { label: "Campus-wide guidelines", href: "/guidelines", blurb: "What the posters are based on." },
              { icon: "calendar", label: "Event organisers", href: "/take-action/events", blurb: "Planning bins, catering and staffing." },
              { icon: "info", label: "About the committee", href: "/about", blurb: "Who to ask for custom artwork." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
