import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';

interface FolioAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
}

export const FolioAchievementsSection: React.FC<FolioAchievementsSectionProps> = ({ data, enabled = true, pageNum }) => {
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
      <FolioSheet pageNum={pageNum} title="MILESTONES" offset="right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {achievements.map((achievement, idx) => (
            <div key={achievement.id} className="flex flex-col gap-6 p-6 border border-[#C9C5BA]/50 dark:border-[#444A45]/50">
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-2xl font-normal text-[#1D2020] dark:text-[#F0EEE6]">
                  {achievement.title}
                </h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                  {achievement.issuer}
                </span>
              </div>
              
              {achievement.description && (
                <p className="font-body text-base font-light leading-relaxed text-[#70736F] dark:text-[#A5AAA3]">
                  {achievement.description}
                </p>
              )}

              {achievement.date && (
                <div className="mt-4 pt-4 border-t border-[#C9C5BA]/30 dark:border-[#444A45]/30">
                  <FolioMeta label="Awarded" value={achievement.date} />
                </div>
              )}
            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
