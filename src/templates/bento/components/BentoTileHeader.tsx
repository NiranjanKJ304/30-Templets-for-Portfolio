/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoTileHeader - Standardized category and metadata header for Bento tiles
 */

import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface BentoTileHeaderProps {
  label: string;
  title?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: 'blue' | 'violet' | 'emerald' | 'amber' | 'neutral';
  action?: React.ReactNode;
  className?: string;
}

export const BentoTileHeader: React.FC<BentoTileHeaderProps> = ({
  label,
  title,
  icon,
  badge,
  badgeVariant = 'neutral',
  action,
  className = '',
}) => {
  const badgeClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
    violet:
      'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/60',
    emerald:
      'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    amber:
      'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
    neutral:
      'bg-[#EEF1F5] dark:bg-[#222630] text-[#5F6672] dark:text-[#9DA5B4] border-[#E2E6ED] dark:border-[#2D3340]',
  }[badgeVariant];

  return (
    <div className={cn('flex items-start justify-between gap-4 mb-4', className)}>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="w-5 h-5 flex items-center justify-center text-[#5F6672] dark:text-[#9DA5B4]">
              {icon}
            </div>
          )}
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#5F6672] dark:text-[#9DA5B4]">
            {label}
          </span>
          {badge && (
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wider',
                badgeClasses
              )}
            >
              {badge}
            </span>
          )}
        </div>
        {title && (
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#171A1F] dark:text-[#F4F5F7] mt-1 tracking-tight">
            {title}
          </h3>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
