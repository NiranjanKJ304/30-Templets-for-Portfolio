import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';

export const MemphisFooter: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <footer className="relative border-t-8 border-neutral-900 dark:border-white bg-[#FACC15] dark:bg-neutral-900 overflow-hidden">
      {/* Decorative Footprint */}
      <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="200" r="150" stroke="#EC4899" strokeWidth="20" />
          <circle cx="0" cy="200" r="100" stroke="#2563EB" strokeWidth="20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF]">
             <span className="font-heading font-black text-2xl text-neutral-900 dark:text-white">{data.profile.name.charAt(0)}</span>
           </div>
           <div>
             <p className="font-heading font-bold text-xl uppercase text-neutral-900 dark:text-white">{data.profile.name}</p>
             <p className="text-sm font-bold text-neutral-800 dark:text-neutral-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
           </div>
        </div>
        
        {data.profile.location && (
          <div className="bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white px-4 py-2 shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF] transform rotate-2">
            <p className="font-bold uppercase text-neutral-900 dark:text-white text-sm">Based in {data.profile.location}</p>
          </div>
        )}
      </div>
    </footer>
  );
};
