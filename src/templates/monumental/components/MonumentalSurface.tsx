import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MonumentalSurfaceProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'structural';
}

export const MonumentalSurface: React.FC<MonumentalSurfaceProps> = ({
  children,
  className,
  variant = 'primary',
}) => {
  const variantMap = {
    primary: 'bg-[#F8F6F0] dark:bg-[#1B1F1D] text-[#171918] dark:text-[#F0EEE6]',
    secondary: 'bg-[#ECE9E1] dark:bg-[#121514] text-[#171918] dark:text-[#F0EEE6]',
    structural: 'bg-[#D8D4C9] dark:bg-[#303430] text-[#171918] dark:text-[#F0EEE6]',
    accent: 'bg-[#B94F38] dark:bg-[#D16A52] text-[#F8F6F0] dark:text-[#121514]',
  };

  return (
    <div className={cn("w-full transition-colors duration-500", variantMap[variant], className)}>
      {children}
    </div>
  );
};
