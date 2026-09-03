import React from 'react';
import { cn } from '../../../core/utils/cn';
import { ContourLines } from './ContourLines';

interface ContourFieldProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  id?: string;
  contourVariant?: 'subtle' | 'strong' | 'dense' | 'sparse' | 'none';
}

export const ContourField: React.FC<ContourFieldProps> = ({
  children,
  className,
  label,
  id,
  contourVariant = 'subtle',
}) => {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden", className)}>
      {contourVariant !== 'none' && (
        <ContourLines variant={contourVariant} />
      )}
      
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative z-10 py-20 md:py-28 lg:py-40">
        {label && (
          <div className="mb-12 md:mb-16 lg:mb-24 flex items-center gap-4">
            <span className="w-8 h-px bg-[#C7C9B9] dark:bg-[#46504A]"></span>
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#6E746E] dark:text-[#A8AEA6]">
              {label}
            </span>
          </div>
        )}
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};
