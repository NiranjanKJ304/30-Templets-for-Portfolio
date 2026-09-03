import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TerminalAchievementsSection: React.FC<TerminalAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="tail -n 10 /var/log/achievements" isSectionHeader />
        
        <div className="flex flex-col gap-6 pl-0 md:pl-4">
          {achievements.map((achievement, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={achievement.id}
                index={`[${index}]`}
                title={achievement.title}
                metadata={
                  <div className="flex gap-2">
                    {achievement.issuer && <span className="text-[#347A84] dark:text-[#69B7C4]">{achievement.issuer}</span>}
                    {achievement.date && <span className="text-[#397A4A] dark:text-[#79C98B]">{achievement.date}</span>}
                  </div>
                }
              >
                {achievement.description && (
                  <p>{achievement.description}</p>
                )}
              </TerminalRow>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
