import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { posterConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';

import { PosterNav, PosterSectionInfo } from './components/PosterNav';
import { PosterHeader } from './components/PosterHeader';
import { PosterFooter } from './components/PosterFooter';

import { PosterAboutSection } from './sections/PosterAboutSection';
import { PosterSkillsSection } from './sections/PosterSkillsSection';
import { PosterWorkSection } from './sections/PosterWorkSection';
import { PosterExperienceSection } from './sections/PosterExperienceSection';
import { PosterEducationSection } from './sections/PosterEducationSection';
import { PosterServicesSection } from './sections/PosterServicesSection';
import { PosterCertificationsSection } from './sections/PosterCertificationsSection';
import { PosterAchievementsSection } from './sections/PosterAchievementsSection';
import { PosterTestimonialsSection } from './sections/PosterTestimonialsSection';
import { PosterConnectSection } from './sections/PosterConnectSection';
import { PosterContactSection } from './sections/PosterContactSection';

import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

export const PosterTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(posterConfig.sections.map(s => [s.id, s.enabled]));

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections
  const visibleSections: PosterSectionInfo[] = [];
  let currentIndex = 1;
  
  const getIndex = () => (currentIndex++).toString().padStart(2, '0');

  // We only show navigation for these in Poster
  posterConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: s.id,
        index: getIndex()
      });
    }
  });
  
  // Re-map index by id for component passing
  const sectionIndexes = Object.fromEntries(visibleSections.map(s => [s.id, s.index]));

  return (
    <div className="min-h-screen bg-[#F4EFE4] dark:bg-[#151617] text-[#17191B] dark:text-[#F5F0E5] font-body selection:bg-[#3157D5] selection:text-[#FFFDF7] relative z-0 overflow-x-hidden" id="top">
      
      <main className="flex flex-col min-h-screen relative z-10 w-full max-w-[2400px] mx-auto px-6 md:px-12 lg:px-24">
        <PosterHeader data={data} />
        
        {visibleSections.length > 0 && (
          <PosterNav sections={visibleSections} />
        )}
        
        <div className="flex flex-col">
          {config.about !== false && <PosterAboutSection data={data} enabled={config.about} index={sectionIndexes.about} />}
          {config.skills !== false && <PosterSkillsSection data={data} enabled={config.skills} index={sectionIndexes.skills} />}
          {config.work !== false && <PosterWorkSection data={data} enabled={config.work} index={sectionIndexes.work} onOpenModal={onOpenProjectModal} />}
          {config.experience !== false && <PosterExperienceSection data={data} enabled={config.experience} index={sectionIndexes.experience} />}
          {config.education !== false && <PosterEducationSection data={data} enabled={config.education} index={sectionIndexes.education} />}
          {config.services !== false && <PosterServicesSection data={data} enabled={config.services} index={sectionIndexes.services} />}
          {config.certifications !== false && <PosterCertificationsSection data={data} enabled={config.certifications} index={sectionIndexes.certifications} />}
          {config.achievements !== false && <PosterAchievementsSection data={data} enabled={config.achievements} index={sectionIndexes.achievements} />}
          {config.testimonials !== false && <PosterTestimonialsSection data={data} enabled={config.testimonials} index={sectionIndexes.testimonials} />}
          {config.connect !== false && <PosterConnectSection data={data} enabled={config.connect} index={sectionIndexes.connect} />}
          {config.contact !== false && <PosterContactSection data={data} enabled={config.contact} index={sectionIndexes.contact} />}
        </div>
        
        <PosterFooter />
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

export default PosterTemplate;
