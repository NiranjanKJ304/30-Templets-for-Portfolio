import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageSkillsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageSkillsSection: React.FC<PaperCollageSkillsSectionProps> = ({ data, enabled = true }) => {
  const { skills } = data;
  
  const hasData = Array.isArray(skills) && skills.length > 0 && skills.some(group => Array.isArray(group.skills) && group.skills.length > 0);

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Skills & Expertise" number="02" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {skills?.map((group, groupIdx) => {
          if (!group.skills || group.skills.length === 0) return null;
          
          return (
            <div key={groupIdx} className="relative">
              {/* Note paper background */}
              <div className="bg-[#FFFDF8] dark:bg-[#242730] border border-[#D4CFC4] dark:border-[#3A3F4C] p-8 shadow-sm">
                 <h3 className="font-heading font-bold text-2xl text-[#171717] dark:text-white mb-3">
                   {group.category}
                 </h3>
                 {group.description && (
                   <p className="font-body text-[#4A4A4A] dark:text-[#A0A5B5] mb-6">
                     {group.description}
                   </p>
                 )}

                 <div className="flex flex-wrap gap-3 mt-6">
                   {group.skills.map((skill, skillIdx) => {
                     const skillName = typeof skill === 'string' ? skill : skill.name;
                     const skillLevel = typeof skill !== 'string' ? skill.level : undefined;
                     const skillYears = typeof skill !== 'string' ? skill.yearsOfExperience : undefined;
                     
                     return (
                       <div 
                         key={skillIdx}
                         className="inline-flex items-center bg-[#F7F3EA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] px-3 py-1.5 transform hover:-rotate-2 transition-transform"
                       >
                         <span className="font-body text-sm font-semibold text-[#171717] dark:text-white">
                           {skillName}
                         </span>
                         {(skillLevel || skillYears) && (
                           <div className="flex items-center ml-3 pl-3 border-l border-[#D4CFC4] dark:border-[#3A3F4C] font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-wider">
                             {skillLevel && <span>{skillLevel}</span>}
                             {skillLevel && skillYears && <span className="mx-1">•</span>}
                             {skillYears && <span>{skillYears}Y</span>}
                           </div>
                         )}
                       </div>
                     );
                   })}
                 </div>
              </div>

              {/* Pin/Tape decoration */}
              <div className={`absolute -top-3 ${groupIdx % 2 === 0 ? 'left-6' : 'right-6'} w-4 h-4 rounded-full bg-[#F26B5B] shadow-inner`}>
                 <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
