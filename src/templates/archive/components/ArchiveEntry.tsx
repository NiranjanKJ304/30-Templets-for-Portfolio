import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ArchiveEntryProps {
  index?: string;
  title?: string;
  children: React.ReactNode;
  metadata?: React.ReactNode;
  className?: string;
}

export const ArchiveEntry: React.FC<ArchiveEntryProps> = ({ 
  index, 
  title, 
  children, 
  metadata,
  className 
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {(index || title) && (
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            {index && (
              <div className="font-mono text-sm uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold shrink-0">
                {index}
              </div>
            )}
            {title && (
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-[#20211F] dark:text-[#F1EEE5]">
                {title}
              </h3>
            )}
          </div>
          <div className="w-full h-px bg-[#C8C5BA] dark:bg-[#464943]" aria-hidden="true" />
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {metadata && (
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-4">
            {metadata}
          </div>
        )}
        <div className="w-full flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
