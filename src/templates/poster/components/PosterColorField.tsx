import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PosterColorFieldProps {
  className?: string;
  color?: 'cobalt' | 'vermilion' | 'butter' | 'mint' | 'lavender';
}

export const PosterColorField: React.FC<PosterColorFieldProps> = ({ className, color = 'cobalt' }) => {
  const colorMap = {
    cobalt: 'bg-[#3157D5] dark:bg-[#6E8CFF]',
    vermilion: 'bg-[#D94B36] dark:bg-[#F07761]',
    butter: 'bg-[#E6C95C] dark:bg-[#E0C96D]',
    mint: 'bg-[#9DB9A6] dark:bg-[#9FC2AD]',
    lavender: 'bg-[#A79AB8] dark:bg-[#B7A9C7]',
  };

  return (
    <div className={cn("w-full h-full min-h-4 md:min-h-8", colorMap[color], className)} aria-hidden="true" />
  );
};
