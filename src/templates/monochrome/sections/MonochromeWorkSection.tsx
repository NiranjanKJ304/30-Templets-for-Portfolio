import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MonochromeWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const MonochromeWorkSection: React.FC<MonochromeWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Selected Works" number="03" subtitle="Project Archive" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="flex flex-col gap-24 md:gap-40">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 group cursor-pointer"
            onClick={() => onOpenModal && onOpenModal(project.id)}
          >
            {/* Typographic Identity Layer */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-2xl md:text-4xl text-[#C9C6BE] dark:text-[#3A3A37] font-light leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight leading-[0.9] group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors">
                  {project.title}
                </h3>
              </div>

              {(project.category || project.year) && (
                <div className="font-mono text-[10px] md:text-xs text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest border-b border-[#C9C6BE]/50 dark:border-[#3A3A37]/50 pb-4 mb-8 flex gap-4">
                  {project.category && <span>{project.category}</span>}
                  {project.year && <span>{project.year}</span>}
                </div>
              )}
              
              {project.subtitle && (
                <p className="font-body text-xl font-medium text-[#151515] dark:text-[#F2F0E9] mb-6 leading-snug">
                  {project.subtitle}
                </p>
              )}
              
              <div className="font-body text-base text-[#555555] dark:text-[#B5B3AC] leading-relaxed line-clamp-4 lg:line-clamp-none flex-grow">
                {project.description}
              </div>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[#C9C6BE]/50 dark:border-[#3A3A37]/50">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] text-[#151515] dark:text-[#F2F0E9] uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest">
                        +{project.technologies.length - 5} More
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Media Area */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-[#EBE8E0] dark:bg-[#181818] aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden relative border border-[#C9C6BE]/30 dark:border-[#3A3A37]">
                {project.thumbnailUrl ? (
                  <ImageWithFallback 
                    src={project.thumbnailUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest text-xs">
                    No Media Available
                  </div>
                )}
                
                {/* View Project overlay action */}
                <div className="absolute bottom-0 left-0 bg-[#151515] text-[#FAF9F5] dark:bg-[#F2F0E9] dark:text-[#111111] px-6 py-3 font-mono text-[10px] uppercase tracking-widest transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  View Project
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
