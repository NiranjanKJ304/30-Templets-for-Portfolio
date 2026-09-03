import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonoformRuleProps {
  className?: string;
  variant?: 'primary' | 'subtle';
  orientation?: 'horizontal' | 'vertical';
}

export const MonoformRule: React.FC<MonoformRuleProps> = ({
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
          ? "bg-[#C8C7BF] dark:bg-[#444844]" 
          : "bg-[#C8C7BF]/40 dark:bg-[#444844]/40",
        className
      )}
      aria-hidden="true"
    />
  );
};
