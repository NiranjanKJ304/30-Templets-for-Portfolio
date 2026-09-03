import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PaperCollageBackgroundProps {
  className?: string;
}

export const PaperCollageBackground: React.FC<PaperCollageBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F7F3EA] dark:bg-[#1A1C23]", className)}
      aria-hidden="true"
    >
      {/* Subtle grid pattern to simulate cutting mat / editorial grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Scattered paper fragments and tape */}
      {/* Top Left Paper Edge */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFFDF8] dark:bg-[#242730] transform rotate-12 opacity-80 shadow-[2px_2px_10px_rgba(0,0,0,0.05)] clip-path-irregular-1"></div>

      {/* Top Right Tape */}
      <div className="absolute top-20 right-10 w-32 h-8 bg-[#F5C84B]/40 dark:bg-[#F5C84B]/20 transform -rotate-6 backdrop-blur-sm shadow-sm mix-blend-multiply dark:mix-blend-screen"></div>

      {/* Bottom Right Label */}
      <div className="absolute bottom-20 -right-4 w-40 h-16 bg-[#F26B5B]/10 border border-[#F26B5B]/30 transform -rotate-3 flex items-center justify-start pl-8">
         <span className="font-mono text-[10px] text-[#F26B5B]/50 tracking-widest uppercase">REG.04</span>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFFDF8] dark:bg-[#2A2E39] transform -rotate-12 opacity-50 shadow-md"></div>

      {/* Registration Marks */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 opacity-20">
        <div className="absolute inset-0 border border-[#171717] dark:border-white rounded-full"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#171717] dark:bg-white"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#171717] dark:bg-white"></div>
      </div>
      
      {/* Center Left Tape Strip */}
      <div className="absolute top-1/2 -left-6 w-16 h-48 bg-white/40 dark:bg-black/20 backdrop-blur-sm transform rotate-2 mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  );
};
