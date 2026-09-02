/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveWorkSection - Editorial showcase with primary featured project and structured secondary grid
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { ExecutiveSectionHeader } from '../components/ExecutiveSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface ExecutiveWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
  onOpenProjectModal?: (projectId: string) => void;
}

export const ExecutiveWorkSection: React.FC<ExecutiveWorkSectionProps> = ({
  data,
  enabled,
  indexStr = '04',
  onOpenProjectModal,
}) => {
  const { projects } = data;
  const hasData = hasSectionData('work', data);

  if (!enabled || !hasData || !projects || projects.length === 0) return null;

  // Split into primary featured and secondary
  const primaryFeatured = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== primaryFeatured.id);

  const primaryTags = [...(primaryFeatured.technologies || []), ...(primaryFeatured.tags || [])];

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <ExecutiveSectionHeader
        index={indexStr}
        title="Key Initiatives & Case Studies"
        subtitle="Selected major engagements, leadership interventions, and institutional systems."
        count={projects.length}
      />

      <div className="space-y-12">
        {/* Primary Featured Engagement Card */}
        {primaryFeatured && (
          <article className="border border-[#1A1A19]/20 dark:border-neutral-700 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Preview (7 cols) */}
              <div className="lg:col-span-7 bg-neutral-100 dark:bg-neutral-800 relative group overflow-hidden min-h-[280px] sm:min-h-[380px]">
                <ImageWithFallback
                  src={primaryFeatured.thumbnailUrl}
                  alt={primaryFeatured.title}
                  fallbackText={primaryFeatured.title}
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-neutral-950 text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
                  PRIMARY CASE STUDY
                </div>
              </div>

              {/* Case Study Details (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-[#1A1A19]/15 dark:border-neutral-800">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {primaryFeatured.category && (
                      <span className="uppercase tracking-widest">{primaryFeatured.category}</span>
                    )}
                    {primaryFeatured.year && <span>{primaryFeatured.year}</span>}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-neutral-50 leading-tight">
                    {primaryFeatured.title}
                  </h3>

                  {primaryFeatured.tagline && (
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {primaryFeatured.tagline}
                    </p>
                  )}

                  {primaryFeatured.description && (
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                      {primaryFeatured.description}
                    </p>
                  )}

                  {/* Metrics if available */}
                  {primaryFeatured.metrics && primaryFeatured.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 p-3.5 bg-neutral-50 dark:bg-neutral-800 border-l-2 border-neutral-900 dark:border-white">
                      {primaryFeatured.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="font-serif text-lg font-bold text-neutral-950 dark:text-neutral-50">
                            {metric.value}
                          </div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {primaryTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {primaryTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  {onOpenProjectModal && (
                    <button
                      onClick={() => onOpenProjectModal(primaryFeatured.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-neutral-50 hover:underline cursor-pointer"
                    >
                      <span>Read Full Brief</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {primaryFeatured.liveUrl && (
                    <a
                      href={primaryFeatured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      title="External Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {primaryFeatured.sourceUrl && (
                    <a
                      href={primaryFeatured.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      title="Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Engagements Grid (2 Columns) */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project: Project) => {
              const projectTags = [...(project.technologies || []), ...(project.tags || [])];

              return (
                <article
                  key={project.id}
                  className="border border-[#1A1A19]/15 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between group hover:border-neutral-900 dark:hover:border-neutral-400 transition-colors"
                >
                  {project.thumbnailUrl && (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-[#1A1A19]/10 dark:border-neutral-800">
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fallbackText={project.title}
                        aspectRatioClass="aspect-[16/9]"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                        {project.category && (
                          <span className="uppercase tracking-widest">{project.category}</span>
                        )}
                        {project.year && <span>{project.year}</span>}
                      </div>

                      <h4 className="font-serif text-xl font-bold text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                        {project.title}
                      </h4>

                      {project.description && (
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                      {projectTags.length > 0 && (
                        <div className="text-[10px] font-mono text-neutral-400 truncate max-w-[200px]">
                          {projectTags.slice(0, 3).join(' · ')}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        {onOpenProjectModal && (
                          <button
                            onClick={() => onOpenProjectModal(project.id)}
                            className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 hover:underline cursor-pointer"
                          >
                            View Brief
                          </button>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
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
        )}
      </div>
    </SectionWrapper>
  );
};
