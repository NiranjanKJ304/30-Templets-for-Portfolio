/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NoirNav - Refined luxury navigation for Magazine Noir
 */

import React, { useState, useEffect } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NoirNavProps {
  data: PortfolioData;
  sectionsConfig?: Record<SectionId, boolean>;
}

interface NavItem {
  id: SectionId;
  label: string;
}

export const NoirNav: React.FC<NoirNavProps> = ({ data, sectionsConfig }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const candidateSections: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'DOSSIER' },
    { id: 'work', label: 'SELECTED WORKS' },
    { id: 'skills', label: 'DISCIPLINES' },
    { id: 'experience', label: 'CHRONOLOGY' },
    { id: 'services', label: 'PRACTICE' },
    { id: 'education', label: 'SCHOLASTICS' },
    { id: 'certifications', label: 'ACCREDITATIONS' },
    { id: 'achievements', label: 'DISTINCTIONS' },
    { id: 'testimonials', label: 'CRITIQUE' },
    { id: 'connect', label: 'INDEX' },
    { id: 'contact', label: 'INQUIRIES' },
  ];

  // Filter only visible & populated sections
  const visibleNavItems: NavItem[] = candidateSections.filter((item) =>
    isSectionVisible(item.id, sectionsConfig, data)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const scrollPosition = window.scrollY + 180;
      for (const item of visibleNavItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleNavItems]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const name = data.profile.name || 'PORTFOLIO';

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F1EA]/90 dark:bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#171717]/10 dark:border-[#F4F1EA]/10 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand / Name Monograph */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col justify-center"
        >
          <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#171717] dark:text-[#F4F1EA] group-hover:text-[#8B5E3C] dark:group-hover:text-[#C49A6C] transition-colors">
            {name}
          </span>
          {data.profile.role && (
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#99938A] dark:text-[#777168]">
              {data.profile.role}
            </span>
          )}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {visibleNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#8B5E3C] dark:text-[#C49A6C] font-bold'
                    : 'text-[#68645D] dark:text-[#B8B2A8] hover:text-[#171717] dark:hover:text-[#F4F1EA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8B5E3C] dark:bg-[#C49A6C]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Resume & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {data.profile.resumeUrl && (
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#171717]/20 dark:border-[#F4F1EA]/20 bg-[#FBFAF7] dark:bg-[#171717] text-[#171717] dark:text-[#F4F1EA] hover:border-[#8B5E3C] dark:hover:border-[#C49A6C] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] font-mono text-[10px] uppercase tracking-widest transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DOSSIER CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171717] dark:text-[#F4F1EA] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F4F1EA] dark:bg-[#0D0D0D] border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 p-6 flex flex-col justify-between overflow-y-auto z-50">
          <nav className="flex flex-col space-y-4 pt-2">
            {visibleNavItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center justify-between py-3 border-b border-[#171717]/5 dark:border-[#F4F1EA]/5 text-left font-serif text-xl text-[#171717] dark:text-[#F4F1EA] hover:text-[#8B5E3C] dark:hover:text-[#C49A6C] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#99938A]">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          {data.profile.resumeUrl && (
            <div className="pt-6 border-t border-[#171717]/10 dark:border-[#F4F1EA]/10 mt-6">
              <a
                href={data.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 border border-[#171717]/20 dark:border-[#F4F1EA]/20 bg-[#FBFAF7] dark:bg-[#171717] text-[#171717] dark:text-[#F4F1EA] font-mono text-xs uppercase tracking-widest"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME / CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
