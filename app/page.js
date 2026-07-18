import Link from 'next/link';
import ArtworkCard from '@/components/ArtworkCard';

const collectionsData = [
  {
    id: 'nature',
    title: 'Nature Collection',
    titleColorClass: 'text-[#143601] dark:text-[#52b788]',
    frameColorLight: '#143601',
    frameColorDark: '#52b788',
    description: 'Quiet pieces capturing the essence of the earth, from misty fields to ancient roots.',
    artworks: [
      {
        title: 'A Brief Moment', price: '€78', size: 'A4', themeColor: '#e0e8f0', darkThemeColor: '#0b3848',
        description: 'Inspired by the quiet stillness of early morning walks through misty fields.\n\nThis piece captures the fleeting moment when the sun first breaks through the fog, revealing the subtle colors of nature waking up.',
        images: ['/images/art/A Brief Moment/1.png', '/images/art/A Brief Moment/2.png', '/images/art/A Brief Moment/3.png', '/images/art/A Brief Moment/4.png', '/images/art/A Brief Moment/5.png']
      },
      {
        title: 'Somewhere in Blue', price: '€78', size: 'A4', themeColor: '#e0e8f0', darkThemeColor: '#0b3848',
        description: 'A meditative study of coastal blues and atmospheric depth.\n\nThis painting explores the quiet moments before dusk when the sky and sea blend into a single, breathtaking gradient.',
        images: ['/images/art/Somewhere in Blue/1.png', '/images/art/Somewhere in Blue/2.png', '/images/art/Somewhere in Blue/3.png', '/images/art/Somewhere in Blue/4.png']
      },
      {
        title: 'Still Standing', price: '€78', size: 'A4', themeColor: '#e0e8f0', darkThemeColor: '#0b3848',
        description: 'A tribute to resilience and the quiet strength found in nature.\n\nCapturing the enduring presence of ancient trees against the elements, this artwork is a reminder of steadfastness.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      },
      {
        title: 'Ancient Roots', price: '€85', size: 'A4', themeColor: '#e0e8f0', darkThemeColor: '#0b3848',
        description: 'A tribute to resilience and the quiet strength found in nature.\n\nCapturing the enduring presence of ancient trees against the elements, this artwork is a reminder of steadfastness.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      }
    ]
  },
  {
    id: 'ocean',
    title: 'Ocean Collection',
    titleColorClass: 'text-[#03045e] dark:text-[#48cae4]',
    frameColorLight: '#03045e',
    frameColorDark: '#48cae4',
    description: 'Immersive artworks reflecting the rhythmic energy, depth, and endless movement of the sea.',
    artworks: [
      {
        title: 'Tidal Shift', price: '€78', size: 'A4', themeColor: '#c8d2de', darkThemeColor: '#071828',
        description: 'An exploration of the ocean\'s rhythmic energy and changing tides.\n\nThe fluid movement of the water is captured with dynamic brushstrokes.',
        images: ['/images/art/A Brief Moment/1.png', '/images/art/A Brief Moment/2.png', '/images/art/A Brief Moment/3.png', '/images/art/A Brief Moment/4.png', '/images/art/A Brief Moment/5.png']
      },
      {
        title: 'Deep Blue', price: '€78', size: 'A4', themeColor: '#c8d2de', darkThemeColor: '#071828',
        description: 'Plunging into the profound depths of the ocean.\n\nThis painting uses rich, layered indigo and prussian blue tones to convey the mystery and vastness of deep waters.',
        images: ['/images/art/Somewhere in Blue/1.png', '/images/art/Somewhere in Blue/2.png', '/images/art/Somewhere in Blue/3.png', '/images/art/Somewhere in Blue/4.png']
      },
      {
        title: 'Morning Mist', price: '€78', size: 'A4', themeColor: '#c8d2de', darkThemeColor: '#071828',
        description: 'The delicate interplay of fog rolling over the morning sea.\n\nSoft washes of pale blues and greys create an ethereal atmosphere.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      },
      {
        title: 'Coastal Dawn', price: '€85', size: 'A4', themeColor: '#c8d2de', darkThemeColor: '#071828',
        description: 'The delicate interplay of fog rolling over the morning sea.\n\nSoft washes of pale blues and greys create an ethereal atmosphere.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      }
    ]
  },
  {
    id: 'mountain',
    title: 'Mountain Collection',
    titleColorClass: 'text-[#08121f] dark:text-[#d4af37]',
    frameColorLight: '#08121f',
    frameColorDark: '#d4af37',
    description: 'A tribute to rugged peaks, sheltered valleys, and the unwavering presence of the mountains.',
    artworks: [
      {
        title: 'High Peak', price: '€78', size: 'A4', themeColor: '#f4f7fb', darkThemeColor: '#0c2e45',
        description: 'Capturing the awe-inspiring majesty of towering summits.\n\nBold contrasts and crisp edges define the rugged terrain against a clear, expansive sky.',
        images: ['/images/art/A Brief Moment/1.png', '/images/art/A Brief Moment/2.png', '/images/art/A Brief Moment/3.png', '/images/art/A Brief Moment/4.png', '/images/art/A Brief Moment/5.png']
      },
      {
        title: 'Valley Shadow', price: '€78', size: 'A4', themeColor: '#f4f7fb', darkThemeColor: '#0c2e45',
        description: 'The quiet, sheltered spaces between mountains as the sun sets.\n\nDeep, earthy shadows stretch across the valley floor, creating a sense of safety and grounding warmth.',
        images: ['/images/art/Somewhere in Blue/1.png', '/images/art/Somewhere in Blue/2.png', '/images/art/Somewhere in Blue/3.png', '/images/art/Somewhere in Blue/4.png']
      },
      {
        title: 'Stone Path', price: '€78', size: 'A4', themeColor: '#f4f7fb', darkThemeColor: '#0c2e45',
        description: 'A journey through ancient, rocky landscapes.\n\nTextured brushwork brings to life the rough, enduring surface of mountain paths carved over millennia.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      },
      {
        title: 'Quiet Ridge', price: '€85', size: 'A4', themeColor: '#f4f7fb', darkThemeColor: '#0c2e45',
        description: 'A journey through ancient, rocky landscapes.\n\nTextured brushwork brings to life the rough, enduring surface of mountain paths carved over millennia.',
        images: ['/images/art/Still Standing/1.png', '/images/art/Still Standing/2.png', '/images/art/Still Standing/3.png', '/images/art/Still Standing/4.png']
      }
    ]
  }
];

export default function Home() {
  return (
    <>
      {/* ── SECTION 1 — EDITORIAL HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-20" aria-label="Welcome hero">
        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center md:items-start pt-10 lg:pt-0 px-4 sm:px-0">
          
          {/* Column 2: The Artist Content */}
          <div className="w-full flex flex-col justify-center text-center md:text-left opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-12 h-[2px] bg-prussian dark:bg-gold/60" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">The Artist</p>
            </div>

            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-[#08121f] dark:text-ivory tracking-tight drop-shadow-md">
              Hi, I&apos;m <span className="font-title text-[#b8860b] dark:text-gold italic drop-shadow-md">Asha.</span>
            </h2>

            <p className="font-body text-lg lg:text-xl font-light tracking-wide text-prussian dark:text-sage-lt leading-relaxed mb-10 drop-shadow-sm">
              Art found me when I needed it most. Now I paint nature, stillness and the beauty of everywhere I wander.
            </p>

            <div>
              <Link href="/about" className="group inline-flex items-center justify-center px-10 py-4 bg-transparent border border-prussian/30 dark:border-gold text-prussian dark:text-gold rounded-none hover:bg-white/40 backdrop-blur-md hover:text-prussian dark:hover:bg-gold dark:hover:text-prussian transition-all duration-500 shadow-xl hover:shadow-2xl text-[10px] uppercase tracking-[0.3em]">
                <span>Read The Story</span>
                <span className="ml-4 group-hover:translate-x-2 transition-transform duration-500">→</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Quiet Botanicals Content */}
          <div className="w-full flex flex-col justify-center text-center md:text-left opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-12 h-[2px] bg-prussian dark:bg-gold/60" />
              <p className="font-accent text-xs sm:text-sm font-normal tracking-[0.4em] uppercase text-prussian dark:text-gold drop-shadow-md">Original Artistry</p>
            </div>

            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-[#08121f] dark:text-ivory tracking-tight drop-shadow-md">
              Quiet Botanicals.<br />
              <span className="font-title text-[#b8860b] dark:text-gold block my-2 text-5xl sm:text-6xl lg:text-7xl drop-shadow-md">Nature-Led.</span>
              Deeply Personal.
            </h2>

            <p className="font-body text-lg lg:text-xl font-light tracking-wide text-prussian dark:text-sage-lt leading-relaxed mb-10 drop-shadow-sm">
              Painted from stillness, from wandering, from love. Art that found me, now finding its way to your home.
            </p>

            <div>
              <Link href="/shop" className="group inline-flex items-center justify-center px-10 py-4 bg-transparent border border-prussian/30 dark:border-gold text-prussian dark:text-gold rounded-none hover:bg-white/40 backdrop-blur-md hover:text-prussian dark:hover:bg-gold dark:hover:text-prussian transition-all duration-500 shadow-xl hover:shadow-2xl text-[10px] uppercase tracking-[0.3em]">
                <span>Enter The Artistry</span>
                <span className="ml-4 group-hover:translate-x-2 transition-transform duration-500">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── DYNAMIC COLLECTIONS ── */}
      {collectionsData.map((collection, index) => (
        <section key={collection.id} className="py-20 md:py-32 relative z-10 bg-transparent dark:bg-transparent" aria-label={collection.title}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
            
            <div className="w-full lg:w-1/3 lg:sticky lg:top-40 z-20 text-left animate-[fade-in-up_1s_ease-out_forwards] pt-12">
              <h2 className={`font-display text-5xl md:text-6xl mb-6 leading-tight drop-shadow-sm ${collection.titleColorClass}`}>{collection.title}</h2>
              <p className="font-body text-prussian dark:text-white/80 font-light text-lg leading-relaxed drop-shadow-sm">
                {collection.description}
              </p>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-start">
              {collection.artworks.map((art, artIndex) => (
                <div key={artIndex} className={`w-full ${artIndex % 2 !== 0 ? 'sm:pt-16' : ''}`}>
                  <ArtworkCard 
                    {...art} 
                    frameColorLight={collection.frameColorLight}
                    frameColorDark={collection.frameColorDark}
                  />
                </div>
              ))}
            </div>
            
          </div>
        </section>
      ))}
    </>
  );
}

