import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface PaperfoldNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const PaperfoldNav: React.FC<PaperfoldNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Use the canonical visibility architecture
  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const visibleSections = sectionsConfig.filter(section => 
    isSectionVisible(section.id, configMap, data)
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = visibleSections.map(s => document.getElementById(s.id)).filter(Boolean);
      let current = '';
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <>
      {/* Desktop Nav - Folded Paper Tab Style */}
      <header className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-0 pointer-events-none z-50">
        <nav className="bg-[#FFFDF7] dark:bg-[#202326] flex flex-col pointer-events-auto shadow-[4px_0_15px_rgba(0,0,0,0.03)] border-r border-t border-b border-[#E8E3D8] dark:border-[#202020] py-6 px-4 relative">
          
          {/* Subtle paper fold tab connecting to edge */}
          <div className="absolute top-0 -left-2 w-2 h-full bg-[#E8E3D8]/50 dark:bg-[#151719] transform skew-y-[10deg]"></div>

          <div className="flex flex-col gap-2 relative z-10">
            {visibleSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "relative py-2 px-3 text-xs font-mono uppercase tracking-widest transition-all text-left",
                  activeSection === section.id 
                    ? "text-[#C86B52] dark:text-[#D47A61] font-bold" 
                    : "text-[#66717A] dark:text-[#AAB3B8] hover:text-[#202020] dark:hover:text-[#F3F0E8]"
                )}
              >
                {activeSection === section.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[#C86B52] dark:bg-[#D47A61]"></div>
                )}
                {section.id}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-end p-4">
          <button 
            className="pointer-events-auto bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-3 text-[#202020] dark:text-[#F3F0E8] shadow-sm relative overflow-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Folded corner on button */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#F3EFE7] dark:bg-[#151719] transform rotate-45 translate-x-1.5 -translate-y-1.5 border-l border-b border-[#E8E3D8] dark:border-[#202020]"></div>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="pointer-events-auto mx-4 bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative">
            <div className="flex flex-col">
              {visibleSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-4 border-b border-[#E8E3D8] dark:border-[#202020] text-sm font-mono uppercase tracking-widest text-[#202020] dark:text-[#F3F0E8] flex justify-between items-center last:border-b-0 hover:bg-[#F3EFE7]/50 dark:hover:bg-[#151719]/50"
                >
                  {section.id}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
