import React from 'react';
import { cn } from '../../../core/utils/cn';
import { ArrowDownRight } from 'lucide-react';

interface KineticSectionHeaderProps {
  title: string;
  index?: number;
  className?: string;
  align?: 'left' | 'right';
  showRule?: boolean;
}

export const KineticSectionHeader: React.FC<KineticSectionHeaderProps> = ({ 
  title, 
  index,
  className,
  align = 'left',
  showRule = true
}) => {
  return (
    <div className={cn(
      "mb-12 md:mb-20 flex flex-col",
      align === 'right' ? "items-end text-right" : "items-start text-left",
      className
    )}>
      <div className={cn(
        "flex items-baseline gap-4",
        align === 'right' ? "flex-row-reverse" : "flex-row"
      )}>
        {typeof index === 'number' && (
          <span className="font-mono text-xl md:text-2xl text-[#E84F3D] dark:text-[#FF715D] font-bold">
            {(index).toString().padStart(2, '0')}
          </span>
        )}
        <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] leading-none group flex items-center gap-4">
          {title}
          <ArrowDownRight className="w-10 h-10 sm:w-16 sm:h-16 text-[#BDB7AA] dark:text-[#454846]" />
        </h2>
      </div>
      
      {showRule && (
        <div className="w-full h-2 bg-[#171717] dark:bg-[#F3F0E8] mt-6 sm:mt-10"></div>
      )}
    </div>
  );
};
