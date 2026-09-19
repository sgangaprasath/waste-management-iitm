import type { IconKey } from "@/content/takeAction";

/**
 * Line icons, 24×24, 1.25 stroke. Deliberately plain — they carry meaning
 * alongside a label, never instead of one, so every instance is aria-hidden.
 */
const paths: Record<IconKey, JSX.Element> = {
  bin: (
    <>
      <path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
      <path d="M6 7l1 12a1 1 0 001 1h8a1 1 0 001-1l1-12" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  bottle: (
    <>
      <path d="M10 3h4v3l1.5 2.5A4 4 0 0116 11v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8a4 4 0 01.5-2.5L10 6V3z" />
      <path d="M8 13h8" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="15" height="9" rx="1.5" />
      <path d="M18 11h2.5v3H18M7 11v3M11 11v3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0111 0" />
      <path d="M16 5.5a3 3 0 010 5.6M17 20a5.5 5.5 0 00-2-4.3" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M7.5 13a4.5 4.5 0 019 0" />
      <path d="M12 2.5v3" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L5.5 17.5A2 2 0 007.3 20.5h9.4a2 2 0 001.8-3L14 9V3" />
      <path d="M8 15h8" />
    </>
  ),
  printer: (
    <>
      <path d="M7 9V4h10v5" />
      <rect x="4" y="9" width="16" height="7" rx="1.5" />
      <path d="M7 14h10v6H7z" />
    </>
  ),
  box: (
    <>
      <path d="M3 8l9-4 9 4v8l-9 4-9-4V8z" />
      <path d="M3 8l9 4 9-4M12 12v8" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-14 0 10-5 15-12 15a6 6 0 01-4-1z" />
      <path d="M9 15c2-3 5-5 9-6" />
    </>
  ),
  cup: (
    <>
      <path d="M6 8h11l-1 11a2 2 0 01-2 1.8H9A2 2 0 017 19L6 8z" />
      <path d="M17 11h1.8a2 2 0 010 4H16.7" />
      <path d="M9 4.5V3M12.5 4.5V3" />
    </>
  ),
  sign: (
    <>
      <path d="M12 21V9" />
      <path d="M4 5h12l3 2-3 2H4V5z" />
      <path d="M8 13h12l-3 2 3 2H8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10" />
      <path d="M5 9h14" />
      <path d="M5 9l-2.5 5a3 3 0 005 0L5 9zM19 9l-2.5 5a3 3 0 005 0L19 9z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9 4V2.8h6V4" />
      <path d="M9 10h6M9 14h6M9 18h3" />
    </>
  ),
  cycle: (
    <>
      {/* Universal recycling symbol: three arrows around a triangle. */}
      <path d="M13.32 7.08L17.27 13.92" />
      <path d="M14.76 12.48L17.27 13.92L17.27 11.03" />
      <path d="M15.95 16.20L8.05 16.20" />
      <path d="M10.55 14.75L8.05 16.20L10.55 17.65" />
      <path d="M6.73 13.92L10.68 7.08" />
      <path d="M10.69 9.97L10.68 7.08L8.18 8.52" />
    </>
  ),

  drop: (
    <>
      <path d="M12 3s6 6.5 6 10.5A6 6 0 016 13.5C6 9.5 12 3 12 3z" />
      <path d="M9 14a3 3 0 003 3" />
    </>
  ),
};

export default function Icon({
  name,
  className = "",
  size = 24,
}: {
  name: IconKey;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

/** Three dots showing how much effort a pledge takes. */
export function EffortScale({ level }: { level: 1 | 2 | 3 }) {
  const label = { 1: "Start today", 2: "Some effort", 3: "Take it on" }[level];
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className="flex gap-[3px]" aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-[5px] w-[5px] rounded-full ${i <= level ? "bg-brand-600" : "bg-ink-line"}`}
          />
        ))}
      </span>
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink-faint">
        {label}
      </span>
    </span>
  );
}
