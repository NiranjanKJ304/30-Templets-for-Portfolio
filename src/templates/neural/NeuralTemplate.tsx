/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * NeuralTemplate - Template 03: Neural
 * Futuristic, atmospheric digital grid with precision typography and glowing interactive nodes
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { ALL_SECTIONS_META } from '../../core/types/section';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { NeuralBackground } from './components/NeuralBackground';
import { NeuralNav } from './components/NeuralNav';
import { NeuralHero } from './components/NeuralHero';
import { NeuralFooter } from './components/NeuralFooter';
import { NeuralAboutSection } from './sections/NeuralAboutSection';
import { NeuralServicesSection } from './sections/NeuralServicesSection';
import { NeuralSkillsSection } from './sections/NeuralSkillsSection';
import { NeuralWorkSection } from './sections/NeuralWorkSection';
import { NeuralExperienceSection } from './sections/NeuralExperienceSection';
import { NeuralEducationSection } from './sections/NeuralEducationSection';
import { NeuralCertificationsSection } from './sections/NeuralCertificationsSection';
import { NeuralAchievementsSection } from './sections/NeuralAchievementsSection';
import { NeuralTestimonialsSection } from './sections/NeuralTestimonialsSection';
import { NeuralConnectSection } from './sections/NeuralConnectSection';
import { NeuralContactSection } from './sections/NeuralContactSection';
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

export const NeuralTemplate: React.FC<TemplateProps> = ({
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
        return <NeuralAboutSection key="about" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'services':
        return <NeuralServicesSection key="services" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'skills':
        return <NeuralSkillsSection key="skills" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'work':
        return (
          <NeuralWorkSection
            key="work"
            data={data}
            enabled={isEnabled}
            indexStr={indexStr}
            onOpenProjectModal={handleOpenModal}
          />
        );
      case 'experience':
        return <NeuralExperienceSection key="experience" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'education':
        return <NeuralEducationSection key="education" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'certifications':
        return (
          <NeuralCertificationsSection key="certifications" data={data} enabled={isEnabled} indexStr={indexStr} />
        );
      case 'achievements':
        return <NeuralAchievementsSection key="achievements" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'testimonials':
        return <NeuralTestimonialsSection key="testimonials" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'connect':
        return <NeuralConnectSection key="connect" data={data} enabled={isEnabled} indexStr={indexStr} />;
      case 'contact':
        return <NeuralContactSection key="contact" data={data} enabled={isEnabled} indexStr={indexStr} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFC] dark:bg-[#08090C] text-[#0F172A] dark:text-[#F1F5F9] font-sans selection:bg-cyan-500 selection:text-neutral-950 transition-colors duration-200">
      {/* Precision Ambient Grid Background */}
      <NeuralBackground />

      <div className="relative z-10 w-full">
        {/* Floating Top Navigation */}
        <NeuralNav data={data} sectionsConfig={sectionsConfig} />

        {/* Primary Identity Hero */}
        <NeuralHero data={data} />

        {/* Dynamic Sections Stream */}
        <main className="w-full">
          {DEFAULT_SECTION_ORDER.map((sectionId) => renderSection(sectionId))}
        </main>

        {/* Terminal Footer */}
        <NeuralFooter data={data} />
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
