import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { VellumRule } from '../components/VellumRule';

interface VellumExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const VellumExperienceSection: React.FC<VellumExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <VellumSection title="Chronology" number="04">
        <div className="flex flex-col gap-12 pt-4">
          {experience.map((job, idx) => (
            <div key={job.id} className="flex flex-col relative">
              <VellumAnnotation 
                marker={[job.startDate, job.current ? 'present' : job.endDate].filter(Boolean).join('—')} 
                color="ochre" 
                position="left"
              >
                <div className="flex flex-col">
                  <h4 className="font-heading font-medium text-2xl md:text-3xl text-[#242522] dark:text-[#F0EDE3]">
                    {job.role}
                  </h4>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-1 mb-4">
                    <span className="font-heading italic text-xl text-[#425C72] dark:text-[#7E9CAF]">
                      {job.company}
                    </span>
                    {(job.location || job.employmentType) && (
                      <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F] uppercase tracking-widest">
                        {[job.location, job.employmentType].filter(Boolean).join(' / ')}
                      </span>
                    )}
                  </div>
                  
                  {job.description && (
                    <p className="font-body text-base text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed mb-6">
                      {job.description}
                    </p>
                  )}
                  
                  {job.highlights && job.highlights.length > 0 && (
                    <VellumAnnotation variant="bracket" color="rule" className="pl-4 border-l">
                      <ul className="flex flex-col gap-3">
                        {job.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="font-body text-base text-[#242522] dark:text-[#F0EDE3] flex items-start gap-3">
                            <span className="text-[#A94F3E] dark:text-[#D27661] opacity-70 mt-0.5">·</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </VellumAnnotation>
                  )}
                </div>
              </VellumAnnotation>
              
              {idx < experience.length - 1 && (
                <div className="w-8 mx-auto mt-12 mb-0">
                  <VellumRule thickness="double" />
                </div>
              )}
            </div>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
