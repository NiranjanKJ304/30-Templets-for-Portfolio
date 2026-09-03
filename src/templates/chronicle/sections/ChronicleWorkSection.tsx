import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ChronicleBand } from '../components/ChronicleBand';
import { ChronicleDate } from '../components/ChronicleDate';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ChronicleWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const ChronicleWorkSection: React.FC<ChronicleWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <ChronicleBand label="Selected Works">
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
          {projects.map((project, idx) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
                <div className="flex flex-col gap-6">
                  {project.year && (
                    <ChronicleDate date={project.year} className="mb-2" />
                  )}
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                      {project.category || `Project ${String(idx + 1).padStart(2, '0')}`}
                    </span>
                    <button
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#202321] dark:text-[#F0EEE6] hover:text-[#B96852] dark:hover:text-[#D07861] transition-colors"
                    >
                      {project.title}
                    </button>
                    {project.subtitle && (
                      <span className="font-heading text-2xl text-[#6F746F] dark:text-[#A6ABA5] mt-1">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  {project.description && (
                    <p className="font-body text-lg font-light leading-relaxed text-[#6F746F] dark:text-[#A6ABA5] max-w-xl">
                      {project.description}
                    </p>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="font-mono text-[10px] uppercase tracking-widest text-[#202321] dark:text-[#F0EEE6]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div 
                  className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] relative bg-[#C9C5BB]/10 dark:bg-[#474B47]/10 cursor-pointer overflow-hidden border border-[#C9C5BB]/30 dark:border-[#474B47]/30 group"
                  onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                >
                  {project.thumbnailUrl ? (
                    <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-[#6F746F] dark:text-[#A6ABA5]">
                      Visual Record Omitted
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </ChronicleBand>
    </SectionWrapper>
  );
};
