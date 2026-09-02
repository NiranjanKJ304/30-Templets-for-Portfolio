/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoWorkSection - Asymmetric project showcase tiles with interactive modal support
 */

import React, { useState } from 'react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { Briefcase, ArrowUpRight, Github, ExternalLink, Calendar } from 'lucide-react';

interface BentoWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const BentoWorkSection: React.FC<BentoWorkSectionProps> = ({
  data,
  enabled = true,
  onOpenProjectModal,
}) => {
  const projects = data.projects;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!enabled || !projects || projects.length === 0) {
    return null;
  }

  // Extract unique canonical categories
  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[]];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Helper to determine tile span in asymmetric layout
  const getTileSpan = (idx: number, total: number): 'col-12' | 'col-8' | 'col-6' | 'col-4' => {
    if (total === 1) return 'col-12';
    if (total === 2) return 'col-6';
    if (total === 3) {
      return idx === 0 ? 'col-8' : 'col-4';
    }
    // Repeating rhythm: 8, 4, 4, 4, 4, 6, 6...
    const pattern = [
      'col-8' as const,
      'col-4' as const,
      'col-4' as const,
      'col-4' as const,
      'col-4' as const,
      'col-6' as const,
      'col-6' as const,
    ];
    return pattern[idx % pattern.length];
  };

  return (
    <section id="work" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// SELECTED WORKS"
        title="Featured Projects & Case Studies"
        subtitle="Engineered systems, client deliverables, and architectural implementations."
        icon={<Briefcase className="w-4 h-4 text-[#3B82F6]" />}
        action={
          categories.length > 2 ? (
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#EEF1F5] dark:bg-[#222630] rounded-full border border-[#E2E6ED] dark:border-[#2D3340]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white dark:bg-[#191C22] text-[#171A1F] dark:text-[#F4F5F7] shadow-xs'
                      : 'text-[#5F6672] dark:text-[#9DA5B4] hover:text-[#171A1F] dark:hover:text-[#F4F5F7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : undefined
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {filteredProjects.map((project: Project, idx: number) => {
          const span = getTileSpan(idx, filteredProjects.length);
          const imageSrc = project.thumbnailUrl || project.media?.[0]?.url;
          const displayTags = project.tags || project.technologies || [];
          const isLarge = span === 'col-8' || span === 'col-12';
          const live = project.liveUrl;

          return (
            <BentoTile
              key={project.id || idx}
              span={span}
              variant="default"
              padding="none"
              onClick={() => onOpenProjectModal?.(project.id)}
              className="group flex flex-col justify-between"
            >
              {/* Media Asset Preview */}
              {imageSrc ? (
                <div
                  className={`relative overflow-hidden bg-[#EEF1F5] dark:bg-[#222630] border-b border-[#E2E6ED] dark:border-[#2A2E39] ${
                    isLarge ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-video'
                  }`}
                >
                  <ImageWithFallback
                    src={imageSrc}
                    alt={project.title}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {project.category && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-black/85 backdrop-blur-xs text-[#171A1F] dark:text-[#F4F5F7] shadow-xs border border-black/5 dark:border-white/10">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {project.year && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 backdrop-blur-xs text-white shadow-xs flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 sm:p-8 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {project.category && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                        {project.category}
                      </span>
                    )}
                    {project.year && (
                      <span className="font-mono text-xs text-[#5F6672] dark:text-[#9DA5B4]">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Text & Content Block */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#171A1F] dark:text-[#F4F5F7] group-hover:text-[#3B82F6] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-[#EEF1F5] dark:bg-[#222630] text-[#171A1F] dark:text-[#F4F5F7] group-hover:bg-[#3B82F6] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {project.description && (
                    <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Tags & Action Links */}
                <div className="pt-4 border-t border-[#E2E6ED]/80 dark:border-[#2A2E39] flex flex-wrap items-center justify-between gap-3 mt-auto">
                  {displayTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {displayTags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#EEF1F5] dark:bg-[#222630] text-[#5F6672] dark:text-[#9DA5B4]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    className="flex items-center gap-2 text-xs font-semibold text-[#5F6672] dark:text-[#9DA5B4] ml-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-[#EEF1F5] dark:hover:bg-[#222630] hover:text-[#171A1F] dark:hover:text-[#F4F5F7] transition-colors"
                        aria-label={`Source repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-[#EEF1F5] dark:hover:bg-[#222630] hover:text-[#3B82F6] transition-colors"
                        aria-label={`Live site for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
