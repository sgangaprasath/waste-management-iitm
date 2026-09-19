"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { binIndex, searchIndex, commonItems, type IndexEntry } from "@/content/binIndex";
import { binByKey } from "@/content/bins";

const zoneLabel: Record<IndexEntry["zone"], string> = {
  academic: "Academic zone",
  hostel: "Hostel zone",
  residential: "Residential zone",
  all: "Everywhere on campus",
};

const zoneHref: Record<IndexEntry["zone"], string> = {
  academic: "/guidelines/academic",
  hostel: "/guidelines/hostel",
  residential: "/guidelines/residential",
  all: "/guidelines",
};

function Result({ entry }: { entry: IndexEntry }) {
  const bin = binByKey[entry.bin];
  return (
    <li className="overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
      <div className="h-1.5 w-full" style={{ backgroundColor: bin.hex }} aria-hidden />
      <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6 sm:p-6">
        <div>
          <h3 className="font-serif text-[1.375rem] leading-snug text-ink">{entry.item}</h3>
          {entry.detail ? (
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{entry.detail}</p>
          ) : null}
          <p className="mt-3 text-[0.8125rem] text-ink-faint">
            {zoneLabel[entry.zone]} ·{" "}
            <Link href={zoneHref[entry.zone]} className="hover:text-brand-700">
              see the full guidance
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2.5 sm:flex-col sm:items-end sm:text-right">
          <span
            aria-hidden
            className="h-9 w-9 shrink-0 rounded-md ring-1 ring-inset ring-black/10"
            style={{ backgroundColor: bin.hex }}
          />
          <span>
            <span className="block font-serif text-[1.125rem] leading-tight text-ink">
              {bin.name}
            </span>
            <span className="block text-[0.6875rem] uppercase tracking-[0.1em] text-ink-faint">
              {bin.stream}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default function BinFinder() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchIndex(q), [q]);
  const typed = q.trim().length >= 2;

  return (
    <div>
      {/* Search box */}
      <div className="relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-faint"
        >
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="What are you holding? Try “chip packet” or “battery”"
          aria-label="Search for an item"
          autoComplete="off"
          className="w-full rounded-xl border border-ink-line bg-paper py-4 pl-14 pr-5 text-[1.0625rem] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-brand-400"
        />
        {q ? (
          <button
            type="button"
            onClick={() => setQ("")}
            aria-label="Clear"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-ink-faint transition-colors hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        ) : null}
      </div>

      {/* Suggestions */}
      {!typed ? (
        <div className="mt-6">
          <p className="eyebrow">Commonly asked</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {commonItems.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setQ(c)}
                  className="rounded-full border border-ink-line bg-paper px-3.5 py-1.5 text-[0.875rem] text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.875rem] text-ink-mute">
            {binIndex.length} items indexed, drawn from the zone guidelines.
          </p>
        </div>
      ) : null}

      {/* Results */}
      {typed ? (
        results.length ? (
          <>
            <p className="mt-6 text-[0.875rem] text-ink-mute" role="status">
              {results.length} {results.length === 1 ? "match" : "matches"}
            </p>
            <ul className="mt-3 space-y-4">
              {results.map((r) => (
                <Result key={`${r.item}-${r.zone}`} entry={r} />
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-6 rounded-xl border border-ink-line bg-paper-soft p-6" role="status">
            <p className="font-serif text-[1.25rem] text-ink">Nothing indexed under that word</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
              Try a simpler noun &mdash; &ldquo;bottle&rdquo; rather than &ldquo;plastic drinking
              bottle&rdquo;. If it is genuinely not here, put it in the{" "}
              <strong>red bin</strong> unless it is hazardous or electronic, and tell us so we can
              add it.
            </p>
            <a
              href="mailto:waste@iitm.ac.in"
              className="mt-4 inline-flex items-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-brand-800"
            >
              Tell us what is missing
            </a>
          </div>
        )
      ) : null}
    </div>
  );
}
