import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PosterBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const PosterBlock: React.FC<PosterBlockProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
};
