import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import { BinChip } from "@/components/binParts";
import Icon from "@/components/icons";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Pill } from "@/components/ui";
import { streams, contaminationRules, zoneRecycling } from "@/content/recycling";
import { dailyVolumes } from "@/content/flow";

export const metadata: Metadata = {
  title: "Recycling",
  description:
    "What each material stream is worth, how contamination destroys it, and where recovered material from the IIT Madras campus goes.",
};

const recoverLabel = { high: "High recovery", medium: "Conditional", low: "Difficult" } as const;
const recoverTone = { high: "moss", medium: "amber", low: "brand" } as const;

export default function RecyclingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recycling"
        title="What happens after the bin"
        lede="A material is recycled when somebody is willing to buy it, process it and sell what comes out. That is the whole mechanism — which means the quality of what leaves this campus decides whether it is recycled at all."
        crumbs={[{ label: "Recycling", href: "/recycling" }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div className="prose-iitm max-w-[46ch]">
            <p className="!mt-0 lede">
              Clean, dry, sorted material has a buyer. The same material contaminated with food is a
              cost to somebody, and ends up in the reject stream however carefully it was separated.
              The difference is usually three seconds under a tap.
            </p>
            <p>
              Recycling also sits low on the hierarchy: it recovers the material but destroys the
              object. A repaired cycle is worth far more than a melted one. Before recycling
              something, check whether it should be{" "}
              <Link href="/repurposing">reused or repaired</Link> instead.
            </p>
          </div>
          <div className="space-y-5">
            <Figure name="recycling" className="aspect-[4/3] w-full" />
            <Callout tone="moss">
              About <strong>800&nbsp;kg</strong> of food waste a day goes to the campus biogas
              digesters, and <strong>150–200&nbsp;kg</strong> of vegetable waste is composted.
              Organics are the campus&rsquo;s most successful recovery stream by a wide margin.
            </Callout>
            <Callout title="Card is the volume problem" tone="plain">
              <p>
                The segregation yard records about <strong>{dailyVolumes[0].kgPerDay}&nbsp;kg</strong>{" "}
                of plastic-coated card and <strong>{dailyVolumes[1].kgPerDay}&nbsp;kg</strong> of
                cardboard a day &mdash; more than all the plastic categories combined.
              </p>
              <p className="mt-2">
                <Link href="/guidelines/where-it-goes" className="link-underline font-medium">
                  See the full daily breakdown &rarr;
                </Link>
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      {/* Streams table */}
      <Section tone="soft">
        <SectionHead
          eyebrow="The streams"
          icon="cycle"
          title="Every material, and what has to be true to recover it"
        />
        <div className="mt-10 overflow-x-auto rounded-xl border border-ink-line bg-paper shadow-card">
          <table className="w-full min-w-[54rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink-line bg-paper-soft">
                <th scope="col" className="w-[17rem] px-6 py-4 eyebrow">Material</th>
                <th scope="col" className="w-[18rem] px-6 py-4 eyebrow">Prepare it like this</th>
                <th scope="col" className="px-6 py-4 eyebrow">Where it goes</th>
              </tr>
            </thead>
            <tbody>
              {streams.map((s) => (
                <tr key={s.name} className="border-b border-ink-hair align-top last:border-b-0">
                  <th scope="row" className="px-6 py-5 text-left font-normal">
                    <span className="flex items-start gap-2.5">
                      <Icon name={s.icon} size={22} className="mt-[3px] text-brand-700" />
                      <span className="block font-serif text-[1.25rem] leading-snug text-ink">
                        {s.name}
                      </span>
                    </span>
                    <span className="mt-1.5 block pl-[1.9375rem] text-[0.9375rem] leading-[1.45] text-ink-mute">
                      {s.materials}
                    </span>
                    <span className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 pl-[1.9375rem]">
                      <BinChip bin={s.bin} />
                      <Pill tone={recoverTone[s.recoverable]}>{recoverLabel[s.recoverable]}</Pill>
                    </span>
                  </th>
                  <td className="px-6 py-5 text-[0.9375rem] leading-relaxed text-ink-soft">{s.prepare}</td>
                  <td className="px-6 py-5 text-[0.9375rem] leading-relaxed text-ink-soft">{s.fate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Contamination */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Contamination"
          icon="warning"
          title="Six things that decide whether any of this works"
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contaminationRules.map((r) => (
            <li key={r.rule} className="rounded-xl border border-ink-line bg-paper p-5 shadow-card">
              <Icon name="warning" size={20} className="text-[#B8860B]" />
              <p className="mt-1 font-serif text-[1.25rem] leading-snug text-ink">{r.rule}</p>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-mute">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Zones — merged onto this page */}
      <Section tone="soft">
        <SectionHead
          eyebrow="By zone"
          icon="map"
          title="Where the effort pays off in your part of campus"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {zoneRecycling.map((z) => (
            <section
              key={z.slug}
              id={z.slug}
              className="rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-7"
            >
              <h3 className="font-serif text-[1.5rem] leading-tight text-ink">{z.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">{z.lede}</p>

              <p className="eyebrow mt-6">What matters most</p>
              <ul className="mt-2.5 space-y-2">
                {z.priorities.map((p) => (
                  <li key={p} className="relative pl-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span aria-hidden className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-6">Where to take it</p>
              <ul className="mt-2.5 divide-y divide-ink-hair border-y border-ink-hair">
                {z.where.map((w) => (
                  <li key={w} className="py-2 text-[0.875rem] leading-snug text-ink-mute">
                    {w}
                  </li>
                ))}
              </ul>

              <Link
                href={`/guidelines/${z.slug}`}
                className="mt-5 inline-block text-[0.8125rem] font-medium text-brand-700 hover:underline"
              >
                Full {z.name.toLowerCase()} guidelines &rarr;
              </Link>
            </section>
          ))}
        </div>
      </Section>

      <Section tone="paper" tight>
        <NextSteps
          items={[
            { icon: "truck", label: "Where it goes", href: "/guidelines/where-it-goes", blurb: "The segregation yard, its 24 categories and the daily volumes." },
            { icon: "box", label: "Repurposing", href: "/repurposing", blurb: "Better than recycling: keep the object, not just the material." },
            { icon: "document", label: "Campus guidelines", href: "/guidelines", blurb: "The three-bin system and what goes where." },
          ]}
        />
      </Section>
    </>
  );
}
