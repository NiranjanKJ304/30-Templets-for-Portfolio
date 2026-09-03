import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PosterLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const PosterLabel: React.FC<PosterLabelProps> = ({ children, className }) => {
  return (
    <div className={cn("font-mono text-xs uppercase tracking-widest font-bold", className)}>
      {children}
    </div>
  );
};
