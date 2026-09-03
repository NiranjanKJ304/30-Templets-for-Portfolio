import React from 'react';
import { MonoformSurface } from './MonoformSurface';

export const MonoformFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <MonoformSurface depth="canvas" borderTop className="py-12">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
            {currentYear} &copy; Monoform
          </span>
          
          <a 
            href="#top" 
            className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors flex items-center gap-2"
            aria-label="Back to top"
          >
            Return to origin <span className="opacity-60">↑</span>
          </a>
        </div>
      </div>
    </MonoformSurface>
  );
};
