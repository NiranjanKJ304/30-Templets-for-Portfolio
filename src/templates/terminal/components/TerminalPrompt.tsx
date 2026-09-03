import React from 'react';
import { cn } from '../../../core/utils/cn';

interface TerminalPromptProps {
  label: string;
  command?: string;
  className?: string;
  isSectionHeader?: boolean;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({ 
  label, 
  command, 
  className,
  isSectionHeader = false
}) => {
  return (
    <div className={cn("flex items-start gap-2 font-mono", className)}>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[#397A4A] dark:text-[#79C98B] font-bold">{label}</span>
        <span className="text-[#347A84] dark:text-[#69B7C4]">~</span>
        <span className="text-[#18201B] dark:text-[#DCE4DC] font-bold">$</span>
      </div>
      {command && (
        <div className={cn(
          "text-[#18201B] dark:text-[#DCE4DC] break-all",
          isSectionHeader ? "font-bold text-lg uppercase tracking-wider" : ""
        )}>
          {command}
          {isSectionHeader && (
            <span className="inline-block w-2.5 h-[1em] bg-[#18201B] dark:bg-[#DCE4DC] ml-2 align-middle motion-safe:animate-pulse opacity-70" aria-hidden="true" />
          )}
        </div>
      )}
    </div>
  );
};
