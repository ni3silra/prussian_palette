'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import { useTheme } from './ThemeProvider';

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
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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

  // Main Card
  return (
    <>
      <div className="group w-full relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/50 dark:border-white/10 glass-panel">
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
              className="w-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] bg-transparent border border-white/40 text-white rounded-full hover:bg-white/20 hover:border-white transition-all shadow-lg hover:shadow-2xl"
            >
              View Artwork
            </button>
            <button className="w-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] bg-transparent border border-white/40 text-white rounded-full hover:bg-white/20 hover:border-white transition-all shadow-lg hover:shadow-2xl">
              Own
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isMounted && (
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
            className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-700 transform ${isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
            style={{ backgroundColor: modalBg }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/60 dark:bg-white/15 hover:bg-white dark:hover:bg-white/30 text-prussian dark:text-[#f0ede8] rounded-full backdrop-blur-md transition-all shadow-sm group/close border border-white/40 dark:border-white/20"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/close:scale-110 transition-transform">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Left Side: Gallery (60%) */}
            <div className="w-full md:w-[60%] h-[40vh] md:h-[90vh] bg-transparent relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Zoom]}
                navigation={images.length > 1}
                pagination={images.length > 1 ? { clickable: true } : false}
                loop={images.length > 1}
                zoom={{ maxRatio: 3 }}
                autoplay={images.length > 1 ? {
                  delay: 1500,
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
                  <SwiperSlide key={index} className="w-full h-full relative flex items-center justify-center cursor-zoom-in">
                    <div className="swiper-zoom-container relative w-full h-full p-4 md:p-12">
                      <Image
                        src={src}
                        alt={`${title} - View ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-contain drop-shadow-2xl"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Side: Details (40%) */}
            <div className="w-full md:w-[40%] flex flex-col justify-center p-6 md:p-10 h-[50vh] md:h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[1px] bg-prussian/30 dark:bg-white/20" />
                <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-prussian-lt dark:text-[#a8a5a0]">Original Collection</p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-prussian dark:text-[#f0ede8] mb-2 leading-tight">{title}</h2>

              <p className="font-light text-sm text-prussian-lt dark:text-[#a8a5a0] mb-6">{size} · {price}</p>

              <div className="prose prose-sm prose-prussian mb-8 font-body font-light text-prussian/80 dark:text-white/70 leading-relaxed whitespace-pre-line">
                {description}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-8 py-3 text-[10px] font-medium uppercase tracking-widest bg-prussian dark:bg-[#e8e2d9] text-white dark:text-prussian rounded-full hover:bg-prussian-lt dark:hover:bg-white transition-all shadow-xl hover:shadow-2xl dark:ring-1 dark:ring-white/30 flex-shrink-0 text-center">
                  Own This Piece
                </button>
                <button className="w-full sm:w-auto px-8 py-3 text-[10px] font-medium uppercase tracking-widest bg-transparent border border-prussian/30 dark:border-white/50 text-prussian dark:text-[#f0ede8] rounded-full hover:bg-prussian dark:hover:bg-[#e8e2d9] hover:text-white dark:hover:text-prussian hover:border-prussian dark:hover:border-[#e8e2d9] transition-all shadow-sm hover:shadow-lg flex-shrink-0 text-center">
                  Request Custom Variation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
