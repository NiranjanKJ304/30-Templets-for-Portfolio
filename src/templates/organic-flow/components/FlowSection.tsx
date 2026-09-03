import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FlowSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  align?: 'left' | 'right' | 'center';
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  children,
  className,
  title,
  align = 'left',
}) => {
  return (
    <div className={cn("w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-24 py-16 md:py-32 flex flex-col gap-12", className)}>
      {title && (
        <h2 className={cn(
          "font-heading font-black text-4xl md:text-6xl text-[#202321] dark:text-[#F1EFE7] tracking-tighter lowercase",
          align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
        )}>
          {title}
        </h2>
      )}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};
