/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirWorkSection - Curated Project Campaign Archive for Magazine Noir
 */

import React, { useState } from 'react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { NoirSectionHeader } from '../components/NoirSectionHeader';
import { NoirFigure } from '../components/NoirFigure';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';

interface NoirWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const NoirWorkSection: React.FC<NoirWorkSectionProps> = ({
  data,
  enabled = true,
  onOpenProjectModal,
}) => {
  const projects = data.projects;
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  if (!enabled || !projects || projects.length === 0) {
    return null;
  }

  // Extract unique categories
  const categories = ['ALL', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
      <NoirSectionHeader
        index="02"
        title="Selected Works"
        subtitle="Visual campaigns, architectural case studies, and engineering deliverables."
        count={projects.length}
      />

      {/* Category Filter Pills */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2 mb-12 sm:mb-16 pb-4 border-b border-[#171717]/10 dark:border-[#F4F1EA]/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] mr-2">
            INDEX FILTER:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as string)}
                className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-bold shadow-xs'
                    : 'bg-[#FBFAF7] dark:bg-[#171717] text-[#68645D] dark:text-[#B8B2A8] border border-[#171717]/10 dark:border-[#F4F1EA]/10 hover:border-[#8B5E3C] dark:hover:border-[#C49A6C]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Dynamic Project Spreads Container */}
      <div className="space-y-20 sm:space-y-28 lg:space-y-36">
        {filteredProjects.map((project: Project, index: number) => {
          const projectNum = index < 9 ? `0${index + 1}` : `${index + 1}`;
          const isEven = index % 2 === 0;
          const imageSrc = project.thumbnailUrl || (project.media && project.media[0]?.url);
          const hasImage = Boolean(imageSrc);

          // Alternating rhythmic compositions
          const isFullWidthLead = index === 0;
          const isVerticalFeature = index % 3 === 1;

          return (
            <article
              key={project.id || index}
              className="group relative border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
            >
              {/* Top Project Folio Bar */}
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 mb-6 sm:mb-8 font-mono text-xs text-[#99938A] dark:text-[#777168] border-b border-[#171717]/5 dark:border-[#F4F1EA]/5">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#8B5E3C] dark:text-[#C49A6C]">
                    PROJECT {projectNum}
                  </span>
                  {project.category && (
                    <>
                      <span>/</span>
                      <span className="uppercase text-[#171717] dark:text-[#F4F1EA] font-medium">
                        {project.category}
                      </span>
                    </>
                  )}
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-[#8B5E3C]/10 text-[#8B5E3C] dark:bg-[#C49A6C]/20 dark:text-[#C49A6C] text-[9px] uppercase font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                {project.year && (
                  <span className="text-[#68645D] dark:text-[#B8B2A8]">
                    DATE: {project.year}
                  </span>
                )}
              </div>

              {/* Case 1: Full-Width Lead Project */}
              {isFullWidthLead && hasImage ? (
                <div className="space-y-8">
                  <div
                    onClick={() => onOpenProjectModal?.(project.id)}
                    className="cursor-pointer"
                  >
                    <NoirFigure
                      src={imageSrc}
                      alt={project.title}
                      aspectRatio="wide"
                      captionYear={project.year}
                      captionCategory={project.category}
                      captionMeta={project.technologies?.slice(0, 3).join(', ')}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <h3
                        onClick={() => onOpenProjectModal?.(project.id)}
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors cursor-pointer mb-4"
                      >
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="font-serif italic text-lg sm:text-xl text-[#68645D] dark:text-[#B8B2A8] mb-4">
                          {project.subtitle}
                        </p>
                      )}

                      {project.description && (
                        <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#99938A] dark:text-[#777168] block mb-2">
                            SYSTEM CAPABILITIES:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-1 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 font-mono text-[10px] uppercase text-[#171717] dark:text-[#F4F1EA]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10">
                        {onOpenProjectModal && (
                          <button
                            onClick={() => onOpenProjectModal(project.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-mono text-xs uppercase tracking-widest hover:bg-[#8B5E3C] dark:hover:bg-[#C49A6C] dark:hover:text-white transition-colors cursor-pointer"
                          >
                            <span>VIEW DOSSIER</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717]/20 dark:border-[#F4F1EA]/20 font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                          >
                            <span>LIVE DISPATCH</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717]/20 dark:border-[#F4F1EA]/20 font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            <span>CODE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : hasImage ? (
                /* Case 2: Asymmetric Editorial Split */
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div
                    onClick={() => onOpenProjectModal?.(project.id)}
                    className={`cursor-pointer ${
                      isEven
                        ? 'lg:col-span-7 lg:order-1'
                        : 'lg:col-span-7 lg:order-2'
                    }`}
                  >
                    <NoirFigure
                      src={imageSrc}
                      alt={project.title}
                      aspectRatio={isVerticalFeature ? 'portrait' : 'landscape'}
                      captionYear={project.year}
                      captionCategory={project.category}
                      captionMeta={project.technologies?.slice(0, 3).join(', ')}
                    />
                  </div>

                  {/* Text Column */}
                  <div
                    className={`${
                      isEven
                        ? 'lg:col-span-5 lg:order-2'
                        : 'lg:col-span-5 lg:order-1'
                    } flex flex-col justify-center`}
                  >
                    <h3
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors cursor-pointer mb-3"
                    >
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="font-serif italic text-base sm:text-lg text-[#68645D] dark:text-[#B8B2A8] mb-4">
                        {project.subtitle}
                      </p>
                    )}

                    {project.description && (
                      <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 font-mono text-[10px] uppercase text-[#171717] dark:text-[#F4F1EA]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10">
                      {onOpenProjectModal && (
                        <button
                          onClick={() => onOpenProjectModal(project.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-mono text-xs uppercase tracking-widest hover:bg-[#8B5E3C] dark:hover:bg-[#C49A6C] dark:hover:text-white transition-colors cursor-pointer"
                        >
                          <span>CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717]/20 dark:border-[#F4F1EA]/20 font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                        >
                          <span>VISIT</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#171717]/20 dark:border-[#F4F1EA]/20 font-mono text-xs uppercase tracking-widest text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          <span>SOURCE</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Case 3: Typography-Led Project (Without Image) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 bg-[#FBFAF7] dark:bg-[#171717] border border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs">
                  <div className="lg:col-span-8">
                    <h3
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F4F1EA] font-normal tracking-tight hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors cursor-pointer mb-3"
                    >
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="font-serif italic text-base sm:text-lg text-[#68645D] dark:text-[#B8B2A8] mb-4">
                        {project.subtitle}
                      </p>
                    )}

                    {project.description && (
                      <p className="font-sans text-sm sm:text-base text-[#68645D] dark:text-[#B8B2A8] font-light leading-relaxed mb-6 max-w-3xl">
                        {project.description}
                      </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#F4F1EA] dark:bg-[#0D0D0D] border border-[#171717]/10 dark:border-[#F4F1EA]/10 font-mono text-[10px] uppercase text-[#171717] dark:text-[#F4F1EA]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end space-y-4">
                    {onOpenProjectModal && (
                      <button
                        onClick={() => onOpenProjectModal(project.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-[#FBFAF7] dark:bg-[#F4F1EA] dark:text-[#0D0D0D] font-mono text-xs uppercase tracking-widest hover:bg-[#8B5E3C] dark:hover:bg-[#C49A6C] dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <span>READ ARCHIVE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase text-[#8B5E3C] dark:text-[#C49A6C] hover:underline inline-flex items-center gap-1"
                        >
                          <span>LIVE</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase text-[#8B5E3C] dark:text-[#C49A6C] hover:underline inline-flex items-center gap-1"
                        >
                          <span>CODE</span>
                          <Github className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
