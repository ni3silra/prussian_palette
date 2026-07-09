/* ============================================================
   Main JS — Asha Rodrigues Artistry
   Handles: nav scroll, hamburger, scroll progress, AOS init, Dark Mode, Swiper
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Dark/Light Mode Toggle ───────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;
  
  // Check local storage or system preference
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        htmlEl.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // ── Scroll Progress Bar ──────────────────────────────────
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.transform = `scaleX(${progress / 100})`;
    }, { passive: true });
  }

  // ── Header Scroll Behaviour ──────────────────────────────
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  // ── Hamburger / Mobile Nav ───────────────────────────────
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('#mobileNav a');

  const toggleMobileNav = () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle hamburger lines animation
    const spans = hamburger.querySelectorAll('span');
    if (!isExpanded) {
      spans[0].classList.add('translate-y-2', 'rotate-45');
      spans[1].classList.add('opacity-0');
      spans[2].classList.add('-translate-y-2', '-rotate-45');
      
      mobileNav.classList.remove('translate-x-full');
      mobileNav.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    } else {
      spans[0].classList.remove('translate-y-2', 'rotate-45');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-translate-y-2', '-rotate-45');
      
      mobileNav.classList.add('translate-x-full');
      mobileNav.classList.remove('translate-x-0');
      document.body.style.overflow = '';
    }
  };

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', toggleMobileNav);
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (hamburger.getAttribute('aria-expanded') === 'true') {
          toggleMobileNav();
        }
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        toggleMobileNav();
      }
    });
  }

  // ── Swiper Carousel (Featured Paintings) ─────────────────
  if (document.querySelector('.featured-paintings-swiper')) {
    new Swiper('.featured-paintings-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Automated movement, pause on hover
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        640: { spaceBetween: 40 },
        1024: { spaceBetween: 50 },
      }
    });
  }

  // ── Newsletter Form ──────────────────────────────────────
  const newsletterForm = document.querySelector('form[aria-label="Newsletter signup"]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const btn   = newsletterForm.querySelector('button');
      if (input && input.value) {
        const original = btn.textContent;
        btn.textContent = '✓ You\'re In!';
        btn.classList.add('bg-olive');
        btn.classList.remove('bg-prussian');
        input.value = '';
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('bg-olive');
          btn.classList.add('bg-prussian');
        }, 3000);
      }
    });
  }

  // ── Smooth scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
