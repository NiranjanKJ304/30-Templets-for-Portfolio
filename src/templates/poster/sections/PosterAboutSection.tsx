import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterAboutSection: React.FC<PosterAboutSectionProps> = ({ data, enabled = true, index }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="butter" />
          <PosterLabel className="text-[#E6C95C] dark:text-[#E0C96D] text-right mt-4 md:mt-12">ABOUT</PosterLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
          <div className="md:col-span-8 flex flex-col gap-12">
            {profile.summary && (
              <h3 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[#17191B] dark:text-[#F5F0E5] tracking-tight hyphens-auto">
                {profile.summary}
              </h3>
            )}
            
            {profile.bio && (
              <div className="prose prose-xl dark:prose-invert max-w-4xl font-body text-[#65635D] dark:text-[#B4B0A7] leading-relaxed whitespace-pre-wrap">
                {profile.bio}
              </div>
            )}
          </div>
          
          <div className="md:col-span-4 hidden md:flex items-end justify-end">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-[#E6C95C] dark:bg-[#E0C96D] mix-blend-multiply dark:mix-blend-screen opacity-90" aria-hidden="true" />
          </div>
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
