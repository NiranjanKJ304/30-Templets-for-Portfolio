import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';

interface PrismAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismAboutSection: React.FC<PrismAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <PrismSection title="About" colorFacet="coral">
        <div className="flex flex-col gap-16 md:gap-32 w-full">
          {profile.summary && (
            <PrismFacet cut="bottom-right" colorHint="coral" className="w-full max-w-5xl">
              <h3 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#171A1B] dark:text-[#F1F0EA] leading-[1.15] tracking-tight">
                {profile.summary}
              </h3>
            </PrismFacet>
          )}

          {profile.bio && (
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full lg:ml-auto lg:w-3/4">
              <span className="font-mono text-xs md:text-sm text-[#D46750] dark:text-[#E17A63] uppercase tracking-widest shrink-0 pt-2 flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-current rotate-45 mt-1" />
                Biography
              </span>
              <p className="font-body text-lg md:text-xl text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed whitespace-pre-wrap flex-1">
                {profile.bio}
              </p>
            </div>
          )}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="left-to-right" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
