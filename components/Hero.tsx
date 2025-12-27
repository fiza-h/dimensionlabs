
import React from 'react';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="relative bg-[#F9F6F1] flex flex-col items-center overflow-hidden">
      {/* Subtle Hero Background Elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#98BDAB]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[30rem] h-[30rem] bg-[#E8E4DF]/40 blur-[100px] rounded-full pointer-events-none"></div>

      {/* INITIAL VIEWPORT FOCUS */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center container mx-auto px-6 text-center relative z-10">
        <div className="reveal space-y-8 max-w-4xl">
          <div className="inline-block border-y border-[#2D4F40]/20 py-1.5 px-5 mb-2 bg-white/30 backdrop-blur-sm">
             <span className="text-[#2D4F40] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Spring Semester • 2026 Admissions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-[#2D4F40] leading-[1.1] tracking-tighter">
            Venture Growth <br />
            <span className="text-[#98BDAB] italic font-normal">Fellowship</span>
          </h1>
          
          <div className="w-16 h-px bg-[#2D4F40]/20 mx-auto"></div>
          
          <p className="text-lg md:text-2xl font-garamond italic text-[#5A7A6B] leading-relaxed max-w-3xl mx-auto">
            "A selective program designed for the next generation of builders, researchers, and venture architects."
          </p>
          
          <div className="pt-6">
            <button 
              onClick={onApplyClick}
              className="px-12 py-5 bg-[#2D4F40] text-white font-bold text-base md:text-lg hover:bg-[#1E3A2F] transition-all shadow-[0_15px_40px_rgba(45,79,64,0.2)] rounded-sm uppercase tracking-widest hover:scale-105 active:scale-95 transform duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Apply to Fellowship</span>
              <div className="absolute inset-0 bg-[#98BDAB] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-20"></div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 animate-bounce opacity-20">
          <svg className="w-5 h-5 text-[#2D4F40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* LOWER HERO CONTENT */}
      <div className="container mx-auto px-6 max-w-4xl pb-32 relative z-10">
        <div className="mt-12 reveal">
          <div className="border-l border-[#2D4F40]/10 pl-10 space-y-10">
            <p className="text-lg md:text-xl text-[#5A7A6B] leading-relaxed font-garamond italic">
              The Dimension Labs Fellowship is a rigorous 14-week engagement bridging undergraduate research with professional venture building. Shortlisted fellows will scout early-stage signals, diagnose technical bottlenecks, and collaborate within our product studio.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-8">
              <div className="group transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[9px] text-[#98BDAB] font-bold tracking-[0.2em] mb-1 uppercase">Duration</p>
                <p className="text-sm font-serif text-[#2D4F40]">14 Weeks</p>
              </div>
              <div className="group transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[9px] text-[#98BDAB] font-bold tracking-[0.2em] mb-1 uppercase">Commitment</p>
                <p className="text-sm font-serif text-[#2D4F40]">8h / week</p>
              </div>
              <div className="group transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[9px] text-[#98BDAB] font-bold tracking-[0.2em] mb-1 uppercase">Region</p>
                <p className="text-sm font-serif text-[#2D4F40]">North America</p>
              </div>
              <div className="group transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[9px] text-[#98BDAB] font-bold tracking-[0.2em] mb-1 uppercase">Modality</p>
                <p className="text-sm font-serif text-[#2D4F40]">Hybrid / Remote</p>
              </div>
            </div>
            
            <div className="pt-4">
               <p className="text-[10px] font-bold text-[#2D4F40] uppercase tracking-widest border-t border-[#2D4F40]/10 pt-5 inline-block">Limited to 50 Cohort Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
