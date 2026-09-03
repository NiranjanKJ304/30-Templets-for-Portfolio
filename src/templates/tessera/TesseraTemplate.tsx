import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { tesseraConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { TesseraNav, TesseraSectionInfo } from './components/TesseraNav';
import { TesseraHeader } from './components/TesseraHeader';
import { TesseraFooter } from './components/TesseraFooter';

import { TesseraAboutSection } from './sections/TesseraAboutSection';
import { TesseraSkillsSection } from './sections/TesseraSkillsSection';
import { TesseraWorkSection } from './sections/TesseraWorkSection';
import { TesseraExperienceSection } from './sections/TesseraExperienceSection';
import { TesseraEducationSection } from './sections/TesseraEducationSection';
import { TesseraServicesSection } from './sections/TesseraServicesSection';
import { TesseraCertificationsSection } from './sections/TesseraCertificationsSection';
import { TesseraAchievementsSection } from './sections/TesseraAchievementsSection';
import { TesseraTestimonialsSection } from './sections/TesseraTestimonialsSection';
import { TesseraConnectSection } from './sections/TesseraConnectSection';
import { TesseraContactSection } from './sections/TesseraContactSection';

export const TesseraTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(tesseraConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: TesseraSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Profile'
  });

  tesseraConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F2EFE7] dark:bg-[#151716] text-[#242522] dark:text-[#F0EEE5] font-body selection:bg-[#315F5A] selection:text-[#FBF9F3]" id="top">
      
      {visibleSections.length > 1 && (
        <TesseraNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center">
        <TesseraHeader data={data} />
        
        {config.about !== false && <TesseraAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <TesseraSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <TesseraWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <TesseraExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <TesseraEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <TesseraServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <TesseraCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <TesseraAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <TesseraTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <TesseraConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <TesseraContactSection data={data} enabled={config.contact} />}
        
        <TesseraFooter />
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

export default TesseraTemplate;
