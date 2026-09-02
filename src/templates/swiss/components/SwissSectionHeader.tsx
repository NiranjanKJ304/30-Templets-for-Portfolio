/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissSectionHeader - Structured 12-column grid index header
 */

import React from 'react';
import { SwissRule } from './SwissRule';

export interface SwissSectionHeaderProps {
  indexNumber?: string;
  title: string;
  subtitle?: string;
  count?: number;
  countLabel?: string;
  className?: string;
}

export const SwissSectionHeader: React.FC<SwissSectionHeaderProps> = ({
  indexNumber,
  title,
  subtitle,
  count,
  countLabel,
  className = '',
}) => {
  return (
    <header className={`mb-10 sm:mb-14 ${className}`}>
      <SwissRule thick className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
        {/* Index Rail (Cols 1-3) */}
        <div className="md:col-span-3 font-mono text-xs font-bold tracking-widest text-neutral-900 dark:text-neutral-100 uppercase flex items-center gap-2">
          {indexNumber && (
            <span className="text-red-600 dark:text-red-500 font-extrabold">[{indexNumber}]</span>
          )}
          <span>DIRECTORY</span>
        </div>

        {/* Title & Count (Cols 4-12) */}
        <div className="md:col-span-9 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {count !== undefined && countLabel && (
            <div className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
              {count} {countLabel}
            </div>
          )}
        </div>
      </div>
      <SwissRule className="mt-4" />
    </header>
  );
};
