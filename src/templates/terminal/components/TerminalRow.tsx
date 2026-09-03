import React from 'react';
import { cn } from '../../../core/utils/cn';

interface TerminalRowProps {
  index?: string;
  title: string | React.ReactNode;
  metadata?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const TerminalRow: React.FC<TerminalRowProps> = ({ index, title, metadata, children, className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row gap-2 md:gap-6 items-start", className)}>
      {index && (
        <div className="font-mono text-sm text-[#5F6861] dark:text-[#9CA39D] shrink-0 md:w-8 select-none">
          {index}
        </div>
      )}
      <div className="flex flex-col gap-2 w-full flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 border-b border-dashed border-[#C9D0C9] dark:border-[#303833] pb-1">
          <div className="font-mono font-bold text-[#18201B] dark:text-[#DCE4DC]">
            {title}
          </div>
          {metadata && (
            <div className="font-mono text-xs text-[#5F6861] dark:text-[#9CA39D] md:text-right shrink-0">
              {metadata}
            </div>
          )}
        </div>
        <div className="font-body text-sm text-[#5F6861] dark:text-[#9CA39D] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};
