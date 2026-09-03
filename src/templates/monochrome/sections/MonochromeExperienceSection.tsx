import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeExperienceSection: React.FC<MonochromeExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Experience" number="04" subtitle="Professional Timeline" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {experience.map((exp, idx) => (
          <div key={idx} className="border-t border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            
            {/* Timeline Column */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="font-heading text-4xl md:text-5xl text-[#151515] dark:text-[#F2F0E9] leading-none mb-4">
                 {(exp.endDate || exp.current) ? (
                   exp.current ? 'Present' : exp.endDate
                 ) : (
                   exp.startDate
                 )}
              </div>
              
              {exp.startDate && (exp.endDate || exp.current) && (
                <div className="font-mono text-xs text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mt-2 flex items-center gap-2">
                  <span>From</span>
                  <span>{exp.startDate}</span>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="font-heading text-3xl md:text-4xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-2">
                {exp.role}
              </h3>
              
              <div className="font-body text-lg md:text-xl font-medium text-[#555555] dark:text-[#B5B3AC] mb-6">
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B44A35] dark:hover:text-[#D06A52] transition-colors border-b border-[#C9C6BE] dark:border-[#3A3A37] hover:border-[#B44A35] pb-0.5">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </div>

              {(exp.location || exp.employmentType) && (
                <div className="flex flex-wrap gap-6 font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-8 border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-4">
                  {exp.location && <span>{exp.location}</span>}
                  {exp.employmentType && <span>{exp.employmentType}</span>}
                </div>
              )}

              {exp.description && (
                <p className="font-body text-base text-[#555555] dark:text-[#B5B3AC] leading-relaxed mb-8">
                  {exp.description}
                </p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((highlight, hIdx) => (
                     <li key={hIdx} className="flex items-start font-body text-base text-[#151515] dark:text-[#F2F0E9] leading-relaxed">
                       <span className="font-mono text-[#B44A35] dark:text-[#D06A52] mr-4 mt-0.5 select-none">—</span>
                       <span>{highlight}</span>
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
