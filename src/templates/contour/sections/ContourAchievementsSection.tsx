import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';

interface ContourAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ContourAchievementsSection: React.FC<ContourAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <ContourField label="Milestones" contourVariant="sparse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {achievements.map((achievement, idx) => (
            <div key={achievement.id} className="flex flex-col gap-6 relative group">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-[#C7C9B9]/30 dark:bg-[#46504A]/30 group-hover:bg-[#C5A45F] dark:group-hover:bg-[#D0B86D] transition-colors" />

              {achievement.date && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7C9B9] dark:text-[#46504A]">
                  {achievement.date}
                </span>
              )}
              
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-2xl font-normal text-[#202523] dark:text-[#EEF0E8]">
                  {achievement.title}
                </h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                  {achievement.issuer}
                </span>
              </div>
              
              {achievement.description && (
                <p className="font-body text-base font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6]">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
