/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialWorkSection - Magazine feature story spreads and project chronicles
 */

import React, { useState } from 'react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { EditorialSectionHeader } from '../components/EditorialSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ArrowUpRight, Github, ExternalLink, Calendar } from 'lucide-react';

interface EditorialWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const EditorialWorkSection: React.FC<EditorialWorkSectionProps> = ({
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
  const categories = [
    'all',
    ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[],
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="pt-12 sm:pt-16 pb-12 border-b border-[#171717]/15 dark:border-[#F5F2EA]/15">
      <EditorialSectionHeader
        index="02"
        title="Selected Works"
        subtitle="Catalog of engineered systems, creative studies, and case records."
        count={projects.length}
        action={
          categories.length > 2 ? (
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#171717] text-[#FFFDF8] dark:bg-[#F5F2EA] dark:text-[#111111] font-bold'
                      : 'text-[#68655F] dark:text-[#B8B3AA] hover:text-[#171717] dark:hover:text-[#F5F2EA]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : undefined
        }
      />

      <div className="space-y-16 sm:space-y-24 mt-8">
        {filteredProjects.map((project: Project, idx: number) => {
          const imageSrc = project.thumbnailUrl || project.media?.[0]?.url;
          const displayTags = project.tags || project.technologies || [];
          const isEven = idx % 2 === 0;
          const storyIndex = idx < 9 ? `FIG. 0${idx + 1}` : `FIG. ${idx + 1}`;

          return (
            <article
              key={project.id || idx}
              className="group pt-8 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 first:border-t-0 first:pt-0"
            >
              {/* Feature Story Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Image Spread (Asymmetric toggle for rhythmic editorial flow) */}
                {imageSrc && (
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } cursor-pointer`}
                    onClick={() => onOpenProjectModal?.(project.id)}
                  >
                    <div className="relative p-2 sm:p-3 bg-[#FFFDF8] dark:bg-[#191817] border border-[#171717]/15 dark:border-[#F5F2EA]/15 shadow-xs">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#F0ECE1] dark:bg-[#222]">
                        <ImageWithFallback
                          src={imageSrc}
                          alt={project.title}
                          aspectRatioClass="w-full h-full"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                      </div>

                      {/* Editorial Caption Under Image */}
                      <div className="pt-2 px-1 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74]">
                        <span>{storyIndex} // {project.category || 'PROJECT CASE STUDY'}</span>
                        {project.year && <span>EDITION {project.year}</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Narrative & Details Spread */}
                <div
                  className={`${
                    imageSrc
                      ? isEven
                        ? 'lg:col-span-5 lg:order-2'
                        : 'lg:col-span-5 lg:order-1'
                      : 'lg:col-span-12'
                  } flex flex-col justify-between`}
                >
                  <div>
                    {/* Publication Header */}
                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#918D85] dark:text-[#817C74] mb-3">
                      {project.category && (
                        <span className="text-[#B42318] dark:text-[#F06A5F] font-bold">
                          {project.category}
                        </span>
                      )}
                      {project.year && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Headline */}
                    <h3
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F5F2EA] font-normal tracking-tight group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors cursor-pointer mb-4"
                      onClick={() => onOpenProjectModal?.(project.id)}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    {project.description && (
                      <p className="font-sans text-sm sm:text-base text-[#68655F] dark:text-[#B8B3AA] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    )}

                    {/* Tags */}
                    {displayTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {displayTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#171717]/15 dark:border-[#F5F2EA]/15 text-[#68655F] dark:text-[#B8B3AA] bg-[#F7F5EF] dark:bg-[#111111]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-[#171717]/10 dark:border-[#F5F2EA]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
                    <button
                      type="button"
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="inline-flex items-center gap-1 text-[#171717] dark:text-[#F5F2EA] hover:text-[#B42318] dark:hover:text-[#F06A5F] font-bold transition-colors cursor-pointer"
                    >
                      <span>EXAMINE CASE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3 text-[#68655F] dark:text-[#B8B3AA]">
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#171717] dark:hover:text-[#F5F2EA] transition-colors p-1"
                          aria-label={`Source repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#B42318] dark:hover:text-[#F06A5F] transition-colors p-1"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
