/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 08: Aurora - Main Template Component
 */

import React from 'react';
import type { TemplateProps } from '../../core/types/template';

import { AuroraBackground } from './components/AuroraBackground';
import { AuroraNav } from './components/AuroraNav';
import { AuroraHero } from './components/AuroraHero';
import { AuroraFooter } from './components/AuroraFooter';

import { AuroraAboutSection } from './sections/AuroraAboutSection';
import { AuroraServicesSection } from './sections/AuroraServicesSection';
import { AuroraSkillsSection } from './sections/AuroraSkillsSection';
import { AuroraWorkSection } from './sections/AuroraWorkSection';
import { AuroraExperienceSection } from './sections/AuroraExperienceSection';
import { AuroraEducationSection } from './sections/AuroraEducationSection';
import { AuroraCertificationsSection } from './sections/AuroraCertificationsSection';
import { AuroraAchievementsSection } from './sections/AuroraAchievementsSection';
import { AuroraTestimonialsSection } from './sections/AuroraTestimonialsSection';
import { AuroraConnectSection } from './sections/AuroraConnectSection';
import { AuroraContactSection } from './sections/AuroraContactSection';

export const AuroraTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  onOpenProjectModal,
}) => {
  return (
    <div className="min-h-screen bg-[#FAFAFF] text-[#171725] dark:bg-[#0F0E17] dark:text-[#F4F4F8] selection:bg-purple-500 selection:text-white transition-colors duration-300 font-sans relative overflow-x-hidden">
      {/* Atmospheric Diffuse Aurora Background */}
      <AuroraBackground />

      {/* Floating Luminous Pill Navigation */}
      <AuroraNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Content Stream */}
      <main className="relative z-10">
        {/* Profile Masthead */}
        <AuroraHero data={data} />

        {/* Section 01: About */}
        <AuroraAboutSection
          data={data}
          enabled={sectionsConfig.about}
        />

        {/* Section 02: Services */}
        <AuroraServicesSection
          data={data}
          enabled={sectionsConfig.services}
        />

        {/* Section 03: Skills */}
        <AuroraSkillsSection
          data={data}
          enabled={sectionsConfig.skills}
        />

        {/* Section 04: Work */}
        <AuroraWorkSection
          data={data}
          enabled={sectionsConfig.work}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* Section 05: Experience */}
        <AuroraExperienceSection
          data={data}
          enabled={sectionsConfig.experience}
        />

        {/* Section 06: Education */}
        <AuroraEducationSection
          data={data}
          enabled={sectionsConfig.education}
        />

        {/* Section 07: Certifications */}
        <AuroraCertificationsSection
          data={data}
          enabled={sectionsConfig.certifications}
        />

        {/* Section 08: Achievements */}
        <AuroraAchievementsSection
          data={data}
          enabled={sectionsConfig.achievements}
        />

        {/* Section 09: Testimonials */}
        <AuroraTestimonialsSection
          data={data}
          enabled={sectionsConfig.testimonials}
        />

        {/* Section 10: Connect */}
        <AuroraConnectSection
          data={data}
          enabled={sectionsConfig.connect}
        />

        {/* Section 11: Contact */}
        <AuroraContactSection
          data={data}
          enabled={sectionsConfig.contact}
        />
      </main>

      {/* Atmospheric Closing Colophon */}
      <AuroraFooter data={data} />
    </div>
  );
};
