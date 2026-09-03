import React from 'react';
import { cn } from '../../../core/utils/cn';

interface PrismSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  align?: 'left' | 'right';
  colorFacet?: 'blue' | 'coral' | 'violet' | 'cyan' | 'gold' | 'rose' | 'none';
}

export const PrismSection: React.FC<PrismSectionProps> = ({
  children,
  className,
  title,
  align = 'left',
  colorFacet = 'none',
}) => {
  const colorMap = {
    blue: 'text-[#4566C7] dark:text-[#7187E1]',
    coral: 'text-[#D46750] dark:text-[#E17A63]',
    violet: 'text-[#8069AA] dark:text-[#A28AC7]',
    cyan: 'text-[#6C9CA3] dark:text-[#82B0B5]',
    gold: 'text-[#D2B45C] dark:text-[#D9C276]',
    rose: 'text-[#B58D9B] dark:text-[#C29FAA]',
    none: 'text-[#171A1B] dark:text-[#F1F0EA]',
  };

  return (
    <section className={cn("w-full relative py-24 md:py-40 px-6 sm:px-12 md:px-24 mx-auto max-w-[2000px] flex flex-col", className)}>
      {title && (
        <div className={cn(
          "w-full flex mb-16 md:mb-24",
          align === 'right' ? 'justify-end' : 'justify-start'
        )}>
          <div className="relative inline-block">
            {/* Decorative background facet */}
            <div 
              className={cn(
                "absolute -top-4 -left-6 -right-12 -bottom-4 bg-current opacity-10 dark:opacity-20 pointer-events-none z-0",
                colorMap[colorFacet] !== 'text-[#171A1B] dark:text-[#F1F0EA]' ? colorMap[colorFacet] : 'text-[#6B706F] dark:text-[#A8ADA9]'
              )}
              style={{
                clipPath: align === 'right' 
                  ? 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' 
                  : 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
              }}
              aria-hidden="true"
            />
            <h2 className="relative z-10 font-heading font-extrabold text-4xl md:text-6xl text-[#171A1B] dark:text-[#F1F0EA] uppercase tracking-tight">
              {title}
            </h2>
          </div>
        </div>
      )}
      <div className="w-full relative z-10">
        {children}
      </div>
    </section>
  );
};
