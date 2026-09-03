import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const collageConfig: TemplateConfig = {
  id: 'collage-01',
  name: 'Paper Collage',
  description: 'A tactile, layered, and editorial portfolio inspired by physical paper compositions.',
  version: '1.0.0',
  category: 'creative',
  styles: ['tactile', 'layered', 'editorial', 'cutout', 'creative'],
  supportedDomains: ['designers', 'creatives', 'developers', 'artists', 'architects', 'consultants', 'writers'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['collage', 'paper', 'tactile', 'editorial', 'layered'],
  author: 'Universal Portfolio Builder',
};
