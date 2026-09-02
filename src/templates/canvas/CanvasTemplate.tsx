/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 05: Canvas - Main Template Component
 */

import React, { useMemo } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { CanvasBackground } from './components/CanvasBackground';
import { CanvasNav } from './components/CanvasNav';
import { CanvasHero } from './components/CanvasHero';
import { CanvasFooter } from './components/CanvasFooter';

import { CanvasAboutSection } from './sections/CanvasAboutSection';
import { CanvasServicesSection } from './sections/CanvasServicesSection';
import { CanvasSkillsSection } from './sections/CanvasSkillsSection';
import { CanvasWorkSection } from './sections/CanvasWorkSection';
import { CanvasExperienceSection } from './sections/CanvasExperienceSection';
import { CanvasEducationSection } from './sections/CanvasEducationSection';
import { CanvasCertificationsSection } from './sections/CanvasCertificationsSection';
import { CanvasAchievementsSection } from './sections/CanvasAchievementsSection';
import { CanvasTestimonialsSection } from './sections/CanvasTestimonialsSection';
import { CanvasConnectSection } from './sections/CanvasConnectSection';
import { CanvasContactSection } from './sections/CanvasContactSection';

export const CanvasTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  onOpenProjectModal,
  onSubmitContact,
}) => {
  // Compute dynamic section sequence numbers for active & visible sections
  const sectionNumbers = useMemo(() => {
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
    <div className="min-h-screen bg-[#F8F7F4] text-[#1C1917] dark:bg-[#151413] dark:text-[#F8F7F4] selection:bg-orange-600 selection:text-white transition-colors duration-300 font-sans relative">
      {/* Studio Canvas Background Texture */}
      <CanvasBackground />

      {/* Floating Compass Navigation */}
      <CanvasNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Asymmetric Studio Hero */}
        <CanvasHero data={data} />

        {/* 01: About Section */}
        <CanvasAboutSection
          data={data}
          enabled={sectionsConfig.about}
          sectionNumber={sectionNumbers.about || '01'}
        />

        {/* 02: Services Section */}
        <CanvasServicesSection
          data={data}
          enabled={sectionsConfig.services}
          sectionNumber={sectionNumbers.services || '02'}
        />

        {/* 03: Skills Section */}
        <CanvasSkillsSection
          data={data}
          enabled={sectionsConfig.skills}
          sectionNumber={sectionNumbers.skills || '03'}
        />

        {/* 04: Work Section */}
        <CanvasWorkSection
          data={data}
          enabled={sectionsConfig.work}
          sectionNumber={sectionNumbers.work || '04'}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* 05: Experience Section */}
        <CanvasExperienceSection
          data={data}
          enabled={sectionsConfig.experience}
          sectionNumber={sectionNumbers.experience || '05'}
        />

        {/* 06: Education Section */}
        <CanvasEducationSection
          data={data}
          enabled={sectionsConfig.education}
          sectionNumber={sectionNumbers.education || '06'}
        />

        {/* 07: Certifications Section */}
        <CanvasCertificationsSection
          data={data}
          enabled={sectionsConfig.certifications}
          sectionNumber={sectionNumbers.certifications || '07'}
        />

        {/* 08: Achievements Section */}
        <CanvasAchievementsSection
          data={data}
          enabled={sectionsConfig.achievements}
          sectionNumber={sectionNumbers.achievements || '08'}
        />

        {/* 09: Testimonials Section */}
        <CanvasTestimonialsSection
          data={data}
          enabled={sectionsConfig.testimonials}
          sectionNumber={sectionNumbers.testimonials || '09'}
        />

        {/* 10: Connect Section */}
        <CanvasConnectSection
          data={data}
          enabled={sectionsConfig.connect}
          sectionNumber={sectionNumbers.connect || '10'}
        />

        {/* 11: Contact Section */}
        <CanvasContactSection
          data={data}
          enabled={sectionsConfig.contact}
          sectionNumber={sectionNumbers.contact || '11'}
          onSubmitContact={onSubmitContact}
        />
      </main>

      {/* Architectural Colophon Footer */}
      <CanvasFooter data={data} />
    </div>
  );
};
