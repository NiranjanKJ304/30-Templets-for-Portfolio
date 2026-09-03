import React from 'react';
import { cn } from '../../../core/utils/cn';

interface VellumRuleProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'thick' | 'double';
  dashed?: boolean;
}

export const VellumRule: React.FC<VellumRuleProps> = ({
  className,
  orientation = 'horizontal',
  thickness = 'thin',
  dashed = false
}) => {
  return (
    <div 
      className={cn(
        "pointer-events-none opacity-40 dark:opacity-60",
        "border-[#C8C2B5] dark:border-[#4A4B46]",
        orientation === 'horizontal' ? "w-full" : "h-full",
        orientation === 'horizontal' ? (thickness === 'thick' ? 'border-t-2' : thickness === 'double' ? 'border-t-[3px] border-double' : 'border-t') : '',
        orientation === 'vertical' ? (thickness === 'thick' ? 'border-l-2' : thickness === 'double' ? 'border-l-[3px] border-double' : 'border-l') : '',
        dashed ? 'border-dashed' : 'border-solid',
        className
      )}
      aria-hidden="true"
    />
  );
};
