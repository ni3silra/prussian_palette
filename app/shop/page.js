import ShopGallery from '@/components/ShopGallery';

export const metadata = {
  title: 'Original Paintings & Prints — Asha Rodrigues Artistry',
  description: 'Original watercolour and mixed-media paintings by Asha Rodrigues Artistry. Each piece is one of a kind — painted from nature, stillness and the beauty of everywhere I wander.',
};

export default function ShopPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-32 relative z-10" aria-label="Shop">

        {/* Background Video Banner */}
        <div className="absolute inset-0 z-0 h-[70vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-paint-moving-in-water-26770-large.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf9] via-transparent to-[#fcfbf9]/50 dark:from-[#0a0f14] dark:via-transparent dark:to-[#0a0f14]/50"></div>
        </div>

        {/* Top Title */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-20 lg:mb-24 h-[60vh] flex flex-col justify-center animate-[fade-in-up_1s_ease-out_forwards]">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-[1px] bg-gold/60 hidden md:block" />
            <p className="font-accent text-xs tracking-[0.4em] uppercase text-gold">The Collection</p>
            <div className="w-16 h-[1px] bg-gold/60 hidden md:block" />
          </div>
          <h1 className="font-light text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-ivory leading-snug max-w-3xl mx-auto font-title italic tracking-wide drop-shadow-sm">
            One Painting. One Story. Forever Yours.
          </h1>
          <p className="font-light text-lg mt-8 text-prussian-lt/90 dark:text-sage-lt leading-relaxed max-w-2xl mx-auto font-display">
            Each piece carries a moment the world offered and I could not let go.
            Explore original watercolours and fine art digital prints.
          </p>
        </div>

        {/* Gallery with Filters */}
        <ShopGallery />

      </section>
    </>
  );
}
