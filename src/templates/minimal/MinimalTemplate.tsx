/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * MinimalTemplate - Template 01: Minimal
 * Clean, typography-led, domain-agnostic portfolio template
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { MinimalNav } from './components/MinimalNav';
import { MinimalHero } from './components/MinimalHero';
import { MinimalFooter } from './components/MinimalFooter';
import { MinimalAboutSection } from './sections/MinimalAboutSection';
import { MinimalServicesSection } from './sections/MinimalServicesSection';
import { MinimalSkillsSection } from './sections/MinimalSkillsSection';
import { MinimalWorkSection } from './sections/MinimalWorkSection';
import { MinimalExperienceSection } from './sections/MinimalExperienceSection';
import { MinimalEducationSection } from './sections/MinimalEducationSection';
import { MinimalCertificationsSection } from './sections/MinimalCertificationsSection';
import { MinimalAchievementsSection } from './sections/MinimalAchievementsSection';
import { MinimalTestimonialsSection } from './sections/MinimalTestimonialsSection';
import { MinimalConnectSection } from './sections/MinimalConnectSection';
import { MinimalContactSection } from './sections/MinimalContactSection';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Default sequential section ordering for Minimal
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

export const MinimalTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId: controlledModalId,
  onOpenProjectModal: controlledOpenModal,
  onCloseProjectModal: controlledCloseModal,
}) => {
  // Local fallback for modal state if not controlled externally
  const [internalModalId, setInternalModalId] = useState<string | null>(null);

  const activeModalId = controlledModalId !== undefined ? controlledModalId : internalModalId;
  const handleOpenModal = controlledOpenModal || setInternalModalId;
  const handleCloseModal = controlledCloseModal || (() => setInternalModalId(null));

  const activeProject = data.projects?.find((p) => p.id === activeModalId) || null;

  // Render individual section component based on SectionId
  const renderSection = (sectionId: SectionId) => {
    const isEnabled = sectionsConfig[sectionId] ?? true;

    switch (sectionId) {
      case 'profile':
        // Hero is rendered directly below nav
        return null;
      case 'about':
        return <MinimalAboutSection key="about" data={data} enabled={isEnabled} />;
      case 'services':
        return <MinimalServicesSection key="services" data={data} enabled={isEnabled} />;
      case 'skills':
        return <MinimalSkillsSection key="skills" data={data} enabled={isEnabled} />;
      case 'work':
        return (
          <MinimalWorkSection
            key="work"
            data={data}
            enabled={isEnabled}
            onOpenProjectModal={handleOpenModal}
          />
        );
      case 'experience':
        return <MinimalExperienceSection key="experience" data={data} enabled={isEnabled} />;
      case 'education':
        return <MinimalEducationSection key="education" data={data} enabled={isEnabled} />;
      case 'certifications':
        return (
          <MinimalCertificationsSection key="certifications" data={data} enabled={isEnabled} />
        );
      case 'achievements':
        return <MinimalAchievementsSection key="achievements" data={data} enabled={isEnabled} />;
      case 'testimonials':
        return <MinimalTestimonialsSection key="testimonials" data={data} enabled={isEnabled} />;
      case 'connect':
        return <MinimalConnectSection key="connect" data={data} enabled={isEnabled} />;
      case 'contact':
        return <MinimalContactSection key="contact" data={data} enabled={isEnabled} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAF9] dark:bg-[#0C0A09] text-[#1C1917] dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <MinimalNav data={data} sectionsConfig={sectionsConfig} />

      {/* Hero / Profile (Always Mandatory) */}
      <MinimalHero data={data} />

      {/* Dynamic Sections Loop */}
      <main className="w-full">
        {DEFAULT_SECTION_ORDER.map((sectionId) => renderSection(sectionId))}
      </main>

      {/* Understated Minimal Footer */}
      <MinimalFooter data={data} />

      {/* Universal Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
