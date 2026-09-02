/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoSectionHeader - Modular cluster title & metadata descriptor
 */

import React from 'react';
import { cn } from '../../../core/utils/cn';

export interface BentoSectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const BentoSectionHeader: React.FC<BentoSectionHeaderProps> = ({
  label,
  title,
  subtitle,
  icon,
  action,
  className = '',
}) => {
  return (
    <div className={cn('col-span-1 md:col-span-6 lg:col-span-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-6 pb-2', className)}>
      <div className="flex flex-col">
        {label && (
          <div className="flex items-center gap-1.5 mb-1 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-wider">
            {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
            <span>{label}</span>
          </div>
        )}
        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-[#171A1F] dark:text-[#F4F5F7]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-[#5F6672] dark:text-[#9DA5B4] mt-1 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
