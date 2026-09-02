/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasSectionHeader - Modular architectural section header with asymmetric index tags and counts
 */

import React from 'react';

export interface CanvasSectionHeaderProps {
  sectionNumber: string; // e.g. "01", "02"
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  className?: string;
}

export const CanvasSectionHeader: React.FC<CanvasSectionHeaderProps> = ({
  sectionNumber,
  title,
  subtitle,
  count,
  countLabel,
  className = 'mb-12 sm:mb-16',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top Header Tag Strip */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-neutral-300 dark:border-neutral-800 font-mono text-xs mb-4">
        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest">
          <span className="inline-block w-2 h-2 bg-orange-600 dark:bg-orange-400" />
          <span>CANVAS // {sectionNumber}</span>
        </div>

        {count !== undefined && (
          <div className="text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[11px]">
            {String(count).padStart(2, '0')} {countLabel || 'ENTRIES'}
          </div>
        )}
      </div>

      {/* Primary Section Title & Subtitle */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
