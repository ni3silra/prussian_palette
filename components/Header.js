import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 sm:p-8 lg:p-10 z-50 flex items-center justify-between pointer-events-auto">
      {/* Top Left Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group shrink-0">
          <Image 
            src="/images/logo/logo.svg" 
            alt="Asha Rodrigues Artistry Logo" 
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 max-w-none w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm pointer-events-none" 
            priority
          />
        </Link>
      </div>

      {/* Center Title */}
      <div className="hidden sm:flex flex-[2] md:flex-1 justify-center pointer-events-none">
        <Link href="/" className="font-title text-3xl md:text-4xl lg:text-5xl tracking-wide text-prussian drop-shadow-sm pointer-events-auto hover:text-sage transition-colors duration-500 text-center whitespace-nowrap">
          Asha Rodrigues Artistry
        </Link>
      </div>

      {/* Focus Pill Navigation */}
      <div className="flex-1 flex justify-end">
        <nav className="flex items-center gap-1 sm:gap-2 font-accent tracking-[0.2em] uppercase text-[10px] text-prussian/70">
          <Link href="/about" className="relative group px-3 py-2 sm:px-5 sm:py-2.5 rounded-full focus:outline-none">
            <span className="relative z-10 group-hover:text-prussian transition-colors duration-300">The Story</span>
            <span className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-md scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100 transition-all duration-500 ease-out border border-white/60"></span>
          </Link>
          <Link href="/shop" className="relative group px-3 py-2 sm:px-5 sm:py-2.5 rounded-full focus:outline-none hidden md:block">
            <span className="relative z-10 group-hover:text-prussian transition-colors duration-300">Originals</span>
            <span className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-md scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100 transition-all duration-500 ease-out border border-white/60"></span>
          </Link>
          <Link href="/connect" className="relative group px-3 py-2 sm:px-5 sm:py-2.5 rounded-full focus:outline-none">
            <span className="relative z-10 group-hover:text-prussian transition-colors duration-300">Connect</span>
            <span className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-md scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100 transition-all duration-500 ease-out border border-white/60"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
