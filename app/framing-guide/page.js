import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Framing Guide | Asha Rodrigues Artistry',
  description: 'Everything you need to know about framing your art pieces properly to preserve their beauty and longevity.',
};

export default function FramingGuide() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-24 overflow-hidden">
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

      <Header />

      <div className="max-w-5xl mx-auto px-6 mt-4 md:mt-8">
        {/* Header Section */}
        <div className="text-center mb-24 md:mb-40">
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-prussian dark:text-ivory mb-8 leading-tight drop-shadow-sm">
            A Guide to Framing <br />
            <span className="italic text-[#b8860b] dark:text-gold">Your Artwork</span>
          </h1>
          <p className="font-body text-lg md:text-2xl font-light text-prussian/80 dark:text-white/80 max-w-2xl mx-auto leading-relaxed border-t border-prussian/10 dark:border-white/10 pt-8">
            Framing well is the final act of care for a painting you love. Here is everything you need to know — simply and without overthinking it.
          </p>
        </div>

        {/* Timeline Content Body */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Wire Line */}
          <div className="absolute left-[39px] md:left-[59px] top-[40px] bottom-[100px] w-[2px] bg-gradient-to-b from-prussian/30 via-prussian/10 to-transparent dark:from-gold/50 dark:via-gold/20 dark:to-transparent" />

          {/* STEP 01 */}
          <div className="relative flex gap-8 md:gap-16 mb-24 md:mb-32">
            {/* Bubble */}
            <div className="flex-shrink-0 relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#f4f2eb] dark:bg-[#1f1e1d] border border-prussian/30 dark:border-gold/40 flex items-center justify-center shadow-xl">
              <span className="font-display text-3xl md:text-5xl text-[#b8860b] dark:text-gold">01</span>
            </div>
            
            {/* Content */}
            <div className="pt-2 md:pt-6 flex-1 prose prose-xl md:prose-2xl prose-prussian dark:prose-invert font-body font-light text-prussian/90 dark:text-white/80 leading-relaxed">
              <h2 className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-prussian dark:text-ivory mb-8">Understand Your Artwork</h2>
              
              <h3 className="font-display text-2xl text-prussian dark:text-gold mb-2 mt-8">Framing Prints</h3>
              <p>
                Standard prints fit neatly into standard frame sizes — IKEA and most high street frames work perfectly. Simply place your print behind the existing mat, secure with acid-free tape and it is ready to hang. Simple. Affordable. Done in minutes.
              </p>

              <h3 className="font-display text-2xl text-prussian dark:text-gold mb-2 mt-12">Framing Original Watercolours</h3>
              <p>Always frame watercolours under glass or acrylic glass. Look specifically for UV-protective glass which prevents fading over time. This is the single most important decision you will make for the longevity of the work.</p>
              
              <h4 className="font-accent text-xs tracking-widest uppercase text-prussian/60 dark:text-white/50 mt-8 mb-2">A Mat is Essential</h4>
              <p>A mat lifts the painting away from the glass and lets it breathe visually within the frame. Always choose white or off-white — nothing else comes close for enhancing the work without competing with it.</p>
              
              <h4 className="font-accent text-xs tracking-widest uppercase text-prussian/60 dark:text-white/50 mt-8 mb-2">The Deckled Edge</h4>
              <p>My original paintings are made on fine art watercolour paper with naturally uneven edges. Some of you will love to display these edges proudly by using a mat that reveals rather than conceals them. If this appeals to you, simply ask your framer to cut the mat opening wide enough to show the full edge of the paper.</p>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="relative flex gap-8 md:gap-16 mb-24 md:mb-32">
            {/* Bubble */}
            <div className="flex-shrink-0 relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#f4f2eb] dark:bg-[#1f1e1d] border border-prussian/30 dark:border-gold/40 flex items-center justify-center shadow-xl">
              <span className="font-display text-3xl md:text-5xl text-[#b8860b] dark:text-gold">02</span>
            </div>
            
            {/* Content */}
            <div className="pt-2 md:pt-6 flex-1 prose prose-xl md:prose-2xl prose-prussian dark:prose-invert font-body font-light text-prussian/90 dark:text-white/80 leading-relaxed">
              <h2 className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-prussian dark:text-ivory mb-8">Choosing Your Frame</h2>
              
              <p className="text-xl md:text-2xl italic text-[#b8860b] dark:text-gold mb-6">When in doubt — reach for wood.</p>
              
              <p>
                A natural wood frame suits almost every interior style and feels completely at home alongside botanical and nature-inspired art. Light oak, warm walnut or raw pine — the grain and warmth of wood echoes the natural world that lives inside the painting itself.
              </p>
              <p>
                For a cohesive feel, match the frame tone to existing wood elements already in your room — floors, shelving or furniture. It pulls the whole space together effortlessly.
              </p>
              
              <div className="mt-8 p-8 bg-prussian/5 dark:bg-white/5 border border-prussian/10 dark:border-white/10 rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b8860b] dark:bg-gold"></div>
                <h3 className="font-display text-2xl text-prussian dark:text-ivory mb-2 mt-0">Want a mat included?</h3>
                <p className="text-base m-0">A well-cut mat gives any painting breathing room and a gallery-quality finish. I offer made-to-measure white and off-white mats cut to fit standard frame sizes, available as an add-on at the time of purchase. Simply select the mat option when ordering and it will arrive ready to drop straight into your chosen frame.</p>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="relative flex gap-8 md:gap-16 mb-24 md:mb-32">
            {/* Bubble */}
            <div className="flex-shrink-0 relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#f4f2eb] dark:bg-[#1f1e1d] border border-prussian/30 dark:border-gold/40 flex items-center justify-center shadow-xl">
              <span className="font-display text-3xl md:text-5xl text-[#b8860b] dark:text-gold">03</span>
            </div>
            
            {/* Content */}
            <div className="pt-2 md:pt-6 flex-1 prose prose-xl md:prose-2xl prose-prussian dark:prose-invert font-body font-light text-prussian/90 dark:text-white/80 leading-relaxed">
              <h2 className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-prussian dark:text-ivory mb-8">Your Framing Options</h2>
              
              <h3 className="font-display text-2xl text-prussian dark:text-gold mb-2 mt-8">Standard Retail Frames</h3>
              <p>IKEA, H&M Home and most home stores carry standard sizes at very accessible prices. A clean simple wood frame from here will serve the work well and suits the natural aesthetic of botanical art beautifully.</p>
              
              <h3 className="font-display text-2xl text-prussian dark:text-gold mb-2 mt-12">Online Framing</h3>
              <p>Several excellent online framers offer quality frames at a fraction of custom pricing. Provide the artwork size and your preferred frame size, assemble at home using acid-free tape. Some services will assemble for you — simply send the artwork and receive it back ready to hang.</p>
              
              <h3 className="font-display text-2xl text-prussian dark:text-gold mb-2 mt-12">Custom Framing</h3>
              <p>Taking your piece to a local frame shop gives you the highest quality result and a completely tailored finish. More of an investment but unbeatable for significant or large pieces. A good local framer will also advise on UV glass and mat options specific to your piece.</p>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="relative flex gap-8 md:gap-16">
            {/* Bubble */}
            <div className="flex-shrink-0 relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#102a45] dark:bg-gold border border-prussian dark:border-gold flex items-center justify-center shadow-xl">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white dark:text-[#102a45]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            
            {/* Content */}
            <div className="pt-2 md:pt-6 flex-1 prose prose-xl md:prose-2xl prose-prussian dark:prose-invert font-body font-light text-prussian/90 dark:text-white/80 leading-relaxed">
              <h2 className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-prussian dark:text-ivory mb-8">One Final Note</h2>
              
              <p className="text-xl md:text-2xl font-light text-[#b8860b] dark:text-gold mb-6 italic">
                However you choose to frame — use acid-free materials throughout.
              </p>
              <p className="mb-8">
                Acid-free tape, acid-free mat board, acid-free backing. These prevent yellowing and deterioration over time and ensure the work remains as beautiful in twenty years as it is today.
              </p>
              <p className="font-title text-2xl text-prussian dark:text-ivory border-l-2 border-[#b8860b] dark:border-gold pl-6">
                A painting that is properly framed and cared for will outlast all of us.
                <br/><br/>
                <span className="font-display text-4xl text-[#b8860b] dark:text-gold">Frame it well.</span>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-32 text-center pb-12">
          <Link href="/" className="inline-block px-10 py-4 text-[10px] font-medium uppercase tracking-[0.3em] bg-[#102a45] dark:bg-gold text-white dark:text-[#102a45] hover:bg-[#1a365d] dark:hover:bg-[#b8860b] transition-all shadow-xl hover:shadow-2xl">
            Return to Gallery
          </Link>
        </div>

      </div>
    </main>
  );
}
