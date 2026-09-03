import React from 'react';
import { TerminalPrompt } from './TerminalPrompt';

export const TerminalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex flex-col gap-4 mt-16 pt-8 border-t border-[#C9D0C9] dark:border-[#303833]">
      <TerminalPrompt label="guest" command="exit" />
      <div className="font-mono text-[10px] text-[#5F6861] dark:text-[#9CA39D]">
        [Process completed] <br/>
        &copy; {currentYear} System Session.
      </div>
      <div className="mt-4">
        <a 
          href="#top" 
          className="font-mono text-[10px] uppercase text-[#347A84] dark:text-[#69B7C4] hover:text-[#18201B] dark:hover:text-[#DCE4DC] transition-colors"
        >
          ^ Return to top
        </a>
      </div>
    </footer>
  );
};
