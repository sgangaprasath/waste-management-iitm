import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Button } from "@/components/ui";
import { site, CAP_URL } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Waste Management Committee of IIT Madras — its mandate, its members, and how the campus waste programme is run.",
};

const partners = [
  {
    name: "Engineering Unit",
    body: "Ground-level implementation of waste management across campus: collection, bins, transport, the treatment plants and the day-to-day operation of the programme.",
    href: "https://enggunit.iitm.ac.in/",
    linkLabel: "enggunit.iitm.ac.in",
  },
  {
    name: "School of Sustainability",
    body: "Campus sustainability strategy and research, of which waste is one strand alongside energy, water, transport and biodiversity.",
    href: "https://sustainability.iitm.ac.in/",
    linkLabel: "sustainability.iitm.ac.in",
  },
  {
    name: "Campus Environment Management Committee",
    body: "Headed by the Dean (Planning), with oversight of environmental management for the campus as a whole.",
    href: "https://www.iitm.ac.in/the-institute/administration/engineering-unit",
    linkLabel: "Institute administration",
  },
  {
    name: "Plastic Committee",
    body: "Enforcement of the single-use plastic ban on campus.",
  },
  {
    name: "Student volunteers",
    body: "Audits, campaigns, signage, hostel-level organising and the collectives that run drives such as Punch the Plastic.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        icon="info"
        title="The Waste Management Committee"
        lede="The committee exists to make one thing true: that anyone who wants to dispose of something correctly can find out how in under a minute, and then actually do it."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,22rem)] lg:gap-14">
          <div className="prose-iitm">
            <h2 className="!mt-0">Mandate</h2>
            <p>
              The Waste Management Committee of IIT Madras is dedicated to fostering a cleaner,
              greener and more sustainable environment within the institute. Its work is to implement
              effective waste management practices, promote awareness, and encourage responsible
              disposal among students, staff, faculty, residents and visitors alike.
            </p>
            <p>
              The committee works in close collaboration with the Engineering Unit, which carries out
              the ground-level implementation of waste management on campus, and with the
              Sustainability Committee, whose remit covers the wider environmental programme.
            </p>

            <h2>This website</h2>
            <p>
              This portal is the institute&rsquo;s single repository of waste handling guidance. It
              was built through the joint efforts of the Sustainability Committee, the Engineering
              Unit and the Waste Management Committee, with a special mention to the student
              volunteers who gave their time to make the platform functional.
            </p>
            <p>
              Figures carry their source. Anything supplied without a published source is marked{" "}
              <em>to confirm</em>; anything that is aspiration rather than current practice is marked{" "}
              <em>proposed</em>. A guidance site that overstates what the campus already does is
              harder to trust on the things it gets right.
            </p>

            <h2>Corrections and contributions</h2>
            <p>
              If something here is wrong, out of date, or missing a waste stream you deal with, tell
              us. The same address takes bin requests, reports of overflowing collection points,
              offers to volunteer, and campaign proposals.
            </p>
          </div>

          <div className="space-y-6">
            <Figure name="heroCampus" className="aspect-[4/3] w-full" />
            <Callout title="Contact" tone="brand">
              <p className="font-medium text-ink">{site.email}</p>
              <p className="mt-3 text-sm">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <span className="mt-5 block">
                <Button href={`mailto:${site.email}`} external>
                  Write to us
                </Button>
              </span>
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="Partners"
          icon="building"
          title="Who else this depends on"
          lede="No committee runs a campus waste programme on its own. These are the groups whose work this site describes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((p) => (
            <article key={p.name} className="flex flex-col rounded-xl border border-ink-line bg-paper p-6 shadow-card">
              <h3 className="font-serif text-[1.25rem] text-ink">{p.name}</h3>
              <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">{p.body}</p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-700 hover:underline"
                >
                  {p.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M5 11L11 5M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <h3 className="display-3 mb-6 text-xl">Elsewhere</h3>
          <NextSteps
            items={[
              { icon: "chart", label: "Progress & reporting", href: "/progress", blurb: "The figures, their sources and the gaps." },
              { icon: "document", label: "Climate Action Plan", href: CAP_URL, blurb: "The institute's plan for carbon neutrality by 2050." },
              { icon: "printer", label: "Resources & downloads", href: "/downloads", blurb: "Posters and signage ready to print." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
