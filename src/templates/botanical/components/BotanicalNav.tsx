/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalNav - Header navigation with nature-inspired styling
 */

import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionVisibilityMap } from '../../../core/types/section';
import { Leaf, ArrowUpRight } from 'lucide-react';

interface BotanicalNavProps {
  data: PortfolioData;
  sectionsConfig: SectionVisibilityMap;
}

export const BotanicalNav: React.FC<BotanicalNavProps> = ({ data, sectionsConfig }) => {
  const { profile } = data;
  const contactEmail = data.contact?.email || profile.contactEmail;

  const navLinks = [
    { id: 'about', label: 'Manifesto', show: sectionsConfig.about !== false },
    { id: 'work', label: 'Selected Works', show: sectionsConfig.work !== false },
    { id: 'services', label: 'Practices', show: sectionsConfig.services !== false },
    { id: 'experience', label: 'Growth & Journey', show: sectionsConfig.experience !== false },
    { id: 'contact', label: 'Get in Touch', show: sectionsConfig.contact !== false },
  ].filter((link) => link.show);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#F6F5F0]/90 dark:bg-[#101712]/90 border-b border-[#D8D4C8] dark:border-[#2C3E30] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#E4ECE4] dark:bg-[#1F3325] text-[#243828] dark:text-[#8EB697] flex items-center justify-center transition-transform group-hover:rotate-12">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif text-base font-semibold tracking-tight text-[#1C261E] dark:text-[#F0F5F1] block leading-tight">
              {profile.name}
            </span>
            <span className="text-[11px] tracking-wider uppercase font-mono text-[#586359] dark:text-[#9BB0A0]">
              {profile.role || profile.headline}
            </span>
          </div>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs font-medium uppercase tracking-widest text-[#586359] dark:text-[#9BB0A0] hover:text-[#243828] dark:hover:text-[#F0F5F1] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div>
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#243828] dark:bg-[#EBF2EC] text-[#F6F5F0] dark:text-[#101712] hover:bg-[#1B2C1F] dark:hover:bg-[#DCE8DE] transition-all shadow-xs"
            >
              <span>Cultivate Dialogue</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#243828] dark:bg-[#EBF2EC] text-[#F6F5F0] dark:text-[#101712] hover:bg-[#1B2C1F] dark:hover:bg-[#DCE8DE] transition-all shadow-xs cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
