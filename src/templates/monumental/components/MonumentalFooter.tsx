import React from 'react';

export const MonumentalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[2000px] mx-auto px-8 sm:px-16 md:px-32 lg:px-48 py-16 md:py-32 font-mono text-sm text-[#686B66] dark:text-[#A5A7A1] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-8">
      <span>&copy; {currentYear}</span>
      <a 
        href="#top" 
        className="hover:text-[#171918] dark:hover:text-[#F0EEE6] transition-colors flex items-center gap-2"
        aria-label="Back to top"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  );
};
