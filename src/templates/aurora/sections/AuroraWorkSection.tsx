/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraWorkSection - Luminous project showcase with rich full-color framing
 */

import React from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Github } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { AuroraSectionHeader } from '../components/AuroraSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface AuroraWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const AuroraWorkSection: React.FC<AuroraWorkSectionProps> = ({
  data,
  enabled,
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
      className="py-16 sm:py-24 relative z-10"
      containerClassName="max-w-7xl"
    >
      <AuroraSectionHeader
        badge="Featured Work"
        title="Engineering, design, and strategic initiatives."
        subtitle="Selected case studies, deployed architectures, and systems."
        count={projects.length}
        countLabel="PROJECTS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project: Project, idx: number) => {
          const projectImage = project.thumbnailUrl || (project.media && project.media[0]?.url);
          const hasTags = (project.tags && project.tags.length > 0) || (project.technologies && project.technologies.length > 0);
          const allTags = [...(project.tags || []), ...(project.technologies || [])];

          return (
            <article
              key={project.id || idx}
              className="group rounded-3xl overflow-hidden bg-white/85 dark:bg-neutral-900/85 border border-white/80 dark:border-neutral-800/80 shadow-md shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15 backdrop-blur-xl transition-all duration-400 flex flex-col justify-between"
            >
              {/* Media area if present */}
              {projectImage && (
                <div
                  onClick={() => onOpenProjectModal?.(project.id)}
                  className="aspect-16/10 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer relative"
                >
                  <img
                    src={projectImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                      <span>View Case Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category / Year Header */}
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {project.category && (
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60">
                        {project.category}
                      </span>
                    )}
                    {project.year && <span>{project.year}</span>}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    {project.description && (
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer: Tags & Action Links */}
                <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  {hasTags && (
                    <div className="flex flex-wrap gap-1.5">
                      {allTags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.8 rounded-full text-xs font-medium bg-neutral-100/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    {onOpenProjectModal && (
                      <button
                        onClick={() => onOpenProjectModal(project.id)}
                        className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Case Overview</span>
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1 ml-auto"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span>Source</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
