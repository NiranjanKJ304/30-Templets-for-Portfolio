import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';

interface MosaicEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MosaicEducationSection: React.FC<MosaicEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Education" />
        </div>
        
        {education.map((edu, idx) => (
          <MosaicTile 
            key={edu.id} 
            span={education.length === 1 ? "full" : "half"} 
            padding="lg" 
            surface={idx % 3 === 0 ? "canvas" : (idx % 2 === 0 ? "primary" : "soft")}
            className="flex flex-col gap-6"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-[#1B1B1A] dark:text-[#F1EEE7] font-bold border-b border-[#CBC5BB] dark:border-[#444744] pb-4">
              {edu.startDate && edu.endDate ? `${edu.startDate} — ${edu.endDate}` : edu.startDate || edu.endDate || ''}
            </div>
            
            <h3 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tighter leading-none text-[#1B1B1A] dark:text-[#F1EEE7]">
              {edu.degree}
            </h3>
            
            <div className="font-heading font-bold text-xl uppercase tracking-tight text-[#65645F] dark:text-[#B3B1AA]">
              {edu.institution}
            </div>
            
            {(edu.fieldOfStudy || edu.grade) && (
              <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest font-bold text-[#1B1B1A] dark:text-[#F1EEE7] mt-auto pt-8 border-t border-[#CBC5BB] dark:border-[#444744]">
                {edu.fieldOfStudy && <span>FOS: {edu.fieldOfStudy}</span>}
                {edu.grade && <span>GPA: {edu.grade}</span>}
              </div>
            )}
          </MosaicTile>
        ))}
      </div>
    </SectionWrapper>
  );
};
