import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { VellumSection } from '../components/VellumSection';
import { VellumAnnotation } from '../components/VellumAnnotation';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { VellumRule } from '../components/VellumRule';

interface VellumWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const VellumWorkSection: React.FC<VellumWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <VellumSection title="Selected Works" number="03">
        <div className="flex flex-col gap-24 pt-4">
          {projects.map((project, idx) => (
            <div key={project.id} className="flex flex-col relative group">
              <VellumAnnotation 
                marker={`ref.${String(idx + 1).padStart(2, '0')}`} 
                color="brick" 
                position="left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-2">
                    <button
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      className="text-left font-heading font-medium text-3xl md:text-4xl text-[#242522] dark:text-[#F0EDE3] hover:text-[#A94F3E] dark:hover:text-[#D27661] transition-colors leading-tight"
                    >
                      {project.title}
                    </button>
                    {project.year && (
                      <span className="font-mono text-[10px] text-[#6D6D66] dark:text-[#AAA99F]">({project.year})</span>
                    )}
                  </div>
                  {project.subtitle && (
                    <span className="font-heading italic text-xl text-[#747B5D] dark:text-[#A5AE87]">
                      {project.subtitle}
                    </span>
                  )}
                </div>
              </VellumAnnotation>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
                
                <div className="w-full lg:w-2/5 flex flex-col gap-6 order-2 lg:order-1">
                  {project.description && (
                    <p className="font-body text-base text-[#6D6D66] dark:text-[#AAA99F] leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#C8C2B5] dark:border-[#4A4B46] border-dashed">
                      <span className="font-mono text-[10px] text-[#A94F3E] dark:text-[#D27661] uppercase tracking-widest block mb-3">Methods</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="font-body text-sm text-[#242522] dark:text-[#F0EDE3]">
                            {tech}{tech !== project.technologies![project.technologies!.length-1] && ','}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-3/5 order-1 lg:order-2">
                  <VellumAnnotation variant="bracket" color="rule" className="pl-4 pb-4 border-b">
                    <div 
                      className="w-full aspect-[4/3] bg-[#E8E4D8] dark:bg-[#1A1C1A] overflow-hidden cursor-pointer grayscale-[0.5] hover:grayscale-0 transition-all duration-700 mix-blend-multiply dark:mix-blend-normal"
                      onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    >
                      {project.thumbnailUrl ? (
                        <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#6D6D66] dark:text-[#AAA99F]">
                          [ Figure {idx + 1} omitted ]
                        </div>
                      )}
                    </div>
                  </VellumAnnotation>
                </div>

              </div>
            </div>
          ))}
        </div>
      </VellumSection>
    </SectionWrapper>
  );
};
