/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalSectionHeader - Uncluttered, elegant section header for Minimal template
 */

import React from 'react';

export interface MinimalSectionHeaderProps {
  title: string;
  subtitle?: string;
  count?: number;
}

export const MinimalSectionHeader: React.FC<MinimalSectionHeaderProps> = ({
  title,
  subtitle,
  count,
}) => {
  return (
    <div className="mb-10 pb-3 border-b border-[#1C1917]/10 dark:border-neutral-800 flex items-baseline justify-between">
      <div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-sans">
            {subtitle}
          </p>
        )}
      </div>
      {typeof count === 'number' && count > 0 && (
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      )}
    </div>
  );
};
