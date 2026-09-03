import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const chromaConfig: TemplateConfig = {
  id: 'chroma-01',
  name: 'Chroma',
  description: 'A professional portfolio organized through large controlled color fields.',
  version: '1.0.0',
  category: 'creative',
  styles: ['chromatic', 'spatial', 'color-field', 'immersive'],
  supportedDomains: ['designers', 'artists', 'creatives', 'directors', 'strategists'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['color', 'fields', 'spatial', 'zones', 'immersive'],
  author: 'System',
};
