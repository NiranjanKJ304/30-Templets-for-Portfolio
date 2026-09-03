import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';

interface BlueprintOSAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintOSAchievementsSection: React.FC<BlueprintOSAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <WorkspaceWindow title="ACHIEVEMENTS_LOG.txt" id="achievements">
        <div className="flex flex-col gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col gap-2 border-b border-dashed border-[#CBD2CD] dark:border-[#3A4340] pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <h4 className="font-heading font-bold text-base text-[#1D2523] dark:text-[#EEF2EC]">
                  {achievement.title}
                </h4>
                <div className="font-mono text-[10px] text-[#68716D] dark:text-[#A6ADA8] uppercase">
                  {[achievement.date, achievement.issuer].filter(Boolean).join(' | ')}
                </div>
              </div>
              {achievement.description && (
                <p className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] leading-relaxed max-w-2xl mt-1">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
