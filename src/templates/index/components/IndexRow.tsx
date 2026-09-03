import React from 'react';
import { cn } from '../../../core/utils/cn';

interface IndexRowProps {
  index?: string | React.ReactNode;
  title: string | React.ReactNode;
  metadata?: React.ReactNode;
  description?: React.ReactNode;
  tags?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isHeader?: boolean;
}

export const IndexRow: React.FC<IndexRowProps> = ({
  index,
  title,
  metadata,
  description,
  tags,
  onClick,
  className,
  isHeader = false,
}) => {
  const Component = onClick ? 'button' : 'div';
  const rowClasses = cn(
    "w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 border-b border-[#D5D6D0] dark:border-[#404440] group",
    onClick && "text-left cursor-pointer hover:bg-[#FFFFFF] dark:hover:bg-[#1A1E1C] px-4 -mx-4 transition-colors",
    isHeader && "py-3 border-y border-[#D5D6D0] dark:border-[#404440] bg-[#F6F5F1] dark:bg-[#121514] text-[#696C67] dark:text-[#A8ABA4]",
    className
  );

  return (
    <Component className={rowClasses} onClick={onClick}>
      {/* Index Column */}
      <div className={cn(
        "md:col-span-1 font-mono uppercase tracking-widest",
        isHeader ? "text-[10px] font-bold" : "text-xs text-[#B9C8C3] dark:text-[#5E716C]"
      )}>
        {index}
      </div>

      {/* Title Column */}
      <div className={cn(
        "md:col-span-4",
        isHeader ? "font-mono text-[10px] uppercase tracking-widest font-bold" : "font-heading font-bold text-xl lg:text-2xl text-[#181A19] dark:text-[#F2F1EA]"
      )}>
        {title}
      </div>

      {/* Metadata Column */}
      {metadata && (
        <div className={cn(
          "md:col-span-3",
          isHeader ? "font-mono text-[10px] uppercase tracking-widest font-bold" : "font-mono text-xs uppercase tracking-widest text-[#181A19] dark:text-[#F2F1EA]"
        )}>
          {metadata}
        </div>
      )}

      {/* Description / Tags Column */}
      <div className={cn(
        metadata ? "md:col-span-4" : "md:col-span-7",
        "flex flex-col gap-3",
        isHeader ? "font-mono text-[10px] uppercase tracking-widest font-bold" : "font-body text-sm text-[#696C67] dark:text-[#A8ABA4]"
      )}>
        {description}
        {tags && !isHeader && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags}
          </div>
        )}
      </div>
    </Component>
  );
};
