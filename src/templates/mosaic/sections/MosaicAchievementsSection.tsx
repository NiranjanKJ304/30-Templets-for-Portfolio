import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicAchievementsSection: React.FC<MosaicAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Achievements" />
        </div>
        
        {achievements.map((achievement, idx) => (
          <MosaicTile 
            key={achievement.id} 
            span={idx % 3 === 0 ? "two-thirds" : (idx % 2 === 0 ? "half" : "third")} 
            padding="lg" 
            surface={idx % 2 === 0 ? "primary" : "canvas"}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-[#4E7772] dark:text-[#70A49C] font-bold">
              {achievement.date && <span>{achievement.date}</span>}
              {achievement.issuer && <span>{achievement.issuer}</span>}
            </div>
            
            <h3 className="font-heading font-black text-2xl lg:text-3xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-[1.1]">
              {achievement.title}
            </h3>
            
            {achievement.description && (
              <p className="font-body text-sm text-[#65645F] dark:text-[#B3B1AA] mt-auto">
                {achievement.description}
              </p>
            )}
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
