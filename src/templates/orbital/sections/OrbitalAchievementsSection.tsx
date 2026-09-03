import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalAchievementsSection: React.FC<OrbitalAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Achievements" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id || idx} className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 relative">
            
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-[#B9C9C6]/60 dark:border-[#40504D]/60 -z-10 -translate-y-1/2"></div>
            
            <div className="md:w-1/4 flex flex-col items-center md:items-end text-center md:text-right bg-[#EEF2F1] dark:bg-[#101819] py-2 px-4 z-10">
               <span className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-1">{achievement.date}</span>
               <span className="font-mono text-xs text-[#2F7C73] dark:text-[#66B8A9] uppercase">{achievement.issuer}</span>
            </div>
            
            <div className="w-6 h-6 rounded-full bg-[#EEF2F1] dark:bg-[#101819] border-2 border-[#172326] dark:border-[#F0F4F1] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(47,124,115,0.2)]">
               <div className="w-1.5 h-1.5 bg-[#2F7C73] dark:bg-[#66B8A9] rounded-full"></div>
            </div>

            <div className="md:w-3/4 flex flex-col bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/40 dark:border-[#40504D]/40 rounded-3xl p-8 z-10 w-full text-center md:text-left shadow-sm">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-[#172326] dark:text-[#F0F4F1] mb-2">
                {achievement.url ? (
                  <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#2F7C73] dark:hover:text-[#66B8A9] transition-colors">
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
              </h3>
              {achievement.category && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#526467] dark:text-[#AABAB7] mb-4 block">
                  {achievement.category}
                </span>
              )}
              {achievement.description && (
                <p className="font-body text-base text-[#526467] dark:text-[#AABAB7] leading-relaxed">
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
