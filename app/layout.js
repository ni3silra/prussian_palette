import { Great_Vibes, Cormorant_Garamond, DM_Sans, Overpass_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Image from "next/image";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const overpassMono = Overpass_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-overpass-mono",
  display: "swap",
});

export const metadata = {
  title: "Asha Rodrigues Artistry — Art That Found Me",
  description: "Original watercolour paintings rooted in nature, stillness, and the beauty of everywhere I wander. Based in Frankfurt, reaching the whole world.",
  keywords: "Asha Rodrigues Artistry, watercolour paintings, botanical art, abstract art, Frankfurt artist, buy original paintings",
  openGraph: {
    title: "Asha Rodrigues Artistry — Art That Found Me",
    description: "Original watercolour paintings rooted in nature, stillness and the beauty of everywhere I wander.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
      <html
        lang="en"
        className={`scroll-smooth light ${greatVibes.variable} ${cormorant.variable} ${dmSans.variable} ${overpassMono.variable}`}
        data-scroll-behavior="smooth"
        suppressHydrationWarning
      >
      <body className="antialiased relative font-body text-gray-800 transition-colors duration-300 overflow-x-hidden" suppressHydrationWarning>
        {/* Full canvas sunshine orange/yellow background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-3] pointer-events-none bg-gradient-to-b from-[#fffae6] via-[#ffdcb3] to-[#ffaa80]"></div>

        {/* Fixed Canvas Texture overlay */}
        <div className="fixed inset-0 z-[-2] pointer-events-none mix-blend-multiply opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E"), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 3px)`
        }}>
        </div>
        <ScrollProgress />
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
