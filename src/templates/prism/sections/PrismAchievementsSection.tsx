import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismDivider } from '../components/PrismDivider';

interface PrismAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PrismAchievementsSection: React.FC<PrismAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <PrismSection title="Recognition" align="right" colorFacet="gold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24 w-full">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col gap-6 relative group border-t-2 border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)] pt-6">
              <div className="absolute top-0 right-0 w-8 h-1 bg-[#D2B45C] dark:bg-[#D9C276] -translate-y-[2px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] md:text-xs text-[#D2B45C] dark:text-[#D9C276] uppercase tracking-widest font-bold">
                  {[achievement.date, achievement.category].filter(Boolean).join(' • ')}
                </span>
                <h4 className="font-heading font-extrabold text-2xl md:text-4xl text-[#171A1B] dark:text-[#F1F0EA] uppercase break-words leading-tight group-hover:text-[#D2B45C] dark:group-hover:text-[#D9C276] transition-colors">
                  {achievement.title}
                </h4>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="font-body text-base md:text-lg text-[#171A1B] dark:text-[#F1F0EA] font-medium">
                  {achievement.issuer}
                </span>
                {achievement.description && (
                  <p className="font-body text-base text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="right-to-left" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
