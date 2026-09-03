import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MosaicTileProps {
  children: React.ReactNode;
  className?: string;
  span?: 'full' | 'half' | 'third' | 'two-thirds' | 'quarter' | 'three-quarters' | 'auto';
  mobileSpan?: 'full' | 'half' | 'auto';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  surface?: 'canvas' | 'primary' | 'warm' | 'soft' | 'none';
}

/**
 * A highly reusable CSS Grid tile that handles span and surface treatments dynamically.
 */
export const MosaicTile: React.FC<MosaicTileProps> = ({ 
  children, 
  className,
  span = 'auto',
  mobileSpan = 'full',
  padding = 'md',
  surface = 'primary'
}) => {
  // Desktop/Tablet Grid Span Classes (12-column system)
  const spanClasses = {
    'full': 'md:col-span-12',
    'half': 'md:col-span-6',
    'third': 'md:col-span-4',
    'two-thirds': 'md:col-span-8',
    'quarter': 'md:col-span-3',
    'three-quarters': 'md:col-span-9',
    'auto': 'md:col-span-auto',
  };

  // Mobile Grid Span Classes (1-column system by default, sometimes 2)
  const mobileSpanClasses = {
    'full': 'col-span-1 sm:col-span-2',
    'half': 'col-span-1 sm:col-span-1',
    'auto': 'col-span-auto',
  };

  const paddingClasses = {
    'none': 'p-0',
    'sm': 'p-4 sm:p-6',
    'md': 'p-6 sm:p-10',
    'lg': 'p-10 sm:p-16',
    'xl': 'p-12 sm:p-20 lg:p-24',
  };

  const surfaceClasses = {
    'canvas': 'bg-[#F5F2EC] dark:bg-[#121414] border border-[#CBC5BB] dark:border-[#444744]',
    'primary': 'bg-[#FFFDF8] dark:bg-[#1B1E1E] border border-[#CBC5BB] dark:border-[#444744]',
    'warm': 'bg-[#E9DED0] dark:bg-[#302925] border border-[#CBC5BB] dark:border-[#444744]',
    'soft': 'bg-[#A79BAF] dark:bg-[#B4A9B9] border border-[#CBC5BB] dark:border-[#444744]',
    'none': '',
  };

  return (
    <div className={cn(
      "w-full h-full relative overflow-hidden",
      spanClasses[span],
      mobileSpanClasses[mobileSpan],
      paddingClasses[padding],
      surfaceClasses[surface],
      className
    )}>
      {children}
    </div>
  );
};
