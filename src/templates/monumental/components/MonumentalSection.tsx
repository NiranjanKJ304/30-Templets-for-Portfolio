import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonumentalSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  index?: string;
  align?: 'left' | 'right' | 'center';
}

export const MonumentalSection: React.FC<MonumentalSectionProps> = ({
  children,
  className,
  title,
  index,
  align = 'left',
}) => {
  return (
    <section className={cn("w-full max-w-[2000px] mx-auto px-8 sm:px-16 md:px-32 lg:px-48 py-24 md:py-48 lg:py-64 flex flex-col gap-16 md:gap-32 relative", className)}>
      {(title || index) && (
        <div className={cn(
          "flex flex-col gap-4 border-t-8 border-[#171918] dark:border-[#F0EEE6] pt-8 w-full",
          align === 'right' ? 'items-end text-right' : align === 'center' ? 'items-center text-center' : 'items-start text-left'
        )}>
          {index && (
            <span className="font-mono text-xl md:text-3xl text-[#B94F38] dark:text-[#D16A52] block">
              {index}
            </span>
          )}
          {title && (
            <h2 className="font-heading font-black text-5xl md:text-8xl lg:text-[10rem] leading-none text-[#171918] dark:text-[#F0EEE6] uppercase tracking-tighter">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};
