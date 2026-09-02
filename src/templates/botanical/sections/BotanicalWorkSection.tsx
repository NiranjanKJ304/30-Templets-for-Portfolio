/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalWorkSection - Organic gallery showcase with case study modal trigger
 */

import React, { useState } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface BotanicalWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenProjectModal?: (projectId: string) => void;
}

export const BotanicalWorkSection: React.FC<BotanicalWorkSectionProps> = ({
  data,
  enabled = true,
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  if (!enabled || !data.projects || data.projects.length === 0) return null;

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(data.projects.map((p) => p.category).filter((c): c is string => Boolean(c))))];

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="py-20 md:py-28 border-b border-[#D8D4C8] dark:border-[#2C3E30] bg-[#F6F5F0] dark:bg-[#101712] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#BF6648] dark:text-[#E58A6C] block mb-2">
              04 / Portfolio & Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C261E] dark:text-[#F0F5F1] font-normal">
              Featured Harvests
            </h2>
          </div>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-serif capitalize transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[#243828] dark:bg-[#EBF2EC] text-[#F6F5F0] dark:text-[#101712] shadow-xs'
                      : 'bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] text-[#586359] dark:text-[#9BB0A0] hover:text-[#1C261E] dark:hover:text-[#F0F5F1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const displayImage = project.coverImage || project.media?.[0]?.url || (project as { imageUrl?: string }).imageUrl;
            const displayTags = project.tags || project.technologies || [];

            return (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal?.(project.id)}
                className="group cursor-pointer rounded-3xl bg-[#FFFFFF] dark:bg-[#18221B] border border-[#D8D4C8] dark:border-[#2C3E30] overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Media image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#EBE9DF] dark:bg-[#202E24]">
                  {displayImage ? (
                    <img
                      src={displayImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-3xl text-[#586359] dark:text-[#9BB0A0] opacity-40">
                      {project.title}
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.category && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#FFFFFF]/90 dark:bg-[#18221B]/90 backdrop-blur-md text-[#243828] dark:text-[#8EB697] border border-[#D8D4C8]/50 dark:border-[#2C3E30]/50 shadow-2xs">
                        {project.category}
                      </span>
                    )}
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#BF6648] text-white flex items-center gap-1 shadow-2xs">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Text content */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-serif text-2xl text-[#1C261E] dark:text-[#F0F5F1] font-medium group-hover:text-[#BF6648] dark:group-hover:text-[#E58A6C] transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-sm text-[#586359] dark:text-[#9BB0A0] line-clamp-3 leading-relaxed mb-6 font-sans">
                      {project.summary || project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  {displayTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D8D4C8]/60 dark:border-[#2C3E30]/60">
                      {displayTags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F6F5F0] dark:bg-[#202E24] text-[#586359] dark:text-[#9BB0A0]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
