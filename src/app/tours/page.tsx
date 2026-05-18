import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    name: "Northern Spain TET",
    yr: "2023",
    sub: "Santander to Asturias",
    days: "7 days",
    type: "TET + Road",
    img: "/images/gallery/spain-tet-group.jpg",
    d: "Ferry to Santander, into the mountains of Asturias. TET trails through ancient forests, Picos de Europa, and roads that make you forget everything else exists. Two variants available — full TET off-road through Asturias, or the road riding version covering more ground on pristine tarmac.",
    highlights: ["Picos de Europa", "Asturian forests", "Coastal mountain roads"],
  },
  {
    name: "Italian Alps TET",
    yr: "2025",
    sub: "Sauze d'Oulx, French border & the Ligurian coast",
    days: "8 days",
    type: "TET Expert",
    img: "/images/tours/italy-2025/it-3.jpg",
    d: "Channel Tunnel to the Italian Alps. Military mule tracks at 2,500m, border crossings on gravel, abandoned WWII tunnels carved into mountainsides, alpine lakes, ski-resort passes, and an eight-day descent that ends at Sanremo and Monaco on the Med. The Italian/French Alps TET is elite-level adventure riding — where Cat D Tours bikes come back as actual Cat D write-offs.",
    highlights: ["2,500m military tracks", "Alpine tunnels", "France–Italy border trails", "Ligurian coast finish"],
    href: "/tours/italy-2025",
  },
  {
    name: "Lakes & Alps Grand Tour",
    yr: "2024",
    sub: "Como, Garda & everything between",
    days: "12 days",
    type: "Road + TET",
    img: "/images/gallery/italian-lake-wide.jpg",
    d: "The long way to paradise. Through Belgium, Germany and Austria to Lake Como and Lake Garda. The transit days are part of the adventure — Black Forest, Brenner Pass, and then the Italian Lakes reward you for every mile.",
    highlights: ["Lake Como & Garda", "Black Forest", "Brenner Pass"],
  },
];

export default function ToursPage() {
  return (
    <div className="px-5 py-10 md:px-10 md:py-14 max-w-5xl mx-auto">
      <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-2">Where we&apos;ve been</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Our tours</h1>
      <p className="text-sm text-catd-muted mb-10 max-w-lg">
        Every Cat D tour is a story. Here are the ones we&apos;ve ridden so far — more are always in the works.
      </p>

      <div className="space-y-6">
        {tours.map((t, i) => (
          <article key={i} className="bg-catd-card rounded-xl overflow-hidden border border-catd-border hover:border-[#252525] transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
              <div className="relative h-56 md:h-auto md:min-h-[280px]">
                <Image src={t.img} alt={t.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
              </div>
              <div className="p-5 md:p-7">
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="text-[10px] px-2.5 py-1 rounded-sm bg-catd-orange/15 text-catd-orange font-semibold">{t.yr}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-sm bg-[#151515] text-[#666]">{t.days}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-sm bg-[#151515] text-[#666]">{t.type}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-1">{t.name}</h2>
                <p className="text-xs text-catd-subtle mb-4">{t.sub}</p>
                <p className="text-sm text-[#777] leading-7 mb-5">{t.d}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {t.highlights.map((h) => (
                    <span key={h} className="text-[9px] px-2.5 py-1 rounded-sm bg-[#111] border border-[#1a1a1a] text-[#666]">{h}</span>
                  ))}
                </div>
                {t.href && (
                  <Link href={t.href} className="inline-block text-sm text-catd-orange font-semibold hover:underline">
                    Read the full story →
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 bg-catd-card border border-catd-border rounded-xl text-center">
        <p className="text-sm text-[#888] mb-1">More tours coming soon</p>
        <p className="text-xs text-catd-subtle">We&apos;re always planning the next one. Watch this space.</p>
      </div>
    </div>
  );
}
