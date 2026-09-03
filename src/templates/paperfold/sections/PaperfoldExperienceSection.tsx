import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldExperienceSection: React.FC<PaperfoldExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Experience" number="04" subtitle="Professional Timeline" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="relative max-w-4xl mx-auto flex flex-col gap-4">
        
        {experience.map((exp, idx) => (
          <div key={idx} className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md group">
            
            {/* Unfolding crease effect */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#202020]/5 dark:from-[#F3F0E8]/5 to-transparent pointer-events-none"></div>

            <div className="p-8 md:p-12">
               <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                 <div>
                   <h3 className="font-heading font-normal text-2xl md:text-3xl text-[#202020] dark:text-[#F3F0E8]">
                     {exp.role}
                   </h3>
                   <div className="font-body text-[#66717A] dark:text-[#AAB3B8] mt-2 text-lg font-light">
                     {exp.companyUrl ? (
                       <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C86B52] dark:hover:text-[#D47A61] transition-colors">
                         {exp.company}
                       </a>
                     ) : (
                       exp.company
                     )}
                   </div>
                 </div>

                 <div className="font-mono text-xs text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest border border-[#E8E3D8] dark:border-[#202020] px-3 py-1.5 self-start bg-[#F3EFE7]/50 dark:bg-[#151719]/50">
                   {exp.startDate && <span>{exp.startDate}</span>}
                   {(exp.startDate && (exp.endDate || exp.current)) && <span> — </span>}
                   {(exp.endDate || exp.current) && <span>{exp.current ? 'Present' : exp.endDate}</span>}
                 </div>
               </div>

               {(exp.location || exp.employmentType) && (
                 <div className="flex flex-wrap gap-6 font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-8">
                   {exp.location && <span>{exp.location}</span>}
                   {exp.employmentType && <span>{exp.employmentType}</span>}
                 </div>
               )}

               {exp.description && (
                 <p className="font-body font-light text-[#202020] dark:text-[#F3F0E8] mb-8 leading-[1.8] text-base">
                   {exp.description}
                 </p>
               )}

               {exp.highlights && exp.highlights.length > 0 && (
                 <ul className="space-y-3 mb-8">
                   {exp.highlights.map((highlight, hIdx) => (
                     <li key={hIdx} className="flex items-start font-body font-light text-[#66717A] dark:text-[#AAB3B8] leading-[1.7]">
                       <span className="font-mono text-[#C86B52] dark:text-[#D47A61] mr-4 mt-0.5 select-none">—</span>
                       <span>{highlight}</span>
                     </li>
                   ))}
                 </ul>
               )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
