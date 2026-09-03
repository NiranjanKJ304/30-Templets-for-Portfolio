import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { archiveConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { ArchiveNav } from './components/ArchiveNav';
import { ArchiveIndex, ArchiveSectionInfo } from './components/ArchiveIndex';
import { ArchiveHeader } from './components/ArchiveHeader';
import { ArchiveFooter } from './components/ArchiveFooter';
import { ArchiveDivider } from './components/ArchiveDivider';

import { ArchiveAboutSection } from './sections/ArchiveAboutSection';
import { ArchiveSkillsSection } from './sections/ArchiveSkillsSection';
import { ArchiveWorkSection } from './sections/ArchiveWorkSection';
import { ArchiveExperienceSection } from './sections/ArchiveExperienceSection';
import { ArchiveEducationSection } from './sections/ArchiveEducationSection';
import { ArchiveServicesSection } from './sections/ArchiveServicesSection';
import { ArchiveCertificationsSection } from './sections/ArchiveCertificationsSection';
import { ArchiveAchievementsSection } from './sections/ArchiveAchievementsSection';
import { ArchiveTestimonialsSection } from './sections/ArchiveTestimonialsSection';
import { ArchiveConnectSection } from './sections/ArchiveConnectSection';
import { ArchiveContactSection } from './sections/ArchiveContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const ArchiveTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(archiveConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: ArchiveSectionInfo[] = [];
  archiveConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id.toUpperCase(),
        index: (visibleSections.length + 1).toString().padStart(2, '0')
      });
    }
  });

  const getSectionIndex = (id: string) => {
    return visibleSections.find(s => s.id === id)?.index;
  };

  return (
    <div className="min-h-screen bg-[#F3F0E8] dark:bg-[#151716] text-[#20211F] dark:text-[#F1EEE5] font-body selection:bg-[#9D4937] selection:text-[#FFFFFF] relative z-0 overflow-x-hidden">
      
      <ArchiveNav sections={visibleSections} title={data.profile.name} />
      
      <main className="flex flex-col min-h-screen relative z-10 w-full pt-16 max-w-[2000px] mx-auto px-6 md:px-12 pb-12">
        <ArchiveHeader data={data} />
        
        <div className="mt-8 mb-16">
          <ArchiveIndex sections={visibleSections} />
        </div>
        
        <div className="flex flex-col gap-24">
          {config.about !== false && <ArchiveAboutSection data={data} enabled={config.about} index={getSectionIndex('about')} />}
          {config.skills !== false && <ArchiveSkillsSection data={data} enabled={config.skills} index={getSectionIndex('skills')} />}
          {config.work !== false && <ArchiveWorkSection data={data} enabled={config.work} index={getSectionIndex('work')} onOpenModal={onOpenProjectModal} />}
          {config.experience !== false && <ArchiveExperienceSection data={data} enabled={config.experience} index={getSectionIndex('experience')} />}
          {config.education !== false && <ArchiveEducationSection data={data} enabled={config.education} index={getSectionIndex('education')} />}
          {config.services !== false && <ArchiveServicesSection data={data} enabled={config.services} index={getSectionIndex('services')} />}
          {config.certifications !== false && <ArchiveCertificationsSection data={data} enabled={config.certifications} index={getSectionIndex('certifications')} />}
          {config.achievements !== false && <ArchiveAchievementsSection data={data} enabled={config.achievements} index={getSectionIndex('achievements')} />}
          {config.testimonials !== false && <ArchiveTestimonialsSection data={data} enabled={config.testimonials} index={getSectionIndex('testimonials')} />}
          {config.connect !== false && <ArchiveConnectSection data={data} enabled={config.connect} index={getSectionIndex('connect')} />}
          {config.contact !== false && <ArchiveContactSection data={data} enabled={config.contact} index={getSectionIndex('contact')} />}
        </div>
        
        <ArchiveFooter data={data} />
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

export default ArchiveTemplate;
