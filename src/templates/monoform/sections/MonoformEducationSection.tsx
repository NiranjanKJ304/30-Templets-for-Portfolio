import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformEducationSection: React.FC<MonoformEducationSectionProps> = ({ data, enabled = true }) => {
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
      <MonoformSurface depth="inset" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                05. Academic History
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                {education.map((edu, idx) => (
                  <div key={edu.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                    
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {[edu.startDate, edu.endDate].filter(Boolean).join(' — ')}
                      </span>
                    </div>

                    <div className="md:col-span-9 flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h4 className="font-heading text-2xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                          {edu.degree}
                        </h4>
                        <span className="font-heading text-lg font-light text-[#6C706B] dark:text-[#A7AAA4]">
                          {edu.institution}
                        </span>
                      </div>
                      
                      {edu.description && (
                        <p className="font-body text-base font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4]">
                          {edu.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                        {edu.fieldOfStudy && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                            Field: {edu.fieldOfStudy}
                          </span>
                        )}
                        {edu.grade && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                            Grade: {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
