import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { TerminalRow } from '../components/TerminalRow';

interface TerminalWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const TerminalWorkSection: React.FC<TerminalWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col gap-6">
        <TerminalPrompt label="guest" command="find ./projects -type f" isSectionHeader />
        
        <div className="flex flex-col gap-6 pl-0 md:pl-4">
          {projects.map((project, idx) => {
            const index = (idx + 1).toString().padStart(2, '0');
            
            return (
              <TerminalRow
                key={project.id}
                index={`[${index}]`}
                title={
                  <button 
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    className="hover:text-[#397A4A] dark:hover:text-[#79C98B] transition-colors text-left"
                  >
                    {project.title}
                  </button>
                }
                metadata={
                  <div className="flex gap-2">
                    {project.category && <span className="text-[#347A84] dark:text-[#69B7C4]">{project.category}</span>}
                    {project.year && <span>{project.year}</span>}
                  </div>
                }
              >
                <div className="flex flex-col gap-2">
                  {project.description && <p>{project.description}</p>}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="font-mono text-[10px] text-[#967126] dark:text-[#D4AD68]">
                      deps: [{project.technologies.join(', ')}]
                    </div>
                  )}
                </div>
              </TerminalRow>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
