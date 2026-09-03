import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexAboutSection: React.FC<IndexAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-8">
        <IndexRow
          isHeader
          title="ABOUT"
          metadata="DESCRIPTION"
          description="NARRATIVE"
        />
        
        {profile.summary && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 py-6 border-b border-[#D5D6D0] dark:border-[#404440]">
            <div className="md:col-span-1 hidden md:block"></div>
            <div className="md:col-span-11 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#181A19] dark:text-[#F2F1EA] leading-[1.2]">
              {profile.summary}
            </div>
          </div>
        )}
        
        {profile.bio && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 py-6 border-b border-[#D5D6D0] dark:border-[#404440]">
            <div className="md:col-span-4 hidden md:block"></div>
            <div className="md:col-span-8 prose prose-lg dark:prose-invert max-w-4xl font-body text-base lg:text-lg text-[#696C67] dark:text-[#A8ABA4] leading-relaxed whitespace-pre-wrap">
              {profile.bio}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
