import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';

interface KinshipAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KinshipAchievementsSection: React.FC<KinshipAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <KinshipSection title="Milestones" color="gold">
        <div className="flex flex-col gap-12 relative pl-4 md:pl-8">
          <KinshipConnector orientation="vertical" className="absolute top-0 bottom-0 left-[3px] opacity-30" />
          
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col gap-2 relative pl-6 group">
              <KinshipAnchor color="gold" size="sm" className="absolute top-1.5 -left-1 opacity-50 group-hover:opacity-100 transition-opacity" />
              <KinshipConnector orientation="horizontal" className="absolute top-2 left-1 w-4 opacity-30 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] md:text-xs text-[#C7A85D] dark:text-[#D3BA70] uppercase tracking-widest font-bold">
                  {[achievement.date, achievement.category].filter(Boolean).join(' • ')}
                </span>
              </div>
              <h4 className="font-heading font-medium text-xl md:text-2xl text-[#202624] dark:text-[#EEF0EA] break-words">
                {achievement.title}
              </h4>
              <span className="font-body text-base md:text-lg text-[#737A75] dark:text-[#A7ADA7] font-medium">
                {achievement.issuer}
              </span>
              {achievement.description && (
                <p className="font-body text-base text-[#737A75] dark:text-[#A7ADA7] leading-relaxed mt-2 max-w-3xl">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
