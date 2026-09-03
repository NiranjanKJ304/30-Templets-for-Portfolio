import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexExperienceSection: React.FC<DuplexExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Experience" index={4} align="right" />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24"
    >
      <div className="flex flex-col gap-16 lg:gap-24">
        {experience.map((job, idx) => (
          <div key={job.id} className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative group">
            
            {/* Timeline connection line - hidden on mobile, visible on desktop */}
            {idx !== experience.length - 1 && (
              <div className="hidden lg:block absolute left-[15%] top-24 bottom-[-6rem] w-px bg-[#B7B0A5]/30 dark:bg-[#414542]/30"></div>
            )}
            
            {/* Left/Metadata */}
            <div className="w-full lg:w-[30%] flex flex-col gap-2 relative z-10">
              <div className="font-mono text-sm uppercase tracking-widest text-[#D35F43] dark:text-[#E0795D] font-bold">
                {job.startDate} — {job.current ? 'Present' : job.endDate}
              </div>
              <div className="font-heading text-xl uppercase tracking-tighter text-[#5F625F] dark:text-[#A9AAA4]">
                {job.company}
              </div>
              {job.location && (
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F]">
                  {job.location}
                </div>
              )}
            </div>
            
            {/* Right/Content */}
            <div className="w-full lg:w-[70%] flex flex-col gap-6">
              <h3 className="font-heading font-bold text-3xl sm:text-4xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-none">
                {job.role}
              </h3>
              
              {job.description && (
                <p className="font-body text-base text-[#5F625F] dark:text-[#A9AAA4] leading-relaxed max-w-3xl">
                  {job.description}
                </p>
              )}
              
              {job.highlights && job.highlights.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-4 text-[#181818] dark:text-[#F1EEE7]">
                      <span className="font-mono text-[10px] text-[#D35F43] dark:text-[#E0795D] mt-1.5 shrink-0">[+]</span>
                      <span className="font-body text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
