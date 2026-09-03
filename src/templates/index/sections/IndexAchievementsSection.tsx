import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexAchievementsSection: React.FC<IndexAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="ACHIEVEMENTS LOG"
          metadata="DATE / ISSUER"
          description="DETAILS"
        />
        
        <div className="flex flex-col">
          {achievements.map((achievement, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={achievement.id}
                index={index}
                title={achievement.title}
                metadata={
                  <div className="flex flex-col gap-1">
                    {achievement.date && <span className="text-[#365F58] dark:text-[#80A99E]">{achievement.date}</span>}
                    {achievement.issuer && <span className="text-[#696C67] dark:text-[#A8ABA4]">{achievement.issuer}</span>}
                  </div>
                }
                description={
                  <div className="flex flex-col gap-2">
                    {achievement.description && (
                      <p className="font-body text-sm text-[#696C67] dark:text-[#A8ABA4] leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
