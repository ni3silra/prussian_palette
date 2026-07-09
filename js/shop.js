/* ============================================================
   Shop JS — Lightbox + Swiper Carousel
   Asha Rodrigues Artistry
   ============================================================ */

// ── Painting Data ────────────────────────────────────────────
const paintings = [
  {
    id: 'a-brief-moment',
    collection: 'Original Watercolour',
    name: 'A Brief Moment',
    medium: 'Daniel Smith Watercolour — Prussian Green, Blue & Turquoise on Wanderings 500gsm',
    price: '€78',
    available: true,
    tagline: 'Between stillness and motion, nature quietly tells its story.',
    story: '"A Brief Moment" captures the gentle release of a dandelion — abstract, unhurried, and deeply calming. Bold sweeps of Prussian Green, Blue, and Turquoise wash across Wanderings paper. The naturally deckled edges aren\'t just a detail — they\'re part of the art.',
    specs: {
      'Medium': 'Daniel Smith Watercolour',
      'Paper': 'Wanderings Cold Press Fine Art — 500gsm',
      'Size': 'A4 — 21 × 30 cm (8.3 × 11.8 in)',
      'Framed': 'Unframed — ready to frame',
      'Signed': 'Yes — signed front & back',
      'Certificate': 'Certificate of Authenticity included',
      'Shipping': 'Packed with love & insured, ships worldwide from Germany',
      'Care': 'Keep from direct sunlight · Frame behind UV glass'
    },
    images: [
      "Asha Rodrigues Artistry/Original ART/A Brief Moment/1.png",
      "Asha Rodrigues Artistry/Original ART/A Brief Moment/2.png",
      "Asha Rodrigues Artistry/Original ART/A Brief Moment/3.png",
      "Asha Rodrigues Artistry/Original ART/A Brief Moment/4.png",
      "Asha Rodrigues Artistry/Original ART/A Brief Moment/5.png"
    ]
  },
  {
    id: 'somewhere-in-blue',
    collection: 'Original Watercolour',
    name: 'Somewhere in Blue',
    medium: 'Daniel Smith Watercolour — Deep Navy to Powder Blue with Gold on Wanderings 500gsm',
    price: '€78',
    available: true,
    tagline: 'Some things don\'t need colour to feel full of life.',
    story: '"Somewhere in Blue" lets two quiet stems drift through a wash of deep navy to powder blue, with the softest touch of gold that catches you only when you look twice. Dreamy, still, and impossible to rush.',
    specs: {
      'Medium': 'Daniel Smith Watercolour',
      'Paper': 'Wanderings Cold Press Fine Art — 500gsm',
      'Size': 'A4 — 21 × 30 cm (8.3 × 11.8 in)',
      'Framed': 'Unframed — ready to frame',
      'Signed': 'Yes — signed front & back',
      'Certificate': 'Certificate of Authenticity included',
      'Shipping': 'Packed with love & insured, ships worldwide from Germany',
      'Care': 'Keep from direct sunlight · Frame behind UV glass'
    },
    images: [
      "Asha Rodrigues Artistry/Original ART/Somewhere in Blue/1.png",
      "Asha Rodrigues Artistry/Original ART/Somewhere in Blue/2.png",
      "Asha Rodrigues Artistry/Original ART/Somewhere in Blue/3.png",
      "Asha Rodrigues Artistry/Original ART/Somewhere in Blue/4.png"
    ]
  },
  {
    id: 'still-standing',
    collection: 'Original Watercolour',
    name: 'Still Standing',
    medium: 'Daniel Smith Watercolour — Sage, Teal & Muted Blue-Green on Wanderings 500gsm',
    price: '€78',
    available: true,
    tagline: 'After the bloom fades, something quietly beautiful remains.',
    story: '"Still Standing" captures two delicate stems in their most honest form — stripped back, still graceful, still telling a story. Soft circles of Sage, Teal and Muted Blue-Green drift around them like memories on Wanderings paper.',
    specs: {
      'Medium': 'Daniel Smith Watercolour',
      'Paper': 'Wanderings Cold Press Fine Art — 500gsm',
      'Size': 'A4 — 21 × 30 cm (8.3 × 11.8 in)',
      'Framed': 'Unframed — ready to frame',
      'Signed': 'Yes — signed front & back',
      'Certificate': 'Certificate of Authenticity included',
      'Shipping': 'Packed with love & insured, ships worldwide from Germany',
      'Care': 'Keep from direct sunlight · Frame behind UV glass'
    },
    images: [
      "Asha Rodrigues Artistry/Original ART/Still Standing/1.png",
      "Asha Rodrigues Artistry/Original ART/Still Standing/2.png",
      "Asha Rodrigues Artistry/Original ART/Still Standing/3.png",
      "Asha Rodrigues Artistry/Original ART/Still Standing/4.png"
    ]
  }
];

// ── Lightbox State ───────────────────────────────────────────
let currentPainting = null;
let lightboxSwiper  = null;

// ── DOM References ───────────────────────────────────────────
const lightbox       = document.getElementById('lightbox');
const lbClose        = document.getElementById('lbClose');
const lbBackdrop     = document.getElementById('lbBackdrop');
const lbCarouselTrack = document.getElementById('lbCarouselTrack');
const lbThumbs       = document.getElementById('lbThumbs');
const lbCounter      = document.getElementById('lbCounter');
const lbTitle        = document.getElementById('lbTitle');
const lbCollection   = document.getElementById('lbCollection');
const lbTagline      = document.getElementById('lbTagline');
const lbPrice        = document.getElementById('lbPrice');
const lbSpecs        = document.getElementById('lbSpecs');
const lbEnquire      = document.getElementById('lbEnquire');

// ── Open Lightbox ────────────────────────────────────────────
function openLightbox(paintingId, startSlide = 0) {
  currentPainting = paintings.find(p => p.id === paintingId);
  if (!currentPainting) return;

  renderCarousel(startSlide);
  renderDetails();

  lightbox.classList.add('lightbox--open');
  document.body.style.overflow = 'hidden';

  // Focus close button for accessibility
  setTimeout(() => lbClose.focus(), 100);
}

// ── Close Lightbox ───────────────────────────────────────────
function closeLightbox() {
  lightbox.classList.remove('lightbox--open');
  document.body.style.overflow = '';
  currentPainting = null;
  
  if (lightboxSwiper) {
    lightboxSwiper.destroy(true, true);
    lightboxSwiper = null;
  }
  
  lbCarouselTrack.innerHTML = '';
  lbThumbs.innerHTML = '';
}

// ── Render Carousel ──────────────────────────────────────────
function renderCarousel(startSlide) {
  const imgs = currentPainting.images;

  // Build Swiper slides
  lbCarouselTrack.innerHTML = imgs.map((src, i) => `
    <div class="swiper-slide">
      <img src="${src}" alt="${currentPainting.name} — Image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" />
    </div>
  `).join('');

  // Build numbered thumb buttons
  lbThumbs.innerHTML = imgs.map((_, i) => `
    <button
      class="carousel__thumb flex items-center justify-center w-8 h-8 rounded-full glass-panel text-gray-800 dark:text-gray-200 transition-colors shadow-sm text-xs font-medium"
      data-index="${i}"
      aria-label="Go to image ${i + 1}"
      type="button"
    >${i + 1}</button>
  `).join('');

  // Initialize Swiper.js for the lightbox
  if (lightboxSwiper) {
    lightboxSwiper.destroy(true, true);
  }

  lightboxSwiper = new Swiper('#lbCarouselContainer', {
    initialSlide: startSlide,
    spaceBetween: 30,
    navigation: {
      nextEl: '#lbNext',
      prevEl: '#lbPrev',
    },
    // Automated carousel: pause on hover to allow the user to see the image
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    on: {
      init: function () {
        updateThumbsAndCounter(this.activeIndex, imgs.length);
      },
      slideChange: function () {
        updateThumbsAndCounter(this.activeIndex, imgs.length);
      }
    }
  });

  // Attach click events to thumbs
  lbThumbs.querySelectorAll('.carousel__thumb').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (lightboxSwiper) lightboxSwiper.slideTo(i);
    });
  });
}

function updateThumbsAndCounter(activeIndex, totalSlides) {
  lbCounter.textContent = `${activeIndex + 1} / ${totalSlides}`;
  lbThumbs.querySelectorAll('.carousel__thumb').forEach((btn, i) => {
    if (i === activeIndex) {
      btn.classList.add('active', 'ring-2', 'ring-prussian', 'dark:ring-white');
    } else {
      btn.classList.remove('active', 'ring-2', 'ring-prussian', 'dark:ring-white');
    }
  });
}

// ── Render Details ───────────────────────────────────────────
function renderDetails() {
  const p = currentPainting;
  lbCollection.textContent = p.collection;
  lbTitle.textContent      = p.name;
  lbTagline.textContent    = p.story;
  lbPrice.textContent      = p.price;

  lbSpecs.innerHTML = Object.entries(p.specs).map(([k, v]) => `
    <div>
      <dt class="font-accent text-[10px] uppercase tracking-widest text-sage mb-1">${k}</dt>
      <dd class="text-sm text-gray-700 dark:text-gray-300 font-light">${v}</dd>
    </div>
  `).join('');

  lbEnquire.href = `connect.html?subject=Enquiry about "${p.name}"`;
}

// ── Close handlers ───────────────────────────────────────────
lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('lightbox--open')) return;
  if (e.key === 'Escape') closeLightbox();
});

// ── Bind Card Clicks ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-painting]').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.painting);
    });
    // Keyboard accessibility
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card.dataset.painting);
      }
    });
  });

  // Export API for inline onclick handlers if needed
  window.shopAPI = { openLightbox, closeLightbox };
});
