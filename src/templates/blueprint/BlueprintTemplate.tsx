import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { blueprintConfig } from './template.config';

import { BlueprintBackground } from './components/BlueprintBackground';
import { BlueprintNav } from './components/BlueprintNav';
import { BlueprintHero } from './components/BlueprintHero';
import { BlueprintFooter } from './components/BlueprintFooter';

import { BlueprintAboutSection } from './sections/BlueprintAboutSection';
import { BlueprintSkillsSection } from './sections/BlueprintSkillsSection';
import { BlueprintWorkSection } from './sections/BlueprintWorkSection';
import { BlueprintExperienceSection } from './sections/BlueprintExperienceSection';
import { BlueprintEducationSection } from './sections/BlueprintEducationSection';
import { BlueprintServicesSection } from './sections/BlueprintServicesSection';
import { BlueprintCertificationsSection } from './sections/BlueprintCertificationsSection';
import { BlueprintAchievementsSection } from './sections/BlueprintAchievementsSection';
import { BlueprintTestimonialsSection } from './sections/BlueprintTestimonialsSection';
import { BlueprintConnectSection } from './sections/BlueprintConnectSection';
import { BlueprintContactSection } from './sections/BlueprintContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const BlueprintTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(blueprintConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-transparent text-[#17202A] dark:text-[#EAF2F7] font-body selection:bg-[#3DA9C9] selection:text-white relative z-0 overflow-x-hidden">
      <BlueprintBackground />
      
      <BlueprintNav data={data} sectionsConfig={blueprintConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main>
        <BlueprintHero data={data} />
        <BlueprintAboutSection data={data} enabled={config.about} />
        <BlueprintSkillsSection data={data} enabled={config.skills} />
        <BlueprintWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <BlueprintExperienceSection data={data} enabled={config.experience} />
        <BlueprintEducationSection data={data} enabled={config.education} />
        <BlueprintServicesSection data={data} enabled={config.services} />
        <BlueprintCertificationsSection data={data} enabled={config.certifications} />
        <BlueprintAchievementsSection data={data} enabled={config.achievements} />
        <BlueprintTestimonialsSection data={data} enabled={config.testimonials} />
        <BlueprintConnectSection data={data} enabled={config.connect} />
        <BlueprintContactSection data={data} enabled={config.contact} />
      </main>

      <BlueprintFooter data={data} />

      {activeProject && onCloseProjectModal && (
        <ProjectDetailModal 
          project={activeProject} 
          isOpen={!!activeProjectModalId} 
          onClose={onCloseProjectModal} 
        />
      )}
    </div>
  );
};

export default BlueprintTemplate;
