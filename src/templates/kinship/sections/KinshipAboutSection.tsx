import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipAboutSection: React.FC<KinshipAboutSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="About" color="coral">
        <div className="flex flex-col gap-12 max-w-4xl">
          {profile.summary && (
            <div className="relative pl-8 md:pl-12">
              <KinshipConnector orientation="vertical" className="absolute top-2 left-0 h-[calc(100%-8px)]" />
              <KinshipAnchor size="sm" color="coral" className="absolute top-3 -left-1" />
              
              <h3 className="font-heading font-medium text-2xl md:text-4xl text-[#202624] dark:text-[#EEF0EA] leading-[1.3] tracking-tight">
                {profile.summary}
              </h3>
            </div>
          )}

          {profile.bio && (
            <div className="relative pl-8 md:pl-12">
              <KinshipConnector orientation="vertical" className="absolute top-2 left-0 h-[calc(100%-8px)] opacity-50" />
              
              <p className="font-body text-lg text-[#737A75] dark:text-[#A7ADA7] leading-relaxed whitespace-pre-wrap">
                {profile.bio}
              </p>
            </div>
          )}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
