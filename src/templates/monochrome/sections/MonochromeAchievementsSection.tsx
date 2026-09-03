import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeAchievementsSection: React.FC<MonochromeAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Achievements" number="08" subtitle="Awards Index" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id || idx} className="border-t border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-16 items-start group">
            
            <div className="font-mono text-2xl md:text-3xl text-[#C9C6BE] dark:text-[#3A3A37] font-light leading-none shrink-0 w-12">
              {String(idx + 1).padStart(2, '0')}
            </div>

            <div className="flex-grow max-w-4xl">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors">
                  {achievement.url ? (
                    <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {achievement.title}
                    </a>
                  ) : (
                    achievement.title
                  )}
                </h3>
                {achievement.category && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B44A35] dark:text-[#D06A52]">
                    {achievement.category}
                  </span>
                )}
              </div>

              <div className="font-mono text-[10px] text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest mb-6 flex gap-4">
                <span>{achievement.issuer}</span>
                <span>{achievement.date}</span>
              </div>

              {achievement.description && (
                <p className="font-body text-base text-[#555555] dark:text-[#B5B3AC] leading-relaxed max-w-2xl">
                  {achievement.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
