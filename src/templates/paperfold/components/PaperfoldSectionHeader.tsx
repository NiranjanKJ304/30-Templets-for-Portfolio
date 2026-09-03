import React from 'react';

interface PaperfoldSectionHeaderProps {
  title: string;
  number?: string;
  subtitle?: string;
}

export const PaperfoldSectionHeader: React.FC<PaperfoldSectionHeaderProps> = ({ title, number, subtitle }) => {
  return (
    <div className="mb-16 md:mb-24 relative pl-4 md:pl-8">
      {/* Subtle vertical crease line */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#202020]/10 dark:from-[#F3F0E8]/10 to-transparent"></div>
      
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="font-mono text-xs text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest border border-[#E8E3D8] dark:border-[#202020] px-2 py-0.5">
            Vol. {number}
          </span>
        )}
        {subtitle && (
          <span className="font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest">
            {subtitle}
          </span>
        )}
      </div>

      <h2 className="font-heading font-normal text-3xl md:text-5xl text-[#202020] dark:text-[#F3F0E8] leading-tight">
        {title}
      </h2>
    </div>
  );
};
