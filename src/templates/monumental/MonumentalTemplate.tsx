import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { monumentalConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { MonumentalNav, MonumentalSectionInfo } from './components/MonumentalNav';
import { MonumentalHeader } from './components/MonumentalHeader';
import { MonumentalFooter } from './components/MonumentalFooter';

import { MonumentalAboutSection } from './sections/MonumentalAboutSection';
import { MonumentalSkillsSection } from './sections/MonumentalSkillsSection';
import { MonumentalWorkSection } from './sections/MonumentalWorkSection';
import { MonumentalExperienceSection } from './sections/MonumentalExperienceSection';
import { MonumentalEducationSection } from './sections/MonumentalEducationSection';
import { MonumentalServicesSection } from './sections/MonumentalServicesSection';
import { MonumentalCertificationsSection } from './sections/MonumentalCertificationsSection';
import { MonumentalAchievementsSection } from './sections/MonumentalAchievementsSection';
import { MonumentalTestimonialsSection } from './sections/MonumentalTestimonialsSection';
import { MonumentalConnectSection } from './sections/MonumentalConnectSection';
import { MonumentalContactSection } from './sections/MonumentalContactSection';

export const MonumentalTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(monumentalConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: MonumentalSectionInfo[] = [];
  let currentIndex = 1;
  const getIndex = () => (currentIndex++).toString().padStart(2, '0');

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'PROFILE',
    index: getIndex()
  });

  monumentalConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id,
        index: getIndex()
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#ECE9E1] dark:bg-[#121514] text-[#171918] dark:text-[#F0EEE6] font-body selection:bg-[#B94F38] selection:text-[#ECE9E1]" id="top">
      
      {visibleSections.length > 1 && (
        <MonumentalNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col">
        <MonumentalHeader data={data} />
        
        {config.about !== false && <MonumentalAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <MonumentalSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <MonumentalWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <MonumentalExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <MonumentalEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <MonumentalServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <MonumentalCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <MonumentalAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <MonumentalTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <MonumentalConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <MonumentalContactSection data={data} enabled={config.contact} />}
        
        <MonumentalFooter />
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

export default MonumentalTemplate;
