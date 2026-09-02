/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyTimelineSpine - Reusable progression node and continuous vertical line anchor
 */

import React from 'react';

export interface JourneyTimelineNodeProps {
  date?: string;
  isCurrent?: boolean;
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export const JourneyTimelineNode: React.FC<JourneyTimelineNodeProps> = ({
  date,
  isCurrent = false,
  children,
  className = '',
}) => {
  return (
    <div className={`relative pl-8 sm:pl-10 md:pl-12 group ${className}`}>
      {/* Vertical Spine Line */}
      <div
        className="absolute left-3.5 sm:left-4.5 md:left-5.5 top-3 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 group-last:bottom-4"
        aria-hidden="true"
      />

      {/* Waypoint Marker */}
      <div
        className={`absolute left-1.5 sm:left-2.5 md:left-3.5 top-2 w-4 h-4 rounded-full border-2 transition-transform duration-300 flex items-center justify-center ${
          isCurrent
            ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 dark:border-teal-400'
            : 'border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-900 group-hover:border-teal-600 dark:group-hover:border-teal-400'
        }`}
        aria-hidden="true"
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            isCurrent
              ? 'bg-teal-600 dark:bg-teal-400 animate-pulse'
              : 'bg-neutral-400 dark:bg-neutral-500 group-hover:bg-teal-600 dark:group-hover:bg-teal-400'
          }`}
        />
      </div>

      {/* Optional Date Marker */}
      {date && (
        <div className="mb-2 font-mono text-xs font-semibold text-teal-700 dark:text-teal-400 tracking-wide uppercase">
          {date}
        </div>
      )}

      {/* Node Content */}
      <div className="relative">{children}</div>
    </div>
  );
};
