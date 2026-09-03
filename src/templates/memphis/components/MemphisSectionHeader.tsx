import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MemphisSectionHeaderProps {
  title: string;
  number?: string;
  className?: string;
}

export const MemphisSectionHeader: React.FC<MemphisSectionHeaderProps> = ({ title, number, className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row items-start md:items-center gap-4 mb-16", className)}>
      <div className="flex items-center gap-4">
        {number && (
          <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-neutral-900 border-4 border-neutral-900 dark:border-white shadow-[4px_4px_0px_0px_#EC4899] font-heading font-black text-xl text-neutral-900 dark:text-white transform -rotate-6">
            {number}
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h2>
      </div>
      {/* Decorative diagonal lines */}
      <div className="hidden md:flex flex-1 h-4 ml-8 overflow-hidden opacity-30 dark:opacity-20">
        <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 12px)', color: 'var(--border-color, #202124)' }} />
      </div>
    </div>
  );
};
