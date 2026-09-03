import React from 'react';
import { cn } from '../../../core/utils/cn';
import { VellumRule } from './VellumRule';

interface VellumSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  number?: string;
}

export const VellumSection: React.FC<VellumSectionProps> = ({
  children,
  className,
  title,
  number
}) => {
  return (
    <section className={cn("w-full relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mx-auto max-w-[1400px]", className)}>
      <div className="flex flex-col md:flex-row relative">
        
        {/* Left Margin / Gutter */}
        <div className="hidden md:flex w-24 lg:w-48 xl:w-64 shrink-0 flex-col relative pr-8">
          <VellumRule orientation="vertical" className="absolute top-0 bottom-0 right-8" />
          
          {title && (
            <div className="sticky top-32 flex flex-col items-end gap-2 pr-4 text-right">
              {number && (
                <span className="font-mono text-sm text-[#A94F3E] dark:text-[#D27661] italic">
                  No. {number}
                </span>
              )}
              <h2 className="font-heading font-medium text-lg lg:text-xl text-[#242522] dark:text-[#F0EDE3] lowercase tracking-wide">
                {title}
              </h2>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0 relative pb-24 md:pb-32">
          
          {/* Mobile Title */}
          {title && (
            <div className="md:hidden flex items-baseline gap-4 mb-8 pb-4 border-b border-[#C8C2B5] dark:border-[#4A4B46]">
              {number && (
                <span className="font-mono text-[10px] text-[#A94F3E] dark:text-[#D27661] italic">
                  No. {number}
                </span>
              )}
              <h2 className="font-heading font-medium text-2xl text-[#242522] dark:text-[#F0EDE3] lowercase">
                {title}
              </h2>
            </div>
          )}

          <div className="relative z-10 w-full lg:max-w-3xl xl:max-w-4xl">
            {children}
          </div>
        </div>

      </div>
    </section>
  );
};
