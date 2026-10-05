import type { Metadata } from "next";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, StatGrid, Callout, NextSteps, Pill } from "@/components/ui";
import Link from "next/link";
import { headlineMetrics, population, CAP_URL } from "@/content/site";
import { dailyVolumes, yard } from "@/content/flow";

export const metadata: Metadata = {
  title: "Progress & reporting",
  description:
    "What the IIT Madras campus measures on waste, energy, water and emissions — with sources, and an honest note on what is not yet measured.",
};

const emissions = [
  { label: "Electricity", value: "13,208", unit: "tCO₂/yr" },
  { label: "Transport — road", value: "2,923", unit: "tCO₂/yr" },
  { label: "Transport — aviation", value: "1,144", unit: "tCO₂/yr" },
  { label: "LPG — residential", value: "818", unit: "tCO₂/yr" },
  { label: "LPG — hostels", value: "425", unit: "tCO₂/yr" },
  { label: "Diesel", value: "245", unit: "tCO₂/yr" },
];

const notMeasured = [
  "Total solid waste generated per day, campus-wide and by zone",
  "Segregation compliance rate, measured rather than estimated",
  "Diversion rate — the share of waste kept out of the municipal stream",
  "E-waste tonnage consigned to certified recyclers",
  "Hazardous and biomedical waste consigned, by category",
  "Per-capita waste generation, by zone",
];

export default function ProgressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Progress & reporting"
        title="What the campus measures"
        lede="A waste programme without measurement is a set of intentions. The figures the institute has published, their sources, and what is not yet measured."
        crumbs={[{ label: "Progress", href: "/progress" }]}
      />

      <Section tone="paper">
        <SectionHead
          eyebrow="Headline figures"
          icon="chart"
          title="Sustainability within reach"
        />
        <div className="mt-10">
          <StatGrid items={headlineMetrics} />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_minmax(0,22rem)] lg:gap-14">
          <div>
            <h3 className="display-3 text-xl">Campus population</h3>
            <p className="mt-2 text-[0.9375rem] text-ink-mute">
              Committee estimates. They drive bin counts and collection frequency, so they are worth
              confirming against registry data.
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-3">
              {population.map((p) => (
                <div key={p.label} className="rounded-xl border border-ink-line bg-paper p-6 shadow-card">
                  <dt className="font-serif text-[2.25rem] leading-none text-brand-700">{p.value}</dt>
                  <dd className="mt-3 text-[0.875rem] text-ink-soft">{p.label}</dd>
                  <dd className="mt-2">
                    <Pill tone="brand">To confirm</Pill>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6">
            <Figure name="composting" className="aspect-[3/4] w-full" />
            <Callout title="Emissions, for context" tone="brand">
              <p className="text-sm">
                Total campus emissions of <strong>18,763 tCO₂ a year</strong>, against{" "}
                <strong>5,196 tCO₂</strong> sequestered annually by campus trees.
              </p>
              <ul className="mt-4 space-y-1.5">
                {emissions.map((e) => (
                  <li key={e.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-ink-mute">{e.label}</span>
                    <span className="font-serif text-ink">
                      {e.value}
                      <span className="ml-1 font-sans text-[0.6875rem] text-ink-faint">{e.unit}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Callout>
          </div>
        </div>
      </Section>

      {/* What the campus believes */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,21rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Asked, not assumed"
              icon="chart"
              title="What the campus thinks it throws away"
              lede="From a survey of 335 campus residents. Worth comparing against the yard's weights on the right — perception and tonnage do not agree."
            />

            <p className="eyebrow mt-9">Waste people name as most prevalent</p>
            <ul className="mt-3 space-y-2.5">
              {[
                ["Plastic bottles", 88.5],
                ["Food waste", 61.3],
                ["Cardboard", 26.8],
                ["Styrofoam", 18.2],
                ["Plastic wrappers and containers", 11.2],
              ].map(([label, pct]) => (
                <li key={label as string} className="grid gap-2 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-center sm:gap-6">
                  <span className="text-[0.9375rem] text-ink">{label}</span>
                  <span className="flex items-center gap-3">
                    <span className="h-2.5 flex-1 rounded-full bg-paper-deep" aria-hidden>
                      <span
                        className="block h-2.5 rounded-full bg-brand-600"
                        style={{ width: `${((pct as number) / 88.5) * 100}%` }}
                      />
                    </span>
                    <span className="w-12 shrink-0 text-right text-[0.875rem] tabular-nums text-ink">
                      {pct}%
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-9">Where they think it comes from</p>
            <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                ["Campus cafes and dining", 233],
                ["Prime Mart and grocery shops", 202],
                ["E-commerce packaging", 179],
                ["Classroom and academic buildings", 53],
                ["Irresponsible behaviour", 9],
                ["Events and parties", 4],
              ].map(([label, n]) => (
                <li key={label as string} className="flex items-baseline justify-between gap-4 border-b border-ink-hair py-2">
                  <span className="text-[0.9375rem] text-ink-soft">{label}</span>
                  <span className="font-serif text-[1.125rem] tabular-nums text-brand-700">{n}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[0.875rem] text-ink-mute">
              112 of 113 respondents already knew paper cups carry a plastic lining. The gap is not
              awareness &mdash; it is the absence of an alternative at the counter.
            </p>
          </div>

          <div className="space-y-5">
            <Figure name="campusSurvey" className="aspect-[4/3] w-full" caption="Running the survey on campus." />
            <Figure name="steelCups" className="aspect-[3/4] w-full" caption="The answer to the paper cup: self-service steel at the tea stall." />
          </div>
        </div>
      </Section>

      {/* Measured at the yard */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Measured at the segregation yard"
          icon="scale"
          title="Packaging, kilogrammes per day"
          lede="Recorded for the eight packaging categories a campus life cycle study could quantify. These are real measurements, not estimates."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dailyVolumes.map((v) => (
            <div key={v.category} className="rounded-xl border border-ink-line bg-paper p-5 shadow-card">
              <p className="font-serif text-[2rem] leading-none text-brand-700">
                {v.kgPerDay}
                <span className="ml-1.5 font-sans text-[0.6875rem] font-medium text-ink-faint">kg/day</span>
              </p>
              <p className="mt-3 text-[0.875rem] leading-snug text-ink">{v.category}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[0.875rem] text-ink-mute">
          The yard sorts into {yard.categories} categories in total.{" "}
          <Link href="/guidelines/where-it-goes" className="link-underline">
            See the full route and category list
          </Link>
          .
        </p>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Honesty"
              icon="info"
              title="What is not yet measured"
              lede="The numbers a waste programme most needs, which this campus does not yet publish — listed so the gap is a stated commitment rather than a quiet omission."
            />
            <ul className="mt-10 space-y-3">
              {notMeasured.map((n) => (
                <li key={n} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-bin-yellow" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Callout title="How to close the gap" tone="moss">
              <p>
                Nearly all of them come from one thing: weigh and characterise a representative
                day&rsquo;s waste, zone by zone, twice a semester, with student volunteers. For a
                campus with this much engineering capacity it is an unusually tractable project.
              </p>
            </Callout>
            <Callout title="Sources and dates" tone="brand">
              <p>
                Unless otherwise stated, figures come from the{" "}
                <a href={CAP_URL} target="_blank" rel="noreferrer" className="link-underline">
                  Climate Action Plan of IIT Madras (2022)
                </a>
                . Figures supplied by the Waste Management Committee without a published source are
                marked <span className="rounded-sm bg-brand-50 px-1 text-[0.75rem] uppercase tracking-wide text-brand-700">to confirm</span>.
              </p>

            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="display-3 mb-6 text-xl">Related</h2>
        <NextSteps
          items={[
            { icon: "truck", label: "Where it goes", href: "/guidelines/where-it-goes", blurb: "The yard, its categories and the daily volumes." },
            { icon: "info", label: "Campaigns & drives", href: "/take-action/campaigns", blurb: "Including the proposed campus audit week." },
            { icon: "info", label: "About the committee", href: "/about", blurb: "Who maintains this and how to reach them." },
          ]}
        />
      </Section>
    </>
  );
}
