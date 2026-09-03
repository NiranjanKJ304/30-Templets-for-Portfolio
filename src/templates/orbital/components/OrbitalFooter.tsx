import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

interface OrbitalFooterProps {
  data: PortfolioData;
}

export const OrbitalFooter: React.FC<OrbitalFooterProps> = ({ data }) => {
  const { profile } = data;
  
  return (
    <footer className="mt-20 md:mt-40 py-12 md:py-20 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#B9C9C6] to-transparent dark:from-[#40504D]"></div>
      
      <div className="mt-16 max-w-lg px-6">
        <h2 className="font-heading font-bold text-2xl text-[#172326] dark:text-[#F0F4F1] tracking-wide mb-2">
          {profile.name}
        </h2>
        {profile.role && (
          <p className="font-body text-sm text-[#526467] dark:text-[#AABAB7] mb-8">
            {profile.role}
          </p>
        )}
        
        <div className="flex items-center justify-center gap-2 font-mono text-[10px] text-[#9BAAA9] dark:text-[#40504D] uppercase tracking-widest">
           <div className="w-1 h-1 rounded-full bg-[#9BAAA9] dark:bg-[#40504D]"></div>
           <span>End of Sequence</span>
           <div className="w-1 h-1 rounded-full bg-[#9BAAA9] dark:bg-[#40504D]"></div>
        </div>
      </div>
    </footer>
  );
};
