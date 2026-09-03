import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { paperfoldConfig } from './template.config';

import { PaperfoldBackground } from './components/PaperfoldBackground';
import { PaperfoldNav } from './components/PaperfoldNav';
import { PaperfoldHero } from './components/PaperfoldHero';
import { PaperfoldFooter } from './components/PaperfoldFooter';

import { PaperfoldAboutSection } from './sections/PaperfoldAboutSection';
import { PaperfoldSkillsSection } from './sections/PaperfoldSkillsSection';
import { PaperfoldWorkSection } from './sections/PaperfoldWorkSection';
import { PaperfoldExperienceSection } from './sections/PaperfoldExperienceSection';
import { PaperfoldEducationSection } from './sections/PaperfoldEducationSection';
import { PaperfoldServicesSection } from './sections/PaperfoldServicesSection';
import { PaperfoldCertificationsSection } from './sections/PaperfoldCertificationsSection';
import { PaperfoldAchievementsSection } from './sections/PaperfoldAchievementsSection';
import { PaperfoldTestimonialsSection } from './sections/PaperfoldTestimonialsSection';
import { PaperfoldConnectSection } from './sections/PaperfoldConnectSection';
import { PaperfoldContactSection } from './sections/PaperfoldContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const PaperfoldTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(paperfoldConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-transparent text-[#202020] dark:text-[#F3F0E8] font-body selection:bg-[#C86B52] selection:text-[#FFFDF7] relative z-0 overflow-x-hidden">
      <PaperfoldBackground />
      
      <PaperfoldNav data={data} sectionsConfig={paperfoldConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main>
        <PaperfoldHero data={data} />
        <PaperfoldAboutSection data={data} enabled={config.about} />
        <PaperfoldSkillsSection data={data} enabled={config.skills} />
        <PaperfoldWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <PaperfoldExperienceSection data={data} enabled={config.experience} />
        <PaperfoldEducationSection data={data} enabled={config.education} />
        <PaperfoldServicesSection data={data} enabled={config.services} />
        <PaperfoldCertificationsSection data={data} enabled={config.certifications} />
        <PaperfoldAchievementsSection data={data} enabled={config.achievements} />
        <PaperfoldTestimonialsSection data={data} enabled={config.testimonials} />
        <PaperfoldConnectSection data={data} enabled={config.connect} />
        <PaperfoldContactSection data={data} enabled={config.contact} />
      </main>

      <PaperfoldFooter data={data} />

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

export default PaperfoldTemplate;
