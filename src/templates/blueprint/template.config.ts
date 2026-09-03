import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const blueprintConfig: TemplateConfig = {
  id: 'blueprint-01',
  name: 'Blueprint',
  description: 'A sophisticated architectural drafting and technical drawing inspired portfolio.',
  version: '1.0.0',
  category: 'technical',
  styles: ['technical', 'architectural', 'drafting', 'clean', 'precision'],
  supportedDomains: ['engineers', 'architects', 'developers', 'designers', 'researchers', 'consultants'],
  animationLevel: 'none',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['blueprint', 'technical', 'drafting', 'grid', 'engineering'],
  author: 'Universal Portfolio Builder',
};
