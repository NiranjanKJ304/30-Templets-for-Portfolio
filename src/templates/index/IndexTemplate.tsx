import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { indexConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { IndexNav, IndexSectionInfo } from './components/IndexNav';
import { IndexHeader } from './components/IndexHeader';
import { IndexFooter } from './components/IndexFooter';

import { IndexAboutSection } from './sections/IndexAboutSection';
import { IndexSkillsSection } from './sections/IndexSkillsSection';
import { IndexWorkSection } from './sections/IndexWorkSection';
import { IndexExperienceSection } from './sections/IndexExperienceSection';
import { IndexEducationSection } from './sections/IndexEducationSection';
import { IndexServicesSection } from './sections/IndexServicesSection';
import { IndexCertificationsSection } from './sections/IndexCertificationsSection';
import { IndexAchievementsSection } from './sections/IndexAchievementsSection';
import { IndexTestimonialsSection } from './sections/IndexTestimonialsSection';
import { IndexConnectSection } from './sections/IndexConnectSection';
import { IndexContactSection } from './sections/IndexContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const IndexTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(indexConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: IndexSectionInfo[] = [];
  indexConfig.sections.forEach(s => {
    if (s.id === 'profile') {
      visibleSections.push({
        id: 'top', // Map profile to top
        title: 'PROFILE',
        index: '01'
      });
    } else if (isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id.toUpperCase(),
        index: (visibleSections.length + 1).toString().padStart(2, '0')
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#F6F5F1] dark:bg-[#121514] text-[#181A19] dark:text-[#F2F1EA] font-body selection:bg-[#365F58] selection:text-[#FFFFFF] relative z-0 overflow-x-hidden" id="top">
      
      <IndexNav sections={visibleSections} title={data.profile.name} />
      
      <main className="flex flex-col min-h-screen relative z-10 w-full pt-14 max-w-[2000px] mx-auto px-6 md:px-12 lg:px-16">
        <IndexHeader data={data} />
        
        <div className="flex flex-col">
          {config.about !== false && <IndexAboutSection data={data} enabled={config.about} />}
          {config.skills !== false && <IndexSkillsSection data={data} enabled={config.skills} />}
          {config.work !== false && <IndexWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
          {config.experience !== false && <IndexExperienceSection data={data} enabled={config.experience} />}
          {config.education !== false && <IndexEducationSection data={data} enabled={config.education} />}
          {config.services !== false && <IndexServicesSection data={data} enabled={config.services} />}
          {config.certifications !== false && <IndexCertificationsSection data={data} enabled={config.certifications} />}
          {config.achievements !== false && <IndexAchievementsSection data={data} enabled={config.achievements} />}
          {config.testimonials !== false && <IndexTestimonialsSection data={data} enabled={config.testimonials} />}
          {config.connect !== false && <IndexConnectSection data={data} enabled={config.connect} />}
          {config.contact !== false && <IndexContactSection data={data} enabled={config.contact} />}
        </div>
        
        <IndexFooter data={data} />
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

export default IndexTemplate;
