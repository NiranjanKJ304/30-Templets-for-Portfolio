import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FolioSheetProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  pageNum?: string;
  title?: string;
  alternate?: boolean;
  offset?: 'left' | 'right' | 'none';
  noPadding?: boolean;
}

export const FolioSheet: React.FC<FolioSheetProps> = ({
  children,
  className,
  id,
  pageNum,
  title,
  alternate = false,
  offset = 'none',
  noPadding = false,
}) => {
  return (
    <section id={id} className="w-full relative py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 flex justify-center">
      <div 
        className={cn(
          "w-full max-w-[1300px] relative transition-transform duration-700",
          alternate ? "bg-[#F3F0E7] dark:bg-[#242926]" : "bg-[#FAF8F1] dark:bg-[#1D211F]",
          "border border-[#C9C5BA] dark:border-[#444A45]",
          "shadow-sm md:shadow-md",
          offset === 'left' && "lg:-translate-x-4 xl:-translate-x-8",
          offset === 'right' && "lg:translate-x-4 xl:translate-x-8",
          className
        )}
      >
        {/* Subtle top edge highlight to emphasize paper thickness */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/40 dark:bg-white/10 pointer-events-none" />
        
        <div className={cn("w-full h-full", !noPadding && "p-8 md:p-12 lg:p-16 xl:p-24")}>
          
          {(pageNum || title) && (
            <div className="flex items-center gap-4 mb-12 md:mb-16 lg:mb-20 pb-6 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50">
              {pageNum && (
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">
                  {pageNum}
                </span>
              )}
              {pageNum && title && (
                <span className="font-mono text-[10px] text-[#C9C5BA] dark:text-[#444A45]">/</span>
              )}
              {title && (
                <span className="font-mono text-xs uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                  {title}
                </span>
              )}
            </div>
          )}
          
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
