import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { VellumRule } from '../components/VellumRule';

interface VellumAchievementsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumAchievementsSection: React.FC<VellumAchievementsSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Milestones" number="08">
        <div className="flex flex-col pt-4">
          <VellumRule />
          {achievements.map((achievement, idx) => (
            <div key={achievement.id} className="flex flex-col relative border-b border-[#C8C2B5] dark:border-[#4A4B46] py-8">
              <VellumAnnotation 
                marker={achievement.date} 
                color="olive" 
                position="left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-4">
                    <h4 className="font-heading font-medium text-xl md:text-2xl text-[#242522] dark:text-[#F0EDE3]">
                      {achievement.title}
                    </h4>
                    {achievement.category && (
                      <span className="font-mono text-[10px] text-[#747B5D] dark:text-[#A5AE87] uppercase tracking-widest italic">
                        {achievement.category}
                      </span>
                    )}
                  </div>
                  <span className="font-heading italic text-lg text-[#6D6D66] dark:text-[#AAA99F]">
                    {achievement.issuer}
                  </span>
                  {achievement.description && (
                    <p className="font-body text-base text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed max-w-2xl mt-2">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </VellumAnnotation>
            </div>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
