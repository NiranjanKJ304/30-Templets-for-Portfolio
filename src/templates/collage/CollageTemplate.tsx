import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { collageConfig } from './template.config';

import { PaperCollageBackground } from './components/PaperCollageBackground';
import { PaperCollageNav } from './components/PaperCollageNav';
import { PaperCollageHero } from './components/PaperCollageHero';
import { PaperCollageFooter } from './components/PaperCollageFooter';

import { PaperCollageAboutSection } from './sections/PaperCollageAboutSection';
import { PaperCollageSkillsSection } from './sections/PaperCollageSkillsSection';
import { PaperCollageWorkSection } from './sections/PaperCollageWorkSection';
import { PaperCollageExperienceSection } from './sections/PaperCollageExperienceSection';
import { PaperCollageEducationSection } from './sections/PaperCollageEducationSection';
import { PaperCollageServicesSection } from './sections/PaperCollageServicesSection';
import { PaperCollageCertificationsSection } from './sections/PaperCollageCertificationsSection';
import { PaperCollageAchievementsSection } from './sections/PaperCollageAchievementsSection';
import { PaperCollageTestimonialsSection } from './sections/PaperCollageTestimonialsSection';
import { PaperCollageConnectSection } from './sections/PaperCollageConnectSection';
import { PaperCollageContactSection } from './sections/PaperCollageContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const CollageTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(collageConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-[#F7F3EA] dark:bg-[#1A1C23] text-[#171717] dark:text-[#F8F7F2] font-body selection:bg-[#315CFF] selection:text-white relative z-0 overflow-x-hidden">
      <PaperCollageBackground />
      
      <PaperCollageNav data={data} sectionsConfig={collageConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main>
        <PaperCollageHero data={data} />
        <PaperCollageAboutSection data={data} enabled={config.about} />
        <PaperCollageSkillsSection data={data} enabled={config.skills} />
        <PaperCollageWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <PaperCollageExperienceSection data={data} enabled={config.experience} />
        <PaperCollageEducationSection data={data} enabled={config.education} />
        <PaperCollageServicesSection data={data} enabled={config.services} />
        <PaperCollageCertificationsSection data={data} enabled={config.certifications} />
        <PaperCollageAchievementsSection data={data} enabled={config.achievements} />
        <PaperCollageTestimonialsSection data={data} enabled={config.testimonials} />
        <PaperCollageConnectSection data={data} enabled={config.connect} />
        <PaperCollageContactSection data={data} enabled={config.contact} />
      </main>

      <PaperCollageFooter data={data} />

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

export default CollageTemplate;
