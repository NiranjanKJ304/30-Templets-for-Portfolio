import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';

interface ChronicleAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleAboutSection: React.FC<ChronicleAboutSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Prologue">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-12 flex flex-col gap-12 lg:gap-16 max-w-5xl">
            {profile.summary && (
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#202321] dark:text-[#F0EEE6] tracking-tight">
                {profile.summary}
              </h3>
            )}

            {profile.bio && (
              <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5] whitespace-pre-wrap">
                {profile.bio}
              </p>
            )}
          </div>
          
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
