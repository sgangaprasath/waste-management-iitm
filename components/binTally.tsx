import Link from "next/link";
import { bins, binByKey, type BinKey } from "@/content/bins";
import type { Zone } from "@/content/zones";

/**
 * How a zone's waste splits across the five containers, as a single stacked
 * bar. Counts item types listed on the page rather than mass — it answers
 * "which bin will I reach for most here", which is the useful question.
 */
export default function BinTally({ zone }: { zone: Zone }) {
  const counts = new Map<BinKey, number>();
  for (const g of zone.groups) {
    for (const it of g.items) counts.set(it.bin, (counts.get(it.bin) ?? 0) + 1);
  }
  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0);
  const ordered = bins.filter((b) => counts.get(b.key));

  return (
    <div className="rounded-xl border border-ink-line bg-paper p-6 shadow-card sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-serif text-[1.375rem] leading-tight text-ink">
          Which bin you will reach for
        </h3>
        <p className="text-[0.8125rem] text-ink-faint">
          {total} kinds of waste listed on this page
        </p>
      </div>

      <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full" role="img"
        aria-label={ordered
          .map((b) => `${binByKey[b.key].name}: ${counts.get(b.key)} of ${total}`)
          .join("; ")}
      >
        {ordered.map((b) => (
          <div
            key={b.key}
            style={{ backgroundColor: b.hex, width: `${((counts.get(b.key) ?? 0) / total) * 100}%` }}
          />
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
        {ordered.map((b) => (
          <div key={b.key} className="flex items-baseline gap-2.5">
            <span
              aria-hidden
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/15"
              style={{ backgroundColor: b.hex }}
            />
            <div>
              <dt className="font-serif text-[1.25rem] leading-none text-ink">
                {Math.round(((counts.get(b.key) ?? 0) / total) * 100)}%
              </dt>
              <dd className="mt-1 text-[0.75rem] leading-snug text-ink-faint">{b.name}</dd>
            </div>
          </div>
        ))}
      </dl>

      <p className="mt-6 border-t border-ink-hair pt-4 text-[0.875rem] leading-relaxed text-ink-mute">
        Not sure about one item?{" "}
        <Link href="/bin-finder" className="link-underline font-medium">
          Search the bin finder
        </Link>{" "}
        instead of reading the whole list.
      </p>
    </div>
  );
}
