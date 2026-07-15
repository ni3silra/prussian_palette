import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 sm:px-8 lg:px-16 pt-16 pb-8" role="contentinfo">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-start">
        
        {/* Left: Explore */}
        <div className="flex flex-col gap-4 order-2 lg:order-1 pt-6 lg:pt-0 border-t lg:border-t-0 border-prussian/20">
          <span className="font-accent text-xs tracking-[0.3em] uppercase text-prussian-lt mb-1 flex items-center gap-2">
            <div className="w-4 h-[1px] bg-prussian/30"></div>
            Explore
          </span>
          <Link href="/" className="text-prussian hover:text-prussian-lt transition-colors font-light">Home</Link>
          <Link href="/about" className="text-prussian hover:text-prussian-lt transition-colors font-light">The Story</Link>
          <Link href="/shop" className="text-prussian hover:text-prussian-lt transition-colors font-light">Original Art</Link>
        </div>

        {/* Center: Newsletter */}
        <div className="w-full flex flex-col justify-center text-center items-center order-1 lg:order-2 pb-6 lg:pb-0 lg:px-8 lg:border-x border-prussian/20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-prussian/30 hidden sm:block"></div>
            <p className="font-accent text-[10px] tracking-[0.4em] uppercase text-prussian-lt">A letter from the studio</p>
            <div className="w-6 h-[1px] bg-prussian/30 hidden sm:block"></div>
          </div>
          
          <h2 className="font-title text-3xl lg:text-4xl leading-[1.2] mb-3 text-prussian tracking-wide drop-shadow-sm">
            Join the quiet list.
          </h2>
          
          <p className="font-body text-sm lg:text-base font-light tracking-wide text-prussian-lt/90 leading-relaxed mb-6 max-w-sm mx-auto">
            Early access to original collections, behind-the-scenes studio moments, and quiet thoughts on art and nature.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-prussian/30 px-2 py-2 outline-none focus:border-prussian transition-all font-light text-prussian placeholder:text-prussian-lt/50 text-center sm:text-left text-sm"
              required
            />
            <button 
              type="submit" 
              className="group inline-flex items-center justify-center px-6 py-2.5 bg-prussian text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:bg-prussian-lt text-[10px] tracking-widest shrink-0"
            >
              <span>Subscribe</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>

        {/* Right: Connect */}
        <div className="flex flex-col gap-4 lg:items-end lg:text-right order-3 pt-6 lg:pt-0 border-t lg:border-t-0 border-prussian/20">
          <span className="font-accent text-xs tracking-[0.3em] uppercase text-prussian-lt mb-1 flex items-center lg:flex-row-reverse gap-2">
            <div className="w-4 h-[1px] bg-prussian/30"></div>
            Connect
          </span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-prussian hover:text-prussian-lt transition-colors font-light">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-prussian hover:text-prussian-lt transition-colors font-light">Pinterest</a>
          <Link href="/connect" className="text-prussian hover:text-prussian-lt transition-colors font-light">Email Studio</Link>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="w-full max-w-screen-xl mx-auto mt-10 pt-6 border-t border-prussian/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-accent tracking-[0.2em] uppercase text-prussian-lt">
        <p>&copy; {new Date().getFullYear()} Asha Rodrigues Artistry</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-prussian transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-prussian transition-colors">Terms of Service</Link>
        </div>
      </div>
      
    </footer>
  );
}
