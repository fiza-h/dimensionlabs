
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar CTA once the user has scrolled past 600px
      if (window.scrollY > 600) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F6F1]/90 backdrop-blur-sm border-b border-[#E8E4DF]">
      <div className="container mx-auto px-6 py-3 md:py-5 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2D4F40] rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-[#98BDAB] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-black tracking-tight text-[#2D4F40] leading-none">DIMENSION LABS</span>
            <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] text-[#98BDAB] uppercase mt-1">Research & Venture</span>
          </div>
        </div>
        
        {/* CTA Button Wrapper */}
        <div className={`transition-all duration-500 transform ${showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          {/* Desktop Button */}
          <button 
            onClick={onApplyClick}
            className="hidden md:block px-8 py-3 bg-[#2D4F40] text-white rounded-md font-bold text-sm tracking-widest uppercase hover:bg-[#1E3A2F] transition-all duration-300 shadow-xl shadow-[#2D4F40]/10 border border-[#2D4F40] hover:scale-105 active:scale-95"
          >
            Apply to Fellowship
          </button>
          
          {/* Mobile Button: Smaller text and padding */}
          <button 
            onClick={onApplyClick}
            className="md:hidden px-5 py-2 bg-[#2D4F40] text-white rounded-md font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#1E3A2F] transition-all duration-300 shadow-lg border border-[#2D4F40]"
          >
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
