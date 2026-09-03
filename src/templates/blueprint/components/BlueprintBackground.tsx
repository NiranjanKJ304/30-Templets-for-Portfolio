import React from 'react';
import { cn } from '../../../core/utils/cn';

interface BlueprintBackgroundProps {
  className?: string;
}

export const BlueprintBackground: React.FC<BlueprintBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F2F5F7] dark:bg-[#0D1620]", className)}
      aria-hidden="true"
    >
      {/* Fine Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]" 
        style={{ 
          backgroundImage: 'linear-gradient(#2E6FBB 1px, transparent 1px), linear-gradient(90deg, #2E6FBB 1px, transparent 1px)', 
          backgroundSize: '10px 10px' 
        }}
      ></div>

      {/* Major Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.2]" 
        style={{ 
          backgroundImage: 'linear-gradient(#2E6FBB 1px, transparent 1px), linear-gradient(90deg, #2E6FBB 1px, transparent 1px)', 
          backgroundSize: '100px 100px' 
        }}
      ></div>

      {/* Blueprint Border */}
      <div className="absolute inset-4 border-2 border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40"></div>
      <div className="absolute inset-6 border border-[#2E6FBB]/20 dark:border-[#5DA9E9]/20"></div>

      {/* Corner Drafting Marks */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#173A5E] dark:border-[#55C6DC]"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#173A5E] dark:border-[#55C6DC]"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#173A5E] dark:border-[#55C6DC]"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#173A5E] dark:border-[#55C6DC]"></div>

      {/* Crosshairs & Center Marks */}
      <div className="absolute top-1/2 left-4 w-4 h-px bg-[#173A5E] dark:bg-[#55C6DC]"></div>
      <div className="absolute top-1/2 right-4 w-4 h-px bg-[#173A5E] dark:bg-[#55C6DC]"></div>
      <div className="absolute top-4 left-1/2 w-px h-4 bg-[#173A5E] dark:bg-[#55C6DC]"></div>
      <div className="absolute bottom-4 left-1/2 w-px h-4 bg-[#173A5E] dark:bg-[#55C6DC]"></div>

      {/* Random Coordinates (Decorative) */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-[#2E6FBB]/60 dark:text-[#5DA9E9]/60 uppercase tracking-widest">
        X: 45.912 • Y: 88.014
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[10px] text-[#2E6FBB]/60 dark:text-[#5DA9E9]/60 uppercase tracking-widest">
        Z-AXIS: NORMALIZED
      </div>
      
      {/* Decorative Construction Line */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-[#E8893A]/30 dark:bg-[#F0A35B]/30 border-t border-dashed border-[#E8893A]/40 dark:border-[#F0A35B]/40"></div>
    </div>
  );
};
