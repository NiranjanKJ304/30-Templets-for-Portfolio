import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisExperienceSection: React.FC<MemphisExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Experience" number="04" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-col gap-8 md:gap-12 relative max-w-4xl mx-auto">
        {/* Decorative connecting line */}
        <div className="absolute left-6 top-8 bottom-8 w-1 bg-neutral-900 dark:bg-white hidden md:block opacity-20" />

        {experience.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          const bgColors = ['bg-white', 'bg-[#FFFDF7]'];
          const shadowColors = ['#2563EB', '#EC4899', '#34D399', '#8B5CF6'];
          const shadowColor = shadowColors[idx % shadowColors.length];
          const bgColor = bgColors[idx % bgColors.length];

          return (
            <div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 md:pl-16 group ${isEven ? 'md:-translate-x-4' : 'md:translate-x-4'}`}
            >
              {/* Timeline marker */}
              <div className="absolute left-[1.125rem] top-8 w-4 h-4 rounded-full border-4 border-neutral-900 dark:border-white bg-[#FACC15] z-10 hidden md:block group-hover:scale-150 transition-transform" />

              <div className="flex-shrink-0 w-full md:w-48 pt-2">
                <span className="inline-block font-heading font-black text-xl text-neutral-900 dark:text-white bg-[#F4F2EC] dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white px-3 py-1 shadow-[2px_2px_0_0_#202124] dark:shadow-[2px_2px_0_0_#FFFFFF]">
                  {exp.startDate} — {exp.endDate || (exp.current ? 'Present' : '')}
                </span>
              </div>

              <div 
                className={`flex-1 ${bgColor} dark:bg-neutral-900 border-4 border-neutral-900 dark:border-white p-6 md:p-8 transition-transform hover:-translate-y-1 hover:translate-x-1`}
                style={{ boxShadow: `6px 6px 0 0 ${shadowColor}` }}
              >
                <h3 className="font-heading font-black uppercase text-2xl text-neutral-900 dark:text-white mb-2">
                  {exp.role}
                </h3>
                <h4 className="font-heading font-bold text-xl text-neutral-600 dark:text-neutral-400 mb-4">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#EC4899] underline decoration-4 underline-offset-4 decoration-[#EC4899]">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                  {exp.location && ` • ${exp.location}`}
                </h4>
                
                {exp.description && (
                  <p className="text-neutral-700 dark:text-neutral-300 font-bold mb-6 whitespace-pre-wrap">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                        <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-[#FACC15] border-2 border-neutral-900 dark:border-white" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-2 border-neutral-900 dark:border-white bg-[#34D399] dark:bg-[#34D399] dark:text-neutral-900">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
