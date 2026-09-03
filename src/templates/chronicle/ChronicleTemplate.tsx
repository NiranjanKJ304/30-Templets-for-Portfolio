import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { chronicleConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { ChronicleNav, ChronicleSectionInfo } from './components/ChronicleNav';
import { ChronicleHeader } from './components/ChronicleHeader';
import { ChronicleFooter } from './components/ChronicleFooter';

import { ChronicleAboutSection } from './sections/ChronicleAboutSection';
import { ChronicleSkillsSection } from './sections/ChronicleSkillsSection';
import { ChronicleWorkSection } from './sections/ChronicleWorkSection';
import { ChronicleExperienceSection } from './sections/ChronicleExperienceSection';
import { ChronicleEducationSection } from './sections/ChronicleEducationSection';
import { ChronicleServicesSection } from './sections/ChronicleServicesSection';
import { ChronicleCertificationsSection } from './sections/ChronicleCertificationsSection';
import { ChronicleAchievementsSection } from './sections/ChronicleAchievementsSection';
import { ChronicleTestimonialsSection } from './sections/ChronicleTestimonialsSection';
import { ChronicleConnectSection } from './sections/ChronicleConnectSection';
import { ChronicleContactSection } from './sections/ChronicleContactSection';

export const ChronicleTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(chronicleConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: ChronicleSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Top'
  });

  chronicleConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F3F0E8] dark:bg-[#151817] font-body selection:bg-[#B96852] selection:text-[#FAF8F2] dark:selection:bg-[#D07861] dark:selection:text-[#151817]" id="top">
      
      {visibleSections.length > 1 && (
        <ChronicleNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center">
        <ChronicleHeader data={data} />
        
        {config.about !== false && <ChronicleAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <ChronicleSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <ChronicleWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <ChronicleExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <ChronicleEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <ChronicleServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <ChronicleCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <ChronicleAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <ChronicleTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <ChronicleConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <ChronicleContactSection data={data} enabled={config.contact} />}
        
        <ChronicleFooter />
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

export default ChronicleTemplate;
