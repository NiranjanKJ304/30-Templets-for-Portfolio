import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FlowSurfaceProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'transparent';
  curveTop?: 'left' | 'right' | 'both' | 'none';
  curveBottom?: 'left' | 'right' | 'both' | 'none';
}

export const FlowSurface: React.FC<FlowSurfaceProps> = ({
  children,
  className,
  variant = 'primary',
  curveTop = 'none',
  curveBottom = 'none',
}) => {
  const variantMap = {
    primary: 'bg-[#FBFAF5] dark:bg-[#1E2321]',
    secondary: 'bg-[#E8DED0] dark:bg-[#302A26]',
    accent: 'bg-[#819B8A] dark:bg-[#88A995] text-[#FBFAF5] dark:text-[#151817]',
    transparent: 'bg-transparent',
  };

  const roundedClasses = [
    curveTop === 'left' || curveTop === 'both' ? 'rounded-tl-[3rem] md:rounded-tl-[6rem]' : '',
    curveTop === 'right' || curveTop === 'both' ? 'rounded-tr-[3rem] md:rounded-tr-[6rem]' : '',
    curveBottom === 'left' || curveBottom === 'both' ? 'rounded-bl-[3rem] md:rounded-bl-[6rem]' : '',
    curveBottom === 'right' || curveBottom === 'both' ? 'rounded-br-[3rem] md:rounded-br-[6rem]' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cn("w-full transition-colors duration-500", variantMap[variant], roundedClasses, className)}>
      {children}
    </div>
  );
};
