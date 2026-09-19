import Image from "next/image";
import Artwork from "./artwork";
import { images, type ImageKey, type ImageSlot } from "@/content/images";

export default function Figure({
  name,
  className = "",
  priority = false,
  rounded = "rounded-xl",
  caption,
  fit,
}: {
  name: ImageKey;
  className?: string;
  priority?: boolean;
  rounded?: string;
  caption?: string;
  /** Overrides the manifest's own `fit` for this instance. */
  fit?: "cover" | "contain";
}) {
  const slot: ImageSlot = images[name];
  const mode = fit ?? slot.fit ?? "cover";

  return (
    <figure className={className}>
      <div
        className={`relative isolate h-full w-full overflow-hidden ${
          mode === "contain" ? "bg-paper-soft ring-1 ring-inset ring-ink-hair" : "bg-paper-deep"
        } ${rounded}`}
      >
        {slot.src ? (
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={mode === "contain" ? "object-contain p-2" : "object-cover"}
          />
        ) : (
          <Artwork art={slot.art ?? "strata"} />
        )}
      </div>
      {caption ? <figcaption className="mt-2 text-xs text-ink-mute">{caption}</figcaption> : null}
    </figure>
  );
}
