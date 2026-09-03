import React from 'react';
import { cn } from '../../../core/utils/cn';
import { MosaicTile } from './MosaicTile';

interface MosaicSectionHeaderProps {
  title: string;
  className?: string;
}

export const MosaicSectionHeader: React.FC<MosaicSectionHeaderProps> = ({ title, className }) => {
  return (
    <MosaicTile span="full" padding="md" surface="warm" className={cn("flex flex-col justify-end min-h-[160px] md:min-h-[240px]", className)}>
      <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-[6rem] uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-none mb-0">
        {title}
      </h2>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#1B1B1A] dark:border-[#F1EEE7]" aria-hidden="true"></div>
    </MosaicTile>
  );
};
