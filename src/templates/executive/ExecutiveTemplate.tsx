/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ExecutiveTemplate - Template 02: Executive
 * Authoritative, structured editorial grids and refined framing
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ExecutiveNav } from './components/ExecutiveNav';
import { ExecutiveHero } from './components/ExecutiveHero';
import { ExecutiveFooter } from './components/ExecutiveFooter';
import { ExecutiveAboutSection } from './sections/ExecutiveAboutSection';
import { ExecutiveServicesSection } from './sections/ExecutiveServicesSection';
import { ExecutiveSkillsSection } from './sections/ExecutiveSkillsSection';
import { ExecutiveWorkSection } from './sections/ExecutiveWorkSection';
import { ExecutiveExperienceSection } from './sections/ExecutiveExperienceSection';
import { ExecutiveEducationSection } from './sections/ExecutiveEducationSection';
import { ExecutiveCertificationsSection } from './sections/ExecutiveCertificationsSection';
import { ExecutiveAchievementsSection } from './sections/ExecutiveAchievementsSection';
import { ExecutiveTestimonialsSection } from './sections/ExecutiveTestimonialsSection';
import { ExecutiveConnectSection } from './sections/ExecutiveConnectSection';
import { ExecutiveContactSection } from './sections/ExecutiveContactSection';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

// Canonical default section sequence
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

export const ExecutiveTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId: controlledModalId,
  onOpenProjectModal: controlledOpenModal,
  onCloseProjectModal: controlledCloseModal,
}) => {
  // Local fallback for modal state
  const [internalModalId, setInternalModalId] = useState<string | null>(null);

  const activeModalId = controlledModalId !== undefined ? controlledModalId : internalModalId;
  const handleOpenModal = controlledOpenModal || setInternalModalId;
  const handleCloseModal = controlledCloseModal || (() => setInternalModalId(null));

  const activeProject = data.projects?.find((p) => p.id === activeModalId) || null;

  // Calculate dynamic 2-digit index string based on actually visible sections
  const visibleSections = ALL_SECTIONS_META.filter(
    (meta) => meta.id !== 'profile' && isSectionVisible(meta.id, sectionsConfig, data)
  );

  const getSectionIndex = (id: SectionId): string => {
    const idx = visibleSections.findIndex((meta) => meta.id === id);
    if (idx === -1) return '01';
    return String(idx + 1).padStart(2, '0');
  };

  const renderSection = (sectionId: SectionId) => {
    const isEnabled = sectionsConfig[sectionId] ?? true;
    const indexStr = getSectionIndex(sectionId);

    switch (sectionId) {
      case 'profile':
        return null; // Rendered directly below Nav
      case 'about':
        return <ExecutiveAboutSection key="about" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'services':
        return <ExecutiveServicesSection key="services" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'skills':
        return <ExecutiveSkillsSection key="skills" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'work':
        return (
          <ExecutiveWorkSection
            key="work"
            data={data}
            enabled={isEnabled}
            indexStr={indexStr}
            onOpenProjectModal={handleOpenModal}
          />
        );
      case 'experience':
        return <ExecutiveExperienceSection key="experience" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'education':
        return <ExecutiveEducationSection key="education" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'certifications':
        return (
          <ExecutiveCertificationsSection key="certifications" data={data} enabled={isEnabled} indexStr={indexStr} />
        );
      case 'achievements':
        return <ExecutiveAchievementsSection key="achievements" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'testimonials':
        return <ExecutiveTestimonialsSection key="testimonials" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'connect':
        return <ExecutiveConnectSection key="connect" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'contact':
        return <ExecutiveContactSection key="contact" data={data} enabled={isEnabled} indexStr={indexStr} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBFBFA] dark:bg-[#111110] text-[#1A1A19] dark:text-[#F5F5F3] font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-200">
      {/* Sticky Monogram Top Navigation */}
      <ExecutiveNav data={data} sectionsConfig={sectionsConfig} />

      {/* Primary Command Hero */}
      <ExecutiveHero data={data} />

      {/* Dynamic Sections Stream */}
      <main className="w-full">
        {DEFAULT_SECTION_ORDER.map((sectionId) => renderSection(sectionId))}
      </main>

      {/* Structured Confidential Footer */}
      <ExecutiveFooter data={data} />

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
