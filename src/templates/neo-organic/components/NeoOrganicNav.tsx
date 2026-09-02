/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeoOrganicNav - Floating organic capsule navigation
 */

import React, { useState, useEffect } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NeoOrganicNavProps {
  data: PortfolioData;
  sectionsConfig?: Record<SectionId, boolean>;
}

export const NeoOrganicNav: React.FC<NeoOrganicNavProps> = ({
  data,
  sectionsConfig,
}) => {
  const { profile } = data;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute navigation items dynamically based on data availability & visibility
  const navItems = [
    { id: 'about', label: 'About', visible: isSectionVisible('about', sectionsConfig, data) },
    { id: 'work', label: 'Work', visible: isSectionVisible('work', sectionsConfig, data) },
    { id: 'skills', label: 'Skills', visible: isSectionVisible('skills', sectionsConfig, data) },
    { id: 'experience', label: 'Experience', visible: isSectionVisible('experience', sectionsConfig, data) },
    { id: 'services', label: 'Services', visible: isSectionVisible('services', sectionsConfig, data) },
    { id: 'education', label: 'Education', visible: isSectionVisible('education', sectionsConfig, data) },
    { id: 'certifications', label: 'Credentials', visible: isSectionVisible('certifications', sectionsConfig, data) },
    { id: 'achievements', label: 'Honors', visible: isSectionVisible('achievements', sectionsConfig, data) },
    { id: 'testimonials', label: 'Endorsements', visible: isSectionVisible('testimonials', sectionsConfig, data) },
    { id: 'connect', label: 'Directory', visible: isSectionVisible('connect', sectionsConfig, data) },
    { id: 'contact', label: 'Contact', visible: isSectionVisible('contact', sectionsConfig, data) },
  ].filter((item) => item.visible);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const resumeUrl = profile.resumeUrl;

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none flex justify-center">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 border ${
            isScrolled
              ? 'bg-[#FFFFFF]/90 dark:bg-[#1B211D]/90 backdrop-blur-md shadow-md border-[#17211B]/10 dark:border-[#F2F3ED]/10'
              : 'bg-[#FFFFFF]/75 dark:bg-[#1B211D]/75 backdrop-blur-xs shadow-xs border-[#17211B]/8 dark:border-[#F2F3ED]/8'
          }`}
        >
          {/* Logo / Name anchor */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#79A66A] to-[#4169E1] flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
              {profile.name ? profile.name.charAt(0).toUpperCase() : '●'}
            </div>
            <span className="font-semibold text-sm sm:text-base text-[#17211B] dark:text-[#F2F3ED] group-hover:text-[#4169E1] dark:group-hover:text-[#7F9CFF] transition-colors truncate max-w-[140px] sm:max-w-[200px]">
              {profile.name}
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[#59635C] dark:text-[#B8C0B8] hover:text-[#17211B] dark:hover:text-[#F2F3ED] hover:bg-[#D9E7D0]/40 dark:hover:bg-[#17211B]/60 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Row: Resume (if present) & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#4169E1] text-white hover:bg-[#3354B8] text-xs font-medium shadow-xs hover:shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-80" />
              </a>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#17211B] dark:text-[#F2F3ED] hover:bg-[#D9E7D0]/40 dark:hover:bg-[#17211B]/60 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#17211B]/40 dark:bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#FFFFFF] dark:bg-[#1B211D] h-full p-6 flex flex-col justify-between shadow-2xl border-l border-[#17211B]/10 dark:border-[#F2F3ED]/10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#17211B]/10 dark:border-[#F2F3ED]/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#79A66A] to-[#4169E1] flex items-center justify-center text-white text-xs font-bold">
                    {profile.name ? profile.name.charAt(0).toUpperCase() : '●'}
                  </div>
                  <span className="font-semibold text-sm text-[#17211B] dark:text-[#F2F3ED]">
                    {profile.name}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#59635C] dark:text-[#B8C0B8] hover:bg-[#D9E7D0]/30"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#17211B] dark:text-[#F2F3ED] hover:bg-[#D9E7D0]/40 dark:hover:bg-[#111713] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {resumeUrl && (
              <div className="pt-6 border-t border-[#17211B]/10 dark:border-[#F2F3ED]/10">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#4169E1] text-white font-medium text-sm shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
