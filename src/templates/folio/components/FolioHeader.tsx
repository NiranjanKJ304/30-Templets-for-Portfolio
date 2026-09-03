import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { FolioSheet } from './FolioSheet';
import { FolioMeta } from './FolioMeta';

interface FolioHeaderProps {
  data: PortfolioData;
  pageNum: string;
}

export const FolioHeader: React.FC<FolioHeaderProps> = ({ data, pageNum }) => {
  const { profile } = data;

  return (
    <FolioSheet 
      id="profile" 
      pageNum={pageNum} 
      title="COVER" 
      className="min-h-[90vh] flex flex-col justify-between"
      noPadding
    >
      <div className="w-full h-full flex flex-col p-8 md:p-12 lg:p-16 xl:p-24 flex-1">
        
        <div className="flex items-center gap-4 mb-24 md:mb-32 lg:mb-40 pb-6 border-b border-[#C9C5BA]/50 dark:border-[#444A45]/50">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6]">
            {pageNum}
          </span>
          <span className="font-mono text-[10px] text-[#C9C5BA] dark:text-[#444A45]">/</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
            PORTFOLIO COVER
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 flex-1">
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-end gap-10">
            
            <div className="flex flex-col max-w-4xl">
              <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight text-[#1D2020] dark:text-[#F0EEE6] mb-6">
                {profile.name}
              </h1>
              {profile.headline && (
                <p className="font-body text-2xl md:text-3xl lg:text-4xl font-light text-[#70736F] dark:text-[#A5AAA3] leading-[1.3]">
                  {profile.headline}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-start gap-12 pt-12 mt-4 border-t border-[#C9C5BA]/30 dark:border-[#444A45]/30">
              {profile.role && <FolioMeta label="Role" value={profile.role} />}
              {profile.location && <FolioMeta label="Location" value={profile.location} />}
              {profile.availableForHire && <FolioMeta label="Status" value="Available for engagement" />}
              {profile.resumeUrl && (
                <a 
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6] hover:text-[#B85F49] dark:hover:text-[#D07961] transition-colors mt-4"
                >
                  View Document ↗
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-end">
            {profile.avatarUrl && (
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#EAE7DF] dark:bg-[#141716] border border-[#C9C5BA] dark:border-[#444A45] p-2">
                <div className="w-full h-full overflow-hidden">
                  <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover grayscale opacity-90" />
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </FolioSheet>
  );
};
