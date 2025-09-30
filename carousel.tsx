import * as React from "react";
import { Template } from "tinacms";

// 1. Tina block schema (for use in page.ts)
export const carouselBlockSchema: Template = {
  name: "carousel",
  label: "Carousel",
  fields: [
    {
      type: "object",
      name: "images",
      label: "Images",
      list: true,
      fields: [
        { type: "image", name: "src", label: "Image" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
  ],
};

// 2. React component (for use in blocks/index.tsx)
export function CarouselBlock({ data }: { data: any }) {
  const [index, setIndex] = React.useState(0);
  const images = data?.images || [];

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{margin: "2rem 0 0 0", textAlign: "center",width:"100%" }}>
      <div style={{ position: "relative" }}>
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "0 4px 4px 0",
            userSelect: "none",
          }}
          aria-label="Previous Slide"
        >
          &#8249;
        </button>

        <img
          src={images[index].src}
          alt={images[index].alt}
          style={{ width: "100%", height: "700px", objectFit:"cover", display: "block" }}
        />

        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "4px 0 0 4px",
            userSelect: "none",
          }}
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        {images.map((img, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: i === index ? "#333" : "#ccc",
              margin: "0 6px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            title={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
