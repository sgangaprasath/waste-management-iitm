import type { Metadata } from "next";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Pill, Button } from "@/components/ui";
import { campaigns } from "@/content/takeAction";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Campaigns & annual events",
  description:
    "Punch the Plastic, Swachhta Hi Seva, waste audit weeks and the other campus-wide drives at IIT Madras.",
};

export default function CampaignsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Take action"
        title="Campaigns & annual events"
        lede="A campaign does what a poster cannot: it puts a date in the calendar and a person in charge. These all run today."
        crumbs={[
          { label: "Take action", href: "/take-action" },
          { label: "Campaigns", href: "/take-action/campaigns" },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_minmax(0,21rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="The calendar"
              title="What runs, and when"
            />
            <ul className="mt-10 space-y-5">
              {campaigns.map((c) => (
                <li
                  key={c.title}
                  className="rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Pill tone="moss">Running</Pill>
                    <span className="text-[0.75rem] uppercase tracking-[0.1em] text-ink-faint">
                      {c.when}
                    </span>
                  </div>
                  <h3 className="display-3 mt-3 text-xl">{c.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">{c.body}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-700 hover:underline"
                    >
                      {c.linkLabel ?? "Open"}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M5 11L11 5M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Figure
              name="cleanUpDrive"
              className="aspect-[4/3] w-full"
              caption="A Swachhata Hi Seva cleaning drive in the residential zone."
            />
            <Figure
              name="wasteMap"
              className="aspect-[16/10] w-full"
              caption="The campus waste map, built building by building."
            />
            <Callout title="Punch the Plastic" tone="moss">
              <p>
                Run by the institute&rsquo;s sustainable campus collective: clean, dry plastic
                packaging that conventional recycling will not take, routed to pyrolysis instead of
                landfill. It launched alongside a monkey-proof bin hackathon &mdash; a design problem
                few campuses have.
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="rounded-2xl border border-ink-line bg-paper px-8 py-10 shadow-card sm:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_auto]">
            <div>
              <h2 className="display-3 text-2xl">Bring one to your hostel, department or block</h2>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">
                Each of these needs people in every zone, not just a central team. The committee can
                help with space, signage and logistics &mdash; what it cannot supply is the person
                willing to run it where you are.
              </p>
            </div>
            <Button href={`mailto:${site.email}`} external>
              Volunteer
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="display-3 mb-6 text-xl">Related</h2>
        <NextSteps
          items={[
            { label: "Students", href: "/take-action/students", blurb: "What to commit to in your room, mess and lab." },
            { label: "Repurposing", href: "/repurposing", blurb: "The reuse programmes these campaigns feed." },
            { label: "Event organisers", href: "/take-action/events", blurb: "Running a festival or conference with less waste." },
          ]}
        />
      </Section>
    </>
  );
}
