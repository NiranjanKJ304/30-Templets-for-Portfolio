import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ChromaBoundaryProps {
  className?: string;
  variant?: 'solid' | 'subtle';
}

export const ChromaBoundary: React.FC<ChromaBoundaryProps> = ({
  className,
  variant = 'solid'
}) => {
  return (
    <div 
      className={cn(
        "w-full h-px pointer-events-none",
        variant === 'solid' ? "bg-[#D1CDC2] dark:bg-[#454944]" : "bg-black/5 dark:bg-white/5",
        className
      )}
      aria-hidden="true"
    />
  );
};
