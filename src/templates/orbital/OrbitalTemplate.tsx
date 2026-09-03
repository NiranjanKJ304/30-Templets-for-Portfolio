import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { orbitalConfig } from './template.config';

import { OrbitalBackground } from './components/OrbitalBackground';
import { OrbitalNav } from './components/OrbitalNav';
import { OrbitalHero } from './components/OrbitalHero';
import { OrbitalFooter } from './components/OrbitalFooter';

import { OrbitalAboutSection } from './sections/OrbitalAboutSection';
import { OrbitalSkillsSection } from './sections/OrbitalSkillsSection';
import { OrbitalWorkSection } from './sections/OrbitalWorkSection';
import { OrbitalExperienceSection } from './sections/OrbitalExperienceSection';
import { OrbitalEducationSection } from './sections/OrbitalEducationSection';
import { OrbitalServicesSection } from './sections/OrbitalServicesSection';
import { OrbitalCertificationsSection } from './sections/OrbitalCertificationsSection';
import { OrbitalAchievementsSection } from './sections/OrbitalAchievementsSection';
import { OrbitalTestimonialsSection } from './sections/OrbitalTestimonialsSection';
import { OrbitalConnectSection } from './sections/OrbitalConnectSection';
import { OrbitalContactSection } from './sections/OrbitalContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const OrbitalTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(orbitalConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-transparent text-[#172326] dark:text-[#F0F4F1] font-body selection:bg-[#2F7C73] selection:text-[#FFFFFF] relative z-0 overflow-x-hidden">
      <OrbitalBackground />
      
      <div className="relative z-10 w-full flex flex-col">
        <div className="relative">
           <OrbitalHero data={data} />
           {/* Desktop Nav acts as a floating orbital ring anchored around the hero section context */}
           <OrbitalNav data={data} sectionsConfig={orbitalConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
        </div>

        <main className="w-full relative z-20 bg-transparent px-4 sm:px-8">
          <OrbitalAboutSection data={data} enabled={config.about} />
          <OrbitalSkillsSection data={data} enabled={config.skills} />
          <OrbitalWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
          <OrbitalExperienceSection data={data} enabled={config.experience} />
          <OrbitalEducationSection data={data} enabled={config.education} />
          <OrbitalServicesSection data={data} enabled={config.services} />
          <OrbitalCertificationsSection data={data} enabled={config.certifications} />
          <OrbitalAchievementsSection data={data} enabled={config.achievements} />
          <OrbitalTestimonialsSection data={data} enabled={config.testimonials} />
          <OrbitalConnectSection data={data} enabled={config.connect} />
          <OrbitalContactSection data={data} enabled={config.contact} />
        </main>
        
        <OrbitalFooter data={data} />
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

export default OrbitalTemplate;
