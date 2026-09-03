import React from 'react';
import { cn } from '../../../core/utils/cn';

interface ArchiveMetaProps {
  label: string;
  value?: string | React.ReactNode;
  className?: string;
}

export const ArchiveMeta: React.FC<ArchiveMetaProps> = ({ label, value, className }) => {
  if (!value) return null;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold">
        {label}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5]">
        {value}
      </span>
    </div>
  );
};
