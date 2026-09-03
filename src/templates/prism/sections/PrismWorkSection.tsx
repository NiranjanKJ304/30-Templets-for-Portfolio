import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PrismSection } from '../components/PrismSection';
import { PrismFacet } from '../components/PrismFacet';
import { PrismDivider } from '../components/PrismDivider';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PrismWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const PrismWorkSection: React.FC<PrismWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <PrismSection title="Selected Works" colorFacet="blue">
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div key={project.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 w-full group`}>
                
                {/* Media Facet */}
                <div className="w-full lg:w-3/5 shrink-0 relative">
                  <PrismFacet cut={isReversed ? 'bottom-left' : 'bottom-right'} variant="solid" colorHint="neutral" className="p-4 md:p-8 relative z-10 shadow-2xl shadow-[rgba(23,26,27,0.05)] dark:shadow-none">
                    <div 
                      className="w-full aspect-[4/3] bg-[rgba(23,26,27,0.05)] dark:bg-[rgba(241,240,234,0.05)] cursor-pointer overflow-hidden relative"
                      style={{ clipPath: isReversed ? 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))' : 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    >
                      {project.thumbnailUrl ? (
                        <ImageWithFallback
                          src={project.thumbnailUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-sm text-[#6B706F] dark:text-[#A8ADA9] tracking-widest uppercase">
                          View Project
                        </div>
                      )}
                    </div>
                  </PrismFacet>
                  
                  {/* Decorative background refraction */}
                  <PrismFacet 
                    cut={isReversed ? 'both-left' : 'both-right'} 
                    variant="overlay" 
                    colorHint="blue" 
                    className={`absolute -inset-8 z-0 translate-y-8 ${isReversed ? 'translate-x-8' : '-translate-x-8'}`} 
                  />
                </div>

                {/* Info Facet */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center gap-8 relative z-10">
                  <div className="flex flex-col gap-4">
                    <div className="font-mono text-xs md:text-sm text-[#4566C7] dark:text-[#7187E1] uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-current rotate-45" />
                      {[project.category, project.year].filter(Boolean).join(' // ')}
                    </div>
                    <button 
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading font-extrabold text-4xl md:text-5xl text-[#171A1B] dark:text-[#F1F0EA] hover:text-[#4566C7] dark:hover:text-[#7187E1] transition-colors leading-[1.1] uppercase break-words"
                    >
                      {project.title}
                    </button>
                  </div>
                  
                  {project.description && (
                    <p className="font-body text-lg text-[#6B706F] dark:text-[#A8ADA9] leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="font-mono text-[10px] md:text-xs text-[#171A1B] dark:text-[#F1F0EA] bg-[rgba(23,26,27,0.05)] dark:bg-[rgba(241,240,234,0.05)] px-3 py-1.5 uppercase tracking-widest rounded-none border border-[rgba(23,26,27,0.1)] dark:border-[rgba(241,240,234,0.1)]">
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
        <div className="mt-24 md:mt-40">
          <PrismDivider direction="left-to-right" />
        </div>
      </PrismSection>
    </SectionWrapper>
  );
};
