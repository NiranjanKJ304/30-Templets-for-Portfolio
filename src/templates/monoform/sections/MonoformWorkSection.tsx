import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonoformSurface } from '../components/MonoformSurface';
import { MonoformRule } from '../components/MonoformRule';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MonoformWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const MonoformWorkSection: React.FC<MonoformWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <MonoformSurface depth="inset" borderBottom>
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36">
          <div className="flex flex-col">
            
            <div className="mb-16">
              <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                03. Selected Works
              </h2>
            </div>

            <div className="flex flex-col">
              <MonoformRule variant="subtle" />
              {projects.map((project, idx) => (
                <div key={project.id} className="flex flex-col xl:flex-row py-12 lg:py-20 gap-12 lg:gap-16 border-b border-[#C8C7BF]/40 dark:border-[#444844]/40">
                  
                  <div className="w-full xl:w-1/3 flex flex-col gap-6 lg:gap-8 order-2 xl:order-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4 text-[#6C706B] dark:text-[#A7AAA4]">
                        <span className="font-mono text-[10px] uppercase tracking-widest">
                          Project {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="opacity-40">—</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest">
                          {[project.year, project.category].filter(Boolean).join(' · ')}
                        </span>
                      </div>
                      
                      <button
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                        className="text-left font-heading text-3xl md:text-4xl font-light text-[#1D1F1E] dark:text-[#F0EEE7] hover:text-[#A65A45] dark:hover:text-[#D0775E] transition-colors leading-tight"
                      >
                        {project.title}
                      </button>
                      
                      {project.subtitle && (
                        <span className="font-heading text-xl text-[#6C706B] dark:text-[#A7AAA4] font-light">
                          {project.subtitle}
                        </span>
                      )}
                    </div>

                    {project.description && (
                      <p className="font-body text-base font-light leading-relaxed text-[#6C706B] dark:text-[#A7AAA4]">
                        {project.description}
                      </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                            {tech}{tech !== project.technologies![project.technologies!.length-1] && <span className="opacity-40 ml-2">/</span>}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="w-full xl:w-2/3 order-1 xl:order-2">
                    <div 
                      className="w-full aspect-[16/9] relative bg-[#ECEAE4]/50 dark:bg-[#151716]/50 cursor-pointer overflow-hidden border border-[#C8C7BF]/20 dark:border-[#444844]/20 group"
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    >
                      {project.thumbnailUrl ? (
                        <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-lighten opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-[#6C706B] dark:text-[#A7AAA4]">
                          Visual Record Omitted
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
            
          </div>
        </div>
      </MonoformSurface>
    </SectionWrapper>
  );
};
