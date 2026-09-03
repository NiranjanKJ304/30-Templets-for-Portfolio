import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraAboutSection: React.FC<TesseraAboutSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Profile" accent="teal">
        <div className="flex flex-col relative w-full lg:max-w-4xl p-6 md:p-12 lg:p-16">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block" />
          
          <div className="flex flex-col gap-12">
            {profile.summary && (
              <TesseraModule 
                tab="left" 
                accent="teal"
                elevation="raised"
                className="p-8 md:p-12 bg-[#F2EFE7] dark:bg-[#151716]"
              >
                <h3 className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-[#242522] dark:text-[#F0EEE5] leading-[1.3] tracking-tight">
                  {profile.summary}
                </h3>
              </TesseraModule>
            )}

            {profile.bio && (
              <TesseraModule 
                notch="top"
                elevation="flat"
                className="p-8 md:p-10 ml-0 md:ml-12"
              >
                <p className="font-body text-lg text-[#73756E] dark:text-[#A5A7A0] leading-relaxed whitespace-pre-wrap">
                  {profile.bio}
                </p>
              </TesseraModule>
            )}
          </div>
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
