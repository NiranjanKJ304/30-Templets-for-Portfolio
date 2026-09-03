import React from 'react';
import { cn } from '../../../core/utils/cn';

interface VellumAnnotationProps {
  children?: React.ReactNode;
  className?: string;
  marker?: string | React.ReactNode;
  variant?: 'marginalia' | 'inline' | 'bracket' | 'underline';
  color?: 'inkBlue' | 'brick' | 'olive' | 'ochre' | 'dustRose' | 'primary';
  position?: 'left' | 'right' | 'top' | 'bottom';
}

export const VellumAnnotation: React.FC<VellumAnnotationProps> = ({
  children,
  className,
  marker,
  variant = 'marginalia',
  color = 'primary',
  position = 'left'
}) => {
  const colorMap = {
    inkBlue: 'text-[#425C72] dark:text-[#7E9CAF] border-[#425C72] dark:border-[#7E9CAF]',
    brick: 'text-[#A94F3E] dark:text-[#D27661] border-[#A94F3E] dark:border-[#D27661]',
    olive: 'text-[#747B5D] dark:text-[#A5AE87] border-[#747B5D] dark:border-[#A5AE87]',
    ochre: 'text-[#B7974F] dark:text-[#D1B56B] border-[#B7974F] dark:border-[#D1B56B]',
    dustRose: 'text-[#9D7776] dark:text-[#C19B9B] border-[#9D7776] dark:border-[#C19B9B]',
    primary: 'text-[#242522] dark:text-[#F0EDE3] border-[#242522] dark:border-[#F0EDE3]',
  };

  const bgMap = {
    inkBlue: 'bg-[#425C72] dark:bg-[#7E9CAF]',
    brick: 'bg-[#A94F3E] dark:bg-[#D27661]',
    olive: 'bg-[#747B5D] dark:bg-[#A5AE87]',
    ochre: 'bg-[#B7974F] dark:bg-[#D1B56B]',
    dustRose: 'bg-[#9D7776] dark:bg-[#C19B9B]',
    primary: 'bg-[#242522] dark:bg-[#F0EDE3]',
  };

  if (variant === 'marginalia') {
    return (
      <div className={cn("relative flex items-start gap-4", className)}>
        {position === 'left' && (
          <div className="hidden lg:flex absolute right-full mr-12 w-48 flex-col items-end text-right">
            {marker && (
              <span className={cn("font-mono text-xs mb-1", colorMap[color])}>
                {marker}
              </span>
            )}
            <div className={cn("font-mono text-xs leading-relaxed opacity-70", colorMap[color])}>
              {children}
            </div>
            {/* Visual connector */}
            <div className={cn("absolute top-2 -right-6 w-4 h-[1px] opacity-30", bgMap[color])} aria-hidden="true" />
          </div>
        )}
        <div className="w-full relative z-10">
          {/* Mobile inline fallback for left marker */}
          {position === 'left' && marker && (
            <span className={cn("lg:hidden font-mono text-[10px] uppercase tracking-widest block mb-2", colorMap[color])}>
              {marker} {children && <span className="opacity-70 mx-2">—</span>} <span className="opacity-70">{children}</span>
            </span>
          )}
          
          <div className="relative">
            {marker && position === 'left' && (
              <span className={cn("absolute -left-6 top-0 font-mono text-[10px] hidden md:block lg:hidden", colorMap[color])}>
                {marker}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'bracket') {
    return (
      <div className={cn("relative pl-4 md:pl-6", className)}>
        <div className={cn("absolute left-0 top-0 bottom-0 w-2 border-l border-y opacity-50", colorMap[color])} aria-hidden="true" />
        {children}
      </div>
    );
  }

  if (variant === 'underline') {
    return (
      <span className={cn("relative inline-block pb-0.5 border-b opacity-80", colorMap[color], className)}>
        {children}
      </span>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
};
