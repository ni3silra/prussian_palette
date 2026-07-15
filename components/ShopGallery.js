'use client';

import { useState } from 'react';
import { paintings } from '@/lib/paintings';
import ArtworkCard from '@/components/ArtworkCard';

export default function ShopGallery() {
  const [filterMedium, setFilterMedium] = useState('All');
  const [filterTheme, setFilterTheme] = useState('All');

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
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-prussian/10 pb-10">
        
        {/* Medium Filter */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-prussian/50">Medium</span>
          <div className="flex flex-wrap justify-center gap-3">
            {mediums.map(m => (
              <button
                key={m}
                onClick={() => setFilterMedium(m)}
                className={`px-6 py-2 rounded-full text-xs font-accent tracking-widest uppercase transition-all duration-300 ${
                  filterMedium === m 
                    ? 'bg-prussian text-white' 
                    : 'bg-transparent text-prussian border border-prussian/20 hover:border-prussian'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Filter */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-prussian/50">Theme</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {themes.map(t => (
              <button
                key={t}
                onClick={() => setFilterTheme(t)}
                className={`px-6 py-2 rounded-full text-xs font-accent tracking-widest uppercase transition-all duration-300 ${
                  filterTheme === t 
                    ? 'bg-prussian text-white' 
                    : 'bg-transparent text-prussian border border-prussian/20 hover:border-prussian'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        
      </div>

      {/* Alternating Gallery */}
      <div className="flex flex-col gap-32 pb-24">
        {filteredPaintings.length > 0 ? (
          filteredPaintings.map((p, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={p.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Artwork Side */}
                <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
                  <ArtworkCard
                    title={p.name}
                    price={p.price}
                    size={p.specs.Size.split('—')[0].trim()}
                    description={p.story}
                    images={p.images}
                    themeColor="#fcfbf9"
                  />
                </div>

                {/* Details Side */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                  <div className={`flex items-center justify-center gap-4 mb-8 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <div className="w-12 h-[1px] bg-prussian/30"></div>
                    <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-prussian-lt">{p.collection}</p>
                    <div className="w-12 h-[1px] bg-prussian/30 lg:hidden"></div>
                  </div>
                  
                  <h2 className="font-title text-4xl lg:text-5xl text-prussian mb-6 leading-snug">{p.name}</h2>
                  
                  <p className={`font-display text-xl text-prussian-lt/90 italic mb-10 max-w-md mx-auto ${isEven ? 'lg:mx-0' : 'lg:mr-0 lg:ml-auto'}`}>
                    "{p.tagline}"
                  </p>
                  
                  <p className={`font-light text-prussian/80 leading-relaxed mb-10 max-w-md mx-auto ${isEven ? 'lg:mx-0' : 'lg:mr-0 lg:ml-auto'}`}>
                    {p.story}
                  </p>
                  
                  <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <span className="font-display text-3xl text-prussian">{p.price}</span>
                    <div className="w-[1px] h-8 bg-prussian/20 hidden sm:block"></div>
                    <span className="font-display text-2xl text-prussian/80">{p.specs.Size.split('—')[0].trim()}</span>
                    <div className="w-[1px] h-8 bg-prussian/20 hidden sm:block"></div>
                    <span className="font-display text-2xl text-prussian/80">{p.mediumType}</span>
                  </div>

                  <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <a href={`/connect?subject=Enquiry about "${p.name}"`} className="px-8 py-4 text-[10px] font-accent uppercase tracking-[0.2em] bg-prussian text-white rounded-full hover:bg-prussian-lt transition-all shadow-xl hover:shadow-2xl text-center flex-shrink-0">
                      Own This Piece
                    </a>
                    <a href="/connect" className="px-8 py-4 text-[10px] font-accent uppercase tracking-[0.2em] bg-transparent border border-prussian/30 text-prussian rounded-full hover:bg-prussian hover:text-white hover:border-prussian transition-all shadow-sm hover:shadow-lg text-center flex-shrink-0">
                      Custom Variation
                    </a>
                  </div>
                </div>

              </div>
            );
          })
        ) : (
          <div className="text-center py-24">
            <p className="font-title text-3xl text-prussian/60 italic">No artworks found matching your criteria.</p>
            <button onClick={() => { setFilterMedium('All'); setFilterTheme('All'); }} className="mt-8 text-xs font-accent uppercase tracking-[0.2em] border-b border-prussian text-prussian hover:text-prussian-lt pb-1 transition-colors">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
