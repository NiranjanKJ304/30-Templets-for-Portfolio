import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicExperienceSection: React.FC<MosaicExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Experience" />
        </div>
        
        {experience.map((job, idx) => (
          <MosaicTile 
            key={job.id} 
            span={idx % 2 === 0 ? "two-thirds" : "full"} 
            padding="lg" 
            surface={idx % 2 === 0 ? "warm" : "primary"}
            className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-between"
          >
            <div className="md:w-[40%] flex flex-col gap-2 shrink-0 border-l-4 border-[#D66B4D] dark:border-[#E27A5A] pl-6">
              <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-none">
                {job.company}
              </h3>
              <div className="font-mono text-sm uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA] font-bold mt-2">
                {job.startDate} — {job.current ? 'Present' : job.endDate}
              </div>
              {job.location && (
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#1B1B1A] dark:text-[#F1EEE7] font-bold mt-2 border border-[#CBC5BB] dark:border-[#444744] px-2 py-1 self-start">
                  {job.location}
                </div>
              )}
            </div>
            
            <div className="md:w-[60%] flex flex-col gap-6">
              <h4 className="font-heading font-bold text-2xl uppercase tracking-tight text-[#1B1B1A] dark:text-[#F1EEE7]">
                {job.role}
              </h4>
              
              {job.description && (
                <p className="font-body text-base lg:text-lg text-[#65645F] dark:text-[#B3B1AA] leading-relaxed">
                  {job.description}
                </p>
              )}
              
              {job.highlights && job.highlights.length > 0 && (
                <div className="mt-4 flex flex-col gap-3">
                  {job.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-4 text-[#1B1B1A] dark:text-[#F1EEE7]">
                      <div className="w-1.5 h-1.5 bg-[#4E7772] dark:bg-[#70A49C] mt-2 shrink-0"></div>
                      <span className="font-body text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
