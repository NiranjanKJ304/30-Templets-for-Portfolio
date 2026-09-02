/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialSectionHeader - Magazine-inspired section opener with typographic hierarchy
 */

import React from 'react';

interface EditorialSectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  count?: number;
  className?: string;
  action?: React.ReactNode;
}

export const EditorialSectionHeader: React.FC<EditorialSectionHeaderProps> = ({
  index,
  title,
  subtitle,
  count,
  className = '',
  action,
}) => {
  return (
    <div className={`w-full mb-8 md:mb-12 ${className}`}>
      {/* Top Hairline Header Rule */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15 mb-4">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#68655F] dark:text-[#B8B3AA]">
          <span className="font-bold text-[#B42318] dark:text-[#F06A5F]">{index}</span>
          <span className="text-[#918D85] dark:text-[#817C74]">/</span>
          <span>SECTION</span>
        </div>

        <div className="flex items-center gap-3">
          {typeof count === 'number' && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#918D85] dark:text-[#817C74] border border-[#171717]/15 dark:border-[#F5F2EA]/15 px-2 py-0.5">
              [{count < 10 ? `0${count}` : count} ENTRIES]
            </span>
          )}
          {action}
        </div>
      </div>

      {/* Main Editorial Title Spread */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-[#F5F2EA] tracking-tight leading-none">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-xs sm:text-sm text-[#68655F] dark:text-[#B8B3AA] max-w-md italic md:text-right">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
