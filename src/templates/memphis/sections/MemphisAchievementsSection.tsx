import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisAchievementsSection: React.FC<MemphisAchievementsSectionProps> = ({ data, enabled = true }) => {
  const { achievements } = data;
  const hasData = Array.isArray(achievements) && achievements.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="achievements"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Achievements" number="08" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {achievements.map((achievement, idx) => (
          <div 
            key={achievement.id}
            className={`bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between ${idx % 2 !== 0 ? 'md:translate-x-8' : ''}`}
            style={{ boxShadow: `6px 6px 0 0 ${idx % 2 === 0 ? '#F97316' : '#2563EB'}` }}
          >
            <div className="flex-1">
              <h3 className="font-heading font-black text-2xl uppercase text-neutral-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 font-body font-bold text-neutral-600 dark:text-neutral-400 mb-2">
                {achievement.issuer && <span>{achievement.issuer}</span>}
                {achievement.issuer && achievement.date && <span>•</span>}
                {achievement.date && <span>{achievement.date}</span>}
              </div>
              {achievement.description && (
                <p className="text-neutral-700 dark:text-neutral-300 font-bold max-w-2xl">
                  {achievement.description}
                </p>
              )}
            </div>
            
            {achievement.url && (
              <div className="flex-shrink-0">
                <a 
                  href={achievement.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
