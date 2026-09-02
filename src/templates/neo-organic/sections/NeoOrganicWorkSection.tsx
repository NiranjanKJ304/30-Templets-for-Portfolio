/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicWorkSection - Flowing organic project gallery
 */

import React, { useState } from 'react';
import type { PortfolioData, Project } from '../../../core/types/portfolio';
import { NeoOrganicSectionHeader } from '../components/NeoOrganicSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';

interface NeoOrganicWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const NeoOrganicWorkSection: React.FC<NeoOrganicWorkSectionProps> = ({
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
    <section id="work" className="py-12 sm:py-16">
      <NeoOrganicSectionHeader
        title="Selected Work"
        subtitle="Explorations, shipped applications, and technological systems."
        count={projects.length}
        accentColor="orange"
      />

      {/* Category Pills Filter */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as string)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#E58B5B] text-white shadow-xs'
                    : 'bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/10 dark:border-[#F2F3ED]/10 text-[#59635C] dark:text-[#B8C0B8] hover:border-[#E58B5B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Flowing Project Cards */}
      <div className="space-y-8 sm:space-y-12">
        {filteredProjects.map((project: Project, index: number) => {
          const imageSrc = project.thumbnailUrl || (project.media && project.media[0]?.url);
          const hasImage = Boolean(imageSrc);
          const isLead = index === 0 && filteredProjects.length > 1;
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id || index}
              className={`rounded-3xl bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/8 dark:border-[#F2F3ED]/8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                isLead ? 'p-6 sm:p-10' : 'p-6 sm:p-8'
              }`}
            >
              <div
                className={`grid grid-cols-1 ${
                  hasImage ? 'lg:grid-cols-12 gap-8 lg:gap-10 items-center' : 'gap-6'
                }`}
              >
                {/* Visual Column (if image exists) */}
                {hasImage && (
                  <div
                    onClick={() => onOpenProjectModal?.(project.id)}
                    className={`${
                      isLead
                        ? 'lg:col-span-7'
                        : isEven
                        ? 'lg:col-span-6 lg:order-1'
                        : 'lg:col-span-6 lg:order-2'
                    } cursor-pointer group`}
                  >
                    <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F6F5EF] dark:bg-[#111713] border border-[#17211B]/6 dark:border-[#F2F3ED]/6 shadow-xs">
                      <ImageWithFallback
                        src={imageSrc!}
                        alt={project.title}
                        aspectRatioClass="w-full h-full"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                )}

                {/* Details Column */}
                <div
                  className={`${
                    hasImage
                      ? isLead
                        ? 'lg:col-span-5'
                        : isEven
                        ? 'lg:col-span-6 lg:order-2'
                        : 'lg:col-span-6 lg:order-1'
                      : 'w-full'
                  } space-y-4`}
                >
                  {/* Meta pill badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.category && (
                      <span className="px-3 py-1 rounded-full bg-[#D9E7D0]/60 dark:bg-[#111713] text-[#17211B] dark:text-[#F2F3ED] text-xs font-medium">
                        {project.category}
                      </span>
                    )}

                    {project.year && (
                      <span className="text-xs text-[#8A938C] dark:text-[#7F897F] font-mono">
                        {project.year}
                      </span>
                    )}

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E58B5B]/15 text-[#E58B5B] dark:text-[#F0A078] text-[11px] font-semibold">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      onClick={() => onOpenProjectModal?.(project.id)}
                      className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17211B] dark:text-[#F2F3ED] hover:text-[#4169E1] dark:hover:text-[#7F9CFF] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm sm:text-base text-[#59635C] dark:text-[#B8C0B8] font-normal mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  {project.description && (
                    <p className="text-sm sm:text-base text-[#59635C] dark:text-[#B8C0B8] font-light leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {/* Technology Pills */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-xl bg-[#F6F5EF] dark:bg-[#111713] border border-[#17211B]/6 dark:border-[#F2F3ED]/6 text-xs text-[#59635C] dark:text-[#B8C0B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {onOpenProjectModal && (
                      <button
                        onClick={() => onOpenProjectModal(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4169E1] text-white hover:bg-[#3354B8] text-xs font-medium shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span>Case Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/15 dark:border-[#F2F3ED]/15 text-[#17211B] dark:text-[#F2F3ED] hover:border-[#4169E1] dark:hover:border-[#7F9CFF] text-xs font-medium transition-all"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFFFF] dark:bg-[#1B211D] border border-[#17211B]/15 dark:border-[#F2F3ED]/15 text-[#59635C] dark:text-[#B8C0B8] hover:text-[#17211B] dark:hover:text-[#F2F3ED] text-xs font-medium transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
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
    </section>
  );
};
