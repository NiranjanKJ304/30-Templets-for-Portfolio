import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface KineticFooterProps {
  data: PortfolioData;
}

export const KineticFooter: React.FC<KineticFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#171717] dark:border-[#F3F0E8] py-16 md:py-24 px-6 sm:px-12 bg-[#E8E3D8] dark:bg-[#1C2020]">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center gap-12">
        <h2 className="font-heading font-black text-6xl sm:text-8xl md:text-[8rem] lg:text-[12rem] uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] leading-[0.8] w-full break-words">
          {data.profile.name}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 md:mt-16 gap-8">
          <div className="font-mono text-sm uppercase tracking-widest text-[#555555] dark:text-[#B4B4AE] font-bold">
            &copy; {currentYear}. All Rights Reserved.
          </div>
          
          <a href="#top" className="flex items-center gap-2 font-heading font-bold text-xl uppercase tracking-wider text-[#171717] dark:text-[#F3F0E8] hover:text-[#E84F3D] dark:hover:text-[#FF715D] transition-colors group">
            Back to Top
            <ArrowUpRight size={24} className="motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};
