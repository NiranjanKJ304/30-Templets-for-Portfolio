/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalWorkSection - Universal, domain-neutral showcase of projects and case studies
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MinimalSectionHeader } from '../components/MinimalSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface MinimalWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const MinimalWorkSection: React.FC<MinimalWorkSectionProps> = ({
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
      className="py-16 sm:py-20"
      containerClassName="max-w-4xl"
    >
      <MinimalSectionHeader title="Selected Work" count={projects.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project: Project) => {
          const allTags = [...(project.technologies || []), ...(project.tags || [])];

          return (
            <article
              key={project.id}
              onClick={() => onOpenProjectModal?.(project.id)}
              className="group flex flex-col justify-between border border-[#1C1917]/10 dark:border-neutral-800 rounded-sm overflow-hidden bg-white dark:bg-[#141210] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 cursor-pointer"
            >
              {/* Media Thumbnail if available */}
              {project.thumbnailUrl && (
                <div className="w-full overflow-hidden border-b border-[#1C1917]/10 dark:border-neutral-800 aspect-video bg-neutral-100 dark:bg-neutral-900">
                  <ImageWithFallback
                    src={project.thumbnailUrl}
                    alt={project.title}
                    aspectRatioClass="aspect-video"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category & Year Metadata */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                    {project.category && (
                      <span className="uppercase tracking-wider">{project.category}</span>
                    )}
                    {project.year && <span>{project.year}</span>}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </h3>

                  {project.tagline && (
                    <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                      {project.tagline}
                    </p>
                  )}

                  {project.description && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Role or Client if present */}
                {(project.role || project.client) && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono flex flex-wrap gap-x-3 gap-y-1">
                    {project.role && <span>Role: {project.role}</span>}
                    {project.client && <span>Client: {project.client}</span>}
                  </div>
                )}

                {/* Metrics if present */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1C1917]/5 dark:border-neutral-800">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-left">
                        <span className="block font-serif text-base font-bold text-neutral-900 dark:text-neutral-100">
                          {metric.value}
                        </span>
                        <span className="block text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags & Actions */}
                <div className="pt-3 border-t border-[#1C1917]/5 dark:border-neutral-800 flex items-center justify-between gap-2">
                  {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 overflow-hidden">
                      {allTags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-2xs text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {allTags.length > 3 && (
                        <span className="text-[10px] font-mono text-neutral-400">
                          +{allTags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* External Links */}
                  <div
                    className="flex items-center gap-2 ml-auto shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="View source repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="Visit live project"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
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
