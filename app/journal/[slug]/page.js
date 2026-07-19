import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { journals } from '@/lib/journal';

export async function generateStaticParams() {
  return journals.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = journals.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — Asha Rodrigues Artistry`,
    description: post.summary,
  };
}

export default async function JournalPostPage({ params }) {
  const { slug } = await params;
  const post = journals.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-32 relative z-10" aria-label={post.title}>
      
      {/* Article Header */}
      <header className="text-center max-w-4xl mx-auto mb-16 animate-[fade-in-up_1s_ease-out_forwards]">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
          <Link href="/journal" className="font-accent text-xs tracking-[0.4em] uppercase text-prussian dark:text-gold hover:text-[#b8860b] dark:hover:text-ivory transition-colors">
            Back to Journal
          </Link>
          <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
        </div>
        
        <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-[#f0ede8] leading-tight mb-8">
          {post.title}
        </h1>
        
        <p className="font-accent text-xs tracking-[0.2em] uppercase text-prussian/60 dark:text-[#a8a5a0]">
          {post.date}
        </p>
      </header>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] relative mb-20 shadow-xl overflow-hidden animate-[fade-in-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto font-body font-light text-lg md:text-xl text-prussian-lt/90 dark:text-[#a8a5a0] leading-relaxed space-y-8 animate-[fade-in-up_1s_ease-out_forwards] opacity-0 prose prose-lg prose-prussian dark:prose-invert" style={{ animationDelay: '0.4s' }}>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto mt-24 pt-12 border-t border-prussian/10 dark:border-white/10 text-center animate-[fade-in-up_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
        <h3 className="font-title text-3xl text-prussian dark:text-[#f0ede8] mb-6">Enjoyed this reading?</h3>
        <p className="font-light text-prussian-lt/80 dark:text-[#a8a5a0] mb-8">
          Join the Artistry Circle to receive new journal entries, studio insights, and collection previews directly in your inbox.
        </p>
        <Link 
          href="/#newsletter"
          className="inline-flex items-center gap-4 px-10 py-5 font-accent text-xs tracking-[0.2em] uppercase bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian hover:bg-prussian-lt dark:hover:bg-white transition-all rounded-sm shadow-xl"
        >
          Join The Circle
        </Link>
      </div>

    </article>
  );
}
