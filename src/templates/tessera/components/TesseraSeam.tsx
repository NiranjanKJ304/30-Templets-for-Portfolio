import React from 'react';
import { cn } from '../../../core/utils/cn';

interface TesseraSeamProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'double';
}

export const TesseraSeam: React.FC<TesseraSeamProps> = ({ 
  className,
  orientation = 'horizontal',
  variant = 'solid'
}) => {
  return (
    <div 
      className={cn(
        "pointer-events-none opacity-50 dark:opacity-70",
        orientation === 'horizontal' ? "w-full border-t" : "h-full border-l",
        variant === 'dashed' ? 'border-dashed' : variant === 'double' ? 'border-double border-t-[3px] border-l-[3px]' : 'border-solid',
        "border-[#C8C4B9] dark:border-[#4A4D48]",
        className
      )}
      aria-hidden="true"
    />
  );
};
