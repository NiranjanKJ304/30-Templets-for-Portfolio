import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonumentalFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'inset' | 'outline' | 'solid';
}

export const MonumentalFrame: React.FC<MonumentalFrameProps> = ({ children, className, variant = 'outline' }) => {
  const variantMap = {
    inset: 'p-4 md:p-8 bg-[#D8D4C9] dark:bg-[#303430]',
    outline: 'border-[8px] md:border-[16px] border-[#D8D4C9] dark:border-[#303430] p-4 md:p-8',
    solid: 'bg-[#171918] dark:bg-[#F0EEE6] text-[#F8F6F0] dark:text-[#121514] p-8 md:p-16',
  };

  return (
    <div className={cn("w-full h-full relative", variantMap[variant], className)}>
      {children}
    </div>
  );
};
