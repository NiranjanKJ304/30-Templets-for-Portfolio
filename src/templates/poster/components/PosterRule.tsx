import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PosterRuleProps {
  className?: string;
  weight?: 'thin' | 'thick';
}

export const PosterRule: React.FC<PosterRuleProps> = ({ className, weight = 'thin' }) => {
  return (
    <div 
      className={cn(
        "w-full bg-[#C9C3B7] dark:bg-[#4A4A47]",
        weight === 'thin' ? "h-[1px]" : "h-2 md:h-4",
        className
      )} 
      aria-hidden="true" 
    />
  );
};
