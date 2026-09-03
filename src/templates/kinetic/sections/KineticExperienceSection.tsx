import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ArrowDown } from 'lucide-react';

interface KineticExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticExperienceSection: React.FC<KineticExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-6 sm:px-12 max-w-[1600px] mx-auto"
      className="py-16 md:py-32"
    >
      <KineticSectionHeader title="Experience" index={4} showRule={false} />
      
      <div className="flex flex-col">
        {experience.map((job, idx) => (
          <div key={job.id} className="relative flex flex-col md:flex-row gap-6 md:gap-16 py-12 md:py-20 border-t-4 border-[#171717] dark:border-[#F3F0E8] group">
            
            <div className="md:w-[35%] flex flex-col gap-2 shrink-0 relative z-10">
              <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] leading-none">
                {job.company}
              </div>
              <div className="font-mono text-sm uppercase tracking-widest text-[#E84F3D] dark:text-[#FF715D] font-bold mt-2">
                {job.startDate} — {job.current ? 'Present' : job.endDate}
              </div>
              {job.location && (
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#555555] dark:text-[#B4B4AE] mt-1">
                  {job.location}
                </div>
              )}
            </div>
            
            <div className="md:w-[65%] flex flex-col gap-6 relative z-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#171717] dark:text-[#F3F0E8]">
                {job.role}
              </h3>
              
              {job.description && (
                <p className="font-body text-base lg:text-lg text-[#555555] dark:text-[#B4B4AE] leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              )}
              
              {job.highlights && job.highlights.length > 0 && (
                <ul className="flex flex-col gap-4 mt-2">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-4 text-[#171717] dark:text-[#F3F0E8]">
                      <ArrowDown size={20} className="shrink-0 text-[#285B63] dark:text-[#6FA9B0] -rotate-45" />
                      <span className="font-body text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
          </div>
        ))}
        {/* Cap off the final item with a thick bottom border */}
        <div className="w-full border-t-4 border-[#171717] dark:border-[#F3F0E8]"></div>
      </div>
    </SectionWrapper>
  );
};
