/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BrutalistTemplate - Raw, bold, structural, high-contrast digital artifact
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { BrutalistNav } from './components/BrutalistNav';
import { BrutalistHero } from './components/BrutalistHero';
import { BrutalistFooter } from './components/BrutalistFooter';
import { BrutalistAboutSection } from './sections/BrutalistAboutSection';
import { BrutalistServicesSection } from './sections/BrutalistServicesSection';
import { BrutalistSkillsSection } from './sections/BrutalistSkillsSection';
import { BrutalistWorkSection } from './sections/BrutalistWorkSection';
import { BrutalistExperienceSection } from './sections/BrutalistExperienceSection';
import { BrutalistEducationSection } from './sections/BrutalistEducationSection';
import { BrutalistCertificationsSection } from './sections/BrutalistCertificationsSection';
import { BrutalistAchievementsSection } from './sections/BrutalistAchievementsSection';
import { BrutalistTestimonialsSection } from './sections/BrutalistTestimonialsSection';
import { BrutalistConnectSection } from './sections/BrutalistConnectSection';
import { BrutalistContactSection } from './sections/BrutalistContactSection';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

const DEFAULT_SECTION_ORDER: SectionId[] = [
  'profile',
  'about',
  'services',
  'skills',
  'work',
  'experience',
  'education',
  'certifications',
  'achievements',
  'testimonials',
  'connect',
  'contact',
];

export const BrutalistTemplate: React.FC<TemplateProps> = ({
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

  const activeProject = data.projects?.find((p) => p.id === activeModalId) || null;

  const renderSection = (sectionId: SectionId) => {
    const isEnabled = sectionsConfig[sectionId] ?? true;

    switch (sectionId) {
      case 'profile':
        return null;
      case 'about':
        return <BrutalistAboutSection key="about" data={data} enabled={isEnabled} />;
      case 'services':
        return <BrutalistServicesSection key="services" data={data} enabled={isEnabled} />;
      case 'skills':
        return <BrutalistSkillsSection key="skills" data={data} enabled={isEnabled} />;
      case 'work':
        return (
          <BrutalistWorkSection
            key="work"
            data={data}
            enabled={isEnabled}
            onOpenProjectModal={handleOpenModal}
          />
        );
      case 'experience':
        return <BrutalistExperienceSection key="experience" data={data} enabled={isEnabled} />;
      case 'education':
        return <BrutalistEducationSection key="education" data={data} enabled={isEnabled} />;
      case 'certifications':
        return (
          <BrutalistCertificationsSection
            key="certifications"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'achievements':
        return (
          <BrutalistAchievementsSection
            key="achievements"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'testimonials':
        return (
          <BrutalistTestimonialsSection
            key="testimonials"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'connect':
        return <BrutalistConnectSection key="connect" data={data} enabled={isEnabled} />;
      case 'contact':
        return <BrutalistContactSection key="contact" data={data} enabled={isEnabled} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1E8] dark:bg-[#111111] text-[#111111] dark:text-[#F4F1E8] selection:bg-[#2563EB] selection:text-white transition-colors">
      {/* Monolithic Navigation Rail */}
      <BrutalistNav data={data} sectionsConfig={sectionsConfig} />

      {/* Monumental Hero */}
      {sectionsConfig.profile !== false && <BrutalistHero data={data} />}

      {/* Main Structural Flow */}
      <main>
        {DEFAULT_SECTION_ORDER.map((sectionId) => renderSection(sectionId))}
      </main>

      {/* Exposed Footer */}
      <BrutalistFooter data={data} />

      {/* Project Case Study Detail Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          isOpen={Boolean(activeProject)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BrutalistTemplate;
