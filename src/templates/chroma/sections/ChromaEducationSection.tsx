import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaEducationSection: React.FC<ChromaEducationSectionProps> = ({ data, enabled = true }) => {
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
      <ChromaField color="lilac">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Education</h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-16">
            {education.map((edu, idx) => (
              <div key={edu.id} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-3xl md:text-4xl font-medium tracking-tight">
                    {edu.degree}
                  </h4>
                  <span className="font-heading text-xl md:text-2xl opacity-70">
                    {edu.institution}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 mt-2">
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                  </span>
                </div>
                
                {edu.description && (
                  <p className="font-body text-lg font-light leading-relaxed opacity-80 max-w-3xl">
                    {edu.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4 mt-2">
                  {edu.fieldOfStudy && (
                    <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-current opacity-60 rounded-full">
                      Field: {edu.fieldOfStudy}
                    </span>
                  )}
                  {edu.grade && (
                    <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-current opacity-60 rounded-full">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </ChromaField>
    </SectionWrapper>
  );
};
