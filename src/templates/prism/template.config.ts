import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const prismConfig: TemplateConfig = {
  id: 'prism-01',
  name: 'Prism',
  description: 'A portfolio interpreted through faceted planes, refracted geometry, angular intersections, and controlled color dispersion.',
  version: '1.0.0',
  category: 'creative',
  styles: ['faceted', 'angular', 'geometric', 'spatial'],
  supportedDomains: ['designers', 'developers', 'creatives', 'architects'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['geometric', 'angular', 'refracted', 'faceted'],
  author: 'System',
};
