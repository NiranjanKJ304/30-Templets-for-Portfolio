import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintExperienceSection: React.FC<BlueprintExperienceSectionProps> = ({ data, enabled = true }) => {
  const { experience } = data;
  const hasData = Array.isArray(experience) && experience.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="experience"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Operational History" number="04" description="Timeline of Professional Deployments" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="relative pl-6 md:pl-10 border-l-2 border-[#2E6FBB] dark:border-[#5DA9E9]">
        
        {/* Timeline tick marks along the vertical axis */}
        <div className="absolute top-0 bottom-0 left-0 w-2" style={{ backgroundImage: 'linear-gradient(#2E6FBB 1px, transparent 1px)', backgroundSize: '100% 20px', opacity: 0.2 }}></div>

        <div className="space-y-16">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Connection Line */}
              <div className="absolute top-6 -left-6 md:-left-10 w-6 md:w-10 h-px bg-[#2E6FBB] dark:bg-[#5DA9E9]"></div>
              
              {/* Technical Marker node */}
              <div className="absolute top-4 -left-[29px] md:-left-[45px] w-4 h-4 border-2 border-[#2E6FBB] dark:border-[#5DA9E9] bg-[#FAFCFD] dark:bg-[#142333] z-10 flex items-center justify-center">
                 <div className="w-1 h-1 bg-[#E8893A] dark:bg-[#F0A35B]"></div>
              </div>

              <div className="bg-[#FAFCFD] dark:bg-[#142333] border border-[#2E6FBB]/50 dark:border-[#5DA9E9]/50 p-6 md:p-8 ml-4">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                   <div>
                     <h3 className="font-heading font-bold text-2xl text-[#173A5E] dark:text-[#EAF2F7] uppercase">
                       {exp.role}
                     </h3>
                     <div className="font-mono text-sm text-[#2E6FBB] dark:text-[#5DA9E9] mt-2">
                       {exp.companyUrl ? (
                         <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                           {exp.company}
                         </a>
                       ) : (
                         exp.company
                       )}
                     </div>
                   </div>

                   <div className="bg-[#2E6FBB]/10 dark:bg-[#5DA9E9]/10 px-3 py-2 font-mono text-xs text-[#173A5E] dark:text-[#55C6DC] border border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30">
                     {exp.startDate && <span>{exp.startDate}</span>}
                     {(exp.startDate && (exp.endDate || exp.current)) && <span> // </span>}
                     {(exp.endDate || exp.current) && <span>{exp.current ? 'PRESENT' : exp.endDate}</span>}
                   </div>
                 </div>

                 <div className="flex flex-wrap gap-4 font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-6 border-b border-dashed border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 pb-4">
                   {exp.location && <span>LOC: {exp.location}</span>}
                   {exp.employmentType && <span>TYPE: {exp.employmentType}</span>}
                 </div>

                 {exp.description && (
                   <p className="font-body text-[#17202A] dark:text-[#EAF2F7] mb-6 leading-relaxed">
                     {exp.description}
                   </p>
                 )}

                 {exp.highlights && exp.highlights.length > 0 && (
                   <ul className="space-y-2 mb-6">
                     {exp.highlights.map((highlight, hIdx) => (
                       <li key={hIdx} className="flex items-start font-body text-[#17202A] dark:text-[#EAF2F7]">
                         <span className="font-mono text-[#E8893A] dark:text-[#F0A35B] mr-3 mt-1 select-none">{'>'}</span>
                         <span className="leading-relaxed">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 )}

                 {exp.technologies && exp.technologies.length > 0 && (
                   <div className="flex flex-wrap gap-2 mt-6">
                     {exp.technologies.map((tech, tIdx) => (
                       <span key={tIdx} className="font-mono text-[10px] text-[#173A5E] dark:text-[#5DA9E9] bg-[#E6ECEF] dark:bg-[#0D1620] px-2 py-1 uppercase tracking-wider">
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
