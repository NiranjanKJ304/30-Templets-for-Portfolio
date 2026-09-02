/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirFigure - Editorial Image presentation for Magazine Noir
 */

import React from 'react';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface NoirFigureProps {
  src?: string;
  alt: string;
  captionYear?: string | number;
  captionCategory?: string;
  captionMeta?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide' | 'tall';
  className?: string;
  priority?: boolean;
}

export const NoirFigure: React.FC<NoirFigureProps> = ({
  src,
  alt,
  captionYear,
  captionCategory,
  captionMeta,
  aspectRatio = 'landscape',
  className = '',
}) => {
  if (!src) return null;

  const aspectClasses: Record<string, string> = {
    landscape: 'aspect-4/3 sm:aspect-16/10',
    portrait: 'aspect-3/4 sm:aspect-4/5',
    square: 'aspect-square',
    wide: 'aspect-16/9 md:aspect-21/9',
    tall: 'aspect-2/3 md:aspect-3/5',
  };

  const selectedAspect = aspectClasses[aspectRatio] || aspectClasses.landscape;

  const hasCaption = Boolean(captionYear || captionCategory || captionMeta);

  return (
    <figure className={`group block overflow-hidden ${className}`}>
      <div className={`relative w-full ${selectedAspect} overflow-hidden bg-[#EDEAE1] dark:bg-[#1A1A1A]`}>
        <ImageWithFallback
          src={src}
          alt={alt}
          aspectRatioClass="w-full h-full"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Subtle Luxury Film Grain Overlay Tone */}
        <div className="pointer-events-none absolute inset-0 bg-[#171717]/5 dark:bg-[#000000]/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      {hasCaption && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[#99938A] dark:text-[#777168]">
          <div className="flex items-center gap-2 truncate">
            {captionCategory && (
              <span className="text-[#8B5E3C] dark:text-[#C49A6C] font-semibold">
                {captionCategory}
              </span>
            )}
            {captionCategory && captionMeta && <span>—</span>}
            {captionMeta && <span className="truncate">{captionMeta}</span>}
          </div>

          {captionYear && (
            <span className="shrink-0 text-[#68645D] dark:text-[#B8B2A8] font-medium">
              [{captionYear}]
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
