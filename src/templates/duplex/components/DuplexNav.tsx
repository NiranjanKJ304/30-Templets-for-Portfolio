import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface DuplexNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const DuplexNav: React.FC<DuplexNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = data;

  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const navItems = sectionsConfig.filter(s => isSectionVisible(s.id, configMap, data));

  return (
    <>
      {/* Desktop Anchored Nav (Rendered inside Hero/Left panel, but managed here for mobile) */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:hidden bg-[#181818] dark:bg-[#E8E2D7] text-[#F5F1E9] dark:text-[#171717] border-b border-[#333] dark:border-[#CCC]">
        <div className="px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading font-bold text-lg uppercase tracking-tight">
            {profile.name?.split(' ')[0] || 'Portfolio'}
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#181818] dark:bg-[#E8E2D7] pt-16 lg:hidden overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl uppercase tracking-tighter text-[#F5F1E9] dark:text-[#171717] hover:text-[#D35F43] dark:hover:text-[#E0795D] transition-colors flex items-center gap-4"
              >
                <span className="font-mono text-xs text-[#587A72] dark:text-[#76A69C]">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                {item.id}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
