import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const vellumConfig: TemplateConfig = {
  id: 'vellum-01',
  name: 'Vellum',
  description: 'A contemporary professional portfolio presented as a living annotated document.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['annotated', 'literary', 'refined', 'document'],
  supportedDomains: ['writers', 'researchers', 'strategists', 'designers', 'academics'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['annotation', 'margins', 'ink', 'editorial', 'notes'],
  author: 'System',
};
