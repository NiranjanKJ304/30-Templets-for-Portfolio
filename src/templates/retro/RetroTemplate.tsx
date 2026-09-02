/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 10: Retro - Main Template Component
 */

import React, { useMemo } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { RetroBackground } from './components/RetroBackground';
import { RetroNav } from './components/RetroNav';
import { RetroHero } from './components/RetroHero';
import { RetroFooter } from './components/RetroFooter';

import { RetroAboutSection } from './sections/RetroAboutSection';
import { RetroServicesSection } from './sections/RetroServicesSection';
import { RetroSkillsSection } from './sections/RetroSkillsSection';
import { RetroWorkSection } from './sections/RetroWorkSection';
import { RetroExperienceSection } from './sections/RetroExperienceSection';
import { RetroEducationSection } from './sections/RetroEducationSection';
import { RetroCertificationsSection } from './sections/RetroCertificationsSection';
import { RetroAchievementsSection } from './sections/RetroAchievementsSection';
import { RetroTestimonialsSection } from './sections/RetroTestimonialsSection';
import { RetroConnectSection } from './sections/RetroConnectSection';
import { RetroContactSection } from './sections/RetroContactSection';

export const RetroTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  onOpenProjectModal,
}) => {
  // Calculate sequential index numbers based exclusively on visible sections with data
  const indexNumbers = useMemo(() => {
    const numbers: Partial<Record<SectionId, string>> = {};
    let count = 1;

    for (const meta of ALL_SECTIONS_META) {
      if (meta.id === 'profile') continue;
      if (isSectionVisible(meta.id, sectionsConfig, data)) {
        numbers[meta.id] = String(count).padStart(2, '0');
        count++;
      }
    }
    return numbers;
  }, [sectionsConfig, data]);

  return (
    <div className="min-h-screen bg-[#FFF4D6] text-[#29231F] dark:bg-[#29231F] dark:text-[#FFF4D6] selection:bg-[#E76F2E] selection:text-[#FFF4D6] transition-colors duration-300 font-sans relative">
      {/* Background Graphic Field */}
      <RetroBackground />

      {/* Retro Graphic Navigation */}
      <RetroNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Poster Flow */}
      <main className="relative z-10">
        {/* Profile Masthead */}
        <RetroHero data={data} />

        {/* Section 01: About */}
        <RetroAboutSection
          data={data}
          enabled={sectionsConfig.about}
          indexNumber={indexNumbers.about || '01'}
        />

        {/* Section 02: Services */}
        <RetroServicesSection
          data={data}
          enabled={sectionsConfig.services}
          indexNumber={indexNumbers.services || '02'}
        />

        {/* Section 03: Skills */}
        <RetroSkillsSection
          data={data}
          enabled={sectionsConfig.skills}
          indexNumber={indexNumbers.skills || '03'}
        />

        {/* Section 04: Work */}
        <RetroWorkSection
          data={data}
          enabled={sectionsConfig.work}
          indexNumber={indexNumbers.work || '04'}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* Section 05: Experience */}
        <RetroExperienceSection
          data={data}
          enabled={sectionsConfig.experience}
          indexNumber={indexNumbers.experience || '05'}
        />

        {/* Section 06: Education */}
        <RetroEducationSection
          data={data}
          enabled={sectionsConfig.education}
          indexNumber={indexNumbers.education || '06'}
        />

        {/* Section 07: Certifications */}
        <RetroCertificationsSection
          data={data}
          enabled={sectionsConfig.certifications}
          indexNumber={indexNumbers.certifications || '07'}
        />

        {/* Section 08: Achievements */}
        <RetroAchievementsSection
          data={data}
          enabled={sectionsConfig.achievements}
          indexNumber={indexNumbers.achievements || '08'}
        />

        {/* Section 09: Testimonials */}
        <RetroTestimonialsSection
          data={data}
          enabled={sectionsConfig.testimonials}
          indexNumber={indexNumbers.testimonials || '09'}
        />

        {/* Section 10: Connect */}
        <RetroConnectSection
          data={data}
          enabled={sectionsConfig.connect}
          indexNumber={indexNumbers.connect || '10'}
        />

        {/* Section 11: Contact */}
        <RetroContactSection
          data={data}
          enabled={sectionsConfig.contact}
          indexNumber={indexNumbers.contact || '11'}
        />
      </main>

      {/* Retro Colophon & System Footer */}
      <RetroFooter data={data} />
    </div>
  );
};
