'use client';

import { useState } from 'react';
import { paintings } from '@/lib/paintings';
import ArtworkCard from '@/components/ArtworkCard';

export default function ShopGallery() {
  const [filterMedium, setFilterMedium] = useState('All');
  const [filterTheme, setFilterTheme] = useState('All');
  const [selectedMats, setSelectedMats] = useState({});

  const toggleMat = (id, isChecked) => {
    setSelectedMats(prev => ({ ...prev, [id]: isChecked }));
  };

  const mediums = ['All', 'Original', 'Digital Print'];
  const themes = ['All', 'Botanical', 'Abstract', 'Landscape'];

  const filteredPaintings = paintings.filter(p => {
    const matchMedium = filterMedium === 'All' || p.mediumType === filterMedium;
    const matchTheme = filterTheme === 'All' || p.theme === filterTheme;
    return matchMedium && matchTheme;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-prussian/10 dark:border-white/10 pb-10">

        {/* Medium Filter */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-prussian/50 dark:text-white/40">Medium</span>
          <div className="flex flex-wrap justify-center gap-3">
            {mediums.map(m => (
              <button
                key={m}
                onClick={() => setFilterMedium(m)}
                className={`px-6 py-2 rounded-full text-xs font-accent tracking-widest uppercase transition-all duration-300 ${
                  filterMedium === m
                    ? 'bg-prussian dark:bg-ivory text-white dark:text-prussian'
                    : 'bg-transparent text-prussian dark:text-[#f0ede8] border border-prussian/20 dark:border-white/50 hover:border-prussian dark:hover:border-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Filter */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-prussian/50 dark:text-white/40">Theme</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {themes.map(t => (
              <button
                key={t}
                onClick={() => setFilterTheme(t)}
                className={`px-6 py-2 rounded-full text-xs font-accent tracking-widest uppercase transition-all duration-300 ${
                  filterTheme === t
                    ? 'bg-prussian dark:bg-ivory text-white dark:text-prussian'
                    : 'bg-transparent text-prussian dark:text-[#f0ede8] border border-prussian/20 dark:border-white/50 hover:border-prussian dark:hover:border-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Alternating Gallery */}
      <div className="flex flex-col gap-16 lg:gap-32 pb-24">
        {filteredPaintings.length > 0 ? (
          filteredPaintings.map((p, index) => {
            const isEven = index % 2 === 0;
            const wantsMat = selectedMats[p.id] || false;
            
            // Calculate dynamic price if mat is selected
            let displayPrice = p.price;
            if (wantsMat && p.price.startsWith('€')) {
              const numericPrice = parseInt(p.price.replace(/[^0-9]/g, ''), 10);
              if (!isNaN(numericPrice)) {
                displayPrice = `€${numericPrice + 15}`;
              }
            }

            return (
              <div key={p.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                {/* Artwork Side */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
                  <ArtworkCard
                    title={p.name}
                    price={displayPrice}
                    size={p.specs.Size.split('—')[0].trim()}
                    description={p.story}
                    images={p.images}
                    themeColor="#fcfbf9"
                    darkThemeColor="#0a2d48"
                  />
                </div>

                {/* Details Side */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                  <div className={`flex items-center justify-center gap-4 mb-8 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60" />
                    <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">{p.collection}</p>
                    <div className="w-12 h-[1px] bg-prussian dark:bg-gold/60 lg:hidden" />
                  </div>

                  <h2 className="font-title text-3xl lg:text-5xl text-prussian dark:text-[#f0ede8] mb-6 leading-snug">{p.name}</h2>

                  <p className={`font-display text-xl text-prussian-lt/90 dark:text-[#a8a5a0] italic mb-10 max-w-md mx-auto ${isEven ? 'lg:mx-0' : 'lg:mr-0 lg:ml-auto'}`}>
                    &ldquo;{p.tagline}&rdquo;
                  </p>

                  <p className={`font-light text-prussian/80 dark:text-white/70 leading-relaxed mb-10 max-w-md mx-auto ${isEven ? 'lg:mx-0' : 'lg:mr-0 lg:ml-auto'}`}>
                    {p.story}
                  </p>

                  <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <span className="font-display text-3xl text-prussian dark:text-[#f0ede8] transition-all">{displayPrice}</span>
                    <div className="w-[1px] h-8 bg-prussian/20 dark:bg-white/10 hidden sm:block" />
                    <span className="font-display text-2xl text-prussian/80 dark:text-white/60">{p.specs.Size.split('—')[0].trim()}</span>
                    <div className="w-[1px] h-8 bg-prussian/20 dark:bg-white/10 hidden sm:block" />
                    <span className="font-display text-2xl text-prussian/80 dark:text-white/60">{p.mediumType}</span>
                  </div>

                  {/* MAT OPTION */}
                  {p.collection === 'Original Watercolour' && (
                    <div className={`flex items-center justify-center gap-3 mb-8 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 border border-prussian/40 dark:border-white/30 rounded-sm bg-transparent group-hover:border-prussian dark:group-hover:border-white transition-colors">
                          <input 
                            type="checkbox" 
                            className="absolute opacity-0 cursor-pointer w-full h-full"
                            checked={wantsMat}
                            onChange={(e) => toggleMat(p.id, e.target.checked)}
                          />
                          {wantsMat && (
                            <svg className="w-3 h-3 text-prussian dark:text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                        </div>
                        <span className="font-accent text-[11px] uppercase tracking-[0.15em] text-prussian/80 dark:text-[#a8a5a0] select-none">
                          Include custom matting (mount) — <span className="font-bold">+€15</span>
                        </span>
                      </label>
                    </div>
                  )}

                  <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <a
                      href={`/connect?subject=Enquiry about "${p.name}"${wantsMat ? ' (with Custom Mat)' : ''}`}
                      className="px-8 py-4 text-[10px] font-accent uppercase tracking-[0.2em] bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian rounded-full hover:bg-prussian-lt dark:hover:bg-white transition-all shadow-xl hover:shadow-2xl dark:ring-1 dark:ring-white/30 text-center flex-shrink-0"
                    >
                      Own This Piece
                    </a>
                    <a
                      href="/connect"
                      className="px-8 py-4 text-[10px] font-accent uppercase tracking-[0.2em] bg-transparent border border-prussian/30 dark:border-white/50 text-prussian dark:text-[#f0ede8] rounded-full hover:bg-prussian dark:hover:bg-[#e8e2d9] hover:text-white dark:hover:text-prussian hover:border-prussian transition-all shadow-sm hover:shadow-lg text-center flex-shrink-0"
                    >
                      Custom Variation
                    </a>
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          <div className="text-center py-24">
            <p className="font-title text-3xl text-prussian/60 dark:text-white/40 italic">No artworks found matching your criteria.</p>
            <button
              onClick={() => { setFilterMedium('All'); setFilterTheme('All'); }}
              className="mt-8 text-xs font-accent uppercase tracking-[0.2em] border-b border-prussian dark:border-white/40 text-prussian dark:text-[#f0ede8] hover:text-prussian-lt dark:hover:text-white pb-1 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
