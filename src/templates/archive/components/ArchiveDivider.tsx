import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ArchiveDividerProps {
  className?: string;
  thick?: boolean;
}

export const ArchiveDivider: React.FC<ArchiveDividerProps> = ({ className, thick = false }) => (
  <div 
    className={cn(
      "w-full bg-[#C8C5BA] dark:bg-[#464943]",
      thick ? "h-[2px]" : "h-px",
      className
    )}
    aria-hidden="true"
  />
);
