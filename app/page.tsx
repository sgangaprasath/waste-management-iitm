import Link from "next/link";
import Figure from "@/components/figure";
import Icon from "@/components/icons";
import { BinStrip } from "@/components/binParts";
import BinFinderPanel from "@/components/binFinderPanel";
import PosterCarousel from "@/components/posterCarousel";
import { Section, SectionHead, StatGrid, Button } from "@/components/ui";
import { headlineMetrics, site, CAP_URL } from "@/content/site";
import { zones } from "@/content/zones";
import { getStarted } from "@/content/takeAction";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="border-b border-ink-line bg-paper">
        <div className="wrap pt-14 lg:pt-20">
          <div className="grid animate-fadeUp items-end gap-8 lg:grid-cols-[1.2fr_minmax(0,23rem)] lg:gap-16">
            <div>
              <p className="eyebrow-accent">Indian Institute of Technology Madras</p>
              <h1 className="display-1 mt-3 max-w-[16ch]">A sustainable campus.</h1>
            </div>
            <div className="lg:pb-2">
              <p className="lede">
                Learning how waste is segregated, recovered and kept in use &mdash; across the
                laboratories, twenty-one hostels and more than a thousand homes.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/guidelines">Start with the three bins</Button>
            <Button href="/take-action" variant="outline">
              Take action
            </Button>
            <Button href="/bin-finder" variant="outline">
              Bin finder
            </Button>
          </div>

          <div className="mt-10">
            <PosterCarousel />
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-ink-line py-6 sm:flex-row sm:items-center sm:gap-10">
            <p className="eyebrow shrink-0">The campus containers</p>
            <BinStrip />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- metrics */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The campus in numbers"
          icon="chart"
          title="Sustainability within reach"
          lede="Our path to sustainability is informed through data."
        />
        <div className="mt-10">
          <StatGrid items={headlineMetrics} />
        </div>
        <p className="mt-6 text-[0.9375rem] text-ink-mute">
          <a href={CAP_URL} target="_blank" rel="noreferrer" className="link-underline">
            Climate Action Plan of IIT Madras
          </a>
          {" · "}
          <Link href="/progress" className="link-underline">
            Full figures and what is not yet measured
          </Link>
        </p>
      </Section>

      {/* ---------------------------------------------------- bin finder */}
      <Section tone="soft" tight>
        <BinFinderPanel tone="paper" />
      </Section>

      {/* --------------------------------------------------------- zones */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Three zones"
          icon="map"
          title="Find the guidance for where you actually are"
          lede="A teaching laboratory, a mess hall and a family kitchen each need different answers."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {zones.map((z) => (
            <Link
              key={z.slug}
              href={`/guidelines/${z.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
            >
              <Figure name={z.image} className="aspect-[16/9] w-full" rounded="rounded-none" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-[1.5rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
                  {z.name}
                </h3>
                <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-ink-mute">{z.summary}</p>
                <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-ink-hair pt-4">
                  {z.scale.map((s) => (
                    <div key={s.label}>
                      <dt className="font-serif text-[1.25rem] leading-none text-ink">{s.value}</dt>
                      <dd className="mt-1.5 text-[0.6875rem] leading-snug text-ink-faint">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- explore work */}
      <Section tone="soft">
        <SectionHead
          eyebrow="Explore our work"
          icon="cycle"
          title="Segregation is the beginning, not the point"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              href: "/recycling",
              icon: "cycle" as const,
              eyebrow: "Recovery",
              title: "Recycling",
              body: "What each stream is worth, how contamination destroys it, and where the material goes.",
            },
            {
              href: "/repurposing",
              icon: "box" as const,
              eyebrow: "Circularity",
              title: "Repurposing",
              body: "The reuse-first ladder, and the programmes keeping cycles, books and reagents in use.",
            },
            {
              href: "/take-action",
              icon: "people" as const,
              eyebrow: "Engagement",
              title: "Take action",
              body: "Commitments and printable checklists for students, staff, residents and organisers.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-xl border border-ink-line bg-paper p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:p-8"
            >
              <Icon name={c.icon} size={30} className="text-brand-700" />
              <p className="eyebrow mt-5">{c.eyebrow}</p>
              <h3 className="mt-1.5 font-serif text-[1.5rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
                {c.title}
              </h3>
              <p className="mt-2 text-[1rem] leading-[1.5] text-ink-mute">{c.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- get started */}
      <Section tone="paper">
        <SectionHead icon="check" eyebrow="Get started" title="Five things, in your first week" />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {getStarted.map((s) => (
            <li key={s.n}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-xl border border-ink-line bg-paper p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
              >
                <Icon name={s.icon} size={28} className="text-brand-700" />
                <p className="mt-4 text-[0.6875rem] tracking-[0.12em] text-ink-faint">{s.n}</p>
                <p className="mt-1 font-serif text-[1.25rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
                  {s.title}
                </p>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-mute">{s.body}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------- contact */}
      <Section tone="paper" tight>
        <div className="grid items-end gap-8 rounded-2xl border border-ink-line bg-paper-soft px-8 py-10 sm:px-12 lg:grid-cols-[1.3fr_auto]">
          <div>
            <h2 className="display-3">Something unclear, or a waste we have not covered?</h2>
            <p className="mt-3 max-w-2xl text-[1.0625rem] leading-[1.55] text-ink-soft">
              If you cannot find how to dispose of something, a bin is missing or overflowing, or you
              want to run a campaign in your hostel, department or block &mdash; write to us.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Button href={`mailto:${site.email}`} external>
              Write to us
            </Button>
            <p className="text-[0.8125rem] text-ink-faint lg:text-right">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
