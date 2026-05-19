"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "/images/gallery/spain-tet-group.jpg", caption: "Northern Spain — the crew on the TET" },
  { src: "/images/gallery/gasgas-mountain.jpg", caption: "Mountain summit — GasGas fleet" },
  { src: "/images/gallery/alpine-lake-rider.jpg", caption: "Alpine lake stop — Italy" },
  { src: "/images/gallery/coastal-selfie.jpg", caption: "Coastal trail riding" },
];

const stats = [
  { n: "100k+", l: "Miles across Europe" },
  { n: "10", l: "Riders in the crew" },
  { n: "50+", l: "Years combined experience" },
  { n: "3", l: "Countries. So far." },
];

const catdWay = [
  { t: "Long days, open variables", d: "We ride long. Cover serious ground. Leave room for the unknown — diversions, weather, discoveries." },
  { t: "Go with the wind", d: "Bad weather west? Go east. Pass closed? Find a better one. A Cat D tour bends to conditions." },
  { t: "We fix it on the road", d: "Coolant from bamboo. Panniers cable-tied. Exhaust zip-tied. If it breaks, we sort it and ride on." },
  { t: "Your Cat D passport", d: "First tour gets you a passport. Every trip after — a new stamp. Your record of everywhere Cat D has taken you." },
  { t: "The element of surprise", d: "Snowstorms. Passes closed. Running out of fuel. Punctures in the middle of nowhere. That's a Cat D tour." },
  { t: "Good crack, no drama", d: "Banter. Stories. Nothing taken to heart. The tales from a Cat D tour last longer than the bike." },
];

export default function Home() {
  const [hi, setHi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHi((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[75vh] min-h-[420px] max-h-[700px] overflow-hidden">
        {heroImages.map((h, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1500ms]"
            style={{ opacity: i === hi ? 1 : 0 }}
          >
            <Image
              src={h.src}
              alt={h.caption}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.35) contrast(1.15)" }}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-catd-dark via-catd-dark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 md:px-10 md:pb-12 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            Every bike comes back<br />
            <span className="text-catd-orange">a write-off.</span>
          </h1>
          <p className="text-sm md:text-base text-catd-muted max-w-lg leading-relaxed mb-2">
            Every rider comes back planning the next one. Cat D Tours — a crew of mates who ride too far, break things, fix them, and do it all again.
          </p>
          <p className="text-xs text-catd-subtle italic">{heroImages[hi].caption}</p>
          <div className="flex gap-1.5 mt-5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHi(i)}
                className="h-[3px] rounded-sm transition-all duration-300"
                style={{ width: i === hi ? 32 : 8, background: i === hi ? "#e87c3e" : "#333" }}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-catd-border">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`py-5 md:py-7 text-center ${
              i % 2 === 0 ? "border-r border-catd-border" : ""
            } ${i < 2 ? "md:border-r border-b md:border-b-0 border-catd-border" : "md:border-r"} last:border-r-0`}
          >
            <div className="text-2xl md:text-3xl font-bold text-catd-orange">{s.n}</div>
            <div className="text-[9px] md:text-[10px] text-catd-subtle tracking-wider uppercase mt-1">{s.l}</div>
          </div>
        ))}
      </section>

      {/* ── Story ── */}
      <section className="px-5 py-12 md:px-10 md:py-16 border-b border-[#161616]">
        <div className="flex gap-8 flex-wrap items-start max-w-5xl mx-auto">
          <div className="flex-1 min-w-[280px]">
            <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">How it started</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-5">
              The name was a joke.<br />The tours are not.
            </h2>
            <p className="text-sm text-catd-muted leading-8 mb-3">
              Ten lads on big bikes riding the Trans Euro Trail across Europe. Coming unstuck more times than anyone cares to count. Bikes dropped in rivers, panniers cable-tied back together, coolant topped up with a bamboo tube.
            </p>
            <p className="text-sm text-catd-muted leading-8 mb-6">
              Someone looked at the wreckage after a brutal day in the Alps and said{" "}
              <span className="text-catd-orange font-semibold">&ldquo;Cat D that — I&rsquo;ll give you a tenner for it.&rdquo;</span>{" "}
              The name stuck. Now every rider gets a passport stamped at every tour.
            </p>
            <Link href="/our-story" className="inline-block text-sm text-catd-orange font-semibold hover:underline">
              Read our full story →
            </Link>
          </div>
          <div className="w-full sm:w-52 shrink-0">
            <Image src="/images/gallery/ronda-bridge.jpg" alt="The crew at Ronda" width={600} height={450} className="rounded-lg w-full" />
            <p className="text-[10px] text-[#444] mt-2">The crew at Ronda, Spain</p>
          </div>
        </div>
      </section>

      {/* ── Team Photo ── */}
      <section className="px-5 py-12 md:px-10 md:py-16 border-b border-[#161616] max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">The crew</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-5">Ten riders and counting</h2>
        <Image
          src="/images/gallery/team-abr.jpg"
          alt="The Cat D Tours crew at the ABR Festival"
          width={1400}
          height={800}
          className="rounded-lg w-full"
          sizes="(max-width: 768px) 100vw, 960px"
        />
        <p className="text-[10px] text-[#444] mt-3">The full crew at the ABR Festival, Ragley Hall</p>
        <Link href="/riders" className="inline-block text-sm text-catd-orange font-semibold hover:underline mt-4">
          Meet the riders →
        </Link>
      </section>

      {/* ── The Cat D Way ── */}
      <section className="px-5 py-12 md:px-10 md:py-16 max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">What makes us different</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The Cat D way</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {catdWay.map((item, i) => (
            <div key={i} className="p-5 bg-catd-card rounded-lg border border-catd-border hover:border-[#252525] transition-colors">
              <div className="text-sm font-semibold text-[#c8b99a] mb-2">{item.t}</div>
              <div className="text-xs text-catd-subtle leading-relaxed">{item.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Opening hours ── */}
      <section className="px-5 py-12 md:px-10 md:py-14 max-w-4xl mx-auto border-t border-catd-border">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-3">Get in touch</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Opening hours</h2>
            <p className="text-sm text-catd-muted leading-7 max-w-md">
              Need to chat about a tour, a route, or just want to talk bikes? We&apos;re around through the week. Weekends — we&apos;re out riding.
            </p>
          </div>
          <div className="bg-catd-card border border-catd-border rounded-xl p-5 md:p-6">
            <div className="space-y-0">
              {[
                { day: "Monday", hours: "9:00 – 17:00", open: true },
                { day: "Tuesday", hours: "9:00 – 17:00", open: true },
                { day: "Wednesday", hours: "9:00 – 17:00", open: true },
                { day: "Thursday", hours: "9:00 – 17:00", open: true },
                { day: "Friday", hours: "9:00 – 17:00", open: true },
                { day: "Saturday", hours: "Closed", open: false },
                { day: "Sunday", hours: "Closed", open: false },
              ].map((d, i, arr) => (
                <div key={d.day} className={`flex items-center justify-between py-2.5 ${i < arr.length - 1 ? "border-b border-[#161616]" : ""}`}>
                  <span className={`text-sm font-semibold ${d.open ? "text-catd-text" : "text-[#666]"}`}>{d.day}</span>
                  <span className={`text-sm ${d.open ? "text-catd-orange font-mono" : "text-[11px] tracking-wider uppercase text-[#555]"}`}>{d.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-12 md:px-10 md:py-16 border-t border-catd-border text-center max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-3">See where we&apos;ve been</h2>
        <p className="text-sm text-catd-muted mb-6 max-w-md mx-auto">
          From the Spanish TET to the Italian Alps — every tour tells a story.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/tours" className="px-6 py-2.5 bg-catd-orange text-catd-dark text-sm font-bold rounded-sm hover:bg-[#d06c30] transition-colors">
            Our Tours
          </Link>
          <Link href="/gallery" className="px-6 py-2.5 border border-[#333] text-catd-text text-sm font-semibold rounded-sm hover:border-catd-subtle transition-colors">
            Gallery
          </Link>
        </div>
      </section>
    </>
  );
}
