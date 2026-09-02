/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoMediaTile - Specialized media presentation tile with smooth image scaling
 */

import React from 'react';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { cn } from '../../../core/utils/cn';

export interface BentoMediaTileProps {
  src?: string;
  alt?: string;
  aspectRatioClass?: string;
  className?: string;
  overlay?: React.ReactNode;
  children?: React.ReactNode;
  badge?: string;
}

export const BentoMediaTile: React.FC<BentoMediaTileProps> = ({
  src,
  alt = 'Media preview',
  aspectRatioClass = 'aspect-video',
  className = '',
  overlay,
  children,
  badge,
}) => {
  return (
    <div
      className={cn(
        'relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#EEF1F5] dark:bg-[#222630] border border-[#E2E6ED] dark:border-[#2D3340] group',
        className
      )}
    >
      {src ? (
        <div className={cn('w-full h-full overflow-hidden', aspectRatioClass)}>
          <ImageWithFallback
            src={src}
            alt={alt}
            aspectRatioClass={aspectRatioClass}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={cn('w-full flex items-center justify-center p-8 text-[#8E95A3]', aspectRatioClass)}>
          <span className="font-mono text-xs uppercase tracking-widest">[MEDIA PREVIEW]</span>
        </div>
      )}

      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[#171A1F] dark:text-[#F4F5F7] shadow-xs border border-black/5 dark:border-white/10">
            {badge}
          </span>
        </div>
      )}

      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />}

      {children && <div className="relative z-20">{children}</div>}
    </div>
  );
};
