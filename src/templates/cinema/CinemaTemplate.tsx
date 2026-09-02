/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 04: Cinema - Root Layout & Section Assembler
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import { CinemaBackground } from './components/CinemaBackground';
import { CinemaNav } from './components/CinemaNav';
import { CinemaHero } from './components/CinemaHero';
import { CinemaFooter } from './components/CinemaFooter';
import { CinemaAboutSection } from './sections/CinemaAboutSection';
import { CinemaServicesSection } from './sections/CinemaServicesSection';
import { CinemaSkillsSection } from './sections/CinemaSkillsSection';
import { CinemaWorkSection } from './sections/CinemaWorkSection';
import { CinemaExperienceSection } from './sections/CinemaExperienceSection';
import { CinemaEducationSection } from './sections/CinemaEducationSection';
import { CinemaCertificationsSection } from './sections/CinemaCertificationsSection';
import { CinemaAchievementsSection } from './sections/CinemaAchievementsSection';
import { CinemaTestimonialsSection } from './sections/CinemaTestimonialsSection';
import { CinemaConnectSection } from './sections/CinemaConnectSection';
import { CinemaContactSection } from './sections/CinemaContactSection';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

export const CinemaTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId: controlledModalId,
  onOpenProjectModal: controlledOpenModal,
  onCloseProjectModal: controlledCloseModal,
}) => {
  const [internalModalId, setInternalModalId] = useState<string | null>(null);

  const activeModalId = controlledModalId !== undefined ? controlledModalId : internalModalId;
  const handleOpenModal = controlledOpenModal || setInternalModalId;
  const handleCloseModal = controlledCloseModal || (() => setInternalModalId(null));

  // Helper to check section visibility
  const isSecEnabled = (id: string) => {
    return isSectionVisible(id as any, sectionsConfig, data);
  };

  // Find selected project for modal
  const selectedProject = activeModalId
    ? data.projects?.find((p) => p.id === activeModalId) || null
    : null;

  return (
    <div
      className="min-h-screen bg-[#FBFBFA] dark:bg-[#090A0D] text-[#1A1A1A] dark:text-neutral-100 selection:bg-amber-500 selection:text-neutral-950 relative font-sans overflow-x-hidden antialiased transition-colors duration-200"
    >
      {/* Dynamic Background Field */}
      <CinemaBackground />

      {/* Navigation Ribbon */}
      <CinemaNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Narrative Stage */}
      <main id="main-content" className="relative z-10">
        {/* Act 00: Hero & Protagonist Identity */}
        {isSecEnabled('profile') && <CinemaHero data={data} />}

        {/* Narrative Chapters */}
        <CinemaAboutSection
          data={data}
          enabled={isSecEnabled('about')}
          chapterIndex="01"
        />

        <CinemaServicesSection
          data={data}
          enabled={isSecEnabled('services')}
          chapterIndex="02"
        />

        <CinemaSkillsSection
          data={data}
          enabled={isSecEnabled('skills')}
          chapterIndex="03"
        />

        <CinemaWorkSection
          data={data}
          enabled={isSecEnabled('work')}
          chapterIndex="04"
          onOpenProjectModal={handleOpenModal}
        />

        <CinemaExperienceSection
          data={data}
          enabled={isSecEnabled('experience')}
          chapterIndex="05"
        />

        <CinemaEducationSection
          data={data}
          enabled={isSecEnabled('education')}
          chapterIndex="06"
        />

        <CinemaCertificationsSection
          data={data}
          enabled={isSecEnabled('certifications')}
          chapterIndex="07"
        />

        <CinemaAchievementsSection
          data={data}
          enabled={isSecEnabled('achievements')}
          chapterIndex="08"
        />

        <CinemaTestimonialsSection
          data={data}
          enabled={isSecEnabled('testimonials')}
          chapterIndex="09"
        />

        <CinemaConnectSection
          data={data}
          enabled={isSecEnabled('connect')}
          chapterIndex="10"
        />

        <CinemaContactSection
          data={data}
          enabled={isSecEnabled('contact')}
          chapterIndex="11"
        />
      </main>

      {/* Dramatic Epilogue Footer */}
      <CinemaFooter data={data} />

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
