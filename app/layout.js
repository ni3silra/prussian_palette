import { Playfair_Display, Montserrat, Overpass_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      className={`scroll-smooth ${playfair.variable} ${montserrat.variable} ${overpassMono.variable}`}
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
        {/* Dynamic Premium Motion Background */}
        <div className="fixed inset-0 z-[-5] bg-gradient-to-b from-[#eef2f6] via-[#e2eaf2] to-[#d6e1ec] dark:bg-none dark:bg-[#0a0f14] transition-all duration-700"></div>

        {/* Winter Magic Snowfall (Light Mode Only) */}
        <div className="fixed inset-0 z-[-4] pointer-events-none dark:hidden">
          <div className="absolute inset-0 bg-snow-1 opacity-80"></div>
          <div className="absolute inset-0 bg-snow-2 opacity-100"></div>
          <div className="absolute inset-0 bg-snow-3 opacity-100"></div>
        </div>

        <div className="fixed inset-0 z-[-3] opacity-40 dark:opacity-20 pointer-events-none transition-opacity duration-700">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#a2b5cd]/40 dark:from-[#d4af37]/30 to-transparent rounded-full blur-[100px] animate-slow-spin"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tl from-[#e0e8f0]/60 dark:from-[#2b3a4a]/40 to-transparent rounded-full blur-[120px] animate-reverse-slow-spin"></div>
        </div>

        {/* Premium Paper/Canvas Texture */}
        <div
          className="fixed inset-0 z-[-2] pointer-events-none mix-blend-multiply dark:mix-blend-overlay opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
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
