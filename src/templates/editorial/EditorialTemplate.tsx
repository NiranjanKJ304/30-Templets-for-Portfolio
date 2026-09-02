/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Editorial Grid (editorial-01)
 * A contemporary magazine-inspired publication layout featuring refined editorial typography,
 * asymmetric column spreads, hairline rules, and art-directed content hierarchy.
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { Project } from '../../core/types/portfolio';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Components
import { EditorialNav } from './components/EditorialNav';
import { EditorialHero } from './components/EditorialHero';
import { EditorialFooter } from './components/EditorialFooter';

// Sections
import { EditorialAboutSection } from './sections/EditorialAboutSection';
import { EditorialWorkSection } from './sections/EditorialWorkSection';
import { EditorialSkillsSection } from './sections/EditorialSkillsSection';
import { EditorialExperienceSection } from './sections/EditorialExperienceSection';
import { EditorialServicesSection } from './sections/EditorialServicesSection';
import { EditorialEducationSection } from './sections/EditorialEducationSection';
import { EditorialCertificationsSection } from './sections/EditorialCertificationsSection';
import { EditorialAchievementsSection } from './sections/EditorialAchievementsSection';
import { EditorialTestimonialsSection } from './sections/EditorialTestimonialsSection';
import { EditorialConnectSection } from './sections/EditorialConnectSection';
import { EditorialContactSection } from './sections/EditorialContactSection';

export const EditorialTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  // Local modal state fallback for standalone operation
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
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#111111] text-[#171717] dark:text-[#F5F2EA] selection:bg-[#B42318] selection:text-white transition-colors duration-200 antialiased">
      {/* Editorial Top Masthead Navigation */}
      <EditorialNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Publication Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Cover Hero Masthead */}
        {isSectionVisible('profile', sectionsConfig, data) && (
          <EditorialHero data={data} />
        )}

        {/* Biographical Profile */}
        {isSectionVisible('about', sectionsConfig, data) && (
          <EditorialAboutSection
            data={data}
            enabled={sectionsConfig?.about !== false}
          />
        )}

        {/* Selected Works Feature Spreads */}
        {isSectionVisible('work', sectionsConfig, data) && (
          <EditorialWorkSection
            data={data}
            enabled={sectionsConfig?.work !== false}
            onOpenProjectModal={handleOpenModal}
          />
        )}

        {/* Disciplines & Capabilities Index */}
        {isSectionVisible('skills', sectionsConfig, data) && (
          <EditorialSkillsSection
            data={data}
            enabled={sectionsConfig?.skills !== false}
          />
        )}

        {/* Chronology & Appointment Register */}
        {isSectionVisible('experience', sectionsConfig, data) && (
          <EditorialExperienceSection
            data={data}
            enabled={sectionsConfig?.experience !== false}
          />
        )}

        {/* Areas of Practice & Advisory */}
        {isSectionVisible('services', sectionsConfig, data) && (
          <EditorialServicesSection
            data={data}
            enabled={sectionsConfig?.services !== false}
          />
        )}

        {/* Scholastic Foundation */}
        {isSectionVisible('education', sectionsConfig, data) && (
          <EditorialEducationSection
            data={data}
            enabled={sectionsConfig?.education !== false}
          />
        )}

        {/* Credentials & Accreditations */}
        {isSectionVisible('certifications', sectionsConfig, data) && (
          <EditorialCertificationsSection
            data={data}
            enabled={sectionsConfig?.certifications !== false}
          />
        )}

        {/* Distinctions & Honors */}
        {isSectionVisible('achievements', sectionsConfig, data) && (
          <EditorialAchievementsSection
            data={data}
            enabled={sectionsConfig?.achievements !== false}
          />
        )}

        {/* Critical Reception & Endorsements */}
        {isSectionVisible('testimonials', sectionsConfig, data) && (
          <EditorialTestimonialsSection
            data={data}
            enabled={sectionsConfig?.testimonials !== false}
          />
        )}

        {/* Public Index & Channels */}
        {isSectionVisible('connect', sectionsConfig, data) && (
          <EditorialConnectSection
            data={data}
            enabled={sectionsConfig?.connect !== false}
          />
        )}

        {/* Direct Correspondence */}
        {isSectionVisible('contact', sectionsConfig, data) && (
          <EditorialContactSection
            data={data}
            enabled={sectionsConfig?.contact !== false}
          />
        )}
      </main>

      {/* Publication Footer */}
      <EditorialFooter data={data} />

      {/* Accessible Project Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeModalId && activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
