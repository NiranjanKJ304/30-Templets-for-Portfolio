/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasWorkSection - Modular architectural project gallery with dynamic grid compositions
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CanvasSectionHeader } from '../components/CanvasSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CanvasWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  sectionNumber?: string;
  onOpenProjectModal?: (projectId: string) => void;
}

export const CanvasWorkSection: React.FC<CanvasWorkSectionProps> = ({
  data,
  enabled,
  sectionNumber = '04',
  onOpenProjectModal,
}) => {
  const { projects } = data;
  const hasData = hasSectionData('work', data);

  if (!enabled || !hasData || !projects || projects.length === 0) return null;

  // Primary featured project
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  const featuredTags = [...(featuredProject.technologies || []), ...(featuredProject.tags || [])];

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-32"
      containerClassName="max-w-7xl"
    >
      <CanvasSectionHeader
        sectionNumber={sectionNumber}
        title="Selected Works & Case Studies"
        subtitle="Principal undertakings, key initiatives, creative explorations, and published systems."
        count={projects.length}
        countLabel="WORKS"
      />

      <div className="space-y-12">
        {/* =========================================================================
           1. LEAD FEATURED PROJECT (HERO APERTURE)
           ========================================================================= */}
        {featuredProject && (
          <article className="bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] rounded-lg overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Block (7 cols) */}
              <div className="lg:col-span-7 bg-neutral-100 dark:bg-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-300 dark:border-neutral-800 relative overflow-hidden min-h-[300px] sm:min-h-[420px] flex items-center justify-center">
                {featuredProject.thumbnailUrl ? (
                  <ImageWithFallback
                    src={featuredProject.thumbnailUrl}
                    alt={featuredProject.title}
                    fallbackText={featuredProject.title}
                    aspectRatioClass="aspect-[16/10]"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="p-12 text-center space-y-3">
                    <div className="text-6xl font-black text-neutral-300 dark:text-neutral-700">
                      {featuredProject.title.charAt(0)}
                    </div>
                    <div className="text-xs font-mono text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest">
                      FEATURED CASE STUDY
                    </div>
                  </div>
                )}

                <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest rounded">
                  LEAD WORK // 01
                </div>
              </div>

              {/* Information Deck (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                    {featuredProject.category && (
                      <span className="uppercase tracking-widest text-orange-600 dark:text-orange-400 font-bold">
                        {featuredProject.category}
                      </span>
                    )}
                    {featuredProject.year && <span>{featuredProject.year}</span>}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-50 leading-tight">
                    {featuredProject.title}
                  </h3>

                  {featuredProject.tagline && (
                    <p className="text-xs font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold">
                      {featuredProject.tagline}
                    </p>
                  )}

                  {featuredProject.description && (
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {featuredProject.description}
                    </p>
                  )}

                  {featuredProject.metrics && featuredProject.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-100 dark:bg-neutral-850 rounded-md border border-neutral-200 dark:border-neutral-800 font-mono">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-black text-neutral-900 dark:text-neutral-100">
                            {metric.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {featuredTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions Hub */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono">
                  {onOpenProjectModal && (
                    <button
                      onClick={() => onOpenProjectModal(featuredProject.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:text-orange-700 cursor-pointer"
                    >
                      <span>Case Study Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-neutral-500 hover:text-orange-600 transition-colors"
                      title="Direct Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {featuredProject.sourceUrl && (
                    <a
                      href={featuredProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-neutral-500 hover:text-orange-600 transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* =========================================================================
           2. SECONDARY PROJECTS MODULAR GALLERY (2 COLUMNS)
           ========================================================================= */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project: Project, idx) => {
              const projectTags = [...(project.technologies || []), ...(project.tags || [])];

              return (
                <article
                  key={project.id}
                  className="bg-white dark:bg-[#1C1A18] border border-neutral-300 dark:border-neutral-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden flex flex-col justify-between hover:border-orange-600 dark:hover:border-orange-500 transition-colors group"
                >
                  {project.thumbnailUrl ? (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fallbackText={project.title}
                        aspectRatioClass="aspect-[16/9]"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  ) : null}

                  <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span className="text-orange-600 dark:text-orange-400 font-bold uppercase">
                          // 0{idx + 2} {project.category || ''}
                        </span>
                        {project.year && <span>{project.year}</span>}
                      </div>

                      <h4 className="text-2xl font-black text-neutral-900 dark:text-neutral-50 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h4>

                      {project.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between font-mono">
                      {projectTags.length > 0 && (
                        <div className="text-[10px] text-neutral-500 truncate max-w-[200px]">
                          {projectTags.slice(0, 3).join(' · ')}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        {onOpenProjectModal && (
                          <button
                            onClick={() => onOpenProjectModal(project.id)}
                            className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
                          >
                            Details
                          </button>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-orange-600"
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
