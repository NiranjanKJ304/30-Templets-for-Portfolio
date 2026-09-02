/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirSectionHeader - Typographic section opening for Magazine Noir
 */

import React from 'react';

interface NoirSectionHeaderProps {
  index?: string;
  title: string;
  subtitle?: string;
  count?: number;
  className?: string;
}

export const NoirSectionHeader: React.FC<NoirSectionHeaderProps> = ({
  index,
  title,
  subtitle,
  count,
  className = '',
}) => {
  return (
    <header className={`mb-12 md:mb-16 lg:mb-20 ${className}`}>
      {/* Index & Count Marker */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs font-semibold tracking-widest text-[#8B5E3C] dark:text-[#C49A6C]">
              {index}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#99938A] dark:text-[#777168]">
            SECTION
          </span>
        </div>

        {count !== undefined && (
          <span className="font-mono text-xs text-[#99938A] dark:text-[#777168]">
            [{count < 10 ? `0${count}` : count}]
          </span>
        )}
      </div>

      {/* Main Title Spread */}
      <div className="mt-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight leading-none">
          {title}
        </h2>

        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] max-w-md font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};
