import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Asha — Asha Rodrigues Artistry',
  description: 'Meet Asha Rodrigues — a self-taught watercolour and mixed-media artist based in Frankfurt, painting nature, stillness and the beauty of everywhere she wanders.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Background matches homepage aesthetic */}
      <div className="fixed inset-0 z-[-5] bg-[#faf9f6] dark:bg-[#1a1918] transition-colors duration-1000"></div>

      <div className="fixed inset-0 z-[-4] opacity-[0.4] dark:opacity-[0.15] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-opacity duration-1000">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="w-full h-full">
          <filter id="watercolor-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#watercolor-noise)" />
        </svg>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-20 pb-12" aria-label="Hero">
        <div className="relative z-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* IMAGE */}
          <div className="w-full relative z-10 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-full group">
              <Image src="/images/portfolio/Portfolio BG removal.png" alt="Asha in her element" width={800} height={1000} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-[3s]" />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full relative z-20 flex flex-col justify-center opacity-0 animate-[slide-out-right_1.2s_ease-out_0.5s_forwards]">
            <div className="flex items-center justify-start gap-3 mb-8">
              <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">The Story Behind The Art</p>
            </div>
            <h1 className="font-title text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-prussian dark:text-ivory tracking-tight drop-shadow-sm">
              Art Did Not Find Me <span className="text-[#b8860b] dark:text-gold italic">It Saved Me</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-prussian/90 dark:text-[#f0ede8]/80 mb-6 italic">
              Hello, I am Asha — and art gave me back to myself.
            </p>
            <p className="font-body text-lg text-prussian-lt/90 dark:text-sage-lt font-light max-w-md leading-relaxed">
              A self-taught artist. A lifelong dream. And a brush that changed everything.
            </p>
          </div>
          
        </div>
      </section>

      {/* ── THE STORY WITH FILM REEL ── */}
      <section className="py-20 md:py-32 relative overflow-hidden" id="story" aria-label="Asha's story">

        {/* Film Reel Animation */}
        <div className="w-full relative mb-20 overflow-hidden py-4 border-y border-prussian/10 dark:border-white/5 bg-white/20 dark:bg-[#0a0f14]/20 backdrop-blur-sm">
          <div className="flex w-[200%] animate-[marquee_40s_linear_infinite]">
            {/* Reel 1 */}
            <div className="flex w-1/2 justify-around items-center px-4 gap-6">
              {[
                "/images/portfolio/IMG-20260705-WA0140.jpg",
                "/images/portfolio/Cuva.jpg",
                "/images/portfolio/IMG-20260705-WA0109.jpg",
                "/images/portfolio/IMG-20260705-WA0116.jpg",
                "/images/portfolio/IMG_20260621_111019.jpg",
              ].map((src, i) => (
                <div key={`reel1-${i}`} className="relative h-64 md:h-80 aspect-[4/5] overflow-hidden shadow-lg border-4 border-white dark:border-[#1a1918] flex-shrink-0">
                  <Image src={src} alt="Process" fill sizes="25vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
            {/* Reel 2 (Clone for infinite loop) */}
            <div className="flex w-1/2 justify-around items-center px-4 gap-6">
              {[
                "/images/portfolio/IMG-20260705-WA0140.jpg",
                "/images/portfolio/Cuva.jpg",
                "/images/portfolio/IMG-20260705-WA0109.jpg",
                "/images/portfolio/IMG-20260705-WA0116.jpg",
                "/images/portfolio/IMG_20260621_111019.jpg",
              ].map((src, i) => (
                <div key={`reel2-${i}`} className="relative h-64 md:h-80 aspect-[4/5] overflow-hidden shadow-lg border-4 border-white dark:border-[#1a1918] flex-shrink-0">
                  <Image src={src} alt="Process" fill sizes="25vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col">
          <div className="flex flex-col mb-12">
            <div className="flex items-center justify-start gap-3 mb-6">
              <div className="w-8 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">My Story</p>
            </div>
            <h2 className="font-title text-4xl md:text-5xl leading-tight text-prussian dark:text-[#f0ede8] tracking-wide">
              A Brush. A Blank Sheet.<br className="md:hidden" /> And Everything Changed.
            </h2>
          </div>

          <div className="w-full border-y md:border border-prussian/10 dark:border-white/10 bg-white/20 dark:bg-[#1a1918]/20 p-6 md:p-12 lg:p-16">
            <div className="columns-1 lg:columns-2 gap-16 space-y-8 font-body font-light text-lg text-prussian-lt/90 dark:text-[#a8a5a0] leading-[1.8] text-justify">
              <p>There are moments in life when the noise becomes too loud. When the world feels too heavy and you search — desperately sometimes — for something that makes sense again. For me, that something was a brush, a sheet of paper and a small, quiet pool of paints.</p>
              <p>Art has been my sanity. My softest place to land when life felt hard. My most honest conversation when words were not enough. In those moments when I felt most lost — the canvas always knew what to do with me.</p>
              <p>There is something impossible to explain to anyone who has not felt it — the way time simply disappears when you paint. You sit down and the whole world outside quietly stops mattering. Hours pass like minutes. That place — I never want to leave it.</p>
              <p>And then there is travel. The moment I step into a new place — a cobbled street in a forgotten town, a coastal path where the sea meets grey stone, a market full of colours I had never thought to put together — something shifts inside me.</p>
              <p>Travel does not just inspire my art. It <em className="font-display italic">fills</em> it. Every journey I take comes home with me — hidden in a colour choice, whispered in a brushstroke, alive in the texture of a leaf I pressed into my sketchbook somewhere far from home.</p>
              <p>The truth is — this dream is not new. I wanted to be an artist long before life asked me to be other things. It was a childhood whisper that never quite went away — through every season, every chapter, every detour, it waited patiently. And finally — I chose to listen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONFESSIONS (3x3 Grid) ── */}
      <section className="py-20 md:py-32 relative bg-transparent" id="confessions" aria-label="A few things about Asha">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:items-center text-center gap-4 mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">My Confessions</p>
              <div className="w-8 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
            </div>
            <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-[#f0ede8] tracking-wide leading-tight">
              A Few Things I Will Let You In On
            </h2>
            <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg max-w-xl mt-4">
              For anyone who wants to know the person behind the paintings — here are six truths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: '01', text: 'I cannot start a painting without coffee. Not tea. Not water. Coffee — strong, warm and sitting exactly within arm\'s reach of my brush. This is non-negotiable.' },
              { num: '02', text: 'Nature walks are basically my art school. I have cancelled plans, missed trains and completely lost track of time because a particular leaf or old architecture caught my eye. No regrets.' },
              { num: '03', text: 'I have been known to paint until the room goes completely dark. Not because I forgot to turn the light on — but because I genuinely did not notice the sun had set.' },
              { num: '04', text: 'Some days the art flows like water. Other days the paper and I simply stare at each other. Both days are part of the process. I have learned to be gentle with the quiet days.' },
              { num: '05', text: 'My art supplies budget is best not discussed. What I will say is that a new sheet of beautiful paper brings me a very specific and genuine joy.' },
              { num: '06', text: 'Happy accidents are my favourite technique. The bleed I did not plan. The colour that mixed itself into something I could never have imagined. Some of my best work was painted by the water deciding for itself.' },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center justify-center text-center p-8 border border-prussian/10 dark:border-white/10 group hover:bg-white/60 dark:hover:bg-white/[0.04] transition-colors duration-700 overflow-hidden">
                <p className="text-prussian/90 dark:text-[#a8a5a0] font-light leading-[1.8] font-body text-lg relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN DO NEXT (Inline / Side-by-Side) ── */}
      <section className="py-20 md:py-32 relative bg-transparent" id="next-steps" aria-label="What you can do next">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">Now That You Know A Little About Me</p>
              <div className="w-8 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
            </div>
            <h2 className="font-title text-4xl md:text-5xl mb-6 text-prussian dark:text-[#f0ede8] tracking-wide">Here Is What You Can Do Next</h2>
            <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg">Every door leads somewhere beautiful. Choose yours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* CTA 1 */}
            <Link href="/shop" className="group flex flex-col bg-white/40 dark:bg-[#1f1e1d]/40 border border-prussian/10 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image src="/images/portfolio/IMG-20260705-WA0190(1).jpg" alt="Original paintings" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col items-center text-center">
                <div className="font-accent text-[10px] tracking-widest uppercase text-[#b8860b] dark:text-gold mb-4">For Walls That Deserve More</div>
                <h3 className="font-title text-3xl mb-4 text-prussian dark:text-[#f0ede8] tracking-wide">Enter The Artistry</h3>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-base mb-8 leading-relaxed max-w-xs mx-auto">Original art painted from nature and everywhere I wander. Find the piece that speaks to your space.</p>
                <div className="inline-flex items-center gap-4 text-prussian dark:text-[#f0ede8] font-medium uppercase tracking-widest text-xs group-hover:text-[#b8860b] dark:group-hover:text-gold transition-colors">
                  Explore Paintings
                </div>
              </div>
            </Link>

            {/* CTA 2 */}
            <Link href="/connect" className="group flex flex-col bg-white/40 dark:bg-[#1f1e1d]/40 border border-prussian/10 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image src="/images/portfolio/IMG-20260705-WA0203(1).jpg" alt="Say hello to Asha" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col items-center text-center">
                <div className="font-accent text-[10px] tracking-widest uppercase text-[#b8860b] dark:text-gold mb-4">No Agenda. Just Art.</div>
                <h3 className="font-title text-3xl mb-4 text-prussian dark:text-[#f0ede8] tracking-wide">Send A Message</h3>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-base mb-8 leading-relaxed max-w-xs mx-auto">No formalities. Just two people who love art having a conversation. I would love to hear from you.</p>
                <div className="inline-flex items-center gap-4 text-prussian dark:text-[#f0ede8] font-medium uppercase tracking-widest text-xs group-hover:text-[#b8860b] dark:group-hover:text-gold transition-colors">
                  Say Hello
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
