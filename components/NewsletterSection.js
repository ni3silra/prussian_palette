'use client';

import { useState } from 'react';

export default function NewsletterSection({ variant = 'default' }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden" id="newsletter" aria-label="Newsletter signup">
      <div className="absolute inset-0 bg-gradient-to-br from-prussian/20 to-sage/20 dark:from-prussian/40 dark:to-sage/10 mix-blend-multiply z-[-1]"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="glass-panel p-10 sm:p-16 rounded-[3rem] shadow-2xl">
          <div className="font-accent text-sm tracking-[0.2em] uppercase text-sage mb-4 drop-shadow-sm">
            {variant === 'shop' ? 'New Collections' : variant === 'about' ? 'Stay In Touch' : 'New Collections'}
          </div>
          <h2 className="font-title text-6xl md:text-7xl mb-6 text-prussian dark:text-white drop-shadow-sm">
            Join The Artistry Circle 🌿
          </h2>
          <p className="text-lg md:text-xl font-light italic text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {variant === 'shop'
              ? 'New paintings sell quickly. Join The Artistry Circle to get early access to new collection drops, studio sneak peeks and colour stories — straight to your inbox.'
              : 'Every few weeks I share studio sneak peeks, colour stories, free guides and new collection drops — straight to your inbox. No spam. Just soul.'
            }
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto relative" aria-label="Newsletter signup">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-8 py-5 rounded-full text-gray-900 bg-white/70 dark:bg-black/50 border border-white/50 dark:border-white/10 backdrop-blur-md focus:ring-4 focus:ring-sage/50 outline-none transition-all shadow-inner placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className={`px-10 py-5 backdrop-blur-md text-white rounded-full font-medium transition-all shadow-lg whitespace-nowrap ${submitted ? 'bg-olive' : 'bg-prussian/90 hover:bg-prussian'}`}
            >
              {submitted ? '✓ You\'re In!' : variant === 'shop' ? 'Join The Circle 🌿' : 'Join The Circle →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
