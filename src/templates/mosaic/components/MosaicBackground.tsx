import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MosaicBackgroundProps {
  className?: string;
}

export const MosaicBackground: React.FC<MosaicBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none -z-10 bg-[#F5F2EC] dark:bg-[#121414]", className)}
      aria-hidden="true"
    >
      {/* Subtle mosaic-inspired decoration: very faint grid intersections */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #1B1B1A 1px, transparent 1px),
          linear-gradient(to bottom, #1B1B1A 1px, transparent 1px)
        `,
        backgroundSize: '120px 120px'
      }}></div>
    </div>
  );
};
