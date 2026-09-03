import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PaperfoldWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const PaperfoldWorkSection: React.FC<PaperfoldWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Selected Works" number="03" subtitle="Projects & Cases" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, idx) => {
          // Slight alternating vertical offset
          const offsetClass = idx % 2 !== 0 ? 'md:mt-16' : '';

          return (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${offsetClass} flex flex-col h-full`}
              onClick={() => onOpenModal && onOpenModal(project.id)}
            >
              <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] shadow-[0_2px_15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 relative flex-grow flex flex-col">
                
                {/* Folded paper flap overlay */}
                <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none z-20">
                   <div className="absolute bottom-0 left-0 w-full h-full bg-[#FAF6EE] dark:bg-[#1A1C1E] border border-[#E8E3D8] dark:border-[#202020] transform rotate-12 shadow-sm origin-bottom-left transition-transform duration-500 group-hover:rotate-0"></div>
                </div>

                {/* Thumbnail Area */}
                {project.thumbnailUrl && (
                  <div className="relative h-64 border-b border-[#E8E3D8] dark:border-[#202020] overflow-hidden bg-[#F3EFE7] dark:bg-[#151719] p-4 pb-0">
                    <div className="w-full h-full relative overflow-hidden">
                      <ImageWithFallback 
                        src={project.thumbnailUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="font-heading font-normal text-2xl md:text-3xl text-[#202020] dark:text-[#F3F0E8]">
                      {project.title}
                    </h3>
                    {project.year && (
                      <span className="font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest border border-[#E8E3D8] dark:border-[#202020] px-2 py-0.5">
                        {project.year}
                      </span>
                    )}
                  </div>
                  
                  {project.subtitle && (
                    <p className="font-body font-light text-[#C86B52] dark:text-[#D47A61] mb-6">
                      {project.subtitle}
                    </p>
                  )}
                  
                  <div className="font-body font-light text-[#66717A] dark:text-[#AAB3B8] mb-8 leading-relaxed line-clamp-3">
                    {project.description}
                  </div>
                  
                  {/* Category / Tags block at the bottom */}
                  <div className="mt-auto pt-6 border-t border-[#E8E3D8] dark:border-[#202020]/50">
                     {project.category && (
                       <span className="block font-mono text-[10px] text-[#7D9EAF] dark:text-[#8EADBD] uppercase tracking-widest mb-3">
                         {project.category}
                       </span>
                     )}
                     {project.tags && project.tags.length > 0 && (
                       <div className="flex flex-wrap gap-x-4 gap-y-2">
                         {project.tags.slice(0, 3).map((tag, tIdx) => (
                           <span key={tIdx} className="font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-wider">
                             {tag}
                           </span>
                         ))}
                       </div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
