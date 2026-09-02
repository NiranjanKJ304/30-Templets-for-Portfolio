/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveSectionHeader - Architectural section header with two-digit index & count
 */

import React from 'react';

export interface ExecutiveSectionHeaderProps {
  index?: string;
  title: string;
  subtitle?: string;
  count?: number;
  className?: string;
}

export const ExecutiveSectionHeader: React.FC<ExecutiveSectionHeaderProps> = ({
  index,
  title,
  subtitle,
  count,
  className = '',
}) => {
  return (
    <header className={`mb-12 sm:mb-16 border-b border-[#1A1A19]/15 dark:border-neutral-800 pb-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div className="flex items-baseline gap-3 sm:gap-4">
          {index && (
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 dark:text-neutral-500 select-none">
              [{index}]
            </span>
          )}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            {title}
          </h2>
        </div>

        {count !== undefined && (
          <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 tracking-wider">
            {String(count).padStart(2, '0')} RECORD{count === 1 ? '' : 'S'}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};
