import React from 'react';

interface BlueprintSectionHeaderProps {
  title: string;
  number?: string;
  description?: string;
}

export const BlueprintSectionHeader: React.FC<BlueprintSectionHeaderProps> = ({ title, number, description }) => {
  return (
    <div className="mb-12 md:mb-16 relative">
      <div className="flex items-end gap-6 pb-4 border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9]">
        {number && (
          <span className="font-mono text-4xl md:text-5xl font-light text-[#2E6FBB]/50 dark:text-[#5DA9E9]/50 leading-none mb-[-4px]">
            {number}
          </span>
        )}
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#173A5E] dark:text-[#EAF2F7] uppercase tracking-wider">
          {title}
        </h2>
        
        {/* Decorative drafting ticks */}
        <div className="absolute bottom-0 right-0 h-2 w-px bg-[#2E6FBB] dark:border-[#5DA9E9]"></div>
        <div className="absolute bottom-0 right-10 h-1 w-px bg-[#2E6FBB] dark:border-[#5DA9E9]"></div>
        <div className="absolute bottom-0 right-20 h-1 w-px bg-[#2E6FBB] dark:border-[#5DA9E9]"></div>
      </div>
      
      {description && (
        <p className="font-mono text-xs text-[#73808C] dark:text-[#55C6DC] uppercase tracking-widest mt-4">
          // {description}
        </p>
      )}
    </div>
  );
};
