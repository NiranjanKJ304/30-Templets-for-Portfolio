/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * BotanicalTemplate - Earthy, nature-inspired, serene editorial portfolio
 */

import React, { useState } from 'react';
import type { TemplateProps } from '../../core/types/template';
import type { SectionId } from '../../core/types/section';
import { BotanicalNav } from './components/BotanicalNav';
import { BotanicalHero } from './components/BotanicalHero';
import { BotanicalFooter } from './components/BotanicalFooter';
import { BotanicalAboutSection } from './sections/BotanicalAboutSection';
import { BotanicalServicesSection } from './sections/BotanicalServicesSection';
import { BotanicalSkillsSection } from './sections/BotanicalSkillsSection';
import { BotanicalWorkSection } from './sections/BotanicalWorkSection';
import { BotanicalExperienceSection } from './sections/BotanicalExperienceSection';
import { BotanicalEducationSection } from './sections/BotanicalEducationSection';
import { BotanicalCertificationsSection } from './sections/BotanicalCertificationsSection';
import { BotanicalAchievementsSection } from './sections/BotanicalAchievementsSection';
import { BotanicalTestimonialsSection } from './sections/BotanicalTestimonialsSection';
import { BotanicalConnectSection } from './sections/BotanicalConnectSection';
import { BotanicalContactSection } from './sections/BotanicalContactSection';
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

export const BotanicalTemplate: React.FC<TemplateProps> = ({
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
        return <BotanicalAboutSection key="about" data={data} enabled={isEnabled} />;
      case 'services':
        return <BotanicalServicesSection key="services" data={data} enabled={isEnabled} />;
      case 'skills':
        return <BotanicalSkillsSection key="skills" data={data} enabled={isEnabled} />;
      case 'work':
        return (
          <BotanicalWorkSection
            key="work"
            data={data}
            enabled={isEnabled}
            onOpenProjectModal={handleOpenModal}
          />
        );
      case 'experience':
        return <BotanicalExperienceSection key="experience" data={data} enabled={isEnabled} />;
      case 'education':
        return <BotanicalEducationSection key="education" data={data} enabled={isEnabled} />;
      case 'certifications':
        return (
          <BotanicalCertificationsSection
            key="certifications"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'achievements':
        return (
          <BotanicalAchievementsSection
            key="achievements"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'testimonials':
        return (
          <BotanicalTestimonialsSection
            key="testimonials"
            data={data}
            enabled={isEnabled}
          />
        );
      case 'connect':
        return <BotanicalConnectSection key="connect" data={data} enabled={isEnabled} />;
      case 'contact':
        return <BotanicalContactSection key="contact" data={data} enabled={isEnabled} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F5F0] dark:bg-[#101712] text-[#1C261E] dark:text-[#F0F5F1] font-sans selection:bg-[#243828] selection:text-[#F6F5F0] dark:selection:bg-[#EBF2EC] dark:selection:text-[#101712] transition-colors duration-200">
      {/* Sticky Nature Navigation */}
      <BotanicalNav data={data} sectionsConfig={sectionsConfig} />

      {/* Hero / Profile */}
      <BotanicalHero data={data} />

      {/* Dynamic Sections Loop */}
      <main className="w-full">
        {DEFAULT_SECTION_ORDER.map((sectionId) => renderSection(sectionId))}
      </main>

      {/* Grounded Footer */}
      <BotanicalFooter data={data} />

      {/* Universal Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseModal}
      />
    </div>
  );
};
