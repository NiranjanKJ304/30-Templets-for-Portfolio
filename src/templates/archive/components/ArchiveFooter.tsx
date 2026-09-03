import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArchiveDivider } from './ArchiveDivider';

interface ArchiveFooterProps {
  data: PortfolioData;
}

export const ArchiveFooter: React.FC<ArchiveFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col gap-6 py-12 mt-12">
      <ArchiveDivider thick />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold">
          END OF ARCHIVE · {currentYear} · {data.profile.name}
        </div>
        
        <a 
          href="#top" 
          className="font-mono text-[10px] uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5] hover:text-[#9D4937] dark:hover:text-[#D4755D] transition-colors"
        >
          [ RETURN TO TOP ]
        </a>
      </div>
    </footer>
  );
};
