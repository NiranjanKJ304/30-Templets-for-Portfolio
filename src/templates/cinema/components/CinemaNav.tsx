/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * CinemaNav - Floating frosted glass ribbon with dynamic chapter navigation
 */

import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface CinemaNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const CinemaNav: React.FC<CinemaNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  // Filter strictly visible sections
  const visibleSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  return (
    <header className="sticky top-6 z-40 w-full px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-5 sm:px-8 py-3.5 bg-white/90 dark:bg-[#111318]/85 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-2xl rounded-full text-neutral-900 dark:text-white transition-colors">
        {/* Brand / Monogram */}
        <a
          href="#profile"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform" />
          <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-neutral-900 dark:text-neutral-100 uppercase">
            {profile.name}
          </span>
        </a>

        {/* Desktop Chapter Navigation */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-mono">
          {visibleSections.map((meta, idx) => (
            <a
              key={meta.id}
              href={`#${meta.id}`}
              className="text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors uppercase tracking-widest flex items-center gap-1.5 group"
            >
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 group-hover:text-amber-600 dark:group-hover:text-amber-500">
                0{idx + 1}
              </span>
              <span>{meta.label}</span>
            </a>
          ))}
        </div>

        {/* Right Actions CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 rounded-full transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Bio / CV</span>
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-full transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Curtain Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-3 p-6 bg-white/95 dark:bg-[#111318]/95 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 shadow-2xl rounded-2xl space-y-5 text-neutral-900 dark:text-white">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {visibleSections.map((meta, idx) => (
              <a
                key={meta.id}
                href={`#${meta.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 border-b border-neutral-200/50 dark:border-white/5"
              >
                <span>{meta.label}</span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  // ACT 0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-neutral-200 rounded-lg"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>View Resume / CV</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider bg-amber-500 text-neutral-950 font-bold rounded-lg"
            >
              <span>Initiate Inquiries</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
