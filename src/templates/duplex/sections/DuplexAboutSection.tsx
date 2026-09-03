import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexAboutSection: React.FC<DuplexAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="About" index={1} />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="max-w-4xl space-y-12">
        {profile.summary && (
          <div className="font-heading text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#181818] dark:text-[#F1EEE7]">
            {profile.summary}
          </div>
        )}
        
        {profile.bio && (
          <div className="prose prose-lg dark:prose-invert prose-neutral max-w-2xl font-body text-base lg:text-lg leading-relaxed text-[#5F625F] dark:text-[#A9AAA4] whitespace-pre-wrap">
            {profile.bio}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
