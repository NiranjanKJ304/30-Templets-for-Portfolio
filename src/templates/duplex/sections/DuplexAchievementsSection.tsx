import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexAchievementsSection: React.FC<DuplexAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Achievements" align="right" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="flex flex-col border-t-2 border-[#181818] dark:border-[#F1EEE7]">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id} className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-8 border-b border-[#B7B0A5]/40 dark:border-[#414542]/40 group">
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 w-full lg:w-3/4">
              <div className="font-mono text-sm uppercase tracking-widest text-[#D35F43] dark:text-[#E0795D] font-bold shrink-0 lg:w-24">
                {achievement.date || (idx + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] transition-colors">
                {achievement.title}
              </h3>
            </div>
            
            <div className="w-full lg:w-1/4 flex lg:justify-end">
              {achievement.issuer && (
                <span className="font-mono text-xs uppercase tracking-widest text-[#5F625F] dark:text-[#A9AAA4] border border-[#B7B0A5]/40 dark:border-[#414542]/40 px-3 py-1">
                  {achievement.issuer}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
