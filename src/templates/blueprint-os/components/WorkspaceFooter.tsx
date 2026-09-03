import React from 'react';

export const WorkspaceFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex justify-between items-center py-6 mt-12 border-t border-[#CBD2CD] dark:border-[#3A4340] font-mono text-xs text-[#68716D] dark:text-[#A6ADA8]">
      <div>
        &copy; {currentYear} WORKSPACE
      </div>
      <a 
        href="#top" 
        className="hover:text-[#1D2523] dark:hover:text-[#EEF2EC] transition-colors"
      >
        GO TO TOP ↑
      </a>
    </footer>
  );
};
