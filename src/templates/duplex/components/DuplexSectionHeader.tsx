import React from 'react';
import { cn } from '../../../core/utils/cn';

interface DuplexSectionHeaderProps {
  title: string;
  index?: number;
  className?: string;
  align?: 'left' | 'right';
}

export const DuplexSectionHeader: React.FC<DuplexSectionHeaderProps> = ({ 
  title, 
  index,
  className,
  align = 'left' 
}) => {
  return (
    <div className={cn(
      "mb-16 pb-6 border-b border-[#B7B0A5]/40 dark:border-[#414542]/40 flex items-baseline gap-4",
      align === 'right' ? "flex-row-reverse text-right" : "flex-row text-left",
      className
    )}>
      {typeof index === 'number' && (
        <span className="font-mono text-sm text-[#D35F43] dark:text-[#E0795D] font-bold">
          {(index).toString().padStart(2, '0')}
        </span>
      )}
      <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7]">
        {title}
      </h2>
    </div>
  );
};
