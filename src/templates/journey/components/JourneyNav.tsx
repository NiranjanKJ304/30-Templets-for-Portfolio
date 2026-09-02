/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * JourneyNav - Floating waypoint navigation dock with dynamic chapter indicators
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Compass } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface JourneyNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const JourneyNav: React.FC<JourneyNavProps> = ({ data, sectionsConfig }) => {
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
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none"
      aria-label="Journey Waypoint Navigation"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2.5 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 rounded-full shadow-lg pointer-events-auto transition-all">
        {/* Name / Home Anchor */}
        <a
          href="#profile"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <Compass className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="truncate max-w-[120px] sm:max-w-[180px]">{data.profile.name}</span>
        </a>

        {/* Desktop Waypoint Links */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto px-2">
          {visibleSections.map((section, idx) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-teal-600 text-white dark:bg-teal-500 dark:text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span className="opacity-75 mr-1 font-mono text-[10px]">
                  0{idx + 1}
                </span>
                {section.label}
              </a>
            );
          })}
        </div>

        {/* Right Action: Resume / CV */}
        <div className="flex items-center gap-2">
          {data.profile.resumeUrl && (
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl pointer-events-auto space-y-1">
          <a
            href="#profile"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Origin / Profile
          </a>
          {visibleSections.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span>{section.label}</span>
              <span className="font-mono text-xs text-neutral-400">Chapter 0{idx + 1}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
