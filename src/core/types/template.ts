/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Template Definition & Component Props Contract
 */

import type { ComponentType } from 'react';
import type { PortfolioData } from './portfolio';
import type { SectionConfig, SectionId } from './section';
import type { AnimationLevel, ThemeOverride, ThemeTokens } from './theme';

export type TemplateCategory =
  | 'minimal'
  | 'executive'
  | 'editorial'
  | 'modern'
  | 'creative'
  | 'technical'
  | 'swiss'
  | 'brutalist'
  | 'cinema'
  | 'universal';

export interface TemplateConfig {
  id: string; // e.g. 'minimal-01', 'executive-01', 'neural-01'
  name: string;
  description: string;
  version: string;
  category: TemplateCategory;
  styles: string[];
  supportedDomains: string[];
  animationLevel: AnimationLevel;
  supportsDarkMode: boolean;
  sections: SectionConfig[];
  tags?: string[];
  author?: string;
  previewThumbnail?: string;
}

export interface TemplateProps {
  data: PortfolioData;
  sectionsConfig: Record<SectionId, boolean>;
  themeOverride?: ThemeOverride;
  activeProjectModalId?: string | null;
  onOpenProjectModal?: (projectId: string) => void;
  onCloseProjectModal?: () => void;
  isPreview?: boolean;
}

export type TemplateComponent = ComponentType<TemplateProps>;

export interface TemplateDefinition {
  config: TemplateConfig;
  component: TemplateComponent;
  defaultTheme: ThemeTokens;
}
