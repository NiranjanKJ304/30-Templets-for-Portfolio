import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonumentalSection } from '../components/MonumentalSection';
import { MonumentalFrame } from '../components/MonumentalFrame';
import { MonumentalDivider } from '../components/MonumentalDivider';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MonumentalWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const MonumentalWorkSection: React.FC<MonumentalWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <MonumentalSection title="EXHIBITS" index="03" align="center">
        <div className="flex flex-col gap-32 md:gap-64">
          {projects.map((project, idx) => {
            const layoutType = idx % 4; // Presentation variation

            return (
              <div key={project.id} className="flex flex-col gap-16 w-full">
                {/* Title & Meta Block */}
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b-8 border-[#171918] dark:border-[#F0EEE6] pb-8 ${layoutType === 1 || layoutType === 3 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                  <button 
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    className={`font-heading font-black text-4xl md:text-6xl lg:text-8xl leading-[0.9] text-[#171918] dark:text-[#F0EEE6] uppercase hover:text-[#B94F38] dark:hover:text-[#D16A52] transition-colors break-words text-left ${layoutType === 1 || layoutType === 3 ? 'md:text-right' : ''}`}
                  >
                    {project.title}
                  </button>
                  <div className="font-mono text-xs md:text-sm text-[#686B66] dark:text-[#A5A7A1] uppercase tracking-widest shrink-0">
                    {[project.category, project.year].filter(Boolean).join(' // ')}
                  </div>
                </div>

                {/* Content Block */}
                <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 ${layoutType === 2 || layoutType === 3 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Media */}
                  <div className={`w-full ${layoutType === 0 ? 'lg:w-[70%]' : layoutType === 3 ? 'lg:w-[40%]' : 'lg:w-[60%]'} shrink-0`}>
                    <MonumentalFrame variant={layoutType % 2 === 0 ? 'inset' : 'outline'}>
                      <div 
                        className="w-full aspect-[4/3] md:aspect-video lg:aspect-auto lg:h-[60vh] overflow-hidden bg-[#ECE9E1] dark:bg-[#121514] cursor-pointer"
                        onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                      >
                        {project.thumbnailUrl ? (
                          <ImageWithFallback
                            src={project.thumbnailUrl}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono text-sm text-[#686B66] dark:text-[#A5A7A1]">
                            VIEW_PROJECT
                          </div>
                        )}
                      </div>
                    </MonumentalFrame>
                  </div>

                  {/* Description */}
                  <div className="w-full flex flex-col gap-12 justify-center">
                    {project.description && (
                      <p className="font-body text-xl md:text-2xl text-[#686B66] dark:text-[#A5A7A1] leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    )}
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-col gap-4 border-t-4 border-[#D8D4C9] dark:border-[#303430] pt-8">
                        <span className="font-mono text-xs text-[#B94F38] dark:text-[#D16A52] uppercase tracking-widest">
                          MATERIALS / TECH
                        </span>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                          {project.technologies.map(tech => (
                            <span key={tech} className="font-body text-lg text-[#171918] dark:text-[#F0EEE6] font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-32 md:mt-64">
          <MonumentalDivider thickness="massive" />
        </div>
      </MonumentalSection>
    </SectionWrapper>
  );
};
