import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { WorkspaceWindow } from '../components/WorkspaceWindow';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface BlueprintOSWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const BlueprintOSWorkSection: React.FC<BlueprintOSWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <WorkspaceWindow title="PROJECTS_DIRECTORY/" id="work" bodyClassName="p-0 md:p-0 bg-[#E9ECE8] dark:bg-[#111615]">
        <div className="flex flex-col gap-[1px]">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="w-full bg-[#F8FAF7] dark:bg-[#181E1C] p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:bg-[#FFFFFF] dark:hover:bg-[#202725] transition-colors"
            >
              <div className="lg:w-1/3 shrink-0">
                <div 
                  className="aspect-video w-full bg-[#E9ECE8] dark:bg-[#111615] overflow-hidden border border-[#CBD2CD] dark:border-[#3A4340] cursor-pointer"
                  onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                >
                  {project.thumbnailUrl ? (
                    <ImageWithFallback
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#68716D] dark:text-[#A6ADA8]">
                      PREVIEW_UNAVAILABLE
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start gap-4">
                    <button 
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="font-heading font-bold text-2xl text-[#1D2523] dark:text-[#EEF2EC] hover:text-[#356B63] dark:hover:text-[#75A89E] transition-colors text-left"
                    >
                      {project.title}
                    </button>
                    {project.year && (
                      <span className="font-mono text-xs text-[#68716D] dark:text-[#A6ADA8] mt-2 shrink-0">{project.year}</span>
                    )}
                  </div>
                  {project.category && (
                    <span className="font-mono text-[10px] text-[#C87945] dark:text-[#D98B61] uppercase mt-1">
                      {project.category}
                    </span>
                  )}
                </div>
                
                {project.description && (
                  <p className="font-body text-sm text-[#68716D] dark:text-[#A6ADA8] line-clamp-3">
                    {project.description}
                  </p>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="font-mono text-[10px] px-2 py-1 bg-[#E9ECE8] dark:bg-[#111615] text-[#68716D] dark:text-[#A6ADA8]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="font-mono text-[10px] px-2 py-1 bg-[#E9ECE8] dark:bg-[#111615] text-[#68716D] dark:text-[#A6ADA8]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </WorkspaceWindow>
    </SectionWrapper>
  );
};
