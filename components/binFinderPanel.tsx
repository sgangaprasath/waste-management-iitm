import Link from "next/link";
import { bins } from "@/content/bins";
import { binIndex } from "@/content/binIndex";

/** A compact prompt that sends people to the searchable index. */
export default function BinFinderPanel({ tone = "soft" }: { tone?: "soft" | "paper" }) {
  return (
    <Link
      href="/bin-finder"
      className={`group flex flex-col gap-6 rounded-xl border border-ink-line p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-8 ${
        tone === "soft" ? "bg-paper-soft" : "bg-paper"
      }`}
    >
      <div>
        <p className="eyebrow-accent">Bin finder</p>
        <h3 className="mt-2 font-serif text-[1.75rem] leading-tight text-ink group-hover:text-brand-700">
          Search any item, get the bin
        </h3>
        <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-ink-mute">
          {binIndex.length} items indexed &mdash; type what you are holding instead of reading a
          page.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <span className="flex gap-1.5" aria-hidden>
          {bins.map((b) => (
            <span
              key={b.key}
              className="h-9 w-9 rounded-md ring-1 ring-inset ring-black/10"
              style={{ backgroundColor: b.hex }}
            />
          ))}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="text-brand-700 transition-transform group-hover:translate-x-1">
          <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
