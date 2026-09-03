import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

interface BlueprintWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const BlueprintWorkSection: React.FC<BlueprintWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Project Schematics" number="03" description="Implemented Systems and Architecture" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="group cursor-pointer bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] relative flex flex-col h-full hover:shadow-[0_8px_30px_rgba(46,111,187,0.15)] transition-shadow"
            onClick={() => onOpenModal && onOpenModal(project.id)}
          >
            {/* Top Coordinate bar */}
            <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-3 flex justify-between items-center bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5">
              <span className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">
                ID: {project.id.slice(0, 8).toUpperCase()}
              </span>
              <span className="font-mono text-[10px] text-[#3DA9C9] uppercase tracking-widest">
                FIG {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Thumbnail */}
            {project.thumbnailUrl && (
              <div className="relative h-48 sm:h-56 md:h-64 border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] overflow-hidden bg-[#E6ECEF] dark:bg-[#0D1620]">
                {/* Blueprint overlay effect for images */}
                <div className="absolute inset-0 bg-[#2E6FBB]/20 dark:bg-[#5DA9E9]/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <ImageWithFallback 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            )}

            {/* Content area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-[#173A5E] dark:text-[#EAF2F7] uppercase">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-[#2E6FBB] dark:text-[#5DA9E9] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              
              {project.subtitle && (
                <p className="font-mono text-sm text-[#E8893A] dark:text-[#F0A35B] mb-6">
                  {project.subtitle}
                </p>
              )}
              
              <div className="font-body text-[#17202A] dark:text-[#EAF2F7] mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </div>
              
              {/* Technologies / Metadata footer */}
              <div className="mt-auto pt-6 border-t border-dashed border-[#2E6FBB]/40 dark:border-[#5DA9E9]/40">
                <div className="flex justify-between items-end">
                   {project.technologies && project.technologies.length > 0 && (
                     <div className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">
                       MAT: {project.technologies.slice(0, 3).join(', ')}
                       {project.technologies.length > 3 && ' ...'}
                     </div>
                   )}
                   {project.year && (
                     <div className="font-mono text-[10px] font-bold text-[#173A5E] dark:text-[#5DA9E9]">
                       Y: {project.year}
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
