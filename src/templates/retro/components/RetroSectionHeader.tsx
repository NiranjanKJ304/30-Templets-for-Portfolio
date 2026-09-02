/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroSectionHeader - Bold graphic poster section header
 */

import React from 'react';

export interface RetroSectionHeaderProps {
  indexNumber: string;
  badge?: string;
  title: string;
  subtitle?: string;
  accentColor?: 'terracotta' | 'mustard' | 'petrol';
}

export const RetroSectionHeader: React.FC<RetroSectionHeaderProps> = ({
  indexNumber,
  badge,
  title,
  subtitle,
  accentColor = 'terracotta',
}) => {
  const accentClasses = {
    terracotta: 'bg-[#E76F2E] text-[#FFF4D6] border-[#29231F] dark:border-[#FFF4D6]/20',
    mustard: 'bg-[#E9B949] text-[#29231F] border-[#29231F] dark:border-[#FFF4D6]/20',
    petrol: 'bg-[#477A8A] text-[#FFF4D6] border-[#29231F] dark:border-[#FFF4D6]/20',
  }[accentColor];

  return (
    <div className="mb-10 sm:mb-14">
      {/* Top Meta Bar */}
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        {/* Numerical Index Badge */}
        <span
          className={`inline-flex items-center justify-center px-2.5 py-1 text-xs font-mono font-black uppercase tracking-wider border-2 shadow-[2px_2px_0px_0px_#29231F] dark:shadow-[2px_2px_0px_0px_rgba(255,244,214,0.15)] rounded-md ${accentClasses}`}
        >
          SEC.{indexNumber}
        </span>

        {badge && (
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#665D55] dark:text-[#A89B8E]">
            // {badge}
          </span>
        )}

        {/* Geometric solid horizontal rule */}
        <div className="flex-1 h-0.5 bg-[#29231F]/20 dark:bg-[#FFF4D6]/20 ml-2" />
        
        {/* Retro geometric ornament dots */}
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E76F2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E9B949]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#477A8A]" />
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-[#29231F] dark:text-[#FFF4D6] leading-[1.05]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base font-medium text-[#665D55] dark:text-[#A89B8E] max-w-xl md:text-right leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
