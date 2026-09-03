import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { TesseraSection } from '../components/TesseraSection';
import { TesseraModule } from '../components/TesseraModule';
import { TesseraSeam } from '../components/TesseraSeam';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface TesseraWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const TesseraWorkSection: React.FC<TesseraWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="w-full relative"
      containerClassName="px-0 py-0"
    >
      <TesseraSection title="Work" accent="terracotta">
        <div className="flex flex-col relative w-full">
          <TesseraSeam orientation="vertical" className="absolute top-0 bottom-0 left-0 hidden md:block" />
          
          <div className="flex flex-col gap-0 border-t border-[#C8C4B9] dark:border-[#4A4D48]">
            {projects.map((project, idx) => (
              <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#C8C4B9] dark:border-[#4A4D48] relative group">
                
                {/* Meta Information Module */}
                <TesseraModule 
                  elevation="flat"
                  tab="top"
                  accent="terracotta"
                  className="md:col-span-5 lg:col-span-4 p-6 md:p-10 border-r-0 md:border-r border-[#C8C4B9] dark:border-[#4A4D48] flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4 text-[#C6654F] dark:text-[#D67A62]">
                    <div className="w-2 h-2 rotate-45 bg-current" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                      {[project.year, project.category].filter(Boolean).join(' // ')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading font-medium text-3xl md:text-4xl text-[#242522] dark:text-[#F0EEE5] hover:text-[#C6654F] dark:hover:text-[#D67A62] transition-colors leading-[1.1] break-words"
                    >
                      {project.title}
                    </button>
                    {project.subtitle && (
                      <span className="font-heading text-lg text-[#315F5A] dark:text-[#6E9D94] font-medium">
                        {project.subtitle}
                      </span>
                    )}
                  </div>
                  
                  {project.description && (
                    <p className="font-body text-base text-[#73756E] dark:text-[#A5A7A0] leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-6">
                      {project.technologies.map(tech => (
                        <span key={tech} className="font-mono text-[10px] text-[#242522] dark:text-[#F0EEE5] uppercase tracking-widest border border-[#C8C4B9] dark:border-[#4A4D48] bg-[#F2EFE7] dark:bg-[#151716] px-2 py-1 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </TesseraModule>

                {/* Media Module */}
                <TesseraModule 
                  elevation="inset"
                  notch="right"
                  className="md:col-span-7 lg:col-span-8 p-0 cursor-pointer overflow-hidden group/media"
                >
                  <div 
                    className="w-full h-full min-h-[300px] relative bg-[#F2EFE7] dark:bg-[#151716]"
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                  >
                    {project.thumbnailUrl ? (
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-[#73756E] dark:text-[#A5A7A0] tracking-widest uppercase">
                        <div className="px-6 py-3 border border-[#C8C4B9] dark:border-[#4A4D48] bg-[#FBF9F3] dark:bg-[#1E2220]">
                          Open Details
                        </div>
                      </div>
                    )}
                    
                    {/* Inner frame seam */}
                    <div className="absolute inset-4 border border-[rgba(242,239,231,0.5)] dark:border-[rgba(21,23,22,0.5)] pointer-events-none mix-blend-overlay" aria-hidden="true" />
                  </div>
                </TesseraModule>
              </div>
            ))}
          </div>
        </div>
      </TesseraSection>
    </SectionWrapper>
  );
};
