import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const blueprintOSConfig: TemplateConfig = {
  id: 'blueprint-os-01',
  name: 'Blueprint OS',
  description: 'A professional workspace and document panel interface.',
  version: '1.0.0',
  category: 'technical',
  styles: ['workspace', 'os', 'windowed', 'panels'],
  supportedDomains: ['professionals', 'managers', 'engineers', 'designers', 'creatives'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['os', 'workspace', 'sidebar', 'windows'],
  author: 'System',
};
