/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SwissNav - Systematic typographic navigation rail & header
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface SwissNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const SwissNav: React.FC<SwissNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('profile');

  // Filter only visible sections
  const visibleSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sectionIds = ['profile', ...visibleSections.map((s) => s.id)];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <nav
      className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xs border-b border-neutral-900 dark:border-neutral-100 transition-colors"
      aria-label="Swiss Typographic Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Identity Mark */}
          <a
            href="#profile"
            className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black tracking-widest text-neutral-950 dark:text-neutral-50 uppercase hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            <span className="text-red-600 dark:text-red-500 font-extrabold">■</span>
            <span className="truncate max-w-[180px] sm:max-w-[240px]">{data.profile.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider">
            {visibleSections.map((section, idx) => {
              const isActive = activeSection === section.id;
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`px-3 py-1.5 transition-colors ${
                    isActive
                      ? 'bg-neutral-950 text-white dark:bg-neutral-50 dark:text-neutral-950 font-black'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  <span className="text-red-600 dark:text-red-500 mr-1">{numStr}</span>
                  {section.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume / CV */}
          <div className="flex items-center gap-3">
            {data.profile.resumeUrl && (
              <a
                href={data.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-900 dark:border-neutral-100 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-red-600 dark:text-red-500" />
              </a>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-950 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-950 p-4 font-mono text-xs font-bold uppercase tracking-wider space-y-1">
          <a
            href="#profile"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-neutral-950 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            [00] PROFILE
          </a>
          {visibleSections.map((section, idx) => {
            const numStr = String(idx + 1).padStart(2, '0');
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white"
              >
                <span>{section.label}</span>
                <span className="text-red-600 dark:text-red-500">[{numStr}]</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
