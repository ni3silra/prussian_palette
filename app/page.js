import Link from 'next/link';
import Image from 'next/image';
import ArtworkCard from '@/components/ArtworkCard';

export default function Home() {
  return (
    <>

      {/* ── SECTION 1 — EDITORIAL HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-20" aria-label="Welcome hero">

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center md:items-start pt-10 lg:pt-0 px-4 sm:px-0">

          {/* Column 1: Image */}
          <div className="w-full flex justify-center">
            <div className="group cursor-pointer w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(38,37,36,0.2)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] max-w-[280px] lg:max-w-full">
              <Image
                src="/images/portfolio/Cuva (1).jpg"
                alt="Asha in her studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: The Artist Content */}
          <div className="w-full flex flex-col justify-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
              <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">The Artist</p>
            </div>

            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-4 text-prussian dark:text-[#f0ede8] tracking-wide drop-shadow-sm">
              Hi, I&apos;m Asha.
            </h2>

            <p className="font-body text-base lg:text-lg font-light tracking-wide text-prussian-lt/90 dark:text-[#a8a5a0] leading-relaxed mb-8">
              Art found me when I needed it most. Now I paint nature, stillness and the beauty of everywhere I wander.
            </p>

            <div>
              <Link href="/about" className="group inline-flex items-center justify-center px-8 py-3 bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian rounded-full font-medium transition-all shadow-xl hover:shadow-2xl hover:bg-prussian-lt dark:hover:bg-white dark:ring-1 dark:ring-white/30 text-xs tracking-wide">
                <span>Read The Story</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Quiet Botanicals Content */}
          <div className="w-full flex flex-col justify-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
              <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">Original Artistry</p>
            </div>

            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-4 text-prussian dark:text-[#f0ede8] tracking-wide drop-shadow-sm">
              Quiet Botanicals.<br />
              <span className="text-sage/90 dark:text-sage block my-1">Nature-Led.</span>
              Deeply Personal.
            </h2>

            <p className="font-body text-base lg:text-lg font-light tracking-wide text-prussian-lt/90 dark:text-[#a8a5a0] leading-relaxed mb-8">
              Painted from stillness, from wandering, from love. Art that found me, now finding its way to your home.
            </p>

            <div>
              <Link href="/shop" className="group inline-flex items-center justify-center px-8 py-3 bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian rounded-full font-medium transition-all shadow-xl hover:shadow-2xl hover:bg-prussian-lt dark:hover:bg-white dark:ring-1 dark:ring-white/30 text-xs tracking-wide">
                <span>Enter The Artistry</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── NATURE COLLECTION ── */}
      <section className="py-20 md:py-32 relative z-10 bg-[#eaf0ea]/80 dark:bg-[#0a3a30]/50" aria-label="Nature Collection">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-prussian dark:text-[#f0ede8] tracking-tight">Nature Collection —<br />Grounded &amp; Still</h2>
            </div>
            <Link href="/shop" className="px-6 py-3 glass-panel bg-white/60 dark:bg-white/[0.10] hover:bg-white/80 dark:hover:bg-white/20 rounded-full text-sm font-medium text-prussian dark:text-[#f0ede8] transition-all shadow-md backdrop-blur-xl border border-white/60 dark:border-white/50">
              Explore Nature
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Artwork 1 */}
            <ArtworkCard
              title="A Brief Moment"
              price="€78"
              size="A4 Original Watercolour"
              description={`Inspired by the quiet stillness of early morning walks through misty fields.\n\nThis piece captures the fleeting moment when the sun first breaks through the fog, revealing the subtle colors of nature waking up.\n\nPainted with gentle washes and intricate botanical details, it brings a sense of calm and grounding to any space.`}
              themeColor="#eaf0ea"
              darkThemeColor="#0b3848"
              images={[
                "/images/art/A Brief Moment/1.png",
                "/images/art/A Brief Moment/2.png",
                "/images/art/A Brief Moment/3.png",
                "/images/art/A Brief Moment/4.png",
                "/images/art/A Brief Moment/5.png"
              ]}
            />
            {/* Artwork 2 */}
            <div className="w-full pt-0 md:pt-12">
              <ArtworkCard
                title="Somewhere in Blue"
                price="€78"
                size="A4 Original Watercolour"
                description={`A meditative study of coastal blues and atmospheric depth.\n\nThis painting explores the quiet moments before dusk when the sky and sea blend into a single, breathtaking gradient.\n\nPerfect for bringing a touch of serenity and fluid movement to your walls.`}
                themeColor="#eaf0ea"
                darkThemeColor="#0b3848"
                images={[
                  "/images/art/Somewhere in Blue/1.png",
                  "/images/art/Somewhere in Blue/2.png",
                  "/images/art/Somewhere in Blue/3.png",
                  "/images/art/Somewhere in Blue/4.png"
                ]}
              />
            </div>
            {/* Artwork 3 */}
            <div className="w-full pt-0 md:pt-24">
              <ArtworkCard
                title="Still Standing"
                price="€78"
                size="A4 Original Watercolour"
                description={`A tribute to resilience and the quiet strength found in nature.\n\nCapturing the enduring presence of ancient trees against the elements, this artwork is a reminder of steadfastness.\n\nA grounding piece for any collector.`}
                themeColor="#eaf0ea"
                darkThemeColor="#0b3848"
                images={[
                  "/images/art/Still Standing/1.png",
                  "/images/art/Still Standing/2.png",
                  "/images/art/Still Standing/3.png",
                  "/images/art/Still Standing/4.png"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OCEAN COLLECTION ── */}
      <section className="py-20 md:py-32 relative z-10 bg-[#e6f0f2]/80 dark:bg-[#071828]/50" aria-label="Ocean Collection">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-prussian dark:text-[#f0ede8] tracking-tight">Ocean Collection —<br />Fluid &amp; Deep</h2>
            </div>
            <Link href="/shop" className="px-6 py-3 glass-panel bg-white/60 dark:bg-white/[0.10] hover:bg-white/80 dark:hover:bg-white/20 rounded-full text-sm font-medium text-prussian dark:text-[#f0ede8] transition-all shadow-md backdrop-blur-xl border border-white/60 dark:border-white/50">
              Explore Ocean
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="w-full pt-0 md:pt-12">
              <ArtworkCard
                title="Tidal Shift"
                price="€78"
                size="A4 Original Watercolour"
                description={`An exploration of the ocean's rhythmic energy and changing tides.\n\nThe fluid movement of the water is captured with dynamic brushstrokes, reflecting the ever-changing nature of the sea.\n\nA piece that brings the movement of the ocean indoors.`}
                themeColor="#e6f0f2"
                darkThemeColor="#071828"
                images={[
                  "/images/art/A Brief Moment/1.png",
                  "/images/art/A Brief Moment/2.png",
                  "/images/art/A Brief Moment/3.png",
                  "/images/art/A Brief Moment/4.png",
                  "/images/art/A Brief Moment/5.png"
                ]}
              />
            </div>
            <div className="w-full pt-0 md:pt-24">
              <ArtworkCard
                title="Deep Blue"
                price="€78"
                size="A4 Original Watercolour"
                description={`Plunging into the profound depths of the ocean.\n\nThis painting uses rich, layered indigo and prussian blue tones to convey the mystery and vastness of deep waters.\n\nAn immersive and striking statement piece.`}
                themeColor="#e6f0f2"
                darkThemeColor="#071828"
                images={[
                  "/images/art/Somewhere in Blue/1.png",
                  "/images/art/Somewhere in Blue/2.png",
                  "/images/art/Somewhere in Blue/3.png",
                  "/images/art/Somewhere in Blue/4.png"
                ]}
              />
            </div>
            <div className="w-full">
              <ArtworkCard
                title="Morning Mist"
                price="€78"
                size="A4 Original Watercolour"
                description={`The delicate interplay of fog rolling over the morning sea.\n\nSoft washes of pale blues and greys create an ethereal atmosphere, capturing the calm before the day truly begins.\n\nA perfect piece for a tranquil space.`}
                themeColor="#e6f0f2"
                darkThemeColor="#071828"
                images={[
                  "/images/art/Still Standing/1.png",
                  "/images/art/Still Standing/2.png",
                  "/images/art/Still Standing/3.png",
                  "/images/art/Still Standing/4.png"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOUNTAIN COLLECTION ── */}
      <section className="py-20 md:py-32 relative z-10 bg-[#f2efe9]/80 dark:bg-[#0c2e45]/50" aria-label="Mountain Collection">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-prussian dark:text-[#f0ede8] tracking-tight">Mountain Collection —<br />Quiet Summits</h2>
            </div>
            <Link href="/shop" className="px-6 py-3 glass-panel bg-white/60 dark:bg-white/[0.10] hover:bg-white/80 dark:hover:bg-white/20 rounded-full text-sm font-medium text-prussian dark:text-[#f0ede8] transition-all shadow-md backdrop-blur-xl border border-white/60 dark:border-white/50">
              Explore Mountain
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="w-full pt-0 md:pt-24">
              <ArtworkCard
                title="High Peak"
                price="€78"
                size="A4 Original Watercolour"
                description={`Capturing the awe-inspiring majesty of towering summits.\n\nBold contrasts and crisp edges define the rugged terrain against a clear, expansive sky.\n\nA piece that inspires elevation and clarity.`}
                themeColor="#f2efe9"
                darkThemeColor="#0c2e45"
                images={[
                  "/images/art/A Brief Moment/1.png",
                  "/images/art/A Brief Moment/2.png",
                  "/images/art/A Brief Moment/3.png",
                  "/images/art/A Brief Moment/4.png",
                  "/images/art/A Brief Moment/5.png"
                ]}
              />
            </div>
            <div className="w-full">
              <ArtworkCard
                title="Valley Shadow"
                price="€78"
                size="A4 Original Watercolour"
                description={`The quiet, sheltered spaces between mountains as the sun sets.\n\nDeep, earthy shadows stretch across the valley floor, creating a sense of safety and grounding warmth.\n\nA comforting addition to any room.`}
                themeColor="#f2efe9"
                darkThemeColor="#0c2e45"
                images={[
                  "/images/art/Somewhere in Blue/1.png",
                  "/images/art/Somewhere in Blue/2.png",
                  "/images/art/Somewhere in Blue/3.png",
                  "/images/art/Somewhere in Blue/4.png"
                ]}
              />
            </div>
            <div className="w-full pt-0 md:pt-12">
              <ArtworkCard
                title="Stone Path"
                price="€78"
                size="A4 Original Watercolour"
                description={`A journey through ancient, rocky landscapes.\n\nTextured brushwork brings to life the rough, enduring surface of mountain paths carved over millennia.\n\nA grounding and tactile visual experience.`}
                themeColor="#f2efe9"
                darkThemeColor="#0c2e45"
                images={[
                  "/images/art/Still Standing/1.png",
                  "/images/art/Still Standing/2.png",
                  "/images/art/Still Standing/3.png",
                  "/images/art/Still Standing/4.png"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
