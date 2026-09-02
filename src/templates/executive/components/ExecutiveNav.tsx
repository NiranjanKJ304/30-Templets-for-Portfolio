/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveNav - Sticky top navigation with monogram seal and section indices
 */

import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface ExecutiveNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const ExecutiveNav: React.FC<ExecutiveNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  // Filter sections that are actually visible (excluding profile which is top/hero)
  const visibleNavSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  // Generate initials for executive seal
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'EX';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBFBFA]/95 dark:bg-[#111110]/95 backdrop-blur-sm border-b border-[#1A1A19]/10 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* Monogram Brand / Title */}
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="w-9 h-9 border border-neutral-900 dark:border-white bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center font-serif text-sm font-bold tracking-wider group-hover:scale-105 transition-transform">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
              {profile.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              {profile.title || 'Executive Dossier'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
          {visibleNavSections.slice(0, 7).map((meta, idx) => (
            <button
              key={meta.id}
              onClick={() => scrollToSection(meta.id)}
              className="text-xs font-mono tracking-wider uppercase text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                0{idx + 1}
              </span>
              <span>{meta.label}</span>
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono tracking-wider uppercase border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </a>
          )}

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-neutral-200 dark:border-neutral-800 bg-[#FBFBFA] dark:bg-[#111110] px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {visibleNavSections.map((meta, idx) => (
              <button
                key={meta.id}
                onClick={() => scrollToSection(meta.id)}
                className="text-left py-2.5 px-3 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center justify-between"
              >
                <span>{meta.label}</span>
                <span className="text-[10px] text-neutral-400">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:hidden gap-3">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100"
              >
                <FileText className="w-4 h-4" />
                <span>Download Executive CV</span>
              </a>
            )}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"
            >
              <span>Direct Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
