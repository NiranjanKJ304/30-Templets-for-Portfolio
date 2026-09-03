import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const paperfoldConfig: TemplateConfig = {
  id: 'paperfold-01',
  name: 'Paperfold',
  description: 'A refined dimensional paper-surface portfolio.',
  version: '1.0.0',
  category: 'creative',
  styles: ['editorial', 'paper', 'dimensional', 'clean', 'professional'],
  supportedDomains: ['designers', 'developers', 'engineers', 'researchers', 'creators', 'consultants'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['paperfold', 'paper', 'origami', 'creases', 'layers'],
  author: 'Universal Portfolio Builder',
};
