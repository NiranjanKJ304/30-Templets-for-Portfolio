import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { KinshipSection } from '../components/KinshipSection';
import { KinshipAnchor } from '../components/KinshipAnchor';
import { KinshipConnector } from '../components/KinshipConnector';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface KinshipWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const KinshipWorkSection: React.FC<KinshipWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
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
      <KinshipSection title="Selected Works" color="gold">
        <div className="flex flex-col gap-24 lg:gap-40">
          {projects.map((project, idx) => (
            <div key={project.id} className="relative group flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
              
              {/* Central connecting rail (desktop) */}
              <div className="hidden md:flex absolute top-0 bottom-0 left-[2rem] w-px bg-[rgba(168,178,172,0.2)] dark:bg-[rgba(89,98,93,0.2)]" aria-hidden="true" />
              
              {/* Info Column */}
              <div className="w-full md:w-2/5 flex flex-col gap-6 relative z-10 pt-4">
                <div className="flex items-center gap-6 md:ml-4">
                  <div className="hidden md:flex shrink-0 w-8 items-center relative">
                    <KinshipConnector className="w-full opacity-50" />
                    <KinshipAnchor color="gold" size="sm" className="absolute right-0 translate-x-1/2" />
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-[#C7A85D] dark:text-[#D3BA70] uppercase tracking-widest font-bold">
                    {[project.year, project.category].filter(Boolean).join(' // ')}
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:pl-16">
                  <button
                    onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                    className="text-left font-heading font-medium text-3xl md:text-5xl text-[#202624] dark:text-[#EEF0EA] hover:text-[#C7A85D] dark:hover:text-[#D3BA70] transition-colors leading-[1.1] break-words"
                  >
                    {project.title}
                  </button>
                  
                  {project.description && (
                    <p className="font-body text-base text-[#737A75] dark:text-[#A7ADA7] leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="font-mono text-[10px] text-[#A8B2AC] dark:text-[#59625D] uppercase tracking-widest border border-[rgba(168,178,172,0.5)] dark:border-[rgba(89,98,93,0.5)] px-2 py-1 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Media Column */}
              <div className="w-full md:w-3/5 relative">
                <div 
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[rgba(32,38,36,0.05)] dark:bg-[rgba(238,240,234,0.05)] ring-1 ring-[rgba(168,178,172,0.2)] dark:ring-[rgba(89,98,93,0.2)] cursor-pointer"
                  onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
                >
                  {project.thumbnailUrl ? (
                    <ImageWithFallback
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-sm text-[#A8B2AC] dark:text-[#59625D] tracking-widest uppercase">
                      Open Detail
                    </div>
                  )}
                </div>
                {/* Decorative background anchor */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-[rgba(168,178,172,0.3)] dark:border-[rgba(89,98,93,0.3)] pointer-events-none" aria-hidden="true" />
              </div>

            </div>
          ))}
        </div>
      </KinshipSection>
    </SectionWrapper>
  );
};
