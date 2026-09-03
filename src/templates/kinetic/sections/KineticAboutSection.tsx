import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { KineticMarquee } from '../components/KineticMarquee';

interface KineticAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticAboutSection: React.FC<KineticAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-0" // Full width for marquee
      className="py-16 md:py-32"
    >
      <div className="px-6 sm:px-12 max-w-[1600px] mx-auto">
        <KineticSectionHeader title="About" index={1} />
        
        <div className="flex flex-col gap-12 max-w-5xl">
          {profile.summary && (
            <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#171717] dark:text-[#F3F0E8]">
              {profile.summary}
            </div>
          )}
          
          {profile.bio && (
            <div className="prose prose-lg dark:prose-invert max-w-3xl font-body text-lg lg:text-xl leading-relaxed text-[#555555] dark:text-[#B4B4AE] whitespace-pre-wrap ml-0 lg:ml-24 border-l-4 border-[#E84F3D] dark:border-[#FF715D] pl-6 md:pl-10">
              {profile.bio}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Marquee intersecting below content */}
      <div className="mt-20 md:mt-32 w-full py-4 border-y-2 border-[#171717] dark:border-[#F3F0E8] overflow-hidden">
        <KineticMarquee text="STORY • BACKGROUND • NARRATIVE • " speed={25} className="text-[#171717] dark:text-[#F3F0E8] opacity-20 dark:opacity-30" />
      </div>
    </SectionWrapper>
  );
};
