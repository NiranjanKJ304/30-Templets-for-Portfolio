import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FlowDividerProps {
  className?: string;
  direction?: 'up' | 'down';
  color?: 'primary' | 'secondary' | 'canvas';
}

export const FlowDivider: React.FC<FlowDividerProps> = ({ 
  className, 
  direction = 'down',
  color = 'primary' 
}) => {
  // A smooth SVG curve that acts as a structural divider between sections
  // Setting aria-hidden to true as requested.
  
  const colorMap = {
    primary: 'fill-[#FBFAF5] dark:fill-[#1E2321]',
    secondary: 'fill-[#E8DED0] dark:fill-[#302A26]',
    canvas: 'fill-[#F3F0E8] dark:fill-[#151817]',
  };

  return (
    <div className={cn("w-full overflow-hidden leading-none", className)} aria-hidden="true" style={{ pointerEvents: 'none' }}>
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        className={cn("w-full h-12 md:h-24 lg:h-32", colorMap[color], direction === 'up' ? 'rotate-180' : '')}
      >
        <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
};
