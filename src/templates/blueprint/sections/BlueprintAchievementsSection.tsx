import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintAchievementsSection: React.FC<BlueprintAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Project Milestones" number="08" description="Recognized Operational Achievements" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, idx) => (
          <div key={achievement.id || idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-6 relative flex items-start gap-6">
            
            {/* Stamp Graphic */}
            <div className="w-16 h-16 border-2 border-[#3DA9C9] flex-shrink-0 flex items-center justify-center relative">
              <div className="absolute inset-1 border border-[#3DA9C9]"></div>
              <span className="font-mono text-xl font-light text-[#3DA9C9]">{String(idx + 1).padStart(2, '0')}</span>
            </div>

            <div className="flex-grow">
              {achievement.category && (
                <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-[#E8893A] dark:text-[#F0A35B] mb-2 border-b border-[#E8893A]/30 dark:border-[#F0A35B]/30">
                  {achievement.category}
                </span>
              )}

              <h3 className="font-heading font-bold text-lg text-[#173A5E] dark:text-[#EAF2F7] uppercase mb-1">
                {achievement.url ? (
                  <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
              </h3>

              <p className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-3">
                {achievement.issuer} // {achievement.date}
              </p>

              {achievement.description && (
                <p className="font-body text-sm text-[#17202A] dark:text-[#EAF2F7] leading-relaxed">
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
