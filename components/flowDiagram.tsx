import { zoneRoutes, directStreams } from "@/content/flow";

/**
 * Bin → collection → yard → vendor, drawn as a three-column flow.
 * Not decorative: it is the only place the whole route is visible at once.
 */
export default function FlowDiagram() {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
      <div className="grid divide-y divide-ink-hair lg:grid-cols-[1.15fr_1fr_1fr] lg:divide-x lg:divide-y-0">
        {/* 1 — where it is generated */}
        <div className="p-6 sm:p-7">
          <p className="eyebrow-accent">1 · Generated</p>
          <h3 className="mt-2 font-serif text-[1.375rem] leading-tight text-ink">
            Three zones, three routes
          </h3>
          <ul className="mt-5 space-y-5">
            {zoneRoutes.map((z) => (
              <li key={z.slug}>
                <p className="text-[0.9375rem] font-medium text-ink">{z.zone}</p>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-mute">{z.route}</p>
                <p className="mt-1.5 text-[0.8125rem] italic leading-relaxed text-brand-700">
                  {z.ask}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 2 — the yard */}
        <div className="bg-paper-soft p-6 sm:p-7">
          <p className="eyebrow-accent">2 · Sorted</p>
          <h3 className="mt-2 font-serif text-[1.375rem] leading-tight text-ink">
            The segregation yard
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
            Everything collected across campus converges here and is sorted by hand into
            24 categories.
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <dt className="font-serif text-[1.75rem] leading-none text-brand-700">30–35</dt>
              <dd className="mt-1.5 text-[0.75rem] leading-snug text-ink-faint">
                People sorting, by hand
              </dd>
            </div>
            <div>
              <dt className="font-serif text-[1.75rem] leading-none text-brand-700">24</dt>
              <dd className="mt-1.5 text-[0.75rem] leading-snug text-ink-faint">
                Sorting categories
              </dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-ink-hair pt-4 text-[0.8125rem] leading-relaxed text-ink-mute">
            Some streams skip the ordinary route and are handed straight to the yard or to a
            vendor: {directStreams.join(", ").toLowerCase()}.
          </p>
        </div>

        {/* 3 — where it leaves */}
        <div className="p-6 sm:p-7">
          <p className="eyebrow-accent">3 · Sold or treated</p>
          <h3 className="mt-2 font-serif text-[1.375rem] leading-tight text-ink">
            Off campus, category by category
          </h3>
          <ul className="mt-5 space-y-3.5">
            {[
              ["Packaging", "Baled or bagged, then sold to vendors under a tender per category."],
              ["Food waste", "Campus biogas plant, and an animal husbandry institute as feed."],
              ["Vegetable peel", "Vermicompost yard; manure returns to campus gardening."],
              ["Hazardous & e-waste", "Agencies authorised by the Tamil Nadu Pollution Control Board."],
            ].map(([k, v]) => (
              <li key={k}>
                <p className="text-[0.9375rem] font-medium text-ink">{k}</p>
                <p className="mt-0.5 text-[0.875rem] leading-relaxed text-ink-mute">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
