import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalExperienceSection: React.FC<OrbitalExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Experience" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative">
        
        {/* Curved timeline path logic (Simulated with a left border arc on desktop) */}
        <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 md:-translate-x-1/2 w-px border-l-2 border-dashed border-[#B9C9C6]/60 dark:border-[#40504D]/60 -z-10"></div>

        {experience.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
            
            {/* Timeline Node */}
            <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-10 md:top-8 w-4 h-4 bg-[#FFFFFF] dark:bg-[#182221] border-2 border-[#2F7C73] dark:border-[#66B8A9] rounded-full z-10"></div>

            {/* Date Area (Desktop left, Mobile top) */}
            <div className="md:w-1/2 flex flex-col md:items-end pt-8 md:pt-6 md:pr-16 pl-16 md:pl-0">
              <div className="font-heading font-bold text-xl md:text-2xl text-[#172326] dark:text-[#F0F4F1]">
                 {(exp.endDate || exp.current) ? (
                   exp.current ? 'Present' : exp.endDate
                 ) : (
                   exp.startDate
                 )}
              </div>
              {exp.startDate && (exp.endDate || exp.current) && (
                <div className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mt-1">
                  From {exp.startDate}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="md:w-1/2 flex flex-col pt-0 md:pt-6 pl-16 md:pl-16 md:pr-0 pb-10">
              <h3 className="font-heading font-bold text-2xl text-[#172326] dark:text-[#F0F4F1] mb-1">
                {exp.role}
              </h3>
              
              <div className="font-body text-lg text-[#526467] dark:text-[#AABAB7] mb-4">
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2F7C73] dark:hover:text-[#66B8A9] transition-colors">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </div>

              {(exp.location || exp.employmentType) && (
                <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#9BAAA9] dark:text-[#40504D] uppercase tracking-widest mb-6">
                  {exp.location && <span className="bg-[#FFFFFF] dark:bg-[#182221] px-2 py-1 rounded-sm border border-[#B9C9C6]/30 dark:border-[#40504D]/30">{exp.location}</span>}
                  {exp.employmentType && <span className="bg-[#FFFFFF] dark:bg-[#182221] px-2 py-1 rounded-sm border border-[#B9C9C6]/30 dark:border-[#40504D]/30">{exp.employmentType}</span>}
                </div>
              )}

              {exp.description && (
                <p className="font-body text-base text-[#526467] dark:text-[#AABAB7] leading-relaxed mb-6">
                  {exp.description}
                </p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-base text-[#172326] dark:text-[#F0F4F1] font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2F7C73] dark:bg-[#66B8A9] shrink-0 mt-2 mr-3"></div>
                      <span className="leading-relaxed">{highlight}</span>
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
