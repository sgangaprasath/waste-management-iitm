import type { Metadata } from "next";
import Figure from "@/components/figure";
import { BinCards } from "@/components/binParts";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Card } from "@/components/ui";
import { zones } from "@/content/zones";
import BinFinderPanel from "@/components/binFinderPanel";

export const metadata: Metadata = {
  title: "Campus-wide waste guidelines",
  description:
    "The three-bin system and the disposal rules that apply everywhere on the IIT Madras campus, for students, staff, residents and visitors.",
};

export default function GuidelinesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title="What goes where, everywhere on campus"
        lede="Three bins, plus two streams for the things that must never enter them. These rules hold everywhere on campus. Zone guidance builds on top of them — it never replaces them."
        crumbs={[{ label: "Guidelines", href: "/guidelines" }]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="prose-iitm">
            <h2 className="!mt-0">Three bins, two exceptions</h2>
            <p>
              <strong>Green</strong> for material that will break down, <strong>blue</strong> for
              clean dry material that can be recovered, <strong>red</strong> for everything that is
              neither. Hazardous and laboratory waste and e-waste sit outside that system entirely,
              because putting them in any of the three bins endangers the people who handle them.
            </p>

            <p>
              Everything collected on campus converges on one segregation yard, where a team of
              thirty-odd people sorts it by hand into 24 categories before it is sold on.{" "}
              <a href="/guidelines/where-it-goes">Follow the whole route</a> to see why what you do
              at the bin decides what is recoverable.
            </p>

            <h3>The rules that matter most</h3>
            <ul>
              <li>
                <strong>Segregate at the point of generation.</strong> Sorting later almost never
                happens; sorting at the moment you put something down almost always does.
              </li>
              <li>
                <strong>Wet does not mean biodegradable.</strong> A wrapper soaked in food is still
                plastic, and it belongs in red.
              </li>
              <li>
                <strong>Rinse before recycling.</strong> Plain water is enough. One greasy container
                can make a whole bag unsaleable.
              </li>
              <li>
                <strong>Never mix hazardous waste into general waste</strong>, and never pour it down
                a drain without neutralisation.
              </li>
              <li>
                <strong>Batteries and electronics always go to an e-waste point</strong> &mdash; not
                red, not blue, not ever the green bin.
              </li>
              <li>
                <strong>Wrap and label sharp things.</strong> Broken glass is wrapped in newspaper and
                marked, for the safety of the person who empties the bin.
              </li>
              <li>
                <strong>Bring your own.</strong> A steel tumbler, a cloth bag and a set of containers
                remove most single-use waste before it starts.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <Figure name="campusPoster" className="aspect-[4/3] w-full" rounded="rounded-xl" />
            <Callout title="Three things the campus keeps getting wrong" tone="plain">
              <ul className="mt-1 space-y-1.5">
                <li>Waste handed over unsegregated, so the sort happens twice or not at all.</li>
                <li>Construction and demolition debris left with general waste.</li>
                <li>Abandoned cycles accumulating with no route to recovery.</li>
              </ul>
              <p className="mt-3 text-[0.875rem]">
                Identified by a student survey of neglected waste zones across campus.
              </p>
            </Callout>

            <Callout title="When you are not sure" tone="warn">
              Put it in <strong>red</strong>. A lost recyclable costs little; a contaminant can cost
              the whole batch. The exception is anything hazardous or electronic &mdash; hold those
              back for a collection point rather than guessing.
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-14">
          <BinFinderPanel tone="paper" />
        </div>
        <SectionHead
          eyebrow="The containers"
          title="Every stream, what it takes and where it ends up"
          lede="Colour is the whole interface."
        />
        <div className="mt-12">
          <BinCards />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHead
          eyebrow="Zone guidance"
          title="Now find your part of the campus"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {zones.map((z) => (
            <Card
              key={z.slug}
              href={`/guidelines/${z.slug}`}
              eyebrow={`${z.scale[0].value} ${z.scale[0].label}`}
              title={z.name}
              body={z.summary}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <h3 className="display-3 mb-6 text-xl">Beyond the three bins</h3>
          <NextSteps
            items={[
              {
                label: "Where it goes",
                href: "/guidelines/where-it-goes",
                blurb: "Bin to segregation yard to vendor — the route your waste actually takes.",
              },
              {
                label: "Laboratory & hazardous waste",
                href: "/guidelines/lab-waste",
                blurb: "Chemical, biohazardous and sharps protocols for every bench on campus.",
              },
              {
                label: "E-waste",
                href: "/guidelines/e-waste",
                blurb: "Batteries, lighting, cables and equipment, and where they are collected.",
              },
              {
                label: "Printable posters",
                href: "/downloads",
                blurb: "Zone signage and event flyers ready to print and put on a wall.",
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
