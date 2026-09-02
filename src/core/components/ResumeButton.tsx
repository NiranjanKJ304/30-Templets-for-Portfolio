/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ResumeButton - Universal Resume/CV action button
 */

import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

export interface ResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  resumeUrl?: string;
  label?: string;
  className?: string;
  iconClassName?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  iconType?: 'download' | 'external' | 'none';
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  resumeUrl,
  label = 'View Resume',
  className = '',
  iconClassName = '',
  variant = 'outline',
  size = 'md',
  iconType = 'download',
  ...props
}) => {
  // STRICT RULE: If resumeUrl is missing, do not render a non-functional button
  if (!resumeUrl) {
    return null;
  }

  const isDownload = resumeUrl.endsWith('.pdf') || resumeUrl.includes('download');

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-2.5 text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-sm',
    secondary:
      'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700',
    outline:
      'border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/80',
    ghost:
      'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800',
    pill:
      'rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800',
  }[variant];

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      download={isDownload ? true : undefined}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 select-none whitespace-nowrap',
        sizeClasses,
        variantClasses,
        className
      )}
      aria-label={`${label} (opens in a new tab)`}
      {...props}
    >
      {iconType === 'download' && (
        <FileDown className={cn('w-4 h-4 shrink-0', iconClassName)} />
      )}
      {iconType === 'external' && (
        <ExternalLink className={cn('w-4 h-4 shrink-0', iconClassName)} />
      )}
      <span>{label}</span>
    </a>
  );
};
