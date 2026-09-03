import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';

interface ArchiveAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
}

export const ArchiveAchievementsSection: React.FC<ArchiveAchievementsSectionProps> = ({ data, enabled = true, index }) => {
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
      <ArchiveEntry index={index} title="Achievements" className="mt-8">
        <div className="flex flex-col gap-6 mt-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#C8C5BA] dark:border-[#464943] pb-6 last:border-0 last:pb-0">
              <div className="w-full md:w-3/4 flex flex-col gap-2">
                <h3 className="font-heading font-bold text-xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5]">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p className="font-body text-base text-[#686861] dark:text-[#AAA9A0] leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/4 shrink-0 flex flex-col items-start md:items-end gap-1">
                {achievement.date && (
                  <div className="font-mono text-xs text-[#9D4937] dark:text-[#D4755D] font-bold">
                    {achievement.date}
                  </div>
                )}
                {achievement.issuer && (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#686861] dark:text-[#AAA9A0] font-bold md:text-right">
                    {achievement.issuer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
