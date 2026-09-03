import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { mosaicConfig } from './template.config';

import { MosaicBackground } from './components/MosaicBackground';
import { MosaicNav } from './components/MosaicNav';
import { MosaicHero } from './components/MosaicHero';
import { MosaicFooter } from './components/MosaicFooter';

import { MosaicAboutSection } from './sections/MosaicAboutSection';
import { MosaicSkillsSection } from './sections/MosaicSkillsSection';
import { MosaicWorkSection } from './sections/MosaicWorkSection';
import { MosaicExperienceSection } from './sections/MosaicExperienceSection';
import { MosaicEducationSection } from './sections/MosaicEducationSection';
import { MosaicServicesSection } from './sections/MosaicServicesSection';
import { MosaicCertificationsSection } from './sections/MosaicCertificationsSection';
import { MosaicAchievementsSection } from './sections/MosaicAchievementsSection';
import { MosaicTestimonialsSection } from './sections/MosaicTestimonialsSection';
import { MosaicConnectSection } from './sections/MosaicConnectSection';
import { MosaicContactSection } from './sections/MosaicContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const MosaicTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(mosaicConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-[#F5F2EC] dark:bg-[#121414] text-[#1B1B1A] dark:text-[#F1EEE7] font-body selection:bg-[#D66B4D] selection:text-white relative z-0 overflow-x-hidden">
      <MosaicBackground />
      
      <MosaicNav data={data} sectionsConfig={mosaicConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main className="flex flex-col min-h-screen relative z-10 w-full pt-16 max-w-[2000px] mx-auto px-6 md:px-10 lg:px-16 pb-12">
        <MosaicHero data={data} />
        
        <MosaicAboutSection data={data} enabled={config.about} />
        <MosaicSkillsSection data={data} enabled={config.skills} />
        <MosaicWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <MosaicExperienceSection data={data} enabled={config.experience} />
        <MosaicEducationSection data={data} enabled={config.education} />
        <MosaicServicesSection data={data} enabled={config.services} />
        <MosaicCertificationsSection data={data} enabled={config.certifications} />
        <MosaicAchievementsSection data={data} enabled={config.achievements} />
        <MosaicTestimonialsSection data={data} enabled={config.testimonials} />
        <MosaicConnectSection data={data} enabled={config.connect} />
        <MosaicContactSection data={data} enabled={config.contact} />
        
        <MosaicFooter data={data} />
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

export default MosaicTemplate;
