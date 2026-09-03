import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisAboutSection: React.FC<MemphisAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  
  // Section data validation per strict rules
  const hasBio = Boolean(profile.bio && profile.bio.trim());
  const hasSummary = Boolean(profile.summary && profile.summary.trim());
  const hasData = hasBio || hasSummary;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="About" number="01" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="relative max-w-4xl bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-8 md:p-12 shadow-[8px_8px_0_0_#202124] dark:shadow-[8px_8px_0_0_#FACC15]">
        
        {/* Decorative corner block */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#34D399] border-4 border-neutral-900 dark:border-white z-10 transform rotate-12 hidden md:block"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#EC4899] border-4 border-neutral-900 dark:border-white z-10 hidden md:block"></div>

        <div className="flex flex-col gap-8">
          {hasSummary && (
            <div className="border-b-4 border-neutral-900 dark:border-white pb-8">
              <h3 className="font-heading font-black uppercase text-xl text-[#2563EB] mb-4">Summary</h3>
              <p className="text-xl md:text-2xl font-body font-bold text-neutral-900 dark:text-white leading-relaxed">
                {profile.summary}
              </p>
            </div>
          )}

          {hasBio && (
            <div>
              {hasSummary && <h3 className="font-heading font-black uppercase text-xl text-[#EC4899] mb-4">Biography</h3>}
              <div className="prose prose-lg dark:prose-invert max-w-none font-body text-neutral-700 dark:text-neutral-300">
                {profile.bio?.split('\n').map((para, i) => para.trim() ? (
                  <p key={i} className="mb-4">{para}</p>
                ) : null)}
              </div>
            </div>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
};
