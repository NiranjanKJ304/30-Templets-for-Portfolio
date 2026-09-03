import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

export const PaperCollageFooter: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <footer className="relative mt-32 pt-24 pb-12 overflow-hidden">
      {/* Torn paper edge top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#FFFDF8] dark:bg-[#242730] clip-path-torn-edge-top shadow-md z-10"></div>
      
      <div className="absolute inset-0 bg-[#FFFDF8] dark:bg-[#242730] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-[#171717] dark:bg-white px-4 py-2 transform -rotate-2 mb-4">
            <span className="font-heading font-bold text-xl uppercase tracking-widest text-white dark:text-[#171717]">
              {data.profile.name}
            </span>
          </div>
          <p className="font-mono text-sm text-[#737373] dark:text-[#A0A5B5]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {data.profile.location && (
           <div className="relative border border-[#D4CFC4] dark:border-[#3A3F4C] p-4 bg-[#F7F3EA] dark:bg-[#1A1C23] transform rotate-1">
             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#F5C84B]/40 transform rotate-2"></div>
             <p className="font-mono text-xs uppercase tracking-widest text-[#4A4A4A] dark:text-[#A0A5B5]">
               Location: {data.profile.location}
             </p>
           </div>
        )}
      </div>
    </footer>
  );
};
