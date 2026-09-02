/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Bento (bento-01)
 * A modular, tactile, responsive portfolio system presenting personal identity,
 * works, capabilities, and credentials through variable-scale asymmetric tiles.
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { Project } from '../../core/types/portfolio';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Components
import { BentoNav } from './components/BentoNav';
import { BentoHero } from './components/BentoHero';
import { BentoFooter } from './components/BentoFooter';

// Sections
import { BentoAboutSection } from './sections/BentoAboutSection';
import { BentoWorkSection } from './sections/BentoWorkSection';
import { BentoSkillsSection } from './sections/BentoSkillsSection';
import { BentoExperienceSection } from './sections/BentoExperienceSection';
import { BentoServicesSection } from './sections/BentoServicesSection';
import { BentoEducationSection } from './sections/BentoEducationSection';
import { BentoCertificationsSection } from './sections/BentoCertificationsSection';
import { BentoAchievementsSection } from './sections/BentoAchievementsSection';
import { BentoTestimonialsSection } from './sections/BentoTestimonialsSection';
import { BentoConnectSection } from './sections/BentoConnectSection';
import { BentoContactSection } from './sections/BentoContactSection';

export const BentoTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  // Local project modal state fallback for standalone operation
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
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-[#101216] text-[#171A1F] dark:text-[#F4F5F7] selection:bg-[#3B82F6] selection:text-white transition-colors duration-200 antialiased pt-4">
      {/* Floating Navigation Header */}
      <BentoNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Bento Grid Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Profile Hero Anchor */}
        {isSectionVisible('profile', sectionsConfig, data) && (
          <BentoHero data={data} />
        )}

        {/* Narrative Biography */}
        {isSectionVisible('about', sectionsConfig, data) && (
          <BentoAboutSection
            data={data}
            enabled={sectionsConfig?.about !== false}
          />
        )}

        {/* Selected Works Showcase */}
        {isSectionVisible('work', sectionsConfig, data) && (
          <BentoWorkSection
            data={data}
            enabled={sectionsConfig?.work !== false}
            onOpenProjectModal={handleOpenModal}
          />
        )}

        {/* Capability Matrix */}
        {isSectionVisible('skills', sectionsConfig, data) && (
          <BentoSkillsSection
            data={data}
            enabled={sectionsConfig?.skills !== false}
          />
        )}

        {/* Career Register */}
        {isSectionVisible('experience', sectionsConfig, data) && (
          <BentoExperienceSection
            data={data}
            enabled={sectionsConfig?.experience !== false}
          />
        )}

        {/* Commissions & Services */}
        {isSectionVisible('services', sectionsConfig, data) && (
          <BentoServicesSection
            data={data}
            enabled={sectionsConfig?.services !== false}
          />
        )}

        {/* Education & Formal Studies */}
        {isSectionVisible('education', sectionsConfig, data) && (
          <BentoEducationSection
            data={data}
            enabled={sectionsConfig?.education !== false}
          />
        )}

        {/* Certifications & Licensing */}
        {isSectionVisible('certifications', sectionsConfig, data) && (
          <BentoCertificationsSection
            data={data}
            enabled={sectionsConfig?.certifications !== false}
          />
        )}

        {/* Awards & Distinctions */}
        {isSectionVisible('achievements', sectionsConfig, data) && (
          <BentoAchievementsSection
            data={data}
            enabled={sectionsConfig?.achievements !== false}
          />
        )}

        {/* Testimonials & Recommendations */}
        {isSectionVisible('testimonials', sectionsConfig, data) && (
          <BentoTestimonialsSection
            data={data}
            enabled={sectionsConfig?.testimonials !== false}
          />
        )}

        {/* Networks & Social Channels */}
        {isSectionVisible('connect', sectionsConfig, data) && (
          <BentoConnectSection
            data={data}
            enabled={sectionsConfig?.connect !== false}
          />
        )}

        {/* Contact & Inquiries */}
        {isSectionVisible('contact', sectionsConfig, data) && (
          <BentoContactSection
            data={data}
            enabled={sectionsConfig?.contact !== false}
          />
        )}
      </main>

      {/* Footer */}
      <BentoFooter data={data} />

      {/* Accessible Project Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeModalId && activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
