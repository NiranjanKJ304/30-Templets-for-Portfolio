/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Portfolio Template Lab - Universal Template Development Workbench
 */

import React, { useState, useEffect } from 'react';
import { getAllTemplates, getTemplate } from './core/registry/templateRegistry';
import { FIXTURES, getFixtureById, getDefaultFixture } from './core/fixtures';
import type { SectionId } from './core/types/section';
import { getDefaultSectionsConfig } from './core/utils/sectionVisibility';
import { PreviewToolbar, type ViewportMode } from './components/PreviewToolbar';
import { SectionTogglePanel } from './components/SectionTogglePanel';
import { DataInspectorModal } from './components/DataInspectorModal';
import { TemplateRoadmapModal } from './components/TemplateRoadmapModal';
import { EmptyTemplateLab } from './components/EmptyTemplateLab';
import { cn } from './core/utils/cn';

export default function App() {
  const registeredTemplates = getAllTemplates();

  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    registeredTemplates[0]?.config.id || ''
  );
  const [selectedFixtureId, setSelectedFixtureId] = useState<string>('developer');
  const [sectionsConfig, setSectionsConfig] = useState<Record<SectionId, boolean>>(
    getDefaultSectionsConfig()
  );
  const [viewport, setViewport] = useState<ViewportMode>('full');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Modals state
  const [isSectionManagerOpen, setIsSectionManagerOpen] = useState(false);
  const [isDataInspectorOpen, setIsDataInspectorOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [activeProjectModalId, setActiveProjectModalId] = useState<string | null>(null);

  // Sync dark mode class with root html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Retrieve active fixture
  const currentFixture = getFixtureById(selectedFixtureId) || getDefaultFixture();
  const currentTemplate = selectedTemplateId ? getTemplate(selectedTemplateId) : undefined;

  // Section toggle handlers
  const handleToggleSection = (sectionId: SectionId) => {
    if (sectionId === 'profile') return; // Profile is strictly mandatory
    setSectionsConfig((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleSetAllSections = (enabled: boolean) => {
    setSectionsConfig((prev) => {
      const updated = { ...prev };
      (Object.keys(updated) as SectionId[]).forEach((key) => {
        if (key === 'profile') {
          updated[key] = true; // Rule #5: Profile remains locked
        } else {
          updated[key] = enabled;
        }
      });
      return updated;
    });
  };

  // Viewport container width constraints
  const viewportWidthClass = {
    full: 'w-full',
    desktop: 'max-w-[1440px] mx-auto shadow-2xl border-x border-[#1A1A1A]/10 dark:border-white/10',
    tablet: 'max-w-[768px] mx-auto shadow-2xl border-x border-[#1A1A1A]/10 dark:border-white/10',
    mobile: 'max-w-[375px] mx-auto shadow-2xl border-x border-[#1A1A1A]/10 dark:border-white/10',
    'mobile-sm': 'max-w-[320px] mx-auto shadow-2xl border-x border-[#1A1A1A]/10 dark:border-white/10',
  }[viewport];

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#1A1A1A] dark:bg-[#121212] dark:text-[#F5F5F3] flex flex-col font-sans transition-colors duration-200">
      {/* Top Development Toolbar */}
      <PreviewToolbar
        templates={registeredTemplates}
        selectedTemplateId={selectedTemplateId}
        onSelectTemplate={setSelectedTemplateId}
        fixtures={FIXTURES}
        selectedFixtureId={selectedFixtureId}
        onSelectFixture={setSelectedFixtureId}
        viewport={viewport}
        onSelectViewport={setViewport}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onOpenSectionManager={() => setIsSectionManagerOpen(true)}
        onOpenDataInspector={() => setIsDataInspectorOpen(true)}
        onOpenRoadmap={() => setIsRoadmapOpen(true)}
      />

      {/* Main Preview Stage */}
      <main className="flex-1 flex flex-col items-center justify-start p-0 overflow-x-hidden">
        {viewport !== 'full' && (
          <div className="w-full flex items-center justify-center py-2 text-xs font-mono text-[#1A1A1A]/50 dark:text-white/50 bg-[#EEEEEB] dark:bg-[#1C1C1B] border-b border-[#1A1A1A]/10 dark:border-white/10 select-none">
            Viewport Simulation: <span className="font-bold ml-1 uppercase">{viewport} ({viewportWidthClass.split(' ')[0]})</span>
          </div>
        )}

        <div
          className={cn(
            'w-full min-h-[calc(100vh-64px)] bg-white dark:bg-[#1A1A1A] transition-all duration-300 flex flex-col',
            viewportWidthClass
          )}
        >
          {currentTemplate ? (
            // Render active registered template component
            <currentTemplate.component
              data={currentFixture.data}
              sectionsConfig={sectionsConfig}
              activeProjectModalId={activeProjectModalId}
              onOpenProjectModal={(id) => setActiveProjectModalId(id)}
              onCloseProjectModal={() => setActiveProjectModalId(null)}
              isPreview={true}
            />
          ) : (
            // Render Template Development Lab Architecture Verification & Testing Workbench
            <EmptyTemplateLab
              currentFixture={currentFixture}
              sectionsConfig={sectionsConfig}
              onSelectFixture={setSelectedFixtureId}
              onToggleSection={handleToggleSection}
              onOpenSectionManager={() => setIsSectionManagerOpen(true)}
              onOpenRoadmap={() => setIsRoadmapOpen(true)}
              onOpenDataInspector={() => setIsDataInspectorOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Section Visibility Manager Modal */}
      <SectionTogglePanel
        isOpen={isSectionManagerOpen}
        onClose={() => setIsSectionManagerOpen(false)}
        sectionsConfig={sectionsConfig}
        onToggleSection={handleToggleSection}
        onSetAllSections={handleSetAllSections}
        data={currentFixture.data}
      />

      {/* Raw Data & Contract Inspector Modal */}
      <DataInspectorModal
        isOpen={isDataInspectorOpen}
        onClose={() => setIsDataInspectorOpen(false)}
        fixture={currentFixture}
      />

      {/* Planned 35+ Templates Roadmap Modal */}
      <TemplateRoadmapModal
        isOpen={isRoadmapOpen}
        onClose={() => setIsRoadmapOpen(false)}
        registeredTemplates={registeredTemplates}
      />
    </div>
  );
}
