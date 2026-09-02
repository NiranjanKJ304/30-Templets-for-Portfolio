/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralSectionHeader - Precision header with dynamic section telemetry index
 */

import React from 'react';

export interface NeuralSectionHeaderProps {
  index: string; // e.g. "01", "02"
  title: string;
  subtitle?: string;
  count?: number;
  className?: string;
}

export const NeuralSectionHeader: React.FC<NeuralSectionHeaderProps> = ({
  index,
  title,
  subtitle,
  count,
  className = 'mb-12 sm:mb-16',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top telemetry tag */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
          <span className="inline-block w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span>SEC // {index}</span>
        </div>

        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/20 via-neutral-300/40 dark:via-neutral-800 to-transparent" />

        {count !== undefined && (
          <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5">
            NODE COUNT: {String(count).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Main Section Title with precision crosshair */}
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          {title}
        </h2>
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600 select-none">
          +
        </span>
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
