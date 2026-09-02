/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Magazine Noir (magazine-noir-01)
 * A luxury visual-campaign portfolio featuring dramatic serif display typography,
 * editorial image cropping, oversized whitespace, and refined luxury accents.
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { Project } from '../../core/types/portfolio';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Components
import { NoirNav } from './components/NoirNav';
import { NoirHero } from './components/NoirHero';
import { NoirFooter } from './components/NoirFooter';

// Sections
import { NoirAboutSection } from './sections/NoirAboutSection';
import { NoirWorkSection } from './sections/NoirWorkSection';
import { NoirSkillsSection } from './sections/NoirSkillsSection';
import { NoirExperienceSection } from './sections/NoirExperienceSection';
import { NoirServicesSection } from './sections/NoirServicesSection';
import { NoirEducationSection } from './sections/NoirEducationSection';
import { NoirCertificationsSection } from './sections/NoirCertificationsSection';
import { NoirAchievementsSection } from './sections/NoirAchievementsSection';
import { NoirTestimonialsSection } from './sections/NoirTestimonialsSection';
import { NoirConnectSection } from './sections/NoirConnectSection';
import { NoirContactSection } from './sections/NoirContactSection';

export const MagazineNoirTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const [internalModalId, setInternalModalId] = useState<string | null>(null);

  const activeModalId = activeProjectModalId !== undefined ? activeProjectModalId : internalModalId;

  const handleOpenModal = (projectId: string) => {
    if (onOpenProjectModal) {
      onOpenProjectModal(projectId);
    } else {
      setInternalModalId(projectId);
    }
  };

  const handleCloseModal = () => {
    if (onCloseProjectModal) {
      onCloseProjectModal();
    } else {
      setInternalModalId(null);
    }
  };

  const activeProject: Project | null =
    activeModalId && data.projects
      ? data.projects.find((p) => p.id === activeModalId) || null
      : null;

  return (
    <div className="min-h-screen bg-[#F4F1EA] dark:bg-[#0D0D0D] text-[#171717] dark:text-[#F4F1EA] selection:bg-[#8B5E3C] selection:text-white transition-colors duration-200 antialiased">
      {/* Editorial Luxury Top Navigation */}
      <NoirNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Campaign Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Visual Campaign Hero */}
        {isSectionVisible('profile', sectionsConfig, data) && (
          <NoirHero data={data} />
        )}

        {/* Biographical Dossier */}
        {isSectionVisible('about', sectionsConfig, data) && (
          <NoirAboutSection
            data={data}
            enabled={sectionsConfig?.about !== false}
          />
        )}

        {/* Selected Works Feature Spreads */}
        {isSectionVisible('work', sectionsConfig, data) && (
          <NoirWorkSection
            data={data}
            enabled={sectionsConfig?.work !== false}
            onOpenProjectModal={handleOpenModal}
          />
        )}

        {/* Disciplines & Capabilities Index */}
        {isSectionVisible('skills', sectionsConfig, data) && (
          <NoirSkillsSection
            data={data}
            enabled={sectionsConfig?.skills !== false}
          />
        )}

        {/* Chronology & Appointments Register */}
        {isSectionVisible('experience', sectionsConfig, data) && (
          <NoirExperienceSection
            data={data}
            enabled={sectionsConfig?.experience !== false}
          />
        )}

        {/* Practice & Advisory */}
        {isSectionVisible('services', sectionsConfig, data) && (
          <NoirServicesSection
            data={data}
            enabled={sectionsConfig?.services !== false}
          />
        )}

        {/* Scholastic Foundation */}
        {isSectionVisible('education', sectionsConfig, data) && (
          <NoirEducationSection
            data={data}
            enabled={sectionsConfig?.education !== false}
          />
        )}

        {/* Accreditations & Warrants */}
        {isSectionVisible('certifications', sectionsConfig, data) && (
          <NoirCertificationsSection
            data={data}
            enabled={sectionsConfig?.certifications !== false}
          />
        )}

        {/* Distinctions & Honors */}
        {isSectionVisible('achievements', sectionsConfig, data) && (
          <NoirAchievementsSection
            data={data}
            enabled={sectionsConfig?.achievements !== false}
          />
        )}

        {/* Critical Endorsements */}
        {isSectionVisible('testimonials', sectionsConfig, data) && (
          <NoirTestimonialsSection
            data={data}
            enabled={sectionsConfig?.testimonials !== false}
          />
        )}

        {/* Syndicated Directory */}
        {isSectionVisible('connect', sectionsConfig, data) && (
          <NoirConnectSection
            data={data}
            enabled={sectionsConfig?.connect !== false}
          />
        )}

        {/* Direct Inquiries */}
        {isSectionVisible('contact', sectionsConfig, data) && (
          <NoirContactSection
            data={data}
            enabled={sectionsConfig?.contact !== false}
          />
        )}
      </main>

      {/* Campaign Colophon & Footer */}
      <NoirFooter data={data} />

      {/* Accessible Project Detail Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeModalId && activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
