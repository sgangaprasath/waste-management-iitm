import type { Metadata } from "next";
import Link from "next/link";
import Figure from "@/components/figure";
import { PageHeader, Section, SectionHead, Callout, NextSteps } from "@/components/ui";
import { BinChip } from "@/components/binParts";

export const metadata: Metadata = {
  title: "Laboratory & hazardous waste",
  description:
    "Chemical, biohazardous, sharps and contaminated waste protocols for laboratories at IIT Madras.",
};

const categories = [
  {
    title: "Solvents and organic chemicals",
    examples: "Acetone, benzene, toluene, methanol, chlorinated solvents, reaction residues.",
    handling:
      "Collect by compatibility class in labelled, sealed, chemically resistant containers. Never mix halogenated with non-halogenated solvents. Store in a ventilated cabinet away from ignition sources.",
    bin: "yellow" as const,
  },
  {
    title: "Acids, bases, salts and buffers",
    examples: "Spent acids and bases, reaction media, buffer solutions, salt residues.",
    handling:
      "Neutralise to a safe pH under the supervising faculty member's protocol before any aqueous discharge, and record the neutralisation in the lab logbook. Untreated, they are consigned as hazardous waste.",
    bin: "yellow" as const,
  },
  {
    title: "Biological and microbiological waste",
    examples:
      "Petri dishes with cultures, agar plates, mould and fungal growth, contaminated media, stained slides.",
    handling:
      "Autoclave before the material leaves the laboratory. Use autoclavable biohazard bags or rigid containers. Never place in a general bin, autoclaved or not.",
    bin: "yellow" as const,
  },
  {
    title: "Contaminated consumables",
    examples:
      "Gloves, microtips, Eppendorf tubes, pipette tips, filter papers, foil and tissues used at the bench.",
    handling:
      "Classify by what they touched — chemical or biological — and consign with that stream. Consumables that never met a reagent are ordinary recycling and should be kept separate so their value is not lost.",
    bin: "yellow" as const,
  },
  {
    title: "Sharps and broken glassware",
    examples: "Needles, blades, cracked test tubes, beakers, measuring cylinders, pipettes.",
    handling:
      "Rigid, puncture-proof sharps boxes only. Broken glass that is chemically clean is wrapped, labelled ‘broken glass — sharp’ and placed in the reject stream, never loose and never in blue.",
    bin: "red" as const,
  },
  {
    title: "Dyes and stains",
    examples: "Crystal violet, safranin, ethidium bromide and other biological stains.",
    handling:
      "Treated as hazardous waste regardless of concentration. Several are mutagenic; decontaminate per protocol before consignment.",
    bin: "yellow" as const,
  },
  {
    title: "Laboratory e-waste",
    examples:
      "Dead multimeters, heating mantles, power supplies, sensors, boards, batteries and cabling.",
    handling:
      "Ensure the instrument is free of chemical residue, then route to the departmental e-waste point for certified recovery.",
    bin: "black" as const,
  },
];

const rules = [
  "No waste container is unlabelled. Every one carries the date opened, the contents and the hazard class.",
  "No chemical goes down a sink without neutralisation and a logbook entry.",
  "No incompatible chemicals share a container. Check compatibility before you pour.",
  "No biological material leaves the lab un-autoclaved.",
  "No hazardous waste is left in a corridor, a stairwell or beside a general bin, however briefly.",
  "No new group member touches a bench before the disposal induction.",
];

export default function LabWastePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title="Laboratory & hazardous waste"
        lede="Never the three-bin system. Collected lab by lab against a logbook and consigned to certified facilities — because the people handling it downstream cannot see inside the container."
        crumbs={[
          { label: "Guidelines", href: "/guidelines" },
          { label: "Laboratory & hazardous waste", href: "/guidelines/lab-waste" },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_minmax(0,21rem)] lg:gap-14">
          <div>
            <SectionHead
              eyebrow="Non-negotiables"
              title="Six rules, no exceptions"
            />
            <ol className="mt-10 divide-y divide-ink-hair border-y border-ink-line">
              {rules.map((r, i) => (
                <li key={r} className="flex gap-5 py-5">
                  <span className="font-serif text-xl leading-none text-brand-300" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{r}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <Figure name="labWaste" className="aspect-[4/3] w-full" />
            <Callout title="In an emergency" tone="warn">
              For a spill, an exposure or an unidentified container, stop work, secure the area and
              contact your supervising faculty member and the Institute Safety Section immediately.
              Do not attempt to neutralise or dispose of an unknown material yourself.
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="Categories"
          title="How each laboratory stream is handled"
          lede="Classification follows exposure, not appearance. A glove that touched nothing is recycling; the same glove after a solvent is hazardous waste."
        />
        <div className="mt-12 overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
          <ul className="divide-y divide-ink-hair">
            {categories.map((c) => (
              <li key={c.title} className="grid gap-4 p-6 sm:p-7 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-10">
                <div>
                  <h3 className="font-serif text-lg leading-snug text-ink">{c.title}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-mute">{c.examples}</p>
                  <div className="mt-3">
                    <BinChip bin={c.bin} />
                  </div>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-ink-soft lg:border-l lg:border-ink-hair lg:pl-10">
                  {c.handling}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <Callout title="Records are part of the waste stream" tone="brand">
            <p>
              What was generated, neutralised and consigned, and to whom. It is what turns a pile of
              containers into an auditable chain of custody, and the first thing any inspection asks
              for. Reconcile it monthly.
            </p>
          </Callout>
          <Callout title="Before you buy, not after" tone="moss">
            <p>
              Much of the hazardous waste on campus is unopened reagent from a project that ended.
              Order what you will consume, check the surplus register first, and plan disposal while
              the account is still open.
            </p>
            <p className="mt-3">
              <Link href="/repurposing/academic" className="link-underline font-medium">
                See the academic exchange programmes &rarr;
              </Link>
            </p>
          </Callout>
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <h3 className="display-3 mb-6 text-xl">Related</h3>
          <NextSteps
            items={[
              { label: "Academic zone guidelines", href: "/guidelines/academic", blurb: "The full picture for departments and labs." },
              { label: "E-waste", href: "/guidelines/e-waste", blurb: "Instruments, batteries, boards and lighting." },
              { label: "Faculty & staff actions", href: "/take-action/faculty-staff", blurb: "Green Lab assessment and the laboratory checklist." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
