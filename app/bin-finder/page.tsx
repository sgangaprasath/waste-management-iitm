import type { Metadata } from "next";
import BinFinder from "@/components/binFinder";
import { BinCards } from "@/components/binParts";
import { PageHeader, Section, SectionHead, Callout, NextSteps } from "@/components/ui";
import { bins } from "@/content/bins";

export const metadata: Metadata = {
  title: "Bin finder",
  description:
    "Search any item and find out which bin it belongs in on the IIT Madras campus.",
};

export default function BinFinderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        icon="document"
        title="Which bin does this go in?"
        lede="Type what you are holding. If it is not here, the rule of thumb is at the bottom of the results."
        crumbs={[
          { label: "Guidelines", href: "/guidelines" },
          { label: "Bin finder", href: "/bin-finder" },
        ]}
      />

      {/* The five container colours, as a rule across the page. */}
      <div className="flex h-2" aria-hidden>
        {bins.map((b) => (
          <span key={b.key} className="flex-1" style={{ backgroundColor: b.hex }} />
        ))}
      </div>

      <Section tone="paper">
        <div className="mx-auto max-w-4xl">
          <BinFinder />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          eyebrow="Reference"
          icon="bin"
          title="The five containers"
          lede="Colour is the whole interface."
        />
        <div className="mt-10">
          <BinCards />
        </div>
      </Section>

      <Section tone="paper" tight>
        <div className="mb-10">
          <Callout title="When the finder has no answer" tone="warn">
            Put it in <strong>red</strong> &mdash; unless it is a battery, an electronic device, a
            chemical or a medicine, in which case hold it back for an e-waste point or the hazardous
            collection. Then write to us so the item gets added.
          </Callout>
        </div>
        <NextSteps
          items={[
            { icon: "document", label: "Campus-wide rules", href: "/guidelines", blurb: "The three-bin system in full." },
            { icon: "truck", label: "Where it goes", href: "/guidelines/where-it-goes", blurb: "What happens after the bin." },
            { icon: "printer", label: "Printable posters", href: "/downloads", blurb: "Signage for your floor, lab or block." },
          ]}
        />
      </Section>
    </>
  );
}
