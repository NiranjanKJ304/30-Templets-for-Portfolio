import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const folioConfig: TemplateConfig = {
  id: 'folio-01',
  name: 'Folio',
  description: 'A sophisticated collection of pristine professional presentation sheets.',
  version: '1.0.0',
  category: 'minimal',
  styles: ['editorial', 'layered', 'sophisticated', 'professional'],
  supportedDomains: ['architects', 'consultants', 'art directors', 'curators', 'agencies'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['folio', 'sheets', 'presentation', 'editorial', 'layered'],
  author: 'System',
};
