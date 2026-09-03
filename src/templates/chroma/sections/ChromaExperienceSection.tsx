import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';

interface ChromaExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const ChromaExperienceSection: React.FC<ChromaExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <div className="flex flex-col">
        {experience.map((job, idx) => (
          <ChromaField key={job.id} color={idx % 2 === 0 ? 'canvas' : 'rose'} className="py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-2">
                {idx === 0 && <h2 className="font-mono text-sm uppercase tracking-widest opacity-60 mb-8 hidden lg:block">Chronology</h2>}
                <span className="font-mono text-sm md:text-base opacity-70">
                  {job.startDate} — {job.current ? 'Present' : job.endDate}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                  {[job.location, job.employmentType].filter(Boolean).join(' • ')}
                </span>
              </div>

              <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">
                    {job.role}
                  </h4>
                  <span className="font-heading text-2xl md:text-3xl opacity-70">
                    {job.company}
                  </span>
                </div>
                
                {job.description && (
                  <p className="font-body text-xl font-light leading-relaxed opacity-80">
                    {job.description}
                  </p>
                )}
                
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="flex flex-col gap-4 mt-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="font-body text-lg opacity-90 flex items-start gap-4">
                        <span className="opacity-40 mt-1.5">-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
            </div>
          </ChromaField>
        ))}
      </div>
    </SectionWrapper>
  );
};
