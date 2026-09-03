import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { prismConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { PrismNav, PrismSectionInfo } from './components/PrismNav';
import { PrismHeader } from './components/PrismHeader';
import { PrismFooter } from './components/PrismFooter';

import { PrismAboutSection } from './sections/PrismAboutSection';
import { PrismSkillsSection } from './sections/PrismSkillsSection';
import { PrismWorkSection } from './sections/PrismWorkSection';
import { PrismExperienceSection } from './sections/PrismExperienceSection';
import { PrismEducationSection } from './sections/PrismEducationSection';
import { PrismServicesSection } from './sections/PrismServicesSection';
import { PrismCertificationsSection } from './sections/PrismCertificationsSection';
import { PrismAchievementsSection } from './sections/PrismAchievementsSection';
import { PrismTestimonialsSection } from './sections/PrismTestimonialsSection';
import { PrismConnectSection } from './sections/PrismConnectSection';
import { PrismContactSection } from './sections/PrismContactSection';

export const PrismTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(prismConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: PrismSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'PROFILE'
  });

  prismConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F4F2EC] dark:bg-[#111415] text-[#171A1B] dark:text-[#F1F0EA] font-body selection:bg-[#4566C7] selection:text-[#FCFBF7] overflow-x-hidden" id="top">
      
      {visibleSections.length > 1 && (
        <PrismNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col xl:ml-[120px]">
        <PrismHeader data={data} />
        
        {config.about !== false && <PrismAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <PrismSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <PrismWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <PrismExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <PrismEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <PrismServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <PrismCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <PrismAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <PrismTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <PrismConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <PrismContactSection data={data} enabled={config.contact} />}
        
        <PrismFooter />
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

export default PrismTemplate;
