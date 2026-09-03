import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonochromeBackgroundProps {
  className?: string;
}

export const MonochromeBackground: React.FC<MonochromeBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F4F1EA] dark:bg-[#111111]", className)}
      aria-hidden="true"
    >
      {/* Faint Horizontal Rules */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-[#C9C6BE]/30 dark:bg-[#3A3A37]/30"></div>
      <div className="absolute top-[60%] left-0 right-0 h-px bg-[#C9C6BE]/30 dark:bg-[#3A3A37]/30"></div>
      
      {/* Vertical Alignment Markers */}
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-[#C9C6BE]/20 dark:bg-[#3A3A37]/20"></div>
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-[#C9C6BE]/20 dark:bg-[#3A3A37]/20"></div>

      {/* Subtle Oversized Background Numeral */}
      <div className="absolute -left-10 -bottom-20 font-heading text-[40vh] leading-none text-[#C9C6BE]/10 dark:text-[#3A3A37]/20 select-none">
        0
      </div>
    </div>
  );
};
