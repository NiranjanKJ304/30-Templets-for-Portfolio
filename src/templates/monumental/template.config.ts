import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const monumentalConfig: TemplateConfig = {
  id: 'monumental-01',
  name: 'Monumental',
  description: 'A large-scale portfolio built around the visual language of physical structures and massive typography.',
  version: '1.0.0',
  category: 'creative',
  styles: ['monumental', 'structural', 'oversized', 'spacious'],
  supportedDomains: ['directors', 'artists', 'designers', 'creatives'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['structural', 'massive', 'bold', 'architectural'],
  author: 'System',
};
