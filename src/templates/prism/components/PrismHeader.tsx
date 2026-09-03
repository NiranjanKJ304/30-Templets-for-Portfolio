import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { PrismFacet } from './PrismFacet';

interface PrismHeaderProps {
  data: PortfolioData;
}

export const PrismHeader: React.FC<PrismHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full relative min-h-[90vh] flex flex-col pt-32 pb-16" id="profile">
      <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-24 flex-1 flex flex-col justify-center">
        
        <div className="relative w-full flex flex-col lg:flex-row gap-16 lg:gap-0 mt-16">
          {/* Identity Facet */}
          <div className="w-full lg:w-2/3 lg:pr-16 relative z-10">
            <PrismFacet cut="bottom-right" colorHint="neutral" className="border-l-8 border-[#4566C7] dark:border-[#7187E1]">
              <div className="flex flex-col gap-8 md:gap-12 py-12 md:py-24">
                {profile.availableForHire && (
                  <span className="font-mono text-xs md:text-sm text-[#4566C7] dark:text-[#7187E1] uppercase tracking-widest inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-current rotate-45" />
                    Available for Hire
                  </span>
                )}
                
                <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#171A1B] dark:text-[#F1F0EA] tracking-tight uppercase break-words max-w-4xl">
                  {profile.name}
                </h1>

                {(profile.role || profile.headline) && (
                  <div className="flex flex-col gap-2">
                    {profile.role && (
                      <span className="font-body font-bold text-xl md:text-3xl text-[#171A1B] dark:text-[#F1F0EA]">
                        {profile.role}
                      </span>
                    )}
                    {profile.headline && (
                      <h2 className="font-body text-lg md:text-2xl text-[#6B706F] dark:text-[#A8ADA9] font-light max-w-2xl leading-relaxed">
                        {profile.headline}
                      </h2>
                    )}
                  </div>
                )}
              </div>
            </PrismFacet>
          </div>

          {/* Media / Meta Facet */}
          <div className="w-full lg:w-1/3 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 flex flex-col gap-8">
            {profile.avatarUrl && (
              <div className="w-full aspect-square md:aspect-[4/5] lg:aspect-square ml-auto max-w-md relative group">
                <PrismFacet cut="both-left" colorHint="blue" variant="overlay" className="scale-105 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div 
                  className="w-full h-full overflow-hidden bg-[#171A1B] dark:bg-[#F1F0EA]"
                  style={{ clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px), 0 40px)' }}
                >
                  <ImageWithFallback
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            )}
            
            <PrismFacet cut="top-left" colorHint="neutral" className="lg:max-w-md lg:ml-auto p-8 shadow-2xl shadow-[rgba(23,26,27,0.05)] dark:shadow-none">
              <ul className="flex flex-col gap-4 font-mono text-xs md:text-sm text-[#171A1B] dark:text-[#F1F0EA] uppercase tracking-widest">
                {profile.location && (
                  <li className="flex justify-between items-center gap-4">
                    <span className="text-[#6B706F] dark:text-[#A8ADA9]">Base</span>
                    <span className="text-right">{profile.location}</span>
                  </li>
                )}
                {profile.contactEmail && (
                  <li className="flex justify-between items-center gap-4 border-t border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-4">
                    <span className="text-[#6B706F] dark:text-[#A8ADA9]">Email</span>
                    <a href={`mailto:${profile.contactEmail}`} className="text-right hover:text-[#4566C7] dark:hover:text-[#7187E1] transition-colors truncate">
                      {profile.contactEmail}
                    </a>
                  </li>
                )}
                {profile.resumeUrl && (
                  <li className="flex justify-between items-center gap-4 border-t border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-4">
                    <span className="text-[#6B706F] dark:text-[#A8ADA9]">CV</span>
                    <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-right hover:text-[#4566C7] dark:hover:text-[#7187E1] transition-colors">
                      VIEW_FILE ↗
                    </a>
                  </li>
                )}
              </ul>
            </PrismFacet>
          </div>
        </div>
      </div>
    </header>
  );
};
