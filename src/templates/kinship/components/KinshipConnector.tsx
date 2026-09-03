import React from 'react';
import { cn } from '../../../core/utils/cn';

interface KinshipConnectorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  type?: 'solid' | 'dashed';
}

export const KinshipConnector: React.FC<KinshipConnectorProps> = ({ 
  className,
  orientation = 'horizontal',
  type = 'solid'
}) => {
  return (
    <div 
      className={cn(
        "pointer-events-none border-[#A8B2AC] dark:border-[#59625D]",
        orientation === 'horizontal' ? "w-full border-t" : "h-full border-l",
        type === 'dashed' ? 'border-dashed' : 'border-solid',
        className
      )}
      aria-hidden="true"
    />
  );
};
