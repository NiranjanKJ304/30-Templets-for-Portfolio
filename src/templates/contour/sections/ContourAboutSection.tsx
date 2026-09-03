import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourAboutSection: React.FC<ContourAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <ContourField label="Background Terrain" contourVariant="sparse">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-12 flex flex-col gap-12 lg:gap-16 max-w-5xl">
            {profile.summary && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-[#202523] dark:text-[#EEF0E8] tracking-tight">
                {profile.summary}
              </h3>
            )}

            {profile.bio && (
              <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6] whitespace-pre-wrap">
                {profile.bio}
              </p>
            )}
          </div>
          
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
