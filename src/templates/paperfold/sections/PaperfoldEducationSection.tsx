import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldEducationSection: React.FC<PaperfoldEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Education" number="05" subtitle="Academic Background" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {education.map((edu, idx) => (
          <div key={idx} className="relative group">
            
            {/* Stacked sheet behind */}
            <div className="absolute inset-0 bg-[#FAF6EE] dark:bg-[#1A1C1E] border border-[#E8E3D8] dark:border-[#202020] transform rotate-2 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-500 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3"></div>

            <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-8 md:p-10 relative z-10 h-full flex flex-col">
              
              {/* Folded corner top right */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[#F3EFE7] dark:bg-[#151719] transform rotate-45 translate-x-4 -translate-y-4 shadow-[-2px_2px_4px_rgba(0,0,0,0.02)] border-l border-b border-[#E8E3D8] dark:border-[#202020]"></div>
              </div>

              <div className="flex justify-between items-start mb-6 pr-8">
                <h3 className="font-heading font-normal text-2xl text-[#202020] dark:text-[#F3F0E8]">
                  {edu.institutionUrl ? (
                    <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C86B52] dark:hover:text-[#D47A61] transition-colors">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </h3>
              </div>

              <div className="font-body font-light text-lg text-[#66717A] dark:text-[#AAB3B8] mb-4">
                {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
              </div>

              <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-6">
                <span className="bg-[#F3EFE7]/50 dark:bg-[#151719]/50 px-2 py-1">
                  {edu.startDate && <span>{edu.startDate}</span>}
                  {(edu.startDate && (edu.endDate || edu.current)) && <span> — </span>}
                  {(edu.endDate || edu.current) && <span>{edu.current ? 'Present' : edu.endDate}</span>}
                </span>
                {edu.location && <span className="bg-[#F3EFE7]/50 dark:bg-[#151719]/50 px-2 py-1">{edu.location}</span>}
              </div>

              {edu.description && (
                <p className="font-body font-light text-[#202020] dark:text-[#F3F0E8] mb-6 leading-relaxed flex-grow">
                  {edu.description}
                </p>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <div className="mt-auto pt-6 border-t border-[#E8E3D8] dark:border-[#202020]">
                  <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-2">
                    Activities
                  </span>
                  <p className="font-body font-light text-sm text-[#66717A] dark:text-[#AAB3B8]">{edu.activities.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
