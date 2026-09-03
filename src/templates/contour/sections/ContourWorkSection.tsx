import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ContourField } from '../components/ContourField';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ContourWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const ContourWorkSection: React.FC<ContourWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <ContourField label="Project Terrain" contourVariant="subtle">
        <div className="flex flex-col gap-32 md:gap-40 lg:gap-56">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                <div className={`lg:col-span-5 flex flex-col gap-8 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="flex flex-col gap-6 bg-[#F2F0E7]/80 dark:bg-[#151918]/80 backdrop-blur-md p-6 sm:p-8 -mx-6 sm:-mx-8 lg:mx-0 border-l lg:border-l-0 lg:border-t border-[#879A82] dark:border-[#78947D]">
                    <div className="flex items-center gap-4">
                      {project.year && (
                        <span className="font-mono text-xs uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8]">
                          {project.year}
                        </span>
                      )}
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E746E] dark:text-[#A8AEA6]">
                        {project.category || `Zone ${String(idx + 1).padStart(2, '0')}`}
                      </span>
                    </div>
                    
                    <button
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading text-4xl md:text-5xl font-normal leading-tight text-[#202523] dark:text-[#EEF0E8] hover:text-[#C57659] dark:hover:text-[#D17C63] transition-colors"
                    >
                      {project.title}
                    </button>
                    
                    {project.subtitle && (
                      <span className="font-heading text-2xl text-[#6E746E] dark:text-[#A8AEA6]">
                        {project.subtitle}
                      </span>
                    )}

                    {project.description && (
                      <p className="font-body text-lg font-light leading-relaxed text-[#6E746E] dark:text-[#A8AEA6]">
                        {project.description}
                      </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-4 border-t border-[#C7C9B9]/30 dark:border-[#46504A]/30">
                        {project.technologies.map(tech => (
                          <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-[#202523] dark:text-[#EEF0E8]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div 
                    className="w-full aspect-[4/3] md:aspect-[16/10] relative bg-[#C7C9B9]/10 dark:bg-[#46504A]/10 cursor-pointer overflow-hidden border border-[#C7C9B9]/50 dark:border-[#46504A]/50 group rounded-[2px]"
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                  >
                    {project.thumbnailUrl ? (
                      <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#6E746E] dark:text-[#A8AEA6]">
                        <span className="font-mono text-[10px] uppercase tracking-widest">Topographic Void</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#879A82]/10 dark:bg-[#78947D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </ContourField>
    </SectionWrapper>
  );
};
