import React from 'react';
import { PosterRule } from './PosterRule';
import { PosterLabel } from './PosterLabel';

export const PosterFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex flex-col gap-8 pb-12 mt-32">
      <PosterRule weight="thick" />
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">
          &copy; {currentYear} END OF POSTER.
        </PosterLabel>
        <a 
          href="#top" 
          className="font-mono text-xs font-bold uppercase text-[#17191B] dark:text-[#F5F0E5] hover:text-[#D94B36] dark:hover:text-[#F07761] transition-colors"
        >
          BACK TO TOP [^]
        </a>
      </div>
    </footer>
  );
};
