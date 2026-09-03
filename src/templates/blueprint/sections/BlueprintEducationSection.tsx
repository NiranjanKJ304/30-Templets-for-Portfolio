import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintEducationSection: React.FC<BlueprintEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Academic Foundation" number="05" description="Institutional Qualifications" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-8 relative">
            {/* Top right specification label */}
            <div className="absolute top-0 right-0 bg-[#2E6FBB] dark:bg-[#5DA9E9] text-[#FAFCFD] dark:text-[#0D1620] px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
              EDU-{String(idx + 1).padStart(2, '0')}
            </div>

            <div className="flex justify-between items-start mb-4 pr-16">
              <h3 className="font-heading font-bold text-xl text-[#173A5E] dark:text-[#EAF2F7] uppercase">
                {edu.institutionUrl ? (
                  <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </h3>
            </div>

            <div className="font-mono text-sm text-[#E8893A] dark:text-[#F0A35B] mb-2 font-bold uppercase tracking-wider">
              {edu.degree} {edu.fieldOfStudy && `// ${edu.fieldOfStudy}`}
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-6">
              <span className="border border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 px-2 py-1">
                {edu.startDate && <span>{edu.startDate}</span>}
                {(edu.startDate && (edu.endDate || edu.current)) && <span> - </span>}
                {(edu.endDate || edu.current) && <span>{edu.current ? 'PRESENT' : edu.endDate}</span>}
              </span>
              {edu.location && <span className="border border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 px-2 py-1">LOC: {edu.location}</span>}
              {edu.grade && <span className="border border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 px-2 py-1">GRADE: {edu.grade}</span>}
            </div>

            {edu.description && (
              <p className="font-body text-[#17202A] dark:text-[#EAF2F7] mb-6 leading-relaxed text-sm">
                {edu.description}
              </p>
            )}

            {edu.activities && edu.activities.length > 0 && (
              <div className="mb-4">
                <span className="block font-mono text-[10px] text-[#2E6FBB] dark:text-[#5DA9E9] uppercase tracking-widest mb-2 border-b border-dashed border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 pb-1">
                  ACTIVITIES
                </span>
                <p className="font-body text-[#17202A] dark:text-[#EAF2F7] text-sm">{edu.activities.join(' // ')}</p>
              </div>
            )}

            {edu.courses && edu.courses.length > 0 && (
              <div className="mt-6 pt-4 border-t border-dashed border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30">
                <span className="block font-mono text-[10px] text-[#2E6FBB] dark:text-[#5DA9E9] uppercase tracking-widest mb-3">
                  COURSEWORK
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, cIdx) => (
                    <span key={cIdx} className="text-[10px] font-mono bg-[#E6ECEF] dark:bg-[#0D1620] text-[#173A5E] dark:text-[#EAF2F7] px-2 py-1 uppercase">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
