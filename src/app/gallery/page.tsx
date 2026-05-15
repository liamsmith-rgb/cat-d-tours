"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/images/gallery/spain-tet-group.jpg", caption: "Northern Spain — the crew lined up on the TET" },
  { src: "/images/gallery/heic-ride-3.jpg", caption: "Bardenas Reales — the fleet lined up at the desert pinnacle, Spain" },
  { src: "/images/gallery/gasgas-mountain.jpg", caption: "Summit stop — GasGas crew with the Pyrenees behind" },
  { src: "/images/gallery/tour-snap-4.jpg", caption: "Picos de Europa — the crew on KTMs with mountains towering behind" },
  { src: "/images/gallery/ronda-bridge.jpg", caption: "The lads at Ronda bridge — one of Spain's most iconic spots" },
  { src: "/images/gallery/winter-ride.jpg", caption: "Below the bridge at Ronda — the full crew on Spanish soil" },
  { src: "/images/gallery/italian-lake-wide.jpg", caption: "Italian lake stop — bikes and mountains" },
  { src: "/images/gallery/lake-group-italy.jpg", caption: "Italian lakeside — the whole crew and their machines" },
  { src: "/images/gallery/lake-crew-closeup.jpg", caption: "Lakeside close-up — the lads with the Italian Alps behind" },
  { src: "/images/gallery/italian-lake-close.jpg", caption: "Lakeside — the crew taking five" },
  { src: "/images/gallery/tour-snap-1.jpg", caption: "Convoy rolling — selfie from the front of the pack on tour" },
  { src: "/images/gallery/coastal-selfie.jpg", caption: "Coastal trail riding — sea, cliffs, and the whole crew grinning" },
  { src: "/images/gallery/ktm-beach-coast.jpg", caption: "KTM 890 parked up on a beach — loaded and ready for the next leg" },
  { src: "/images/gallery/ktm-bridge.jpg", caption: "Alpine bridge crossing — KTM 890 doing what it was built for" },
  { src: "/images/gallery/bridge-stream-ktm.jpg", caption: "Wooden bridge over a stream — KTM 890 and thumbs up" },
  { src: "/images/gallery/mountain-view.jpg", caption: "Alpine bridge stop — KTM 890 Rally on a forest stream crossing" },
  { src: "/images/gallery/alpine-lake-rider.jpg", caption: "Mountain lake pit stop — bikes resting, photos happening" },
  { src: "/images/gallery/scenic-tour.jpg", caption: "Crew selfie — the lads and the mountains behind, sun shining" },
  { src: "/images/gallery/mountain-tunnel.jpg", caption: "TET tunnel exit — Italian Alps at their most dramatic" },
  { src: "/images/gallery/alpine-tour.jpg", caption: "Cobbled mountain tunnel — bikes squeezing through the Alps" },
  { src: "/images/gallery/technical-trail.jpg", caption: "When the trail fights back — technical section in the hills" },
  { src: "/images/gallery/crew-photo.jpg", caption: "Trail queue — the crew navigating a tight rocky descent" },
  { src: "/images/gallery/forest-trail.jpg", caption: "The Alps — crew lined up with a massive mountain backdrop" },
  { src: "/images/gallery/alps-group.jpg", caption: "The Alps — the whole crew with a mountain backdrop" },
  { src: "/images/gallery/ktm-mountain-pass.jpg", caption: "Mountain pass — KTM loaded with panniers, green valleys below" },
  { src: "/images/gallery/rocky-cliffside-bikes.jpg", caption: "Rocky cliffside stop — KTMs parked up with a gorge view" },
  { src: "/images/gallery/wa-ride-14.jpg", caption: "Dam stop — bikes lined up at a mountain reservoir" },
  { src: "/images/gallery/wa-ride-15.jpg", caption: "Head on — KTM 890 on a high-altitude gravel track, clouds rolling in" },
  { src: "/images/gallery/wa-ride-16.jpg", caption: "Ferry selfie — the crew geared up on the boat, adventure begins" },
  { src: "/images/gallery/trail-ride.jpg", caption: "Mountain ridgeline — KTM on a dirt trail with endless views" },
  { src: "/images/gallery/tour-snap-2.jpg", caption: "GasGas trio — three riders and their bikes with the Pyrenees behind" },
  { src: "/images/gallery/tour-snap-3.jpg", caption: "Two mates on KTMs — Picos de Europa, big grins, bigger mountains" },
  { src: "/images/gallery/night-fuel-stop.jpg", caption: "Late night fuel stop — Plenoil station, Spain, still miles to go" },
  { src: "/images/gallery/spain-tour.jpg", caption: "Spanish hilltop — the crew giving thumbs up after a long day" },
  { src: "/images/gallery/bike-recovery-selfie.jpg", caption: "Bike recovery — selfie while pulling the KTM out of the bushes" },
  { src: "/images/gallery/group-tour.jpg", caption: "Deep in the woods — bike stuck under a fallen tree, classic Cat D" },
  { src: "/images/gallery/wa-ride-12.jpg", caption: "River crossing — Yamaha ploughing through the water, full send" },
  { src: "/images/gallery/wa-ride-21.jpg", caption: "Overgrown trail — KTM pushing through dense green woodland" },
  { src: "/images/gallery/heic-ride-4.jpg", caption: "Muddy hillside recovery — bikes stuck in the ruts, digging out" },
  { src: "/images/gallery/heic-ride-1.jpg", caption: "Bikes parked at the hostel — loaded up and ready for tomorrow" },
  { src: "/images/gallery/wa-ride-1.jpg", caption: "Rally mode — Honda CRF tearing through the dust at an event" },
  { src: "/images/gallery/wa-ride-2.jpg", caption: "Woodland enduro — Honda CRF picking through the trees" },
  { src: "/images/gallery/wa-ride-3.jpg", caption: "Open moorland — Honda CRF on the road with rolling hills" },
  { src: "/images/gallery/wa-ride-4.jpg", caption: "KTM 890 kicking up dust — grey skies, full commitment" },
  { src: "/images/gallery/wa-ride-5.jpg", caption: "BMW F 850 GS — ready to ride, parked up on the hillside" },
  { src: "/images/gallery/wa-ride-6.jpg", caption: "Harbour stop — Hondas lined up on the quayside" },
  { src: "/images/gallery/wa-ride-7.jpg", caption: "Town square pit stop — Honda CRF by the statues" },
  { src: "/images/gallery/wa-ride-8.jpg", caption: "Café break — the lads taking five at a stone shelter" },
  { src: "/images/gallery/wa-ride-9.jpg", caption: "Post-ride pints — the whole crew round a pub table, job done" },
  { src: "/images/gallery/wa-ride-10.jpg", caption: "Creg-ny-Baa — Yamaha parked outside the famous TT pub, Isle of Man" },
  { src: "/images/gallery/wa-ride-11.jpg", caption: "Full send — motocross jump, mud everywhere" },
  { src: "/images/gallery/wa-ride-17.jpg", caption: "ABR Festival — bikes lined up in the field at Ragley Hall" },
  { src: "/images/gallery/wa-ride-18.jpg", caption: "Festival beers — the lads enjoying a cold one at an outdoor stage" },
  { src: "/images/gallery/wa-ride-20.jpg", caption: "Helmet-cam selfie — riding through the Spanish countryside" },
  { src: "/images/gallery/heic-ride-2.jpg", caption: "Bardenas Reales — rider standing at the desert rock formation" },
  { src: "/images/gallery/team-abr.jpg", caption: "The full Cat D Tours crew at the ABR Festival, Ragley Hall" },
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
