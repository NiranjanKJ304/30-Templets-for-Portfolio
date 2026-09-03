import React from 'react';
import { cn } from '../../../core/utils/cn';

interface MemphisBackgroundProps {
  className?: string;
}

export const MemphisBackground: React.FC<MemphisBackgroundProps> = ({ className }) => {
  return (
    <div 
      className={cn("fixed inset-0 pointer-events-none overflow-hidden -z-10", className)}
      aria-hidden="true"
    >
      {/* Decorative shapes for Memphis aesthetic */}
      
      {/* Top Left Cluster */}
      <div className="absolute top-[10%] left-[5%] opacity-20 dark:opacity-10 transform -rotate-12">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#EC4899" />
        </svg>
      </div>
      <div className="absolute top-[15%] left-[8%] opacity-30 dark:opacity-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="transparent" stroke="#2563EB" strokeWidth="4" />
        </svg>
      </div>

      {/* Top Right Zigzag */}
      <div className="absolute top-[20%] right-[10%] opacity-20 dark:opacity-10">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20L20 0L40 20L60 0L80 20" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Center Left Grid */}
      <div className="absolute top-[50%] left-[2%] opacity-10 dark:opacity-5">
         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#202124" className="dark:fill-white" />
            </pattern>
            <rect width="100" height="100" fill="url(#dotGrid)" />
         </svg>
      </div>

      {/* Bottom Right Shape */}
      <div className="absolute bottom-[10%] right-[5%] opacity-20 dark:opacity-10 transform rotate-12">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 0L90 90H0L45 0Z" fill="transparent" stroke="#34D399" strokeWidth="4"/>
        </svg>
      </div>

      {/* Bottom Left Offset Circle */}
      <div className="absolute bottom-[20%] left-[10%] opacity-20 dark:opacity-10">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-[#8B5CF6] translate-x-2 translate-y-2"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#202124] dark:border-white"></div>
        </div>
      </div>
    </div>
  );
};
