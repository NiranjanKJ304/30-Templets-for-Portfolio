import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface KineticNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const KineticNav: React.FC<KineticNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const navItems = sectionsConfig.filter(s => isSectionVisible(s.id, configMap, data));

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F3F0E8] dark:bg-[#111313] border-b-2 border-[#171717] dark:border-[#F3F0E8]">
        <div className="flex h-16 sm:h-20 items-center justify-between px-6 sm:px-12">
          
          <a href="#" className="font-heading font-black text-2xl uppercase tracking-tighter text-[#171717] dark:text-[#F3F0E8] flex items-center gap-2 group">
            {data.profile.name?.split(' ')[0] || 'KINETIC'}
            <ArrowRight size={20} className="motion-safe:group-hover:translate-x-2 transition-transform text-[#E84F3D] dark:text-[#FF715D]" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-heading font-bold text-sm uppercase tracking-wider text-[#171717] dark:text-[#F3F0E8] hover:text-[#E84F3D] dark:hover:text-[#FF715D] transition-colors relative group overflow-hidden"
              >
                <span className="block motion-safe:group-hover:-translate-y-full transition-transform duration-300">
                  {item.id}
                </span>
                <span className="absolute inset-0 block motion-safe:translate-y-full motion-safe:group-hover:translate-y-0 transition-transform duration-300 text-[#E84F3D] dark:text-[#FF715D]">
                  {item.id}
                </span>
              </a>
            ))}
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#171717] dark:text-[#F3F0E8]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#171717] dark:bg-[#F3F0E8] pt-20 lg:hidden overflow-y-auto">
          <div className="flex flex-col">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-6 border-b border-[#333] dark:border-[#CCC] font-heading font-black text-4xl uppercase tracking-tighter text-[#F3F0E8] dark:text-[#171717] hover:bg-[#E84F3D] dark:hover:bg-[#FF715D] hover:text-white transition-colors flex justify-between items-center group"
              >
                {item.id}
                <ArrowRight size={32} className="opacity-0 group-hover:opacity-100 motion-safe:-translate-x-4 motion-safe:group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
