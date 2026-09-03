import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';

interface PosterAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
}

export const PosterAchievementsSection: React.FC<PosterAchievementsSectionProps> = ({ data, enabled = true, index }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="vermilion" />
          <PosterLabel className="text-[#D94B36] dark:text-[#F07761] text-right mt-4 md:mt-12">HONORS</PosterLabel>
        </div>

        <div className="flex flex-col gap-12 mt-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col gap-4 border-l-[12px] border-[#D94B36] dark:border-[#F07761] pl-6 md:pl-12">
              <div className="flex flex-col">
                <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7] mb-2">
                  {[achievement.date, achievement.issuer].filter(Boolean).join(' | ')}
                </PosterLabel>
                <h4 className="font-heading font-black text-2xl md:text-4xl text-[#17191B] dark:text-[#F5F0E5] uppercase tracking-tighter leading-tight hyphens-auto">
                  {achievement.title}
                </h4>
              </div>
              {achievement.description && (
                <p className="font-body text-base text-[#65635D] dark:text-[#B4B0A7] leading-relaxed max-w-3xl">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
