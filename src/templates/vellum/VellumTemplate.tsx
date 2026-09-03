import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { vellumConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { VellumNav, VellumSectionInfo } from './components/VellumNav';
import { VellumHeader } from './components/VellumHeader';
import { VellumFooter } from './components/VellumFooter';

import { VellumAboutSection } from './sections/VellumAboutSection';
import { VellumSkillsSection } from './sections/VellumSkillsSection';
import { VellumWorkSection } from './sections/VellumWorkSection';
import { VellumExperienceSection } from './sections/VellumExperienceSection';
import { VellumEducationSection } from './sections/VellumEducationSection';
import { VellumServicesSection } from './sections/VellumServicesSection';
import { VellumCertificationsSection } from './sections/VellumCertificationsSection';
import { VellumAchievementsSection } from './sections/VellumAchievementsSection';
import { VellumTestimonialsSection } from './sections/VellumTestimonialsSection';
import { VellumConnectSection } from './sections/VellumConnectSection';
import { VellumContactSection } from './sections/VellumContactSection';

export const VellumTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(vellumConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: VellumSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Top'
  });

  vellumConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F1EDE3] dark:bg-[#171816] text-[#242522] dark:text-[#F0EDE3] font-body selection:bg-[#425C72] selection:text-[#FAF8F1]" id="top">
      
      {visibleSections.length > 1 && (
        <VellumNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center">
        <VellumHeader data={data} />
        
        {config.about !== false && <VellumAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <VellumSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <VellumWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <VellumExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <VellumEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <VellumServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <VellumCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <VellumAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <VellumTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <VellumConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <VellumContactSection data={data} enabled={config.contact} />}
        
        <VellumFooter />
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

export default VellumTemplate;
