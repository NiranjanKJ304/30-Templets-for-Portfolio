import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalSurface } from '../components/MonumentalSurface';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalAboutSection: React.FC<MonumentalAboutSectionProps> = ({ data, enabled = true }) => {
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
      <MonumentalSection title="ABOUT" index="01" align="right">
        <MonumentalSurface variant="secondary" className="p-8 md:p-16 lg:p-32 flex flex-col gap-16 md:gap-32">
          {profile.summary && (
            <h3 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#171918] dark:text-[#F0EEE6] uppercase max-w-6xl">
              {profile.summary}
            </h3>
          )}
          
          {profile.bio && (
            <div className="flex flex-col md:flex-row gap-8 lg:gap-32 justify-end items-start border-t-8 border-[#D8D4C9] dark:border-[#303430] pt-16">
              <span className="font-mono text-sm uppercase tracking-widest text-[#B94F38] dark:text-[#D16A52] shrink-0 md:w-32">
                BIOGRAPHY
              </span>
              <p className="font-body text-xl md:text-2xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed max-w-3xl whitespace-pre-wrap">
                {profile.bio}
              </p>
            </div>
          )}
        </MonumentalSurface>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
