import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformAchievementsSection: React.FC<MonoformAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <MonoformSurface depth="surface" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                08. Milestones
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                {achievements.map((achievement, idx) => (
                  <div key={achievement.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                    <div className="md:col-span-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <div className="md:col-span-9 flex flex-col gap-2">
                      <h4 className="font-heading text-xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {achievement.title}
                      </h4>
                      <span className="font-heading text-base font-light text-[#6C706B] dark:text-[#A7AAA4]">
                        {achievement.issuer}
                      </span>
                      {achievement.description && (
                        <p className="font-body text-sm font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4] mt-2">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
