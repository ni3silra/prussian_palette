import Link from 'next/link';
import Image from 'next/image';
import { journals } from '@/lib/journal';

export const metadata = {
  title: 'Journal — Asha Rodrigues Artistry',
  description: 'Thoughts, insights, and studio stories on art, watercolor, and the creative process.',
};

export default function JournalIndexPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-32 relative z-10" aria-label="Journal">
      
      {/* Top Title */}
      <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24 flex flex-col justify-center animate-[fade-in-up_1s_ease-out_forwards]">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
          <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">Journal</p>
          <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
        </div>
        <h1 className="font-light text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-[#f0ede8] leading-snug max-w-3xl mx-auto font-title italic tracking-wide">
          Studio Notes & Reflections
        </h1>
      </div>

      {/* Grid of Journal Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {journals.map((post, index) => (
          <Link 
            key={post.id} 
            href={`/journal/${post.slug}`} 
            className="group flex flex-col items-center text-center animate-[fade-in-up_1s_ease-out_forwards] opacity-0"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Image Wrapper */}
            <div className="w-full aspect-[4/5] relative overflow-hidden mb-8 shadow-md">
              {post.coverImage ? (
                <Image 
                  src={post.coverImage} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-prussian/5 dark:bg-white/5 flex items-center justify-center">
                  <span className="text-prussian/20 dark:text-white/20 font-title italic">No Image</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow items-center w-full px-2">
              <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-prussian/60 dark:text-[#a8a5a0] mb-4">
                {post.date}
              </span>
              <h3 className="font-title text-2xl text-prussian dark:text-[#f0ede8] mb-4 leading-tight group-hover:text-[#b8860b] dark:group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-prussian-lt/80 dark:text-[#a8a5a0] font-light text-sm leading-relaxed mb-6 line-clamp-3">
                {post.summary}
              </p>
              
              <div className="mt-auto pt-4 flex items-center justify-center gap-3 text-prussian dark:text-[#f0ede8] font-accent text-[10px] tracking-widest uppercase group-hover:text-[#b8860b] dark:group-hover:text-gold transition-colors">
                <span className="w-6 h-[1px] bg-prussian dark:bg-gold/60"></span>
                Read Article
                <span className="w-6 h-[1px] bg-prussian dark:bg-gold/60"></span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
