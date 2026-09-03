import React from 'react';
import { FolioSheet } from './FolioSheet';

interface FolioFooterProps {
  pageNum: string;
}

export const FolioFooter: React.FC<FolioFooterProps> = ({ pageNum }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FolioSheet pageNum={pageNum} title="END" offset="right" className="py-12 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
          {currentYear} &copy; Folio Collection
        </span>
        
        <a 
          href="#top" 
          className="font-mono text-[10px] uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6] hover:text-[#B85F49] dark:hover:text-[#D07961] transition-colors flex items-center gap-2"
          aria-label="Back to top"
        >
          Return to Cover <span className="opacity-60">↑</span>
        </a>
      </div>
    </FolioSheet>
  );
};
