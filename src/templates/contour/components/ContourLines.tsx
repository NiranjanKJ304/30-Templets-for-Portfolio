import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ContourLinesProps {
  className?: string;
  variant?: 'subtle' | 'strong' | 'dense' | 'sparse';
}

export const ContourLines: React.FC<ContourLinesProps> = ({
  className,
  variant = 'subtle',
}) => {
  // A reusable decorative SVG contour line primitive
  // Using simplified organic paths to represent topography
  return (
    <svg 
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        variant === 'subtle' && "stroke-[#C7C9B9]/30 dark:stroke-[#46504A]/30",
        variant === 'strong' && "stroke-[#C7C9B9]/70 dark:stroke-[#46504A]/70",
        variant === 'dense' && "stroke-[#C7C9B9]/50 dark:stroke-[#46504A]/50",
        variant === 'sparse' && "stroke-[#C7C9B9]/20 dark:stroke-[#46504A]/20",
        className
      )}
      viewBox="0 0 1000 1000" 
      preserveAspectRatio="none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M-100,200 C300,150 600,300 1100,250" strokeWidth="1" />
      <path d="M-100,230 C320,180 580,330 1100,280" strokeWidth="0.5" />
      <path d="M-100,260 C340,210 560,360 1100,310" strokeWidth="0.5" />
      
      {variant !== 'sparse' && (
        <>
          <path d="M-100,700 C400,800 700,600 1100,750" strokeWidth="1" />
          <path d="M-100,730 C420,830 680,630 1100,780" strokeWidth="0.5" />
          <path d="M-100,760 C440,860 660,660 1100,810" strokeWidth="0.5" />
        </>
      )}

      {variant === 'dense' && (
        <>
          <path d="M-100,450 C200,400 800,550 1100,450" strokeWidth="1" />
          <path d="M-100,470 C220,420 780,570 1100,470" strokeWidth="0.5" />
        </>
      )}
      
      {/* Decorative elevation markers */}
      <text x="80%" y="240" fill="currentColor" stroke="none" className="font-mono text-[8px] tracking-widest opacity-40">EL-1200</text>
      {variant !== 'sparse' && (
        <text x="20%" y="740" fill="currentColor" stroke="none" className="font-mono text-[8px] tracking-widest opacity-40">EL-800</text>
      )}
    </svg>
  );
};
