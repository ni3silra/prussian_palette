'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import { useTheme } from './ThemeProvider';
import { paintings } from '@/lib/paintings';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export default function ArtworkCard({
  title,
  price,
  size,
  description,
  images,
  themeColor = '#eaf0ea',
  darkThemeColor = '#1f1e1d',
  frameColorLight = '#181818',
  frameColorDark = '#0f0f0f',
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [matRequired, setMatRequired] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const modalBg = theme === 'dark' ? darkThemeColor : themeColor;
  const currentFrameColor = theme === 'dark' ? frameColorDark : frameColorLight;

  const paintingData = paintings.find((p) => p.name === title);
  const fullStory = paintingData ? paintingData.story : description;
  const tagline = paintingData ? paintingData.tagline : '';
  const specs = paintingData ? paintingData.specs : null;

  // Main Card
  return (
    <>
      {/* Outer Premium Frame */}
      <div 
        className="group w-full aspect-[4/5] bg-[#faf9f6] dark:bg-[#ebe9e4] p-2 sm:p-3 md:p-4 border-[8px] md:border-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 relative outline outline-1 outline-black/30 dark:outline-[#b8860b]/60"
        style={{ borderColor: currentFrameColor }}
      >
        {/* Inner Matte & Image Container */}
        <div className="relative w-full h-full overflow-hidden outline outline-1 outline-[#d4d1c9] dark:outline-[#d1cdc2]">
          {/* Base Image */}
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-prussian/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center z-10">
            <h3 className="font-display text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>
            <p className="font-light text-sm text-white/80 mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{size} · {price}</p>

            <div className="flex flex-col gap-4 w-full max-w-[200px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] bg-transparent border border-white/40 text-white rounded-none hover:bg-white/20 hover:border-white transition-all shadow-lg hover:shadow-2xl"
              >
                View Artwork
              </button>
              <button className="w-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] bg-transparent border border-white/40 text-white rounded-none hover:bg-white/20 hover:border-white transition-all shadow-lg hover:shadow-2xl">
                Own
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isMounted && createPortal(
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 transition-all duration-700 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-prussian/60 backdrop-blur-md cursor-pointer transition-opacity duration-700"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div
            className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-700 transform ${isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'} bg-[#faf9f6] dark:bg-[#1a1918]`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/60 dark:bg-white/15 hover:bg-white dark:hover:bg-white/30 text-prussian dark:text-[#f0ede8] rounded-full backdrop-blur-md transition-all shadow-sm group/close border border-white/40 dark:border-white/20"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/close:scale-110 transition-transform">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Left Side: Gallery (50%) */}
            <div className="w-full md:w-[50%] h-[40vh] md:h-[90vh] bg-transparent relative flex items-center justify-center">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={images.length > 1}
                pagination={images.length > 1 ? { clickable: true } : false}
                loop={images.length > 1}
                autoplay={images.length > 1 ? {
                  delay: 3000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                } : false}
                style={{
                  '--swiper-navigation-color': theme === 'dark' ? '#f0ede8' : '#223240',
                  '--swiper-pagination-color': theme === 'dark' ? '#f0ede8' : '#223240',
                  '--swiper-navigation-size': '24px',
                }}
                className="w-full h-full"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index} className="w-full h-full relative flex items-center justify-center p-6 md:p-16">
                    {/* The Premium Frame inside Modal */}
                    <div 
                      className="relative w-full max-w-[400px] aspect-[4/5] bg-[#faf9f6] dark:bg-[#ebe9e4] p-3 md:p-4 border-[10px] md:border-[16px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] outline outline-1 outline-black/30 dark:outline-[#b8860b]/60 m-auto"
                      style={{ borderColor: currentFrameColor }}
                    >
                      <div className="relative w-full h-full overflow-hidden outline outline-1 outline-[#d4d1c9] dark:outline-[#d1cdc2]">
                        <Image
                          src={src}
                          alt={`${title} - View ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Side: Details (50%) */}
            <div className="w-full md:w-[50%] flex flex-col justify-start p-6 md:p-12 h-[60vh] md:h-[90vh] overflow-y-auto custom-scrollbar border-t md:border-t-0 md:border-l border-prussian/10 dark:border-white/10">
              
              <div className="flex items-center gap-3 mb-6 mt-4 md:mt-0">
                <div className="w-8 h-[1px] bg-prussian/30 dark:bg-gold/60" />
                <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-prussian dark:text-gold">{paintingData ? paintingData.collection : 'Original Collection'}</p>
              </div>

              <h2 className="font-display font-light text-4xl md:text-5xl text-[#08121f] dark:text-ivory mb-4 leading-tight drop-shadow-sm">{title}</h2>
              
              <div className="flex flex-col mb-8 border-b border-prussian/10 dark:border-white/10 pb-6">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <p className="font-display text-4xl leading-none text-[#b8860b] dark:text-gold m-0">{price}</p>
                  <div className="hidden sm:block h-8 w-[1px] bg-prussian/20 dark:bg-white/20"></div>
                  <p className="font-display text-2xl sm:text-3xl font-light text-prussian/90 dark:text-white/90 m-0">{size}</p>
                  <div className="flex-1 min-w-[20px]"></div>
                  <button className="h-[40px] px-8 text-[10px] flex items-center justify-center font-medium uppercase tracking-[0.3em] bg-[#102a45] dark:bg-gold text-white dark:text-[#102a45] hover:bg-[#1a365d] dark:hover:bg-[#b8860b] transition-all shadow-xl hover:shadow-2xl flex-shrink-0 w-full sm:w-auto">
                    Own This Piece
                  </button>
                </div>

                {/* Mat Selection Toggle */}
                {(!paintingData || paintingData.collection === 'Original Watercolour') && (
                  <div className="flex items-center justify-between p-4 bg-[#f4f2eb] dark:bg-[#1a1918] border border-prussian/10 dark:border-white/10 mt-6">
                    <div>
                      <p className="font-body text-sm text-prussian dark:text-white/90 mb-1">Add custom-cut white mat (+€15)</p>
                      <p className="font-light text-xs text-prussian/60 dark:text-white/50">Ready to drop into any standard frame.</p>
                    </div>
                    <button 
                      onClick={() => setMatRequired(!matRequired)}
                      className={`relative w-12 h-6 transition-colors duration-300 ease-in-out border border-prussian/20 dark:border-white/20 ${matRequired ? 'bg-[#102a45] dark:bg-gold border-transparent' : 'bg-transparent'}`}
                      aria-pressed={matRequired}
                    >
                      <span className={`absolute top-[3px] w-[16px] h-[16px] transition-transform duration-300 ease-in-out ${matRequired ? 'left-[28px] bg-white dark:bg-[#102a45]' : 'left-[3px] bg-prussian/40 dark:bg-white/40'}`} />
                    </button>
                  </div>
                )}
              </div>

              {tagline && (
                <p className="font-body text-lg md:text-xl font-light text-prussian dark:text-sage-lt mb-8 leading-relaxed italic border-l-2 border-prussian/20 dark:border-gold/30 pl-4">
                  "{tagline}"
                </p>
              )}

              <div className="prose prose-sm md:prose-base prose-prussian mb-10 font-body font-light text-prussian/90 dark:text-white/80 leading-relaxed whitespace-pre-line">
                {fullStory}
              </div>

              {specs && (
                <div className="mb-10 w-full">
                  <div className="w-full h-[1px] bg-prussian/10 dark:bg-white/10 mb-6" />
                  <h4 className="font-accent text-[10px] tracking-[0.3em] uppercase text-prussian/60 dark:text-white/50 mb-4">Artwork Details</h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <dt className="font-accent text-[9px] uppercase tracking-widest text-prussian/50 dark:text-gold/60 mb-1">{key}</dt>
                        <dd className="font-body text-xs text-prussian dark:text-white/70 font-light leading-snug">
                          {value}
                          {typeof value === 'string' && value.toLowerCase().includes('unframed') && (
                            <Link href="/framing-guide" onClick={() => setIsModalOpen(false)} className="block mt-1.5 font-medium underline underline-offset-2 text-[#b8860b] dark:text-gold hover:text-prussian dark:hover:text-white transition-colors">
                              Read Framing Guide
                            </Link>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="w-full h-[1px] bg-prussian/10 dark:bg-white/10 mt-6" />
                </div>
              )}

              <div className="flex flex-col gap-4 mt-auto pb-8 md:pb-0 pt-4">
                <button className="w-full px-10 py-4 text-[10px] font-medium uppercase tracking-[0.3em] bg-transparent border border-prussian/30 dark:border-gold text-prussian dark:text-gold rounded-none hover:bg-white/40 dark:hover:bg-gold/10 transition-all flex-shrink-0 text-center">
                  Request Custom Variation
                </button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
