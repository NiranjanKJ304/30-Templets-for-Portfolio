import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { VellumRule } from '../components/VellumRule';

interface VellumEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumEducationSection: React.FC<VellumEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <VellumSection title="Academic Record" number="05">
        <div className="flex flex-col gap-12 pt-4">
          {education.map((edu, idx) => (
            <div key={edu.id} className="flex flex-col relative">
              <VellumAnnotation 
                marker={[edu.startDate, edu.endDate].filter(Boolean).join('—')} 
                color="brick" 
                position="left"
              >
                <div className="flex flex-col">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EDE3]">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-1 mb-4">
                    <span className="font-heading italic text-xl text-[#A94F3E] dark:text-[#D27661]">
                      {edu.institution}
                    </span>
                  </div>
                  
                  {edu.description && (
                    <p className="font-body text-base text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {edu.fieldOfStudy && (
                      <VellumAnnotation variant="underline" color="dustRose">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D7776] dark:text-[#C19B9B] mr-2">Field:</span>
                        <span className="font-body text-sm text-[#242522] dark:text-[#F0EDE3]">{edu.fieldOfStudy}</span>
                      </VellumAnnotation>
                    )}
                    {edu.grade && (
                      <VellumAnnotation variant="underline" color="dustRose">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D7776] dark:text-[#C19B9B] mr-2">Grade:</span>
                        <span className="font-body text-sm text-[#242522] dark:text-[#F0EDE3]">{edu.grade}</span>
                      </VellumAnnotation>
                    )}
                  </div>
                </div>
              </VellumAnnotation>
            </div>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
