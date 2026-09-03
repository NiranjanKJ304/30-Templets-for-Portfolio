import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { KineticMarquee } from '../components/KineticMarquee';

interface KineticEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const KineticEducationSection: React.FC<KineticEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-0" // Full width for bands
      className="py-16 md:py-32"
    >
      <div className="px-6 sm:px-12 max-w-[1600px] mx-auto">
        <KineticSectionHeader title="Education" index={5} align="right" />
      </div>

      <div className="flex flex-col border-y-4 border-[#171717] dark:border-[#F3F0E8]">
        {education.map((edu, idx) => (
          <div key={edu.id} className="w-full relative overflow-hidden group border-b-4 border-[#171717] dark:border-[#F3F0E8] last:border-b-0 bg-[#E8E3D8] dark:bg-[#1C2020] hover:bg-[#E84F3D] dark:hover:bg-[#FF715D] transition-colors duration-500">
            
            {/* Background Marquee on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 motion-safe:group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
              <KineticMarquee text={`${edu.degree} • `} speed={20} className="text-[#171717]" textClassName="text-[10vw]" />
            </div>

            <div className="px-6 sm:px-12 py-12 md:py-16 max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 group-hover:text-[#F3F0E8] dark:group-hover:text-[#171717] transition-colors">
              <div className="flex flex-col gap-4 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-widest text-[#285B63] dark:text-[#6FA9B0] group-hover:text-[#F3F0E8] dark:group-hover:text-[#171717] font-bold transition-colors">
                  {edu.startDate && edu.endDate ? `${edu.startDate} — ${edu.endDate}` : edu.startDate || edu.endDate || ''}
                </span>
                <h3 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9]">
                  {edu.degree}
                </h3>
                <div className="font-heading font-bold text-xl lg:text-2xl uppercase tracking-tight opacity-80 mt-2">
                  {edu.institution}
                </div>
              </div>
              
              {(edu.fieldOfStudy || edu.grade) && (
                <div className="flex flex-wrap gap-8 font-mono text-sm uppercase tracking-widest font-bold">
                  {edu.fieldOfStudy && <span>FOS: {edu.fieldOfStudy}</span>}
                  {edu.grade && <span>GPA: {edu.grade}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
