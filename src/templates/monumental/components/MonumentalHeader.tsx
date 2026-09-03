import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { MonumentalFrame } from './MonumentalFrame';
import { MonumentalDivider } from './MonumentalDivider';

interface MonumentalHeaderProps {
  data: PortfolioData;
}

export const MonumentalHeader: React.FC<MonumentalHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative min-h-[90vh] flex flex-col pt-32 pb-16" id="profile">
      <div className="w-full max-w-[2000px] mx-auto px-8 sm:px-16 md:px-32 lg:px-48 flex-1 flex flex-col justify-end gap-16 md:gap-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-end justify-between w-full">
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            {profile.availableForHire && (
              <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                AVAILABLE FOR HIRE
              </span>
            )}
            
            <h1 className="font-heading font-black text-6xl md:text-[8rem] lg:text-[12rem] leading-[0.85] text-[#171918] dark:text-[#F0EEE6] uppercase tracking-tighter break-words">
              {profile.name}
            </h1>
            
            {(profile.role || profile.headline) && (
              <h2 className="font-body text-xl md:text-3xl text-[#686B66] dark:text-[#A5A7A1] font-light max-w-3xl">
                {[profile.role, profile.headline].filter(Boolean).join(' • ')}
              </h2>
            )}
            
            <div className="flex flex-wrap gap-8 font-mono text-xs md:text-sm text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest mt-8">
              {profile.location && <span>{profile.location}</span>}
              {profile.contactEmail && (
                <a href={`mailto:${profile.contactEmail}`} className="hover:text-[#B94F38] dark:hover:text-[#D16A52] transition-colors">
                  {profile.contactEmail}
                </a>
              )}
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B94F38] dark:hover:text-[#D16A52] transition-colors">
                  RESUME ↗
                </a>
              )}
            </div>
          </div>

          {profile.avatarUrl && (
            <div className="w-full lg:w-1/3 shrink-0">
              <MonumentalFrame variant="inset">
                <div className="w-full aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </MonumentalFrame>
            </div>
          )}
        </div>
      </div>
      <div className="w-full max-w-[2000px] mx-auto px-8 sm:px-16 md:px-32 lg:px-48 mt-16 md:mt-32">
        <MonumentalDivider thickness="massive" />
      </div>
    </header>
  );
};
