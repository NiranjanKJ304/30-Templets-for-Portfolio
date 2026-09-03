import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { FolioSheet } from '../components/FolioSheet';
import { FolioMeta } from '../components/FolioMeta';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface FolioWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  pageNum: string;
  onOpenModal?: (id: string) => void;
}

export const FolioWorkSection: React.FC<FolioWorkSectionProps> = ({ data, enabled = true, pageNum, onOpenModal }) => {
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
      {/* 
        In Folio, projects aren't grouped into one sheet, they ARE individual sheets 
        if there are few, or flow through one large sheet if there are many. 
        We will use one large sheet that flows the projects as individual documents.
      */}
      <FolioSheet pageNum={pageNum} title="SELECTED WORKS" alternate offset="none">
        <div className="flex flex-col gap-32 md:gap-40 lg:gap-48">
          {projects.map((project, idx) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#70736F] dark:text-[#A5AAA3]">
                      Project {String(idx + 1).padStart(2, '0')}
                    </span>
                    <button
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#1D2020] dark:text-[#F0EEE6] hover:text-[#B85F49] dark:hover:text-[#D07961] transition-colors"
                    >
                      {project.title}
                    </button>
                  </div>
                  
                  {project.subtitle && (
                    <span className="font-heading text-2xl text-[#70736F] dark:text-[#A5AAA3]">
                      {project.subtitle}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-start gap-8 pt-6 border-t border-[#C9C5BA]/30 dark:border-[#444A45]/30">
                  {project.category && <FolioMeta label="Category" value={project.category} />}
                  {project.year && <FolioMeta label="Year" value={project.year} />}
                </div>

                {project.description && (
                  <p className="font-body text-lg font-light leading-relaxed text-[#70736F] dark:text-[#A5AAA3]">
                    {project.description}
                  </p>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-[#1D2020] dark:text-[#F0EEE6] px-2 py-1 border border-[#C9C5BA] dark:border-[#444A45]">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-7">
                <div 
                  className="w-full aspect-[4/3] md:aspect-[16/10] relative bg-[#EAE7DF] dark:bg-[#141716] cursor-pointer overflow-hidden border border-[#C9C5BA]/50 dark:border-[#444A45]/50 group"
                  onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                >
                  <div className="absolute inset-0 bg-white/5 pointer-events-none z-10 mix-blend-overlay" />
                  {project.thumbnailUrl ? (
                    <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#70736F] dark:text-[#A5AAA3]">
                      <span className="font-mono text-[10px] uppercase tracking-widest">Image Unavailable</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </FolioSheet>
    </SectionWrapper>
  );
};
