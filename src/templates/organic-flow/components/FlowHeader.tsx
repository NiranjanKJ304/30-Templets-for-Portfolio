import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { FlowSurface } from './FlowSurface';

interface FlowHeaderProps {
  data: PortfolioData;
}

export const FlowHeader: React.FC<FlowHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative pt-24 md:pt-32" id="profile">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-24">
        <FlowSurface 
          variant="secondary" 
          curveTop="both" 
          curveBottom="right" 
          className="p-8 md:p-16 lg:p-24 relative overflow-hidden"
        >
          {/* Decorative SVG behind header */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-[#C87558] dark:text-[#D77F63]">
              <path d="M100,0 C50,0 0,50 0,100 L100,100 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start">
            {profile.avatarUrl && (
              <div className="shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] overflow-hidden">
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-col gap-6 w-full text-center md:text-left">
              {profile.availableForHire && (
                <div className="inline-flex items-center gap-2 self-center md:self-start bg-[#FBFAF5] dark:bg-[#1E2321] px-4 py-2 rounded-full font-mono text-xs text-[#819B8A] dark:text-[#88A995]">
                  <span className="w-2 h-2 rounded-full bg-[#819B8A] dark:bg-[#88A995]" aria-hidden="true" />
                  AVAILABLE FOR HIRE
                </div>
              )}
              
              <div className="flex flex-col">
                <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-[#202321] dark:text-[#F1EFE7] tracking-tighter leading-[0.95]">
                  {profile.name}
                </h1>
                {(profile.role || profile.headline) && (
                  <h2 className="font-body text-xl md:text-3xl text-[#C87558] dark:text-[#D77F63] mt-4 font-medium">
                    {[profile.role, profile.headline].filter(Boolean).join(' • ')}
                  </h2>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start font-mono text-sm text-[#6B706A] dark:text-[#A8ACA5] mt-4">
                {profile.location && <span>{profile.location}</span>}
                {profile.contactEmail && (
                  <a href={`mailto:${profile.contactEmail}`} className="hover:text-[#202321] dark:hover:text-[#F1EFE7] transition-colors">
                    {profile.contactEmail}
                  </a>
                )}
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#202321] dark:hover:text-[#F1EFE7] transition-colors flex items-center gap-1">
                    RESUME ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </FlowSurface>
      </div>
    </header>
  );
};
