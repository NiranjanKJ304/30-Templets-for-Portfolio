import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ChronicleBand } from './ChronicleBand';

interface ChronicleHeaderProps {
  data: PortfolioData;
}

export const ChronicleHeader: React.FC<ChronicleHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <ChronicleBand id="profile" hasTopRule={false} className="min-h-[85vh] flex flex-col justify-end pt-24 md:pt-32 pb-16">
      <div className="flex flex-col gap-12 md:gap-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex items-center gap-6">
            {profile.avatarUrl && (
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#C9C5BB] dark:border-[#474B47]">
                <ImageWithFallback src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover grayscale opacity-90" />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                {profile.name}
              </span>
              {profile.role && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                  {profile.role}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-1 md:text-right">
            {(profile.location || profile.availableForHire) && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                {[
                  profile.location, 
                  profile.availableForHire ? 'Available for engagement' : null
                ].filter(Boolean).join(' • ')}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col max-w-5xl">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight text-[#202321] dark:text-[#F0EEE6]">
            {profile.name}
          </h1>
          {profile.headline && (
            <p className="font-body text-2xl md:text-3xl lg:text-4xl font-light text-[#202321] dark:text-[#F0EEE6] leading-[1.3] max-w-4xl mt-8">
              {profile.headline}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-8 mt-4">
          {profile.resumeUrl && (
            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors flex items-center gap-2 group pb-1 border-b border-[#C9C5BB] dark:border-[#474B47]"
            >
              <span>View Curriculum Vitae</span>
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          )}
          {profile.contactEmail && (
            <a 
              href={`mailto:${profile.contactEmail}`}
              className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors flex items-center gap-2 group pb-1 border-b border-[#C9C5BB] dark:border-[#474B47]"
            >
              <span>Initiate Correspondence</span>
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          )}
        </div>
        
      </div>
    </ChronicleBand>
  );
};
