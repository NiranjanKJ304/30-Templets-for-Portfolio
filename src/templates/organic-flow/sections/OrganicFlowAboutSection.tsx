import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowDivider } from '../components/FlowDivider';
import { FlowConnector } from '../components/FlowConnector';

interface OrganicFlowAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowAboutSection: React.FC<OrganicFlowAboutSectionProps> = ({ data, enabled = true }) => {
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
      <FlowDivider direction="down" color="canvas" className="absolute -top-1 left-0 z-0" />
      <div className="bg-[#FBFAF5] dark:bg-[#1E2321] relative z-10 pt-24 md:pt-48 pb-12">
        <FlowConnector variant="arc" className="top-12 left-0 w-32 h-32 md:w-64 md:h-64" />
        <FlowSection title="ABOUT">
          <div className="flex flex-col gap-12 max-w-4xl mx-auto items-center text-center mt-12 md:mt-24">
            {profile.summary && (
              <h3 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-[#202321] dark:text-[#F1EFE7] leading-tight text-balance">
                {profile.summary}
              </h3>
            )}
            
            {profile.bio && (
              <div className="font-body text-lg md:text-xl text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-2xl whitespace-pre-wrap">
                {profile.bio}
              </div>
            )}
          </div>
        </FlowSection>
      </div>
      <FlowDivider direction="down" color="primary" className="absolute bottom-0 left-0 translate-y-full z-10" />
    </SectionWrapper>
  );
};
