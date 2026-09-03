import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintAboutSection: React.FC<BlueprintAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Specification" number="01" description="Project Overview and Primary Objectives" />}
      containerClassName="py-16 md:py-24 max-w-5xl"
    >
      <div className="flex flex-col gap-12">
        {profile.bio && (
          <div className="bg-[#FAFCFD] dark:bg-[#142333] border border-[#2E6FBB]/50 dark:border-[#5DA9E9]/50 p-8 md:p-12 shadow-sm relative">
             {/* Technical crop marks */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#173A5E] dark:border-[#55C6DC]"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#173A5E] dark:border-[#55C6DC]"></div>
             
             <span className="block font-mono text-[10px] text-[#E8893A] dark:text-[#F0A35B] uppercase tracking-widest mb-6">
               FIG 1.0: BACKGROUND
             </span>
             
             <p className="font-body text-lg leading-relaxed text-[#17202A] dark:text-[#EAF2F7] whitespace-pre-wrap">
               {profile.bio}
             </p>
          </div>
        )}

        {profile.summary && (
          <div className="bg-[#FAFCFD]/50 dark:bg-[#142333]/50 border border-dashed border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40 p-6 md:p-10 ml-0 md:ml-12 relative">
             <span className="block font-mono text-[10px] text-[#3DA9C9] uppercase tracking-widest mb-4">
               NOTE A.1: SUMMARY
             </span>
             <p className="font-mono text-sm leading-relaxed text-[#173A5E] dark:text-[#5DA9E9] whitespace-pre-wrap">
               {profile.summary}
             </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
