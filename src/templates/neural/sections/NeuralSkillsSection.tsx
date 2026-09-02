/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralSkillsSection - Futuristic categorized competency nodes
 */

import React from 'react';
import type { PortfolioData, SkillItem } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { NeuralSectionHeader } from '../components/NeuralSectionHeader';
import { hasSectionData } from '../../../core/utils/sectionVisibility';

export interface NeuralSkillsSectionProps {
  data: PortfolioData;
  enabled: boolean;
  indexStr?: string;
}

export const NeuralSkillsSection: React.FC<NeuralSkillsSectionProps> = ({
  data,
  enabled,
  indexStr = '03',
}) => {
  const { skills } = data;
  const hasData = hasSectionData('skills', data);

  if (!enabled || !hasData || !skills || skills.length === 0) return null;

  return (
    <SectionWrapper
      id="skills"
      enabled={enabled}
      hasData={hasData}
      className="py-20 sm:py-28"
      containerClassName="max-w-6xl"
    >
      <NeuralSectionHeader
        index={indexStr}
        title="Core Competencies & Capabilities"
        subtitle="Categorized domain expertise, methodologies, and specialized proficiencies."
        count={skills.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, groupIdx) => (
          <article
            key={groupIdx}
            className="p-6 sm:p-8 bg-white/70 dark:bg-[#0F1117]/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 space-y-6 hover:border-cyan-500/40 transition-colors relative"
          >
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                <span>DOMAIN // {String(groupIdx + 1).padStart(2, '0')}</span>
                <span>+</span>
              </div>
              <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
                {group.category}
              </h3>
              {group.description && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                  {group.description}
                </p>
              )}
            </div>

            {/* Skill Nodes Array */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, idx) => {
                const isObj = typeof skill === 'object' && skill !== null;
                const name = isObj ? (skill as SkillItem).name : (skill as string);
                const level = isObj ? (skill as SkillItem).level : undefined;

                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-cyan-500/60 hover:text-cyan-500 transition-colors"
                  >
                    <span className="w-1 h-1 bg-cyan-500" />
                    <span>{name}</span>
                    {level && (
                      <span className="text-[10px] text-cyan-600 dark:text-cyan-400 opacity-80 uppercase">
                        [{String(level)}]
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
