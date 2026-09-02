/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissWorkSection - Indexed project register & catalog
 */

import React from 'react';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { SwissSectionHeader } from '../components/SwissSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface SwissWorkSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexNumber?: string;
  onOpenProjectModal?: (project: Project) => void;
}

export const SwissWorkSection: React.FC<SwissWorkSectionProps> = ({
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
      className="py-16 sm:py-24 border-b border-neutral-900 dark:border-neutral-100"
      containerClassName="max-w-7xl"
    >
      <SwissSectionHeader
        indexNumber={indexNumber}
        title="Works & Project Index"
        subtitle="Catalog of selected systems, publications, and strategic initiatives."
        count={projects.length}
        countLabel="WORKS"
      />

      <div className="space-y-12">
        {projects.map((project, idx) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const allTags = [...(project.tags || []), ...(project.technologies || [])];

          return (
            <article
              key={project.id || idx}
              className="border border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-950 p-6 sm:p-8 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual Media Block (Cols 1-5, if thumbnail exists) */}
                {project.thumbnailUrl && (
                  <div className="lg:col-span-5 border border-neutral-900 dark:border-neutral-100 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <button
                      type="button"
                      onClick={() => onOpenProjectModal?.(project)}
                      className="w-full h-full block cursor-pointer group text-left"
                    >
                      <ImageWithFallback
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fallbackText={project.title}
                        aspectRatioClass="aspect-16/10"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </button>
                  </div>
                )}

                {/* Content & Metadata Column (Cols 6-12 if media exists, else full width) */}
                <div
                  className={`${
                    project.thumbnailUrl ? 'lg:col-span-7' : 'lg:col-span-12'
                  } space-y-6`}
                >
                  {/* Top Register Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 dark:text-red-500 font-bold">
                        INDEX // {numStr}
                      </span>
                      {project.category && (
                        <span className="text-neutral-500 uppercase">
                          / {project.category}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.year && <span>{project.year}</span>}
                      {project.role && (
                        <span className="text-neutral-500 uppercase">[{project.role}]</span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-neutral-50 uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
                      {project.description || project.shortDescription}
                    </p>
                  </div>

                  {/* Verified Metrics Grid (if present) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="border border-neutral-300 dark:border-neutral-700 p-3 bg-neutral-50 dark:bg-neutral-900 font-mono"
                        >
                          <div className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {allTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 uppercase"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link Strip */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs font-bold uppercase tracking-wider">
                    {onOpenProjectModal && (
                      <button
                        type="button"
                        onClick={() => onOpenProjectModal(project)}
                        className="px-4 py-2 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect Specimen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-neutral-900 dark:border-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-950 dark:text-neutral-50 transition-colors flex items-center gap-1.5"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                      </a>
                    )}

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Source</span>
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
