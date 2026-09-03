import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonumentalDividerProps {
  className?: string;
  thickness?: 'thin' | 'thick' | 'massive';
}

export const MonumentalDivider: React.FC<MonumentalDividerProps> = ({ className, thickness = 'thick' }) => {
  const thicknessMap = {
    thin: 'h-1',
    thick: 'h-4 md:h-8',
    massive: 'h-16 md:h-32',
  };

  return (
    <div 
      className={cn("w-full bg-[#D8D4C9] dark:bg-[#303430]", thicknessMap[thickness], className)} 
      aria-hidden="true" 
    />
  );
};
