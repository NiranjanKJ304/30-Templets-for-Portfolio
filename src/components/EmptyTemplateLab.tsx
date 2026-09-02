/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EmptyTemplateLab - Editorial Aesthetic Development Workbench
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Sliders,
  Database,
  ExternalLink,
  Layers,
  Check,
  Eye,
  EyeOff,
  Code2,
} from 'lucide-react';
import type { PortfolioData } from '../core/types/portfolio';
import type { FixtureMeta } from '../core/fixtures';
import { FIXTURES } from '../core/fixtures';
import type { SectionId } from '../core/types/section';
import { ALL_SECTIONS_META } from '../core/types/section';
import { hasSectionData, isSectionVisible } from '../core/utils/sectionVisibility';
import { ImageWithFallback } from '../core/components/ImageWithFallback';
import { SocialLinks } from '../core/components/SocialLinks';
import { ResumeButton } from '../core/components/ResumeButton';
import { ProjectDetailModal } from '../core/components/ProjectDetailModal';
import { PLANNED_TEMPLATES } from './TemplateRoadmapModal';
import { cn } from '../core/utils/cn';

export interface EmptyTemplateLabProps {
  currentFixture: FixtureMeta;
  sectionsConfig: Record<SectionId, boolean>;
  onSelectFixture?: (id: string) => void;
  onToggleSection?: (id: SectionId) => void;
  onOpenSectionManager: () => void;
  onOpenRoadmap: () => void;
  onOpenDataInspector: () => void;
}

export const EmptyTemplateLab: React.FC<EmptyTemplateLabProps> = ({
  currentFixture,
  sectionsConfig,
  onSelectFixture,
  onToggleSection,
  onOpenSectionManager,
  onOpenRoadmap,
  onOpenDataInspector,
}) => {
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);
  const [accentColor, setAccentColor] = useState<string>('#1A1A1A');
  const [animationLevel, setAnimationLevel] = useState<'subtle' | 'medium' | 'fluid'>('subtle');

  const data = currentFixture.data;
  const activeProject = data.projects?.find((p) => p.id === activeModalProjectId) || null;

  const colorPresets = [
    { name: 'Carbon', hex: '#1A1A1A' },
    { name: 'Carmine', hex: '#E63946' },
    { name: 'Prussian', hex: '#457B9D' },
    { name: 'Celadon', hex: '#2A9D8F' },
  ];

  return (
    <div className="w-full flex-1 flex flex-col xl:flex-row overflow-hidden bg-[#F9F9F8] dark:bg-[#121212] text-[#1A1A1A] dark:text-neutral-100 min-h-[calc(100vh-64px)]">
      {/* ========================================================================= */}
      {/* LEFT ASIDE: REGISTRY & FIXTURES BROWSER (EDITORIAL SIDEBAR)               */}
      {/* ========================================================================= */}
      <aside className="w-full xl:w-64 border-b xl:border-b-0 xl:border-r border-[#1A1A1A]/10 dark:border-white/10 flex flex-col bg-white dark:bg-[#1A1A1A] shrink-0">
        {/* Registry Sub-Panel */}
        <div className="p-5 border-b border-[#1A1A1A]/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60 dark:text-white/60">
              Template Registry
            </h2>
            <button
              onClick={onOpenRoadmap}
              className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/70 dark:text-white/70 hover:underline font-semibold"
            >
              35+ Total
            </button>
          </div>

          <div className="space-y-1 max-h-48 xl:max-h-60 overflow-y-auto pr-1">
            {PLANNED_TEMPLATES.slice(0, 7).map((tpl, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={tpl.id}
                  onClick={onOpenRoadmap}
                  className={cn(
                    'flex items-center justify-between text-xs py-2 px-3 rounded-xs cursor-pointer transition-all',
                    isFirst
                      ? 'bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] font-semibold shadow-xs'
                      : 'hover:bg-[#F9F9F8] dark:hover:bg-[#262624] text-[#1A1A1A]/80 dark:text-neutral-300'
                  )}
                >
                  <span className="truncate">
                    {tpl.num} {tpl.name}
                  </span>
                  {isFirst ? (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[9px] uppercase tracking-wider opacity-80">Active Spec</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  ) : (
                    <span className="text-[10px] opacity-40 uppercase tracking-wider shrink-0">
                      {tpl.category}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Universal Fixtures List */}
        <div className="p-5 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60 dark:text-white/60">
              Universal Fixtures
            </h2>
            <span className="text-[9px] uppercase tracking-wider opacity-40 font-mono">
              6 Contracts
            </span>
          </div>

          <div className="space-y-3">
            {FIXTURES.map((fix) => {
              const isSelected = fix.id === currentFixture.id;
              return (
                <div
                  key={fix.id}
                  onClick={() => onSelectFixture && onSelectFixture(fix.id)}
                  className={cn(
                    'p-2.5 rounded-xs transition-all cursor-pointer border',
                    isSelected
                      ? 'border-emerald-500 bg-[#F9F9F8] dark:bg-[#222220] shadow-2xs border-l-3'
                      : 'border-[#1A1A1A]/5 dark:border-white/5 hover:border-[#1A1A1A]/20 dark:hover:border-white/20 bg-white dark:bg-[#1A1A1A] opacity-75 hover:opacity-100'
                  )}
                >
                  <div className="text-xs font-semibold pb-1 flex items-center justify-between">
                    <span className="text-[#1A1A1A] dark:text-white">{fix.name}</span>
                    <span className="text-[10px] font-normal opacity-50 italic uppercase tracking-wider font-mono">
                      {fix.density}
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-[#1A1A1A]/60 dark:text-neutral-400 line-clamp-2 mt-0.5">
                    {fix.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* CENTER STAGE: EDITORIAL SHEET PRESENTATION & ARCHITECTURE PREVIEW         */}
      {/* ========================================================================= */}
      <section className="flex-1 bg-[#EEEEEB] dark:bg-[#141413] p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-start relative overflow-y-auto bg-editorial-grid">
        {/* Subtle decorative background watermark */}
        <div className="w-full max-w-[620px] mb-4 flex items-center justify-between text-xs text-[#1A1A1A]/50 dark:text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="uppercase tracking-[0.2em] text-[10px] font-semibold">
              Live Contract Viewport
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-widest font-mono">
            {currentFixture.name} · {currentFixture.domain}
          </div>
        </div>

        {/* Floating Framed Editorial Presentation Card */}
        <div className="w-full max-w-[620px] bg-white dark:bg-[#1A1A1A] shadow-2xl relative flex flex-col border border-[#1A1A1A]/10 dark:border-white/10 rounded-xs overflow-hidden">
          {/* Inner Editorial Padding & Border Frame */}
          <div className="p-6 sm:p-10 border-[10px] border-white dark:border-[#1A1A1A] ring-1 ring-[#1A1A1A]/5 dark:ring-white/5 flex flex-col">
            {/* Editorial Header */}
            <header className="mb-8">
              <div
                className="w-12 h-[2px] mb-4 transition-colors"
                style={{ backgroundColor: accentColor }}
              />
              <h1 className="font-serif text-3xl sm:text-5xl leading-none mb-2 uppercase tracking-tight text-[#1A1A1A] dark:text-white">
                {data.profile.name}
              </h1>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#1A1A1A]/50 dark:text-white/50 font-medium">
                {data.profile.headline || 'Portfolio Showcase'}
              </p>
              {data.profile.location && (
                <p className="text-[10px] text-[#1A1A1A]/40 dark:text-white/40 mt-1 uppercase tracking-widest">
                  📍 {data.profile.location}
                </p>
              )}
            </header>

            {/* 2-Column Editorial Grid (Profile / Bio + Selected Work) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Left Column: Profile Bio */}
              <div>
                <h3 className="text-[9px] uppercase tracking-[0.25em] font-bold border-b border-[#1A1A1A]/10 dark:border-white/10 pb-1.5 mb-3 text-[#1A1A1A] dark:text-white flex items-center justify-between">
                  <span>Profile Overview</span>
                  {data.profile.pronouns && (
                    <span className="text-[9px] font-normal opacity-50 lowercase">
                      ({data.profile.pronouns})
                    </span>
                  )}
                </h3>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[#1A1A1A]/75 dark:text-neutral-300">
                  {data.profile.bio || data.profile.summary || 'Profile biography and summary description.'}
                </p>

                {/* Social links row */}
                {data.socials && data.socials.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#1A1A1A]/5 dark:border-white/5 flex items-center gap-2">
                    <SocialLinks socials={data.socials.slice(0, 4)} variant="minimal" iconSize={13} />
                  </div>
                )}
              </div>

              {/* Right Column: Selected Work List */}
              <div>
                <h3 className="text-[9px] uppercase tracking-[0.25em] font-bold border-b border-[#1A1A1A]/10 dark:border-white/10 pb-1.5 mb-3 text-[#1A1A1A] dark:text-white flex items-center justify-between">
                  <span>Selected Work</span>
                  <span className="text-[9px] font-normal opacity-40 font-mono">
                    {data.projects?.length || 0} ITEMS
                  </span>
                </h3>

                <div className="space-y-3">
                  {data.projects && data.projects.length > 0 ? (
                    data.projects.slice(0, 3).map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => setActiveModalProjectId(proj.id)}
                        className="group cursor-pointer text-[11px] p-1.5 rounded-xs hover:bg-[#F9F9F8] dark:hover:bg-[#242422] transition-colors"
                      >
                        <span className="font-bold block text-[#1A1A1A] dark:text-white group-hover:underline flex items-center justify-between">
                          <span className="truncate">{proj.title}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="opacity-50 italic uppercase text-[9px] tracking-wider font-mono">
                            {proj.category || 'Project'}
                          </span>
                          {proj.year && (
                            <>
                              <span className="opacity-30">·</span>
                              <span className="opacity-50 text-[9px] font-mono">{proj.year}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-[10px] italic opacity-40 py-2">
                      No project items available in this sparse fixture.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Media / Visual Asset Showcase Preview */}
            <div className="aspect-video w-full bg-[#F5F5F3] dark:bg-[#20201E] border border-[#1A1A1A]/10 dark:border-white/10 flex items-center justify-center overflow-hidden relative group rounded-xs">
              {data.projects && data.projects[0]?.thumbnailUrl ? (
                <ImageWithFallback
                  src={data.projects[0].thumbnailUrl}
                  alt={data.projects[0].title}
                  aspectRatioClass="aspect-video"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              ) : data.profile.avatarUrl ? (
                <div className="flex items-center gap-4 p-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-[#1A1A1A]/10 dark:border-white/10 shrink-0">
                    <ImageWithFallback
                      src={data.profile.avatarUrl}
                      alt={data.profile.name}
                      fallbackText={data.profile.name.charAt(0)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-white">
                      {data.profile.name}
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/60 dark:text-neutral-400 mt-0.5">
                      {data.profile.headline}
                    </p>
                    <div className="mt-2">
                      <ResumeButton resumeUrl={data.profile.resumeUrl} variant="outline" size="sm" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 dark:text-white/40 block font-semibold">
                    Universal Data Driven Frame
                  </span>
                  <p className="text-xs text-[#1A1A1A]/60 dark:text-neutral-400">
                    No fabricated assets · Adapts to active fixture
                  </p>
                </div>
              )}
            </div>

            {/* Quick action bar */}
            <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 dark:border-white/10 flex items-center justify-between text-xs">
              <ResumeButton resumeUrl={data.profile.resumeUrl} variant="solid" size="sm" />
              <button
                onClick={onOpenDataInspector}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#1A1A1A]/70 dark:text-white/70 hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Inspect JSON</span>
              </button>
            </div>
          </div>

          {/* Bottom High-Contrast Editorial Strip */}
          <div className="h-12 bg-[#1A1A1A] dark:bg-black text-white flex items-center justify-between px-6 sm:px-10 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-light">
            <span>Template: 01 MINIMAL</span>
            <span className="italic opacity-80">Universal Portfolio Data v1.0</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* RIGHT ASIDE: SECTION VISIBILITY & TEMPLATE CONFIG (EDITORIAL CONTROLS)    */}
      {/* ========================================================================= */}
      <aside className="w-full xl:w-72 border-t xl:border-t-0 xl:border-l border-[#1A1A1A]/10 dark:border-white/10 flex flex-col bg-white dark:bg-[#1A1A1A] shrink-0">
        {/* Section Visibility Manager */}
        <div className="p-5 border-b border-[#1A1A1A]/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60 dark:text-white/60">
              Section Visibility
            </h2>
            <button
              onClick={onOpenSectionManager}
              className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/70 dark:text-white/70 hover:underline font-semibold"
            >
              Manager
            </button>
          </div>

          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
            {ALL_SECTIONS_META.map((meta) => {
              const isEnabled = sectionsConfig[meta.id] !== false;
              const hasData = hasSectionData(meta.id, data);
              const willRender = isSectionVisible(meta.id, sectionsConfig, data);

              return (
                <div
                  key={meta.id}
                  className={cn(
                    'flex items-center justify-between text-xs py-1 transition-opacity',
                    !willRender && 'opacity-40'
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-[#1A1A1A] dark:text-white">{meta.label}</span>
                    {meta.isCore && (
                      <span className="text-[8px] uppercase tracking-wider px-1 bg-amber-100 text-amber-900 rounded-2xs font-bold">
                        Req
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onToggleSection && !meta.isCore && onToggleSection(meta.id)}
                    disabled={meta.isCore}
                    className={cn(
                      'w-8 h-4 rounded-full relative p-0.5 transition-colors cursor-pointer',
                      isEnabled ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700',
                      meta.isCore && 'cursor-not-allowed opacity-80'
                    )}
                    aria-label={`Toggle ${meta.label}`}
                  >
                    <div
                      className={cn(
                        'w-3 h-3 bg-white rounded-full transition-transform',
                        isEnabled ? 'ml-auto' : 'ml-0'
                      )}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Template Config Options */}
        <div className="p-5 flex-1 space-y-5">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60 dark:text-white/60">
            Template Config
          </h2>

          {/* Accent Color Palette */}
          <div>
            <label className="text-[10px] block text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-widest mb-2 font-medium">
              Accent Color
            </label>
            <div className="flex gap-2">
              {colorPresets.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setAccentColor(c.hex)}
                  style={{ backgroundColor: c.hex }}
                  className={cn(
                    'w-6 h-6 rounded-xs transition-all',
                    accentColor === c.hex
                      ? 'ring-2 ring-offset-2 ring-[#1A1A1A] dark:ring-white scale-110'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  )}
                  title={c.name}
                  aria-label={`Select ${c.name}`}
                />
              ))}
            </div>
          </div>

          {/* Typography Display */}
          <div>
            <label className="text-[10px] block text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-widest mb-2 font-medium">
              Typography Pairing
            </label>
            <div className="border border-[#1A1A1A]/10 dark:border-white/10 p-2.5 text-xs font-serif italic bg-[#F9F9F8] dark:bg-[#222220] text-[#1A1A1A] dark:text-white rounded-xs">
              Playfair Display / Plus Jakarta Sans
            </div>
          </div>

          {/* Animation Level */}
          <div>
            <label className="text-[10px] block text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-widest mb-2 font-medium">
              Animation Level
            </label>
            <div className="flex gap-1">
              <div
                onClick={() => setAnimationLevel('subtle')}
                className={cn(
                  'flex-1 h-1.5 rounded-2xs cursor-pointer transition-colors',
                  animationLevel === 'subtle' || animationLevel === 'medium' || animationLevel === 'fluid'
                    ? 'bg-[#1A1A1A] dark:bg-white'
                    : 'bg-neutral-200 dark:bg-neutral-800'
                )}
                title="Subtle"
              />
              <div
                onClick={() => setAnimationLevel('medium')}
                className={cn(
                  'flex-1 h-1.5 rounded-2xs cursor-pointer transition-colors',
                  animationLevel === 'medium' || animationLevel === 'fluid'
                    ? 'bg-[#1A1A1A] dark:bg-white'
                    : 'bg-neutral-200 dark:bg-neutral-800'
                )}
                title="Medium"
              />
              <div
                onClick={() => setAnimationLevel('fluid')}
                className={cn(
                  'flex-1 h-1.5 rounded-2xs cursor-pointer transition-colors',
                  animationLevel === 'fluid'
                    ? 'bg-[#1A1A1A] dark:bg-white'
                    : 'bg-neutral-200 dark:bg-neutral-800'
                )}
                title="Fluid"
              />
            </div>
            <div className="flex justify-between text-[8px] uppercase tracking-tighter mt-1.5 text-[#1A1A1A]/60 dark:text-white/60 font-mono">
              <span className={animationLevel === 'subtle' ? 'font-bold' : ''}>Subtle</span>
              <span className={animationLevel === 'medium' ? 'font-bold' : ''}>Medium</span>
              <span className={animationLevel === 'fluid' ? 'font-bold' : ''}>Fluid</span>
            </div>
          </div>
        </div>

        {/* Build Validation Footer */}
        <div className="p-5 bg-[#F9F9F8] dark:bg-[#20201E] border-t border-[#1A1A1A]/10 dark:border-white/10">
          <div className="flex items-center justify-between text-[10px] mb-2 font-mono">
            <span className="font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white">
              Build Validation
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">PASSING</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden rounded-full">
            <div className="h-full bg-emerald-500 w-full animate-pulse" />
          </div>
        </div>
      </aside>

      {/* Accessible Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeModalProjectId)}
        onClose={() => setActiveModalProjectId(null)}
      />
    </div>
  );
};
