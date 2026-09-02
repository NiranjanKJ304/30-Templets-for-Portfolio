/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaSectionHeader - Monumental narrative chapter header with dynamic visual pacing
 */

import React from 'react';

export interface CinemaSectionHeaderProps {
  chapterIndex: string; // e.g. "01", "02"
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  className?: string;
}

export const CinemaSectionHeader: React.FC<CinemaSectionHeaderProps> = ({
  chapterIndex,
  title,
  subtitle,
  count,
  countLabel,
  className = 'mb-14 sm:mb-20',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Chapter Marker Ribbon */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold">
          ACT // {chapterIndex}
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/30 via-neutral-300/30 dark:via-white/10 to-transparent" />
        {count !== undefined && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            [{String(count).padStart(2, '0')} {countLabel || 'ITEMS'}]
          </span>
        )}
      </div>

      {/* Monumental Headline */}
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-serif leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
