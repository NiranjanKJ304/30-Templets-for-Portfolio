import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../core/utils/cn';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { ResumeButton } from '../../../core/components/ResumeButton';

interface MemphisNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const MemphisNav: React.FC<MemphisNavProps> = ({ data, sectionsConfig }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleSections = sectionsConfig.filter(s => s.enabled);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b-4 border-neutral-900 dark:border-white shadow-[0_4px_0_0_#2563EB]" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#EC4899] border-2 border-neutral-900 dark:border-white flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[2px_2px_0_0_#202124] dark:shadow-[2px_2px_0_0_#FFFFFF]">
              <span className="font-heading font-black text-xl text-white">{data.profile.name.charAt(0)}</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-neutral-900 dark:text-white uppercase hidden sm:block">
              {data.profile.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex gap-1 bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white p-1 shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FACC15]">
              {visibleSections.map((section, idx) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 hover:bg-[#34D399] hover:text-neutral-900 transition-colors"
                >
                  {section.id}
                </a>
              ))}
            </div>
            {data.profile.resumeUrl && (
              <ResumeButton 
                url={data.profile.resumeUrl} 
                className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:-translate-y-1 border-2 border-neutral-900 dark:border-white font-bold uppercase tracking-wider shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF] rounded-none transition-all" 
              />
            )}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-12 h-12 bg-[#FACC15] border-2 border-neutral-900 dark:border-white flex items-center justify-center shadow-[4px_4px_0_0_#202124] dark:shadow-[4px_4px_0_0_#FFFFFF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="text-neutral-900" /> : <Menu className="text-neutral-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b-4 border-neutral-900 dark:border-white shadow-[0_8px_0_0_#202124]">
          <nav className="flex flex-col p-4 gap-2">
            {visibleSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 text-lg font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-2 border-transparent hover:border-neutral-900 dark:hover:border-white hover:bg-[#EC4899] hover:text-white transition-colors"
              >
                {section.id}
              </a>
            ))}
            {data.profile.resumeUrl && (
              <div className="p-4">
                <ResumeButton 
                  url={data.profile.resumeUrl}
                  className="w-full justify-center bg-[#2563EB] text-white border-2 border-neutral-900 dark:border-white font-bold uppercase shadow-[4px_4px_0_0_#202124] rounded-none"
                />
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
