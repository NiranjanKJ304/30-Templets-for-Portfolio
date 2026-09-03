import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

interface OrbitalWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const OrbitalWorkSection: React.FC<OrbitalWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Work" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Central Visual Axis */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#B9C9C6]/10 via-[#B9C9C6]/60 to-[#B9C9C6]/10 dark:from-[#40504D]/10 dark:via-[#40504D]/60 dark:to-[#40504D]/10 hidden lg:block pointer-events-none"></div>

        <div className="w-full flex flex-col gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full group cursor-pointer ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                onClick={() => onOpenModal && onOpenModal(project.id)}
              >
                {/* Floating Media Panel */}
                <div className={`w-full lg:w-1/2 flex justify-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <div className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/40 dark:border-[#40504D]/40 p-2 md:p-3 rounded-[2rem] shadow-md group-hover:shadow-lg transition-shadow duration-300 w-full max-w-[500px] aspect-[4/3] relative overflow-hidden">
                     {project.thumbnailUrl ? (
                       <ImageWithFallback src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                     ) : (
                       <div className="w-full h-full rounded-[1.5rem] bg-[#EEF2F1] dark:bg-[#101819] flex items-center justify-center font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase">
                         No Media
                       </div>
                     )}
                     <div className="absolute inset-0 bg-[#172326]/60 dark:bg-[#101819]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[1.5rem] m-2 md:m-3">
                        <div className="w-12 h-12 bg-[#FFFFFF] dark:bg-[#182221] rounded-full flex items-center justify-center text-[#172326] dark:text-[#F0F4F1] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>
                  </div>
                </div>

                {/* Connection Node (Desktop only) */}
                <div className="hidden lg:flex w-6 h-6 bg-[#EEF2F1] dark:bg-[#101819] border-2 border-[#2F7C73] dark:border-[#66B8A9] rounded-full absolute left-1/2 -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-[#2F7C73] dark:group-hover:bg-[#66B8A9] transition-all"></div>

                {/* Content Panel */}
                <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                   {(project.category || project.year) && (
                     <div className="font-mono text-[10px] text-[#2F7C73] dark:text-[#66B8A9] uppercase tracking-widest mb-3 flex gap-3">
                       {project.category && <span>{project.category}</span>}
                       {project.year && <span>{project.year}</span>}
                     </div>
                   )}
                   
                   <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#172326] dark:text-[#F0F4F1] mb-4">
                     {project.title}
                   </h3>
                   
                   {project.subtitle && (
                     <p className="font-body text-lg font-medium text-[#526467] dark:text-[#AABAB7] mb-4">
                       {project.subtitle}
                     </p>
                   )}
                   
                   <p className="font-body text-base text-[#526467] dark:text-[#AABAB7] leading-relaxed max-w-md line-clamp-3">
                     {project.description}
                   </p>
                   
                   {project.technologies && project.technologies.length > 0 && (
                     <div className={`flex flex-wrap gap-2 mt-6 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                       {project.technologies.slice(0, 4).map((tech, tIdx) => (
                         <span key={tIdx} className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/60 dark:border-[#40504D]/60 text-[#172326] dark:text-[#F0F4F1] font-mono text-[9px] uppercase px-3 py-1.5 rounded-full">
                           {tech}
                         </span>
                       ))}
                       {project.technologies.length > 4 && (
                         <span className="font-mono text-[9px] text-[#9BAAA9] dark:text-[#40504D] uppercase px-2 py-1.5">
                           +{project.technologies.length - 4}
                         </span>
                       )}
                     </div>
                   )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};
