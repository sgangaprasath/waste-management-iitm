import { bins, binByKey, type BinKey } from "@/content/bins";

export function BinChip({ bin, className = "" }: { bin: BinKey; className?: string }) {
  const b = binByKey[bin];
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink-line bg-paper px-2.5 py-1 text-[0.6875rem] font-medium text-ink-mute ${className}`}
    >
      <span
        aria-hidden
        className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-inset ring-black/15"
        style={{ backgroundColor: b.hex }}
      />
      {b.name}
    </span>
  );
}

export function BinCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {bins.map((b) => (
        <article
          key={b.key}
          className="flex flex-col overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card"
        >
          <div className="h-1.5 w-full" style={{ backgroundColor: b.hex }} aria-hidden />
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-serif text-[1.5rem] leading-none text-ink">{b.name}</h3>
            <p className="eyebrow mt-2.5">{b.stream}</p>

            <div className="mt-6">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-moss-600">
                What goes in
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {b.takes.map((t) => (
                  <li key={t} className="flex gap-2 text-[0.875rem] leading-relaxed text-ink-soft">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 shrink-0 text-moss-500">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-600">
                Never
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {b.neverTakes.map((t) => (
                  <li key={t} className="flex gap-2 text-[0.875rem] leading-relaxed text-ink-mute">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 shrink-0 text-brand-400">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 border-t border-ink-hair pt-4 text-[0.8125rem] leading-relaxed text-ink-mute">
              <span className="font-medium text-ink">Where it goes. </span>
              {b.destination}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BinStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {bins.map((b) => (
        <li key={b.key}>
          <BinChip bin={b.key} />
        </li>
      ))}
    </ul>
  );
}
