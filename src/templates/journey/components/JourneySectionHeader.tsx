/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneySectionHeader - Chapter milestone header with directional indicator
 */

import React from 'react';

export interface JourneySectionHeaderProps {
  chapterNumber?: string;
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  className?: string;
}

export const JourneySectionHeader: React.FC<JourneySectionHeaderProps> = ({
  chapterNumber,
  title,
  subtitle,
  count,
  countLabel,
  className = '',
}) => {
  return (
    <header className={`mb-12 sm:mb-16 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          {chapterNumber && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60">
              CHAPTER {chapterNumber}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {title}
          </h2>
        </div>

        {count !== undefined && countLabel && (
          <span className="font-mono text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            {count} {countLabel}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};
