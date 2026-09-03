import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { duplexConfig } from './template.config';

import { DuplexBackground } from './components/DuplexBackground';
import { DuplexNav } from './components/DuplexNav';
import { DuplexHero } from './components/DuplexHero';
import { DuplexFooter } from './components/DuplexFooter';

import { DuplexAboutSection } from './sections/DuplexAboutSection';
import { DuplexSkillsSection } from './sections/DuplexSkillsSection';
import { DuplexWorkSection } from './sections/DuplexWorkSection';
import { DuplexExperienceSection } from './sections/DuplexExperienceSection';
import { DuplexEducationSection } from './sections/DuplexEducationSection';
import { DuplexServicesSection } from './sections/DuplexServicesSection';
import { DuplexCertificationsSection } from './sections/DuplexCertificationsSection';
import { DuplexAchievementsSection } from './sections/DuplexAchievementsSection';
import { DuplexTestimonialsSection } from './sections/DuplexTestimonialsSection';
import { DuplexConnectSection } from './sections/DuplexConnectSection';
import { DuplexContactSection } from './sections/DuplexContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const DuplexTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(duplexConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-[#F2EEE7] dark:bg-[#111313] text-[#181818] dark:text-[#F1EEE7] font-body selection:bg-[#D35F43] selection:text-white relative z-0 overflow-x-hidden flex flex-col lg:flex-row">
      <DuplexBackground />
      
      {/* Mobile Navigation (Desktop is handled inside Hero) */}
      <DuplexNav data={data} sectionsConfig={duplexConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      {/* Left Panel - Fixed on Desktop */}
      <DuplexHero data={data} sectionsConfig={duplexConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      {/* Right Panel - Scrolling Content */}
      <div className="w-full lg:w-[65%] xl:w-[60%] lg:ml-[35%] xl:ml-[40%] flex flex-col min-h-screen pt-16 lg:pt-0 relative z-10">
        <main className="flex-1 flex flex-col">
          <DuplexAboutSection data={data} enabled={config.about} />
          <DuplexSkillsSection data={data} enabled={config.skills} />
          <DuplexWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
          <DuplexExperienceSection data={data} enabled={config.experience} />
          <DuplexEducationSection data={data} enabled={config.education} />
          <DuplexServicesSection data={data} enabled={config.services} />
          <DuplexCertificationsSection data={data} enabled={config.certifications} />
          <DuplexAchievementsSection data={data} enabled={config.achievements} />
          <DuplexTestimonialsSection data={data} enabled={config.testimonials} />
          <DuplexConnectSection data={data} enabled={config.connect} />
          <DuplexContactSection data={data} enabled={config.contact} />
        </main>
        
        <DuplexFooter data={data} />
      </div>

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

export default DuplexTemplate;
