import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicAboutSection: React.FC<MosaicAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="About" />
        </div>
        
        {profile.summary && (
          <MosaicTile span={profile.bio ? "half" : "full"} padding="xl" surface="canvas">
            <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-[1.1]">
              {profile.summary}
            </h3>
          </MosaicTile>
        )}
        
        {profile.bio && (
          <MosaicTile span={profile.summary ? "half" : "full"} padding="xl" surface="primary">
            <div className="prose prose-lg dark:prose-invert max-w-none font-body text-lg text-[#65645F] dark:text-[#B3B1AA] leading-relaxed whitespace-pre-wrap">
              {profile.bio}
            </div>
          </MosaicTile>
        )}
      </div>
    </SectionWrapper>
  );
};
