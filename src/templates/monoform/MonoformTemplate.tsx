import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { monoformConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { MonoformNav, MonoformSectionInfo } from './components/MonoformNav';
import { MonoformHeader } from './components/MonoformHeader';
import { MonoformFooter } from './components/MonoformFooter';

import { MonoformAboutSection } from './sections/MonoformAboutSection';
import { MonoformSkillsSection } from './sections/MonoformSkillsSection';
import { MonoformWorkSection } from './sections/MonoformWorkSection';
import { MonoformExperienceSection } from './sections/MonoformExperienceSection';
import { MonoformEducationSection } from './sections/MonoformEducationSection';
import { MonoformServicesSection } from './sections/MonoformServicesSection';
import { MonoformCertificationsSection } from './sections/MonoformCertificationsSection';
import { MonoformAchievementsSection } from './sections/MonoformAchievementsSection';
import { MonoformTestimonialsSection } from './sections/MonoformTestimonialsSection';
import { MonoformConnectSection } from './sections/MonoformConnectSection';
import { MonoformContactSection } from './sections/MonoformContactSection';

export const MonoformTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(monoformConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: MonoformSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Top'
  });

  monoformConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#ECEAE4] dark:bg-[#151716] font-body selection:bg-[#1D1F1E] selection:text-[#F5F3ED] dark:selection:bg-[#F0EEE7] dark:selection:text-[#151716]" id="top">
      
      {visibleSections.length > 1 && (
        <MonoformNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center">
        <MonoformHeader data={data} />
        
        {config.about !== false && <MonoformAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <MonoformSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <MonoformWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <MonoformExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <MonoformEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <MonoformServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <MonoformCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <MonoformAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <MonoformTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <MonoformConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <MonoformContactSection data={data} enabled={config.contact} />}
        
        <MonoformFooter />
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

export default MonoformTemplate;
