import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface IndexFooterProps {
  data: PortfolioData;
}

export const IndexFooter: React.FC<IndexFooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col gap-6 pt-16 pb-8 mt-12 border-t border-[#D5D6D0] dark:border-[#404440]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-1">
          <div className="font-heading font-bold text-xl uppercase tracking-tight text-[#181A19] dark:text-[#F2F1EA]">
            {data.profile.name}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4] font-bold">
            &copy; {currentYear} · SYSTEM INDEX
          </div>
        </div>
        
        <a 
          href="#top" 
          className="font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA] hover:text-[#365F58] dark:hover:text-[#80A99E] transition-colors border border-[#D5D6D0] dark:border-[#404440] px-4 py-2 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1E1C]"
        >
          RETURN TO TOP ↑
        </a>
      </div>
    </footer>
  );
};
