import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageAchievementsSection: React.FC<PaperCollageAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Achievements" number="08" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-wrap gap-8 justify-center">
        {achievements.map((achievement, idx) => {
          const rotation = idx % 2 === 0 ? 'rotate-2' : '-rotate-1';
          
          return (
            <div key={achievement.id || idx} className={`w-full max-w-sm relative transform ${rotation}`}>
              
              {/* Pinned note effect */}
              <div className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.05)] h-full flex flex-col">
                {/* Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#171717] dark:bg-[#EBE6DA] shadow-sm z-10"></div>
                
                {achievement.category && (
                  <span className="self-start font-mono text-[10px] uppercase tracking-widest text-[#F26B5B] border border-[#F26B5B] px-2 py-1 mb-4">
                    {achievement.category}
                  </span>
                )}

                <h3 className="font-heading font-black text-xl text-[#171717] dark:text-white mb-2">
                  {achievement.url ? (
                    <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {achievement.title}
                    </a>
                  ) : (
                    achievement.title
                  )}
                </h3>

                <p className="font-mono text-sm text-[#4A4A4A] dark:text-[#A0A5B5] mb-4">
                  {achievement.issuer}
                </p>

                {achievement.description && (
                  <p className="font-body text-[#4A4A4A] dark:text-[#E0E0E0] text-sm leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                )}

                <div className="mt-6 pt-4 border-t border-[#E5E1D8] dark:border-[#3A3F4C] font-mono text-xs text-[#737373] dark:text-[#A0A5B5]">
                  {achievement.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
