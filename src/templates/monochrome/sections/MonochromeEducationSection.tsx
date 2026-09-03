import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeEducationSection: React.FC<MonochromeEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Education" number="05" subtitle="Academic Archive" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col">
        {education.map((edu, idx) => (
          <div key={idx} className="border-t border-[#C9C6BE]/60 dark:border-[#3A3A37]/60 py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            
            <div className="md:col-span-8 lg:col-span-9 order-2 md:order-1">
              <h3 className="font-heading text-3xl md:text-4xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-2">
                {edu.institutionUrl ? (
                  <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B44A35] dark:hover:text-[#D06A52] transition-colors border-b border-[#C9C6BE] dark:border-[#3A3A37] hover:border-[#B44A35] pb-0.5">
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </h3>
              
              <div className="font-body text-lg md:text-xl font-medium text-[#555555] dark:text-[#B5B3AC] mb-6">
                {edu.degree} {edu.fieldOfStudy && <span className="font-light">in {edu.fieldOfStudy}</span>}
              </div>

              {edu.description && (
                <p className="font-body text-base text-[#555555] dark:text-[#B5B3AC] leading-relaxed mb-6">
                  {edu.description}
                </p>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <div className="mb-6">
                  <span className="block font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest mb-2">Activities</span>
                  <p className="font-body text-sm text-[#151515] dark:text-[#F2F0E9]">{edu.activities.join(', ')}</p>
                </div>
              )}
            </div>

            <div className="md:col-span-4 lg:col-span-3 order-1 md:order-2 flex flex-col items-start md:items-end">
              <div className="font-mono text-sm md:text-base text-[#151515] dark:text-[#F2F0E9] uppercase tracking-widest border border-[#C9C6BE] dark:border-[#3A3A37] px-3 py-1.5 inline-block text-center mb-4">
                 {edu.startDate && <span>{edu.startDate}</span>}
                 {(edu.startDate && (edu.endDate || edu.current)) && <span> — </span>}
                 {(edu.endDate || edu.current) && <span>{edu.current ? 'Present' : edu.endDate}</span>}
              </div>
              
              <div className="flex flex-col gap-2 font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest md:text-right">
                {edu.location && <span>{edu.location}</span>}
                {edu.grade && <span>Grade: <span className="text-[#151515] dark:text-[#F2F0E9]">{edu.grade}</span></span>}
              </div>
            </div>

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
