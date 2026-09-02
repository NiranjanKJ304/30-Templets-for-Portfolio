/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CanvasNav - Floating studio compass navigation bar with dynamic section indexing
 */

import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface CanvasNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const CanvasNav: React.FC<CanvasNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  const visibleSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-5 sm:px-6 py-3 bg-[#F8F7F4]/90 dark:bg-[#1C1A18]/90 backdrop-blur-md border border-neutral-300 dark:border-neutral-800 shadow-[3px_3px_0px_0px_rgba(28,25,23,0.08)] dark:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] rounded-lg text-neutral-900 dark:text-neutral-100 transition-all">
        {/* Brand / Logo */}
        <a
          href="#profile"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 bg-orange-600 dark:bg-orange-500 rounded-sm group-hover:rotate-45 transition-transform" />
          <span className="font-bold text-sm sm:text-base tracking-tight uppercase">
            {profile.name}
          </span>
        </a>

        {/* Desktop Dynamic Sections */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {visibleSections.map((meta, idx) => (
            <a
              key={meta.id}
              href={`#${meta.id}`}
              className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors uppercase tracking-wider flex items-center gap-1 group"
            >
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 group-hover:text-orange-600">
                0{idx + 1}
              </span>
              <span>{meta.label}</span>
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white rounded-md transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Resume</span>
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md transition-all shadow-[2px_2px_0px_0px_rgba(28,25,23,0.15)]"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Curtain Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 p-5 bg-[#F8F7F4]/98 dark:bg-[#1C1A18]/98 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 shadow-xl rounded-lg space-y-4 text-neutral-900 dark:text-neutral-100">
          <div className="flex flex-col space-y-2 font-mono text-xs">
            {visibleSections.map((meta, idx) => (
              <a
                key={meta.id}
                href={`#${meta.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-neutral-700 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 border-b border-neutral-200 dark:border-neutral-800"
              >
                <span>{meta.label}</span>
                <span className="text-[10px] text-neutral-400">
                  // 0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md"
              >
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Resume / CV</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider bg-orange-600 text-white font-bold rounded-md"
            >
              <span>Contact Direct</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
