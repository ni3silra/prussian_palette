import ShopGallery from '@/components/ShopGallery';

export const metadata = {
  title: 'Original Paintings & Prints — Asha Rodrigues Artistry',
  description: 'Original watercolour and mixed-media paintings by Asha Rodrigues Artistry. Each piece is one of a kind — painted from nature, stillness and the beauty of everywhere I wander.',
};

export default function ShopPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-32 relative z-10" aria-label="Shop">

        {/* Top Title */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
            <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">The Collection</p>
            <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
          </div>
          <h1 className="font-light text-3xl md:text-4xl lg:text-5xl text-prussian dark:text-[#f0ede8] leading-snug max-w-3xl mx-auto font-title italic tracking-wide">
            One Painting. One Story. Forever Yours.
          </h1>
          <p className="font-light text-lg mt-8 text-prussian-lt/90 dark:text-[#a8a5a0] leading-relaxed max-w-2xl mx-auto font-display">
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
