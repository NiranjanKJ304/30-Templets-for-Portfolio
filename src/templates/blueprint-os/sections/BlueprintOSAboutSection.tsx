import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSAboutSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSAboutSection: React.FC<BlueprintOSAboutSectionProps> = ({ data, enabled = true }) => {
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
      <WorkspaceWindow title="ABOUT_DOCUMENT.md" id="about">
        <div className="flex flex-col gap-8 max-w-4xl">
          {profile.summary && (
            <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-[#1D2523] dark:text-[#EEF2EC]">
              {profile.summary}
            </h3>
          )}
          
          {profile.bio && (
            <div className="prose prose-lg dark:prose-invert font-body text-[#68716D] dark:text-[#A6ADA8] leading-relaxed whitespace-pre-wrap">
              {profile.bio}
            </div>
          )}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
