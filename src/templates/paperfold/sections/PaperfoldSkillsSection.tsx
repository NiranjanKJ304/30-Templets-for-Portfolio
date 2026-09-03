import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldSkillsSection: React.FC<PaperfoldSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  const hasData = Array.isArray(skills) && skills.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Capabilities" number="02" subtitle="Competencies & Tools" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="flex flex-col gap-8 md:gap-12 relative max-w-4xl">
        
        {/* Decorative vertical connection fold */}
        <div className="absolute top-0 bottom-0 left-8 w-12 bg-gradient-to-r from-black/5 dark:from-[#F3F0E8]/5 to-transparent pointer-events-none hidden md:block"></div>

        {skills.map((group, idx) => (
          <div key={idx} className="relative z-10 md:pl-16">
            
            {/* The folded strip */}
            <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-sm relative transition-transform hover:-translate-y-1 duration-300">
               
               {/* Folded edge effect left side */}
               <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#FAF6EE] dark:bg-[#1A1C1E] border-r border-[#E8E3D8] dark:border-[#202020] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.02)]"></div>

               <div className="p-6 md:p-8 pl-8 md:pl-10">
                 <h3 className="font-heading font-normal text-xl text-[#202020] dark:text-[#F3F0E8] mb-6">
                   {group.name}
                 </h3>
                 
                 <div className="flex flex-wrap gap-x-6 gap-y-4">
                   {group.skills.map((skill, sIdx) => (
                     <div key={sIdx} className="flex flex-col">
                       <span className="font-body text-sm font-light text-[#66717A] dark:text-[#AAB3B8]">
                         {skill.name}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
