import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const monoformConfig: TemplateConfig = {
  id: 'monoform-01',
  name: 'Monoform',
  description: 'A continuous, quiet, architectural surface carved by negative space.',
  version: '1.0.0',
  category: 'minimal',
  styles: ['monochrome', 'architectural', 'continuous', 'recessed'],
  supportedDomains: ['designers', 'architects', 'engineers', 'minimalists'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['monochrome', 'surface', 'carved', 'continuous'],
  author: 'System',
};
