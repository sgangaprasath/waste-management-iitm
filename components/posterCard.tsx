import Image from "next/image";
import type { Poster } from "@/content/posters";

/**
 * A single poster shown whole, with a download beside it. Every sheet in
 * the manifest is A4 landscape, so the 1.414 frame holds it edge to edge.
 */
export default function PosterCard({
  poster,
  caption,
  priority = false,
}: {
  poster: Poster;
  /** Overrides the manifest blurb in the footer. */
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-line bg-paper shadow-card">
      <div className="relative aspect-[1.414] w-full bg-paper-soft">
        <Image
          src={poster.file}
          alt={poster.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-line px-5 py-3.5">
        <span className="min-w-0 flex-1 text-[0.8125rem] leading-snug text-ink-mute">
          {caption ?? poster.blurb}
        </span>
        <a
          href={poster.file}
          download
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-ink-line px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
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
      </figcaption>
    </figure>
  );
}
