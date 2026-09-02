/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoExperienceSection - Structured career milestone tiles
 */

import React from 'react';
import type { PortfolioData, Experience } from '../../../core/types/portfolio';
import { BentoTile } from '../components/BentoTile';
import { BentoSectionHeader } from '../components/BentoSectionHeader';
import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';

interface BentoExperienceSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BentoExperienceSection: React.FC<BentoExperienceSectionProps> = ({
  data,
  enabled = true,
}) => {
  const experiences = data.experience;

  if (!enabled || !experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="col-span-1 md:col-span-6 lg:col-span-12">
      <BentoSectionHeader
        label="// CAREER REGISTER"
        title="Professional Experience"
        subtitle="Chronological appointments, roles, and engineering milestones."
        icon={<BriefcaseBusiness className="w-4 h-4 text-[#3B82F6]" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 mt-4">
        {experiences.map((exp: Experience, idx: number) => {
          const isFeatured = idx === 0 && experiences.length > 2;
          const span = isFeatured ? 'col-12' : experiences.length === 1 ? 'col-12' : 'col-6';
          const dateStr = `${exp.startDate} — ${exp.current ? 'Present' : exp.endDate || 'Present'}`;

          return (
            <BentoTile
              key={exp.id || idx}
              span={span}
              variant="default"
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#3B82F6] dark:text-blue-400 uppercase">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs text-[#5F6672] dark:text-[#9DA5B4]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{dateStr}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#171A1F] dark:text-[#F4F5F7] tracking-tight mb-2">
                  {exp.role}
                </h3>

                {exp.location && (
                  <div className="flex items-center gap-1 text-xs text-[#5F6672] dark:text-[#9DA5B4] mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                )}

                {/* Description */}
                {exp.description && (
                  <p className="font-sans text-sm text-[#5F6672] dark:text-[#9DA5B4] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                )}

                {/* Canonical Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#E2E6ED] dark:border-[#2A2E39]">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8E95A3] mb-2">
                      KEY DELIVERABLES & MILESTONES:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#171A1F]/80 dark:text-[#F4F5F7]/80">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </BentoTile>
          );
        })}
      </div>
    </section>
  );
};
