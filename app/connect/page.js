'use client';

import { useState } from 'react';

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-32 relative z-10" aria-label="Connect with Asha">

      {/* Top Title */}
      <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
          <p className="font-accent text-xs tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">Connect</p>
          <div className="w-12 h-[1px] bg-prussian/30 dark:bg-white/20 hidden md:block" />
        </div>
        <h1 className="font-light text-3xl md:text-4xl lg:text-5xl text-prussian dark:text-[#f0ede8] leading-snug max-w-3xl mx-auto font-title italic tracking-wide">
          Whether you have a question about an available piece, or just want to say hello — my inbox is always open.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Info / Sidebar */}
        <div className="lg:col-span-4 space-y-12">

          <div className="group cursor-pointer" onClick={() => window.location.href = 'mailto:hello@asharodriguesartistry.com'}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full border border-prussian/20 dark:border-white/40 flex items-center justify-center text-prussian dark:text-[#f0ede8] group-hover:bg-prussian dark:group-hover:bg-[#e8e2d9] group-hover:text-white dark:group-hover:text-prussian transition-colors duration-500">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-display text-2xl text-prussian dark:text-[#f0ede8]">Email Me Directly</h3>
            </div>
            <span className="font-body text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg group-hover:text-prussian dark:group-hover:text-white transition-colors ml-[56px] block">hello@asharodriguesartistry.com</span>
            <div className="w-full h-[1px] bg-prussian/10 dark:bg-white/10 mt-8" />
          </div>

          <div>
            <h3 className="font-display text-2xl text-prussian dark:text-[#f0ede8] mb-6">Follow The Journey</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-prussian/20 dark:border-white/15 flex items-center justify-center text-prussian dark:text-[#f0ede8] hover:bg-prussian dark:hover:bg-ivory hover:text-white dark:hover:text-prussian transition-all duration-500" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-prussian/20 dark:border-white/15 flex items-center justify-center text-prussian dark:text-[#f0ede8] hover:bg-prussian dark:hover:bg-ivory hover:text-white dark:hover:text-prussian transition-all duration-500" aria-label="Pinterest">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
            <div className="w-full h-[1px] bg-prussian/10 dark:bg-white/10 mt-8" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8 relative">

          {submitted && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 dark:bg-[#1a1816]/95 backdrop-blur-md rounded-2xl">
              <div className="text-center p-8">
                <div className="text-6xl mb-6 text-prussian dark:text-[#f0ede8]">✓</div>
                <h3 className="font-display text-4xl mb-4 text-prussian dark:text-[#f0ede8]">Thank you.</h3>
                <p className="text-prussian-lt/90 dark:text-[#a8a5a0] font-light text-lg">Your message has been received.<br/>I will respond within 48 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10" aria-label="Contact form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-accent text-xs tracking-widest uppercase text-prussian/70 dark:text-white/50 pl-2">First Name <span className="text-prussian dark:text-[#f0ede8]">*</span></label>
                <input type="text" id="name" name="name" className="w-full bg-transparent hover:bg-prussian/[0.02] dark:hover:bg-white/[0.03] focus:bg-prussian/[0.04] dark:focus:bg-white/[0.05] border-b border-prussian/30 dark:border-white/20 px-4 py-4 text-prussian dark:text-[#f0ede8] text-lg outline-none focus:border-prussian dark:focus:border-white/50 transition-all placeholder:text-prussian/40 dark:placeholder:text-white/25" placeholder="Jane" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block font-accent text-xs tracking-widest uppercase text-prussian/70 dark:text-white/50 pl-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full bg-transparent hover:bg-prussian/[0.02] dark:hover:bg-white/[0.03] focus:bg-prussian/[0.04] dark:focus:bg-white/[0.05] border-b border-prussian/30 dark:border-white/20 px-4 py-4 text-prussian dark:text-[#f0ede8] text-lg outline-none focus:border-prussian dark:focus:border-white/50 transition-all placeholder:text-prussian/40 dark:placeholder:text-white/25" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-accent text-xs tracking-widest uppercase text-prussian/70 dark:text-white/50 pl-2">Email Address <span className="text-prussian dark:text-[#f0ede8]">*</span></label>
              <input type="email" id="email" name="email" className="w-full bg-transparent hover:bg-prussian/[0.02] dark:hover:bg-white/[0.03] focus:bg-prussian/[0.04] dark:focus:bg-white/[0.05] border-b border-prussian/30 dark:border-white/20 px-4 py-4 text-prussian dark:text-[#f0ede8] text-lg outline-none focus:border-prussian dark:focus:border-white/50 transition-all placeholder:text-prussian/40 dark:placeholder:text-white/25" placeholder="jane@example.com" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-accent text-xs tracking-widest uppercase text-prussian/70 dark:text-white/50 pl-2">Your Message <span className="text-prussian dark:text-[#f0ede8]">*</span></label>
              <textarea id="message" name="message" rows="5" className="w-full bg-transparent hover:bg-prussian/[0.02] dark:hover:bg-white/[0.03] focus:bg-prussian/[0.04] dark:focus:bg-white/[0.05] border-b border-prussian/30 dark:border-white/20 px-4 py-4 text-prussian dark:text-[#f0ede8] text-lg outline-none focus:border-prussian dark:focus:border-white/50 transition-all resize-none placeholder:text-prussian/40 dark:placeholder:text-white/25" placeholder="Tell me about your vision..." required></textarea>
            </div>

            <button type="submit" className="px-12 py-5 border border-prussian dark:border-white/60 dark:bg-white/[0.06] text-prussian dark:text-[#f0ede8] hover:bg-prussian dark:hover:bg-[#e8e2d9] hover:text-white dark:hover:text-prussian transition-colors duration-500 text-sm tracking-[0.2em] uppercase font-accent font-medium mt-8 flex justify-center items-center gap-4 w-full md:w-auto rounded-sm">
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
