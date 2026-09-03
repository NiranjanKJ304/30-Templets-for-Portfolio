import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

interface OrbitalNavProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const OrbitalNav: React.FC<OrbitalNavProps> = ({ data, sectionsConfig }) => {
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
      {/* Mobile Header (Sticky) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#EEF2F1]/90 dark:bg-[#101819]/90 backdrop-blur-md border-b border-[#B9C9C6]/30 dark:border-[#40504D]/30">
        <div className="px-6 h-16 flex justify-between items-center">
          <div className="font-heading font-bold text-lg text-[#172326] dark:text-[#F0F4F1] tracking-tight">
            <a href="#">{profile.name?.split(' ')[0] || 'Orbit'}</a>
          </div>
          <button 
            className="text-[#172326] dark:text-[#F0F4F1]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#EEF2F1] dark:bg-[#101819] pt-24 px-8 flex flex-col">
          <nav className="flex flex-col gap-6">
            {visibleSections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl text-[#172326] dark:text-[#F0F4F1] uppercase flex items-center gap-4 group"
              >
                <div className="w-2 h-2 rounded-full border border-[#2F7C73] dark:border-[#66B8A9] group-hover:bg-[#2F7C73] dark:group-hover:bg-[#66B8A9] transition-colors"></div>
                {section.id}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Radial Nav Layer */}
      {/* Positioned absolutely within the Hero section context, but rendered here for component separation. It acts as a giant ring around the center. */}
      <div className="hidden lg:block absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-20">
        
        {/* Orbital Nav Ring */}
        <div className="absolute inset-0 rounded-full border-[1px] border-[#B9C9C6]/40 dark:border-[#40504D]/40 pointer-events-none @media(prefers-reduced-motion:no-preference):animate-[spin_120s_linear_infinite] opacity-30"></div>
        
        {/* Nav Items distributed circularly */}
        {visibleSections.map((section, idx) => {
          const total = visibleSections.length;
          // Offset angle to start from top (-90deg), distributed evenly.
          // Using a slight arc gap at the bottom if desired, but 360/total is easiest.
          const angle = (idx / total) * 360 - 90;
          const radius = 350; // Half of 700px
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div 
              key={section.id} 
              className="absolute left-1/2 top-1/2 pointer-events-auto"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <a
                href={`#${section.id}`}
                className="group flex flex-col items-center justify-center gap-2 -translate-y-1/2"
              >
                <div className="font-mono text-[9px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute -top-5">
                  {section.id}
                </div>
                <div className="w-3 h-3 rounded-full bg-[#FFFFFF] dark:bg-[#182221] border-2 border-[#172326] dark:border-[#F0F4F1] group-hover:border-[#2F7C73] dark:group-hover:border-[#66B8A9] group-hover:scale-150 transition-all duration-300 shadow-sm relative z-10"></div>
                <div className="font-heading text-xs font-semibold text-[#172326] dark:text-[#F0F4F1] uppercase tracking-widest whitespace-nowrap mt-2 absolute top-4 opacity-100 group-hover:opacity-0 transition-opacity">
                  {section.id}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
