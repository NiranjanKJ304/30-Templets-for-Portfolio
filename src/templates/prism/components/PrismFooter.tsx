import React from 'react';
import { PrismDivider } from './PrismDivider';

export const PrismFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-24 pb-12 pt-24 md:pt-40 flex flex-col">
      <PrismDivider direction="right-to-left" />
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-xs text-[#6B706F] dark:text-[#A8ADA9] uppercase tracking-widest">
        <span>&copy; {currentYear}</span>
        
        <a 
          href="#top" 
          className="hover:text-[#171A1B] dark:hover:text-[#F1F0EA] transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          <span className="w-1.5 h-1.5 bg-current rotate-45" />
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
};
