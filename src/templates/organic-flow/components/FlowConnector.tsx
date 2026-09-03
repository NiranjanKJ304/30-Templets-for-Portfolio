import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FlowConnectorProps {
  className?: string;
  variant?: 'loop' | 'wave' | 'arc';
}

export const FlowConnector: React.FC<FlowConnectorProps> = ({ className, variant = 'wave' }) => {
  // Decorative SVG connector. aria-hidden=true, pointer-events-none.
  
  return (
    <div className={cn("absolute w-64 h-64 opacity-20 text-[#819B8A] dark:text-[#88A995]", className)} aria-hidden="true" style={{ pointerEvents: 'none' }}>
      {variant === 'wave' && (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[2] fill-none" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" />
        </svg>
      )}
      {variant === 'loop' && (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[2] fill-none" preserveAspectRatio="xMidYMid meet">
          <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 C20,30 40,30 40,50 C40,70 60,70 60,50 C60,35 75,35 75,50" />
        </svg>
      )}
      {variant === 'arc' && (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[2] fill-none" preserveAspectRatio="none">
          <path d="M0,100 Q50,0 100,100" />
        </svg>
      )}
    </div>
  );
};
