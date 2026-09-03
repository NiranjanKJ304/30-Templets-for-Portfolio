import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { folioConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { FolioNav, FolioSectionInfo } from './components/FolioNav';
import { FolioHeader } from './components/FolioHeader';
import { FolioFooter } from './components/FolioFooter';

import { FolioAboutSection } from './sections/FolioAboutSection';
import { FolioSkillsSection } from './sections/FolioSkillsSection';
import { FolioWorkSection } from './sections/FolioWorkSection';
import { FolioExperienceSection } from './sections/FolioExperienceSection';
import { FolioEducationSection } from './sections/FolioEducationSection';
import { FolioServicesSection } from './sections/FolioServicesSection';
import { FolioCertificationsSection } from './sections/FolioCertificationsSection';
import { FolioAchievementsSection } from './sections/FolioAchievementsSection';
import { FolioTestimonialsSection } from './sections/FolioTestimonialsSection';
import { FolioConnectSection } from './sections/FolioConnectSection';
import { FolioContactSection } from './sections/FolioContactSection';

export const FolioTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(folioConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections to pass as page numbers
  const visibleSections: FolioSectionInfo[] = [];

  // Profile is first
  visibleSections.push({
    id: 'profile',
    title: 'COVER',
    pageNum: '01'
  });

  let pageCounter = 2;
  
  folioConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id.toUpperCase(),
        pageNum: String(pageCounter).padStart(2, '0')
      });
      pageCounter++;
    }
  });

  const getPageNum = (id: string) => {
    return visibleSections.find(s => s.id === id)?.pageNum || '00';
  };

  return (
    <div className="min-h-screen bg-[#EAE7DF] dark:bg-[#141716] font-body text-[#1D2020] dark:text-[#F0EEE6] selection:bg-[#B85F49] selection:text-[#FAF8F1] dark:selection:bg-[#D07961] dark:selection:text-[#141716]" id="top">
      
      {visibleSections.length > 1 && (
        <FolioNav sections={visibleSections} />
      )}

      <main className="w-full relative flex flex-col items-center pb-24 md:pb-32 lg:pb-40">
        <FolioHeader data={data} pageNum={getPageNum('profile')} />
        
        {config.about !== false && <FolioAboutSection data={data} enabled={config.about} pageNum={getPageNum('about')} />}
        {config.skills !== false && <FolioSkillsSection data={data} enabled={config.skills} pageNum={getPageNum('skills')} />}
        {config.work !== false && <FolioWorkSection data={data} enabled={config.work} pageNum={getPageNum('work')} onOpenModal={onOpenProjectModal} />}
        {config.experience !== false && <FolioExperienceSection data={data} enabled={config.experience} pageNum={getPageNum('experience')} />}
        {config.education !== false && <FolioEducationSection data={data} enabled={config.education} pageNum={getPageNum('education')} />}
        {config.services !== false && <FolioServicesSection data={data} enabled={config.services} pageNum={getPageNum('services')} />}
        {config.certifications !== false && <FolioCertificationsSection data={data} enabled={config.certifications} pageNum={getPageNum('certifications')} />}
        {config.achievements !== false && <FolioAchievementsSection data={data} enabled={config.achievements} pageNum={getPageNum('achievements')} />}
        {config.testimonials !== false && <FolioTestimonialsSection data={data} enabled={config.testimonials} pageNum={getPageNum('testimonials')} />}
        {config.connect !== false && <FolioConnectSection data={data} enabled={config.connect} pageNum={getPageNum('connect')} />}
        {config.contact !== false && <FolioContactSection data={data} enabled={config.contact} pageNum={getPageNum('contact')} />}
        
        <FolioFooter pageNum={String(pageCounter).padStart(2, '0')} />
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

export default FolioTemplate;
