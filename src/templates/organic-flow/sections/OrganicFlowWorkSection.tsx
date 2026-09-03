import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FlowSection } from '../components/FlowSection';
import { FlowSurface } from '../components/FlowSurface';
import { FlowConnector } from '../components/FlowConnector';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface OrganicFlowWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const OrganicFlowWorkSection: React.FC<OrganicFlowWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative z-10"
      containerClassName="px-0 py-0"
    >
      <div className="bg-[#E8DED0] dark:bg-[#302A26] py-24 md:py-48 rounded-tr-[4rem] rounded-bl-[4rem] md:rounded-tr-[8rem] md:rounded-bl-[8rem] mx-4 sm:mx-8">
        <FlowConnector variant="loop" className="left-12 -top-12 text-[#FBFAF5] dark:text-[#1E2321] opacity-50" />
        <FlowSection title="SELECTED WORK" align="center">
          <div className="flex flex-col gap-24 md:gap-48 mt-12 md:mt-24">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const isFeatured = project.featured;

              return (
                <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  <div className={`w-full ${isFeatured ? 'lg:w-[60%]' : 'lg:w-1/2'} shrink-0`}>
                    <FlowSurface 
                      variant="primary" 
                      className="p-4 md:p-8"
                      curveTop={isEven ? 'left' : 'right'}
                      curveBottom={isEven ? 'right' : 'left'}
                    >
                      <div 
                        className={`w-full aspect-[4/3] md:aspect-video overflow-hidden cursor-pointer ${isEven ? 'rounded-tl-[2rem] rounded-br-[2rem]' : 'rounded-tr-[2rem] rounded-bl-[2rem]'}`}
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      >
                        {project.thumbnailUrl ? (
                          <ImageWithFallback
                            src={project.thumbnailUrl}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#E8DED0] dark:bg-[#302A26] flex items-center justify-center font-mono text-sm text-[#819B8A] dark:text-[#88A995]">
                            VIEW_PROJECT
                          </div>
                        )}
                      </div>
                    </FlowSurface>
                  </div>
                  
                  <div className={`w-full ${isFeatured ? 'lg:w-[40%]' : 'lg:w-1/2'} flex flex-col gap-6 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-[#C87558] dark:text-[#D77F63] uppercase tracking-wider">
                        {[project.category, project.year].filter(Boolean).join(' • ')}
                      </span>
                      <button 
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                        className="font-heading font-black text-3xl md:text-5xl text-[#202321] dark:text-[#F1EFE7] hover:text-[#819B8A] dark:hover:text-[#88A995] transition-colors leading-tight"
                      >
                        {project.title}
                      </button>
                    </div>
                    
                    {project.description && (
                      <p className="font-body text-base md:text-lg text-[#6B706A] dark:text-[#A8ACA5] leading-relaxed max-w-xl mx-auto lg:mx-0">
                        {project.description}
                      </p>
                    )}
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className={`flex flex-wrap gap-2 justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-[#819B8A] dark:border-[#88A995] text-[#202321] dark:text-[#F1EFE7]">
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
        </FlowSection>
      </div>
    </SectionWrapper>
  );
};
