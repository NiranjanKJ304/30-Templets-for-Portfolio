import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalAboutSection: React.FC<OrbitalAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="About" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center gap-16">
        
        {profile.bio && (
          <div className="relative">
            <p className="font-heading text-xl md:text-3xl text-[#172326] dark:text-[#F0F4F1] leading-relaxed whitespace-pre-wrap relative z-10">
              {profile.bio}
            </p>
          </div>
        )}

        {profile.summary && (
          <div className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/50 dark:border-[#40504D]/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(23,35,38,0.04)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2F7C73]/10 to-transparent dark:from-[#66B8A9]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-6">Executive Summary</h3>
            <div className="font-body text-base md:text-lg text-[#526467] dark:text-[#AABAB7] leading-loose whitespace-pre-wrap text-left">
              {profile.summary}
            </div>
          </div>
        )}
        
      </div>
    </SectionWrapper>
  );
};
