import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PaperCollageWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const PaperCollageWorkSection: React.FC<PaperCollageWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Selected Work" number="03" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="flex flex-col gap-20 md:gap-32">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div 
              key={project.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Media Collage Side */}
              <div className="w-full md:w-1/2 relative group">
                 {/* Offset paper sheet */}
                 <div className="absolute inset-0 bg-[#F5C84B] opacity-20 dark:opacity-10 transform rotate-3 translate-x-4 translate-y-4"></div>
                 
                 <div className="relative bg-[#FFFDF8] dark:bg-[#242730] p-4 pb-12 border border-[#D4CFC4] dark:border-[#3A3F4C] shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 dark:bg-black/20 backdrop-blur-sm transform -rotate-2 mix-blend-overlay z-20"></div>
                    
                    <div className="aspect-[4/3] bg-[#EBE6DA] dark:bg-[#1A1C23] overflow-hidden relative z-10 cursor-pointer" onClick={() => onOpenModal?.(project.id)}>
                      {project.thumbnailUrl ? (
                         <ImageWithFallback 
                           src={project.thumbnailUrl}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                         />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-6 text-center">
                          <span className="font-heading font-bold text-3xl text-[#171717] dark:text-white opacity-20">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Caption strip */}
                    <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase tracking-widest">
                       <span>FIG. {String(idx + 1).padStart(2, '0')}</span>
                       {project.year && <span>{project.year}</span>}
                    </div>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 relative">
                 <div className="absolute top-0 -left-8 w-16 h-px bg-[#D4CFC4] dark:bg-[#3A3F4C] hidden md:block"></div>
                 
                 {project.category && (
                   <span className="inline-block bg-[#F7F3EA] dark:bg-[#1A1C23] border border-[#D4CFC4] dark:border-[#3A3F4C] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#315CFF] mb-6 transform -rotate-2">
                     {project.category}
                   </span>
                 )}
                 
                 <h3 className="font-heading font-black text-3xl md:text-4xl text-[#171717] dark:text-white mb-4">
                   {project.title}
                 </h3>
                 
                 {project.description && (
                   <p className="font-body text-lg text-[#4A4A4A] dark:text-[#E0E0E0] mb-8 line-clamp-3">
                     {project.description}
                   </p>
                 )}

                 {project.tags && project.tags.length > 0 && (
                   <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map((tag, i) => (
                       <span key={i} className="text-xs font-bold uppercase text-[#737373] dark:text-[#A0A5B5] bg-[#F7F3EA] dark:bg-[#1A1C23] px-2 py-1">
                         {tag}
                       </span>
                     ))}
                   </div>
                 )}

                 <div className="flex gap-4">
                   {onOpenModal ? (
                     <button
                       onClick={() => onOpenModal(project.id)}
                       className="font-heading font-bold uppercase tracking-widest text-[#171717] dark:text-white border-b-2 border-[#171717] dark:border-white pb-1 hover:text-[#315CFF] hover:border-[#315CFF] transition-colors"
                     >
                       Read Case Study
                     </button>
                   ) : (
                     <a
                       href={project.liveUrl || project.sourceUrl || '#'}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-heading font-bold uppercase tracking-widest text-[#171717] dark:text-white border-b-2 border-[#171717] dark:border-white pb-1 hover:text-[#315CFF] hover:border-[#315CFF] transition-colors"
                     >
                       {project.liveUrl ? 'Visit Website' : 'View Source'}
                     </a>
                   )}
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
