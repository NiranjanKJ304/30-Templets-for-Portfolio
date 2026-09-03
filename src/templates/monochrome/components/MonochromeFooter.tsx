import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface MonochromeFooterProps {
  data: PortfolioData;
}

export const MonochromeFooter: React.FC<MonochromeFooterProps> = ({ data }) => {
  const { profile } = data;
  
  return (
    <footer className="bg-[#FAF9F5] dark:bg-[#181818] border-t border-[#C9C6BE] dark:border-[#3A3A37] pt-16 pb-12 mt-20 md:mt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div className="flex flex-col">
          <h2 className="font-heading text-3xl md:text-5xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-2">
            {profile.name}
          </h2>
          {profile.role && (
            <p className="font-body text-sm md:text-base text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest">
              {profile.role}
            </p>
          )}
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4 font-mono text-xs text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest">
          {profile.location && (
            <span>{profile.location}</span>
          )}
          <span>END OF INDEX</span>
        </div>
        
      </div>
    </footer>
  );
};
