/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ImageWithFallback - Universal resilient image component with graceful fallback
 */

import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '../utils/cn';

export interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string | null;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
  aspectRatioClass?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  fallbackIcon,
  fallbackText,
  aspectRatioClass = '',
  containerClassName = '',
  loading = 'lazy',
  ...imgProps
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no source is provided or image loading failed
  if (!src || hasError) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500 overflow-hidden select-none',
          aspectRatioClass,
          containerClassName,
          fallbackClassName
        )}
        aria-label={alt || 'Placeholder image'}
        role="img"
      >
        {fallbackIcon || <ImageOff className="w-6 h-6 opacity-60 stroke-[1.5]" />}
        {fallbackText && (
          <span className="mt-1.5 text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
            {fallbackText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-neutral-100 dark:bg-neutral-800', aspectRatioClass, containerClassName)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          !isLoaded && 'opacity-0',
          isLoaded && 'opacity-100',
          className
        )}
        {...imgProps}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse" />
      )}
    </div>
  );
};
