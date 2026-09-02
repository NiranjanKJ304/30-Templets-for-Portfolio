/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * EditorialNav - Slim publication masthead navigation with dynamic index numbering
 */

import React, { useState, useEffect } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface EditorialNavProps {
  data: PortfolioData;
  sectionsConfig?: Record<SectionId, boolean>;
}

interface NavItem {
  id: SectionId;
  label: string;
}

export const EditorialNav: React.FC<EditorialNavProps> = ({
  data,
  sectionsConfig,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Define potential navigation sections in editorial reading order
  const candidateSections: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'SELECTED WORK' },
    { id: 'skills', label: 'DISCIPLINES' },
    { id: 'experience', label: 'CHRONOLOGY' },
    { id: 'services', label: 'PRACTICE' },
    { id: 'education', label: 'ACADEMIA' },
    { id: 'certifications', label: 'CREDENTIALS' },
    { id: 'achievements', label: 'HONORS' },
    { id: 'testimonials', label: 'RECOGNITION' },
    { id: 'connect', label: 'INDEX' },
    { id: 'contact', label: 'INQUIRIES' },
  ];

  // Dynamic filter: only include sections that are enabled and non-empty
  const navItems: NavItem[] = candidateSections.filter((section) =>
    isSectionVisible(section.id, sectionsConfig, data)
  );

  // Active section scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5EF]/95 dark:bg-[#111111]/95 backdrop-blur-xs border-b border-[#171717]/15 dark:border-[#F5F2EA]/15 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-14 sm:h-16">
        {/* Masthead Identity Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B42318]"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B42318] dark:text-[#F06A5F]">
            PUB.
          </span>
          <span className="font-serif font-bold text-lg sm:text-xl text-[#171717] dark:text-[#F5F2EA] tracking-tight group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F] transition-colors">
            {data.profile.name}
          </span>
        </a>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[11px] uppercase tracking-wider">
          {navItems.map((item, idx) => {
            const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group flex items-center gap-1.5 py-1 transition-colors ${
                  isActive
                    ? 'text-[#B42318] dark:text-[#F06A5F] font-bold border-b border-[#B42318] dark:border-[#F06A5F]'
                    : 'text-[#68655F] dark:text-[#B8B3AA] hover:text-[#171717] dark:hover:text-[#F5F2EA]'
                }`}
              >
                <span className="text-[10px] text-[#918D85] dark:text-[#817C74] group-hover:text-[#B42318] dark:group-hover:text-[#F06A5F]">
                  {indexStr}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {data.profile.resumeUrl && (
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider bg-[#171717] text-[#FFFDF8] dark:bg-[#F5F2EA] dark:text-[#111111] hover:bg-[#B42318] dark:hover:bg-[#F06A5F] dark:hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV / RESUME</span>
              <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          )}

          {/* Mobile Menu Toggle Button */}
          {navItems.length > 0 && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] dark:text-[#F5F2EA] hover:text-[#B42318] dark:hover:text-[#F06A5F] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Publication Drawer */}
      {mobileMenuOpen && navItems.length > 0 && (
        <div className="lg:hidden border-t border-[#171717]/15 dark:border-[#F5F2EA]/15 bg-[#FFFDF8] dark:bg-[#191817] px-4 py-6 shadow-md animate-in fade-in duration-150">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#918D85] dark:text-[#817C74] mb-3 pb-1 border-b border-[#171717]/10 dark:border-[#F5F2EA]/10">
            INDEX OF CONTENTS
          </div>
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navItems.map((item, idx) => {
              const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center justify-between py-1.5 border-b border-[#171717]/5 dark:border-[#F5F2EA]/5 ${
                    isActive
                      ? 'text-[#B42318] dark:text-[#F06A5F] font-bold'
                      : 'text-[#68655F] dark:text-[#B8B3AA]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#918D85] dark:text-[#817C74]">{indexStr}</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </nav>

          {data.profile.resumeUrl && (
            <div className="mt-6 pt-4 border-t border-[#171717]/15 dark:border-[#F5F2EA]/15">
              <a
                href={data.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider bg-[#171717] text-[#FFFDF8] dark:bg-[#F5F2EA] dark:text-[#111111]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DOWNLOAD CURRICULUM VITAE</span>
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
