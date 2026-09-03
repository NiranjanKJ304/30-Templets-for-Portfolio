import React from 'react';
import { cn } from '../../../core/utils/cn';

interface KinshipAnchorProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'coral' | 'blue' | 'gold' | 'lavender';
  pulse?: boolean;
}

export const KinshipAnchor: React.FC<KinshipAnchorProps> = ({ 
  className, 
  size = 'md', 
  color = 'primary',
  pulse = false
}) => {
  const sizeMap = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  const colorMap = {
    primary: 'bg-[#356B63] dark:bg-[#78A99E]',
    coral: 'bg-[#C86D57] dark:bg-[#DD8068]',
    blue: 'bg-[#6C8797] dark:bg-[#8FAAB8]',
    gold: 'bg-[#C7A85D] dark:bg-[#D3BA70]',
    lavender: 'bg-[#958BA5] dark:bg-[#B2A7BF]',
  };

  return (
    <div className={cn("relative inline-flex shrink-0 items-center justify-center", sizeMap[size], className)} aria-hidden="true">
      {pulse && (
        <div className={cn("absolute inset-0 rounded-full opacity-50 animate-ping", colorMap[color])} />
      )}
      <div className={cn("w-full h-full rounded-full ring-2 ring-offset-2 ring-offset-[#F5F3EE] dark:ring-offset-[#141716] ring-current", colorMap[color], "text-[transparent]")} />
    </div>
  );
};
