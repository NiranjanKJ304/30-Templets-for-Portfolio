import React from 'react';

export const FlowFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex justify-center items-center py-12 md:py-24 font-body text-sm text-[#6B706A] dark:text-[#A8ACA5]">
      <div className="flex flex-col items-center gap-4">
        <span>&copy; {currentYear}</span>
        <a 
          href="#top" 
          className="w-12 h-12 rounded-full border border-[#E8DED0] dark:border-[#302A26] flex items-center justify-center hover:bg-[#E8DED0] dark:hover:bg-[#302A26] transition-colors text-[#202321] dark:text-[#F1EFE7]"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </footer>
  );
};
