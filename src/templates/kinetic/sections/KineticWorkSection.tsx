import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KineticSectionHeader } from '../components/KineticSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { cn } from '../../../core/utils/cn';
import { ArrowRight } from 'lucide-react';

interface KineticWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const KineticWorkSection: React.FC<KineticWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      containerClassName="px-0" // Full width container for full width images
      className="py-16 md:py-32 bg-[#171717] text-[#F3F0E8] dark:bg-[#F3F0E8] dark:text-[#171717]"
    >
      <div className="px-6 sm:px-12 max-w-[1600px] mx-auto">
        {/* Force header text to match the inverted background colors without modifying the shared component's core logic */}
        <div className="mb-12 md:mb-20 flex flex-col items-start text-left">
          <div className="flex items-baseline gap-4 flex-row">
            <span className="font-mono text-xl md:text-2xl text-[#E84F3D] dark:text-[#FF715D] font-bold">
              03
            </span>
            <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-[#F3F0E8] dark:text-[#171717] leading-none flex items-center gap-4">
              Selected Work
              <ArrowRight className="w-10 h-10 sm:w-16 sm:h-16 text-[#555555] dark:text-[#B4B4AE]" />
            </h2>
          </div>
          <div className="w-full h-2 bg-[#F3F0E8] dark:bg-[#171717] mt-6 sm:mt-10"></div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, idx) => (
          <div key={project.id} className="w-full group border-b-2 border-[#333333] dark:border-[#CCCCCC]">
            <button
              onClick={() => onOpenModal && onOpenModal(project.id)}
              className="w-full text-left flex flex-col lg:flex-row"
              aria-label={`View details for ${project.title}`}
            >
              
              {/* Image Block */}
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden relative">
                {project.thumbnailUrl ? (
                  <ImageWithFallback
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale motion-safe:group-hover:grayscale-0 motion-safe:group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[#222] dark:bg-[#E0E0E0] flex items-center justify-center p-8">
                    <span className="font-heading text-4xl font-bold uppercase tracking-tighter text-white/10 dark:text-black/10">
                      {project.title}
                    </span>
                  </div>
                )}
                
                {/* Year Badge */}
                {project.year && (
                  <div className="absolute top-6 right-6 bg-[#E84F3D] dark:bg-[#FF715D] text-white font-mono text-xs font-bold px-4 py-2 uppercase">
                    {project.year}
                  </div>
                )}
              </div>
              
              {/* Content Block */}
              <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-between bg-[#171717] dark:bg-[#F3F0E8] motion-safe:group-hover:bg-[#222222] dark:motion-safe:group-hover:bg-[#EAE5D9] transition-colors duration-500">
                <div className="flex flex-col gap-6">
                  {project.category && (
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D8C85A] dark:text-[#D8CB67] font-bold">
                      {project.category}
                    </span>
                  )}
                  
                  <h3 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.9] text-[#F3F0E8] dark:text-[#171717]">
                    {project.title}
                  </h3>
                  
                  {project.description && (
                    <p className="font-body text-lg text-[#B4B4AE] dark:text-[#555555] max-w-xl mt-4">
                      {project.description}
                    </p>
                  )}
                </div>
                
                <div className="mt-16 flex items-center justify-between border-t border-[#333] dark:border-[#CCC] pt-8">
                  <div className="font-heading font-bold text-2xl uppercase tracking-wider text-[#F3F0E8] dark:text-[#171717] flex items-center gap-3">
                    Explore
                    <ArrowRight size={32} className="motion-safe:-translate-x-4 opacity-0 motion-safe:group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#E84F3D] dark:text-[#FF715D]" />
                  </div>
                  <div className="font-mono text-6xl lg:text-8xl font-black text-[#333] dark:text-[#CCC] select-none leading-none">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
              
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
