/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 07: Swiss - Main Template Component
 */

import React, { useMemo } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { SwissNav } from './components/SwissNav';
import { SwissHero } from './components/SwissHero';
import { SwissFooter } from './components/SwissFooter';

import { SwissAboutSection } from './sections/SwissAboutSection';
import { SwissServicesSection } from './sections/SwissServicesSection';
import { SwissSkillsSection } from './sections/SwissSkillsSection';
import { SwissWorkSection } from './sections/SwissWorkSection';
import { SwissExperienceSection } from './sections/SwissExperienceSection';
import { SwissEducationSection } from './sections/SwissEducationSection';
import { SwissCertificationsSection } from './sections/SwissCertificationsSection';
import { SwissAchievementsSection } from './sections/SwissAchievementsSection';
import { SwissTestimonialsSection } from './sections/SwissTestimonialsSection';
import { SwissConnectSection } from './sections/SwissConnectSection';
import { SwissContactSection } from './sections/SwissContactSection';

export const SwissTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  onOpenProjectModal,
}) => {
  // Dynamically calculate sequential index numbers based exclusively on visible sections
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
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 selection:bg-red-600 selection:text-white transition-colors duration-300 font-sans relative">
      {/* Precision Typographic Navigation Rail */}
      <SwissNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main 12-Column Grid Layout */}
      <main className="relative z-10">
        {/* Profile Masthead */}
        <SwissHero data={data} />

        {/* Directory 01: About */}
        <SwissAboutSection
          data={data}
          enabled={sectionsConfig.about}
          indexNumber={indexNumbers.about || '01'}
        />

        {/* Directory 02: Services */}
        <SwissServicesSection
          data={data}
          enabled={sectionsConfig.services}
          indexNumber={indexNumbers.services || '02'}
        />

        {/* Directory 03: Skills */}
        <SwissSkillsSection
          data={data}
          enabled={sectionsConfig.skills}
          indexNumber={indexNumbers.skills || '03'}
        />

        {/* Directory 04: Work */}
        <SwissWorkSection
          data={data}
          enabled={sectionsConfig.work}
          indexNumber={indexNumbers.work || '04'}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* Directory 05: Experience */}
        <SwissExperienceSection
          data={data}
          enabled={sectionsConfig.experience}
          indexNumber={indexNumbers.experience || '05'}
        />

        {/* Directory 06: Education */}
        <SwissEducationSection
          data={data}
          enabled={sectionsConfig.education}
          indexNumber={indexNumbers.education || '06'}
        />

        {/* Directory 07: Certifications */}
        <SwissCertificationsSection
          data={data}
          enabled={sectionsConfig.certifications}
          indexNumber={indexNumbers.certifications || '07'}
        />

        {/* Directory 08: Achievements */}
        <SwissAchievementsSection
          data={data}
          enabled={sectionsConfig.achievements}
          indexNumber={indexNumbers.achievements || '08'}
        />

        {/* Directory 09: Testimonials */}
        <SwissTestimonialsSection
          data={data}
          enabled={sectionsConfig.testimonials}
          indexNumber={indexNumbers.testimonials || '09'}
        />

        {/* Directory 10: Connect */}
        <SwissConnectSection
          data={data}
          enabled={sectionsConfig.connect}
          indexNumber={indexNumbers.connect || '10'}
        />

        {/* Directory 11: Contact */}
        <SwissContactSection
          data={data}
          enabled={sectionsConfig.contact}
          indexNumber={indexNumbers.contact || '11'}
        />
      </main>

      {/* Typographic Colophon & System Footer */}
      <SwissFooter data={data} />
    </div>
  );
};
