/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralWorkSection - Precision initiatives matrix with primary showcase and case study modals
 */

import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
  onOpenProjectModal?: (projectId: string) => void;
}

export const NeuralWorkSection: React.FC<NeuralWorkSectionProps> = ({
  data,
  enabled,
  indexStr = '04',
  onOpenProjectModal,
}) => {
  const { projects } = data;
  const hasData = hasSectionData('work', data);

  if (!enabled || !hasData || !projects || projects.length === 0) return null;

  // Primary featured project
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
      <NeuralSectionHeader
        index={indexStr}
        title="Selected Initiatives & Works"
        subtitle="Key undertakings, case studies, creative explorations, and published systems."
        count={projects.length}
      />

      <div className="space-y-12">
        {/* Primary Showcase Card */}
        {primaryFeatured && (
          <article className="bg-white/80 dark:bg-[#0F1117]/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 overflow-hidden shadow-2xl relative group">
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 via-sky-400 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Viewport (7 cols) */}
              <div className="lg:col-span-7 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <ImageWithFallback
                  src={primaryFeatured.thumbnailUrl}
                  alt={primaryFeatured.title}
                  fallbackText={primaryFeatured.title}
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                />

                <div className="absolute top-4 left-4 bg-neutral-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono uppercase tracking-widest px-3 py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
                  <span>PRIMARY INITIATIVE</span>
                </div>
              </div>

              {/* Information Deck (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {primaryFeatured.category && (
                      <span className="uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                        {primaryFeatured.category}
                      </span>
                    )}
                    {primaryFeatured.year && <span>// {primaryFeatured.year}</span>}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50 leading-tight">
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

                  {/* Real Metrics (only if genuine data exists) */}
                  {primaryFeatured.metrics && primaryFeatured.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50 dark:bg-neutral-900/80 border-l-2 border-cyan-500 font-mono">
                      {primaryFeatured.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
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
                          className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5"
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
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 cursor-pointer"
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
                      className="p-1 text-neutral-500 hover:text-cyan-500 transition-colors"
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
                      className="p-1 text-neutral-500 hover:text-cyan-500 transition-colors"
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

        {/* Secondary Matrix Grid (2 Columns) */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project: Project) => {
              const projectTags = [...(project.technologies || []), ...(project.tags || [])];

              return (
                <article
                  key={project.id}
                  className="bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all group"
                >
                  {project.thumbnailUrl && (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-white/10">
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fallbackText={project.title}
                        aspectRatioClass="aspect-[16/9]"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                        {project.category && (
                          <span className="uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                            {project.category}
                          </span>
                        )}
                        {project.year && <span>// {project.year}</span>}
                      </div>

                      <h4 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50 group-hover:text-cyan-500 transition-colors">
                        {project.title}
                      </h4>

                      {project.description && (
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between font-mono">
                      {projectTags.length > 0 && (
                        <div className="text-[10px] text-neutral-400 truncate max-w-[200px]">
                          {projectTags.slice(0, 3).join(' · ')}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        {onOpenProjectModal && (
                          <button
                            onClick={() => onOpenProjectModal(project.id)}
                            className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                          >
                            Details
                          </button>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-cyan-500"
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
