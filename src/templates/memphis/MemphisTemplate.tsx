import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { MemphisBackground } from './components/MemphisBackground';
import { MemphisNav } from './components/MemphisNav';
import { MemphisHero } from './components/MemphisHero';
import { MemphisFooter } from './components/MemphisFooter';
import { memphisConfig } from './template.config';

import { MemphisAboutSection } from './sections/MemphisAboutSection';
import { MemphisSkillsSection } from './sections/MemphisSkillsSection';
import { MemphisWorkSection } from './sections/MemphisWorkSection';
import { MemphisExperienceSection } from './sections/MemphisExperienceSection';
import { MemphisEducationSection } from './sections/MemphisEducationSection';
import { MemphisServicesSection } from './sections/MemphisServicesSection';
import { MemphisCertificationsSection } from './sections/MemphisCertificationsSection';
import { MemphisAchievementsSection } from './sections/MemphisAchievementsSection';
import { MemphisTestimonialsSection } from './sections/MemphisTestimonialsSection';
import { MemphisConnectSection } from './sections/MemphisConnectSection';
import { MemphisContactSection } from './sections/MemphisContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const MemphisTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  // Use provided config or fallback to default
  const config = sectionsConfig || Object.fromEntries(memphisConfig.sections.map(s => [s.id, s.enabled]));

  // Find active project for modal
  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-[#FFFDF7] dark:bg-[#111113] text-[#202124] dark:text-[#F8F7F2] font-body selection:bg-[#EC4899] selection:text-white relative">
      <MemphisBackground />
      
      <MemphisNav data={data} sectionsConfig={memphisConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main>
        <MemphisHero data={data} />
        <MemphisAboutSection data={data} enabled={config.about} />
        <MemphisSkillsSection data={data} enabled={config.skills} />
        <MemphisWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <MemphisExperienceSection data={data} enabled={config.experience} />
        <MemphisEducationSection data={data} enabled={config.education} />
        <MemphisServicesSection data={data} enabled={config.services} />
        <MemphisCertificationsSection data={data} enabled={config.certifications} />
        <MemphisAchievementsSection data={data} enabled={config.achievements} />
        <MemphisTestimonialsSection data={data} enabled={config.testimonials} />
        <MemphisConnectSection data={data} enabled={config.connect} />
        <MemphisContactSection data={data} enabled={config.contact} />
      </main>

      <MemphisFooter data={data} />

      {/* Project Modal Integration */}
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

export default MemphisTemplate;
