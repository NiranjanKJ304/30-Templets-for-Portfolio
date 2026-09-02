/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 15: Neo-Organic - Master Template Component
 * Flowing organic geometry, soft futurism, and human-centered technology.
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { Project } from '../../core/types/portfolio';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Components
import { NeoOrganicBackground } from './components/NeoOrganicBackground';
import { NeoOrganicNav } from './components/NeoOrganicNav';
import { NeoOrganicHero } from './components/NeoOrganicHero';
import { NeoOrganicFooter } from './components/NeoOrganicFooter';

// Sections
import { NeoOrganicAboutSection } from './sections/NeoOrganicAboutSection';
import { NeoOrganicWorkSection } from './sections/NeoOrganicWorkSection';
import { NeoOrganicSkillsSection } from './sections/NeoOrganicSkillsSection';
import { NeoOrganicExperienceSection } from './sections/NeoOrganicExperienceSection';
import { NeoOrganicServicesSection } from './sections/NeoOrganicServicesSection';
import { NeoOrganicEducationSection } from './sections/NeoOrganicEducationSection';
import { NeoOrganicCertificationsSection } from './sections/NeoOrganicCertificationsSection';
import { NeoOrganicAchievementsSection } from './sections/NeoOrganicAchievementsSection';
import { NeoOrganicTestimonialsSection } from './sections/NeoOrganicTestimonialsSection';
import { NeoOrganicConnectSection } from './sections/NeoOrganicConnectSection';
import { NeoOrganicContactSection } from './sections/NeoOrganicContactSection';

export const NeoOrganicTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const [internalModalId, setInternalModalId] = useState<string | null>(null);

  const activeModalId =
    activeProjectModalId !== undefined ? activeProjectModalId : internalModalId;

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
    <div className="relative min-h-screen bg-[#F6F5EF] dark:bg-[#111713] text-[#17211B] dark:text-[#F2F3ED] selection:bg-[#79A66A]/30 selection:text-[#17211B] transition-colors duration-300 font-sans">
      {/* Organic Fluid Background Shapes */}
      <NeoOrganicBackground />

      {/* Floating Capsule Navigation */}
      <NeoOrganicNav data={data} sectionsConfig={sectionsConfig} />

      {/* Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Profile / Hero Section */}
        {isSectionVisible('profile', sectionsConfig, data) && (
          <NeoOrganicHero data={data} />
        )}

        {/* Narrative Biography Section */}
        {isSectionVisible('about', sectionsConfig, data) && (
          <NeoOrganicAboutSection
            data={data}
            enabled={isSectionVisible('about', sectionsConfig, data)}
          />
        )}

        {/* Flowing Project Gallery */}
        {isSectionVisible('work', sectionsConfig, data) && (
          <NeoOrganicWorkSection
            data={data}
            enabled={isSectionVisible('work', sectionsConfig, data)}
            onOpenProjectModal={handleOpenModal}
          />
        )}

        {/* Capabilities & Disciplines */}
        {isSectionVisible('skills', sectionsConfig, data) && (
          <NeoOrganicSkillsSection
            data={data}
            enabled={isSectionVisible('skills', sectionsConfig, data)}
          />
        )}

        {/* Experience & Leadership */}
        {isSectionVisible('experience', sectionsConfig, data) && (
          <NeoOrganicExperienceSection
            data={data}
            enabled={isSectionVisible('experience', sectionsConfig, data)}
          />
        )}

        {/* Services & Offerings */}
        {isSectionVisible('services', sectionsConfig, data) && (
          <NeoOrganicServicesSection
            data={data}
            enabled={isSectionVisible('services', sectionsConfig, data)}
          />
        )}

        {/* Education & Research */}
        {isSectionVisible('education', sectionsConfig, data) && (
          <NeoOrganicEducationSection
            data={data}
            enabled={isSectionVisible('education', sectionsConfig, data)}
          />
        )}

        {/* Certifications & Licenses */}
        {isSectionVisible('certifications', sectionsConfig, data) && (
          <NeoOrganicCertificationsSection
            data={data}
            enabled={isSectionVisible('certifications', sectionsConfig, data)}
          />
        )}

        {/* Honors & Distinctions */}
        {isSectionVisible('achievements', sectionsConfig, data) && (
          <NeoOrganicAchievementsSection
            data={data}
            enabled={isSectionVisible('achievements', sectionsConfig, data)}
          />
        )}

        {/* Testimonials & Endorsements */}
        {isSectionVisible('testimonials', sectionsConfig, data) && (
          <NeoOrganicTestimonialsSection
            data={data}
            enabled={isSectionVisible('testimonials', sectionsConfig, data)}
          />
        )}

        {/* Directory & Social Links */}
        {isSectionVisible('connect', sectionsConfig, data) && (
          <NeoOrganicConnectSection
            data={data}
            enabled={isSectionVisible('connect', sectionsConfig, data)}
          />
        )}

        {/* Direct Contact Channels */}
        {isSectionVisible('contact', sectionsConfig, data) && (
          <NeoOrganicContactSection
            data={data}
            enabled={isSectionVisible('contact', sectionsConfig, data)}
          />
        )}
      </main>

      {/* Footer Colophon */}
      <NeoOrganicFooter data={data} />

      {/* Shared Core Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
