/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RetroNav - Graphic poster navigation bar with responsive drawer
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionId } from '../../../core/types/section';
import { ALL_SECTIONS_META } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';

export interface RetroNavProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
}

export const RetroNav: React.FC<RetroNavProps> = ({ data, sectionsConfig }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('profile');

  // Filter only visible sections that actually have data
  const visibleNavItems = ALL_SECTIONS_META.filter((meta) => {
    if (meta.id === 'profile') return false;
    return isSectionVisible(meta.id, sectionsConfig, data);
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['profile', ...visibleNavItems.map((s) => s.id)];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FFF9EA] dark:bg-[#362E28] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl px-4 sm:px-6 py-3 shadow-[4px_4px_0px_0px_#29231F] dark:shadow-[4px_4px_0px_0px_rgba(255,244,214,0.15)] flex items-center justify-between transition-colors duration-200">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo('profile')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Scroll to top"
          >
            <span className="w-8 h-8 rounded-lg bg-[#E76F2E] text-[#FFF4D6] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 font-mono font-black text-sm flex items-center justify-center shadow-[2px_2px_0px_0px_#29231F] group-hover:bg-[#E9B949] group-hover:text-[#29231F] transition-all">
              {data.profile.name.charAt(0).toUpperCase()}
            </span>
            <div className="flex flex-col">
              <span className="font-sans font-black text-sm sm:text-base tracking-tight uppercase text-[#29231F] dark:text-[#FFF4D6]">
                {data.profile.name}
              </span>
              {data.profile.role && (
                <span className="font-mono text-[10px] uppercase font-bold text-[#665D55] dark:text-[#A89B8E] -mt-0.5 hidden sm:inline-block">
                  {data.profile.role}
                </span>
              )}
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 overflow-x-auto py-1">
            {visibleNavItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border-2 ${
                    isActive
                      ? 'bg-[#E76F2E] text-[#FFF4D6] border-[#29231F] shadow-[2px_2px_0px_0px_#29231F] dark:border-[#FFF4D6]/20'
                      : 'bg-transparent text-[#665D55] dark:text-[#D8CBB7] border-transparent hover:border-[#29231F]/30 hover:bg-[#FFF4D6] dark:hover:bg-[#29231F]'
                  }`}
                >
                  <span className="opacity-70 text-[10px]">{numStr}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {data.profile.resumeUrl && (
              <a
                href={data.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] shadow-[2px_2px_0px_0px_#29231F] hover:shadow-[1px_1px_0px_0px_#29231F] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            )}

            {isSectionVisible('contact', sectionsConfig, data) && (
              <button
                onClick={() => scrollTo('contact')}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#29231F] text-[#FFF4D6] dark:bg-[#FFF4D6] dark:text-[#29231F] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 shadow-[2px_2px_0px_0px_#E76F2E] hover:bg-[#E76F2E] hover:text-[#FFF4D6] transition-all flex items-center gap-1"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border-2 border-[#29231F] dark:border-[#FFF4D6]/20 bg-[#FFF4D6] dark:bg-[#29231F] text-[#29231F] dark:text-[#FFF4D6] shadow-[2px_2px_0px_0px_#29231F] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#FFF9EA] dark:bg-[#362E28] border-2 border-[#29231F] dark:border-[#FFF4D6]/20 rounded-xl p-4 shadow-[4px_4px_0px_0px_#29231F] dark:shadow-[4px_4px_0px_0px_rgba(255,244,214,0.15)] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {visibleNavItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                const numStr = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full px-4 py-2.5 rounded-lg text-left font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-between border-2 min-h-[44px] ${
                      isActive
                        ? 'bg-[#E76F2E] text-[#FFF4D6] border-[#29231F] shadow-[2px_2px_0px_0px_#29231F]'
                        : 'bg-[#FFF4D6] dark:bg-[#29231F] text-[#29231F] dark:text-[#FFF4D6] border-[#29231F]/20 dark:border-[#FFF4D6]/20'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="opacity-70 text-[10px]">[{numStr}]</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-2 border-t border-[#29231F]/10 dark:border-[#FFF4D6]/10 flex flex-col gap-2">
              {data.profile.resumeUrl && (
                <a
                  href={data.profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#E9B949] text-[#29231F] border-2 border-[#29231F] shadow-[2px_2px_0px_0px_#29231F] flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
