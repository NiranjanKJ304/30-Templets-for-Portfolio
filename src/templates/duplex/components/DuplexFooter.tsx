import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface DuplexFooterProps {
  data: PortfolioData;
}

export const DuplexFooter: React.FC<DuplexFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#B7B0A5]/40 dark:border-[#414542]/40 py-12 px-6 sm:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-heading font-bold text-xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7]">
          {data.profile.name}
        </div>
        
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5F625F] dark:text-[#A9AAA4]">
          &copy; {currentYear}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
