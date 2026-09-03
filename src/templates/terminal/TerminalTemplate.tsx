import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { terminalConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { TerminalChrome } from './components/TerminalChrome';
import { TerminalNav, TerminalSectionInfo } from './components/TerminalNav';
import { TerminalHeader } from './components/TerminalHeader';
import { TerminalFooter } from './components/TerminalFooter';

import { TerminalAboutSection } from './sections/TerminalAboutSection';
import { TerminalSkillsSection } from './sections/TerminalSkillsSection';
import { TerminalWorkSection } from './sections/TerminalWorkSection';
import { TerminalExperienceSection } from './sections/TerminalExperienceSection';
import { TerminalEducationSection } from './sections/TerminalEducationSection';
import { TerminalServicesSection } from './sections/TerminalServicesSection';
import { TerminalCertificationsSection } from './sections/TerminalCertificationsSection';
import { TerminalAchievementsSection } from './sections/TerminalAchievementsSection';
import { TerminalTestimonialsSection } from './sections/TerminalTestimonialsSection';
import { TerminalConnectSection } from './sections/TerminalConnectSection';
import { TerminalContactSection } from './sections/TerminalContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const TerminalTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(terminalConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: TerminalSectionInfo[] = [];
  terminalConfig.sections.forEach(s => {
    if (s.id === 'profile') {
      visibleSections.push({
        id: 'top',
        title: 'profile',
        index: '01'
      });
    } else if (isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id,
        index: (visibleSections.length + 1).toString().padStart(2, '0')
      });
    }
  });

  return (
    <TerminalChrome title={`${data.profile.name.toLowerCase().replace(/\s+/g, '_')} ~ bash`}>
      <div id="top" />
      <TerminalHeader data={data} />
      
      <TerminalNav sections={visibleSections} />
      
      <div className="flex flex-col gap-12">
        {config.about !== false && <TerminalAboutSection data={data} enabled={config.about} />}
        {config.skills !== false && <TerminalSkillsSection data={data} enabled={config.skills} />}
        {config.work !== false && <TerminalWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <TerminalExperienceSection data={data} enabled={config.experience} />}
        {config.education !== false && <TerminalEducationSection data={data} enabled={config.education} />}
        {config.services !== false && <TerminalServicesSection data={data} enabled={config.services} />}
        {config.certifications !== false && <TerminalCertificationsSection data={data} enabled={config.certifications} />}
        {config.achievements !== false && <TerminalAchievementsSection data={data} enabled={config.achievements} />}
        {config.testimonials !== false && <TerminalTestimonialsSection data={data} enabled={config.testimonials} />}
        {config.connect !== false && <TerminalConnectSection data={data} enabled={config.connect} />}
        {config.contact !== false && <TerminalContactSection data={data} enabled={config.contact} />}
      </div>
      
      <TerminalFooter />

      {activeProject && onCloseProjectModal && (
        <ProjectDetailModal 
          project={activeProject} 
          isOpen={!!activeProjectModalId} 
          onClose={onCloseProjectModal} 
        />
      )}
    </TerminalChrome>
  );
};

export default TerminalTemplate;
