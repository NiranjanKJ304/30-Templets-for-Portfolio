import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { kinshipConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { KinshipNav, KinshipSectionInfo } from './components/KinshipNav';
import { KinshipHeader } from './components/KinshipHeader';
import { KinshipFooter } from './components/KinshipFooter';

import { KinshipAboutSection } from './sections/KinshipAboutSection';
import { KinshipSkillsSection } from './sections/KinshipSkillsSection';
import { KinshipWorkSection } from './sections/KinshipWorkSection';
import { KinshipExperienceSection } from './sections/KinshipExperienceSection';
import { KinshipEducationSection } from './sections/KinshipEducationSection';
import { KinshipServicesSection } from './sections/KinshipServicesSection';
import { KinshipCertificationsSection } from './sections/KinshipCertificationsSection';
import { KinshipAchievementsSection } from './sections/KinshipAchievementsSection';
import { KinshipTestimonialsSection } from './sections/KinshipTestimonialsSection';
import { KinshipConnectSection } from './sections/KinshipConnectSection';
import { KinshipContactSection } from './sections/KinshipContactSection';

export const KinshipTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(kinshipConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: KinshipSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'Profile'
  });

  kinshipConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#141716] text-[#202624] dark:text-[#EEF0EA] font-body selection:bg-[#356B63] selection:text-[#FCFBF7]" id="top">
      
      {visibleSections.length > 1 && (
        <KinshipNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col">
        <KinshipHeader data={data} />
        
        {config.about !== false && <KinshipAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <KinshipSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <KinshipWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <KinshipExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <KinshipEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <KinshipServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <KinshipCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <KinshipAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <KinshipTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <KinshipConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <KinshipContactSection data={data} enabled={config.contact} />}
        
        <KinshipFooter />
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

export default KinshipTemplate;
