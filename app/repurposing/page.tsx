import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Pill } from "@/components/ui";
import { ladder, programmes, zoneRepurposing } from "@/content/repurposing";

const runningProgrammes = programmes.filter((p) => p.status === "running");

export const metadata: Metadata = {
  title: "Repurposing & reuse",
  description:
    "The reuse-first ladder and the programmes that keep mattresses, cycles, books, reagents and furniture in use at IIT Madras.",
};

export default function RepurposingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Repurposing"
        title="The best waste is the object still doing its job"
        lede="Every year this campus discards a complete set of everything a new student needs to buy, a store-room of working instruments, and enough furniture to fill a block. Almost none of it is worn out."
        crumbs={[{ label: "Repurposing", href: "/repurposing" }]}
      />

      {/* Ladder — visual */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="The hierarchy"
              title="Seven steps, in order of preference"
              lede="Recycling appears sixth, not first. Everything above it keeps the design, the assembly and the labour as well as the material."
            />
            <ol className="mt-9 overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
              {ladder.map((l, i) => (
                <li key={l.step} className="flex items-baseline gap-5 border-b border-ink-hair px-6 py-4 last:border-b-0">
                  <span
                    aria-hidden
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: i < 5 ? "#3F6B50" : i === 5 ? "#B8860B" : "#752335" }}
                  />
                  <span className="w-7 shrink-0 text-[0.6875rem] text-ink-faint">{l.step}</span>
                  <span className="w-[6.5rem] shrink-0 font-serif text-[1.25rem] text-ink">
                    {l.title}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-mute">{l.body}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-5">
            <Figure name="repurposing" className="aspect-[4/5] w-full" />
            <Callout tone="moss">
              Each step down costs more energy and more lost value than the one above. A repaired
              cycle costs an afternoon; the same cycle recycled costs a furnace.
            </Callout>
          </div>
        </div>
      </Section>

      {/* Programmes */}
      <Section tone="soft">
        <SectionHead
          eyebrow="Programmes"
          title="What runs today"
          lede="Every one of these is live on campus now."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {runningProgrammes.map((p) => (
            <li key={p.title} className="rounded-xl border border-ink-line bg-paper p-6 shadow-card">
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="moss">Running</Pill>
                <Pill>{p.who}</Pill>
              </div>
              <h3 className="mt-3 font-serif text-[1.375rem] leading-snug text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">{p.body}</p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-700 hover:underline"
                >
                  {p.linkLabel ?? "Open"}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M5 11L11 5M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {/* Zones — merged onto this page */}
      <Section tone="soft">
        <SectionHead eyebrow="By zone" title="Reuse looks different in each part of campus" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {zoneRepurposing.map((z) => (
            <section
              key={z.slug}
              id={z.slug}
              className="rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-7"
            >
              <h3 className="font-serif text-[1.5rem] leading-tight text-ink">{z.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">{z.lede}</p>

              <p className="eyebrow mt-6">Worth doing</p>
              <ul className="mt-2.5 space-y-2">
                {z.ideas.map((idea) => (
                  <li key={idea} className="relative pl-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span aria-hidden className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-moss-400" />
                    {idea}
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-6">When it is possible</p>
              <dl className="mt-2.5 divide-y divide-ink-hair border-y border-ink-hair">
                {z.moments.map((m) => (
                  <div key={m.when} className="py-2.5">
                    <dt className="font-serif text-[1.0625rem] text-brand-700">{m.when}</dt>
                    <dd className="mt-1 text-[0.875rem] leading-snug text-ink-mute">{m.what}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </Section>

      <Section tone="paper" tight>
        <NextSteps
          items={[
            { label: "Take action", href: "/take-action", blurb: "Most proposals need a person, not a budget." },
            { label: "Recycling", href: "/recycling", blurb: "For what genuinely cannot be reused." },
            { label: "Campus guidelines", href: "/guidelines", blurb: "The three-bin system and what goes where." },
          ]}
        />
      </Section>
    </>
  );
}
