import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ArchiveEntry } from '../components/ArchiveEntry';
import { ArchiveMeta } from '../components/ArchiveMeta';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface ArchiveWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  index?: string;
  onOpenModal?: (id: string) => void;
}

export const ArchiveWorkSection: React.FC<ArchiveWorkSectionProps> = ({ data, enabled = true, index, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-8"
      containerClassName="px-0"
    >
      <ArchiveEntry index={index} title="Selected Work" className="mt-8">
        <div className="flex flex-col gap-16 mt-8">
          {projects.map((project, pIdx) => (
            <div key={project.id} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="font-mono text-sm uppercase tracking-widest text-[#9D4937] dark:text-[#D4755D] font-bold shrink-0">
                    {(pIdx + 1).toString().padStart(3, '0')}
                  </div>
                  <div className="w-full h-px bg-[#C8C5BA] dark:bg-[#464943]" aria-hidden="true" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="w-full md:w-1/3 xl:w-1/4 shrink-0 flex flex-col gap-6">
                    <button 
                      onClick={() => onOpenModal && onOpenModal(project.id)}
                      className="w-full text-left font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-[#20211F] dark:text-[#F1EEE5] leading-[1.1] hover:text-[#9D4937] dark:hover:text-[#D4755D] transition-colors"
                    >
                      {project.title}
                    </button>
                    
                    <div className="flex flex-col gap-4">
                      {project.category && <ArchiveMeta label="Category" value={project.category} />}
                      {project.year && <ArchiveMeta label="Year" value={project.year} />}
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 xl:w-3/4 flex flex-col gap-6">
                    <div className="w-full aspect-video border border-[#C8C5BA] dark:border-[#464943] bg-[#FAF8F2] dark:bg-[#1D201E] relative overflow-hidden">
                      {project.thumbnailUrl ? (
                        <ImageWithFallback
                          src={project.thumbnailUrl}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale motion-safe:hover:grayscale-0 transition-all duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-[#20211F]/10 dark:text-[#F1EEE5]/10">
                          <span className="font-mono tracking-widest uppercase">IMAGE_NOT_FOUND</span>
                        </div>
                      )}
                    </div>
                    
                    {project.description && (
                      <p className="font-body text-base lg:text-lg text-[#686861] dark:text-[#AAA9A0] leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </ArchiveEntry>
    </SectionWrapper>
  );
};
