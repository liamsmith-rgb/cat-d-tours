"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/riders", label: "Riders" },
  { href: "/gallery", label: "Gallery" },
  { href: "/our-story", label: "Our Story" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-catd-border bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 py-3 md:px-8 max-w-6xl mx-auto">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Cat D Tours"
              width={146}
              height={140}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-xs px-3.5 py-1.5 rounded-sm transition-all font-serif ${
                  pathname === l.href
                    ? "bg-[#181818] text-catd-text font-semibold"
                    : "text-[#666] hover:text-[#aaa]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 z-[70]"
            aria-label="Menu"
          >
            <span className={`block h-[2px] w-5 bg-catd-text transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-catd-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-catd-text transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — outside nav to escape its stacking context */}
      <div className={`md:hidden fixed inset-0 top-[57px] z-[60] bg-[#0a0a0a] transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col px-6 py-8 gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-lg py-3 border-b border-[#1a1a1a] transition-colors ${
                pathname === l.href
                  ? "text-catd-orange font-semibold"
                  : "text-[#888] hover:text-catd-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <p className="text-[10px] text-[#333] mt-8">Every bike comes back a write-off.</p>
        </div>
      </div>
    </>
  );
}
