import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PosterNumberProps {
  index: string;
  className?: string;
  color?: 'cobalt' | 'vermilion' | 'butter' | 'mint' | 'lavender';
}

export const PosterNumber: React.FC<PosterNumberProps> = ({ index, className, color = 'cobalt' }) => {
  const colorMap = {
    cobalt: 'text-[#3157D5] dark:text-[#6E8CFF]',
    vermilion: 'text-[#D94B36] dark:text-[#F07761]',
    butter: 'text-[#E6C95C] dark:text-[#E0C96D]',
    mint: 'text-[#9DB9A6] dark:text-[#9FC2AD]',
    lavender: 'text-[#A79AB8] dark:text-[#B7A9C7]',
  };

  return (
    <div className={cn("font-heading font-black text-6xl md:text-9xl leading-none opacity-20 select-none", colorMap[color], className)} aria-hidden="true">
      {index}
    </div>
  );
};
