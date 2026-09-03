import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChromaField } from '../components/ChromaField';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ChromaWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const ChromaWorkSection: React.FC<ChromaWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  const getFieldColor = (idx: number) => {
    const colors = ['canvas', 'blue', 'canvas', 'lilac'] as const;
    return colors[idx % colors.length];
  };

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="w-full"
      containerClassName="px-0 py-0"
    >
      <div className="flex flex-col">
        {/* Header Section for Work */}
        <ChromaField color="deep" className="py-16 md:py-24">
          <h2 className="font-mono text-sm uppercase tracking-widest opacity-60">Selected Works</h2>
        </ChromaField>

        {/* Project Fields */}
        {projects.map((project, idx) => (
          <ChromaField key={project.id} color={getFieldColor(idx)}>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              <div className="xl:col-span-5 flex flex-col gap-8 order-2 xl:order-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm opacity-50">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                      {[project.year, project.category].filter(Boolean).join(' • ')}
                    </span>
                  </div>
                  <button
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    className="text-left font-heading text-5xl md:text-6xl font-medium tracking-tight hover:opacity-70 transition-opacity leading-none"
                  >
                    {project.title}
                  </button>
                  {project.subtitle && (
                    <span className="font-heading text-2xl md:text-3xl opacity-70 font-light">
                      {project.subtitle}
                    </span>
                  )}
                </div>

                {project.description && (
                  <p className="font-body text-lg md:text-xl font-light leading-relaxed opacity-80 mt-4">
                    {project.description}
                  </p>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-current opacity-60 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="xl:col-span-7 order-1 xl:order-2">
                <div 
                  className="w-full aspect-[4/3] relative bg-black/5 dark:bg-white/5 cursor-pointer overflow-hidden rounded-md group"
                  onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                >
                  {project.thumbnailUrl ? (
                    <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest opacity-40">
                      View Project Details
                    </div>
                  )}
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>

            </div>
          </ChromaField>
        ))}
      </div>
    </SectionWrapper>
  );
};
