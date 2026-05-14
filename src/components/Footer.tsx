import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/tours", label: "Tours" },
  { href: "/riders", label: "Riders" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-story", label: "Our Story" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-catd-border">
      <div className="px-5 py-10 md:px-10 md:py-14 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="shrink-0">
            <Image src="/images/logo.png" alt="Cat D Tours" width={146} height={140} className="h-14 w-auto mb-3" />
            <p className="text-xs text-[#444] max-w-[220px] leading-relaxed">
              Every bike comes back a write-off. Every rider comes back for more.
            </p>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-catd-subtle uppercase mb-3">Pages</p>
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-xs text-[#666] hover:text-catd-text transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-catd-subtle uppercase mb-3">The crew</p>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-[#666]">Based across the North of England</p>
                <p className="text-xs text-[#666]">Riding the TET across Europe</p>
                <p className="text-xs text-[#666]">10 riders and counting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#111] px-5 py-4 md:px-10 max-w-6xl mx-auto">
        <p className="text-[10px] text-[#2a2a2a]">Cat D Tours — Built by riders, for riders</p>
      </div>
    </footer>
  );
}
