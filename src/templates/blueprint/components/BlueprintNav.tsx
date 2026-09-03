import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface BlueprintNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const BlueprintNav: React.FC<BlueprintNavProps> = ({ data, sectionsConfig }) => {
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
      {/* Desktop Nav - Title Block Style */}
      <header className="hidden lg:flex fixed top-0 right-8 bottom-0 flex-col justify-end pb-8 pointer-events-none z-50">
        <nav className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex flex-col pointer-events-auto">
          {/* Title block header */}
          <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-3 bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5">
             <div className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">Index</div>
             <div className="font-heading font-bold text-sm text-[#173A5E] dark:text-[#55C6DC] uppercase tracking-wider">Sheets</div>
          </div>
          
          <div className="flex flex-col">
            {visibleSections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "relative px-4 py-3 border-b last:border-b-0 border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 text-xs font-mono uppercase tracking-widest transition-colors hover:bg-[#2E6FBB]/10 dark:hover:bg-[#5DA9E9]/10 flex justify-between items-center min-w-[160px]",
                  activeSection === section.id 
                    ? "text-[#E8893A] dark:text-[#F0A35B] bg-[#E8893A]/5 dark:bg-[#F0A35B]/5 font-bold" 
                    : "text-[#173A5E] dark:text-[#5DA9E9]"
                )}
              >
                <span>{section.id}</span>
                <span className="text-[10px] opacity-50">{String(idx + 1).padStart(2, '0')}</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-end p-4">
          <button 
            className="pointer-events-auto bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-3 text-[#173A5E] dark:text-[#5DA9E9]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="pointer-events-auto mx-4 bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] flex flex-col shadow-lg">
            <div className="border-b-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-3 bg-[#2E6FBB]/5 dark:bg-[#5DA9E9]/5">
               <div className="font-mono text-[10px] text-[#73808C] uppercase tracking-widest">Index</div>
               <div className="font-heading font-bold text-sm text-[#173A5E] dark:text-[#55C6DC] uppercase tracking-wider">Sheets</div>
            </div>
            {visibleSections.map((section, idx) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 border-b border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30 text-sm font-mono uppercase tracking-widest text-[#173A5E] dark:text-[#5DA9E9] flex justify-between items-center"
              >
                <span>{section.id}</span>
                <span className="text-[10px] opacity-50">{String(idx + 1).padStart(2, '0')}</span>
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};
