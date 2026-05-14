import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cat D Tours — Every bike comes back a write-off",
  description:
    "A crew of mates who ride too far across Europe on the Trans Euro Trail. Adventure motorcycle touring at its finest.",
  openGraph: {
    title: "Cat D Tours — Every bike comes back a write-off",
    description: "Adventure motorcycle touring across Europe. The TET, the Alps, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-catd-dark text-catd-text">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
