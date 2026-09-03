import React from 'react';
import { cn } from '../../../core/utils/cn';
import { KinshipAnchor } from './KinshipAnchor';
import { KinshipConnector } from './KinshipConnector';

interface KinshipSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  color?: 'primary' | 'coral' | 'blue' | 'gold' | 'lavender';
}

export const KinshipSection: React.FC<KinshipSectionProps> = ({
  children,
  className,
  title,
  color = 'primary',
}) => {
  return (
    <section className={cn("w-full relative py-20 md:py-32 px-6 sm:px-12 md:px-24 mx-auto max-w-[1400px] flex flex-col md:flex-row gap-12 md:gap-24", className)}>
      {title && (
        <div className="w-full md:w-1/4 lg:w-1/5 shrink-0 flex md:flex-col gap-6 items-start">
          <div className="flex items-center gap-4">
            <KinshipAnchor color={color} size="lg" />
            <h2 className="font-heading font-medium text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] tracking-wide">
              {title}
            </h2>
          </div>
          {/* Decorative connector down the side on desktop */}
          <KinshipConnector orientation="vertical" className="hidden md:block flex-1 ml-[5px] mt-2 opacity-50" />
        </div>
      )}
      <div className="w-full md:w-3/4 lg:w-4/5 flex-1 relative z-10">
        {children}
      </div>
    </section>
  );
};
