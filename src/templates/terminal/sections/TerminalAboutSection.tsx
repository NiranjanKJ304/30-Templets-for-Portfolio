import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';

interface TerminalAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalAboutSection: React.FC<TerminalAboutSectionProps> = ({ data, enabled = true }) => {
  const { profile } = data;
  const hasData = Boolean(profile.bio || profile.summary);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="about"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="cat about.txt" isSectionHeader />
        
        <div className="flex flex-col gap-6 pl-0 md:pl-4 border-l-0 md:border-l-2 md:border-[#C9D0C9] dark:border-[#303833]">
          {profile.summary && (
            <div className="font-heading font-bold text-xl sm:text-2xl text-[#18201B] dark:text-[#DCE4DC] leading-snug">
              {profile.summary}
            </div>
          )}
          
          {profile.bio && (
            <div className="prose prose-lg dark:prose-invert max-w-4xl font-body text-sm sm:text-base text-[#5F6861] dark:text-[#9CA39D] leading-relaxed whitespace-pre-wrap">
              {profile.bio}
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
