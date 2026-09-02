/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistNav - Monolithic, high-contrast navigation bar
 */

import React, { useState } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionVisibilityMap } from '../../../core/types/section';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface BrutalistNavProps {
  data: PortfolioData;
  sectionsConfig: SectionVisibilityMap;
}

export const BrutalistNav: React.FC<BrutalistNavProps> = ({ data, sectionsConfig }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { profile } = data;
  const contactEmail = data.contact?.email || profile.contactEmail;

  // Derive dynamic list of nav items based on actual data presence and visibility config
  const navItems = [
    { id: 'about', label: 'About', index: '01', show: sectionsConfig.about !== false && Boolean(profile.bio || profile.summary) },
    { id: 'services', label: 'Services', index: '02', show: sectionsConfig.services !== false && Boolean(data.services && data.services.length > 0) },
    { id: 'skills', label: 'Skills', index: '03', show: sectionsConfig.skills !== false && Boolean(data.skills && data.skills.length > 0) },
    { id: 'work', label: 'Work', index: '04', show: sectionsConfig.work !== false && Boolean(data.projects && data.projects.length > 0) },
    { id: 'experience', label: 'Experience', index: '05', show: sectionsConfig.experience !== false && Boolean(data.experience && data.experience.length > 0) },
    { id: 'education', label: 'Education', index: '06', show: sectionsConfig.education !== false && Boolean(data.education && data.education.length > 0) },
    { id: 'achievements', label: 'Honors', index: '07', show: sectionsConfig.achievements !== false && Boolean(data.achievements && data.achievements.length > 0) },
    { id: 'testimonials', label: 'Endorsements', index: '08', show: sectionsConfig.testimonials !== false && Boolean(data.testimonials && data.testimonials.length > 0) },
    { id: 'connect', label: 'Network', index: '09', show: sectionsConfig.connect !== false && Boolean(data.socials && data.socials.length > 0) },
    { id: 'contact', label: 'Contact', index: '10', show: sectionsConfig.contact !== false },
  ].filter((item) => item.show);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F1E8] dark:bg-[#111111] border-b-3 border-[#111111] dark:border-[#F4F1E8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] flex items-center justify-center font-black font-mono text-sm group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
            ■
          </div>
          <div>
            <span className="font-sans font-black text-base uppercase tracking-tight text-[#111111] dark:text-[#F4F1E8] block leading-none">
              {profile.name}
            </span>
            {(profile.role || profile.headline) && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#555555] dark:text-[#A0A0A0] block mt-0.5 max-w-[200px] truncate">
                {profile.role || profile.headline}
              </span>
            )}
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] dark:text-[#F4F1E8] hover:bg-[#111111] hover:text-[#F4F1E8] dark:hover:bg-[#F4F1E8] dark:hover:text-[#111111] transition-all cursor-pointer border border-transparent hover:border-[#111111] dark:hover:border-[#F4F1E8]"
            >
              <span className="opacity-50 mr-1">/{item.index}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-all border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#F4F1E8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] dark:bg-[#F4F1E8] text-[#F4F1E8] dark:text-[#111111] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#2563EB] hover:text-white transition-all border-2 border-[#111111] dark:border-[#F4F1E8] shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#F4F1E8] cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 border-2 border-[#111111] dark:border-[#F4F1E8] bg-[#FFFFFF] dark:bg-[#191919] text-[#111111] dark:text-[#F4F1E8] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-[#111111] dark:border-[#F4F1E8] bg-[#F4F1E8] dark:bg-[#111111] p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="p-3 text-left font-mono text-sm font-bold uppercase tracking-wider text-[#111111] dark:text-[#F4F1E8] border border-[#111111] dark:border-[#F4F1E8] bg-[#FFFFFF] dark:bg-[#191919] hover:bg-[#111111] hover:text-[#F4F1E8] dark:hover:bg-[#F4F1E8] dark:hover:text-[#111111] transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="opacity-50">/{item.index}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
