import React from 'react';
import { cn } from '../../../core/utils/cn';

type FieldColor = 
  | 'canvas' 
  | 'clay' 
  | 'sage' 
  | 'blue' 
  | 'lilac' 
  | 'butter' 
  | 'rose' 
  | 'deep';

interface ChromaFieldProps {
  children: React.ReactNode;
  className?: string;
  color?: FieldColor;
  fullscreen?: boolean;
}

export const ChromaField: React.FC<ChromaFieldProps> = ({
  children,
  className,
  color = 'canvas',
  fullscreen = false
}) => {
  const bgMap: Record<FieldColor, string> = {
    canvas: 'bg-[#F4F0E8] dark:bg-[#151817]',
    clay: 'bg-[#E6C8B7] dark:bg-[#684A40]',
    sage: 'bg-[#C7D2C5] dark:bg-[#46584E]',
    blue: 'bg-[#C4D4DC] dark:bg-[#3E525E]',
    lilac: 'bg-[#D5CCD9] dark:bg-[#514A58]',
    butter: 'bg-[#E7D9A8] dark:bg-[#625B3C]',
    rose: 'bg-[#D8B8BE] dark:bg-[#5E444A]',
    deep: 'bg-[#263A39] dark:bg-[#263A39]', // Keeping dark deep for both to maintain high contrast
  };

  const textMap: Record<FieldColor, string> = {
    canvas: 'text-[#202522] dark:text-[#F1EEE5]',
    clay: 'text-[#202522] dark:text-[#F1EEE5]',
    sage: 'text-[#202522] dark:text-[#F1EEE5]',
    blue: 'text-[#202522] dark:text-[#F1EEE5]',
    lilac: 'text-[#202522] dark:text-[#F1EEE5]',
    butter: 'text-[#202522] dark:text-[#F1EEE5]',
    rose: 'text-[#202522] dark:text-[#F1EEE5]',
    deep: 'text-[#F4F0E8] dark:text-[#F4F0E8]',
  };

  return (
    <section 
      className={cn(
        "w-full relative transition-colors duration-1000 ease-in-out",
        bgMap[color],
        textMap[color],
        fullscreen ? "min-h-screen flex flex-col" : "py-24 md:py-32 lg:py-48",
        className
      )}
    >
      <div className={cn(
        "w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-24 lg:px-32 relative z-10",
        fullscreen && "flex-1 flex flex-col justify-center"
      )}>
        {children}
      </div>
    </section>
  );
};
