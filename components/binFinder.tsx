"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/icons";
import {
  binIndex,
  searchIndex,
  commonItems,
  indexGroups,
  itemsInGroup,
  itemsInBin,
  binCounts,
  binOfItem,
  type IndexEntry,
} from "@/content/binIndex";
import { bins, binByKey, type BinKey } from "@/content/bins";
import { swatchFor } from "@/content/palette";

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

/** The round, colour-filled glyph that stands for a container. */
function BinGlyph({ bin, size = 40 }: { bin: BinKey; size?: number }) {
  const b = binByKey[bin];
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center rounded-full text-paper ring-1 ring-inset ring-black/10"
      style={{ width: size, height: size, backgroundColor: b.hex }}
    >
      <Icon name={b.icon} size={Math.round(size * 0.52)} />
    </span>
  );
}

/** Small colour-coded label, used wherever an item's answer appears inline. */
function BinTag({ bin }: { bin: BinKey }) {
  const b = binByKey[bin];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-medium"
      style={{ backgroundColor: b.tint, color: b.deep }}
    >
      <span
        aria-hidden
        className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-black/15"
        style={{ backgroundColor: b.hex }}
      />
      {b.name}
    </span>
  );
}

function Result({ entry }: { entry: IndexEntry }) {
  const bin = binByKey[entry.bin];
  const cat = swatchFor(entry.group);
  return (
    <li
      className="overflow-hidden rounded-xl shadow-card"
      style={{ backgroundColor: bin.tint, borderLeft: `6px solid ${bin.hex}` }}
    >
      <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6 sm:p-6">
        <div className="min-w-0">
          <h3 className="font-serif text-[1.375rem] leading-snug" style={{ color: bin.deep }}>
            {entry.item}
          </h3>
          {entry.detail ? (
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{entry.detail}</p>
          ) : null}
          <p className="mt-3 flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink-mute">
            <span
              className="rounded-full px-2.5 py-1 text-[0.75rem] font-medium"
              style={{
                backgroundColor: cat.tint,
                color: cat.deep,
                boxShadow: `inset 0 0 0 1px ${cat.edge}`,
              }}
            >
              {entry.group}
            </span>
            <span aria-hidden>·</span>
            <span>{zoneLabel[entry.zone]}</span>
            <span aria-hidden>·</span>
            <Link
              href={zoneHref[entry.zone]}
              className="underline underline-offset-2 hover:text-brand-700"
            >
              full guidance
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
          <BinGlyph bin={entry.bin} />
          <span>
            <span
              className="block font-serif text-[1.125rem] leading-tight"
              style={{ color: bin.deep }}
            >
              {bin.name}
            </span>
            <span className="block text-[0.6875rem] uppercase tracking-[0.1em] text-ink-mute">
              {bin.stream}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}

/**
 * The colour-tagged list used by both browsing modes. Each row is tagged
 * with whatever the list is *not* grouped by, so the tag always adds
 * something: the container when browsing a category, the category when
 * browsing a container.
 */
function BrowseList({ items, tag }: { items: IndexEntry[]; tag: "bin" | "group" }) {
  return (
    <ul className="mt-3 divide-y divide-ink-hair overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
      {items.map((e) => {
        const s = swatchFor(e.group);
        return (
          <li
            key={`${e.item}-${e.group}`}
            className="flex items-start justify-between gap-4 px-5 py-3 transition-colors hover:bg-paper-soft"
          >
            <div className="min-w-0">
              <p className="text-[0.9375rem] text-ink">{e.item}</p>
              {e.detail ? (
                <p className="mt-0.5 text-[0.8125rem] leading-snug text-ink-mute">{e.detail}</p>
              ) : null}
            </div>
            <span className="pt-0.5">
              {tag === "bin" ? (
                <BinTag bin={e.bin} />
              ) : (
                <span
                  className="inline-flex shrink-0 rounded-full px-2.5 py-1 text-[0.75rem] font-medium"
                  style={{
                    backgroundColor: s.tint,
                    color: s.deep,
                    boxShadow: `inset 0 0 0 1px ${s.edge}`,
                  }}
                >
                  {e.group}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function BinFinder() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<string | null>(null);
  const [bin, setBin] = useState<BinKey | null>(null);

  const results = useMemo(() => searchIndex(q), [q]);
  const browsingGroup = useMemo(() => (group ? itemsInGroup(group) : []), [group]);
  const browsingBin = useMemo(() => (bin ? itemsInBin(bin) : []), [bin]);
  const typed = q.trim().length >= 2;

  return (
    <div>
      {/* The five containers, doubling as filters. Colour is the interface. */}
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {bins.map((b) => {
          const on = bin === b.key;
          return (
            <li key={b.key}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setBin(on ? null : b.key);
                  setGroup(null);
                  setQ("");
                }}
                className="flex h-full w-full flex-col items-start gap-2 rounded-xl px-3.5 py-3 text-left transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: b.tint,
                  boxShadow: on
                    ? `inset 0 0 0 2px ${b.hex}, 0 8px 24px -14px rgba(17,17,16,0.3)`
                    : "inset 0 0 0 1px rgba(17,17,16,0.08)",
                }}
              >
                <span className="flex items-center gap-2">
                  <BinGlyph bin={b.key} size={26} />
                  <span
                    className="font-serif text-[1.0625rem] leading-tight"
                    style={{ color: b.deep }}
                  >
                    {b.name}
                  </span>
                </span>
                <span className="mt-auto text-[0.6875rem] uppercase tracking-[0.08em] text-ink-mute">
                  {binCounts[b.key] ?? 0} items
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Search box, sitting on a five-colour rule */}
      <div className="mt-5">
        <div className="flex h-1.5 overflow-hidden rounded-t-xl" aria-hidden>
          {bins.map((b) => (
            <span key={b.key} className="flex-1" style={{ backgroundColor: b.hex }} />
          ))}
        </div>
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
            onChange={(e) => {
              setQ(e.target.value);
              if (e.target.value) {
                setGroup(null);
                setBin(null);
              }
            }}
            placeholder="What are you holding? Try “chip packet” or “battery”"
            aria-label="Search for an item"
            autoComplete="off"
            className="w-full rounded-b-xl border border-t-0 border-ink-line bg-paper py-4 pl-14 pr-5 text-[1.0625rem] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-brand-400"
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
      </div>

      {/* Browsing one container */}
      {!typed && bin ? (
        <div className="mt-6">
          <p className="text-[0.875rem] text-ink-mute">
            {browsingBin.length} items go in the{" "}
            <strong style={{ color: binByKey[bin].deep }}>{binByKey[bin].name.toLowerCase()}</strong>{" "}
            &mdash; {binByKey[bin].stream.toLowerCase()}.
          </p>
          <BrowseList items={browsingBin} tag="group" />
        </div>
      ) : null}

      {/* Suggestions and category browsing */}
      {!typed && !bin ? (
        <div className="mt-6">
          <p className="eyebrow">Commonly asked</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {commonItems.map((c) => {
              const k = binOfItem.get(c.toLowerCase());
              const b = k ? binByKey[k] : null;
              return (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => {
                      setQ(c);
                      setGroup(null);
                      setBin(null);
                    }}
                    className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.875rem] font-medium transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: b ? b.tint : "#F4F4F2",
                      color: b ? b.deep : "#4A4A45",
                      boxShadow: "inset 0 0 0 1px rgba(17,17,16,0.08)",
                    }}
                  >
                    {b ? (
                      <span
                        aria-hidden
                        className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-black/15"
                        style={{ backgroundColor: b.hex }}
                      />
                    ) : null}
                    {c}
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="eyebrow mt-8">Or browse by category</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {indexGroups.map((g) => {
              const s = swatchFor(g);
              const on = group === g;
              return (
                <li key={g}>
                  <button
                    type="button"
                    onClick={() => setGroup(on ? null : g)}
                    aria-pressed={on}
                    className="rounded-full px-3.5 py-1.5 text-[0.875rem] font-medium transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: on ? s.deep : s.tint,
                      color: on ? "#FFFFFF" : s.deep,
                      boxShadow: `inset 0 0 0 1px ${on ? s.deep : s.edge}`,
                    }}
                  >
                    {g}
                  </button>
                </li>
              );
            })}
          </ul>

          {group ? (
            <>
              <p className="mt-6 text-[0.875rem] text-ink-mute">
                {browsingGroup.length} items in {group}
              </p>
              <BrowseList items={browsingGroup} tag="bin" />
            </>
          ) : (
            <p className="mt-6 text-[0.875rem] text-ink-mute">
              {binIndex.length} items indexed, drawn from the zone guidelines and the campus
              dictionary.
            </p>
          )}
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
          <div
            className="mt-6 rounded-xl p-6"
            role="status"
            style={{
              backgroundColor: binByKey.red.tint,
              borderLeft: `6px solid ${binByKey.red.hex}`,
            }}
          >
            <p className="font-serif text-[1.25rem]" style={{ color: binByKey.red.deep }}>
              Nothing indexed under that word
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
              Try a simpler noun &mdash; &ldquo;bottle&rdquo; rather than &ldquo;plastic drinking
              bottle&rdquo;. If it is genuinely not here, put it in the <strong>red bin</strong>{" "}
              unless it is hazardous or electronic, and tell us so we can add it.
            </p>
            <a
              href="mailto:waste@smail.iitm.ac.in"
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
