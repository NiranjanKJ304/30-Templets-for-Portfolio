import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';

interface MonoformExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonoformExperienceSection: React.FC<MonoformExperienceSectionProps> = ({ data, enabled = true }) => {
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
      <MonoformSurface depth="surface" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                04. Professional Record
              </h2>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col">
                <MonoformRule variant="subtle" />
                {experience.map((job, idx) => (
                  <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                    
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#1D1F1E] dark:text-[#F0EEE7]">
                        {job.startDate} — {job.current ? 'Present' : job.endDate}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                        {[job.location, job.employmentType].filter(Boolean).join(' · ')}
                      </span>
                    </div>

                    <div className="md:col-span-9 flex flex-col gap-6">
                      <div className="flex flex-col">
                        <h4 className="font-heading text-2xl font-light text-[#1D1F1E] dark:text-[#F0EEE7]">
                          {job.role}
                        </h4>
                        <span className="font-heading text-lg font-light text-[#6C706B] dark:text-[#A7AAA4]">
                          {job.company}
                        </span>
                      </div>
                      
                      {job.description && (
                        <p className="font-body text-base font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4]">
                          {job.description}
                        </p>
                      )}
                      
                      {job.highlights && job.highlights.length > 0 && (
                        <ul className="flex flex-col gap-3 mt-2">
                          {job.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="font-body text-sm font-light text-[#6C706B] dark:text-[#A7AAA4] flex items-start gap-4">
                              <span className="opacity-40 mt-1">—</span>
                              <span className="flex-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
