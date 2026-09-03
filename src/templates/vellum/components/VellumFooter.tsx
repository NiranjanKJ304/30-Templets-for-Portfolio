import React from 'react';
import { VellumRule } from './VellumRule';

export const VellumFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 pb-16 pt-16 flex flex-col md:flex-row relative">
      
      {/* Left Margin / Gutter */}
      <div className="hidden md:flex w-24 lg:w-48 xl:w-64 shrink-0 flex-col relative pr-8">
        <VellumRule orientation="vertical" className="absolute top-0 bottom-0 right-8" />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-[#C8C2B5] dark:border-[#4A4B46] gap-4">
        <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F] uppercase tracking-widest">
          {currentYear} &copy; Annotated Document
        </span>
        
        <a 
          href="#top" 
          className="font-heading italic text-lg text-[#242522] dark:text-[#F0EDE3] hover:text-[#425C72] dark:hover:text-[#7E9CAF] transition-colors"
          aria-label="Back to top"
        >
          Return to beginning
        </a>
      </div>
    </footer>
  );
};
