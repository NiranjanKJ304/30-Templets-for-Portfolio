import React from 'react';
import { ChronicleBand } from './ChronicleBand';

export const ChronicleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <ChronicleBand hasBottomRule={false} className="py-12 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
          {currentYear} &copy; Chronicle
        </span>
        
        <a 
          href="#top" 
          className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          Return to origin <span className="opacity-60">↑</span>
        </a>
      </div>
    </ChronicleBand>
  );
};
