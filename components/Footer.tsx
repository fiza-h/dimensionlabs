
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E8E4DF] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#98BDAB] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-[#2D4F40]">DIMENSION LABS</span>
            </div>
            <p className="text-[#5A7A6B] text-sm leading-relaxed mb-8">
              Empowering the next generation of Product Managers, VCs, and Founders through immersive, real-world discovery and venture architecting.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#2D4F40] uppercase tracking-widest">Questions?</p>
              <a href="mailto:team@dimensionlabs.org" className="text-[#98BDAB] font-serif hover:underline text-lg">team@dimensionlabs.org</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#E8E4DF] flex flex-col md:flex-row items-center justify-between text-[10px] text-[#A5A29F] font-bold tracking-[0.2em] uppercase">
          <p>© 2025 DIMENSION LABS. SPRING FELLOWSHIP PROTOCOLS IN EFFECT.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2D4F40] transition-colors">Confidentiality</a>
            <a href="#" className="hover:text-[#2D4F40] transition-colors">Admission Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
