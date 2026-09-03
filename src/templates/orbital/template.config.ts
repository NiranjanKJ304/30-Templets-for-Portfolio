import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const orbitalConfig: TemplateConfig = {
  id: 'orbital-01',
  name: 'Orbital',
  description: 'A spatial radial portfolio experience.',
  version: '1.0.0',
  category: 'creative',
  styles: ['spatial', 'radial', 'futuristic', 'modern', 'curved'],
  supportedDomains: ['designers', 'developers', 'engineers', 'researchers', 'creatives'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['orbital', 'radial', 'spatial', 'concentric'],
  author: 'Universal Portfolio Builder',
};
