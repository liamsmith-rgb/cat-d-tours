"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/images/gallery/spain-tet-group.jpg", caption: "Northern Spain — the crew lined up on the TET" },
  { src: "/images/gallery/gasgas-mountain.jpg", caption: "Summit stop — GasGas crew with the Pyrenees behind" },
  { src: "/images/gallery/ronda-bridge.jpg", caption: "The lads at Ronda bridge — one of Spain's most iconic spots" },
  { src: "/images/gallery/italian-lake-wide.jpg", caption: "Italian lake stop — bikes and mountains" },
  { src: "/images/gallery/italian-lake-close.jpg", caption: "Lakeside — the crew taking five" },
  { src: "/images/gallery/coastal-selfie.jpg", caption: "Coastal trail riding — sea, cliffs, and the whole crew grinning" },
  { src: "/images/gallery/ktm-bridge.jpg", caption: "Alpine bridge crossing — KTM 890 doing what it was built for" },
  { src: "/images/gallery/alpine-lake-rider.jpg", caption: "Mountain lake pit stop — bikes resting, photos happening" },
  { src: "/images/gallery/mountain-tunnel.jpg", caption: "TET tunnel exit — Italian Alps at their most dramatic" },
  { src: "/images/gallery/technical-trail.jpg", caption: "When the trail fights back — technical section in the hills" },
  { src: "/images/gallery/alps-group.jpg", caption: "The Alps — the whole crew with a mountain backdrop" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = useCallback(() => {
    setLightbox((c) => (c !== null ? (c + 1) % images.length : null));
  }, []);

  const prev = useCallback(() => {
    setLightbox((c) => (c !== null ? (c - 1 + images.length) % images.length : null));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightbox, next, prev]);

  return (
    <>
      <div className="px-5 py-10 md:px-10 md:py-14 max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-2">From the road</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Gallery</h1>
        <p className="text-sm text-catd-muted mb-10 max-w-lg">
          Photos from across Europe. Click any image to view full size.
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="block w-full overflow-hidden rounded-lg group relative break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={800}
                height={600}
                className="w-full h-auto brightness-[0.85] group-hover:brightness-100 transition-all duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[11px] text-[#ccc] leading-snug">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              width={1400}
              height={1050}
              className="max-h-[78vh] w-auto object-contain rounded-md"
              sizes="90vw"
              priority
            />
            <p className="text-xs text-[#888] mt-3 text-center px-4">{images[lightbox].caption}</p>
            <p className="text-[10px] text-[#444] mt-1">{lightbox + 1} / {images.length}</p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
