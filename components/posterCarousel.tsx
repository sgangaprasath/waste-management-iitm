"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroPosters } from "@/content/posters";

const INTERVAL = 6500;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M12.5 4.5L7 10l5.5 5.5" : "M7.5 4.5L13 10l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PosterCarousel() {
  const n = heroPosters.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((p) => (p + 1) % n), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused, n]);

  const active = heroPosters[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Campus segregation posters"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      className="overflow-hidden rounded-2xl border border-ink-line bg-paper shadow-card"
    >
      <div className="grid lg:grid-cols-[1.62fr_1fr]">
        {/* Every poster in the carousel is A4 landscape, so a 1.414 frame
            holds each one edge to edge with nothing cropped or letterboxed. */}
        <div className="relative aspect-[1.414] w-full self-start bg-paper-soft">
          {heroPosters.map((p, k) => (
            <div
              key={p.file}
              aria-hidden={k !== i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                k === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={p.file}
                alt={p.alt}
                fill
                priority={k === 0}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous poster"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-paper/90 text-ink-soft shadow-card backdrop-blur transition-colors hover:border-brand-400 hover:text-brand-700 sm:left-4"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next poster"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-paper/90 text-ink-soft shadow-card backdrop-blur transition-colors hover:border-brand-400 hover:text-brand-700 sm:right-4"
          >
            <Chevron dir="right" />
          </button>
        </div>

        <div className="flex flex-col justify-between gap-7 border-t border-ink-line bg-paper px-6 py-7 sm:px-8 lg:border-l lg:border-t-0 lg:py-9">
          <div>
            <p className="eyebrow-accent">{active.kicker}</p>
            <h2 className="mt-2 font-serif text-[1.75rem] leading-tight text-ink">
              {active.title}
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-mute">{active.blurb}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={active.href}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-brand-800"
              >
                Read the guidance
                <span aria-hidden>&rarr;</span>
              </Link>
              <a
                href={active.file}
                download
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13h11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Print it
              </a>
            </div>
          </div>

          <ul className="flex items-center gap-2" aria-label="Choose a poster">
            {heroPosters.map((p, k) => (
              <li key={p.file}>
                <button
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={p.title}
                  aria-current={k === i}
                  className={`block h-2 rounded-full transition-all ${
                    k === i ? "w-7 bg-brand-700" : "w-2 bg-ink-line hover:bg-brand-300"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Poster {i + 1} of {n}: {active.title}
      </p>
    </section>
  );
}
