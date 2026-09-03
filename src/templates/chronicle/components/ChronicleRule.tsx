import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ChronicleRuleProps {
  className?: string;
  variant?: 'primary' | 'subtle';
  orientation?: 'horizontal' | 'vertical';
}

export const ChronicleRule: React.FC<ChronicleRuleProps> = ({
  className,
  variant = 'primary',
  orientation = 'horizontal'
}) => {
  return (
    <div 
      className={cn(
        "pointer-events-none",
        orientation === 'horizontal' ? "w-full h-px" : "h-full w-px",
        variant === 'primary' 
          ? "bg-[#C9C5BB] dark:bg-[#474B47]" 
          : "bg-[#C9C5BB]/40 dark:bg-[#474B47]/40",
        className
      )}
      aria-hidden="true"
    />
  );
};
