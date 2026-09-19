import { BinChip } from "./binParts";
import { binByKey } from "@/content/bins";
import type { Zone } from "@/content/zones";

export function WasteTable({ group }: { group: Zone["groups"][number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-line bg-paper shadow-card">
      <div className="border-b border-ink-line bg-paper-soft px-6 py-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex gap-1" aria-hidden>
            {Array.from(new Set(group.items.map((i) => i.bin))).map((k) => (
              <span
                key={k}
                className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-black/15"
                style={{ backgroundColor: binByKey[k].hex }}
              />
            ))}
          </span>
          <h3 className="font-serif text-[1.5rem] leading-tight text-ink">{group.title}</h3>
          <span className="text-[0.75rem] text-ink-faint">{group.items.length} items</span>
        </div>
        {group.intro ? (
          <p className="mt-1.5 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-mute">
            {group.intro}
          </p>
        ) : null}
      </div>
      <ul className="divide-y divide-ink-hair">
        {group.items.map((it) => (
          <li key={it.item} className="grid gap-2 px-6 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6">
            <div>
              <p className="text-[0.9375rem] font-medium leading-snug text-ink">{it.item}</p>
              {it.detail ? (
                <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-mute">{it.detail}</p>
              ) : null}
            </div>
            <div className="sm:pt-0.5">
              <BinChip bin={it.bin} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DisposalTable({ rows }: { rows: Zone["disposal"] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-ink-line bg-paper shadow-card">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink-line bg-paper-soft">
            <th scope="col" className="px-6 py-4 eyebrow">Waste type</th>
            <th scope="col" className="px-6 py-4 eyebrow">Container</th>
            <th scope="col" className="px-6 py-4 eyebrow">How to dispose</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-hair">
          {rows.map((r) => (
            <tr key={r.waste} className="align-top">
              <th scope="row" className="w-52 px-6 py-5 text-left font-serif text-[1.125rem] font-normal text-ink">
                {r.waste}
              </th>
              <td className="w-44 px-6 py-5">
                <BinChip bin={r.bin} />
              </td>
              <td className="px-6 py-5 text-[0.9375rem] leading-relaxed text-ink-soft">{r.guidance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PracticeList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      {items.map((p, i) => (
        <li key={p.title} className="flex gap-4">
          <span className="mt-0.5 font-serif text-[1.75rem] leading-none text-brand-300" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-serif text-[1.25rem] leading-snug text-ink">{p.title}</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-mute">{p.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CollectionPoints({ points }: { points: Zone["collectionPoints"] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {points.map((p) => (
        <li key={p.place} className="rounded-xl border border-ink-line bg-paper p-5 shadow-card">
          <p className="font-serif text-[1.25rem] leading-snug text-ink">{p.place}</p>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-mute">{p.detail}</p>
        </li>
      ))}
    </ul>
  );
}
