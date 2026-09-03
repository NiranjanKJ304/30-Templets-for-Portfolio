import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const memphisConfig: TemplateConfig = {
  id: 'memphis-01',
  name: 'Memphis',
  description: 'A playful, expressive, geometric portfolio inspired by Memphis design.',
  version: '1.0.0',
  category: 'creative',
  styles: ['playful', 'geometric', 'colorful', 'expressive', 'editorial'],
  supportedDomains: ['designers', 'creatives', 'developers', 'artists', 'architects', 'consultants'],
  animationLevel: 'expressive',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['memphis', 'geometric', 'playful', 'creative', 'colorful'],
  author: 'Universal Portfolio Builder',
};
