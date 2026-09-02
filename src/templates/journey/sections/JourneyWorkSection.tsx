/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyWorkSection - Chronological project milestones and featured works
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { JourneySectionHeader } from '../components/JourneySectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface JourneyWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterNumber?: string;
  onOpenProjectModal?: (projectId: string) => void;
}

export const JourneyWorkSection: React.FC<JourneyWorkSectionProps> = ({
  data,
  enabled,
  chapterNumber = '04',
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
      className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800"
      containerClassName="max-w-5xl"
    >
      <JourneySectionHeader
        chapterNumber={chapterNumber}
        title="Works & Milestone Projects"
        subtitle="Chronological body of work, system implementations, and creative productions."
        count={projects.length}
        countLabel="PROJECTS"
      />

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, idx) => {
          const mediaItem = project.media?.[0];
          const imageSrc = project.thumbnailUrl || mediaItem?.url;

          return (
            <article
              key={project.id}
              className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs space-y-6 hover:border-teal-500 transition-colors"
            >
              {/* Card Header & Chronology */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-neutral-500 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="text-teal-700 dark:text-teal-400 font-bold">
                    // WORK-0{idx + 1}
                  </span>
                  {project.category && <span>· {project.category}</span>}
                </div>
                {project.year && (
                  <span className="px-2 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-700 dark:text-neutral-300">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Visual Thumbnail (When Present) */}
                {imageSrc && (
                  <div
                    onClick={() => onOpenProjectModal?.(project.id)}
                    className="lg:col-span-5 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 cursor-pointer group relative aspect-16/10"
                  >
                    <ImageWithFallback
                      src={imageSrc}
                      alt={project.title}
                      fallbackText={project.title}
                      aspectRatioClass="aspect-16/10"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Narrative & Metadata */}
                <div className={`${imageSrc ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
                  <div className="space-y-1">
                    <h3
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-teal-600 transition-opacity" />
                    </h3>
                    {project.role && (
                      <div className="text-sm font-medium text-teal-700 dark:text-teal-400">
                        {project.role}
                      </div>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description || project.shortDescription}
                  </p>

                  {/* Verified Metrics (When Present) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60"
                        >
                          <div className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-neutral-500 uppercase tracking-wide truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies & Tags */}
                  {(project.technologies || project.tags) && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {(project.technologies || project.tags)?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions / Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <button
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 hover:underline cursor-pointer"
                    >
                      View Case Details →
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Deployment</span>
                      </a>
                    )}

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
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
