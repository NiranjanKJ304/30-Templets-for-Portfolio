import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { monochromeConfig } from './template.config';

import { MonochromeBackground } from './components/MonochromeBackground';
import { MonochromeNav } from './components/MonochromeNav';
import { MonochromeHero } from './components/MonochromeHero';
import { MonochromeFooter } from './components/MonochromeFooter';

import { MonochromeAboutSection } from './sections/MonochromeAboutSection';
import { MonochromeSkillsSection } from './sections/MonochromeSkillsSection';
import { MonochromeWorkSection } from './sections/MonochromeWorkSection';
import { MonochromeExperienceSection } from './sections/MonochromeExperienceSection';
import { MonochromeEducationSection } from './sections/MonochromeEducationSection';
import { MonochromeServicesSection } from './sections/MonochromeServicesSection';
import { MonochromeCertificationsSection } from './sections/MonochromeCertificationsSection';
import { MonochromeAchievementsSection } from './sections/MonochromeAchievementsSection';
import { MonochromeTestimonialsSection } from './sections/MonochromeTestimonialsSection';
import { MonochromeConnectSection } from './sections/MonochromeConnectSection';
import { MonochromeContactSection } from './sections/MonochromeContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const MonochromeTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(monochromeConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  return (
    <div className="min-h-screen bg-transparent text-[#151515] dark:text-[#F2F0E9] font-body selection:bg-[#B44A35] selection:text-[#FAF9F5] relative z-0 overflow-x-hidden">
      <MonochromeBackground />
      
      <MonochromeNav data={data} sectionsConfig={monochromeConfig.sections.map(s => ({ ...s, enabled: config[s.id] ?? true }))} />
      
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        <MonochromeHero data={data} />
        <MonochromeAboutSection data={data} enabled={config.about} />
        <MonochromeSkillsSection data={data} enabled={config.skills} />
        <MonochromeWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />
        <MonochromeExperienceSection data={data} enabled={config.experience} />
        <MonochromeEducationSection data={data} enabled={config.education} />
        <MonochromeServicesSection data={data} enabled={config.services} />
        <MonochromeCertificationsSection data={data} enabled={config.certifications} />
        <MonochromeAchievementsSection data={data} enabled={config.achievements} />
        <MonochromeTestimonialsSection data={data} enabled={config.testimonials} />
        <MonochromeConnectSection data={data} enabled={config.connect} />
        <MonochromeContactSection data={data} enabled={config.contact} />
      </main>

      <MonochromeFooter data={data} />

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

export default MonochromeTemplate;
