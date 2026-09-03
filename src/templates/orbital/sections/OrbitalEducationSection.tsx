import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalEducationSection: React.FC<OrbitalEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Education" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/50 dark:border-[#40504D]/50 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
            
            {/* Corner Arc */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b-2 border-l-2 border-[#2F7C73]/10 dark:border-[#66B8A9]/10 rounded-bl-full pointer-events-none transition-colors group-hover:border-[#2F7C73]/30 dark:group-hover:border-[#66B8A9]/30"></div>

            <h3 className="font-heading font-bold text-2xl text-[#172326] dark:text-[#F0F4F1] mb-2 pr-12 relative z-10">
              {edu.institutionUrl ? (
                <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2F7C73] dark:hover:text-[#66B8A9] transition-colors">
                  {edu.institution}
                </a>
              ) : (
                edu.institution
              )}
            </h3>

            <div className="font-body text-lg text-[#526467] dark:text-[#AABAB7] mb-6 relative z-10">
              {edu.degree} {edu.fieldOfStudy && <span>in {edu.fieldOfStudy}</span>}
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-6 relative z-10">
              <span className="bg-[#EEF2F1] dark:bg-[#101819] px-3 py-1.5 rounded-full border border-[#B9C9C6]/50 dark:border-[#40504D]/50">
                {edu.startDate && <span>{edu.startDate}</span>}
                {(edu.startDate && (edu.endDate || edu.current)) && <span> - </span>}
                {(edu.endDate || edu.current) && <span>{edu.current ? 'Present' : edu.endDate}</span>}
              </span>
              {edu.location && <span className="bg-[#EEF2F1] dark:bg-[#101819] px-3 py-1.5 rounded-full border border-[#B9C9C6]/50 dark:border-[#40504D]/50">{edu.location}</span>}
            </div>

            {edu.description && (
              <p className="font-body text-base text-[#526467] dark:text-[#AABAB7] leading-relaxed relative z-10">
                {edu.description}
              </p>
            )}

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
