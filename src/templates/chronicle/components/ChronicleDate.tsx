import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ChronicleDateProps {
  date: string;
  className?: string;
  label?: string;
}

export const ChronicleDate: React.FC<ChronicleDateProps> = ({ date, className, label }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
          {label}
        </span>
      )}
      <span className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-none tracking-tight text-[#202321] dark:text-[#F0EEE6]">
        {date}
      </span>
    </div>
  );
};
