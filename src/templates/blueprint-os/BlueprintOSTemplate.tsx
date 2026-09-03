import React from 'react';
import type { TemplateProps } from '../../core/types/template';
import { blueprintOSConfig } from './template.config';
import { isSectionVisible } from '../../core/utils/sectionVisibility';
import { ImageWithFallback } from '../../core/components/ImageWithFallback';
import { ProjectDetailModal } from '../../core/components/ProjectDetailModal';

import { WorkspaceSidebar, WorkspaceSectionInfo } from './components/WorkspaceSidebar';
import { WorkspaceFooter } from './components/WorkspaceFooter';
import { WorkspaceWindow } from './components/WorkspaceWindow';

import { BlueprintOSAboutSection } from './sections/BlueprintOSAboutSection';
import { BlueprintOSSkillsSection } from './sections/BlueprintOSSkillsSection';
import { BlueprintOSWorkSection } from './sections/BlueprintOSWorkSection';
import { BlueprintOSExperienceSection } from './sections/BlueprintOSExperienceSection';
import { BlueprintOSEducationSection } from './sections/BlueprintOSEducationSection';
import { BlueprintOSServicesSection } from './sections/BlueprintOSServicesSection';
import { BlueprintOSCertificationsSection } from './sections/BlueprintOSCertificationsSection';
import { BlueprintOSAchievementsSection } from './sections/BlueprintOSAchievementsSection';
import { BlueprintOSTestimonialsSection } from './sections/BlueprintOSTestimonialsSection';
import { BlueprintOSConnectSection } from './sections/BlueprintOSConnectSection';
import { BlueprintOSContactSection } from './sections/BlueprintOSContactSection';

export const BlueprintOSTemplate: React.FC<TemplateProps> = ({
  data,
  sectionsConfig,
  activeProjectModalId,
  onOpenProjectModal,
  onCloseProjectModal,
}) => {
  const config = sectionsConfig || Object.fromEntries(blueprintOSConfig.sections.map(s => [s.id, s.enabled]));
  const { profile } = data;

  const activeProject = activeProjectModalId && data.projects 
    ? data.projects.find(p => p.id === activeProjectModalId) 
    : undefined;

  // Generate dynamic index for visible sections for sidebar
  const visibleSections: WorkspaceSectionInfo[] = [];
  let currentIndex = 1;
  
  const getIndex = () => (currentIndex++).toString().padStart(2, '0');

  // Profile is always first
  visibleSections.push({
    id: 'profile',
    title: 'PROFILE_IDENTITY',
    index: getIndex()
  });

  blueprintOSConfig.sections.forEach(s => {
    if (s.id !== 'profile' && isSectionVisible(s.id, config, data)) {
      visibleSections.push({
        id: s.id,
        title: `${s.id.toUpperCase()}_DATA`,
        index: getIndex()
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#E9ECE8] dark:bg-[#111615] text-[#1D2523] dark:text-[#EEF2EC] font-body selection:bg-[#356B63] selection:text-[#FFFFFF]" id="top">
      
      {/* Top OS-like Menu Bar */}
      <div className="w-full h-8 bg-[#1D2523] dark:bg-[#0A0D0C] text-[#EEF2EC] flex justify-between items-center px-4 font-mono text-[10px] uppercase sticky top-0 z-50">
        <div className="flex gap-4">
          <span className="font-bold">SYSTEM_V1.0</span>
          <span className="hidden sm:inline">WORKSPACE_OS</span>
        </div>
        <div className="flex gap-4 opacity-70">
          <span>{profile.availableForHire ? 'STATUS: AVAILABLE' : 'STATUS: BUSY'}</span>
          <span className="hidden sm:inline">USER: {profile.name}</span>
        </div>
      </div>

      <div className="max-w-[2000px] mx-auto p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 relative">
        <WorkspaceSidebar sections={visibleSections} />

        <main className="flex-1 flex flex-col gap-8 md:gap-12 min-w-0">
          {/* Profile Window */}
          <section id="profile" className="scroll-mt-24">
            <WorkspaceWindow title="USER_PROFILE_IDENTITY.exe">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 border border-[#CBD2CD] dark:border-[#3A4340] bg-[#E9ECE8] dark:bg-[#111615] p-2">
                  {profile.avatarUrl ? (
                    <ImageWithFallback
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-heading font-bold text-4xl text-[#68716D] dark:text-[#A6ADA8] select-none">
                      {profile.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-[#1D2523] dark:text-[#EEF2EC] uppercase tracking-tighter">
                      {profile.name}
                    </h1>
                    {(profile.role || profile.headline) && (
                      <h2 className="font-body font-bold text-lg md:text-xl text-[#356B63] dark:text-[#75A89E] mt-2">
                        {[profile.role, profile.headline].filter(Boolean).join(' // ')}
                      </h2>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 font-mono text-xs text-[#68716D] dark:text-[#A6ADA8]">
                    {profile.location && (
                      <div className="flex gap-4">
                        <span className="w-24 uppercase">LOCATION</span>
                        <span className="text-[#1D2523] dark:text-[#EEF2EC]">{profile.location}</span>
                      </div>
                    )}
                    {profile.contactEmail && (
                      <div className="flex gap-4">
                        <span className="w-24 uppercase">EMAIL</span>
                        <a href={`mailto:${profile.contactEmail}`} className="text-[#1D2523] dark:text-[#EEF2EC] hover:text-[#356B63] dark:hover:text-[#75A89E] transition-colors">
                          {profile.contactEmail}
                        </a>
                      </div>
                    )}
                    {profile.resumeUrl && (
                      <div className="flex gap-4 mt-4">
                        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-[#1D2523] dark:bg-[#EEF2EC] text-[#EEF2EC] dark:text-[#1D2523] px-4 py-2 uppercase hover:bg-[#356B63] dark:hover:bg-[#75A89E] hover:text-[#FFFFFF] transition-colors">
                          DOWNLOAD_CV
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </WorkspaceWindow>
          </section>

          {config.about !== false && <BlueprintOSAboutSection data={data} enabled={config.about} />}
          {config.skills !== false && <BlueprintOSSkillsSection data={data} enabled={config.skills} />}
          {config.work !== false && <BlueprintOSWorkSection data={data} enabled={config.work} onOpenModal={onOpenProjectModal} />}
          {config.experience !== false && <BlueprintOSExperienceSection data={data} enabled={config.experience} />}
          {config.education !== false && <BlueprintOSEducationSection data={data} enabled={config.education} />}
          {config.services !== false && <BlueprintOSServicesSection data={data} enabled={config.services} />}
          {config.certifications !== false && <BlueprintOSCertificationsSection data={data} enabled={config.certifications} />}
          {config.achievements !== false && <BlueprintOSAchievementsSection data={data} enabled={config.achievements} />}
          {config.testimonials !== false && <BlueprintOSTestimonialsSection data={data} enabled={config.testimonials} />}
          {config.connect !== false && <BlueprintOSConnectSection data={data} enabled={config.connect} />}
          {config.contact !== false && <BlueprintOSContactSection data={data} enabled={config.contact} />}
          
          <WorkspaceFooter />
        </main>
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

export default BlueprintOSTemplate;
