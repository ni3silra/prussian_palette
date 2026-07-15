import { Great_Vibes, Cormorant_Garamond, DM_Sans, Overpass_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      className={`scroll-smooth ${greatVibes.variable} ${cormorant.variable} ${dmSans.variable} ${overpassMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: reads saved theme and applies .dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pp-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="antialiased relative font-body text-gray-800 dark:text-[#f0ede8] transition-colors duration-300 overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Background gradient — light: warm canvas, dark: deep Prussian Blue */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-3] pointer-events-none bg-gradient-to-b from-[#fffae6] via-[#ffdcb3] to-[#ffaa80] dark:from-[#0d3a58] dark:via-[#0a2d48] dark:to-[#071828]" />

        {/* Texture overlay:
             Light mode — multiply blend darkens paper grain
             Dark mode  — screen blend lightens grain = scratch/chalk marks on Prussian Blue */}
        <div
          className="fixed inset-0 z-[-2] pointer-events-none mix-blend-multiply dark:mix-blend-screen opacity-35 dark:opacity-[0.18]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E"), repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)`,
          }}
        />

        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main id="main-content" className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
