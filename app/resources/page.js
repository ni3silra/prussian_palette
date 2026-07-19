'use client';

import { useState } from 'react';

export default function ResourcesPage() {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (email) {
      setUnlocked(true);
    }
  };

  const guides = [
    { id: 'guide-1', title: 'Colour Mixing Basics', desc: 'Master the art of mixing vibrant, muddy-free watercolours from a limited palette.' },
    { id: 'guide-2', title: 'Water Control Techniques', desc: 'Learn exactly how much water to use for washes, glazing, and dry-brushing.' },
    { id: 'guide-3', title: 'Choosing Your Brushes', desc: 'A breakdown of synthetic vs natural hair, and the only 3 brushes you really need.' }
  ];

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-24 relative z-10" aria-label="Resources">

        {/* Top Title */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24 flex flex-col justify-center animate-[fade-in-up_1s_ease-out_forwards]">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
            <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">Free Guides & Resources</p>
            <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 hidden md:block" />
          </div>
          <h1 className="font-title font-light text-4xl md:text-5xl lg:text-6xl text-prussian dark:text-[#f0ede8] leading-snug max-w-3xl mx-auto italic tracking-wide drop-shadow-sm">
            Want to learn to paint?
          </h1>
          <p className="font-body font-light text-lg mt-8 text-prussian-lt/90 dark:text-[#a8a5a0] leading-relaxed max-w-2xl mx-auto">
            I’ve put together a few guides to help you start your journey.
            Here is what you will learn:
          </p>
        </div>

        {/* Guides Grid (Informational Only) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {guides.map((guide, i) => (
            <div key={guide.id} className="bg-white/40 dark:bg-[#1f1e1d]/40 border border-prussian/10 dark:border-white/10 p-8 shadow-sm flex flex-col items-center text-center animate-[fade-in-up_1s_ease-out_forwards] opacity-0" style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}>
              <div className="w-10 h-10 mb-6 rounded-full border border-prussian/20 dark:border-white/20 flex items-center justify-center text-prussian dark:text-gold">
                <span className="font-accent text-xs">{i + 1}</span>
              </div>
              <h3 className="font-title text-2xl text-prussian dark:text-[#f0ede8] tracking-wide mb-4">{guide.title}</h3>
              <p className="font-body text-sm text-prussian-lt/80 dark:text-[#a8a5a0] font-light leading-relaxed">{guide.desc}</p>
            </div>
          ))}
        </div>

        {/* Single Email Gate at Bottom */}
        <div className="max-w-xl mx-auto bg-white/70 dark:bg-[#1f1e1d]/70 backdrop-blur-md border border-prussian/20 dark:border-white/10 p-10 md:p-14 shadow-2xl text-center rounded-sm animate-[fade-in-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-title text-3xl text-prussian dark:text-[#f0ede8] mb-4">Unlock The Bundle</h3>
          <p className="font-body text-prussian-lt/90 dark:text-[#a8a5a0] font-light mb-8">Enter your email address to download all guides instantly.</p>

          {!unlocked ? (
            <form onSubmit={handleUnlock} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/80 dark:bg-black/30 border border-prussian/30 dark:border-white/20 px-6 py-4 text-center text-prussian dark:text-ivory text-base outline-none focus:border-prussian dark:focus:border-white/50 transition-all placeholder:text-prussian/40 dark:placeholder:text-white/30 rounded-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-8 py-5 font-accent text-xs tracking-[0.2em] uppercase bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian hover:bg-prussian-lt dark:hover:bg-white transition-all rounded-sm shadow-xl hover:shadow-2xl"
              >
                Get The Guides
              </button>
            </form>
          ) : (
            <div className="animate-[fade-in-up_0.5s_ease-out_forwards]">
              <a
                href="#"
                download
                className="w-full px-8 py-5 font-accent text-xs tracking-[0.2em] uppercase bg-[#b8860b] dark:bg-gold text-white dark:text-prussian hover:bg-[#a0750a] dark:hover:bg-ivory transition-all rounded-sm shadow-xl flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download All Guides (ZIP)
              </a>
              <p className="text-[10px] text-prussian/60 dark:text-[#a8a5a0] mt-4 uppercase tracking-widest font-accent">
                Unlocked & Ready
              </p>
            </div>
          )}
        </div>

      </section>
    </>
  );
}
