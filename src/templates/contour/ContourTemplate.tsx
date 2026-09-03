import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { contourConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { ContourNav, ContourSectionInfo } from './components/ContourNav';
import { ContourHeader } from './components/ContourHeader';
import { ContourFooter } from './components/ContourFooter';

import { ContourAboutSection } from './sections/ContourAboutSection';
import { ContourSkillsSection } from './sections/ContourSkillsSection';
import { ContourWorkSection } from './sections/ContourWorkSection';
import { ContourExperienceSection } from './sections/ContourExperienceSection';
import { ContourEducationSection } from './sections/ContourEducationSection';
import { ContourServicesSection } from './sections/ContourServicesSection';
import { ContourCertificationsSection } from './sections/ContourCertificationsSection';
import { ContourAchievementsSection } from './sections/ContourAchievementsSection';
import { ContourTestimonialsSection } from './sections/ContourTestimonialsSection';
import { ContourConnectSection } from './sections/ContourConnectSection';
import { ContourContactSection } from './sections/ContourContactSection';

export const ContourTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(contourConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: ContourSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Top'
  });

  contourConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F2F0E7] dark:bg-[#151918] font-body selection:bg-[#879A82] selection:text-[#F9F8F1] dark:selection:bg-[#78947D] dark:selection:text-[#151918]" id="top">
      
      {visibleSections.length > 1 && (
        <ContourNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center">
        <ContourHeader data={data} />
        
        {config.about !== false && <ContourAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <ContourSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <ContourWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <ContourExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <ContourEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <ContourServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <ContourCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <ContourAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <ContourTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <ContourConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <ContourContactSection data={data} enabled={config.contact} />}
        
        <ContourFooter />
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

export default ContourTemplate;
