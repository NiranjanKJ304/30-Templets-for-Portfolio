import React from 'react';
import { cn } from '../../../core/utils/cn';

interface WorkspaceWindowProps {
  id?: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const WorkspaceWindow: React.FC<WorkspaceWindowProps> = ({
  id,
  title,
  icon,
  children,
  className,
  bodyClassName,
}) => {
  return (
    <div 
      id={id}
      className={cn(
        "w-full flex flex-col bg-[#F8FAF7] dark:bg-[#181E1C] border border-[#CBD2CD] dark:border-[#3A4340] shadow-md scroll-mt-24",
        className
      )}
    >
      {/* Window Title Bar */}
      <div className="h-10 w-full bg-[#FFFFFF] dark:bg-[#202725] border-b border-[#CBD2CD] dark:border-[#3A4340] flex items-center justify-between px-4 shrink-0 select-none">
        <div className="flex items-center gap-3">
          {icon && <span className="text-[#68716D] dark:text-[#A6ADA8]">{icon}</span>}
          <span className="font-heading font-bold text-sm text-[#1D2523] dark:text-[#EEF2EC] tracking-wide">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full border border-[#CBD2CD] dark:border-[#3A4340]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#CBD2CD] dark:border-[#3A4340]" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#CBD2CD] dark:border-[#3A4340]" />
        </div>
      </div>
      
      {/* Window Content */}
      <div className={cn("p-6 md:p-8 flex flex-col", bodyClassName)}>
        {children}
      </div>
    </div>
  );
};
