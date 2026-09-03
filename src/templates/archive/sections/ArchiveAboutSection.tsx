import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveAboutSection: React.FC<ArchiveAboutSectionProps> = ({ data, enabled = true, index }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <ArchiveEntry index={index} title="About" className="mt-8">
        <div className="flex flex-col gap-12 max-w-4xl">
          {profile.summary && (
            <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5] leading-[1.2]">
              {profile.summary}
            </h3>
          )}
          {profile.bio && (
            <div className="prose prose-lg dark:prose-invert max-w-none font-body text-lg text-[#686861] dark:text-[#AAA9A0] leading-relaxed whitespace-pre-wrap">
              {profile.bio}
            </div>
          )}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
