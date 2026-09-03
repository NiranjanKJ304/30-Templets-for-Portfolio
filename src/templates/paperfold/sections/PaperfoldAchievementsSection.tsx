import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldAchievementsSection: React.FC<PaperfoldAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Achievements" number="08" subtitle="Awards & Recognition" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="flex flex-col gap-8 md:gap-12 max-w-4xl">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id || idx} className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-8 md:p-10 relative flex flex-col md:flex-row gap-6 md:gap-10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
            
            {/* Folded marker ribbon left side */}
            <div className="absolute top-6 -left-2 w-4 h-12 bg-[#7D9EAF] dark:bg-[#8EADBD] shadow-sm flex items-center justify-center pointer-events-none">
               <div className="absolute top-full left-0 w-0 h-0 border-t-[8px] border-t-[#202020]/40 border-l-[8px] border-l-transparent"></div>
            </div>

            <div className="pl-6 md:w-1/3 flex flex-col justify-start">
              {achievement.category && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C86B52] dark:text-[#D47A61] mb-4 border-b border-[#C86B52]/20 dark:border-[#D47A61]/20 pb-2 inline-block">
                  {achievement.category}
                </span>
              )}

              <p className="font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest mb-2">
                {achievement.date}
              </p>
              <p className="font-mono text-[10px] text-[#202020] dark:text-[#F3F0E8] uppercase tracking-widest font-bold">
                {achievement.issuer}
              </p>
            </div>

            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-[#E8E3D8] dark:border-[#202020] pt-6 md:pt-0 md:pl-10">
              <h3 className="font-heading font-normal text-2xl text-[#202020] dark:text-[#F3F0E8] mb-4 leading-snug">
                {achievement.url ? (
                  <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#C86B52] dark:hover:text-[#D47A61] transition-colors">
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
              </h3>

              {achievement.description && (
                <p className="font-body font-light text-base text-[#66717A] dark:text-[#AAB3B8] leading-relaxed">
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
