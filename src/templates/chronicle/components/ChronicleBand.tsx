import React from 'react';
import { cn } from '../../../core/utils/cn';
import { ChronicleRule } from './ChronicleRule';

interface ChronicleBandProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  id?: string;
  hasTopRule?: boolean;
  hasBottomRule?: boolean;
}

export const ChronicleBand: React.FC<ChronicleBandProps> = ({
  children,
  className,
  label,
  id,
  hasTopRule = false,
  hasBottomRule = true,
}) => {
  return (
    <section id={id} className={cn("relative w-full flex flex-col", className)}>
      {hasTopRule && <ChronicleRule />}
      
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {label && (
          <div className="py-4 border-b border-[#C9C5BB]/30 dark:border-[#474B47]/30 mb-12 md:mb-16 lg:mb-24">
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#202321] dark:text-[#F0EEE6]">
              {label}
            </span>
          </div>
        )}
        
        <div className={cn("w-full pb-16 md:pb-24 lg:pb-32", !label && "pt-16 md:pt-24 lg:pt-32")}>
          {children}
        </div>
      </div>
      
      {hasBottomRule && <ChronicleRule />}
    </section>
  );
};
