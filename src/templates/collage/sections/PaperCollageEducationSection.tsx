import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageEducationSection: React.FC<PaperCollageEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Education" number="05" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {education.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Stacked sheets effect */}
            <div className="absolute inset-0 bg-[#EBE6DA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] transform rotate-2 translate-x-2 translate-y-2 -z-10 group-hover:rotate-3 transition-transform"></div>
            <div className="absolute inset-0 bg-[#F5C84B]/20 dark:bg-[#F5C84B]/10 transform -rotate-1 -translate-x-1 translate-y-1 -z-20"></div>

            <div className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 shadow-sm">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-heading font-black text-xl text-[#171717] dark:text-white">
                  {edu.institutionUrl ? (
                    <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F26B5B] transition-colors">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </h3>
                <div className="bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-mono text-xs px-2 py-1 whitespace-nowrap transform rotate-2">
                  {edu.startDate && <span>{edu.startDate}</span>}
                  {(edu.startDate && (edu.endDate || edu.current)) && <span> - </span>}
                  {(edu.endDate || edu.current) && <span>{edu.current ? 'Present' : edu.endDate}</span>}
                </div>
              </div>

              <div className="font-body font-bold text-lg text-[#F26B5B] mb-2">
                {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
              </div>

              {(edu.location || edu.grade) && (
                <div className="flex flex-wrap gap-4 font-mono text-xs text-[#737373] dark:text-[#A0A5B5] uppercase tracking-wider mb-6">
                  {edu.location && <span>{edu.location}</span>}
                  {edu.location && edu.grade && <span>•</span>}
                  {edu.grade && <span>Grade: {edu.grade}</span>}
                </div>
              )}

              {edu.description && (
                <p className="font-body text-[#4A4A4A] dark:text-[#E0E0E0] mb-6 leading-relaxed">
                  {edu.description}
                </p>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <div className="mb-6">
                  <span className="block font-mono text-xs text-[#171717] dark:text-white uppercase mb-2">Activities:</span>
                  <p className="font-body text-[#4A4A4A] dark:text-[#E0E0E0]">{edu.activities.join(', ')}</p>
                </div>
              )}

              {edu.courses && edu.courses.length > 0 && (
                <div className="pt-4 border-t border-[#E5E1D8] dark:border-[#3A3F4C]">
                  <span className="block font-mono text-xs text-[#171717] dark:text-white uppercase mb-2">Relevant Coursework:</span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cIdx) => (
                      <span key={cIdx} className="text-xs font-body bg-[#F7F3EA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] text-[#4A4A4A] dark:text-[#A0A5B5] px-2 py-1">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
