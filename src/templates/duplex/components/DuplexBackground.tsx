import React from 'react';
import { cn } from '../../../core/utils/cn';

interface DuplexBackgroundProps {
  className?: string;
}

export const DuplexBackground: React.FC<DuplexBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10", className)}
      aria-hidden="true"
    >
      {/* Mobile/Tablet Background */}
      <div className="absolute inset-0 bg-[#F2EEE7] dark:bg-[#111313] lg:hidden"></div>
      
      {/* Desktop Split Background */}
      <div className="hidden lg:flex absolute inset-0">
        {/* Left Panel Background */}
        <div className="w-[35%] xl:w-[40%] h-full bg-[#181818] dark:bg-[#E8E2D7]"></div>
        
        {/* Right Panel Background */}
        <div className="w-[65%] xl:w-[60%] h-full bg-[#F2EEE7] dark:bg-[#111313]"></div>
        
        {/* Center Divider Line */}
        <div className="absolute left-[35%] xl:left-[40%] top-0 bottom-0 w-px bg-[#B7B0A5] dark:bg-[#414542]"></div>
      </div>
    </div>
  );
};
