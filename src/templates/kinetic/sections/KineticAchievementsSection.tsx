import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ArrowDownRight } from 'lucide-react';

interface KineticAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticAchievementsSection: React.FC<KineticAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32"
    >
      <KineticSectionHeader title="Achievements" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mt-12">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id} className="flex flex-col gap-6 group">
            <div className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-[#BDB7AA] dark:text-[#454846] leading-none select-none">
              {(idx + 1).toString().padStart(2, '0')}
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] flex items-start justify-between gap-4">
                {achievement.title}
                <ArrowDownRight className="shrink-0 w-8 h-8 text-[#E84F3D] dark:text-[#FF715D] motion-safe:-translate-y-2 motion-safe:-translate-x-2 opacity-0 group-hover:opacity-100 motion-safe:group-hover:translate-y-0 motion-safe:group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              
              <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0] font-bold">
                {achievement.date && <span>{achievement.date}</span>}
                {achievement.issuer && <span>{achievement.issuer}</span>}
              </div>
            </div>
            
            {achievement.description && (
              <p className="font-body text-base text-[#555555] dark:text-[#B4B4AE] max-w-md">
                {achievement.description}
              </p>
            )}
            
            <div className="w-full h-1 bg-[#171717] dark:bg-[#F3F0E8] mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 motion-reduce:hidden"></div>
            <div className="w-full h-1 bg-[#171717] dark:bg-[#F3F0E8] mt-4 hidden motion-reduce:block"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
