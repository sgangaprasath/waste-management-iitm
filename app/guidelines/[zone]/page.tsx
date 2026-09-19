import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps } from "@/components/ui";
import { WasteTable, DisposalTable, PracticeList, CollectionPoints } from "@/components/zoneParts";
import BinTally from "@/components/binTally";
import BinFinderPanel from "@/components/binFinderPanel";
import { zones, zoneBySlug, type Zone } from "@/content/zones";

type Params = { zone: string };

export function generateStaticParams() {
  return zones.map((z) => ({ zone: z.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { zone } = await params;
  const z = zoneBySlug[zone as Zone["slug"]];
  if (!z) return {};
  return { title: `${z.name} — waste guidelines`, description: z.summary };
}

export default async function ZonePage({ params }: { params: Promise<Params> }) {
  const { zone } = await params;
  const z = zoneBySlug[zone as Zone["slug"]];
  if (!z) notFound();

  const others = zones.filter((o) => o.slug !== z.slug);

  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title={z.name}
        lede={z.lede}
        crumbs={[
          { label: "Guidelines", href: "/guidelines" },
          { label: z.name, href: `/guidelines/${z.slug}` },
        ]}
        meta={
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {z.scale.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-brand-700">{s.value}</dt>
                <dd className="mt-1 text-[0.8125rem] text-ink-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_minmax(0,22rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Where waste is collected"
              title="Collection points in this zone"
              lede={z.summary}
            />
            <div className="mt-10">
              <CollectionPoints points={z.collectionPoints} />
            </div>
          </div>
          <div className="space-y-6">
            <Figure
              name={z.image}
              className="aspect-[4/3] w-full"
              caption="Zone segregation poster."
            />
            <Link
              href="/downloads"
              className="inline-flex text-sm font-medium text-brand-700 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-600"
            >
              Download this poster
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="What this zone generates"
          title="Every category, and the container it belongs in"
          lede="Grouped by where the waste arises."
        />
        <div className="mt-10">
          <BinTally zone={z} />
        </div>
        <div className="mt-8 space-y-8">
          {z.groups.map((g) => (
            <WasteTable key={g.title} group={g} />
          ))}
        </div>
        <div className="mt-8">
          <BinFinderPanel tone="paper" />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead
          eyebrow="Disposal"
          title="How each stream is handled here"
          lede="What the Engineering Unit and collection staff work to. If a container is missing, report it rather than improvising."
        />
        <div className="mt-10">
          <DisposalTable rows={z.disposal} />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_minmax(0,21rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Best practice"
              title="What good looks like in this zone"
              lede="Some already in place, some being worked towards — both listed so the gap is visible."
            />
            <div className="mt-10">
              <PracticeList items={z.practices} />
            </div>
          </div>
          <div className="space-y-6">
            {z.gaps?.length ? (
              <Callout title="Known gaps in this zone" tone="warn">
                <ul className="mt-2 space-y-2">
                  {z.gaps.map((g) => (
                    <li key={g} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bin-yellow" />
                      {g}
                    </li>
                  ))}
                </ul>

              </Callout>
            ) : null}
            <Callout title="Go further in this zone" tone="moss">
              <span className="flex flex-col gap-2">
                <Link href={`/recycling/${z.slug}`} className="link-underline font-medium">
                  Recycling in the {z.name.toLowerCase()} &rarr;
                </Link>
                <Link href={`/repurposing/${z.slug}`} className="link-underline font-medium">
                  Repurposing in the {z.name.toLowerCase()} &rarr;
                </Link>
              </span>
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="display-3 mb-6 text-xl">Other zones</h2>
        <NextSteps
          items={[
            ...others.map((o) => ({ label: o.name, href: `/guidelines/${o.slug}`, blurb: o.summary })),
            {
              label: "Campus-wide rules",
              href: "/guidelines",
              blurb: "The three-bin system and the rules that apply everywhere.",
            },
          ]}
        />
      </Section>
    </>
  );
}
