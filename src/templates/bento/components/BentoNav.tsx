/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BentoNav - Floating modular navigation bar
 */

import React, { useState } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { Menu, X, FileText } from 'lucide-react';

interface BentoNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const BentoNav: React.FC<BentoNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profile = data.profile;

  // Determine active sections with data
  const navSections: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Awards' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'connect', label: 'Connect' },
    { id: 'contact', label: 'Contact' },
  ];

  const visibleSections = navSections.filter((sec) =>
    isSectionVisible(sec.id, sectionsConfig, data)
  );

  return (
    <header className="sticky top-5 z-40 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none mb-6">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-3 bg-white/90 dark:bg-[#191C22]/90 backdrop-blur-md border border-[#E2E6ED] dark:border-[#2D3340] shadow-sm hover:shadow-md transition-shadow rounded-full text-[#171A1F] dark:text-[#F4F5F7]"
      >
        {/* Brand / Name */}
        <a
          href="#profile"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-full px-1"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform" />
          <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#171A1F] dark:text-[#F4F5F7]">
            {profile.name}
          </span>
          {profile.statusBadge && (
            <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              {profile.statusBadge}
            </span>
          )}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-[#5F6672] dark:text-[#9DA5B4]">
          {visibleSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3 py-1.5 rounded-full hover:text-[#171A1F] dark:hover:text-[#F4F5F7] hover:bg-[#EEF1F5] dark:hover:bg-[#222630] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              {sec.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#171A1F] dark:bg-[#F4F5F7] text-white dark:text-[#171A1F] hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#5F6672] dark:text-[#9DA5B4] hover:text-[#171A1F] dark:hover:text-[#F4F5F7] hover:bg-[#EEF1F5] dark:hover:bg-[#222630] transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 p-5 bg-white/95 dark:bg-[#191C22]/95 backdrop-blur-xl border border-[#E2E6ED] dark:border-[#2D3340] shadow-xl rounded-2xl space-y-3 text-[#171A1F] dark:text-[#F4F5F7]">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            {visibleSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#EEF1F5] dark:hover:bg-[#222630] transition-colors"
              >
                <span>{sec.label}</span>
                <span className="text-xs text-[#8E95A3]">→</span>
              </a>
            ))}
          </div>

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-[#3B82F6] text-white hover:bg-blue-600 transition-colors w-full"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume / CV</span>
            </a>
          )}
        </div>
      )}
    </header>
  );
};
