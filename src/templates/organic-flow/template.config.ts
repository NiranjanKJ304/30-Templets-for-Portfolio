import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const organicFlowConfig: TemplateConfig = {
  id: 'organic-flow-01',
  name: 'Organic Flow',
  description: 'A continuous flowing layout with soft geometry and curved surfaces.',
  version: '1.0.0',
  category: 'creative',
  styles: ['flowing', 'organic', 'curved', 'continuous'],
  supportedDomains: ['designers', 'artists', 'creatives', 'studios', 'directors'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['flow', 'geometry', 'soft', 'curved'],
  author: 'System',
};
