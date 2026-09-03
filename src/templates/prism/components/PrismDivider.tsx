import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PrismDividerProps {
  className?: string;
  direction?: 'left-to-right' | 'right-to-left';
}

export const PrismDivider: React.FC<PrismDividerProps> = ({ className, direction = 'left-to-right' }) => {
  return (
    <div 
      className={cn("w-full h-px relative bg-[rgba(23,26,27,0.1)] dark:bg-[rgba(241,240,234,0.1)]", className)}
      aria-hidden="true"
    >
      <div 
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-4 h-4 border border-[#171A1B] dark:border-[#F1F0EA] bg-[#F4F2EC] dark:bg-[#111415]",
          direction === 'left-to-right' ? 'left-8 rotate-45' : 'right-8 -rotate-45'
        )} 
      />
    </div>
  );
};
