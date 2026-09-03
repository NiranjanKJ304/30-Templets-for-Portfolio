import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const indexConfig: TemplateConfig = {
  id: 'index-01',
  name: 'Index',
  description: 'A professional directory and index interface.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['directory', 'index', 'tabular', 'structured'],
  supportedDomains: ['professionals', 'developers', 'engineers', 'analysts', 'consultants'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['directory', 'index', 'tabular', 'list'],
  author: 'System',
};
