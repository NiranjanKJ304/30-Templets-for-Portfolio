import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface MosaicNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const MosaicNav: React.FC<MosaicNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const navItems = sectionsConfig.filter(s => isSectionVisible(s.id, configMap, data));

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F2EC]/90 dark:bg-[#121414]/90 backdrop-blur-md border-b border-[#CBC5BB] dark:border-[#444744]">
        <div className="flex h-16 items-center justify-between px-6 md:px-10 lg:px-16 max-w-[2000px] mx-auto">
          
          <a href="#" className="font-heading font-black text-xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7]">
            {data.profile.name?.split(' ')[0] || 'MOSAIC'}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-xs uppercase tracking-widest text-[#65645F] dark:text-[#B3B1AA] hover:text-[#D66B4D] dark:hover:text-[#E27A5A] transition-colors"
              >
                {item.id}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#1B1B1A] dark:text-[#F1EEE7]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFDF8] dark:bg-[#1B1E1E] pt-20 lg:hidden overflow-y-auto border-t border-[#CBC5BB] dark:border-[#444744]">
          <div className="flex flex-col p-6 gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-3xl uppercase tracking-tighter text-[#1B1B1A] dark:text-[#F1EEE7] hover:text-[#D66B4D] dark:hover:text-[#E27A5A] transition-colors"
              >
                {item.id}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
