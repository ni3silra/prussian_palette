import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-6 py-4 sm:px-12 sm:py-6 z-50 flex items-center justify-between bg-transparent transition-all duration-300">

      {/* Left Title */}
      <div className="flex-1 flex justify-start">
        <Link
          href="/"
          className="font-title text-xl md:text-2xl lg:text-3xl tracking-wide text-[#08121f] dark:text-ivory hover:text-[#b8860b] dark:hover:text-gold font-normal drop-shadow-sm transition-all duration-300 whitespace-nowrap"
        >
          Asha Rodrigues Artistry
        </Link>
      </div>

      {/* Right: Menu + Theme Toggle */}
      <div className="flex-1 flex justify-end items-center gap-4 sm:gap-6">
        <nav className="hidden sm:flex items-center gap-6 font-accent tracking-[0.2em] uppercase text-sm sm:text-base font-light text-[#08121f] dark:text-ivory drop-shadow-sm">
          <Link href="/about" className="hover:text-[#b8860b] dark:hover:text-gold hover:-translate-y-1 transition-all duration-300">
            The Story
          </Link>
          <Link href="/shop" className="hover:text-[#b8860b] dark:hover:text-gold hover:-translate-y-1 transition-all duration-300">
            Originals
          </Link>
          <Link href="/connect" className="hover:text-[#b8860b] dark:hover:text-gold hover:-translate-y-1 transition-all duration-300">
            Connect
          </Link>
        </nav>

        {/* Mobile Menu Button Placeholder (if needed later) */}
        <button className="sm:hidden text-prussian dark:text-white hover:text-gold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

    </header>
  );
}
