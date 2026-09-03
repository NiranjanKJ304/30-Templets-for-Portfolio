import React from 'react';
import { cn } from '../../../core/utils/cn';

interface FolioMetaProps {
  label?: string;
  value: React.ReactNode;
  className?: string;
}

export const FolioMeta: React.FC<FolioMetaProps> = ({ label, value, className }) => {
  if (!value) return null;
  
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
          {label}
        </span>
      )}
      <span className="font-mono text-[11px] uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">
        {value}
      </span>
    </div>
  );
};
