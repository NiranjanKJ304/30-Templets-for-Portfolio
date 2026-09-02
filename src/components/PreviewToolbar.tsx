/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * PreviewToolbar - Top navigation & workbench controls for Portfolio Template Lab
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Layout,
  UserCheck,
  Sliders,
  Sun,
  Moon,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Code2,
  ChevronDown,
  Check,
  Sparkles,
} from 'lucide-react';
import type { TemplateDefinition } from '../core/types/template';
import type { FixtureMeta } from '../core/fixtures';
import { cn } from '../core/utils/cn';

export type ViewportMode = 'full' | 'desktop' | 'tablet' | 'mobile' | 'mobile-sm';

export interface PreviewToolbarProps {
  templates: TemplateDefinition[];
  selectedTemplateId: string;
  onSelectTemplate: (id: string) => void;
  fixtures: FixtureMeta[];
  selectedFixtureId: string;
  onSelectFixture: (id: string) => void;
  viewport: ViewportMode;
  onSelectViewport: (mode: ViewportMode) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSectionManager: () => void;
  onOpenDataInspector: () => void;
  onOpenRoadmap: () => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({
  templates,
  selectedTemplateId,
  onSelectTemplate,
  fixtures,
  selectedFixtureId,
  onSelectFixture,
  viewport,
  onSelectViewport,
  isDarkMode,
  onToggleDarkMode,
  onOpenSectionManager,
  onOpenDataInspector,
  onOpenRoadmap,
}) => {
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);
  const [isFixtureMenuOpen, setIsFixtureMenuOpen] = useState(false);

  const templateMenuRef = useRef<HTMLDivElement>(null);
  const fixtureMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        templateMenuRef.current &&
        !templateMenuRef.current.contains(event.target as Node)
      ) {
        setIsTemplateMenuOpen(false);
      }
      if (
        fixtureMenuRef.current &&
        !fixtureMenuRef.current.contains(event.target as Node)
      ) {
        setIsFixtureMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTemplateMenuOpen(false);
        setIsFixtureMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const activeTemplate = templates.find((t) => t.config.id === selectedTemplateId);
  const activeFixture = fixtures.find((f) => f.id === selectedFixtureId);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1A1A1A]/10 dark:border-white/10 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand & Project Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-serif italic text-xl sm:text-2xl tracking-tight text-[#1A1A1A] dark:text-white">
            Template Lab
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] px-2 py-0.5 rounded-xs font-mono font-medium">
            v.0.1.0
          </span>
        </div>

        {/* Primary Controls: Custom Template & Fixture Dropdowns */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xl">
          {/* Custom Template Selector Dropdown */}
          <div className="relative flex-1 min-w-[140px] sm:min-w-[190px]" ref={templateMenuRef}>
            <button
              type="button"
              id="template-selector-btn"
              onClick={() => {
                setIsTemplateMenuOpen((prev) => !prev);
                setIsFixtureMenuOpen(false);
              }}
              className="w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-xs border border-[#1A1A1A]/15 dark:border-white/20 bg-[#F9F9F8] dark:bg-[#222220] hover:bg-white dark:hover:bg-[#2A2A28] text-xs font-medium text-[#1A1A1A] dark:text-white shadow-2xs transition-colors cursor-pointer text-left"
              aria-expanded={isTemplateMenuOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-2 truncate">
                <Layout className="w-3.5 h-3.5 text-[#1A1A1A]/60 dark:text-white/60 shrink-0" />
                <span className="truncate font-semibold">
                  {activeTemplate ? activeTemplate.config.name : 'Select Template'}
                </span>
                {activeTemplate && (
                  <span className="hidden sm:inline text-[10px] font-mono text-[#1A1A1A]/50 dark:text-white/50 px-1 py-0.2 bg-[#1A1A1A]/5 dark:bg-white/10 rounded-2xs uppercase">
                    {activeTemplate.config.category}
                  </span>
                )}
              </div>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 text-[#1A1A1A]/50 dark:text-white/50 shrink-0 transition-transform duration-200',
                  isTemplateMenuOpen && 'rotate-180 text-[#1A1A1A] dark:text-white'
                )}
              />
            </button>

            {/* Template Options Menu */}
            {isTemplateMenuOpen && (
              <div
                id="template-dropdown-list"
                className="absolute top-full left-0 mt-1.5 w-72 max-h-96 overflow-y-auto bg-white dark:bg-[#1E1E1C] border border-[#1A1A1A]/15 dark:border-white/15 rounded-xs shadow-xl z-50 py-1.5 divide-y divide-[#1A1A1A]/5 dark:divide-white/5 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 dark:text-white/40 flex items-center justify-between">
                  <span>Available Templates ({templates.length})</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">All Validated</span>
                </div>
                <div className="py-1">
                  {templates.map((tpl, idx) => {
                    const isSelected = tpl.config.id === selectedTemplateId;
                    const numString = String(idx + 1).padStart(2, '0');
                    return (
                      <button
                        key={tpl.config.id}
                        type="button"
                        id={`template-option-${tpl.config.id}`}
                        onClick={() => {
                          onSelectTemplate(tpl.config.id);
                          setIsTemplateMenuOpen(false);
                        }}
                        className={cn(
                          'w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors cursor-pointer group',
                          isSelected
                            ? 'bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] font-semibold'
                            : 'text-[#1A1A1A] dark:text-neutral-200 hover:bg-[#F3F3F0] dark:hover:bg-[#2A2A28]'
                        )}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className={cn(
                              'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-2xs',
                              isSelected
                                ? 'bg-white/20 text-white dark:bg-black/15 dark:text-[#1A1A1A]'
                                : 'bg-[#EEEEEB] dark:bg-[#2F2F2C] text-[#1A1A1A]/70 dark:text-neutral-300'
                            )}
                          >
                            {numString}
                          </span>
                          <div className="flex flex-col truncate">
                            <span className="truncate font-medium">{tpl.config.name}</span>
                            <span
                              className={cn(
                                'text-[10px] font-mono uppercase tracking-tight',
                                isSelected
                                  ? 'text-white/70 dark:text-black/60'
                                  : 'text-[#1A1A1A]/45 dark:text-neutral-400'
                              )}
                            >
                              {tpl.config.category} • {tpl.config.styles.slice(0, 2).join(', ')}
                            </span>
                          </div>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 shrink-0 text-white dark:text-[#1A1A1A]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Custom Fixture Selector Dropdown */}
          <div className="relative flex-1 min-w-[140px] sm:min-w-[180px]" ref={fixtureMenuRef}>
            <button
              type="button"
              id="fixture-selector-btn"
              onClick={() => {
                setIsFixtureMenuOpen((prev) => !prev);
                setIsTemplateMenuOpen(false);
              }}
              className="w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-xs border border-[#1A1A1A]/15 dark:border-white/20 bg-[#F9F9F8] dark:bg-[#222220] hover:bg-white dark:hover:bg-[#2A2A28] text-xs font-medium text-[#1A1A1A] dark:text-white shadow-2xs transition-colors cursor-pointer text-left"
              aria-expanded={isFixtureMenuOpen}
              aria-haspopup="listbox"
            >
              <div className="flex items-center gap-2 truncate">
                <UserCheck className="w-3.5 h-3.5 text-[#1A1A1A]/60 dark:text-white/60 shrink-0" />
                <span className="truncate font-semibold">
                  {activeFixture ? activeFixture.name : 'Select Profile'}
                </span>
                {activeFixture && (
                  <span className="hidden sm:inline text-[10px] font-mono text-[#1A1A1A]/50 dark:text-white/50 px-1 py-0.2 bg-[#1A1A1A]/5 dark:bg-white/10 rounded-2xs capitalize">
                    {activeFixture.domain}
                  </span>
                )}
              </div>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 text-[#1A1A1A]/50 dark:text-white/50 shrink-0 transition-transform duration-200',
                  isFixtureMenuOpen && 'rotate-180 text-[#1A1A1A] dark:text-white'
                )}
              />
            </button>

            {/* Fixture Options Menu */}
            {isFixtureMenuOpen && (
              <div
                id="fixture-dropdown-list"
                className="absolute top-full left-0 mt-1.5 w-72 max-h-96 overflow-y-auto bg-white dark:bg-[#1E1E1C] border border-[#1A1A1A]/15 dark:border-white/15 rounded-xs shadow-xl z-50 py-1.5 divide-y divide-[#1A1A1A]/5 dark:divide-white/5 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 dark:text-white/40">
                  Universal Fixture Data ({fixtures.length})
                </div>
                <div className="py-1">
                  {fixtures.map((fix) => {
                    const isSelected = fix.id === selectedFixtureId;
                    return (
                      <button
                        key={fix.id}
                        type="button"
                        id={`fixture-option-${fix.id}`}
                        onClick={() => {
                          onSelectFixture(fix.id);
                          setIsFixtureMenuOpen(false);
                        }}
                        className={cn(
                          'w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors cursor-pointer group',
                          isSelected
                            ? 'bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] font-semibold'
                            : 'text-[#1A1A1A] dark:text-neutral-200 hover:bg-[#F3F3F0] dark:hover:bg-[#2A2A28]'
                        )}
                      >
                        <div className="flex flex-col truncate">
                          <span className="truncate font-medium">{fix.name}</span>
                          <span
                            className={cn(
                              'text-[10px] font-mono capitalize',
                              isSelected
                                ? 'text-white/70 dark:text-black/60'
                                : 'text-[#1A1A1A]/45 dark:text-neutral-400'
                            )}
                          >
                            {fix.domain} • {fix.data.profile.title || fix.data.profile.role}
                          </span>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 shrink-0 text-white dark:text-[#1A1A1A]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Status & Tools Group */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Status Indicator */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40 font-semibold">
              Project Status
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
              <Sparkles className="w-3 h-3" />
              {templates.length} Templates Active
            </span>
          </div>

          <div className="hidden md:block w-[1px] h-7 bg-[#1A1A1A]/10 dark:bg-white/10"></div>

          {/* Responsive Viewport Buttons */}
          <div className="hidden lg:flex items-center p-0.5 rounded-xs border border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#222220] text-[#1A1A1A]/70 dark:text-white/70">
            <button
              id="viewport-full-btn"
              onClick={() => onSelectViewport('full')}
              className={cn(
                'p-1.5 rounded-xs hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer',
                viewport === 'full' && 'bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white shadow-2xs'
              )}
              title="Full Width"
              aria-label="Full Width Viewport"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              id="viewport-desktop-btn"
              onClick={() => onSelectViewport('desktop')}
              className={cn(
                'p-1.5 rounded-xs hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer',
                viewport === 'desktop' && 'bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white shadow-2xs'
              )}
              title="Desktop (1440px)"
              aria-label="Desktop Viewport"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              id="viewport-tablet-btn"
              onClick={() => onSelectViewport('tablet')}
              className={cn(
                'p-1.5 rounded-xs hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer',
                viewport === 'tablet' && 'bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white shadow-2xs'
              )}
              title="Tablet (768px)"
              aria-label="Tablet Viewport"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              id="viewport-mobile-btn"
              onClick={() => onSelectViewport('mobile')}
              className={cn(
                'p-1.5 rounded-xs hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer',
                viewport === 'mobile' && 'bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white shadow-2xs'
              )}
              title="Mobile (375px)"
              aria-label="Mobile Viewport"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Modals */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              id="open-sections-btn"
              onClick={onOpenSectionManager}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#1A1A1A]/10 dark:border-white/15 bg-white dark:bg-[#222220] hover:bg-[#F9F9F8] dark:hover:bg-[#2A2A28] text-xs font-medium text-[#1A1A1A] dark:text-white transition-colors shadow-2xs cursor-pointer"
              title="Section Visibility Manager"
            >
              <Sliders className="w-3.5 h-3.5 text-[#1A1A1A]/60 dark:text-white/60" />
              <span className="hidden sm:inline">Sections</span>
            </button>

            <button
              id="open-data-btn"
              onClick={onOpenDataInspector}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#1A1A1A]/10 dark:border-white/15 bg-white dark:bg-[#222220] hover:bg-[#F9F9F8] dark:hover:bg-[#2A2A28] text-xs font-medium text-[#1A1A1A] dark:text-white transition-colors shadow-2xs cursor-pointer"
              title="Inspect Universal Data Contract"
            >
              <Code2 className="w-3.5 h-3.5 text-[#1A1A1A]/60 dark:text-white/60" />
              <span className="hidden sm:inline">Data</span>
            </button>

            <button
              id="open-roadmap-btn"
              onClick={onOpenRoadmap}
              className="bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] text-[11px] uppercase tracking-widest px-3 sm:px-4 py-1.5 font-semibold hover:opacity-90 transition-opacity rounded-xs shadow-xs cursor-pointer"
              title="View 35+ Planned Templates Roadmap"
            >
              <span className="hidden sm:inline">35+ Roadmap</span>
              <span className="sm:hidden">Roadmap</span>
            </button>

            {/* Dark / Light Mode */}
            <button
              id="toggle-dark-mode-btn"
              onClick={onToggleDarkMode}
              className="p-2 rounded-xs border border-[#1A1A1A]/10 dark:border-white/15 text-[#1A1A1A] dark:text-white hover:bg-[#F9F9F8] dark:hover:bg-[#222220] transition-colors cursor-pointer"
              aria-label="Toggle Theme Mode"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-[#1A1A1A]" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

