import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const tesseraConfig: TemplateConfig = {
  id: 'tessera-01',
  name: 'Tessera',
  description: 'A professional portfolio constructed from interlocking visual pieces.',
  version: '1.0.0',
  category: 'modern',
  styles: ['modular', 'assembled', 'interlocking', 'structured'],
  supportedDomains: ['designers', 'engineers', 'architects', 'creators', 'strategists'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['modular', 'assembly', 'seams', 'tabs', 'joints'],
  author: 'System',
};
