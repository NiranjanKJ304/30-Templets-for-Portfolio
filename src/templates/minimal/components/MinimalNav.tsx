/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalNav - Clean, accessible sticky top navigation for Minimal template
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { ResumeButton } from '../../../core/components/ResumeButton';
import { cn } from '../../../core/utils/cn';

export interface MinimalNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const MinimalNav: React.FC<MinimalNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter sections that are actually visible (enabled + data present)
  // Exclude 'profile' from nav links as the brand name anchors to top/profile
  const visibleNavSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  const handleScrollTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF9]/90 dark:bg-[#0C0A09]/90 backdrop-blur-md border-b border-[#1C1917]/10 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between h-14 sm:h-16">
        {/* Name / Brand Anchor */}
        <button
          onClick={() => handleScrollTo('profile')}
          className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-75 transition-opacity text-left cursor-pointer"
        >
          {data.profile.name}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
          {visibleNavSections.map((meta) => (
            <button
              key={meta.id}
              onClick={() => handleScrollTo(meta.id)}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
            >
              {meta.label.split(' ')[0]}
            </button>
          ))}

          {/* Optional Resume Button if provided */}
          {data.profile.resumeUrl && (
            <ResumeButton
              resumeUrl={data.profile.resumeUrl}
              variant="outline"
              size="sm"
              className="ml-2 text-xs uppercase tracking-wider"
            />
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {data.profile.resumeUrl && (
            <ResumeButton
              resumeUrl={data.profile.resumeUrl}
              variant="outline"
              size="sm"
              className="text-xs"
            />
          )}
          {visibleNavSections.length > 0 && (
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && visibleNavSections.length > 0 && (
        <div className="md:hidden border-b border-[#1C1917]/10 dark:border-neutral-800 bg-[#FAFAF9] dark:bg-[#0C0A09] px-6 py-4 space-y-3">
          {visibleNavSections.map((meta) => (
            <button
              key={meta.id}
              onClick={() => handleScrollTo(meta.id)}
              className="block w-full text-left text-sm uppercase tracking-wider text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white py-1.5 font-medium cursor-pointer"
            >
              {meta.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
