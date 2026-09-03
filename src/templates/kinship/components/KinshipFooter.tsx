import React from 'react';
import { KinshipAnchor } from './KinshipAnchor';
import { KinshipConnector } from './KinshipConnector';

export const KinshipFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24 pb-12 pt-20 md:pt-32 flex flex-col items-center">
      <div className="w-full max-w-sm flex items-center mb-12">
        <KinshipConnector className="flex-1 opacity-50" />
        <KinshipAnchor size="sm" color="lavender" className="mx-4 opacity-50" />
        <KinshipConnector className="flex-1 opacity-50" />
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-[#737A75] dark:text-[#A7ADA7] uppercase tracking-widest">
        <span>&copy; {currentYear}</span>
        
        <a 
          href="#top" 
          className="hover:text-[#202624] dark:hover:text-[#EEF0EA] transition-colors flex items-center gap-3"
          aria-label="Back to top"
        >
          <span>Top</span>
          <KinshipAnchor size="sm" color="primary" />
        </a>
      </div>
    </footer>
  );
};
