import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import FlowDiagram from "@/components/flowDiagram";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Pill } from "@/components/ui";
import { yard, yardCategories, dailyVolumes, STUDY_PACKAGING } from "@/content/flow";

export const metadata: Metadata = {
  title: "Where it goes",
  description:
    "From bin to segregation yard to vendor: how waste actually travels off the IIT Madras campus, the 24 sorting categories, and the measured daily volumes.",
};

const totalKg = dailyVolumes.reduce((t, v) => t + v.kgPerDay, 0);
const maxShare = Math.max(...dailyVolumes.map((v) => (v.kgPerDay / totalKg) * 100));

export default function WhereItGoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title="Where it goes after the bin"
        lede="Segregating correctly only matters because of what happens next. This is the route your waste actually takes across campus — who collects it, where it is sorted, and who buys it."
        crumbs={[
          { label: "Guidelines", href: "/guidelines" },
          { label: "Where it goes", href: "/guidelines/where-it-goes" },
        ]}
      />

      {/* The flow */}
      <Section tone="paper">
        <SectionHead eyebrow="The route" title="Bin to yard to vendor" />
        <div className="mt-10">
          <FlowDiagram />
        </div>
        <p className="mt-5 text-[0.875rem] text-ink-mute">
          Documented by <em>{STUDY_PACKAGING.title}</em> &mdash; {STUDY_PACKAGING.authors}.{" "}
          {STUDY_PACKAGING.note}
        </p>
      </Section>

      {/* The yard */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_minmax(0,23rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="The segregation yard"
              title="Thirty-five people, sorting by hand"
              lede="The yard is the hinge of the whole system, and it runs almost entirely on accumulated human judgement."
            />
            <ul className="mt-9 space-y-3">
              {yard.facts.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Callout title="What limits it" tone="warn">
                <ul className="mt-1 space-y-1.5">
                  {yard.limitations.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Callout>
              <Callout title="What the study recommends" tone="moss">
                <ul className="mt-1 space-y-1.5">
                  {yard.recommendations.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Callout>
            </div>
          </div>

          <div className="space-y-5">
            <Figure
              name="segregationYard"
              className="aspect-[3/4] w-full"
              caption="Sorted material bagged at the yard, awaiting a tender."
            />
            <Figure
              name="yardRecords"
              className="aspect-[4/3] w-full"
              caption="The day's weights, recorded by hand."
            />
            <Callout tone="plain">
              Because categories follow what a vendor will pay rather than what the material is,
              two items made of the same polymer can end up in different piles &mdash; and an item
              with no buyer has nowhere to go at all.
            </Callout>
          </div>
        </div>
      </Section>

      {/* 24 categories */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The categories"
          title="What the yard sorts into"
          lede="Twenty-four piles, grouped here by material for readability — the yard itself works from resale value."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {yardCategories.map((g) => (
            <div key={g.group} className="rounded-xl border border-ink-line bg-paper p-6 shadow-card">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-[1.375rem] leading-tight text-ink">{g.group}</h3>
                <span className="text-[0.75rem] text-ink-faint">{g.items.length}</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((i) => (
                  <li key={i} className="text-[0.9375rem] leading-snug text-ink-soft">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Yard in pictures */}
      <Section tone="soft" tight>
        <div className="grid gap-5 sm:grid-cols-3">
          <Figure name="yardBaling" className="aspect-[3/4] w-full" caption="The baling press." />
          <Figure name="yardSorted" className="aspect-[3/4] w-full" caption="Rinsed containers, sorted by category." />
          <Figure name="vermicompost" className="aspect-[3/4] w-full" caption="The vermicompost beds — cut vegetable peel becomes manure for campus gardening." />
        </div>
      </Section>

      {/* Volumes */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Measured"
          title="What the campus actually produces"
          lede="Share of the daily packaging stream, for the eight categories the study could quantify. Card and plastic-coated card together are two thirds of it."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-8">
          <ul className="space-y-4">
            {dailyVolumes.map((v) => (
              <li key={v.category} className="grid gap-2 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-center sm:gap-6">
                <div>
                  <p className="text-[0.9375rem] font-medium leading-snug text-ink">{v.category}</p>
                  {v.note ? (
                    <p className="text-[0.8125rem] leading-snug text-ink-faint">{v.note}</p>
                  ) : null}
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 flex-1 rounded-full bg-paper-deep" aria-hidden>
                    <div
                      className="h-2.5 rounded-full bg-brand-600"
                      style={{
                        width: `${Math.max(((v.kgPerDay / totalKg) * 100 / maxShare) * 100, 1.5)}%`,
                      }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right text-[0.875rem] font-medium tabular-nums text-ink">
                    {((v.kgPerDay / totalKg) * 100).toFixed(1)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-ink-hair pt-4 text-[0.8125rem] text-ink-mute">
            Share of {totalKg.toFixed(1)}&nbsp;kg of packaging recorded per day at the segregation
            yard. Wet waste, e-waste and hazardous streams are counted separately &mdash; see{" "}
            <Link href="/progress" className="link-underline">
              progress &amp; reporting
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Related */}
      <Section tone="soft">
        <div>
          <h3 className="display-3 mb-6 text-xl">Related</h3>
          <NextSteps
            items={[
              { label: "Campus-wide rules", href: "/guidelines", blurb: "The three-bin system and what goes where." },
              { label: "Recycling", href: "/recycling", blurb: "What each material is worth once it is recovered." },
              { label: "Progress & reporting", href: "/progress", blurb: "What the campus measures, and what it does not." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
