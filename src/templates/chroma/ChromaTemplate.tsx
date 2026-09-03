import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { chromaConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { ChromaNav, ChromaSectionInfo } from './components/ChromaNav';
import { ChromaHeader } from './components/ChromaHeader';
import { ChromaFooter } from './components/ChromaFooter';

import { ChromaAboutSection } from './sections/ChromaAboutSection';
import { ChromaSkillsSection } from './sections/ChromaSkillsSection';
import { ChromaWorkSection } from './sections/ChromaWorkSection';
import { ChromaExperienceSection } from './sections/ChromaExperienceSection';
import { ChromaEducationSection } from './sections/ChromaEducationSection';
import { ChromaServicesSection } from './sections/ChromaServicesSection';
import { ChromaCertificationsSection } from './sections/ChromaCertificationsSection';
import { ChromaAchievementsSection } from './sections/ChromaAchievementsSection';
import { ChromaTestimonialsSection } from './sections/ChromaTestimonialsSection';
import { ChromaConnectSection } from './sections/ChromaConnectSection';
import { ChromaContactSection } from './sections/ChromaContactSection';

export const ChromaTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(chromaConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: ChromaSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Top'
  });

  chromaConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F4F0E8] dark:bg-[#151817] font-body selection:bg-[#202522] selection:text-[#F4F0E8] dark:selection:bg-[#F1EEE5] dark:selection:text-[#151817]" id="top">
      
      {visibleSections.length > 1 && (
        <ChromaNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col">
        <ChromaHeader data={data} />
        
        {config.about !== false && <ChromaAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <ChromaSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <ChromaWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <ChromaExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <ChromaEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <ChromaServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <ChromaCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <ChromaAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <ChromaTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <ChromaConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <ChromaContactSection data={data} enabled={config.contact} />}
        
        <ChromaFooter />
      </main>

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

export default ChromaTemplate;
