import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';

interface DuplexEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const DuplexEducationSection: React.FC<DuplexEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Education" index={5} />}
      containerClassName="px-6 sm:px-12"
      className="py-16 md:py-24 bg-[#E5DED2] dark:bg-[#1B1F1E]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col gap-6 p-8 lg:p-10 border border-[#B7B0A5]/40 dark:border-[#414542]/40 bg-[#F2EEE7] dark:bg-[#111313]">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D35F43] dark:text-[#E0795D] font-bold">
                {edu.startDate && edu.endDate ? `${edu.startDate} — ${edu.endDate}` : edu.startDate || edu.endDate || ''}
              </span>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-none mt-2">
                {edu.degree}
              </h3>
              <div className="font-heading text-lg uppercase tracking-tight text-[#5F625F] dark:text-[#A9AAA4] mt-1">
                {edu.institution}
              </div>
            </div>
            
            {edu.description && (
              <p className="font-body text-sm lg:text-base text-[#5F625F] dark:text-[#A9AAA4] leading-relaxed">
                {edu.description}
              </p>
            )}
            
            {(edu.grade || edu.fieldOfStudy) && (
              <div className="mt-auto pt-6 border-t border-[#B7B0A5]/20 dark:border-[#414542]/20 flex flex-wrap gap-4">
                {edu.fieldOfStudy && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F]">Field</span>
                    <span className="font-mono text-xs uppercase text-[#181818] dark:text-[#F1EEE7]">{edu.fieldOfStudy}</span>
                  </div>
                )}
                {edu.grade && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F]">Grade</span>
                    <span className="font-mono text-xs uppercase text-[#181818] dark:text-[#F1EEE7]">{edu.grade}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
