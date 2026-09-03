import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const posterConfig: TemplateConfig = {
  id: 'poster-01',
  name: 'Typographic Poster',
  description: 'A large-format typographic poster translated into a responsive portfolio.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['typographic', 'poster', 'graphic', 'bold'],
  supportedDomains: ['designers', 'directors', 'creatives', 'artists', 'studios'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['poster', 'typography', 'asymmetry', 'oversized'],
  author: 'System',
};
