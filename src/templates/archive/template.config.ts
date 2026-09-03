import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const archiveConfig: TemplateConfig = {
  id: 'archive-01',
  name: 'Archive',
  description: 'A personal archive and professional collection catalog.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['archive', 'catalogue', 'indexed', 'minimal'],
  supportedDomains: ['researchers', 'academics', 'archivists', 'curators', 'professionals'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['archive', 'index', 'catalogue', 'structured'],
  author: 'System',
};
