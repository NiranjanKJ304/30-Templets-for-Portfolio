import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface MemphisWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const MemphisWorkSection: React.FC<MemphisWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Selected Work" number="03" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
        {projects.map((project, idx) => {
          const isFeatured = project.featured || (idx === 0 && projects.length % 2 !== 0);
          
          return (
            <div 
              key={project.id}
              className={`group relative bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white flex flex-col transition-transform hover:-translate-y-2 focus-within:-translate-y-2 ${isFeatured ? 'md:col-span-2' : 'col-span-1'}`}
              style={{ boxShadow: '8px 8px 0 0 #202124' }}
            >
              {/* Project Image Area */}
              <div className="relative border-b-4 border-neutral-900 dark:border-white overflow-hidden aspect-[4/3] bg-[#F4F2EC] dark:bg-neutral-900">
                {project.thumbnailUrl ? (
                   <ImageWithFallback 
                     src={project.thumbnailUrl}
                     alt={project.title}
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-heading font-black text-4xl text-neutral-300 dark:text-neutral-700 uppercase tracking-tighter">
                      {project.title}
                    </span>
                  </div>
                )}
                
                {/* Year Badge */}
                {project.year && (
                  <div className="absolute top-4 right-4 bg-[#FACC15] border-2 border-neutral-900 dark:border-white px-3 py-1 shadow-[2px_2px_0_0_#202124] transform rotate-3 z-10">
                    <span className="font-heading font-black text-neutral-900 text-sm">
                      {project.year}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                {project.category && (
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">
                    {project.category}
                  </span>
                )}
                <h3 className="font-heading font-black text-2xl md:text-3xl uppercase text-neutral-900 dark:text-white mb-4 line-clamp-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 font-bold mb-6 line-clamp-3">
                    {project.description}
                  </p>
                )}

                <div className="mt-auto">
                  {onOpenModal ? (
                    <button
                      onClick={() => onOpenModal(project.id)}
                      className="inline-block px-6 py-3 bg-[#EC4899] text-white border-2 border-neutral-900 dark:border-white font-heading font-black uppercase text-sm shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full text-center"
                    >
                      View Details
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl || project.sourceUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#EC4899] text-white border-2 border-neutral-900 dark:border-white font-heading font-black uppercase text-sm shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full text-center"
                    >
                      {project.liveUrl ? 'Visit Live' : 'View Source'}
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
