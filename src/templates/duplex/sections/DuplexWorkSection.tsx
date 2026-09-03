import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { DuplexSectionHeader } from '../components/DuplexSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { cn } from '../../../core/utils/cn';

interface DuplexWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const DuplexWorkSection: React.FC<DuplexWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<DuplexSectionHeader title="Selected Work" index={3} />}
      containerClassName="px-6 sm:px-12 max-w-[1400px]"
      className="py-16 md:py-24"
    >
      <div className="flex flex-col gap-24 lg:gap-40">
        {projects.map((project, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <div 
              key={project.id} 
              className={cn(
                "flex flex-col gap-12 items-center",
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Image Block */}
              <div className="w-full lg:w-[55%] flex-shrink-0">
                <button
                  onClick={() => onOpenModal && onOpenModal(project.id)}
                  className="w-full block relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] group overflow-hidden bg-[#E5DED2] dark:bg-[#1B1F1E] border border-[#B7B0A5]/30 dark:border-[#414542]/30"
                  aria-label={`View details for ${project.title}`}
                >
                  {project.thumbnailUrl ? (
                    <ImageWithFallback
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 text-center">
                      <span className="font-heading text-3xl font-bold uppercase tracking-tighter text-[#181818]/20 dark:text-[#F1EEE7]/20">
                        {project.title}
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#D35F43]/0 dark:bg-[#E0795D]/0 group-hover:bg-[#D35F43]/90 dark:group-hover:bg-[#E0795D]/90 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <span className="font-mono text-sm uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-safe:translate-y-4 motion-safe:group-hover:translate-y-0">
                      View Project
                    </span>
                  </div>
                </button>
              </div>
              
              {/* Text Block */}
              <div className="w-full lg:w-[45%] flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-[#587A72] dark:text-[#76A69C]">
                    {project.year && <span>{project.year}</span>}
                    {project.category && (
                      <>
                        <span className="w-1 h-1 bg-current rounded-full" />
                        <span>{project.category}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#181818] dark:text-[#F1EEE7] leading-none">
                    {project.title}
                  </h3>
                </div>

                {project.description && (
                  <p className="font-body text-base lg:text-lg text-[#5F625F] dark:text-[#A9AAA4] leading-relaxed">
                    {project.description}
                  </p>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest border border-[#B7B0A5] dark:border-[#414542] text-[#181818] dark:text-[#F1EEE7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-6">
                  <button
                    onClick={() => onOpenModal && onOpenModal(project.id)}
                    className="font-mono text-xs font-bold uppercase tracking-widest text-[#D35F43] dark:text-[#E0795D] hover:text-[#181818] dark:hover:text-[#F1EEE7] transition-colors flex items-center gap-2 group"
                  >
                    Explore
                    <span className="block w-6 h-px bg-current motion-safe:group-hover:w-10 transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
