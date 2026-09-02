/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SectionWrapper - Semantic section container enforcing visibility & data rules
 */

import React from 'react';
import type { SectionId } from '../types/section';
import { cn } from '../utils/cn';

export interface SectionWrapperProps {
  id: SectionId;
  enabled?: boolean;
  hasData?: boolean;
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
  headerAlign?: 'left' | 'center' | 'right';
  customHeader?: React.ReactNode;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  enabled = true,
  hasData = true,
  title,
  subtitle,
  badge,
  className = '',
  containerClassName = '',
  headerClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  badgeClassName = '',
  headerAlign = 'left',
  customHeader,
  children,
  'aria-label': ariaLabel,
}) => {
  // STRICT RULE #6 & #7:
  // If section is disabled OR relevant data is absent, completely remove it from the DOM.
  // Do NOT leave headers, spacing, separators, or wrappers.
  if (!enabled || !hasData) {
    return null;
  }

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[headerAlign];

  const hasHeader = Boolean(title || subtitle || badge || customHeader);

  return (
    <section
      id={id}
      data-section={id}
      aria-label={ariaLabel || title || id}
      className={cn('w-full transition-colors duration-200', className)}
    >
      <div className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {hasHeader && (
          <div className={cn('mb-10 sm:mb-12 flex flex-col', alignClasses, headerClassName)}>
            {customHeader ? (
              customHeader
            ) : (
              <>
                {badge && (
                  <span
                    className={cn(
                      'inline-block px-3 py-1 mb-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
                      badgeClassName
                    )}
                  >
                    {badge}
                  </span>
                )}
                {title && (
                  <h2
                    className={cn(
                      'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white',
                      titleClassName
                    )}
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p
                    className={cn(
                      'mt-2.5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl',
                      subtitleClassName
                    )}
                  >
                    {subtitle}
                  </p>
                )}
              </>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};
