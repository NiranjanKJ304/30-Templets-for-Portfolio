/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroWorkSection - Poster-inspired featured project catalogue
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { RetroSectionHeader } from '../components/RetroSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface RetroWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
  onOpenProjectModal?: (project: Project) => void;
}

export const RetroWorkSection: React.FC<RetroWorkSectionProps> = ({
  data,
  enabled,
  indexNumber = '04',
  onOpenProjectModal,
}) => {
  const { projects } = data;
  const hasData = hasSectionData('work', data);

  if (!enabled || !hasData || !projects || projects.length === 0) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-16 sm:py-24 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15"
      containerClassName="max-w-7xl"
    >
      <RetroSectionHeader
        indexNumber={indexNumber}
        badge="PORTFOLIO"
        title="Featured Work"
        subtitle="Selected case studies, production systems, and design artifacts."
        accentColor="terracotta"
      />

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project: Project, idx: number) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const isEven = idx % 2 === 0;
          const imageSrc = project.thumbnailUrl || project.media?.[0]?.url;

          return (
            <div
              key={project.id || idx}
              className="bg-[#FFF9EA] dark:bg-[#362E28] border-3 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#29231F] dark:shadow-[8px_8px_0px_0px_rgba(255,244,214,0.15)] transition-all"
            >
              {/* Top Project Registration Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b-2 border-[#29231F]/15 dark:border-[#FFF4D6]/15 font-mono text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#E76F2E] text-[#FFF4D6] border border-[#29231F]">
                    PROJ.{numStr}
                  </span>
                  {project.category && (
                    <span className="text-[#29231F] dark:text-[#FFF4D6]">
                      [{project.category}]
                    </span>
                  )}
                  {project.year && (
                    <span className="text-[#665D55] dark:text-[#A89B8E]">
                      YEAR: {project.year}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="px-2.5 py-0.5 rounded bg-[#E9B949] text-[#29231F] border border-[#29231F]">
                      ★ FEATURED
                    </span>
                  )}
                  {project.client && (
                    <span className="text-[#665D55] dark:text-[#A89B8E] hidden sm:inline">
                      CLIENT: {project.client}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Content Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                {/* Visual Media Framing (Cols 1-6 or 7-12) */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                  {imageSrc ? (
                    <div className="relative group">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-[#E9B949] border-2 border-[#29231F] dark:border-[#FFF4D6]/20" />
                      <div className="relative rounded-xl overflow-hidden border-2 border-[#29231F] dark:border-[#FFF4D6]/20 bg-[#FFF4D6] aspect-video">
                        <img
                          src={imageSrc}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Typographic Poster Placeholder */
                    <div className="relative">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-[#477A8A] border-2 border-[#29231F] dark:border-[#FFF4D6]/20" />
                      <div className="relative rounded-xl border-2 border-[#29231F] dark:border-[#FFF4D6]/20 bg-[#FFF4D6] dark:bg-[#29231F] p-8 aspect-video flex flex-col justify-between">
                        <span className="font-mono text-xs font-bold uppercase text-[#E76F2E]">
                          // ARCHIVAL PLATE
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-black uppercase text-[#29231F] dark:text-[#FFF4D6] tracking-tight">
                          {project.title}
                        </h4>
                        <span className="font-mono text-xs text-[#665D55] dark:text-[#A89B8E]">
                          REF NO. {numStr}-2026
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details (Cols 7-12 or 1-6) */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'} space-y-6`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#29231F] dark:text-[#FFF4D6]">
                      {project.title}
                    </h3>
                    {(project.tagline || project.subtitle) && (
                      <p className="text-base sm:text-lg font-bold text-[#E76F2E] mt-1">
                        {project.tagline || project.subtitle}
                      </p>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-sm sm:text-base text-[#665D55] dark:text-[#D8CBB7] leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* Highlights Bullet List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-[#29231F]/10 dark:border-[#FFF4D6]/10">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#29231F] dark:text-[#FFF4D6] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E76F2E] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags & Technologies Cloud */}
                  {((project.technologies && project.technologies.length > 0) ||
                    (project.tags && project.tags.length > 0)) && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {(project.technologies || project.tags || []).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-[#FFF4D6] dark:bg-[#29231F] border border-[#29231F]/30 dark:border-[#FFF4D6]/20 font-mono text-xs font-bold text-[#29231F] dark:text-[#FFF4D6]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {onOpenProjectModal && (
                      <button
                        onClick={() => onOpenProjectModal(project)}
                        className="px-4 py-2 rounded-xl font-mono font-bold text-xs uppercase tracking-wider bg-[#29231F] text-[#FFF4D6] dark:bg-[#FFF4D6] dark:text-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[3px_3px_0px_0px_#E76F2E] hover:bg-[#E76F2E] hover:text-[#FFF4D6] transition-all flex items-center gap-1.5 min-h-[44px]"
                      >
                        <span>Case Overview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl font-mono font-bold text-xs uppercase tracking-wider bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] shadow-[3px_3px_0px_0px_#29231F] hover:shadow-[1px_1px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1.5 min-h-[44px]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                    )}

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl font-mono font-bold text-xs uppercase tracking-wider bg-[#FFF4D6] dark:bg-[#29231F] text-[#29231F] dark:text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[3px_3px_0px_0px_#29231F] hover:shadow-[1px_1px_0px_0px_#29231F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1.5 min-h-[44px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
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
