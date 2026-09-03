import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { kineticConfig } from './template.config';

import { KineticBackground } from './components/KineticBackground';
import { KineticNav } from './components/KineticNav';
import { KineticHero } from './components/KineticHero';
import { KineticFooter } from './components/KineticFooter';

import { KineticAboutSection } from './sections/KineticAboutSection';
import { KineticSkillsSection } from './sections/KineticSkillsSection';
import { KineticWorkSection } from './sections/KineticWorkSection';
import { KineticExperienceSection } from './sections/KineticExperienceSection';
import { KineticEducationSection } from './sections/KineticEducationSection';
import { KineticServicesSection } from './sections/KineticServicesSection';
import { KineticCertificationsSection } from './sections/KineticCertificationsSection';
import { KineticAchievementsSection } from './sections/KineticAchievementsSection';
import { KineticTestimonialsSection } from './sections/KineticTestimonialsSection';
import { KineticConnectSection } from './sections/KineticConnectSection';
import { KineticContactSection } from './sections/KineticContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const KineticTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(kineticConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-[#F3F0E8] dark:bg-[#111313] text-[#171717] dark:text-[#F3F0E8] font-body selection:bg-[#E84F3D] selection:text-white relative z-0 overflow-x-hidden">
      <KineticBackground />
      
      <KineticNav data={data} sectionsConfig={kineticConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main className="flex flex-col min-h-screen relative z-10 w-full overflow-x-hidden pt-16 sm:pt-20">
        <KineticHero data={data} />
        
        <KineticAboutSection data={data} enabled={config.about} />
        <KineticSkillsSection data={data} enabled={config.skills} />
        <KineticWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <KineticExperienceSection data={data} enabled={config.experience} />
        <KineticEducationSection data={data} enabled={config.education} />
        <KineticServicesSection data={data} enabled={config.services} />
        <KineticCertificationsSection data={data} enabled={config.certifications} />
        <KineticAchievementsSection data={data} enabled={config.achievements} />
        <KineticTestimonialsSection data={data} enabled={config.testimonials} />
        <KineticConnectSection data={data} enabled={config.connect} />
        <KineticContactSection data={data} enabled={config.contact} />
        
        <KineticFooter data={data} />
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

export default KineticTemplate;
