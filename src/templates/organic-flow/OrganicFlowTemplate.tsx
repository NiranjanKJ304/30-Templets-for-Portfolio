import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { organicFlowConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { FlowNav, FlowSectionInfo } from './components/FlowNav';
import { FlowHeader } from './components/FlowHeader';
import { FlowFooter } from './components/FlowFooter';

import { OrganicFlowAboutSection } from './sections/OrganicFlowAboutSection';
import { OrganicFlowSkillsSection } from './sections/OrganicFlowSkillsSection';
import { OrganicFlowWorkSection } from './sections/OrganicFlowWorkSection';
import { OrganicFlowExperienceSection } from './sections/OrganicFlowExperienceSection';
import { OrganicFlowEducationSection } from './sections/OrganicFlowEducationSection';
import { OrganicFlowServicesSection } from './sections/OrganicFlowServicesSection';
import { OrganicFlowCertificationsSection } from './sections/OrganicFlowCertificationsSection';
import { OrganicFlowAchievementsSection } from './sections/OrganicFlowAchievementsSection';
import { OrganicFlowTestimonialsSection } from './sections/OrganicFlowTestimonialsSection';
import { OrganicFlowConnectSection } from './sections/OrganicFlowConnectSection';
import { OrganicFlowContactSection } from './sections/OrganicFlowContactSection';

export const OrganicFlowTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(organicFlowConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections for nav
  const visibleSections: FlowSectionInfo[] = [];

  // Profile is always first if we wanted it in nav, but let's map actual sections
  organicFlowConfig.sections.forEach(s => {
    if (s.id === 'profile' || isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id === 'profile' ? 'PROFILE' : s.id.toUpperCase()
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F3F0E8] dark:bg-[#151817] text-[#202321] dark:text-[#F1EFE7] font-body selection:bg-[#C87558] selection:text-[#FBFAF5] overflow-x-hidden" id="top">
      
      {visibleSections.length > 1 && (
        <FlowNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col">
        <FlowHeader data={data} />
        
        {config.about !== false && <OrganicFlowAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <OrganicFlowSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <OrganicFlowWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <OrganicFlowExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <OrganicFlowEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <OrganicFlowServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <OrganicFlowCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <OrganicFlowAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <OrganicFlowTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <OrganicFlowConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <OrganicFlowContactSection data={data} enabled={config.contact} />}
        
        <FlowFooter />
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

export default OrganicFlowTemplate;
