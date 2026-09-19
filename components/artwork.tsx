import type { ArtKey } from "@/content/images";

/**
 * Generated, on-brand artwork used wherever a photograph has not yet been
 * sourced. Purely decorative: every instance is aria-hidden and the meaning
 * lives in the surrounding text.
 */
export default function Artwork({
  art,
  className = "",
}: {
  art: ArtKey;
  className?: string;
}) {
  const common = {
    className: `h-full w-full ${className}`,
    viewBox: "0 0 800 500",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": true as const,
    role: "presentation",
  };

  switch (art) {
    case "strata":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="a-strata" x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#3B0E16" />
              <stop offset="55%" stopColor="#6F1B2B" />
              <stop offset="100%" stopColor="#8C2639" />
            </linearGradient>
            <linearGradient id="a-strata-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FCFAF7" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FCFAF7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#a-strata)" />
          {/* contour strata */}
          {Array.from({ length: 16 }).map((_, i) => (
            <path
              key={i}
              d={`M-40 ${40 + i * 30} C 160 ${10 + i * 30 + (i % 3) * 14}, 300 ${
                96 + i * 30 - (i % 4) * 12
              }, 480 ${50 + i * 30} S 780 ${16 + i * 30}, 840 ${64 + i * 30}`}
              fill="none"
              stroke="#FCFAF7"
              strokeOpacity={0.07 + (i % 5) * 0.035}
              strokeWidth={i % 4 === 0 ? 2 : 1}
            />
          ))}
          {/* three streams */}
          {[
            { c: "#2E7D46", x: 176 },
            { c: "#1F5FA8", x: 300 },
            { c: "#D9564E", x: 424 },
          ].map((s2) => (
            <g key={s2.x}>
              <rect x={s2.x} y={286} width="76" height="128" rx="10" fill={s2.c} fillOpacity="0.92" />
              <rect x={s2.x} y={286} width="76" height="16" rx="8" fill="#FCFAF7" fillOpacity="0.28" />
            </g>
          ))}
          <circle cx="612" cy="160" r="86" fill="#3E7A5A" fillOpacity="0.5" />
          <circle cx="612" cy="160" r="86" fill="none" stroke="#FCFAF7" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="612" cy="160" r="52" fill="none" stroke="#FCFAF7" strokeOpacity="0.2" />
          <rect y="0" width="800" height="200" fill="url(#a-strata-fade)" />
        </svg>
      );

    case "streams":
      return (
        <svg {...common}>
          <rect width="800" height="500" fill="#F6F2EC" />
          {[
            { c: "#2E7D46", y: 110 },
            { c: "#1F5FA8", y: 210 },
            { c: "#B3261E", y: 310 },
            { c: "#C08A16", y: 410 },
          ].map((s, i) => (
            <g key={i}>
              <path
                d={`M-20 ${s.y} C 180 ${s.y - 58}, 300 ${s.y + 58}, 500 ${s.y} S 780 ${
                  s.y - 40
                }, 820 ${s.y + 10}`}
                fill="none"
                stroke={s.c}
                strokeOpacity="0.55"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d={`M-20 ${s.y} C 180 ${s.y - 58}, 300 ${s.y + 58}, 500 ${s.y} S 780 ${
                  s.y - 40
                }, 820 ${s.y + 10}`}
                fill="none"
                stroke="#FCFAF7"
                strokeOpacity="0.5"
                strokeWidth="2"
                strokeDasharray="6 10"
              />
            </g>
          ))}
        </svg>
      );

    case "loop":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="a-loop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#152A20" />
              <stop offset="100%" stopColor="#264A38" />
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#a-loop)" />
          {Array.from({ length: 5 }).map((_, i) => (
            <circle
              key={i}
              cx="400"
              cy="250"
              r={72 + i * 48}
              fill="none"
              stroke="#8FB89B"
              strokeOpacity={0.42 - i * 0.07}
              strokeWidth={1.25}
              strokeDasharray={i % 2 ? "4 12" : undefined}
            />
          ))}
          <path
            d="M400 122 A128 128 0 1 1 287 313"
            fill="none"
            stroke="#BCD6C3"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path d="M266 282 L284 324 L326 308 Z" fill="#BCD6C3" />
          <circle cx="400" cy="250" r="40" fill="#8C2639" />
          <circle cx="400" cy="250" r="40" fill="none" stroke="#FCFAF7" strokeOpacity="0.4" />
          {[
            { a: -55, c: "#2E7D46" },
            { a: 65, c: "#1F5FA8" },
            { a: 185, c: "#C08A16" },
          ].map((d) => {
            const rad = (d.a * Math.PI) / 180;
            return (
              <circle
                key={d.a}
                cx={400 + Math.cos(rad) * 128}
                cy={250 + Math.sin(rad) * 128}
                r="15"
                fill={d.c}
                stroke="#152A20"
                strokeWidth="3"
              />
            );
          })}
        </svg>
      );

    case "grid":
      return (
        <svg {...common}>
          <rect width="800" height="500" fill="#1A1512" />
          {Array.from({ length: 13 }).map((_, x) =>
            Array.from({ length: 8 }).map((_, y) => {
              const on = (x * 7 + y * 5) % 6 < 2;
              return (
                <rect
                  key={`${x}-${y}`}
                  x={24 + x * 60}
                  y={24 + y * 60}
                  width="40"
                  height="40"
                  rx="4"
                  fill={on ? "#8C2639" : "#FCFAF7"}
                  fillOpacity={on ? 0.85 : 0.07}
                />
              );
            })
          )}
          <rect x="24" y="24" width="752" height="452" fill="none" stroke="#FCFAF7" strokeOpacity="0.12" />
        </svg>
      );

    case "canopy":
      return (
        <svg {...common}>
          <rect width="800" height="500" fill="#264A38" />
          {Array.from({ length: 34 }).map((_, i) => {
            const x = (i * 137) % 800;
            const y = 90 + ((i * 271) % 340);
            const r = 26 + ((i * 53) % 46);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={r}
                fill="#8FB89B"
                fillOpacity={0.1 + ((i * 17) % 5) * 0.06}
              />
            );
          })}
          <rect y="430" width="800" height="70" fill="#152A20" />
        </svg>
      );

    case "vessel":
    default:
      return (
        <svg {...common}>
          <rect width="800" height="500" fill="#EDE7DE" />
          <g stroke="#6F1B2B" strokeOpacity="0.5" fill="none" strokeWidth="1.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <rect
                key={i}
                x={60 + i * 8}
                y={60 + i * 11}
                width={680 - i * 16}
                height={380 - i * 22}
                rx={8}
              />
            ))}
          </g>
          <circle cx="400" cy="250" r="46" fill="#3E7A5A" fillOpacity="0.85" />
        </svg>
      );
  }
}
