import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MosaicSectionHeader } from '../components/MosaicSectionHeader';
import { MosaicTile } from '../components/MosaicTile';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MosaicWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const MosaicWorkSection: React.FC<MosaicWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="pt-6"
      containerClassName="max-w-[2000px] px-6 md:px-10 lg:px-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div className="col-span-1 md:col-span-12">
          <MosaicSectionHeader title="Selected Work" />
        </div>
        
        {projects.map((project, idx) => {
          // Logic for variable tile sizes based on 'featured' flag or index
          const isFeatured = project.featured;
          
          let span: any = 'half';
          
          // Large featured tile
          if (isFeatured) {
            span = 'two-thirds';
          } 
          // Alternating smaller tiles
          else if (idx % 3 === 0) {
            span = 'full'; // occasionally full width
          }
          else if (idx % 2 === 0) {
            span = 'third';
          }

          return (
            <MosaicTile 
              key={project.id} 
              span={span} 
              padding="none" 
              surface="primary"
            >
              <button
                onClick={() => onOpenModal && onOpenModal(project.id)}
                className="w-full h-full text-left flex flex-col group relative overflow-hidden bg-[#FFFDF8] dark:bg-[#1B1E1E]"
                aria-label={`View details for ${project.title}`}
              >
                {/* Image Section */}
                <div className="w-full h-[300px] md:h-[400px] xl:h-[500px] relative overflow-hidden border-b border-[#CBC5BB] dark:border-[#444744] bg-[#E9DED0] dark:bg-[#302925]">
                  {project.thumbnailUrl ? (
                    <ImageWithFallback
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale motion-safe:group-hover:grayscale-0 motion-safe:group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <span className="font-heading font-black text-4xl text-[#1B1B1A]/10 dark:text-[#F1EEE7]/10 uppercase tracking-tighter">
                        {project.title}
                      </span>
                    </div>
                  )}
                  
                  {project.year && (
                    <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest font-bold bg-[#FFFDF8] text-[#1B1B1A] dark:bg-[#121414] dark:text-[#F1EEE7] px-3 py-1 border border-[#CBC5BB] dark:border-[#444744]">
                      {project.year}
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col p-8 sm:p-10 flex-1 justify-between gap-6 motion-safe:group-hover:bg-[#F5F2EC] dark:motion-safe:group-hover:bg-[#121414] transition-colors">
                  <div className="flex flex-col gap-4">
                    {project.category && (
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#D66B4D] dark:text-[#E27A5A]">
                        {project.category}
                      </span>
                    )}
                    <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] leading-none">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="font-mono text-sm uppercase tracking-widest font-bold text-[#1B1B1A] dark:text-[#F1EEE7] flex items-center justify-between border-t border-[#CBC5BB] dark:border-[#444744] pt-6 mt-4">
                    <span>Read Case Study</span>
                    <span className="text-[#4E7772] dark:text-[#70A49C]">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>
                
              </button>
            </MosaicTile>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
