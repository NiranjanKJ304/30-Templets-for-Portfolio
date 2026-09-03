import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PaperCollageSectionHeaderProps {
  title: string;
  number?: string;
  className?: string;
}

export const PaperCollageSectionHeader: React.FC<PaperCollageSectionHeaderProps> = ({ title, number, className }) => {
  return (
    <div className={cn("relative mb-16 inline-block", className)}>
      {/* Background paper block */}
      <div className="absolute inset-0 bg-[#F26B5B] transform rotate-1 -z-10 translate-x-2 translate-y-2 mix-blend-multiply dark:mix-blend-screen opacity-20"></div>
      
      <div className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-4 pr-12 shadow-sm relative z-10 flex items-center gap-4">
        {/* Tape */}
        <div className="absolute -top-3 left-6 w-12 h-6 bg-[#C8E64A]/60 dark:bg-[#C8E64A]/30 transform -rotate-3 backdrop-blur-sm shadow-sm mix-blend-multiply dark:mix-blend-screen"></div>

        {number && (
          <span className="font-mono text-sm text-[#737373] dark:text-[#A0A5B5] border-r border-[#E5E1D8] dark:border-[#3A3F4C] pr-4">
            NO. {number}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest text-[#171717] dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};
