import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const kineticConfig: TemplateConfig = {
  id: 'kinetic-01',
  name: 'Kinetic',
  description: 'A motion-led editorial portfolio based on kinetic typography.',
  version: '1.0.0',
  category: 'creative',
  styles: ['kinetic', 'typography', 'motion', 'directional', 'bold'],
  supportedDomains: ['designers', 'developers', 'creators', 'directors', 'artists'],
  animationLevel: 'expressive',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['kinetic', 'motion', 'marquee', 'grotesk'],
  author: 'System',
};
