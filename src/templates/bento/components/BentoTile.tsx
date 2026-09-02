/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoTile - Core modular surface container with variable spans & micro-interactions
 */

import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  span?: 'col-12' | 'col-8' | 'col-6' | 'col-4' | 'col-3' | 'col-2';
  variant?: 'default' | 'subtle' | 'accent-blue' | 'accent-violet' | 'accent-emerald' | 'accent-amber';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  id?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const BentoTile: React.FC<BentoTileProps> = ({
  children,
  className = '',
  span = 'col-12',
  variant = 'default',
  padding = 'lg',
  id,
  onClick,
  hoverEffect = true,
}) => {
  const spanClasses = {
    'col-12': 'col-span-1 md:col-span-6 lg:col-span-12',
    'col-8': 'col-span-1 md:col-span-6 lg:col-span-8',
    'col-6': 'col-span-1 md:col-span-3 lg:col-span-6',
    'col-4': 'col-span-1 md:col-span-3 lg:col-span-4',
    'col-3': 'col-span-1 md:col-span-2 lg:col-span-3',
    'col-2': 'col-span-1 md:col-span-2 lg:col-span-2',
  }[span];

  const variantClasses = {
    default:
      'bg-white dark:bg-[#191C22] text-[#171A1F] dark:text-[#F4F5F7] border border-[#E2E6ED] dark:border-[#2A2E39] shadow-xs hover:shadow-md hover:border-[#CBD2DE] dark:hover:border-[#383E4C]',
    subtle:
      'bg-[#EEF1F5] dark:bg-[#222630] text-[#171A1F] dark:text-[#F4F5F7] border border-[#E2E6ED] dark:border-[#2D3340] shadow-xs hover:shadow-md',
    'accent-blue':
      'bg-blue-50/70 dark:bg-blue-950/20 text-[#171A1F] dark:text-[#F4F5F7] border border-blue-200/80 dark:border-blue-800/40 shadow-xs hover:shadow-md',
    'accent-violet':
      'bg-violet-50/70 dark:bg-violet-950/20 text-[#171A1F] dark:text-[#F4F5F7] border border-violet-200/80 dark:border-violet-800/40 shadow-xs hover:shadow-md',
    'accent-emerald':
      'bg-emerald-50/70 dark:bg-emerald-950/20 text-[#171A1F] dark:text-[#F4F5F7] border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs hover:shadow-md',
    'accent-amber':
      'bg-amber-50/70 dark:bg-amber-950/20 text-[#171A1F] dark:text-[#F4F5F7] border border-amber-200/80 dark:border-amber-800/40 shadow-xs hover:shadow-md',
  }[variant];

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  }[padding];

  return (
    <div
      id={id}
      onClick={onClick}
      className={cn(
        'rounded-2xl sm:rounded-3xl transition-all duration-200 flex flex-col relative overflow-hidden',
        hoverEffect && 'hover:-translate-y-0.5',
        spanClasses,
        variantClasses,
        paddingClasses,
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};
