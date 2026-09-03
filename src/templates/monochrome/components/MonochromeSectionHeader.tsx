import React from 'react';

interface MonochromeSectionHeaderProps {
  title: string;
  number?: string;
  subtitle?: string;
}

export const MonochromeSectionHeader: React.FC<MonochromeSectionHeaderProps> = ({ title, number, subtitle }) => {
  return (
    <div className="mb-16 md:mb-24 border-t-2 border-[#151515] dark:border-[#F2F0E9] pt-6 md:pt-10 flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
      {number && (
        <span className="font-mono text-3xl md:text-5xl text-[#8A8A84] dark:text-[#777770] leading-none shrink-0">
          {number}
        </span>
      )}
      <div className="flex flex-col">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight leading-none mb-4">
          {title}
        </h2>
        {subtitle && (
          <span className="font-mono text-xs md:text-sm text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
