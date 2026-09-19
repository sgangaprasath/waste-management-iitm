import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import Icon from "@/components/icons";
import { PageHeader, Section, SectionHead, Button } from "@/components/ui";
import { getStarted, audiences, campaigns } from "@/content/takeAction";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Take action",
  description:
    "Practical commitments for students, faculty and staff, campus residents and event organisers at IIT Madras.",
};

export default function TakeActionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Take action"
        title="Start where you are, this week"
        lede="Campus waste is not an infrastructure problem waiting on a budget. It is thousands of small decisions made every day."
        crumbs={[{ label: "Take action", href: "/take-action" }]}
      />

      {/* Five steps — icon-led, one line each */}
      <Section tone="paper">
        <SectionHead eyebrow="Get started" title="Five things, in your first week" />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {getStarted.map((s) => (
            <li key={s.n}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-xl border border-ink-line bg-paper p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
              >
                <Icon name={s.icon} size={30} className="text-brand-700" />
                <p className="mt-4 text-[0.6875rem] tracking-[0.12em] text-ink-faint">{s.n}</p>
                <p className="mt-1 font-serif text-[1.25rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
                  {s.title}
                </p>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-mute">{s.body}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* Audiences — big visual picker */}
      <Section tone="soft">
        <SectionHead eyebrow="Find your role" title="Pick the one that describes your day" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {audiences.map((a) => (
            <Link
              key={a.slug}
              href={`/take-action/${a.slug}`}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-ink-line bg-paper p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:p-9"
            >
              <div>
                <p className="eyebrow">{a.kicker}</p>
                <h3 className="mt-2 font-serif text-[1.875rem] leading-tight text-ink transition-colors group-hover:text-brand-700">
                  {a.title}
                </h3>
                <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink-mute">{a.lede}</p>
              </div>
              <div className="flex items-end justify-between gap-4">
                <span className="flex gap-2.5 text-ink-faint">
                  {a.checklist.map((c) => (
                    <Icon key={c.group} name={c.icon} size={22} />
                  ))}
                </span>
                <span className="text-[0.8125rem] font-medium text-brand-700">
                  {a.pledges.length} commitments &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Campaigns + photo */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <Figure name="takeAction" className="aspect-[4/5] w-full" />
          <div>
            <SectionHead
              eyebrow="Beyond your own bin"
              title="Campaigns and drives"
              lede="Campus-wide efforts that need people in every hostel, department and block — not just a central team."
            />

            <ul className="mt-8 divide-y divide-ink-hair border-y border-ink-hair">
              {campaigns.map((c) => (
                <li key={c.title} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
                  <span className="font-serif text-[1.25rem] leading-snug text-ink">{c.title}</span>
                  <span className="text-[0.8125rem] text-ink-faint">{c.when}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/take-action/campaigns">See what each one does</Button>
              <Button href={`mailto:${site.email}`} variant="outline" external>
                Bring one to your block
              </Button>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
