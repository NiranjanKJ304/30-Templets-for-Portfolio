import React from 'react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArchiveDivider } from './ArchiveDivider';

interface ArchiveHeaderProps {
  data: PortfolioData;
}

export const ArchiveHeader: React.FC<ArchiveHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full flex flex-col gap-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
            {profile.name}
          </h1>
          {(profile.role || profile.headline) && (
            <h2 className="font-mono text-sm md:text-base uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0]">
              {[profile.role, profile.headline].filter(Boolean).join(' · ')}
            </h2>
          )}
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-1 font-mono text-xs uppercase tracking-widest text-[#20211F] dark:text-[#F1EEE5]">
          <div>{new Date().getFullYear()} COLLECTION</div>
          {profile.location && <div>LOC: {profile.location}</div>}
          <div>ARCHIVE STATUS: {profile.availableForHire ? 'ACTIVE' : 'LOCKED'}</div>
        </div>
      </div>
      
      <ArchiveDivider thick className="mt-4" />
    </header>
  );
};
