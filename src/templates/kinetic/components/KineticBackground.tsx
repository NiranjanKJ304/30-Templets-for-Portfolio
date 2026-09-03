import React from 'react';
import { cn } from '../../../core/utils/cn';

interface KineticBackgroundProps {
  className?: string;
}

export const KineticBackground: React.FC<KineticBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none -z-10 bg-[#F3F0E8] dark:bg-[#111313]", className)}
      aria-hidden="true"
    >
      {/* Decorative vertical grain/lines to establish rhythm without movement */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 49px, #171717 49px, #171717 50px)'
      }}></div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};
