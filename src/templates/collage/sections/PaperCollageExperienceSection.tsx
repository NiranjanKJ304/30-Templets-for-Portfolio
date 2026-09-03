import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageExperienceSection: React.FC<PaperCollageExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Experience" number="04" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="relative pl-4 md:pl-12">
        {/* Vertical strip mimicking a timeline but styled like a tape/paper strip */}
        <div className="absolute top-0 bottom-0 left-4 md:left-12 w-2 bg-[#EBE6DA] dark:bg-[#1A1C23] shadow-inner"></div>

        <div className="flex flex-col gap-16 md:gap-24">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16">
              
              {/* Timeline marker / registration dot */}
              <div className="absolute top-8 left-[-11px] w-6 h-6 bg-[#FFFDF8] dark:bg-[#242730] border-4 border-[#315CFF] rounded-full z-10"></div>

              {/* Card */}
              <div className="relative bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                 {/* Tape */}
                 <div className="absolute -top-3 right-8 w-12 h-6 bg-black/5 dark:bg-white/10 backdrop-blur-sm transform rotate-6 mix-blend-multiply dark:mix-blend-screen"></div>

                 <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                   <div>
                     <h3 className="font-heading font-black text-2xl text-[#171717] dark:text-white">
                       {exp.role}
                     </h3>
                     <div className="font-body font-bold text-lg text-[#315CFF] mt-1">
                       {exp.companyUrl ? (
                         <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                           {exp.company}
                         </a>
                       ) : (
                         exp.company
                       )}
                     </div>
                   </div>
                   
                   <div className="bg-[#F7F3EA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] px-3 py-1 font-mono text-sm text-[#4A4A4A] dark:text-[#A0A5B5] transform -rotate-1 self-start">
                     {exp.startDate && (
                       <span>{exp.startDate}</span>
                     )}
                     {(exp.startDate && (exp.endDate || exp.current)) && <span> — </span>}
                     {(exp.endDate || exp.current) && (
                       <span>{exp.current ? 'Present' : exp.endDate}</span>
                     )}
                   </div>
                 </div>

                 <div className="flex flex-wrap gap-4 font-mono text-xs text-[#737373] dark:text-[#A0A5B5] uppercase tracking-wider mb-6">
                   {exp.location && <span>{exp.location}</span>}
                   {exp.location && exp.employmentType && <span>•</span>}
                   {exp.employmentType && <span>{exp.employmentType}</span>}
                 </div>

                 {exp.description && (
                   <p className="font-body text-[#4A4A4A] dark:text-[#E0E0E0] mb-6 leading-relaxed">
                     {exp.description}
                   </p>
                 )}

                 {exp.highlights && exp.highlights.length > 0 && (
                   <ul className="list-none space-y-3 mb-6">
                     {exp.highlights.map((highlight, hIdx) => (
                       <li key={hIdx} className="flex items-start text-[#4A4A4A] dark:text-[#E0E0E0]">
                         <span className="text-[#F26B5B] mr-3 mt-1">↳</span>
                         <span className="font-body leading-relaxed">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 )}

                 {exp.technologies && exp.technologies.length > 0 && (
                   <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#E5E1D8] dark:border-[#3A3F4C]">
                     {exp.technologies.map((tech, tIdx) => (
                       <span key={tIdx} className="text-xs font-mono bg-[#EBE6DA] dark:bg-[#1A1C23] text-[#4A4A4A] dark:text-[#A0A5B5] px-2 py-1">
                         {tech}
                       </span>
                     ))}
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
