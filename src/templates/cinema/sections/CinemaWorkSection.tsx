/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaWorkSection - Immersive wide-format project gallery with case study modals
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { CinemaSectionHeader } from '../components/CinemaSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface CinemaWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  chapterIndex?: string;
  onOpenProjectModal?: (projectId: string) => void;
}

export const CinemaWorkSection: React.FC<CinemaWorkSectionProps> = ({
  data,
  enabled,
  chapterIndex = '04',
  onOpenProjectModal,
}) => {
  const { projects } = data;
  const hasData = hasSectionData('work', data);

  if (!enabled || !hasData || !projects || projects.length === 0) return null;

  // Primary feature
  const primaryFeatured = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== primaryFeatured.id);

  const primaryTags = [...(primaryFeatured.technologies || []), ...(primaryFeatured.tags || [])];

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-24 sm:py-36"
      containerClassName="max-w-7xl"
    >
      <CinemaSectionHeader
        chapterIndex={chapterIndex}
        title="Selected Works & Case Studies"
        subtitle="Principal undertakings, key initiatives, creative explorations, and published systems."
        count={projects.length}
        countLabel="WORKS"
      />

      <div className="space-y-16">
        {/* =========================================================================
           1. PRIMARY FEATURED WIDE-APERTURE SHOWCASE
           ========================================================================= */}
        {primaryFeatured && (
          <article className="bg-neutral-100/90 dark:bg-[#111318]/95 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Viewport (7 cols) */}
              <div className="lg:col-span-7 bg-neutral-900 relative overflow-hidden min-h-[320px] sm:min-h-[440px] flex items-center justify-center">
                {primaryFeatured.thumbnailUrl ? (
                  <ImageWithFallback
                    src={primaryFeatured.thumbnailUrl}
                    alt={primaryFeatured.title}
                    fallbackText={primaryFeatured.title}
                    aspectRatioClass="aspect-[16/10]"
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                  />
                ) : (
                  /* Typographic Fallback Card if No Media */
                  <div className="p-12 text-center space-y-4">
                    <div className="text-5xl font-serif font-bold text-neutral-700 dark:text-neutral-600">
                      {primaryFeatured.title.charAt(0)}
                    </div>
                    <div className="text-xs font-mono text-amber-500 uppercase tracking-widest">
                      FEATURED CASE STUDY
                    </div>
                  </div>
                )}

                {/* Ambient Tag Pill */}
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>PRIMARY SHOWCASE</span>
                </div>
              </div>

              {/* Information Deck (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    {primaryFeatured.category && (
                      <span className="uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                        {primaryFeatured.category}
                      </span>
                    )}
                    {primaryFeatured.year && <span>{primaryFeatured.year}</span>}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-serif text-neutral-900 dark:text-neutral-50 leading-tight">
                    {primaryFeatured.title}
                  </h3>

                  {primaryFeatured.tagline && (
                    <p className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {primaryFeatured.tagline}
                    </p>
                  )}

                  {primaryFeatured.description && (
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {primaryFeatured.description}
                    </p>
                  )}

                  {/* Real Metrics Display (Only when metrics exist) */}
                  {primaryFeatured.metrics && primaryFeatured.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-200/50 dark:bg-neutral-900/60 rounded-xl border border-neutral-300 dark:border-white/5 font-mono">
                      {primaryFeatured.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                            {metric.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
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
                          className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions Hub */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-white/10 font-mono">
                  {onOpenProjectModal && (
                    <button
                      onClick={() => onOpenProjectModal(primaryFeatured.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-500 cursor-pointer"
                    >
                      <span>Examine Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {primaryFeatured.liveUrl && (
                    <a
                      href={primaryFeatured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-neutral-500 hover:text-amber-500 transition-colors"
                      title="Direct External Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {primaryFeatured.sourceUrl && (
                    <a
                      href={primaryFeatured.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-neutral-500 hover:text-amber-500 transition-colors"
                      title="Source Repository"
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
           2. SECONDARY WORKS GALLERY (2 COLUMNS)
           ========================================================================= */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {secondaryProjects.map((project: Project) => {
              const projectTags = [...(project.technologies || []), ...(project.tags || [])];

              return (
                <article
                  key={project.id}
                  className="bg-neutral-100/80 dark:bg-[#111318]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all group"
                >
                  {project.thumbnailUrl ? (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-900 border-b border-neutral-200 dark:border-white/10">
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fallbackText={project.title}
                        aspectRatioClass="aspect-[16/9]"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                      />
                    </div>
                  ) : null}

                  <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                        {project.category && (
                          <span className="uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
                            {project.category}
                          </span>
                        )}
                        {project.year && <span>{project.year}</span>}
                      </div>

                      <h4 className="text-2xl font-bold font-serif text-neutral-900 dark:text-neutral-50 group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h4>

                      {project.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-white/5 flex items-center justify-between font-mono">
                      {projectTags.length > 0 && (
                        <div className="text-[10px] text-neutral-500 truncate max-w-[200px]">
                          {projectTags.slice(0, 3).join(' · ')}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        {onOpenProjectModal && (
                          <button
                            onClick={() => onOpenProjectModal(project.id)}
                            className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                          >
                            Details
                          </button>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-amber-500"
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
