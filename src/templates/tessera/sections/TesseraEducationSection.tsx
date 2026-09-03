import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';

interface TesseraEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const TesseraEducationSection: React.FC<TesseraEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <TesseraSection title="Education" accent="plum">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48] relative">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block z-0" />
          
          {education.map((edu, idx) => (
            <TesseraModule 
              key={edu.id}
              elevation="flat"
              tab={idx % 2 === 0 ? 'top' : 'none'}
              className="flex flex-col gap-8 p-8 border-b border-[#C8C4B9] dark:border-[#4A4D48] md:odd:border-r"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] md:text-xs text-[#73756E] dark:text-[#A5A7A0] uppercase tracking-widest font-bold">
                  {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                </span>
                <h4 className="font-heading font-medium text-xl md:text-2xl text-[#242522] dark:text-[#F0EEE5] break-words">
                  {edu.degree}
                </h4>
                <span className="font-body text-lg text-[#8D7180] dark:text-[#B39AA7] font-medium">
                  {edu.institution}
                </span>
              </div>
              
              {edu.description && (
                <p className="font-body text-base text-[#73756E] dark:text-[#A5A7A0] leading-relaxed flex-1">
                  {edu.description}
                </p>
              )}

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-auto pt-6 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
                {edu.fieldOfStudy && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#C8C4B9] dark:text-[#4A4D48] uppercase tracking-widest">Field</span>
                    <span className="font-body text-sm text-[#242522] dark:text-[#F0EEE5]">{edu.fieldOfStudy}</span>
                  </div>
                )}
                {edu.grade && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#C8C4B9] dark:text-[#4A4D48] uppercase tracking-widest">Grade</span>
                    <span className="font-body text-sm text-[#242522] dark:text-[#F0EEE5]">{edu.grade}</span>
                  </div>
                )}
                {edu.location && (
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#C8C4B9] dark:text-[#4A4D48] uppercase tracking-widest">Location</span>
                    <span className="font-body text-sm text-[#242522] dark:text-[#F0EEE5]">{edu.location}</span>
                  </div>
                )}
              </div>
            </TesseraModule>
          ))}
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
