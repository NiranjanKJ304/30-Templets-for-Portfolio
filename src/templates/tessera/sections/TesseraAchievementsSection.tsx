import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraAchievementsSection: React.FC<TesseraAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <TesseraSection title="Milestones" accent="mustard">
        <div className="flex flex-col relative border-t border-[#C8C4B9] dark:border-[#4A4D48] w-full">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {achievements.map((achievement, idx) => (
            <TesseraModule 
              key={achievement.id}
              elevation="inset"
              notch={idx % 2 === 0 ? 'left' : 'right'}
              className="flex flex-col gap-2 p-6 md:p-8 border-b border-[#C8C4B9] dark:border-[#4A4D48]"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] md:text-xs text-[#C5A452] dark:text-[#D4BC6B] uppercase tracking-widest font-bold">
                  {[achievement.date, achievement.category].filter(Boolean).join(' // ')}
                </span>
              </div>
              <h4 className="font-heading font-medium text-xl md:text-2xl text-[#242522] dark:text-[#F0EEE5] break-words">
                {achievement.title}
              </h4>
              <span className="font-body text-base md:text-lg text-[#73756E] dark:text-[#A5A7A0] font-medium">
                {achievement.issuer}
              </span>
              {achievement.description && (
                <p className="font-body text-base text-[#73756E] dark:text-[#A5A7A0] leading-relaxed mt-2 max-w-3xl">
                  {achievement.description}
                </p>
              )}
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
