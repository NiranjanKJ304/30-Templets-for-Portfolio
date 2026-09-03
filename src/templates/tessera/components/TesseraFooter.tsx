import React from 'react';
import { TesseraModule } from './TesseraModule';
import { TesseraSeam } from './TesseraSeam';

export const TesseraFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 pb-12 pt-16 md:pt-24 flex flex-col items-center relative">
      <TesseraSeam orientation="horizontal" className="absolute top-0 left-4 right-4 w-auto" />
      
      <TesseraModule 
        tab="top" 
        accent="plum" 
        elevation="flat"
        className="w-full md:w-auto min-w-[300px] px-8 py-6 flex flex-row justify-between items-center"
      >
        <span className="font-mono text-[10px] text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest">
          &copy; {currentYear}
        </span>
        
        <a 
          href="#top" 
          className="font-mono text-[10px] text-[#242522] dark:text-[#F0EEE5] uppercase tracking-widest hover:text-[#8D7180] dark:hover:text-[#B39AA7] transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          Top
          <div className="w-2 h-2 bg-current rotate-45" aria-hidden="true" />
        </a>
      </TesseraModule>
    </footer>
  );
};
