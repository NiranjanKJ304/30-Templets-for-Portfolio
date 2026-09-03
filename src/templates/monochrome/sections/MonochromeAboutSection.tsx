import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeAboutSection: React.FC<MonochromeAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="About" number="01" subtitle="Narrative Context" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {profile.bio && (
          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest border-b border-[#C9C6BE]/50 dark:border-[#3A3A37]/50 pb-2 mb-8">
              Biography
            </h3>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl leading-[1.4] text-[#151515] dark:text-[#F2F0E9] whitespace-pre-wrap">
              {profile.bio}
            </p>
          </div>
        )}

        {profile.summary && (
          <div className="lg:col-span-5">
            <h3 className="font-mono text-xs text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest border-b border-[#C9C6BE]/50 dark:border-[#3A3A37]/50 pb-2 mb-8 mt-12 lg:mt-0">
              Executive Summary
            </h3>
            <div className="font-body text-base md:text-lg text-[#555555] dark:text-[#B5B3AC] leading-relaxed whitespace-pre-wrap">
              {profile.summary}
            </div>
          </div>
        )}
        
      </div>
    </SectionWrapper>
  );
};
