import React from 'react';
import { ChromaField } from './ChromaField';

export const ChromaFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <ChromaField color="deep" className="py-12 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <span className="font-mono text-xs uppercase tracking-widest opacity-60">
          {currentYear} &copy; Chroma
        </span>
        
        <a 
          href="#top" 
          className="font-mono text-xs uppercase tracking-widest hover:opacity-100 transition-opacity flex items-center gap-3 opacity-60"
          aria-label="Back to top"
        >
          Top <span className="text-[10px]">↑</span>
        </a>
      </div>
    </ChromaField>
  );
};
