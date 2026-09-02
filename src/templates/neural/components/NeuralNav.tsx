/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralNav - Floating cyber-pill navigation bar with dynamic node routing
 */

import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface NeuralNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const NeuralNav: React.FC<NeuralNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  // Filter strictly visible sections
  const visibleSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white/80 dark:bg-[#0F1117]/85 backdrop-blur-md border border-neutral-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40">
        {/* Brand / Identity Marker */}
        <a
          href="#profile"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-2 h-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />
          <span className="font-sans font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
            {profile.name}
          </span>
        </a>

        {/* Desktop Section Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {visibleSections.map((meta, idx) => (
            <a
              key={meta.id}
              href={`#${meta.id}`}
              className="text-neutral-500 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase tracking-wider flex items-center gap-1 group"
            >
              <span className="text-[10px] text-neutral-400 dark:text-neutral-600 group-hover:text-cyan-500">
                {String(idx + 1).padStart(2, '0')}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-300 dark:border-white/10 hover:border-neutral-500 dark:hover:border-white/30 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-neutral-900 text-white dark:bg-cyan-500 dark:text-neutral-950 font-bold hover:bg-neutral-800 dark:hover:bg-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.3)]"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 p-6 bg-white/95 dark:bg-[#0F1117]/95 backdrop-blur-lg border border-neutral-200 dark:border-white/10 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {visibleSections.map((meta, idx) => (
              <a
                key={meta.id}
                href={`#${meta.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-neutral-700 dark:text-neutral-300 hover:text-cyan-500 border-b border-neutral-100 dark:border-neutral-800"
              >
                <span>{meta.label}</span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  // {String(idx + 1).padStart(2, '0')}
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
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-neutral-200"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume / CV</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider bg-cyan-500 text-neutral-950 font-bold"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
