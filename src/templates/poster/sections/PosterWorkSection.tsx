import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PosterBlock } from '../components/PosterBlock';
import { PosterNumber } from '../components/PosterNumber';
import { PosterLabel } from '../components/PosterLabel';
import { PosterRule } from '../components/PosterRule';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PosterWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index: string;
  onOpenModal?: (id: string) => void;
}

export const PosterWorkSection: React.FC<PosterWorkSectionProps> = ({ data, enabled = true, index, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-16 md:py-32"
      containerClassName="px-0"
    >
      <PosterBlock className="gap-8 md:gap-16">
        <PosterRule weight="thick" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <PosterNumber index={index} color="cobalt" />
          <PosterLabel className="text-[#3157D5] dark:text-[#6E8CFF] text-right mt-4 md:mt-12">INDEX / WORK</PosterLabel>
        </div>

        <div className="flex flex-col gap-32 mt-8">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;
            
            if (isFeatured) {
              return (
                <div key={project.id} className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 group">
                  <div className="md:col-span-7 h-[40vh] md:h-[60vh] bg-[#C9C3B7] dark:bg-[#4A4A47] overflow-hidden relative">
                    {project.thumbnailUrl && (
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-luminosity opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 cursor-pointer"
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      />
                    )}
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2">
                      {project.category && (
                        <PosterLabel className="text-[#65635D] dark:text-[#B4B0A7]">{project.category}</PosterLabel>
                      )}
                      <button 
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                        className="font-heading font-black text-4xl lg:text-6xl uppercase tracking-tighter text-[#17191B] dark:text-[#F5F0E5] text-left hover:text-[#3157D5] dark:hover:text-[#6E8CFF] transition-colors hyphens-auto"
                      >
                        {project.title}
                      </button>
                    </div>
                    {project.description && (
                      <p className="font-body text-lg text-[#65635D] dark:text-[#B4B0A7] line-clamp-4">
                        {project.description}
                      </p>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="font-mono text-xs px-2 py-1 bg-[#17191B] dark:bg-[#F5F0E5] text-[#FFFDF7] dark:text-[#202122]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // Normal variant
            return (
              <div key={project.id} className="flex flex-col md:flex-row gap-8 items-start md:items-center border-t border-[#C9C3B7] dark:border-[#4A4A47] pt-8 group">
                <div className="font-mono text-xs text-[#3157D5] dark:text-[#6E8CFF] md:w-16 shrink-0 pt-2">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <button 
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#17191B] dark:text-[#F5F0E5] text-left hover:text-[#D94B36] dark:hover:text-[#F07761] transition-colors"
                  >
                    {project.title}
                  </button>
                  {project.description && (
                    <p className="font-body text-base text-[#65635D] dark:text-[#B4B0A7] line-clamp-2 max-w-3xl">
                      {project.description}
                    </p>
                  )}
                </div>
                <div className="md:w-64 shrink-0 flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                  <PosterLabel className="text-[#17191B] dark:text-[#F5F0E5]">
                    {project.category || 'PROJECT'}
                  </PosterLabel>
                  <span className="font-mono text-xs text-[#65635D] dark:text-[#B4B0A7]">
                    {project.year || 'N/A'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </PosterBlock>
    </SectionWrapper>
  );
};
