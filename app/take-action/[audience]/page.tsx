import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Icon, { EffortScale } from "@/components/icons";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Button } from "@/components/ui";
import { audiences, audienceBySlug, type Audience } from "@/content/takeAction";
import { site } from "@/content/site";

type Params = { audience: string };

export function generateStaticParams() {
  return audiences.map((a) => ({ audience: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { audience } = await params;
  const a = audienceBySlug[audience as Audience["slug"]];
  if (!a) return {};
  return { title: `Take action — ${a.title}`, description: a.lede };
}

export default async function AudiencePage({ params }: { params: Promise<Params> }) {
  const { audience } = await params;
  const a = audienceBySlug[audience as Audience["slug"]];
  if (!a) notFound();
  const others = audiences.filter((o) => o.slug !== a.slug);

  return (
    <>
      <PageHeader
        eyebrow={a.kicker}
        title={a.title}
        lede={a.lede}
        crumbs={[
          { label: "Take action", href: "/take-action" },
          { label: a.title, href: `/take-action/${a.slug}` },
        ]}
      />

      {/* Pledges — icon tiles, effort shown as dots */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Commitments"
          icon="check"
          title="Pick the ones you will actually keep"
          lede="Two kept beats eight abandoned."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {a.pledges.map((p) => (
            <li
              key={p.title}
              className="flex flex-col rounded-xl border border-ink-line bg-paper p-6 shadow-card"
            >
              <Icon name={p.icon} size={28} className="text-brand-700" />
              <h3 className="mt-4 font-serif text-[1.3125rem] leading-snug text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-ink-mute">{p.body}</p>
              <span className="mt-4">
                <EffortScale level={p.effort} />
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Checklists — compact, printable */}
      <Section tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead icon="clipboard" eyebrow="Checklist" title="Print it; put it where the decision happens" />
          <p className="no-print text-[0.8125rem] text-ink-faint">
            On a noticeboard or a cupboard door &mdash; not in a folder.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {a.checklist.map((group) => (
            <section
              key={group.group}
              className="rounded-xl border border-ink-line bg-paper p-6 shadow-card"
            >
              <div className="flex items-center gap-2.5">
                <Icon name={group.icon} size={22} className="text-brand-700" />
                <h3 className="font-serif text-[1.375rem] text-ink">{group.group}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-[0.28rem] h-4 w-4 shrink-0 rounded-[3px] border border-ink-mute" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section tone="paper" tight>
        {a.ask ? (
          <div className="mb-10">
            <Callout title="Want to do more?">
              <p>{a.ask}</p>
              <span className="mt-3 block">
                <Button href={`mailto:${site.email}`} variant="ghost" external>
                  {site.email}
                </Button>
              </span>
            </Callout>
          </div>
        ) : null}
        <NextSteps
          items={[
            ...others.map((o) => ({ icon: "people" as const, label: o.title, href: `/take-action/${o.slug}`, blurb: o.kicker })),
            { icon: "info", label: "Campaigns", href: "/take-action/campaigns", blurb: "Campus-wide efforts to join." },
          ]}
        />
      </Section>
    </>
  );
}
