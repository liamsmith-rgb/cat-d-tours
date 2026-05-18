"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const riders = [
  { name: "Neil", bike: "KTM 890" },
  { name: "Eric", bike: "Africa Twin" },
  { name: "Lewis", bike: "KTM 790" },
  { name: "Liam", bike: "KTM 890" },
  { name: "Ricky", bike: "Honda CRF300L" },
  { name: "Bill", bike: "Honda CRF300L" },
  { name: "Dave", bike: "Honda CRF300L" },
];

const chapters = [
  {
    id: "departure",
    label: "Day 1",
    title: "Manchester to Dover",
    sub: "Vans loaded, drone over the White Cliffs",
    body: [
      "Seven riders. Three vans. Bikes strapped down, panniers stacked, a midnight slot booked on the last Channel Tunnel train of the night. The Cat D Italy tour started the way every good road trip starts — with a long drive south and someone shouting they'd forgotten something.",
      "Before the crossing we pulled into Dover for a look at the White Cliffs. Out came the drone, straight through the mouth of an old WWII tunnel cut into the chalk. The footage that came back was unreal — the kind of shot that makes you forget you've still got half of France and all of the Alps left to drive.",
    ],
    img: "/images/tours/italy-2025/it-2.jpg",
    imgCaption: "The crew in the van — Manchester to Dover",
  },
  {
    id: "drive",
    label: "Day 2",
    title: "Through the night to Sauze d'Oulx",
    sub: "Channel Tunnel to the Italian Alps",
    body: [
      "Onto the last train at midnight. France in the dark. Black coffee, tag-team driving, the kind of conversations that only happen at 3am with the cruise control set and 1,400 km of motorway still to go.",
      "By the time the sun came up we were already climbing — the Alps rising up either side of the autoroute, the lads waking up one by one in the back of the vans realising they were finally here. Sauze d'Oulx. A ski town in summer mode. Quiet, perched on the side of a mountain, with the Susa Valley dropping away below it.",
      "Vans parked. Bikes off. The next seven days, no four wheels. Just panniers, a route, and whatever the weather wanted to throw at us.",
    ],
  },
  {
    id: "basecamp",
    label: "Days 3–5",
    title: "Sauze d'Oulx basecamp",
    sub: "Mountain passes, ski slopes, alpine lakes",
    body: [
      "Three days riding out of Sauze d'Oulx. The plan was simple — pick a pass, ride to the top, see what's on the other side. The Italian Alps don't disappoint. Old military mule tracks zig-zagging up to 2,500m. Reservoirs the colour of jade tucked behind ridges. Crumbling stone forts at the summits where soldiers used to watch the French border for movement that never came.",
      "The bikes loved it. The 890s and the Africa Twin handling the rocky climbs, the three CRF 300s flicking through the technical stuff. The drone went up at every pass — there's footage now of all seven of us silhouetted against the Alps, looking like we knew what we were doing.",
      "Every day finished with the same routine — back to the digs, beers on the balcony, plotting the next day on the map.",
    ],
    img: "/images/tours/italy-2025/it-1.jpg",
    imgCaption: "Neil on the KTM 890 — somewhere between Sauze d'Oulx and the French border",
    grid: ["/images/tours/italy-2025/it-5.jpg", "/images/tours/italy-2025/it-8.jpg", "/images/tours/italy-2025/it-15.jpg"],
    gridCaptions: [
      "Alpine lake stop — KTMs and the Africa Twin parked up at the water's edge",
      "High pass cafe — bikes nose-to-nose under the rugged peaks",
      "The famous ibex at the top of the pass — covered in stickers from every rider who's made it up",
    ],
  },
  {
    id: "bar",
    label: "Night out",
    title: "The Everton fan in Sauze d'Oulx",
    sub: "One bar, one barman, an unending stream of music",
    body: [
      "One of the quieter nights we found a small bar tucked away from the main street. Walked in — empty. Then the barman heard the accents. Turns out he was from Liverpool. Everton fan. Hadn't seen another Brit in months.",
      "What followed was four hours of him chatting non-stop, picking songs from his phone, pouring drinks, and telling stories about how he'd ended up running a bar in an Italian ski town. The lads barely got a word in. It was brilliant. He turned a quiet evening into one of the highlights of the trip.",
    ],
    img: "/images/tours/italy-2025/it-9.jpg",
    imgCaption: "The Everton bar in Sauze d'Oulx — quiet night, loud host",
  },
  {
    id: "tunnels",
    label: "Day 6",
    title: "The WWII tunnels",
    sub: "Carved into the mountainsides on the French border",
    body: [
      "There's a network of tunnels on the Italian side of the border, cut by soldiers during the wars and largely abandoned ever since. Some have collapsed. Some you can still ride through. They're narrow — barely room for a cyclist, never mind a fully-loaded 890 — pitch black, dripping, with the temperature dropping ten degrees the second you go in.",
      "You ride through on full beam, panniers scraping the walls, water running down your visor, and you come out the other side onto a balcony of rock with the whole valley dropping away in front of you. There's nothing else like it in adventure riding. You can't unsee it.",
    ],
  },
  {
    id: "fuel",
    label: "Mishap",
    title: "Running out of fuel at altitude",
    sub: "Six bikes coasting downhill, one bloke laughing",
    body: [
      "Somewhere up on the high passes the whole group ran out of fuel. The whole group. Apart from Lewis, who'd filled up earlier and spent the next hour telling everyone about it.",
      "Engines off. Bikes in neutral. Six riders freewheeling down a mountain pass trying to hit a petrol station before the road went flat. Brake pads getting warm, panniers swaying, gravity doing the work. We made it. Just. Filled up, ordered coffee, and pretended we'd planned it that way.",
    ],
  },
  {
    id: "pasta",
    label: "Day 7",
    title: "The Morecambe cafe",
    sub: "Best pasta of the trip, halfway up nowhere",
    body: [
      "After dropping off one of the highest and most technical passes in Europe, we rolled into a tiny cafe perched on the descent. Half-expecting a service-station ham roll. What we got was a woman from Morecambe who'd moved out years ago and was now serving the best plate of pasta any of us had eaten in months.",
      "Sat outside, helmets on the table, bikes ticking as they cooled, surrounded by mountains, listening to a Lancastrian accent describe the menu. Cat D moments.",
    ],
  },
  {
    id: "coast",
    label: "Day 8",
    title: "Down to Sanremo & Monaco",
    sub: "From alpine passes to the Mediterranean",
    body: [
      "The last riding day was a slow descent south, through the mountain passes along the French-Italian border, the temperature climbing every hour. The air changed. Smelt of salt instead of pine.",
      "By the afternoon we were rolling along the Ligurian coast — Sanremo, then on towards Monaco. From 2,500m military tracks to superyachts in 48 hours. Only Cat D.",
    ],
  },
  {
    id: "vineyard",
    label: "Final night",
    title: "The vineyard wedding venue",
    sub: "A dark walk to dinner, dogs barking in the trees",
    body: [
      "The last night we stayed at an old wedding venue surrounded by vineyards. Beautiful place — ivy-covered farmhouse, sundial on the wall, the kind of spot you'd actually want to get married at. Until it got dark.",
      "Then the dogs started. We don't know how many. Big ones. We couldn't see them. We could just hear them, somewhere in the vines, every time we moved. The restaurant was a long walk into town. Pitch black. Dogs barking from every direction. Honestly a bit scary.",
      "Liam and Lewis put dinner on the lads as a thank-you for the week. We ate well, drank well, walked back even quicker than we'd walked in. End of tour.",
    ],
    img: "/images/tours/italy-2025/it-12.jpg",
    imgCaption: "The vineyard wedding venue at night — dogs not pictured",
  },
];

const headlineImage = "/images/tours/italy-2025/it-3.jpg";
const headlineCaption = "The crew at the top — Italian Alps TET, September 2025";

// All images for the bottom gallery
const gallery = [
  { src: "/images/tours/italy-2025/it-1.jpg", caption: "Mountain pass viewpoint" },
  { src: "/images/tours/italy-2025/it-2.jpg", caption: "Van selfie — heading out" },
  { src: "/images/tours/italy-2025/it-3.jpg", caption: "Group photo at the pass" },
  { src: "/images/tours/italy-2025/it-4.jpg", caption: "On the road in the Alps" },
  { src: "/images/tours/italy-2025/it-5.jpg", caption: "Alpine lake stop" },
  { src: "/images/tours/italy-2025/it-6.jpg", caption: "Italian Alps" },
  { src: "/images/tours/italy-2025/it-7.jpg", caption: "Mountain pass riding" },
  { src: "/images/tours/italy-2025/it-8.jpg", caption: "High pass cafe" },
  { src: "/images/tours/italy-2025/it-9.jpg", caption: "The Everton bar" },
  { src: "/images/tours/italy-2025/it-10.jpg", caption: "On tour" },
  { src: "/images/tours/italy-2025/it-11.jpg", caption: "Alpine views" },
  { src: "/images/tours/italy-2025/it-12.jpg", caption: "Vineyard wedding venue at night" },
  { src: "/images/tours/italy-2025/it-13.jpg", caption: "Tour life" },
  { src: "/images/tours/italy-2025/it-14.jpg", caption: "Italian Alps" },
  { src: "/images/tours/italy-2025/it-15.jpg", caption: "The ibex statue at the pass" },
  { src: "/images/tours/italy-2025/it-16.jpg", caption: "Final day on tour" },
];

export default function Italy2025Page() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const next = useCallback(() => {
    setLightbox((c) => (c !== null ? (c + 1) % gallery.length : null));
  }, []);

  const prev = useCallback(() => {
    setLightbox((c) => (c !== null ? (c - 1 + gallery.length) % gallery.length : null));
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
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] max-h-[640px] overflow-hidden">
        <Image
          src={headlineImage}
          alt={headlineCaption}
          fill
          className="object-cover"
          style={{ filter: "brightness(0.5) contrast(1.1)" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-catd-dark via-catd-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 md:px-10 md:pb-12 z-10 max-w-5xl mx-auto">
          <Link href="/tours" className="inline-block text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-4 hover:text-catd-orange transition-colors">
            ← All tours
          </Link>
          <p className="text-[10px] tracking-[0.25em] text-catd-orange uppercase mb-3">September 2025 · 8 days · TET Expert</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            Italian Alps TET<br />
            <span className="text-catd-orange">Channel Tunnel to Monaco.</span>
          </h1>
          <p className="text-sm md:text-base text-catd-muted max-w-2xl leading-relaxed">
            Seven riders, three vans, eight days of pure Alps. Sauze d&apos;Oulx basecamp, WWII tunnels, military tracks at 2,500m, and a descent that ends on the Mediterranean.
          </p>
        </div>
      </section>

      {/* ── Crew & bikes ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The crew</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Seven riders</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {riders.map((r) => (
            <div key={r.name} className="p-4 bg-catd-card rounded-lg border border-catd-border">
              <div className="text-sm font-semibold text-[#c8b99a]">{r.name}</div>
              <div className="text-[11px] text-catd-subtle mt-1">{r.bike}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-catd-subtle mt-6 italic">
          Eric had to peel off slightly early to get back to family. Everyone else did the full eight days, plus the drive.
        </p>
      </section>

      {/* ── Map placeholder ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The route</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Manchester to Monaco, the long way</h2>
        <p className="text-sm text-catd-muted leading-7 mb-6 max-w-2xl">
          Vans to the Channel Tunnel, then south to Sauze d&apos;Oulx in the Italian Alps. Three days riding out from basecamp, then a slow descent along the French–Italian border to Sanremo and the Ligurian coast.
        </p>
        <div className="aspect-[16/9] bg-[#0e0e0e] border border-catd-border rounded-xl flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-3xl mb-2">🗺️</div>
            <p className="text-sm text-[#666]">Map coming soon — Neil&apos;s putting it together</p>
            <p className="text-[10px] text-catd-subtle mt-2 tracking-wider uppercase">Full GPX route to follow</p>
          </div>
        </div>
      </section>

      {/* ── Chapters ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The story</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Eight days, one tour</h2>
        <p className="text-sm text-catd-muted mb-10 max-w-2xl">
          The full breakdown — day by day, story by story. Click any chapter heading on a desktop to jump to it.
        </p>

        {/* Chapter nav */}
        <div className="hidden md:flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#161616]">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-[10px] px-3 py-1.5 rounded-sm bg-[#111] border border-[#1a1a1a] text-[#888] hover:border-catd-orange hover:text-catd-orange transition-colors"
            >
              {c.label} — {c.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {chapters.map((c, i) => (
            <article key={c.id} id={c.id} className="scroll-mt-24">
              <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                <span className="text-[10px] tracking-[0.25em] text-catd-orange uppercase font-semibold">{c.label}</span>
                <span className="text-[10px] text-catd-subtle">Chapter {i + 1} of {chapters.length}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">{c.title}</h3>
              <p className="text-xs text-catd-subtle mb-5">{c.sub}</p>
              <div className="space-y-4">
                {c.body.map((p, pi) => (
                  <p key={pi} className="text-sm text-[#888] leading-8">{p}</p>
                ))}
              </div>
              {c.img && (
                <figure className="mt-7">
                  <Image
                    src={c.img}
                    alt={c.imgCaption || c.title}
                    width={1400}
                    height={900}
                    className="w-full rounded-lg"
                    sizes="(max-width: 768px) 100vw, 960px"
                  />
                  {c.imgCaption && (
                    <figcaption className="text-[10px] text-[#444] mt-2 italic">{c.imgCaption}</figcaption>
                  )}
                </figure>
              )}
              {c.grid && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                  {c.grid.map((g, gi) => (
                    <figure key={gi}>
                      <Image
                        src={g}
                        alt={c.gridCaptions?.[gi] || ""}
                        width={800}
                        height={600}
                        className="w-full rounded-lg aspect-[4/3] object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      {c.gridCaptions?.[gi] && (
                        <figcaption className="text-[10px] text-[#444] mt-2 italic">{c.gridCaptions[gi]}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-6xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">From the road</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Trip gallery</h2>
        <p className="text-sm text-catd-muted mb-8 max-w-lg">
          Every shot from the eight days. Click any image to view full size.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="block overflow-hidden rounded-lg group relative aspect-square"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover brightness-[0.85] group-hover:brightness-100 transition-all duration-300 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Want to ride one with us?</h2>
        <p className="text-sm text-catd-muted mb-6 max-w-md mx-auto">
          Cat D Tours runs every year. The Alps is our biggest. The bikes break. The lads laugh. Every rider comes back with a passport stamp.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/tours" className="px-6 py-2.5 bg-catd-orange text-catd-dark text-sm font-bold rounded-sm hover:bg-[#d06c30] transition-colors">
            See all tours
          </Link>
          <Link href="/riders" className="px-6 py-2.5 border border-[#333] text-catd-text text-sm font-semibold rounded-sm hover:border-catd-subtle transition-colors">
            Meet the crew
          </Link>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].caption}
              width={1400}
              height={1050}
              className="max-h-[78vh] w-auto object-contain rounded-md"
              sizes="90vw"
              priority
            />
            <p className="text-xs text-[#888] mt-3 text-center px-4">{gallery[lightbox].caption}</p>
            <p className="text-[10px] text-[#444] mt-1">{lightbox + 1} / {gallery.length}</p>
          </div>
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
