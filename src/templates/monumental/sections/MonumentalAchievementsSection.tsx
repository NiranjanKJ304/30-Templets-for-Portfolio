import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalDivider } from '../components/MonumentalDivider';

interface MonumentalAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonumentalAchievementsSection: React.FC<MonumentalAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <MonumentalSection title="RECOGNITION" index="08" align="left">
        <div className="flex flex-col">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-8 py-16 border-b-4 border-[#D8D4C9] dark:border-[#303430] group">
              <div className="flex flex-col gap-4 max-w-4xl">
                <span className="font-mono text-sm text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                  {[achievement.category, achievement.issuer].filter(Boolean).join(' // ')}
                </span>
                <h4 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-[#171918] dark:text-[#F0EEE6] uppercase break-words leading-[1.1] group-hover:text-[#B94F38] dark:group-hover:text-[#D16A52] transition-colors">
                  {achievement.title}
                </h4>
                {achievement.description && (
                  <p className="font-body text-xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed max-w-2xl mt-4">
                    {achievement.description}
                  </p>
                )}
              </div>
              <div className="font-mono text-lg md:text-2xl text-[#171918] dark:text-[#F0EEE6] uppercase tracking-widest shrink-0">
                {achievement.date}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-32">
          <MonumentalDivider thickness="thick" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
