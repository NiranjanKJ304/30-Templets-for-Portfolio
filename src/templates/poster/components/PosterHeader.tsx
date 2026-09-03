import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { PosterColorField } from './PosterColorField';
import { PosterLabel } from './PosterLabel';

interface PosterHeaderProps {
  data: PortfolioData;
}

export const PosterHeader: React.FC<PosterHeaderProps> = ({ data }) => {
  const { profile } = data;

  return (
    <header className="w-full flex flex-col pt-12 md:pt-24 gap-8 md:gap-16">
      <div className="flex justify-between items-start w-full">
        <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF]">NO. 00</PosterLabel>
        {profile.availableForHire && (
          <PosterLabel className="text-[#D94B36] dark:text-[#F07761]">AVAILABLE</PosterLabel>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-end">
        <div className="md:col-span-8 flex flex-col">
          <h1 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-tighter text-[#17191B] dark:text-[#F5F0E5] uppercase break-words hyphens-auto mix-blend-multiply dark:mix-blend-screen">
            {profile.name}
          </h1>
        </div>
        
        <div className="md:col-span-4 flex flex-col gap-8 md:pl-8 lg:pl-16 w-full">
          {(profile.role || profile.headline) && (
            <h2 className="font-body font-bold text-xl md:text-3xl lg:text-4xl leading-tight text-[#17191B] dark:text-[#F5F0E5] md:mb-8 lg:mb-16">
              {[profile.role, profile.headline].filter(Boolean).join(' // ')}
            </h2>
          )}
          
          <div className="flex flex-col gap-2 border-l-4 border-[#E6C95C] dark:border-[#E0C96D] pl-4">
            {profile.location && (
              <span className="font-mono text-sm text-[#65635D] dark:text-[#B4B0A7] uppercase">{profile.location}</span>
            )}
            {profile.contactEmail && (
              <a href={`mailto:${profile.contactEmail}`} className="font-mono text-sm text-[#17191B] dark:text-[#F5F0E5] hover:text-[#3157D5] dark:hover:text-[#6E8CFF] transition-colors">
                {profile.contactEmail}
              </a>
            )}
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#17191B] dark:text-[#F5F0E5] hover:text-[#3157D5] dark:hover:text-[#6E8CFF] transition-colors">
                CV / RESUME
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 mt-8">
        <div className="md:col-span-4 h-4 md:h-full flex items-end">
          <PosterColorField color="vermilion" className="h-4 md:h-12 w-full origin-left" />
        </div>
        <div className="md:col-span-8 h-[50vh] md:h-[70vh] bg-[#C9C3B7] dark:bg-[#4A4A47]">
          {profile.avatarUrl ? (
            <ImageWithFallback
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-luminosity opacity-90"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-heading font-black text-[#F4EFE4] dark:text-[#151617] text-8xl md:text-[15rem] opacity-30 select-none">
              {profile.name.charAt(0)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
