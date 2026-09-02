/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistSectionHeader - Exposed structural header with index tag and heavy border
 */

import React from 'react';

interface BrutalistSectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const BrutalistSectionHeader: React.FC<BrutalistSectionHeaderProps> = ({
  index,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 border-b-3 border-[#111111] dark:border-[#F4F1E8] pb-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex items-baseline gap-3.5">
          <span className="px-2.5 py-1 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-mono text-xs font-bold uppercase tracking-wider">
            {index}
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8]">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="font-mono text-xs uppercase tracking-wide text-[#444444] dark:text-[#A0A0A0] max-w-md text-left sm:text-right">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
