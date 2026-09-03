import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PaperfoldBackgroundProps {
  className?: string;
}

export const PaperfoldBackground: React.FC<PaperfoldBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F3EFE7] dark:bg-[#151719]", className)}
      aria-hidden="true"
    >
      {/* Subtle background paper plane layer 1 */}
      <div className="absolute top-0 right-0 w-[120vw] h-[120vh] transform rotate-12 translate-x-1/4 -translate-y-1/4 bg-[#FFFDF7]/40 dark:bg-[#202326]/40 shadow-[0_0_40px_rgba(0,0,0,0.02)] border-l border-b border-[#FFFDF7]/60 dark:border-[#202326]/60"></div>
      
      {/* Background crease line */}
      <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#202020]/5 dark:via-[#F3F0E8]/5 to-transparent transform -skew-x-12"></div>
      
      {/* Top right folded corner effect */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
         <div className="absolute top-0 right-0 w-16 h-16 bg-[#F3EFE7] dark:bg-[#151719] shadow-[-2px_2px_4px_rgba(0,0,0,0.02)] transform rotate-45 translate-x-8 -translate-y-8 border-l border-b border-[#202020]/5 dark:border-[#F3F0E8]/5"></div>
      </div>
      
      {/* Bottom left subtle paper flap */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[30vh] bg-[#FFFDF7]/30 dark:bg-[#202326]/30 border-t border-r border-[#FFFDF7]/50 dark:border-[#202326]/50 transform -skew-y-6 translate-y-10 -translate-x-10 shadow-[0_-5px_20px_rgba(0,0,0,0.01)]"></div>
    </div>
  );
};
