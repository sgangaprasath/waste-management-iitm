import type { Metadata } from "next";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "E-waste",
  description:
    "How batteries, electronics, lighting and equipment are collected and recovered at IIT Madras.",
};

const accepted = [
  { group: "Batteries", items: "Dry cells, rechargeables, button cells, laptop and instrument packs, UPS batteries." },
  { group: "IT equipment", items: "Laptops, desktops, monitors, printers, keyboards, mice, cables, chargers, adapters." },
  { group: "Laboratory electronics", items: "Multimeters, power supplies, heating mantles, sensors, controllers, circuit boards." },
  { group: "Household appliances", items: "Mixers, kettles, rice cookers, fans, irons, small kitchen appliances." },
  { group: "Lighting", items: "Tube lights, CFLs, LED fittings, ballasts and starters." },
  { group: "Personal electronics", items: "Mobile phones, headphones, speakers, calculators, power banks." },
];

const steps = [
  {
    n: "01",
    title: "Check whether it still works",
    body: "A working device is not waste. Offer it to the surplus register, handover depot or swap shelf first.",
  },
  {
    n: "02",
    title: "Remove the batteries",
    body: "Collected separately from the device. Never puncture, crush or heat one.",
  },
  {
    n: "03",
    title: "Wipe anything that held data",
    body: "Phones, laptops, drives and instruments with storage. The collection point cannot do this for you.",
  },
  {
    n: "04",
    title: "Take it to a collection point",
    body: "Departmental points, residential block holding areas, and the shopping centre drop-off. Hostel-level collection is a known gap.",
  },
  {
    n: "05",
    title: "It is lifted by a certified recycler",
    body: "Consigned to authorised recyclers under the E-Waste Rules, so metals and rare earths are recovered rather than burned off informally.",
  },
];

export default function EWastePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title="Electrical & electronic waste"
        lede="The most valuable material the campus discards, and the most damaging when discarded wrongly. One button cell contaminates a batch of compost; a laptop in the reject stream loses gold, copper and rare earths."
        crumbs={[
          { label: "Guidelines", href: "/guidelines" },
          { label: "E-waste", href: "/guidelines/e-waste" },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,22rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="The route"
              title="Five steps from your desk to certified recovery"
            />
            <ol className="mt-10 divide-y divide-ink-hair border-y border-ink-line">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-6 py-6">
                  <span className="font-serif text-lg text-brand-300" aria-hidden>
                    {s.n}
                  </span>
                  <div>
                    <p className="font-serif text-lg leading-snug text-ink">{s.title}</p>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-mute">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <Figure name="eWaste" className="aspect-[4/3] w-full" />
            <Callout title="Never in any of the three bins" tone="warn">
              Batteries, lamps, cables and devices are excluded from green, blue and red without
              exception. If no e-waste point is within reach, hold the item rather than binning it.
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="What is accepted"
          title="Everything with a plug, a cell or a board"
          lede="If it once ran on electricity, it belongs here — working or not."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {accepted.map((a) => (
            <Card key={a.group} title={a.group} body={a.items} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <Callout title="Monthly, not eventually" tone="brand">
            <p>
              A standing monthly date gets dead equipment out of cupboards; an open-ended intention
              never does.
            </p>
          </Callout>
          <Callout title="A gap worth closing" tone="moss">
            <p>
              Hostels have no e-waste collection of their own, which is why chargers and headphones
              end up in reject bins. A per-hostel box is a straightforward thing for a student group
              to pilot.
            </p>
          </Callout>
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <h3 className="display-3 mb-6 text-xl">Related</h3>
          <NextSteps
            items={[
              { label: "Laboratory & hazardous waste", href: "/guidelines/lab-waste", blurb: "Chemical, biological and sharps protocols." },
              { label: "Repurposing", href: "/repurposing", blurb: "Reuse a working device instead of recycling it." },
              { label: "Campaigns", href: "/take-action/campaigns", blurb: "Collection drives you can join or run." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
