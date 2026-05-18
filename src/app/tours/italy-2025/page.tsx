"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

const riders = [
  { name: "Neil", bike: "KTM 890", href: "/riders#neil" },
  { name: "Eric", bike: "Africa Twin" },
  { name: "Lewis", bike: "KTM 790", href: "/riders#lewis" },
  { name: "Liam", bike: "KTM 890", href: "/riders#liam" },
  { name: "Ricky", bike: "Honda CRF300L", href: "/riders#ricky" },
  { name: "Bill", bike: "Honda CRF300L", href: "/riders#bill" },
  { name: "Dave", bike: "Honda CRF300L", href: "/riders#dave" },
];

// Route waypoints — approximate coordinates, in tour order
const routePoints: Array<{ name: string; coords: [number, number]; type: "start" | "stop" | "peak" | "end" }> = [
  { name: "Manchester (Start)", coords: [53.4808, -2.2426], type: "start" },
  { name: "Dover — White Cliffs", coords: [51.1295, 1.3089], type: "stop" },
  { name: "Sauze d'Oulx — Basecamp", coords: [45.0287, 6.8581], type: "stop" },
  { name: "Colle del Sommeiller — 3,000m (highest off-road in Europe)", coords: [45.155, 6.927], type: "peak" },
  { name: "Assietta Trails 1 & 2", coords: [45.039, 6.945], type: "peak" },
  { name: "Fort Exilles — 'Man in the Iron Mask' castle", coords: [45.0966, 6.9303], type: "stop" },
  { name: "Limone Piemonte", coords: [44.2049, 7.5774], type: "stop" },
  { name: "Via del Sale — the Salt Road (drone hairpin)", coords: [44.115, 7.665], type: "peak" },
  { name: "Triora — the Witch Village", coords: [43.9931, 7.7669], type: "stop" },
  { name: "Sanremo — Ligurian Coast", coords: [43.8159, 7.7762], type: "stop" },
  { name: "French Alps tarmac passes", coords: [44.45, 6.9], type: "peak" },
  { name: "Cascina La Commenda — Peveragno (final night)", coords: [44.3286, 7.6286], type: "end" },
];

const hotels = [
  {
    name: "Hotel K2",
    location: "Sauze d'Oulx, Italy",
    address: "Via Villaggio Alpino 1, 10050",
    nights: "Basecamp — first stay",
    rating: "8.6",
    stars: 3,
    note: "Right in Sauze d'Oulx, perched on the side of the Susa Valley. The launch pad for the Sommeiller and Assietta days.",
  },
  {
    name: "Du Parc Hotel",
    location: "Sauze d'Oulx, Italy",
    address: "Via Monfol 9, 10050",
    nights: "Basecamp — second stay",
    rating: "8.6",
    stars: 3,
    note: "Same town, different digs. Quieter end of Sauze, parking for the bikes, decent restaurant attached.",
  },
  {
    name: "Riserva Bianca Limone Hotel & SPA",
    location: "Limone Piemonte, Italy",
    address: "Panice Soprana 95, 12015",
    nights: "Middle of tour",
    rating: "8.3",
    stars: 4,
    note: "The luxury stop. After two days at altitude on the trails, the spa was earned. Riding from here gave us the Via del Sale and the Salt Road hairpins.",
  },
  {
    name: "Cascina La Commenda",
    location: "Peveragno, Italy",
    address: "Strada Vecchia di S. Margherita 5 (SP 42), 12016",
    nights: "Final night",
    rating: "9.5",
    stars: 3,
    note: "The vineyard wedding venue. Ivy-covered farmhouse, sundial on the wall, dogs barking from the trees after dark. Liam and Lewis put dinner on the lads — end of tour.",
  },
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
    sub: "Channel Tunnel to the Italian/French border",
    body: [
      "Onto the last train at midnight. France in the dark. Black coffee, tag-team driving, the kind of conversations that only happen at 3am with the cruise control set and 1,400 km of motorway still to go.",
      "By the time the sun came up we were already climbing — the Alps rising up either side of the autoroute, the lads waking up one by one in the back of the vans realising they were finally here. Sauze d'Oulx. A ski town in summer mode. Quiet, perched on the side of a mountain, with the Susa Valley dropping away below it. Right on the Italian/French border. Our basecamp for the first half of the trip.",
      "Vans parked at Hotel K2. Bikes off. The next seven days, no four wheels. Just panniers, a route, and whatever the weather wanted to throw at us.",
    ],
  },
  {
    id: "sommeiller",
    label: "Day 3",
    title: "Colle del Sommeiller — 3,000m",
    sub: "The highest off-road track in Europe",
    body: [
      "Day one on the bikes and Neil pointed us straight up the Sommeiller. The highest off-road track in Europe. 3,000 metres of altitude up a relentless gravel zig-zag carved into the side of an alpine massif. Switchback after switchback, the air getting thinner, the bikes starting to feel it before we did.",
      "At the top — a glacier-fed lake, a stone refuge, and a view that goes on forever. You can see into France on one side and back down into Italy on the other. There's a smell up there that's pure altitude. Cold rock, dry wind, no trees. The drone went up and the footage doesn't do it justice.",
      "Coming down was almost harder than going up — loose gravel, fully-loaded panniers, six riders trying not to be the one that took the fall the lads would remember forever. We made it. Just.",
    ],
    img: "/images/tours/italy-2025/it-1.jpg",
    imgCaption: "Neil on the 890 — somewhere on the descent off the Sommeiller",
  },
  {
    id: "assietta",
    label: "Day 4",
    title: "Assietta Trails & Fort Exilles",
    sub: "Past the castle of the Man in the Iron Mask",
    body: [
      "The Assietta is a network of military mule tracks running along the ridgelines above Sauze d'Oulx, dropping in and out of stone forts at 2,500m where Italian soldiers used to watch the French border for movement that never came. We rode Assietta 1 and 2 back to back — a full day on the tops.",
      "On the way down we passed Fort Exilles — the castle of the Man in the Iron Mask. The one from the book. It sits above the road like something out of a film, walls bolted into the rock, and you can't help but slow down and take it in. We pulled up in the lay-by under the walls and got the drone up for one of the best shots of the trip.",
    ],
    img: "/images/tours/italy-2025/it-3.jpg",
    imgCaption: "The crew at the top — rugged Italian Alps behind",
    grid: ["/images/tours/italy-2025/it-5.jpg", "/images/tours/italy-2025/it-8.jpg", "/images/tours/italy-2025/it-15.jpg"],
    gridCaptions: [
      "Alpine lake stop along the Assietta",
      "High-pass cafe — bikes nose-to-nose under the rugged peaks",
      "The ibex statue at the top of the pass — covered in stickers from every rider who's made it up",
    ],
  },
  {
    id: "bar",
    label: "Night out",
    title: "The Everton fan in Sauze d'Oulx",
    sub: "One bar, one barman, an unending stream of music",
    body: [
      "One of the quieter nights in Sauze we found a small bar tucked away from the main street. Walked in — empty. Then the barman heard the accents. Turns out he was from Liverpool. Everton fan. Hadn't seen another Brit in months.",
      "What followed was four hours of him chatting non-stop, picking songs from his phone, pouring drinks, and telling stories about how he'd ended up running a bar in an Italian ski town. The lads barely got a word in. It was brilliant. He turned a quiet evening into one of the highlights of the trip.",
    ],
    img: "/images/tours/italy-2025/it-9.jpg",
    imgCaption: "The Everton bar in Sauze d'Oulx — quiet night, loud host",
  },
  {
    id: "limone",
    label: "Day 5",
    title: "South to Limone Piemonte",
    sub: "From the Susa Valley down to the Piemonte region",
    body: [
      "Time to move basecamp. We packed the panniers and rode south out of Sauze, down through the Susa Valley, into the Piemonte region. Mountain roads the whole way — endless switchbacks, alpine meadows, the temperature climbing every hour as we dropped altitude.",
      "Limone Piemonte sits below the Maritime Alps. A proper Italian mountain town. We pulled into the Riserva Bianca Limone Hotel & SPA — four-star, full spa, the lot. After two days on the Sommeiller and Assietta, the steam room was earned.",
    ],
  },
  {
    id: "salt-road",
    label: "Day 6",
    title: "Via del Sale — the Salt Road",
    sub: "Drone footage on the high hairpin",
    body: [
      "The Via del Sale — the old Salt Road that smugglers used to move salt between the coast and the inland villages. It runs along the ridge of the Maritime Alps, all gravel, all altitude, with sheer drops on one side and rock walls on the other.",
      "Halfway along there's a hairpin that wraps around the side of a mountain with nothing below it. We held the bikes there, got the drone up, and captured what's probably the best single shot of the entire trip — the whole crew strung out along the hairpin with the valley falling away into the distance. Goosebumps stuff.",
    ],
  },
  {
    id: "fuel",
    label: "Mishap",
    title: "Running out of fuel at altitude",
    sub: "Six bikes coasting downhill, one bloke laughing",
    body: [
      "Somewhere on the descent off the Salt Road the whole group ran out of fuel. The whole group. Apart from Lewis, who'd filled up earlier and spent the next hour telling everyone about it.",
      "Engines off. Bikes in neutral. Six riders freewheeling down a mountain pass trying to hit a petrol station before the road went flat. Brake pads getting warm, panniers swaying, gravity doing the work. We made it. Just. Filled up, ordered coffee, and pretended we'd planned it that way.",
    ],
  },
  {
    id: "pasta",
    label: "Lunch",
    title: "The Morecambe cafe",
    sub: "Best pasta of the trip, halfway up nowhere",
    body: [
      "Dropping off one of the highest and most technical passes of the week, we rolled into a tiny cafe perched on the descent. Half-expecting a service-station ham roll. What we got was a woman from Morecambe who'd moved out years ago and was now serving the best plate of pasta any of us had eaten in months.",
      "Sat outside, helmets on the table, bikes ticking as they cooled, surrounded by mountains, listening to a Lancastrian accent describe the menu. Cat D moments.",
    ],
  },
  {
    id: "triora-sanremo",
    label: "Day 7",
    title: "Triora to Sanremo",
    sub: "The witch village down to the Mediterranean",
    body: [
      "Triora is a tiny village clinging to a mountainside in the Ligurian hills. Famous for its witch trials in the 1500s — locals were tortured and burned, and the village leans into it now. Narrow stone streets, witch symbols on every door, a museum dedicated to the trials. We stopped, walked the alleys, drank a coffee in the square, and got out before sundown.",
      "From Triora we dropped towards the coast — the air changed, smelt of salt instead of pine. By the afternoon we were rolling along the Ligurian coast at Sanremo. From 3,000m gravel to the Mediterranean in a day. Only Cat D.",
    ],
  },
  {
    id: "france-back",
    label: "Day 8",
    title: "Back to Sauze via the French Alps",
    sub: "Epic high tarmac passes home",
    body: [
      "The last riding day was a long, glorious tarmac loop. We crossed back over into France and rode some of the most ridiculous high mountain passes in Europe on the way back to Sauze d'Oulx. Pure tarmac, hairpin after hairpin, alpine villages, the bikes finally getting to stretch their legs after a week of gravel.",
      "By evening we were back at Sauze. Bikes tired. Riders happy. The next morning we drove the long road home — but not before one last night.",
    ],
  },
  {
    id: "vineyard",
    label: "Final night",
    title: "The vineyard at Cascina La Commenda",
    sub: "A dark walk to dinner, dogs barking in the trees",
    body: [
      "The last night we stayed at Cascina La Commenda in Peveragno — an old wedding venue surrounded by vineyards. Beautiful place — ivy-covered farmhouse, sundial on the wall, the kind of spot you'd actually want to get married at. Until it got dark.",
      "Then the dogs started. We don't know how many. Big ones. We couldn't see them. We could just hear them, somewhere in the vines, every time we moved. The restaurant was a long walk into town. Pitch black. Dogs barking from every direction. Honestly a bit scary.",
      "Liam and Lewis put dinner on the lads as a thank-you for the week. We ate well, drank well, walked back even quicker than we'd walked in. End of tour.",
    ],
    img: "/images/tours/italy-2025/it-12.jpg",
    imgCaption: "Cascina La Commenda at night — dogs not pictured",
  },
];

const headlineImage = "/images/tours/italy-2025/it-3.jpg";
const headlineCaption = "The crew at the top — Italian Alps TET, September 2025";

const gallery = [
  { src: "/images/tours/italy-2025/it-1.jpg", caption: "Descent off the Sommeiller" },
  { src: "/images/tours/italy-2025/it-2.jpg", caption: "Van selfie — heading out from Manchester" },
  { src: "/images/tours/italy-2025/it-3.jpg", caption: "Group photo on the Assietta" },
  { src: "/images/tours/italy-2025/it-4.jpg", caption: "On the road in the Italian Alps" },
  { src: "/images/tours/italy-2025/it-5.jpg", caption: "Alpine lake stop" },
  { src: "/images/tours/italy-2025/it-6.jpg", caption: "Italian Alps" },
  { src: "/images/tours/italy-2025/it-7.jpg", caption: "Mountain pass riding" },
  { src: "/images/tours/italy-2025/it-8.jpg", caption: "High pass cafe — pre-pasta" },
  { src: "/images/tours/italy-2025/it-9.jpg", caption: "The Everton bar in Sauze" },
  { src: "/images/tours/italy-2025/it-10.jpg", caption: "On tour" },
  { src: "/images/tours/italy-2025/it-11.jpg", caption: "Alpine views" },
  { src: "/images/tours/italy-2025/it-12.jpg", caption: "Cascina La Commenda at night" },
  { src: "/images/tours/italy-2025/it-13.jpg", caption: "Tour life" },
  { src: "/images/tours/italy-2025/it-14.jpg", caption: "Italian Alps" },
  { src: "/images/tours/italy-2025/it-15.jpg", caption: "The ibex statue at the pass" },
  { src: "/images/tours/italy-2025/it-16.jpg", caption: "Final day on tour" },
];

// Minimal Leaflet type — we load via CDN at runtime
type LeafletNS = {
  map: (el: HTMLElement, opts?: Record<string, unknown>) => LMap;
  tileLayer: (url: string, opts?: Record<string, unknown>) => { addTo: (m: LMap) => unknown };
  circleMarker: (latlng: [number, number], opts?: Record<string, unknown>) => LMarker;
  polyline: (latlngs: [number, number][], opts?: Record<string, unknown>) => { addTo: (m: LMap) => unknown };
};
type LMap = {
  fitBounds: (bounds: [number, number][], opts?: Record<string, unknown>) => unknown;
  setView: (center: [number, number], zoom: number) => unknown;
  invalidateSize: () => unknown;
};
type LMarker = {
  addTo: (m: LMap) => LMarker;
  bindPopup: (html: string) => LMarker;
};
declare global {
  interface Window {
    L?: LeafletNS;
  }
}

function RouteMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current || !mapRef.current) return;

    // Load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const css = document.createElement("link");
      css.id = "leaflet-css";
      css.rel = "stylesheet";
      css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(css);
    }

    const initMap = () => {
      const L = window.L;
      if (!L || !mapRef.current || initialised.current) return;
      initialised.current = true;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        dragging: true,
      });

      // Default centre — covers the UK to Italy span
      map.setView([47.5, 4.5], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      const colours = { start: "#22c55e", stop: "#e87c3e", peak: "#eab308", end: "#ef4444" };

      const latlngs: [number, number][] = [];
      routePoints.forEach((p) => {
        const colour = colours[p.type];
        const marker = L.circleMarker(p.coords, {
          radius: 7,
          fillColor: colour,
          color: "#000",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.95,
        }).addTo(map);
        marker.bindPopup(`<strong style="color:#111">${p.name}</strong>`);
        latlngs.push(p.coords);
      });

      // Draw route polyline (Manchester → Dover dashed since it's a van transit)
      const vanLeg = latlngs.slice(0, 3); // Manchester → Dover → Sauze
      L.polyline(vanLeg, { color: "#888", weight: 2, dashArray: "6, 8" }).addTo(map);

      const rideLeg = latlngs.slice(2); // Sauze onwards is on the bikes
      L.polyline(rideLeg, { color: "#e87c3e", weight: 3.5, opacity: 0.9 }).addTo(map);

      // Fit to all points — wait for layout to settle so dimensions are real
      setTimeout(() => {
        map.invalidateSize();
        map.fitBounds(latlngs, { padding: [40, 40] });
      }, 200);
    };

    if (window.L) {
      initMap();
    } else {
      const existing = document.getElementById("leaflet-script") as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", initMap);
      } else {
        const script = document.createElement("script");
        script.id = "leaflet-script";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = initMap;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <>
      <div ref={mapRef} className="w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-catd-border bg-[#0e0e0e]" style={{ zIndex: 0 }} />
      <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-catd-subtle">
        <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" /> Start (Manchester)</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#e87c3e]" /> Stop</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" /> High pass / peak</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" /> Final night</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-[2px] bg-[#888]" /> Van transit</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-[2px] bg-catd-orange" /> Ride leg</span>
      </div>
    </>
  );
}

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
            <span className="text-catd-orange">Manchester to Monaco.</span>
          </h1>
          <p className="text-sm md:text-base text-catd-muted max-w-2xl leading-relaxed">
            Seven riders, three vans, eight days of pure Alps. Colle del Sommeiller at 3,000m, the Assietta trails, Fort Exilles, the Via del Sale Salt Road, Triora witches, and a descent to Sanremo before looping back through the French Alps.
          </p>
        </div>
      </section>

      {/* ── Crew & bikes ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The crew</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Seven riders</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {riders.map((r) =>
            r.href ? (
              <Link
                key={r.name}
                href={r.href}
                className="p-4 bg-catd-card rounded-lg border border-catd-border hover:border-catd-orange transition-colors group"
              >
                <div className="text-sm font-semibold text-[#c8b99a] group-hover:text-catd-orange transition-colors">
                  {r.name} <span className="text-catd-orange/70 group-hover:text-catd-orange">→</span>
                </div>
                <div className="text-[11px] text-catd-subtle mt-1">{r.bike}</div>
              </Link>
            ) : (
              <div key={r.name} className="p-4 bg-catd-card rounded-lg border border-catd-border">
                <div className="text-sm font-semibold text-[#c8b99a]">{r.name}</div>
                <div className="text-[11px] text-catd-subtle mt-1">{r.bike}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── Route map ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The route</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Manchester to Monaco, the long way</h2>
        <p className="text-sm text-catd-muted leading-7 mb-6 max-w-2xl">
          Vans from Manchester to the Channel Tunnel, then south to Sauze d&apos;Oulx in the Italian Alps. Two days of basecamp riding on the Sommeiller and Assietta, then south to Limone Piemonte for the Via del Sale Salt Road, Triora and Sanremo, before looping back through the French Alps. Click any pin for details.
        </p>
        <RouteMap />
      </section>

      {/* ── Video ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">Watch the tour</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">The full video</h2>
        <p className="text-sm text-catd-muted leading-7 mb-6 max-w-2xl">
          Eight days condensed into one ride. Drone footage from the Sommeiller, the Salt Road hairpin, the mountain passes, alpine lakes, and the descent to Monaco. Best watched full-screen with the sound on.
        </p>
        <div className="relative aspect-video rounded-xl overflow-hidden border border-catd-border bg-black shadow-[0_0_60px_-20px_rgba(232,124,62,0.3)]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/w71Sm-r06mg?rel=0"
            title="Cat D Tours — Italian Alps TET 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-[11px] text-[#666] italic">
            Filmed across the eight-day Cat D Italy tour, September 2025.
          </p>
          <a
            href="https://youtu.be/w71Sm-r06mg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-catd-orange/15 border border-catd-orange/40 rounded-sm text-xs font-semibold text-catd-orange hover:bg-catd-orange hover:text-catd-dark transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch in 4K on YouTube →
          </a>
        </div>
        <p className="text-[10px] text-catd-subtle mt-3 tracking-wider uppercase">
          Tip: Click the YouTube button above to watch in full 4K quality
        </p>
      </section>

      {/* ── Chapters ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The story</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Eight days, one tour</h2>
        <p className="text-sm text-catd-muted mb-10 max-w-2xl">
          The full breakdown — day by day, story by story.
        </p>

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

      {/* ── Hotels ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-5xl mx-auto border-b border-[#161616]">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">Where we stayed</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Four hotels, one tour</h2>
        <p className="text-sm text-catd-muted leading-7 mb-8 max-w-2xl">
          The digs across the eight days — basecamp accommodation in Sauze d&apos;Oulx for the first half, the spa stop in Limone Piemonte, and a vineyard finish at Cascina La Commenda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hotels.map((h) => (
            <div key={h.name} className="p-5 bg-catd-card rounded-lg border border-catd-border">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-base font-bold text-catd-text">{h.name}</h3>
                  <p className="text-[11px] text-catd-subtle mt-0.5">{h.location}</p>
                </div>
                <div className="shrink-0 px-2 py-1 bg-catd-orange/15 rounded text-[11px] font-bold text-catd-orange">
                  {h.rating}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] text-[#eab308]">{"★".repeat(h.stars)}</span>
                <span className="text-[10px] text-catd-subtle">·</span>
                <span className="text-[10px] text-catd-orange tracking-wider uppercase">{h.nights}</span>
              </div>
              <p className="text-[11px] text-[#555] italic mb-3">{h.address}</p>
              <p className="text-xs text-[#888] leading-6">{h.note}</p>
            </div>
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
