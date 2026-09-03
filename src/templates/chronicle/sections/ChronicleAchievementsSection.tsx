import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ChronicleDate } from '../components/ChronicleDate';

interface ChronicleAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChronicleAchievementsSection: React.FC<ChronicleAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <ChronicleBand label="Milestones">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {achievements.map((achievement, idx) => {
            const year = achievement.date?.split(' ').pop();
            
            return (
              <div key={achievement.id} className="flex flex-col gap-6">
                {year && (
                  <ChronicleDate date={year} label={achievement.date} className="mb-2" />
                )}
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-2xl font-normal text-[#202321] dark:text-[#F0EEE6]">
                    {achievement.title}
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                    {achievement.issuer}
                  </span>
                </div>
                
                {achievement.description && (
                  <p className="font-body text-base font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5]">
                    {achievement.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
