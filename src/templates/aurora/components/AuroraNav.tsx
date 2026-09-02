/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * AuroraNav - Floating luminous pill navbar
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface AuroraNavProps {
  data: PortfolioData;
  sectionsConfig: Record<string, boolean>;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const AuroraNav: React.FC<AuroraNavProps> = ({
  data,
  sectionsConfig,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter sections that are both enabled AND contain actual data
  const navSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const resumeUrl = data.profile.resumeUrl;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border backdrop-blur-xl ${
          scrolled
            ? 'bg-white/85 dark:bg-neutral-900/85 border-white/60 dark:border-neutral-800/80 shadow-lg shadow-purple-500/5'
            : 'bg-white/70 dark:bg-neutral-900/70 border-white/40 dark:border-neutral-800/50 shadow-sm'
        }`}
      >
        {/* Brand / Name identity */}
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('profile');
          }}
          className="flex items-center gap-2 font-bold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 via-sky-400 to-rose-400 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="truncate max-w-[140px] sm:max-w-[200px]">{data.profile.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navSections.map((meta) => {
            const isActive = activeSection === meta.id;
            return (
              <button
                key={meta.id}
                onClick={() => handleNavClick(meta.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500/10 via-sky-500/10 to-rose-500/10 text-purple-700 dark:text-purple-300 font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60'
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 hover:opacity-95 shadow-xs shadow-purple-500/20 transition-opacity"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          )}

          {navSections.length > 0 && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[72px] z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto pointer-events-auto md:hidden animate-in fade-in duration-200"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider px-3 pb-2">
              Navigation
            </p>
            {navSections.map((meta) => {
              const isActive = activeSection === meta.id;
              return (
                <button
                  key={meta.id}
                  onClick={() => handleNavClick(meta.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl text-base font-medium transition-colors flex items-center justify-between cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 font-semibold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>

          {resumeUrl && (
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-purple-500/10 min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
