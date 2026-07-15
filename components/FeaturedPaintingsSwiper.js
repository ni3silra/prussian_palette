'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';

export default function FeaturedPaintingsSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const el = swiperRef.current;
    if (!el) return;

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 30,
      grabCursor: true,
      pagination: { clickable: true },
      autoplay: { delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: {
        640: { spaceBetween: 40 },
        1024: { spaceBetween: 50 },
      },
    };

    Object.assign(el, params);
    el.initialize();
  }, []);

  const slides = [
    { name: 'A Brief Moment', img: '/images/art/A Brief Moment/1.png', price: '€78' },
    { name: 'Somewhere in Blue', img: '/images/art/Somewhere in Blue/1.png', price: '€78' },
    { name: 'Still Standing', img: '/images/art/Still Standing/1.png', price: '€78' },
  ];

  return (
    <swiper-container ref={swiperRef} init="false" class="w-full px-4 sm:px-6 lg:px-8 pb-12">
      {slides.map((s) => (
        <swiper-slide key={s.name} style={{ width: 'auto', maxWidth: '400px' }}>
          <Link href="/shop#originals" className="block glass-panel rounded-3xl overflow-hidden group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-prussian/20" style={{ width: '85vw', maxWidth: '400px' }}>
            <div className="aspect-[3/4] relative overflow-hidden bg-white/20 dark:bg-black/20 flex items-center justify-center p-8">
              <span className="absolute top-4 left-4 bg-sage/90 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-sm">✦ Available</span>
              <Image src={s.img} alt={s.name} fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover drop-shadow-xl group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 border-t border-white/20 dark:border-white/5 bg-white/40 dark:bg-[#0a2d48]/40 backdrop-blur-md relative">
              <p className="font-accent text-[10px] tracking-widest uppercase text-sage mb-2">Original Watercolour</p>
              <h3 className="font-display text-3xl mb-2 text-prussian dark:text-[#f0ede8] group-hover:text-prussian-lt dark:group-hover:text-white transition-colors">{s.name}</h3>
              <p className="text-prussian-lt/70 dark:text-white/60 text-sm font-light">{s.price} — A4 (21 × 30 cm)</p>
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-prussian dark:text-white group-hover:bg-prussian group-hover:text-white transition-all shadow-md">→</div>
            </div>
          </Link>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
