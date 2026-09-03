import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface MosaicFooterProps {
  data: PortfolioData;
}

export const MosaicFooter: React.FC<MosaicFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full pt-12 mt-auto pb-12">
      <div className="md:col-span-12 bg-[#1B1B1A] dark:bg-[#1B1E1E] border border-[#CBC5BB] dark:border-[#444744] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-[#FFFDF8] dark:text-[#F1EEE7]">
          {data.profile.name}
        </h2>
        
        <div className="flex flex-col md:items-end gap-2 font-mono text-xs uppercase tracking-widest text-[#BDB7AA] dark:text-[#B3B1AA] font-bold">
          <div>&copy; {currentYear}. All Rights Reserved.</div>
          <a href="#top" className="hover:text-[#D66B4D] dark:hover:text-[#E27A5A] transition-colors">
            Back to Top ↑
          </a>
        </div>
        
      </div>
    </div>
  );
};
