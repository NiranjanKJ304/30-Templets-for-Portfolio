import React from 'react';
import { ContourField } from './ContourField';

export const ContourFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <ContourField contourVariant="sparse">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-12 border-t border-[#C7C9B9]/30 dark:border-[#46504A]/30">
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-[#C7C9B9] dark:bg-[#46504A]"></span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
            {currentYear} &copy; Contour Topography
          </span>
        </div>
        
        <a 
          href="#top" 
          className="font-mono text-[10px] uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8] hover:text-[#C57659] dark:hover:text-[#D17C63] transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          Return to elevation <span className="opacity-60">↑</span>
        </a>
      </div>
    </ContourField>
  );
};
