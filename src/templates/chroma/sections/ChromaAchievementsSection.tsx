import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';
import { ChromaBoundary } from '../components/ChromaBoundary';

interface ChromaAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaAchievementsSection: React.FC<ChromaAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="canvas">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Milestones</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <ChromaBoundary variant="subtle" className="mb-8" />
            <div className="flex flex-col">
              {achievements.map((achievement, idx) => (
                <div key={achievement.id} className="flex flex-col py-8 border-b border-black/5 dark:border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                      {achievement.date}
                    </span>
                    <h4 className="font-heading text-2xl font-medium tracking-tight">
                      {achievement.title}
                    </h4>
                    <span className="font-body text-lg opacity-70">
                      {achievement.issuer}
                    </span>
                    {achievement.description && (
                      <p className="font-body text-base font-light leading-relaxed opacity-80 mt-2 max-w-2xl">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
