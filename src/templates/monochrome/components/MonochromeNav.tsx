import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface MonochromeNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const MonochromeNav: React.FC<MonochromeNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const visibleSections = sectionsConfig.filter(section => 
    isSectionVisible(section.id, configMap, data)
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F1EA]/90 dark:bg-[#111111]/90 backdrop-blur-sm border-b border-[#C9C6BE] dark:border-[#3A3A37]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex justify-between items-center h-16 md:h-20">
          
          {/* Brand Mark */}
          <div className="font-heading text-xl md:text-2xl text-[#151515] dark:text-[#F2F0E9] tracking-tight">
            <a href="#">{profile.name?.split(' ')[0] || 'Portfolio'}</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {visibleSections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-baseline gap-1"
              >
                <span className="font-mono text-[9px] text-[#8A8A84] dark:text-[#777770]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-xs font-medium uppercase tracking-widest text-[#151515] dark:text-[#F2F0E9] group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors">
                  {section.id}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden lg:block">
            {profile.contactEmail && (
              <a 
                href={`mailto:${profile.contactEmail}`}
                className="font-body text-xs font-medium uppercase tracking-widest text-[#151515] dark:text-[#F2F0E9] border-b border-[#151515] dark:border-[#F2F0E9] pb-0.5 hover:text-[#B44A35] dark:hover:text-[#D06A52] hover:border-[#B44A35] dark:hover:border-[#D06A52] transition-colors"
              >
                Inquire
              </a>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#151515] dark:text-[#F2F0E9]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F1EA] dark:bg-[#111111] pt-24 px-6 flex flex-col">
          <nav className="flex flex-col gap-8">
            {visibleSections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline gap-4 border-b border-[#C9C6BE]/30 dark:border-[#3A3A37]/30 pb-4"
              >
                <span className="font-mono text-sm text-[#8A8A84] dark:text-[#777770]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-4xl text-[#151515] dark:text-[#F2F0E9] uppercase">
                  {section.id}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
