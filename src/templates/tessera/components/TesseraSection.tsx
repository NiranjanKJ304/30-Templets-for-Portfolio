import React from 'react';
import { cn } from '../../../core/utils/cn';
import { TesseraSeam } from './TesseraSeam';

interface TesseraSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  accent?: 'primary' | 'teal' | 'terracotta' | 'mustard' | 'blue' | 'plum';
}

export const TesseraSection: React.FC<TesseraSectionProps> = ({
  children,
  className,
  title,
  accent = 'primary',
}) => {
  const accentColorMap = {
    primary: 'bg-[#242522] dark:bg-[#F0EEE5]',
    teal: 'bg-[#315F5A] dark:bg-[#6E9D94]',
    terracotta: 'bg-[#C6654F] dark:bg-[#D67A62]',
    mustard: 'bg-[#C5A452] dark:bg-[#D4BC6B]',
    blue: 'bg-[#718B98] dark:bg-[#91A9B4]',
    plum: 'bg-[#8D7180] dark:bg-[#B39AA7]',
  };

  const textColorMap = {
    primary: 'text-[#FBF9F3] dark:text-[#1E2220]',
    teal: 'text-[#FBF9F3]',
    terracotta: 'text-[#FBF9F3]',
    mustard: 'text-[#FBF9F3]',
    blue: 'text-[#FBF9F3]',
    plum: 'text-[#FBF9F3]',
  };

  return (
    <section className={cn("w-full relative px-4 sm:px-8 md:px-16 mx-auto max-w-[1600px] flex flex-col md:flex-row items-stretch", className)}>
      {title && (
        <div className="w-full md:w-48 lg:w-64 shrink-0 flex flex-col relative z-20">
          <div className={cn(
            "p-6 flex items-center justify-between",
            "border border-[#C8C4B9] dark:border-[#4A4D48]",
            "bg-[#FBF9F3] dark:bg-[#1E2220]",
            "md:border-b-0 md:border-r-0"
          )}>
            <h2 className="font-heading font-semibold text-lg md:text-xl text-[#242522] dark:text-[#F0EEE5] tracking-wide uppercase">
              {title}
            </h2>
            <div className={cn("w-3 h-3 rotate-45", accentColorMap[accent])} aria-hidden="true" />
          </div>
          <div className={cn(
            "hidden md:block flex-1 border-r border-[#C8C4B9] dark:border-[#4A4D48]",
            "relative"
          )}>
            {/* Registration marks */}
            <div className="absolute top-1/2 right-[-4px] w-2 h-8 border-y border-l border-[#C8C4B9] dark:border-[#4A4D48] bg-[#F2EFE7] dark:bg-[#151716]" aria-hidden="true" />
          </div>
        </div>
      )}
      <div className={cn(
        "flex-1 relative z-10 w-full min-w-0",
        title ? "pt-8 md:pt-0" : ""
      )}>
        {/* Main continuous horizontal seam top */}
        {title && <TesseraSeam orientation="horizontal" className="hidden md:block absolute top-0 left-0 w-full z-0" />}
        {children}
      </div>
    </section>
  );
};
