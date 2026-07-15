import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Asha — Asha Rodrigues Artistry',
  description: 'Meet Asha Rodrigues — a self-taught watercolour and mixed-media artist based in Frankfurt, painting nature, stillness and the beauty of everywhere she wanders.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-20" aria-label="Hero">
        <div className="relative z-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-start gap-3 mb-8">
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
              <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">The Story Behind The Art</p>
            </div>
            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-8 text-prussian dark:text-[#f0ede8] tracking-tight">
              Art Did Not Find Me —<br/>It Saved Me
            </h1>
            <p className="font-display text-2xl md:text-3xl text-prussian/90 dark:text-[#f0ede8]/80 mb-6 italic">
              Hello, I am Asha — and art gave me back to myself.
            </p>
            <p className="font-body text-lg text-prussian-lt/90 dark:text-[#a8a5a0] font-light max-w-md leading-relaxed">
              A self-taught artist. A lifelong dream. And a brush that changed everything.
            </p>
          </div>
          <div className="relative h-[600px] w-full rounded-full overflow-hidden shadow-2xl">
            <Image src="/images/portfolio/IMG-20260705-WA0140.jpg" alt="Asha in her element" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
          </div>
        </div>
      </section>

      {/* ── THE STORY ── */}
      <section className="py-32 relative" id="story" aria-label="Asha's story">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Story Text */}
          <div className="lg:col-span-7 flex flex-col pt-12">
            <div className="flex items-center justify-start gap-3 mb-8">
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
              <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">My Story</p>
            </div>
            <h2 className="font-title text-4xl md:text-5xl mb-12 leading-tight text-prussian dark:text-[#f0ede8] tracking-wide">
              A Brush. A Blank Sheet.<br/>And Everything Changed.
            </h2>
            <div className="space-y-8 font-body font-light text-lg text-prussian-lt/90 dark:text-[#a8a5a0] leading-[1.8] pl-0 md:pl-8 md:border-l border-prussian/20 dark:border-white/10">
              <p>There are moments in life when the noise becomes too loud. When the world feels too heavy and you search — desperately sometimes — for something that makes sense again. For me, that something was a brush, a sheet of paper and a small, quiet pool of paints.</p>
              <p>Art has been my sanity. My softest place to land when life felt hard. My most honest conversation when words were not enough. In those moments when I felt most lost — the canvas always knew what to do with me.</p>
              <p>There is something impossible to explain to anyone who has not felt it — the way time simply disappears when you paint. You sit down and the whole world outside quietly stops mattering. Hours pass like minutes. That place — I never want to leave it.</p>
              <p>And then there is travel. The moment I step into a new place — a cobbled street in a forgotten town, a coastal path where the sea meets grey stone, a market full of colours I had never thought to put together — something shifts inside me.</p>
              <p>Travel does not just inspire my art. It <em className="font-display italic">fills</em> it. Every journey I take comes home with me — hidden in a colour choice, whispered in a brushstroke, alive in the texture of a leaf I pressed into my sketchbook somewhere far from home.</p>
              <p>The truth is — this dream is not new. I wanted to be an artist long before life asked me to be other things. It was a childhood whisper that never quite went away — through every season, every chapter, every detour, it waited patiently. And finally — I chose to listen.</p>
            </div>
          </div>

          {/* Image Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative mt-12 lg:mt-0">
            <div className="w-full relative h-[450px] rounded-t-full overflow-hidden shadow-xl border border-prussian/10 dark:border-white/10">
              <Image src="/images/portfolio/Cuva.jpg" alt="Asha at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="w-full relative h-[250px] overflow-hidden shadow-lg border border-prussian/10 dark:border-white/10 rounded-br-[4rem]">
                <Image src="/images/portfolio/IMG-20260705-WA0109.jpg" alt="Asha's painting process" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="w-full relative h-[250px] overflow-hidden shadow-lg border border-prussian/10 dark:border-white/10 rounded-tl-[4rem]">
                <Image src="/images/portfolio/IMG-20260705-WA0116.jpg" alt="Asha with her art" fill sizes="25vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="w-full relative h-[350px] rounded-b-[6rem] overflow-hidden shadow-xl border border-prussian/10 dark:border-white/10">
              <Image src="/images/portfolio/IMG_20260621_111019.jpg" alt="Asha in her studio" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* ── CONFESSIONS ── */}
      <section className="py-32 relative bg-white/40 dark:bg-[#0a2d45]/40" id="confessions" aria-label="A few things about Asha">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center justify-start gap-3 mb-6">
                <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
                <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">My Confessions</p>
              </div>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-[#f0ede8] tracking-wide leading-tight">
                A Few Things I Will<br/>Let You In On
              </h2>
            </div>
            <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg max-w-sm pb-2">
              For anyone who wants to know the person behind the paintings — here are six truths.
            </p>
          </div>

          <div className="flex flex-col border-t border-prussian/20 dark:border-white/10">
            {[
              { num: '01', text: 'I cannot start a painting without coffee. Not tea. Not water. Coffee — strong, warm and sitting exactly within arm\'s reach of my brush. This is non-negotiable.' },
              { num: '02', text: 'Nature walks are basically my art school. I have cancelled plans, missed trains and completely lost track of time because a particular leaf or old architecture caught my eye. No regrets.' },
              { num: '03', text: 'I have been known to paint until the room goes completely dark. Not because I forgot to turn the light on — but because I genuinely did not notice the sun had set.' },
              { num: '04', text: 'Some days the art flows like water. Other days the paper and I simply stare at each other. Both days are part of the process. I have learned to be gentle with the quiet days.' },
              { num: '05', text: 'My art supplies budget is best not discussed. What I will say is that a new sheet of beautiful paper brings me a very specific and genuine joy.' },
              { num: '06', text: 'Happy accidents are my favourite technique. The bleed I did not plan. The colour that mixed itself into something I could never have imagined. Some of my best work was painted by the water deciding for itself.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start py-10 md:py-16 border-b border-prussian/10 dark:border-white/[0.06] group hover:bg-white/60 dark:hover:bg-white/[0.04] transition-colors duration-700 px-4 md:px-8 -mx-4 md:-mx-8">
                <span className="font-display text-6xl md:text-8xl text-prussian/10 dark:text-white/10 group-hover:text-prussian/80 dark:group-hover:text-white/60 transition-colors duration-700 w-24 md:w-32 shrink-0 leading-none">{item.num}</span>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light leading-[1.8] font-body text-lg md:text-xl max-w-3xl pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN DO NEXT ── */}
      <section className="py-32 relative bg-white/40 dark:bg-[#0a2d45]/40" id="next-steps" aria-label="What you can do next">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
              <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">Now That You Know A Little About Me</p>
              <div className="w-8 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
            </div>
            <h2 className="font-title text-4xl md:text-5xl mb-6 text-prussian dark:text-[#f0ede8] tracking-wide">Here Is What You Can Do Next</h2>
            <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg">Every door leads somewhere beautiful. Choose yours.</p>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32 max-w-5xl mx-auto">

            {/* CTA 1: Image Left, Text Right */}
            <Link href="/shop" className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 group cursor-pointer block">
              <div className="w-full md:w-1/2 relative h-[450px] overflow-hidden rounded-bl-[4rem] rounded-tr-[4rem] shadow-xl">
                <Image src="/images/portfolio/IMG-20260705-WA0190(1).jpg" alt="Original paintings" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 mb-8 transition-all duration-500 group-hover:w-24" />
                <div className="font-accent text-[10px] tracking-widest uppercase text-prussian-lt/70 dark:text-[#a8a5a0] mb-4">For Walls That Deserve More</div>
                <h3 className="font-title text-4xl lg:text-5xl mb-6 text-prussian dark:text-[#f0ede8] tracking-wide">Enter The Artistry</h3>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg mb-8 leading-relaxed max-w-sm">Original art painted from nature and everywhere I wander. Find the piece that speaks to your space.</p>
                <div className="inline-flex items-center gap-4 text-prussian dark:text-[#f0ede8] font-medium uppercase tracking-widest text-xs group-hover:text-prussian-lt dark:group-hover:text-white transition-colors">
                  Explore Paintings
                  <span className="w-8 h-[1px] bg-prussian dark:bg-[#f0ede8] group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </Link>

            {/* CTA 2: Text Left, Image Right */}
            <Link href="/connect" className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 group cursor-pointer block">
              <div className="w-full md:w-1/2 relative h-[450px] overflow-hidden rounded-br-[4rem] rounded-tl-[4rem] shadow-xl">
                <Image src="/images/portfolio/IMG-20260705-WA0203(1).jpg" alt="Say hello to Asha" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end md:text-right">
                <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 mb-8 transition-all duration-500 group-hover:w-24 md:ml-auto md:mr-0" />
                <div className="font-accent text-[10px] tracking-widest uppercase text-prussian-lt/70 dark:text-[#a8a5a0] mb-4">No Agenda. Just Art.</div>
                <h3 className="font-title text-4xl lg:text-5xl mb-6 text-prussian dark:text-[#f0ede8] tracking-wide">Send A Message</h3>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg mb-8 leading-relaxed max-w-sm">No formalities. Just two people who love art having a conversation. I would love to hear from you.</p>
                <div className="inline-flex items-center gap-4 text-prussian dark:text-[#f0ede8] font-medium uppercase tracking-widest text-xs group-hover:text-prussian-lt dark:group-hover:text-white transition-colors md:flex-row-reverse">
                  Say Hello
                  <span className="w-8 h-[1px] bg-prussian dark:bg-[#f0ede8] group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </>
  );
}
