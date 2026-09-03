import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const chronicleConfig: TemplateConfig = {
  id: 'chronicle-01',
  name: 'Chronicle',
  description: 'A professional portfolio expressed through time using horizontal temporal strata.',
  version: '1.0.0',
  category: 'minimal',
  styles: ['chronological', 'editorial', 'narrative', 'structured'],
  supportedDomains: ['writers', 'academics', 'historians', 'executives', 'researchers'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['chronological', 'history', 'time', 'strata', 'horizontal'],
  author: 'System',
};
