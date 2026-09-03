import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowConnector } from '../components/FlowConnector';

interface OrganicFlowAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrganicFlowAchievementsSection: React.FC<OrganicFlowAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-0 pt-24 md:pt-48 pb-24"
      containerClassName="px-0 py-0"
    >
      <FlowConnector variant="arc" className="left-12 top-24 opacity-40 text-[#C87558] dark:text-[#D77F63]" />
      <FlowSection title="ACHIEVEMENTS" align="center">
        <div className="flex flex-col gap-16 mt-12 md:mt-24 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col items-center text-center gap-4">
              <span className="font-mono text-xs text-[#819B8A] dark:text-[#88A995] uppercase tracking-widest">
                {[achievement.date, achievement.issuer].filter(Boolean).join(' • ')}
              </span>
              <h4 className="font-heading font-black text-2xl md:text-4xl text-[#202321] dark:text-[#F1EFE7] leading-tight text-balance">
                {achievement.title}
              </h4>
              {achievement.description && (
                <p className="font-body text-base text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-2xl mt-2">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </FlowSection>
    </SectionWrapper>
  );
};
