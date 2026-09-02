/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraSectionHeader - Airy luminous section header
 */

import React from 'react';

export interface AuroraSectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  className?: string;
}

export const AuroraSectionHeader: React.FC<AuroraSectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  count,
  countLabel,
  className = 'mb-12 sm:mb-16',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-3 flex-wrap">
        {badge && (
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 shadow-xs">
            {badge}
          </span>
        )}
        {typeof count === 'number' && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            {count} {countLabel || ''}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
