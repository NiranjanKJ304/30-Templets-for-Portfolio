/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistWorkSection - Unconventional project catalogue & structural showcase
 */

import React, { useState } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { BrutalistSectionHeader } from '../components/BrutalistSectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface BrutalistWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const BrutalistWorkSection: React.FC<BrutalistWorkSectionProps> = ({
  data,
  enabled = true,
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  if (!enabled || !data.projects || data.projects.length === 0) return null;

  const categories = ['all', ...Array.from(new Set(data.projects.map((p) => p.category).filter((c): c is string => Boolean(c))))];

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="py-16 md:py-24 border-b-3 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <BrutalistSectionHeader
          index="04"
          title="Selected Works"
          subtitle="PROJECT CATALOGUE & DEPLOYED ARTIFACTS"
        />

        {/* Filter Bar */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-2 border-[#111111] dark:border-[#F4F1E8] ${
                  activeFilter === cat
                    ? 'bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] shadow-[3px_3px_0px_0px_#2563EB]'
                    : 'bg-[#FFFFFF] dark:bg-[#191919] text-[#111111] dark:text-[#F4F1E8] hover:bg-[#EAE6DA] dark:hover:bg-[#252525]'
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid / Stack */}
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, idx) => {
            const displayImage = project.thumbnailUrl || project.media?.[0]?.url;
            const displayTags = project.tags || project.technologies || [];
            const isEven = idx % 2 === 0;
            const displayDate = project.year || (project.startDate ? `${project.startDate}${project.endDate ? ` — ${project.endDate}` : ''}` : undefined);

            return (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal?.(project.id)}
                className="group cursor-pointer bg-[#FFFFFF] dark:bg-[#191919] border-3 border-[#111111] dark:border-[#F4F1E8] shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#F4F1E8] hover:shadow-[10px_10px_0px_0px_#2563EB] transition-all p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Media column (if image exists) */}
                  {displayImage ? (
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative border-2 border-[#111111] dark:border-[#F4F1E8] bg-[#111111] overflow-hidden aspect-16/10">
                        <img
                          src={displayImage}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {project.featured && (
                          <div className="absolute top-2 left-2 bg-[#EF4444] text-white font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-[#111111]">
                            FEATURED_SPEC
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {/* Information column */}
                  <div className={displayImage ? `lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}` : 'lg:col-span-12'}>
                    <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b-2 border-[#111111] dark:border-[#F4F1E8]">
                      <span className="font-mono text-xs font-black text-[#2563EB]">
                        // PROJECT_{String(idx + 1).padStart(2, '0')}
                      </span>
                      {project.category && (
                        <span className="font-mono text-[11px] uppercase font-bold px-2 py-0.5 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] group-hover:text-[#2563EB] transition-colors mb-4">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="font-sans text-sm sm:text-base text-[#444444] dark:text-[#CCCCCC] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    )}

                    {/* Tags */}
                    {displayTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {displayTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] uppercase font-bold px-2 py-1 bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 border-t-2 border-[#111111] dark:border-[#F4F1E8] flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-[#111111] dark:text-[#F4F1E8] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        <span>OPEN SPECIFICATION</span>
                        <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
                      </span>
                      {displayDate && (
                        <span className="font-mono text-[11px] text-[#777777] dark:text-[#A0A0A0]">
                          {displayDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
