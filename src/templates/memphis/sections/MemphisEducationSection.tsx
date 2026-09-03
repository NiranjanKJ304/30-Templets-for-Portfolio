import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisEducationSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisEducationSection: React.FC<MemphisEducationSectionProps> = ({ data, enabled = true }) => {
  const { education } = data;
  const hasData = Array.isArray(education) && education.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="education"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Education" number="05" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {education.map((edu, idx) => (
          <div 
            key={edu.id} 
            className="bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-6 md:p-8 shadow-[6px_6px_0_0_#FACC15] dark:shadow-[6px_6px_0_0_#FACC15] relative overflow-hidden group"
          >
            {/* Background geometric accent */}
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#EC4899] opacity-20 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <span className="inline-block bg-[#2563EB] text-white px-3 py-1 font-heading font-black text-sm uppercase border-2 border-neutral-900 dark:border-white mb-4 shadow-[2px_2px_0_0_#202124]">
                {edu.startDate ? `${edu.startDate} — ${edu.endDate || (edu.current ? 'Present' : '')}` : (edu.endDate || 'Completed')}
              </span>
              
              <h3 className="font-heading font-black text-2xl md:text-3xl uppercase text-neutral-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              
              <h4 className="font-body font-bold text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-4">
                {edu.institutionUrl ? (
                  <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#EC4899] transition-colors">
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </h4>

              {edu.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 font-bold">
                  {edu.description}
                </p>
              )}

              {((edu.activities && edu.activities.length > 0) || edu.grade) && (
                <div className="mt-6 pt-4 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700">
                  {edu.grade && (
                    <p className="font-bold text-neutral-900 dark:text-white mb-2">
                      <span className="text-[#34D399]">Grade/Honors:</span> {edu.grade}
                    </p>
                  )}
                  {edu.activities && edu.activities.length > 0 && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      <strong className="text-neutral-900 dark:text-white">Activities:</strong> {edu.activities.join(', ')}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
