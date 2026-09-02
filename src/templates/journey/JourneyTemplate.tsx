/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 06: Journey - Main Template Component
 */

import React, { useMemo } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { JourneyNav } from './components/JourneyNav';
import { JourneyHero } from './components/JourneyHero';
import { JourneyFooter } from './components/JourneyFooter';

import { JourneyAboutSection } from './sections/JourneyAboutSection';
import { JourneyServicesSection } from './sections/JourneyServicesSection';
import { JourneySkillsSection } from './sections/JourneySkillsSection';
import { JourneyWorkSection } from './sections/JourneyWorkSection';
import { JourneyExperienceSection } from './sections/JourneyExperienceSection';
import { JourneyEducationSection } from './sections/JourneyEducationSection';
import { JourneyCertificationsSection } from './sections/JourneyCertificationsSection';
import { JourneyAchievementsSection } from './sections/JourneyAchievementsSection';
import { JourneyTestimonialsSection } from './sections/JourneyTestimonialsSection';
import { JourneyConnectSection } from './sections/JourneyConnectSection';
import { JourneyContactSection } from './sections/JourneyContactSection';

export const JourneyTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  onOpenProjectModal,
}) => {
  // Compute dynamic chapter sequence numbers for active & visible sections
  const chapterNumbers = useMemo(() => {
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
    <div className="min-h-screen bg-[#FBFBFA] text-[#18181B] dark:bg-[#121214] dark:text-[#F4F4F5] selection:bg-teal-600 selection:text-white transition-colors duration-300 font-sans relative">
      {/* Floating Waypoint Navigation */}
      <JourneyNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        {/* Origin / Profile Chapter */}
        <JourneyHero data={data} />

        {/* Chapter 01: About */}
        <JourneyAboutSection
          data={data}
          enabled={sectionsConfig.about}
          chapterNumber={chapterNumbers.about || '01'}
        />

        {/* Chapter 02: Services */}
        <JourneyServicesSection
          data={data}
          enabled={sectionsConfig.services}
          chapterNumber={chapterNumbers.services || '02'}
        />

        {/* Chapter 03: Skills */}
        <JourneySkillsSection
          data={data}
          enabled={sectionsConfig.skills}
          chapterNumber={chapterNumbers.skills || '03'}
        />

        {/* Chapter 04: Work */}
        <JourneyWorkSection
          data={data}
          enabled={sectionsConfig.work}
          chapterNumber={chapterNumbers.work || '04'}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* Chapter 05: Experience */}
        <JourneyExperienceSection
          data={data}
          enabled={sectionsConfig.experience}
          chapterNumber={chapterNumbers.experience || '05'}
        />

        {/* Chapter 06: Education */}
        <JourneyEducationSection
          data={data}
          enabled={sectionsConfig.education}
          chapterNumber={chapterNumbers.education || '06'}
        />

        {/* Chapter 07: Certifications */}
        <JourneyCertificationsSection
          data={data}
          enabled={sectionsConfig.certifications}
          chapterNumber={chapterNumbers.certifications || '07'}
        />

        {/* Chapter 08: Achievements */}
        <JourneyAchievementsSection
          data={data}
          enabled={sectionsConfig.achievements}
          chapterNumber={chapterNumbers.achievements || '08'}
        />

        {/* Chapter 09: Testimonials */}
        <JourneyTestimonialsSection
          data={data}
          enabled={sectionsConfig.testimonials}
          chapterNumber={chapterNumbers.testimonials || '09'}
        />

        {/* Chapter 10: Connect */}
        <JourneyConnectSection
          data={data}
          enabled={sectionsConfig.connect}
          chapterNumber={chapterNumbers.connect || '10'}
        />

        {/* Chapter 11: Contact */}
        <JourneyContactSection
          data={data}
          enabled={sectionsConfig.contact}
          chapterNumber={chapterNumbers.contact || '11'}
        />
      </main>

      {/* Destination Colophon Footer */}
      <JourneyFooter data={data} />
    </div>
  );
};
